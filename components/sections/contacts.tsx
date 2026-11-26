import { Clock, ExternalLink, MapPin, Phone } from 'lucide-react';
import { siteConfig, whatsappLink } from '@/config/site-config';
import { Section, SectionHeading } from '@/components/ui/section';
import { TrackedLink } from '@/components/ui/tracked-link';
import { LeadForm } from '@/components/lead-form';
import { InstagramIcon, WhatsAppIcon } from '@/components/icons/brand';
import { btnSecondary, card } from '@/components/ui/styles';

export function Contacts() {
  const { address, phone, hours, social } = siteConfig;
  const fullAddress = `${address.city}, ${address.street}, ${address.district}`;
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(fullAddress)}&output=embed`;

  return (
    <Section id="contacts" labelledBy="contacts-title">
      <SectionHeading eyebrow="Контакты" title="Приезжайте или напишите" titleId="contacts-title" />

      <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1fr]">
        <div className="grid gap-5">
          <div className={`grid gap-6 p-6 sm:p-8 ${card}`}>
            <div className="flex gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-steel/15 text-steel-soft">
                <MapPin className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wider text-ink-dim">Адрес</p>
                <address className="mt-1 not-italic text-ink">
                  {address.city}, {address.street}
                  <br />
                  <span className="text-ink-muted">{address.district}</span>
                </address>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-steel/15 text-steel-soft">
                <Phone className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wider text-ink-dim">Телефон</p>
                <TrackedLink href={`tel:${phone.href}`} event="phone" location="contacts" className="mt-1 block text-lg font-semibold text-ink hover:text-steel-soft">
                  {phone.display}
                </TrackedLink>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-steel/15 text-steel-soft">
                <Clock className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wider text-ink-dim">Часы работы</p>
                <dl className="mt-1 space-y-1 text-sm">
                  {hours.map((h) => (
                    <div key={h.days} className="flex gap-3">
                      <dt className="w-20 shrink-0 text-ink-muted">{h.days}</dt>
                      <dd className="text-ink">{h.time}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <TrackedLink
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                event="whatsapp"
                location="contacts"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 text-sm font-semibold text-[#06140B] transition-transform hover:-translate-y-0.5 hover:bg-[#2EE471]"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Написать в WhatsApp
              </TrackedLink>
              <a href={social.instagram.url} target="_blank" rel="noopener noreferrer" className={`${btnSecondary} flex-1`}>
                <InstagramIcon className="h-5 w-5" />
                Instagram
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-graphite-900">
            <iframe
              title={`Карта: ${fullAddress}`}
              src={mapSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-64 w-full grayscale-[30%] invert-[0.92] hue-rotate-180 sm:h-72"
            />
            <div className="flex items-center justify-between gap-3 border-t border-white/[0.06] px-5 py-3 text-sm">
              <span className="text-ink-muted">{fullAddress}</span>
              <a href={social.twoGis.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 whitespace-nowrap font-semibold text-steel-soft hover:text-ink">
                2ГИС <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <LeadForm variant="contact" />
      </div>
    </Section>
  );
}
