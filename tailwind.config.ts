import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
        serif: ["var(--font-playfair)"],
      },
      colors: {
        primary: "#D4AF37", // Royal gold
        greek: {
          gold: {
            light: "#F4D03F",
            DEFAULT: "#D4AF37",
            dark: "#996515"
          },
          marble: {
            light: "#FFFFFF",
            DEFAULT: "#F5F3F0",
            dark: "#E5E3E0"
          },
          stone: {
            light: "#9B9B93",
            DEFAULT: "#8B8B83",
            dark: "#7B7B73"
          },
          terra: {
            light: "#854E3D",
            DEFAULT: "#753E2D",
            dark: "#652E1D"
          },
          bronze: {
            light: "#DD8F42",
            DEFAULT: "#CD7F32",
            dark: "#BD6F22"
          }
        },
        dark: {
          DEFAULT: "#0A0A0A",
          100: "#1A1A1A",
          200: "#2A2A2A",
          300: "#3A3A3A",
        },
      },
      container: {
        center: true,
        padding: "1.5rem",
        screens: {
          "2xl": "1400px",
        },
      },
      backgroundImage: {
        'greek-pattern': "url('/patterns/greek-pattern.png')",
        'greek-meander': "url('/patterns/greek-meander.png')",
        'column-texture': "url('/patterns/column-texture.png')",
        'marble-texture': "url('/patterns/marble-texture.png')",
        'laurel-left': "url('/patterns/laurel-left.png')",
        'laurel-right': "url('/patterns/laurel-right.png')",
        'ionic-capital': "url('/patterns/ionic-capital.png')",
        'ionic-base': "url('/patterns/ionic-base.png')",
        'acanthus': "url('/patterns/acanthus.png')",
        'olive-branch': "url('/patterns/olive-branch.png')",
      },
      boxShadow: {
        'greek': '0 4px 20px -2px rgba(212, 175, 55, 0.1)',
        'greek-hover': '0 8px 30px -4px rgba(212, 175, 55, 0.2)',
        'greek-inner': 'inset 0 2px 4px 0 rgba(212, 175, 55, 0.06)',
      },
      animation: {
        'gradient': 'gradient 15s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'shine': 'shine 1.5s ease-in-out infinite',
        'fade-in': 'fade-in 0.5s ease-out',
        'fade-out': 'fade-out 0.5s ease-in',
        'slide-in': 'slide-in 0.5s ease-out',
        'slide-out': 'slide-out 0.5s ease-in',
        'bounce-slow': 'bounce 3s ease-in-out infinite',
      },
      keyframes: {
        'gradient': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'shine': {
          '0%': { backgroundPosition: '200% center' },
          '100%': { backgroundPosition: '-200% center' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-out': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        'slide-in': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'slide-out': {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(-20px)', opacity: '0' },
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: 'var(--foreground)',
            h1: {
              fontFamily: 'var(--font-playfair)',
              color: '#F5F3F0',
            },
            h2: {
              fontFamily: 'var(--font-playfair)',
              color: '#F5F3F0',
            },
            h3: {
              fontFamily: 'var(--font-playfair)',
              color: '#F5F3F0',
            },
            strong: {
              color: '#D4AF37',
            },
            a: {
              color: '#D4AF37',
              '&:hover': {
                color: '#F4D03F',
              },
            },
          },
        },
      },
      borderWidth: {
        '3': '3px',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      opacity: {
        '15': '0.15',
      },
      scale: {
        '98': '0.98',
      },
      transitionDuration: {
        '400': '400ms',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    animate,
  ],
};

export default config;
