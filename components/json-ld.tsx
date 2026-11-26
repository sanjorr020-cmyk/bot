import { siteConfig } from '@/config/site-config';

/**
 * Structured data: AutoRepair (подтип LocalBusiness) и FAQPage.
 * Поля с плейсхолдерами не выводятся, чтобы не публиковать неверные данные.
 */
export function JsonLd() {
  const { address, phone, reputation, social, hours, services, faq, url, name, description } = siteConfig;

  const autoRepair = {
    '@context': 'https://schema.org',
    '@type': ['AutoRepair', 'LocalBusiness'],
    '@id': `${url}/#business`,
    name,
    description,
    url,
    telephone: phone.display,
    image: `${url}/opengraph-image`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: address.street,
      addressLocality: address.city,
      addressRegion: address.district,
      ...(address.postalCode ? { postalCode: address.postalCode } : {}),
      addressCountry: address.country,
    },
    ...(address.geo
      ? { geo: { '@type': 'GeoCoordinates', latitude: address.geo.lat, longitude: address.geo.lng } }
      : {}),
    areaServed: { '@type': 'City', name: address.city },
    sameAs: [social.instagram.url, social.twoGis.url].filter((u) => !u.includes('REPLACE')),
    priceRange: '$$', // PLACEHOLDER: уточните ценовой диапазон
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: reputation.rating,
      reviewCount: reputation.reviewsCount,
      ratingCount: reputation.ratingsCount,
      bestRating: 5,
      worstRating: 1,
    },
    knowsAbout: services.map((s) => s.title),
    makesOffer: services.map((s) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: s.title, description: s.description },
    })),
    openingHoursSpecification: hours
      .filter((h) => !h.time.includes('['))
      .map((h) => ({ '@type': 'OpeningHoursSpecification', description: `${h.days}: ${h.time}` })),
  };

  const faqPage = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(autoRepair) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }} />
    </>
  );
}
