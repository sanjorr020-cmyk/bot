import type { Metadata, Viewport } from 'next';
import { Manrope } from 'next/font/google';
import { siteConfig } from '@/config/site-config';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { MobileCta } from '@/components/mobile-cta';
import { FloatingWhatsapp } from '@/components/floating-whatsapp';
import { JsonLd } from '@/components/json-ld';
import { AnalyticsScripts } from '@/components/analytics-scripts';
import { palette } from '@/lib/palette';
import './globals.css';

// Один шрифт с кириллицей: Manrope, веса 400 (текст), 500 (кнопки), 700 (заголовки).
const manrope = Manrope({ subsets: ['latin', 'cyrillic'], weight: ['400', '500', '700'], display: 'swap', variable: '--font-manrope' });

const title = 'Автосервис в Астане: диагностика и ремонт авто | MitService';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: title,
    template: '%s | MitService',
  },
  description: siteConfig.description,
  keywords: [
    'автосервис Астана',
    'компьютерная диагностика Астана',
    'ремонт генератора Астана',
    'ремонт Mitsubishi Астана',
    'ремонт стартера Астана',
    'ремонт ходовой Астана',
    'автоэлектрик Астана',
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  // Казахская версия появится позже: тогда добавьте alternates.languages.
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: siteConfig.locale,
    url: '/',
    siteName: siteConfig.name,
    title,
    description: siteConfig.description,
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  formatDetection: { telephone: true },
  other: {
    'geo.region': 'KZ-AST',
    'geo.placename': 'Астана',
  },
};

export const viewport: Viewport = {
  themeColor: palette.bg,
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={siteConfig.language} className={manrope.variable}>
      <body className="min-h-screen bg-graphite-950 font-sans text-ink antialiased">
        <a
          href="#main"
          className="sr-only z-[100] rounded-lg bg-accent px-4 py-2 text-graphite-950 focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Перейти к содержимому
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <MobileCta />
        <FloatingWhatsapp />
        <JsonLd />
        <AnalyticsScripts />
      </body>
    </html>
  );
}
