'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { CheckCircle2, MapPin, ShieldCheck, Star, Stethoscope, FileText } from 'lucide-react';
import { siteConfig, whatsappLink } from '@/config/site-config';
import { TrackedLink } from '@/components/ui/tracked-link';
import { btnPrimary, btnWhatsapp } from '@/components/ui/styles';
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
      {/* Технический фон: сетка и мягкое свечение, без тяжёлых изображений */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(47,128,237,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(47,128,237,0.07)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      </div>

      <Container className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div>
          <motion.div {...motionProps(0)} className="flex flex-wrap gap-2">
            {badges.map(({ icon: Icon, text }) => (
              <span
                key={text}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-ink-muted backdrop-blur"
              >
                <Icon className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
                {text}
              </span>
            ))}
          </motion.div>

          <motion.h1
            id="hero-title"
            {...motionProps(0.1)}
            className="mt-6 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-6xl"
          >
            Диагностика и ремонт автомобилей в Астане
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
            <a href="#estimate" className={`${btnPrimary} w-full px-6 py-3.5 sm:w-auto`}>
              Рассчитать ремонт
            </a>
          </motion.div>

          <motion.ul {...motionProps(0.4)} className="mt-10 grid gap-3 sm:grid-cols-3" aria-label="Наши преимущества">
            {advantages.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-3 rounded-xl border border-white/[0.08] bg-graphite-900/70 p-3 text-sm text-ink">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-steel/15 text-steel-soft">
                  <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
                </span>
                {text}
              </li>
            ))}
          </motion.ul>

          <p className="mt-6 text-sm text-ink-muted">
            Или позвоните:{' '}
            <TrackedLink href={`tel:${siteConfig.phone.href}`} event="phone" location="hero_text" className="font-semibold text-ink underline decoration-accent/60 underline-offset-4 hover:decoration-accent">
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
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-graphite-900 shadow-card">
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
          <div className="absolute -bottom-5 -left-3 hidden rounded-2xl border border-white/10 bg-graphite-900/90 px-4 py-3 shadow-card backdrop-blur sm:block">
            <p className="text-sm font-medium text-ink-dim">Рейтинг в {reputation.source}</p>
            <p className="mt-1 font-display text-2xl font-semibold text-ink">
              {reputation.rating.toString().replace('.', ',')}
              <span className="ml-2 text-sm font-normal text-ink-muted">· {reputation.ratingsCount} оценок</span>
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
