'use client';

import { useRef, useState, type PointerEvent, type ReactNode } from 'react';
import { cx } from '@/lib/utils';

const LENS = 160; // диаметр лупы, px
const ZOOM = 2.5;

/** Лупа над фото: круг с увеличенной областью под курсором. Только мышь на десктопе. */
export function Magnifier({ src, children, className }: { src: string; children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState<{ x: number; y: number; w: number; h: number } | null>(null);

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== 'mouse' || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    setPos({ x: e.clientX - r.left, y: e.clientY - r.top, w: r.width, h: r.height });
  };

  return (
    <div ref={ref} className={cx('relative', className)} onPointerMove={onMove} onPointerLeave={() => setPos(null)}>
      {children}
      {pos && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute hidden rounded-full border border-line shadow-[0_8px_30px_rgba(0,0,0,0.5)] md:block"
          style={{
            width: LENS,
            height: LENS,
            left: pos.x - LENS / 2,
            top: pos.y - LENS / 2,
            backgroundImage: `url(${src})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: `${pos.w * ZOOM}px ${pos.h * ZOOM}px`,
            backgroundPosition: `${-(pos.x * ZOOM - LENS / 2)}px ${-(pos.y * ZOOM - LENS / 2)}px`,
          }}
        />
      )}
    </div>
  );
}
