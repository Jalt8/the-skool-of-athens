'use client';

import { useEffect, useState } from 'react';

export default function CalendlyEmbed() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      setIsLoading(false);
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="book" className="container mx-auto px-4 py-16">
      {/* CTA Title */}
      <h2 className="font-serif text-4xl md:text-5xl text-center mb-12">
        Schedule Your{' '}
        <span className="text-greek-gold">Consultation Call</span>
      </h2>

      <div className="framer-8qz2ey-container" style={{ willChange: 'transform', opacity: 1, transform: 'perspective(1200px) scale(0.9)' }}>
        <div style={{ position: 'relative', width: '100%', minHeight: isLoading ? '200px' : 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div className="calendly-inline-widget w-full h-full bg-dark-100/80 backdrop-blur-sm border border-greek-gold/20 relative" data-auto-load="false">
            {isLoading && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-dark-100/95 backdrop-blur-sm">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-greek-gold animate-bounce [animation-delay:0ms]"></div>
                  <div className="w-3 h-3 rounded-full bg-greek-gold animate-bounce [animation-delay:150ms]"></div>
                  <div className="w-3 h-3 rounded-full bg-greek-gold animate-bounce [animation-delay:300ms]"></div>
                </div>
                <p className="mt-4 text-greek-gold font-serif">Loading Calendar...</p>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-greek-gold/20 to-transparent"></div>
              </div>
            )}
            <iframe
              src="https://calendly.com/androkoen/consultation-call?embed_domain=www.theskoolofathens.com&embed_type=Inline&hide_landing_page_details=1&hide_gdpr_banner=1"
              style={{ minHeight: '800px', width: '100%', border: 'none' }}
              frameBorder="0"
              title="Schedule a consultation call"
              className="rounded-lg"
              onLoad={() => setIsLoading(false)}
            />
          </div>
        </div>
      </div>
    </section>
  );
}