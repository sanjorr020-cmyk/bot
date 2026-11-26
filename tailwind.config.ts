import type { Config } from 'tailwindcss';

/**
 * ЕДИНСТВЕННЫЙ источник цветов сайта. Значения дублируются в lib/palette.ts (для OG-картинки)
 * и в app/globals.css (CSS-переменные). Менять только здесь и в этих двух местах.
 */
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        graphite: {
          950: '#141414', // фон страницы
          900: '#1E1E1E', // карточки, формы, шапка
          800: '#1E1E1E',
          700: '#1E1E1E',
        },
        surface: '#1E1E1E',
        line: 'rgba(255,255,255,0.08)', // границы, 1px
        ink: {
          DEFAULT: '#EDEDED', // основной текст
          muted: '#9A9A9A', // второстепенный текст, иконки
          dim: '#9A9A9A',
        },
        accent: {
          DEFAULT: '#FF7A00', // только главные кнопки, цены и ключевые цифры
        },
        wa: '#25D366', // только кнопки WhatsApp
      },
      fontFamily: {
        sans: ['var(--font-manrope)', 'system-ui', 'sans-serif'],
        display: ['var(--font-manrope)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 0 0 rgba(255,255,255,0.04) inset, 0 12px 32px -16px rgba(0,0,0,0.6)',
      },
      keyframes: {
        'faq-down': {
          from: { height: '0', opacity: '0' },
          to: { height: 'var(--radix-accordion-content-height)', opacity: '1' },
        },
        'slice-up': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-101%)' },
        },
        'slice-down': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(101%)' },
        },
        'slide-in-up': {
          from: { transform: 'translateY(110%)' },
          to: { transform: 'translateY(0)' },
        },
      },
      animation: {
        'faq-down': 'faq-down 0.25s ease-out',
        'slice-up': 'slice-up 0.9s cubic-bezier(0.22,1,0.36,1) both',
        'slice-down': 'slice-down 0.9s cubic-bezier(0.22,1,0.36,1) both',
        'slide-in-up': 'slide-in-up 0.6s cubic-bezier(0.22,1,0.36,1) 1s both',
      },
    },
  },
  plugins: [],
};

export default config;
