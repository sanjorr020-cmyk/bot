'use client';

import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

type CountUpProps = {
  to: number;
  /** Знаков после запятой (для 4.8 — 1). */
  decimals?: number;
  duration?: number;
  suffix?: string;
  className?: string;
};

/**
 * Анимированный счётчик: считает от 0 до значения, когда элемент попадает в экран.
 * Без анимации (prefers-reduced-motion) сразу показывает итоговое число.
 */
export function CountUp({ to, decimals = 0, duration = 1.6, suffix = '', className }: CountUpProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(reduce ? to : 0);

  useEffect(() => {
    if (reduce) {
      setValue(to);
      return;
    }
    const node = ref.current;
    if (!node) return;

    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / (duration * 1000), 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setValue(to * eased);
          if (progress < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [to, duration, reduce]);

  return (
    <span ref={ref} className={className}>
      {value.toFixed(decimals).replace('.', ',')}
      {suffix}
    </span>
  );
}
