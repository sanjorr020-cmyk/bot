'use client';

import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { siteConfig } from '@/config/site-config';

/** Копирует номер телефона в буфер обмена. Если доступа к буферу нет, номер просто виден на странице. */
export function CopyPhoneButton() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.phone.display);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      aria-live="polite"
      className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-3 py-2 text-xs font-semibold text-ink-muted transition-colors hover:border-steel/50 hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-steel"
    >
      {copied ? <Check className="h-3.5 w-3.5 text-[#5BF08F]" aria-hidden="true" /> : <Copy className="h-3.5 w-3.5" aria-hidden="true" />}
      {copied ? 'Номер скопирован' : 'Скопировать номер'}
    </button>
  );
}
