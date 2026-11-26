import { MessageCircle } from 'lucide-react';
import { siteConfig, whatsappLink } from '@/config/site-config';
import { TrackedLink } from '@/components/ui/tracked-link';

/** Плавающая кнопка WhatsApp для десктопа (на мобильном её заменяет нижняя панель). */
export function FloatingWhatsapp() {
  return (
    <TrackedLink
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      event="whatsapp"
      location="floating_button"
      aria-label="Написать в WhatsApp"
      className="group fixed bottom-6 right-6 z-40 hidden items-center gap-3 rounded-full bg-[#25D366] py-3 pl-4 pr-5 text-sm font-semibold text-[#06140B] shadow-card transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.03] md:inline-flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-graphite-950"
    >
      <span className="relative flex h-6 w-6 items-center justify-center">
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/50 motion-reduce:hidden" aria-hidden="true" />
        <MessageCircle className="relative h-5 w-5" aria-hidden="true" />
      </span>
      <span>Написать в WhatsApp</span>
      <span className="sr-only">{siteConfig.phone.display}</span>
    </TrackedLink>
  );
}
