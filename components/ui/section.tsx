import type { ReactNode } from 'react';
import { cx } from '@/lib/utils';
import { eyebrow } from './styles';

export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cx('mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8', className)}>{children}</div>;
}

type SectionProps = {
  id: string;
  children: ReactNode;
  className?: string;
  /** Фон секции: базовый или чуть светлее. */
  tone?: 'base' | 'raised';
  labelledBy?: string;
};

export function Section({ id, children, className, tone = 'base', labelledBy }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cx(
        'scroll-mt-20 py-16 sm:py-24',
        tone === 'raised' ? 'bg-graphite-900/50' : 'bg-transparent',
        className,
      )}
    >
      <Container>{children}</Container>
    </section>
  );
}

type HeadingProps = {
  eyebrow?: string;
  title: string;
  titleId: string;
  description?: string;
  align?: 'left' | 'center';
};

export function SectionHeading({ eyebrow: label, title, titleId, description, align = 'left' }: HeadingProps) {
  return (
    <div className={cx('max-w-3xl', align === 'center' && 'mx-auto text-center')}>
      {label && <p className={eyebrow}>{label}</p>}
      <h2 id={titleId} className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
      {description && <p className="mt-4 text-base leading-relaxed text-ink-muted sm:text-lg">{description}</p>}
    </div>
  );
}
