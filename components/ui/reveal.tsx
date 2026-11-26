'use client';

import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  /** Элемент: div по умолчанию, li — когда Reveal стоит прямо внутри списка. */
  as?: 'div' | 'li';
};

/**
 * Плавное появление блока при прокрутке. При prefers-reduced-motion анимация отключается.
 */
export function Reveal({ children, delay = 0, className, as = 'div' }: RevealProps) {
  const reduce = useReducedMotion();
  const Plain = as;

  if (reduce) {
    return <Plain className={className}>{children}</Plain>;
  }

  const Motion = as === 'li' ? motion.li : motion.div;
  return (
    <Motion
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Motion>
  );
}
