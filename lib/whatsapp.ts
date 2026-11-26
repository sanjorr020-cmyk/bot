import { siteConfig, whatsappLink } from '@/config/site-config';

/** Текст заявки, который уйдёт в WhatsApp. */
export function buildLeadMessage(lead: {
  name?: string;
  phone?: string;
  brand?: string;
  model?: string;
  problem?: string;
  description?: string;
}): string {
  const lines = [
    'Здравствуйте! Хочу получить оценку ремонта в MitService.',
    lead.name ? `Имя: ${lead.name}` : null,
    lead.phone ? `Телефон: ${lead.phone}` : null,
    lead.brand ? `Авто: ${lead.brand}${lead.model ? ` ${lead.model}` : ''}` : null,
    lead.problem ? `Тип проблемы: ${lead.problem}` : null,
    lead.description ? `Описание: ${lead.description}` : null,
  ];
  return lines.filter(Boolean).join('\n');
}

export function leadWhatsappLink(lead: Parameters<typeof buildLeadMessage>[0]) {
  return whatsappLink(buildLeadMessage(lead));
}

export { siteConfig, whatsappLink };
