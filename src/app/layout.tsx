import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import ScrollProgress from "./scroll-progress-component";
import VapiAssistant from '@/components/VapiAssistant';
import Footer from '@/components/Footer';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Skool of Athens - Sign High-Ticket Clients Working From Anywhere",
  description: "Learn how to charge business owners $1,000 - $10,000 per month working from anywhere in the world, without burnout and working long hours.",
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        sizes: 'any',
      },
      {
        url: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        url: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      }
    ],
    apple: [
      {
        url: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased text-white relative min-h-screen overflow-x-hidden selection:bg-greek-gold/30 selection:text-white`}
        suppressHydrationWarning
      >
        {/* Layered background effects */}
        <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.03)_0%,rgba(10,10,10,1)_100%)]" />
        <div className="fixed inset-0 bg-dark opacity-95" />
        <div className="fixed inset-0 bg-noise mix-blend-soft-light opacity-20" />
        <div className="fixed inset-0 bg-column-texture opacity-5 mix-blend-overlay" />
        
        {/* Simple top border */}
        <div className="fixed top-0 left-0 right-0 z-[60]">
          <div className="h-px bg-gradient-to-r from-transparent via-greek-gold to-transparent" />
        </div>

        {/* Content wrapper with enhanced architectural elements */}
        <div className="relative min-h-screen">
          {/* Left column - now overlay */}
          <div className="fixed left-0 top-0 bottom-0 w-24 z-[70] pointer-events-none">
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-greek-pattern opacity-10 bg-repeat-y bg-[length:96px_auto] bg-left" />
              <div className="absolute inset-0 bg-gradient-to-r from-dark to-transparent" />
            </div>
            {/* Ionic column detail */}
            <div className="absolute top-0 right-0 h-full w-8">
              <div className="absolute top-16 bottom-16 w-px left-1/2 bg-gradient-to-b from-greek-gold/30 via-greek-gold/10 to-greek-gold/30">
                <div className="absolute -left-1 top-0 w-3 h-3 rounded-full border border-greek-gold/30" />
                <div className="absolute -left-1 bottom-0 w-3 h-3 rounded-full border border-greek-gold/30" />
              </div>
            </div>
          </div>

          {/* Right column - now overlay */}
          <div className="fixed right-0 top-0 bottom-0 w-24 z-[70] pointer-events-none">
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-greek-pattern opacity-10 bg-repeat-y bg-[length:96px_auto] bg-right" />
              <div className="absolute inset-0 bg-gradient-to-l from-dark to-transparent" />
            </div>
            {/* Ionic column detail */}
            <div className="absolute top-0 left-0 h-full w-8">
              <div className="absolute top-16 bottom-16 w-px left-1/2 bg-gradient-to-b from-greek-gold/30 via-greek-gold/10 to-greek-gold/30">
                <div className="absolute -left-1 top-0 w-3 h-3 rounded-full border border-greek-gold/30" />
                <div className="absolute -left-1 bottom-0 w-3 h-3 rounded-full border border-greek-gold/30" />
              </div>
            </div>
          </div>

          {/* Main content */}
          <main className="relative z-20">
            {children}
          </main>

          {/* Footer */}
          <Footer />
        </div>

        {/* Simple bottom border */}
        <div className="fixed bottom-0 left-0 right-0 z-[60]">
          <div className="h-px bg-gradient-to-r from-transparent via-greek-gold to-transparent" />
        </div>

        {/* Add VapiAssistant component */}
        <VapiAssistant />
        
        {/* Scroll progress indicator */}
        <ScrollProgress />
      </body>
    </html>
  );
}
