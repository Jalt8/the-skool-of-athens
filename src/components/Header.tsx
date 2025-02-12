'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'backdrop-blur-md bg-dark/80 py-4' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6">
        <nav className="flex items-center justify-between md:justify-around">
          {/* Logo - Desktop Only */}
          <Link href="/" className="relative w-14 h-14 group hidden md:block">
            <Image
              src="/logo.png"
              alt="The Skool of Athens"
              fill
              className="object-contain transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </Link>

          {/* Hamburger Menu Button - Mobile Only */}
          <button 
            className="md:hidden p-2 text-greek-marble hover:text-greek-gold transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center gap-16">
            {[
              { href: '#benefits', label: 'Benefits' },
              { href: '#testimonials', label: 'Success Stories' },
              { href: '#faq', label: 'FAQ' }
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative group"
              >
                <span className="font-serif text-base text-greek-marble/90 hover:text-greek-marble tracking-wide transition-colors duration-300">
                  {link.label}
                </span>
                <span className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-greek-gold/50 to-greek-gold/50 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu */}
          <div className={`
            md:hidden fixed inset-0 bg-dark/95 backdrop-blur-md transition-transform duration-300 z-40
            ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
          `}>
            {/* Close button */}
            <button 
              className="absolute top-6 right-6 p-2 text-greek-marble hover:text-greek-gold transition-colors"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Mobile menu content */}
            <div className="flex flex-col items-center justify-between min-h-screen py-16">
              {/* Logo in mobile menu */}
              <Link href="/" className="relative w-20 h-20 group" onClick={() => setIsMenuOpen(false)}>
                <Image
                  src="/logo.png"
                  alt="The Skool of Athens"
                  fill
                  className="object-contain transition-transform duration-300 group-hover:scale-105"
                  priority
                />
              </Link>

              {/* Navigation Links */}
              <div className="flex flex-col items-center gap-8">
                {[
                  { href: '#benefits', label: 'Benefits' },
                  { href: '#testimonials', label: 'Success Stories' },
                  { href: '#faq', label: 'FAQ' }
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="relative group"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="font-serif text-xl text-greek-marble/90 hover:text-greek-marble tracking-wide transition-colors duration-300">
                      {link.label}
                    </span>
                    <span className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-greek-gold/50 to-greek-gold/50 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </Link>
                ))}
              </div>

              {/* CTA Button in mobile menu */}
              <Link
                href="#book"
                className="group relative overflow-hidden rounded-full bg-greek-gold hover:bg-greek-gold-light transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="relative px-8 py-2.5">
                  <span className="relative z-10 font-serif text-base font-medium text-dark tracking-wide">
                    Book Your Call
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-greek-gold-light to-greek-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </Link>
            </div>
          </div>

          {/* CTA Button - Desktop Only */}
          <Link
            href="#book"
            className="hidden md:block group relative overflow-hidden rounded-full bg-greek-gold hover:bg-greek-gold-light transition-all duration-300"
          >
            <div className="relative px-8 py-2.5">
              <span className="relative z-10 font-serif text-base font-medium text-dark tracking-wide">
                Book Your Call
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-greek-gold-light to-greek-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </Link>
        </nav>
      </div>

      {/* Bottom gradient line - changes based on scroll state */}
      <div className={`h-px bg-gradient-to-r from-transparent via-greek-gold/50 to-transparent transition-opacity duration-300 ${
        isScrolled ? 'opacity-30' : 'opacity-100'
      }`}></div>
    </header>
  );
} 