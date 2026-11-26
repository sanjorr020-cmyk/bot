import { Phone, MessageCircle, CalendarCheck } from 'lucide-react';
import { siteConfig, whatsappLink } from '@/config/site-config';
import { TrackedLink } from '@/components/ui/tracked-link';

/** Нижняя фиксированная панель для мобильных: позвонить, WhatsApp, записаться. */
export function MobileCta() {
  const item =
    'flex flex-1 flex-col items-center justify-center gap-1 rounded-xl py-2 text-[11px] font-medium leading-none transition-colors active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent';

  return (
    <nav
      aria-label="Быстрая связь"
      className="fixed inset-x-0 bottom-0 z-50 animate-slide-in-up border-t border-line bg-graphite-950 px-3 pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-2  md:hidden motion-reduce:animate-none"
    >
      <div className="mx-auto flex max-w-md items-stretch gap-2">
        <TrackedLink href={`tel:${siteConfig.phone.href}`} event="phone" location="mobile_bar" className={`${item} text-ink`}>
          <Phone className="h-5 w-5 text-ink-muted" aria-hidden="true" />
          Позвонить
        </TrackedLink>
        <TrackedLink
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          event="whatsapp"
          location="mobile_bar"
          className={`${item} bg-wa text-graphite-950`}
        >
          <MessageCircle className="h-5 w-5" aria-hidden="true" />
          WhatsApp
        </TrackedLink>
        <a href="#estimate" className={`${item} bg-accent text-graphite-950`}>
          <CalendarCheck className="h-5 w-5" aria-hidden="true" />
          Записаться
        </a>
      </div>
    </nav>
  );
}
