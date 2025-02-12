'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Footer() {
  const [year, setYear] = useState('');

  useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className="relative z-10 border-t border-greek-gold/20">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {/* Copyright */}
          <div className="text-greek-marble/60 text-sm">
            {year}. All Rights Reserved.
          </div>

          {/* Center Logo */}
          <div className="relative w-16 h-16">
            <Image
              src="/logo.png"
              alt="The Skool of Athens"
              fill
              className="object-contain"
            />
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            {/* Skool Logo */}
            <Link 
              href="https://www.skool.com/athens/about" 
              target="_blank"
              className="text-[22px] font-bold tracking-tight hover:opacity-80 transition-opacity"
            >
              <span className="text-[#4285f4]">s</span>
              <span className="text-[#ea4335]">k</span>
              <span className="text-[#fbbc05]">o</span>
              <span className="text-[#4285f4]">o</span>
              <span className="text-[#34a853]">l</span>
            </Link>

            {/* YouTube */}
            <Link 
              href="https://www.youtube.com/@TheSkoolofAthens" 
              target="_blank"
              className="text-red-500 hover:opacity-80 transition-opacity"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 