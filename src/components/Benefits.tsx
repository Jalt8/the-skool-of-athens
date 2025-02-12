'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

const benefits = [
  {
    category: 'WEALTH',
    title: 'Market Dynamics & Economics',
    description: 'Gain a deep understanding of market supply & demand to spot trends, evaluate opportunities, & position yourself in a different league from your competition.',
    image: '/Rwch1WKCy3mrkm1uKieDB8NlaY.webp'
  },
  {
    category: 'WEALTH',
    title: 'Crafting Irresistible Offers',
    description: 'Learn step-by-step how to create & position high-value offers that attract premium, high-ticket clients, & stand out in competitive markets.',
    image: '/94EBq9Df3sGYsC1V1tT6n9lk.webp'
  },
  {
    category: 'WEALTH',
    title: 'Sales Mastery',
    description: 'Develop elite-level sales skills, from handling objections to closing deals confidently on Zoom from anywhere in the world.',
    image: '/qcQXSoNATKhGWOavjXkgoY2M.webp'
  },
  {
    category: 'WEALTH',
    title: 'Outbound Systems That Scale',
    description: 'Build efficient, repeatable outbound processes that generate consistent leads & booked appointments without constant manual labour.',
    image: '/0PbzKgqVud86TD3aRRsBZhDeYTo.webp'
  },
  {
    category: 'WEALTH',
    title: 'Scaling Strategies',
    description: "Discover the exact frameworks we used to scale, whether through client acquisition, increasing client value (LTV), or optimizing systems.",
    image: '/6MZ36dDdSxJA93i0q9i06JIXYis.png'
  },
  {
    category: 'WEALTH',
    title: 'Service Delivery Excellence',
    description: "Learn how to consistently deliver exceptional results for clients, ensuring retention, referrals, & a stellar reputation.",
    image: '/0bytOeylLuuOfJLqjpJcc6R2LI.png'
  },
  {
    category: 'WEALTH',
    title: 'Time, Location, & Financial Freedom',
    description: 'Build a business that supports the freedom to work when, where, & how you want while making more money than you know what to do with.',
    image: '/z3yKwFUg24Xo9nCrEOdjaHX437o.png'
  },
  {
    category: 'HEALTH',
    title: 'Entrepreneurial Biohacking',
    description: 'Learn science-backed strategies to enhance your physical & mental performance, ensuring you\'re always operating at your peak.',
    image: '/MMEpywHhOuLAJFlhiFqkZf7V6GU.png'
  },
  {
    category: 'HEALTH',
    title: 'Energy Management',
    description: 'Discover how the right diet, exercise, & recovery routines boost your energy levels, so you can channel that vitality into scaling your business & stack cash.',
    image: '/R2NVfwEfFO9ChiEq7VT3x0GXk.png'
  },
  {
    category: 'HEALTH',
    title: 'Mental Clarity & Stress Resilience',
    description: 'Build habits & routines to reduce stress, sharpen focus, & enhance mental clarity, giving you the edge to make smarter decisions without the burnout that comes with running a business.',
    image: '/r9IyL8DFNpR7rabGyZUgdTigKEo.png'
  }
];

export default function Benefits() {
  const benefitsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      }
    );

    const benefitElements = document.querySelectorAll('.benefit-card');
    benefitElements.forEach((el) => observer.observe(el));

    return () => {
      benefitElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="benefits" className="py-20">
      <div className="container max-w-5xl mx-auto px-4">
        <div className="mb-24 text-center">
          <div className="relative inline-flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-greek-gold/30 to-transparent"></div>
            <span className="text-sm font-serif tracking-wide text-greek-marble/80 uppercase">Benefits</span>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-greek-gold/30 to-transparent"></div>
          </div>
          
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6">
            Here's The Value You'll Receive After Our{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-greek-gold via-greek-gold-light to-greek-gold bg-clip-text text-transparent">
                Consultation Call
              </span>
              <div className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-greek-gold/30 to-transparent"></div>
            </span>
          </h2>
        </div>

        <div className="benefits-container" ref={benefitsRef}>
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="benefit-card group relative overflow-hidden rounded-2xl transition-all duration-500"
              style={{ 
                transitionDelay: `${index * 150}ms`,
                zIndex: benefits.length - index
              }}
            >
              <div className="flex flex-col md:flex-row md:items-center min-h-[200px]">
                <div className="relative p-8 md:p-10 flex-1 card-content">
                  <div className="category-badge mb-3">
                    <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider rounded-md bg-dark text-greek-gold">
                      {benefit.category}
                    </span>
                  </div>
                  <div className="title-wrapper">
                    <h3 className="flex items-center gap-2 mb-4 font-serif text-2xl text-dark">
                      {benefit.title}
                      <svg className="w-5 h-5 text-greek-gold" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </h3>
                  </div>
                  <p className="description leading-relaxed max-w-2xl text-dark-300">{benefit.description}</p>
                </div>
                <div className="relative w-full md:w-1/3 h-48 md:h-[240px]">
                  <Image
                    src={benefit.image}
                    alt={benefit.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover rounded-r-2xl"
                    priority={index < 2}
                  />
                  <div className="absolute inset-0 rounded-r-2xl">
                    <div className="absolute inset-0 bg-gradient-to-r from-white via-white/50 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-transparent to-transparent" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 