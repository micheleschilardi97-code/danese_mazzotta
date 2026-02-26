import type { MetadataRoute } from 'next';
import { config } from '@/config';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = config.seo.siteUrl;
  const currentDate = new Date();
  
  const staticPages = [
    { path: '', priority: 1.0, changeFreq: 'weekly' as const },
    { path: '/contatti', priority: 0.9, changeFreq: 'monthly' as const },
    { path: '/chi-siamo', priority: 0.8, changeFreq: 'monthly' as const },
    { path: '/servizi', priority: 0.9, changeFreq: 'weekly' as const },
    { path: '/prenota-visita', priority: 0.95, changeFreq: 'monthly' as const },
    { path: '/testimonianze', priority: 0.7, changeFreq: 'weekly' as const },
    { path: '/faq', priority: 0.6, changeFreq: 'monthly' as const },
  ];

  const servizi = [
    { slug: 'laser-terapia', priority: 0.9 },
    { slug: 'parodontologia', priority: 0.9 },
    { slug: 'igiene-dentale', priority: 0.85 },
    { slug: 'impianti-dentali', priority: 0.85 },
    { slug: 'ortodonzia', priority: 0.85 },
    { slug: 'endodonzia', priority: 0.8 },
    { slug: 'sbiancamento-dentale', priority: 0.8 },
  ];

  return [
    ...staticPages.map((page) => ({
      url: `${baseUrl}${page.path}`,
      lastModified: currentDate,
      changeFrequency: page.changeFreq,
      priority: page.priority,
    })),
    ...servizi.map((servizio) => ({
      url: `${baseUrl}/servizi/${servizio.slug}`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: servizio.priority,
    })),
  ];
}
