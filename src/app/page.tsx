import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Benefits from '@/components/Benefits';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import CalendlyEmbed from '@/components/CalendlyEmbed';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <CalendlyEmbed />
      <Benefits />
      <Testimonials />
      <FAQ />
      <CalendlyEmbed />
    </main>
  );
}
