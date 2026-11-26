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
          dim: '#8A96A8',
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
        glow: '0 1px 0 0 rgba(255,255,255,0.08) inset, 0 8px 24px -12px rgba(0,0,0,0.6)',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'slide-in-up': {
          from: { transform: 'translateY(110%)' },
          to: { transform: 'translateY(0)' },
        },
        'slice-up': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-101%)' },
        },
        'slice-down': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(101%)' },
        },
        'faq-down': {
          from: { height: '0', opacity: '0' },
          to: { height: 'var(--radix-accordion-content-height)', opacity: '1' },
        },
      },
      animation: {
        shimmer: 'shimmer 3s linear infinite',
        'faq-down': 'faq-down 0.25s ease-out',
        'slice-up': 'slice-up 0.9s cubic-bezier(0.22,1,0.36,1) both',
        'slide-in-up': 'slide-in-up 0.6s cubic-bezier(0.22,1,0.36,1) 1s both',
        'slice-down': 'slice-down 0.9s cubic-bezier(0.22,1,0.36,1) both',
      },
    },
  },
  plugins: [],
};

export default config;
