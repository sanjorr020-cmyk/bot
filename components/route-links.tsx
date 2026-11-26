import { ExternalLink, MapPin } from 'lucide-react';
import { siteConfig } from '@/config/site-config';

/** Ссылки на маршрут в 2ГИС, Яндекс Картах и Google Maps по координатам из 2ГИС. */
export function RouteLinks() {
  const geo = siteConfig.address.geo;
  const label = `${siteConfig.address.city}, ${siteConfig.address.street}`;
  const twoGis = geo ? `https://2gis.kz/astana/routeSearch/rsType/car/to/${geo.lng},${geo.lat}` : siteConfig.social.twoGis.url;
  const yandex = geo ? `https://yandex.kz/maps/?rtext=~${geo.lat},${geo.lng}&rtt=auto` : siteConfig.social.yandexMaps.url;
  const google = geo
    ? `https://www.google.com/maps/dir/?api=1&destination=${geo.lat},${geo.lng}`
    : `https://www.google.com/maps/search/${encodeURIComponent(label)}`;

  const link = 'inline-flex items-center gap-2 rounded-lg border border-line px-3 py-2 text-xs font-medium text-ink-muted transition-colors hover:border-ink-muted hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent';

  return (
    <div className="flex flex-wrap gap-2" aria-label="Построить маршрут">
      <a href={twoGis} target="_blank" rel="noopener noreferrer" className={link}>
        <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
        Маршрут в 2ГИС <ExternalLink className="h-3 w-3" aria-hidden="true" />
      </a>
      <a href={yandex} target="_blank" rel="noopener noreferrer" className={link}>
        <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
        Яндекс Карты <ExternalLink className="h-3 w-3" aria-hidden="true" />
      </a>
      <a href={google} target="_blank" rel="noopener noreferrer" className={link}>
        <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
        Google Maps <ExternalLink className="h-3 w-3" aria-hidden="true" />
      </a>
    </div>
  );
}
