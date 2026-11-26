'use client';

import { useEffect, useState } from 'react';
import { Menu, Phone, X } from 'lucide-react';
import { siteConfig } from '@/config/site-config';
import { Logo } from './logo';
import { TrackedLink } from './ui/tracked-link';
import { btnPrimary } from './ui/styles';
import { Container } from './ui/section';

const navItems = [
  { href: '#services', label: 'Услуги' },
  { href: '#prices', label: 'Цены' },
  { href: '#cases', label: 'Кейсы' },
  { href: '#process', label: 'Как работаем' },
  { href: '#reviews', label: 'Отзывы' },
  { href: '#contacts', label: 'Контакты' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || open ? 'border-line bg-graphite-950 ' : 'border-transparent bg-graphite-950 '
      }`}
    >
      <Container className="flex h-16 items-center justify-between gap-4">
        <a href="#top" aria-label={`${siteConfig.name} — на главную`} className="rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
          <Logo />
        </a>

        <nav aria-label="Основная навигация" className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-ink-muted transition-colors hover:text-ink">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <TrackedLink
            href={`tel:${siteConfig.phone.href}`}
            event="phone"
            location="header"
            className="hidden items-center gap-2 text-sm font-medium text-ink transition-colors hover:text-ink-muted xl:inline-flex"
          >
            <Phone className="h-4 w-4 text-ink" aria-hidden="true" />
            {siteConfig.phone.display}
          </TrackedLink>
          <a href="#estimate" className={`${btnPrimary} hidden px-4 py-2.5 sm:inline-flex`}>
            Записаться
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-line text-ink lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </Container>

      {open && (
        <nav id="mobile-nav" aria-label="Мобильное меню" className="border-t border-line bg-graphite-950 lg:hidden">
          <Container className="flex flex-col py-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-3 text-base text-ink-muted hover:bg-line hover:text-ink"
              >
                {item.label}
              </a>
            ))}
            <TrackedLink
              href={`tel:${siteConfig.phone.href}`}
              event="phone"
              location="header_menu"
              className="mt-2 inline-flex items-center gap-2 px-2 py-3 font-medium text-ink"
            >
              <Phone className="h-4 w-4 text-ink" aria-hidden="true" />
              {siteConfig.phone.display}
            </TrackedLink>
          </Container>
        </nav>
      )}
    </header>
  );
}
