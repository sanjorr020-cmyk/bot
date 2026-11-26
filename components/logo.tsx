import { siteConfig } from '@/config/site-config';

/** Текстовый логотип с простым знаком. Замените на SVG-логотип владельца, когда будет готов. */
export function Logo({ className }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 font-display text-lg font-bold tracking-tight ${className ?? ''}`}>
      <svg viewBox="0 0 32 32" aria-hidden="true" className="h-8 w-8 shrink-0">
        <rect x="1" y="1" width="30" height="30" rx="8" fill="#111820" stroke="#243040" />
        <path d="M7 22 L7 10 L12 17 L16 11 L20 17 L25 10 L25 22" fill="none" stroke="#FF7A00" strokeWidth="2.6" strokeLinejoin="round" strokeLinecap="round" />
      </svg>
      <span className="text-ink">
        Mit<span className="text-accent">Service</span>
      </span>
      <span className="sr-only">{siteConfig.name}</span>
    </span>
  );
}
