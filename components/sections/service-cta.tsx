'use client';

import type { ReactNode } from 'react';

/**
 * Ссылка на форму оценки, которая заранее выбирает тип проблемы.
 * Форма слушает событие «mit:prefill-service».
 */
export function ServiceCta({ problem, children, className }: { problem: string; children: ReactNode; className?: string }) {
  return (
    <a
      href="#estimate"
      className={className}
      onClick={() => {
        window.dispatchEvent(new CustomEvent('mit:prefill-service', { detail: { problem } }));
      }}
    >
      {children}
    </a>
  );
}
