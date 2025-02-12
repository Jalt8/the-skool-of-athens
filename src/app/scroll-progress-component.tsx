'use client';

import { useEffect } from 'react';
import { initScrollProgress } from './scroll-progress';

export default function ScrollProgress() {
  useEffect(() => {
    return initScrollProgress();
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-50">
      <div className="scroll-progress-bar h-full bg-gradient-to-r from-greek-gold via-greek-gold-light to-greek-gold" />
    </div>
  );
} 