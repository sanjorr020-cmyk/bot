import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Палитра бренда. Значения дублируются в app/globals.css как CSS-переменные.
        graphite: {
          950: '#0B0F14',
          900: '#111820',
          800: '#18212B',
          700: '#243040',
        },
        ink: {
          DEFAULT: '#E6EAF0',
          muted: '#9AA6B6',
          dim: '#6B778A',
        },
        accent: {
          DEFAULT: '#FF7A00',
          hover: '#FF8F26',
          red: '#E63946',
        },
        steel: {
          DEFAULT: '#2F80ED',
          soft: '#5B9BF2',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-space)', 'var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 0 0 rgba(255,255,255,0.04) inset, 0 12px 40px -16px rgba(0,0,0,0.6)',
        glow: '0 0 0 1px rgba(255,122,0,0.35), 0 10px 40px -10px rgba(255,122,0,0.45)',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'faq-down': {
          from: { height: '0', opacity: '0' },
          to: { height: 'var(--radix-accordion-content-height)', opacity: '1' },
        },
      },
      animation: {
        shimmer: 'shimmer 3s linear infinite',
        'faq-down': 'faq-down 0.25s ease-out',
      },
    },
  },
  plugins: [],
};

export default config;
