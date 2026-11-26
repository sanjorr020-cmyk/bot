import { siteConfig, whatsappLink } from '@/config/site-config';
import { TrackedLink } from './ui/tracked-link';
import { Logo } from './logo';
import { InstagramIcon, WhatsAppIcon } from './icons/brand';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/10 bg-graphite-950 pb-28 pt-14 md:pb-14">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.2fr_1fr_1fr_1fr] lg:px-8">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-muted">{siteConfig.description}</p>
          <div className="mt-5 flex gap-3">
            <TrackedLink
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              event="whatsapp"
              location="footer"
              aria-label="WhatsApp"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-ink-muted transition-colors hover:border-[#25D366]/50 hover:text-[#5BF08F]"
            >
              <WhatsAppIcon className="h-5 w-5" />
            </TrackedLink>
            <a href={siteConfig.social.instagram.url} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-ink-muted transition-colors hover:border-accent/50 hover:text-ink">
              <InstagramIcon className="h-5 w-5" />
            </a>
            <a href={siteConfig.social.twoGis.url} target="_blank" rel="noopener noreferrer" className="flex h-10 items-center justify-center rounded-lg border border-white/10 px-3 text-sm font-semibold text-ink-muted transition-colors hover:border-steel/50 hover:text-ink">
              2ГИС
            </a>
          </div>
        </div>

        <nav aria-label="Услуги в подвале">
          <h2 className="text-sm font-semibold text-ink">Услуги</h2>
          <ul className="mt-4 space-y-2.5 text-sm text-ink-muted">
            {siteConfig.services.map((s) => (
              <li key={s.id}>
                <a href="#services" className="hover:text-ink">{s.title}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-semibold text-ink">Контакты</h2>
          <ul className="mt-4 space-y-2.5 text-sm text-ink-muted">
            <li>
              <TrackedLink href={`tel:${siteConfig.phone.href}`} event="phone" location="footer" className="text-ink hover:text-steel-soft">
                {siteConfig.phone.display}
              </TrackedLink>
            </li>
            <li>
              {siteConfig.address.city}, {siteConfig.address.street}
              <br />
              {siteConfig.address.district}
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-ink">Информация</h2>
          <p className="mt-4 text-xs leading-relaxed text-ink-dim">
            Цены на сайте предварительные и зависят от диагностики. Точную стоимость и запчасти указываем в смете
            после осмотра и согласуем с вами.
          </p>
          <p className="mt-4 text-xs text-ink-dim">
            © {year} {siteConfig.legalName}. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}
