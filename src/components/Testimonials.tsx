'use client';

import { useEffect } from 'react';
import Image from 'next/image';

interface VideoTestimonial {
  id: number;
  wistiaId: string;
  name: string;
  title: string;
  isVertical: boolean;
}

const testimonials: VideoTestimonial[] = [
  {
    id: 1,
    wistiaId: '59ol3qm7pe',
    name: 'Or Yam Bisset',
    title: 'Student Success Story',
    isVertical: true
  },
  {
    id: 2,
    wistiaId: 'e99vc82px8',
    name: 'Yanda',
    title: 'Student Success Story',
    isVertical: true
  },
  {
    id: 3,
    wistiaId: 'jibls23xd8',
    name: 'Lengelo',
    title: 'Student Success Story',
    isVertical: true
  },
  {
    id: 4,
    wistiaId: 'zps0p9kf6j',
    name: 'Brandon Banda',
    title: 'Student Success Story',
    isVertical: true
  },
  {
    id: 5,
    wistiaId: 'zd5accjhf2',
    name: 'Ruan Lategan',
    title: 'Featured Success Story',
    isVertical: false
  }
];

const imageTestimonials = [
  '/testimonial-1.png',
  '/testimonial-2.png',
  '/testimonial-3.png',
  '/testimonial-4.png',
  '/testimonial-5.png',
  '/testimonial-6.png'
];

export default function Testimonials() {
  // Load Wistia script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//fast.wistia.com/assets/external/E-v1.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-greek-gold/30 to-transparent"></div>
            <span className="text-sm font-serif tracking-wide text-greek-marble/80 uppercase">Success Stories</span>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-greek-gold/30 to-transparent"></div>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl mb-6">
            See What Our{' '}
            <span className="text-greek-gold">Students Have Achieved</span>
          </h2>
          <p className="text-greek-marble/70 max-w-2xl mx-auto">
            Real results from real students who took action and transformed their lives through our program.
          </p>
        </div>

        {/* Vertical Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {testimonials.slice(0, 4).map((testimonial) => (
            <div
              key={testimonial.id}
              className="group relative overflow-hidden rounded-2xl bg-dark-100/80 backdrop-blur-sm border border-greek-gold/20 transition-all duration-300"
            >
              <div className="relative w-full">
                <div className="wistia_responsive_padding" style={{ padding: '177.78% 0 0 0', position: 'relative' }}>
                  <div className="wistia_responsive_wrapper" style={{ height: '100%', left: 0, position: 'absolute', top: 0, width: '100%' }}>
                    <div className={`wistia_embed wistia_async_${testimonial.wistiaId} videoFoam=true`} style={{ height: '100%', position: 'relative', width: '100%' }}>&nbsp;</div>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-serif text-lg text-greek-marble">{testimonial.name}</h3>
                <p className="text-sm text-greek-marble/60">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Horizontal Video */}
        <div className="relative w-full max-w-3xl mx-auto">
          <div className="group relative overflow-hidden rounded-2xl bg-dark-100/80 backdrop-blur-sm border border-greek-gold/20 transition-all duration-300">
            <div className="relative w-full">
              <div className="wistia_responsive_padding" style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                <div className="wistia_responsive_wrapper" style={{ height: '100%', left: 0, position: 'absolute', top: 0, width: '100%' }}>
                  <div className={`wistia_embed wistia_async_${testimonials[4].wistiaId} videoFoam=true`} style={{ height: '100%', position: 'relative', width: '100%' }}>&nbsp;</div>
                </div>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-serif text-lg text-greek-marble">{testimonials[4].name}</h3>
              <p className="text-sm text-greek-marble/60">{testimonials[4].title}</p>
            </div>
          </div>
        </div>

        {/* Image Testimonials Grid */}
        <div className="mt-24 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* First two images */}
            <div className="relative overflow-hidden rounded-2xl bg-dark-100/80 backdrop-blur-sm border border-greek-gold/20 transition-all duration-300 hover:border-greek-gold/40 hover:shadow-lg hover:shadow-greek-gold/5">
              <Image
                src={imageTestimonials[0]}
                alt="Testimonial 1"
                width={600}
                height={300}
                className="w-full h-auto"
                priority
                quality={95}
              />
            </div>
            <div className="relative overflow-hidden rounded-2xl bg-dark-100/80 backdrop-blur-sm border border-greek-gold/20 transition-all duration-300 hover:border-greek-gold/40 hover:shadow-lg hover:shadow-greek-gold/5">
              <Image
                src={imageTestimonials[1]}
                alt="Testimonial 2"
                width={600}
                height={300}
                className="w-full h-auto"
                priority
                quality={95}
              />
            </div>
            
            {/* Full-width third image */}
            <div className="md:col-span-2 relative overflow-hidden rounded-2xl bg-dark-100/80 backdrop-blur-sm border border-greek-gold/20 transition-all duration-300 hover:border-greek-gold/40 hover:shadow-lg hover:shadow-greek-gold/5">
              <Image
                src={imageTestimonials[2]}
                alt="Testimonial 3"
                width={1200}
                height={600}
                className="w-full h-auto"
                quality={95}
              />
            </div>
            
            {/* Fourth and fifth images */}
            <div className="relative overflow-hidden rounded-2xl bg-dark-100/80 backdrop-blur-sm border border-greek-gold/20 transition-all duration-300 hover:border-greek-gold/40 hover:shadow-lg hover:shadow-greek-gold/5">
              <Image
                src={imageTestimonials[3]}
                alt="Testimonial 4"
                width={600}
                height={300}
                className="w-full h-auto"
                quality={95}
              />
            </div>
            <div className="relative overflow-hidden rounded-2xl bg-dark-100/80 backdrop-blur-sm border border-greek-gold/20 transition-all duration-300 hover:border-greek-gold/40 hover:shadow-lg hover:shadow-greek-gold/5">
              <Image
                src={imageTestimonials[4]}
                alt="Testimonial 5"
                width={600}
                height={300}
                className="w-full h-auto"
                quality={95}
              />
            </div>

            {/* Full-width sixth image */}
            <div className="md:col-span-2 relative overflow-hidden rounded-2xl bg-dark-100/80 backdrop-blur-sm border border-greek-gold/20 transition-all duration-300 hover:border-greek-gold/40 hover:shadow-lg hover:shadow-greek-gold/5">
              <Image
                src={imageTestimonials[5]}
                alt="Testimonial 6"
                width={1200}
                height={600}
                className="w-full h-auto"
                quality={95}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 