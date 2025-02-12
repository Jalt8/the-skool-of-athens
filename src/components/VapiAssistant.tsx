'use client';

import { useEffect, useRef, useState } from 'react';
import Vapi from '@vapi-ai/web';

declare global {
  interface Window {
    vapiSDK: typeof Vapi | undefined;
  }
}

const MAX_CALL_DURATION = 10 * 60 * 1000; // 10 minutes in milliseconds
const MAX_CALLS_PER_HOUR = 3;

// Helper functions for localStorage
const isBrowser = typeof window !== 'undefined';

const getVisitorCallHistory = () => {
  if (!isBrowser) return [];
  
  try {
    const history = localStorage.getItem('vapiCallHistory');
    return history ? JSON.parse(history) : [];
  } catch {
    return [];
  }
};

const saveVisitorCallHistory = (history: number[]) => {
  if (!isBrowser) return;
  
  try {
    localStorage.setItem('vapiCallHistory', JSON.stringify(history));
  } catch (error) {
    console.error('Error saving call history:', error);
  }
};

export default function VapiAssistant() {
  const vapiRef = useRef<Vapi | null>(null);
  const [isCallActive, setIsCallActive] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volumeLevel, setVolumeLevel] = useState(0);
  const [remainingCallTime, setRemainingCallTime] = useState<number>(MAX_CALL_DURATION);
  const callTimerRef = useRef<NodeJS.Timeout | null>(null);
  const callHistoryRef = useRef<number[]>(getVisitorCallHistory());
  const callDurationTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Format time in MM:SS format
  const formatTime = (ms: number) => {
    const seconds = Math.max(0, Math.floor(ms / 1000));
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  // Start call duration countdown
  const startCallDurationTimer = () => {
    const startTime = Date.now();
    const endTime = startTime + MAX_CALL_DURATION;
    setRemainingCallTime(MAX_CALL_DURATION);
    
    const updateTimer = () => {
      const now = Date.now();
      const remaining = endTime - now;
      
      if (remaining <= 0) {
        setRemainingCallTime(0);
        return;
      }
      
      setRemainingCallTime(remaining);
      callDurationTimerRef.current = setTimeout(updateTimer, 1000);
    };

    callDurationTimerRef.current = setTimeout(updateTimer, 1000);
  };

  // Clean up call duration timer
  const cleanupCallDurationTimer = () => {
    if (callDurationTimerRef.current) {
      clearTimeout(callDurationTimerRef.current);
      callDurationTimerRef.current = null;
    }
  };

  // Check if user has exceeded hourly limit
  const hasExceededHourlyLimit = () => {
    const now = Date.now();
    const oneHourAgo = now - (60 * 60 * 1000);
    
    // Remove calls older than 1 hour
    const updatedHistory = callHistoryRef.current.filter(time => time > oneHourAgo);
    callHistoryRef.current = updatedHistory;
    saveVisitorCallHistory(updatedHistory);
    
    return updatedHistory.length >= MAX_CALLS_PER_HOUR;
  };

  useEffect(() => {
    // Initialize Vapi instance
    const apiKey = process.env.NEXT_PUBLIC_VAPI_KEY;
    console.log('Initializing Vapi with key:', apiKey ? 'Key exists' : 'No key found');
    
    try {
      vapiRef.current = new Vapi(apiKey || '');
      console.log('Vapi instance created:', vapiRef.current ? 'Success' : 'Failed');

      // Set up event listeners
      if (vapiRef.current) {
        vapiRef.current.on('call-start', () => {
          console.log('Call started');
          setIsCallActive(true);
          
          // Record call start time and save to localStorage
          const updatedHistory = [...callHistoryRef.current, Date.now()];
          callHistoryRef.current = updatedHistory;
          saveVisitorCallHistory(updatedHistory);
          
          // Start call duration countdown
          startCallDurationTimer();
          
          // Set maximum call duration timer
          callTimerRef.current = setTimeout(() => {
            if (vapiRef.current) {
              vapiRef.current.stop();
              console.log('Call ended due to duration limit');
            }
          }, MAX_CALL_DURATION);
        });

        vapiRef.current.on('call-end', () => {
          console.log('Call ended');
          setIsCallActive(false);
          
          // Clear call timer if it exists
          if (callTimerRef.current) {
            clearTimeout(callTimerRef.current);
            callTimerRef.current = null;
          }
          
          // Clear call duration timer
          cleanupCallDurationTimer();
        });

        vapiRef.current.on('speech-start', () => {
          console.log('Assistant started speaking - Check if you can hear audio');
        });

        vapiRef.current.on('speech-end', () => {
          console.log('Assistant stopped speaking');
        });

        vapiRef.current.on('volume-level', (volume) => {
          console.log('Audio volume level:', volume);
          setVolumeLevel(volume);
        });

        vapiRef.current.on('message', (message) => {
          console.log('Received message:', message);
        });

        vapiRef.current.on('error', (error) => {
          console.error('Vapi error:', error);
        });
      }
    } catch (error) {
      console.error('Error initializing Vapi:', error);
    }

    // Cleanup function
    return () => {
      if (callTimerRef.current) {
        clearTimeout(callTimerRef.current);
      }
      cleanupCallDurationTimer();
      if (vapiRef.current) {
        try {
          vapiRef.current.stop();
          console.log('Vapi instance cleaned up');
        } catch (error) {
          console.error('Error cleaning up Vapi:', error);
        }
      }
    };
  }, []);

  const startCall = async () => {
    // Check hourly limit
    if (hasExceededHourlyLimit()) {
      console.log(`You've reached the maximum limit of ${MAX_CALLS_PER_HOUR} calls per hour`);
      return;
    }

    console.log('Start call button clicked');
    try {
      if (!vapiRef.current) {
        console.error('Vapi instance not initialized');
        return;
      }

      console.log('Starting call with Vapi...');
      await vapiRef.current.start(process.env.NEXT_PUBLIC_VAPI_ASSISTANT_ID);
      console.log('Call started successfully');
    } catch (error) {
      console.error('Error starting call:', error);
      if (error instanceof Error) {
        console.error('Error details:', {
          message: error.message,
          stack: error.stack,
          name: error.name
        });
      }
    }
  };

  const stopCall = () => {
    if (vapiRef.current) {
      vapiRef.current.stop();
    }
  };

  const toggleMute = () => {
    if (vapiRef.current) {
      const newMutedState = !isMuted;
      vapiRef.current.setMuted(newMutedState);
      setIsMuted(newMutedState);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <div className="flex flex-col items-end gap-4">
        {/* Call duration and volume indicators */}
        {isCallActive && (
          <div className="flex flex-col gap-2 bg-dark-100/90 backdrop-blur-sm rounded-lg p-2 border border-greek-gold/20">
            {/* Call duration */}
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-greek-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div className="text-sm text-greek-marble/80">
                {formatTime(remainingCallTime)}
              </div>
            </div>
            {/* Volume bar */}
            <div className="h-1 w-24 bg-dark-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-greek-gold transition-all duration-150"
                style={{ width: `${volumeLevel * 100}%` }}
              />
            </div>
          </div>
        )}
        
        {/* Control buttons */}
        <div className="flex items-center gap-2">
          {isCallActive && (
            <button
              onClick={toggleMute}
              className={`p-3 rounded-full transition-all duration-300 ${
                isMuted 
                  ? 'bg-red-500/90 hover:bg-red-600/90' 
                  : 'bg-dark-100/90 hover:bg-dark-200/90'
              } backdrop-blur-sm border border-greek-gold/20`}
            >
              {isMuted ? (
                <MicOffIcon className="w-5 h-5 text-white" />
              ) : (
                <MicIcon className="w-5 h-5 text-white" />
              )}
            </button>
          )}
          
          <button
            onClick={isCallActive ? stopCall : startCall}
            disabled={hasExceededHourlyLimit()}
            className={`group relative overflow-hidden rounded-full p-4 transition-all duration-300 ${
              hasExceededHourlyLimit()
                ? 'bg-greek-gold/50 cursor-not-allowed'
                : 'bg-greek-gold hover:bg-greek-gold-light'
            }`}
            title={isCallActive ? "End AI Call" : "Start AI Call"}
          >
            {isCallActive ? (
              <PhoneOffIcon className="w-6 h-6 text-dark" />
            ) : (
              <PhoneIcon className="w-6 h-6 text-dark" />
            )}
            <div className="absolute inset-0 rounded-full border border-greek-gold/50 scale-110 group-hover:animate-ping" />
          </button>
        </div>
      </div>
    </div>
  );
}

// Icons
function PhoneIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" strokeWidth="1.5" />
      <path d="M12 6c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2s2-.9 2-2V8c0-1.1-.9-2-2-2z" strokeWidth="1.5" />
      <path d="M9 14c0 1.66 1.34 3 3 3s3-1.34 3-3" strokeWidth="1.5" />
      <path d="M15 11c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1z" strokeWidth="1.5" />
      <path d="M9 11c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1z" strokeWidth="1.5" />
    </svg>
  );
}

function PhoneOffIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" strokeWidth="1.5" />
      <path d="M15 9l-6 6" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M9 9l6 6" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function MicIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
    </svg>
  );
}

function MicOffIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
    </svg>
  );
} 