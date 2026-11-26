'use client';

import { useRef, type PointerEvent, type ReactNode } from 'react';
import { cx } from '@/lib/utils';

const MAX_DEG = 6;

/** Карточка, которая слегка наклоняется за курсором. Только мышь; при reduced motion отключена. */
export function TiltCard({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== 'mouse' || !ref.current) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const r = ref.current.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    ref.current.style.transform = `perspective(900px) rotateX(${(0.5 - y) * MAX_DEG}deg) rotateY(${(x - 0.5) * MAX_DEG}deg)`;
  };

  const reset = () => {
    if (ref.current) ref.current.style.transform = '';
  };

  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={reset}
      className={cx('transition-transform duration-300 ease-out will-change-transform', className)}
    >
      {children}
    </div>
  );
}
