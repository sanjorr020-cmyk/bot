'use client';

import { Download } from 'lucide-react';
import { siteConfig } from '@/config/site-config';

/** Скачивает визитку MitService (.vcf): клиент сохраняет номер и адрес в телефон. */
export function SaveContactButton() {
  const save = () => {
    const { address, phone, name, url } = siteConfig;
    const vcard = [
      'BEGIN:VCARD',
      'VERSION:3.0',
      `FN:${name}`,
      `ORG:${name}`,
      `TEL;TYPE=CELL,VOICE:${phone.href}`,
      `ADR;TYPE=WORK:;;${address.street};${address.city};;;${address.countryName}`,
      `URL:${url}`,
      'END:VCARD',
    ].join('\r\n');
    const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'MitService.vcf';
    document.body.appendChild(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(link.href), 1000);
  };

  return (
    <button
      type="button"
      onClick={save}
      className="inline-flex items-center gap-2 rounded-lg border border-line px-3 py-2 text-xs font-medium text-ink-muted transition-colors hover:border-ink-muted hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
    >
      <Download className="h-3.5 w-3.5" aria-hidden="true" />
      Сохранить контакт
    </button>
  );
}
