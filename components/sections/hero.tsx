'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { CheckCircle2, MapPin, ShieldCheck, Star, Stethoscope, FileText } from 'lucide-react';
import { siteConfig, whatsappLink } from '@/config/site-config';
import { TrackedLink } from '@/components/ui/tracked-link';
import { btnSecondary, btnWhatsapp } from '@/components/ui/styles';
import { Container } from '@/components/ui/section';
import { Magnifier } from '@/components/ui/magnifier';

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export function Hero() {
  const reduce = useReducedMotion();
  const motionProps = (delay: number) => (reduce ? {} : fade(delay));
  const { reputation } = siteConfig;

  const badges = [
    { icon: Star, text: `Рейтинг ${reputation.rating.toString().replace('.', ',')} в ${reputation.source}` },
    { icon: CheckCircle2, text: `${reputation.ratingsCount} оценок, ${reputation.reviewsCount} отзывов` },
    { icon: MapPin, text: siteConfig.address.city },
  ];

  const advantages = [
    { icon: Stethoscope, text: 'Диагностика перед ремонтом' },
    { icon: FileText, text: 'Честная смета с видами работ' },
    { icon: ShieldCheck, text: 'Гарантия на работы и запчасти' },
  ];

  return (
    <section id="top" aria-labelledby="hero-title" className="relative isolate overflow-hidden bg-graphite-950 pb-16 pt-12 sm:pt-20 lg:pb-24">
      {/* Фоновое фото: широкое для десктопа, вертикальное для телефона. Декоративное, без текста. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <picture>
          <source media="(min-width: 768px)" srcSet="/images/backgrounds/hero-wide.webp" />
          <img src="/images/backgrounds/hero-tall.webp" alt="" className="h-full w-full object-cover object-[70%_center] md:object-center" loading="eager" />
        </picture>
        {/* Тёмный слой для читаемости текста. Сплошной цвет палитры, без градиента. */}
        <div className="absolute inset-0 bg-graphite-950/80" />
      </div>

      <Container className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div>
          <motion.div {...motionProps(0)} className="flex flex-wrap gap-2">
            {badges.map(({ icon: Icon, text }) => (
              <span
                key={text}
                className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1.5 text-xs font-medium text-ink-muted "
              >
                <Icon className="h-3.5 w-3.5 text-ink" aria-hidden="true" />
                <span>{text.split(/(\d[\d,]*(?=[\s,]|$))/).map((part, i) => (/^\d/.test(part) ? <span key={i} className="text-accent">{part}</span> : part))}</span>
              </span>
            ))}
          </motion.div>

          <motion.h1
            id="hero-title"
            {...motionProps(0.1)}
            className="mt-6 font-display font-bold leading-[1.1] tracking-[-0.02em] text-ink"
          >
            <span className="block text-[clamp(2.75rem,7.5vw,5.5rem)] leading-[0.95] tracking-[-0.03em]">Диагностика</span><span className="mt-3 block text-2xl font-medium leading-snug text-ink-muted sm:text-3xl">и ремонт автомобилей в Астане</span>
          </motion.h1>

          <motion.p {...motionProps(0.2)} className="mt-5 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg">
            Компьютерная диагностика, ремонт генераторов и стартеров, ходовой части, двигателя и автоэлектрика.
            Диагностика без догадок. Ремонт с понятным планом. Опыт обслуживания и ремонта автомобилей Mitsubishi.
          </motion.p>

          <motion.div {...motionProps(0.3)} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <TrackedLink
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              event="whatsapp"
              location="hero"
              className={`${btnWhatsapp} group w-full px-6 py-3.5 sm:w-auto`}
            >
              Записаться в WhatsApp
            </TrackedLink>
            <a href="#estimate" className={`${btnSecondary} w-full px-6 py-3.5 sm:w-auto`}>
              Рассчитать ремонт
            </a>
          </motion.div>

          <motion.ul {...motionProps(0.4)} className="mt-8 flex flex-wrap gap-x-6 gap-y-3" aria-label="Наши преимущества">
            {advantages.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-2 text-sm text-ink">
                <Icon className="h-4 w-4 text-ink" aria-hidden="true" />
                {text}
              </li>
            ))}
          </motion.ul>

          <p className="mt-4 text-sm text-ink-muted">
            {siteConfig.hours[0].days} {siteConfig.hours[0].time}, {siteConfig.address.city}, {siteConfig.address.street}
          </p>
          <p className="mt-2 text-sm text-ink-muted">
            Или позвоните:{' '}
            <TrackedLink href={`tel:${siteConfig.phone.href}`} event="phone" location="hero_text" className="font-medium text-ink underline decoration-accent/60 underline-offset-4 hover:decoration-accent">
              {siteConfig.phone.display}
            </TrackedLink>
          </p>
        </div>

        <motion.div
          initial={reduce ? undefined : { opacity: 0, scale: 0.98 }}
          animate={reduce ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-3xl border border-line bg-graphite-900 shadow-card">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-10 flex motion-reduce:hidden">
              {Array.from({ length: 12 }).map((_, i) => (
                <span
                  key={i}
                  className={`h-full flex-1 bg-graphite-950 ${i % 2 === 0 ? 'animate-slice-up' : 'animate-slice-down'}`}
                  style={{ animationDelay: `${0.15 + i * 0.04}s` }}
                />
              ))}
            </div>
            <Magnifier src="/images/illustrations/hero-car-on-lift.jpg">
            <Image
              src="/images/illustrations/hero-car-on-lift.jpg"
              alt="Автомобиль на подъёмнике в мастерской MitService"
              width={469}
              height={313}
              priority
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="h-auto w-full"
            />
            </Magnifier>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
