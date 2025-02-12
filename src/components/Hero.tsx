import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-24">
      {/* Background layers */}
      <div className="absolute inset-0">
        {/* Main background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/school-of-athens.png"
            alt=""
            fill
            className="object-cover object-center scale-110"
            sizes="100vw"
            priority
            quality={90}
          />
        </div>
        {/* Overlay gradients - reduced opacity */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/70 to-dark/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/70 to-transparent" />
        {/* Texture overlay */}
        <div className="absolute inset-0 bg-noise mix-blend-soft-light opacity-20" />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-dark-100/80 backdrop-blur-sm border border-greek-gold/20 mb-6 md:mb-8">
            <span className="text-xs md:text-sm font-medium text-greek-marble/90">Agency Owners</span>
          </div>

          {/* Main heading */}
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight mb-4 md:mb-6">
            You're One Step Away From Learning How You Can{' '}
            <span className="text-greek-gold">Charge Business Owners</span>{' '}
            <div className="text-greek-gold">$1,000 - $10,000</div>{' '}
            Per Month Working From{' '}
            <div className="text-greek-gold">Anywhere In The World.</div>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-greek-marble/80 mb-8 md:mb-12 px-2 md:px-0">
            Without Burnout And Working Long Hours.
          </p>
          
          {/* Video container - now wider */}
          <div className="relative mx-auto aspect-video w-full md:max-w-5xl -mx-4 md:mx-auto md:rounded-lg">
            <div className="relative h-full overflow-hidden md:rounded-lg bg-dark-100/80 backdrop-blur-sm">
              <iframe 
                src="https://fast.wistia.net/embed/iframe/kekmazrt6z?web_component=true&seo=true&videoFoam=false" 
                title="FInalVSL Video" 
                allow="autoplay; fullscreen" 
                frameBorder="0" 
                scrolling="no" 
                className="wistia_embed w-full h-full"
                name="wistia_embed"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 