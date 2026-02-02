import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://studgiugno.it';
  
  const staticPages = [
    '',
    '/contatti',
  ];

  const servizi = [
    'implantologia',
    'chirurgia-orale',
    'estetica-dentale',
    'bonifica-dentale',
    'protesi',
    'laser-dentale',
  ];

  return [
    ...staticPages.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: path === '' ? 1.0 : 0.8,
    })),
    ...servizi.map((slug) => ({
      url: `${baseUrl}/servizi/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    })),
  ];
}
