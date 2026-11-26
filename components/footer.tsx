import { siteConfig, whatsappLink } from '@/config/site-config';
import { TrackedLink } from './ui/tracked-link';
import { Logo } from './logo';
import { InstagramIcon, WhatsAppIcon } from './icons/brand';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line bg-graphite-950 pb-28 pt-14 md:pb-14">
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
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-line text-ink-muted transition-colors hover:border-ink-muted hover:text-ink"
            >
              <WhatsAppIcon className="h-5 w-5" />
            </TrackedLink>
            <a href={siteConfig.social.instagram.url} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-lg border border-line text-ink-muted transition-colors hover:border-accent/50 hover:text-ink">
              <InstagramIcon className="h-5 w-5" />
            </a>
            <a href={siteConfig.social.twoGis.url} target="_blank" rel="noopener noreferrer" className="flex h-10 items-center justify-center rounded-lg border border-line px-3 text-sm font-medium text-ink-muted transition-colors hover:border-ink-muted hover:text-ink">
              2ГИС
            </a>
            <a href={siteConfig.social.yandexMaps.url} target="_blank" rel="noopener noreferrer" className="flex h-10 items-center justify-center rounded-lg border border-line px-3 text-sm font-medium text-ink-muted transition-colors hover:border-ink-muted hover:text-ink">
              Яндекс Карты
            </a>
          </div>
        </div>

        <nav aria-label="Страницы услуг">
          <h2 className="text-sm font-bold text-ink">Подробнее</h2>
          <ul className="mt-4 space-y-2.5 text-sm text-ink-muted">
            <li><a href="/diagnostika-astana" className="hover:text-ink">Диагностика в Астане</a></li>
            <li><a href="/remont-generatora-astana" className="hover:text-ink">Ремонт генератора</a></li>
            <li><a href="/remont-startera-astana" className="hover:text-ink">Ремонт стартера</a></li>
            <li><a href="/remont-hodovoy-astana" className="hover:text-ink">Ремонт ходовой</a></li>
            <li><a href="/mitsubishi-astana" className="hover:text-ink">Mitsubishi</a></li>
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-bold text-ink">Контакты</h2>
          <ul className="mt-4 space-y-2.5 text-sm text-ink-muted">
            <li>
              <TrackedLink href={`tel:${siteConfig.phone.href}`} event="phone" location="footer" className="text-ink hover:text-ink-muted">
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
          <h2 className="text-sm font-bold text-ink">Информация</h2>
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
