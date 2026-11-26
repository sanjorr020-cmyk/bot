import type { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site-config';

const pages: { path: string; priority: number }[] = [
  { path: '', priority: 1 },
  { path: '/diagnostika-astana', priority: 0.8 },
  { path: '/remont-generatora-astana', priority: 0.7 },
  { path: '/remont-startera-astana', priority: 0.7 },
  { path: '/remont-hodovoy-astana', priority: 0.7 },
  { path: '/mitsubishi-astana', priority: 0.8 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return pages.map((p) => ({
    url: `${siteConfig.url}${p.path}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: p.priority,
  }));
}
