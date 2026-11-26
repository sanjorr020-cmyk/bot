'use client';

import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { trackEvent } from '@/lib/analytics';
import { siteConfig } from '@/config/site-config';

type TrackedLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  /** Какое событие отправить при клике. */
  event?: 'whatsapp' | 'phone' | 'none';
  /** Место на странице — попадает в параметры события. */
  location?: string;
  children: ReactNode;
};

const eventNames = {
  whatsapp: siteConfig.analytics.events.whatsappClick,
  phone: siteConfig.analytics.events.phoneClick,
} as const;

/** Обычная ссылка, которая дополнительно отправляет событие в аналитику. */
export function TrackedLink({ event = 'none', location, onClick, children, ...rest }: TrackedLinkProps) {
  return (
    <a
      {...rest}
      onClick={(e) => {
        if (event !== 'none') trackEvent(eventNames[event], { location: location ?? 'unknown' });
        onClick?.(e);
      }}
    >
      {children}
    </a>
  );
}
