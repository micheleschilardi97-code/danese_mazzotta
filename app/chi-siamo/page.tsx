import type { Metadata } from 'next';
import { config } from '@/config';
import About from '../(sections)/about/About';

export const metadata: Metadata = {
  title: 'Chi Siamo',
  description: `Scopri il ${config.studio.dottore} e il nostro studio dentistico a Lecce. Oltre ${config.stats.anniEsperienza} anni di esperienza in implantologia e chirurgia orale con tecnologie all'avanguardia.`,
  keywords: [
    'dentista copertino chi siamo',
    'studio dentistico di tanna cairo',
    'studio dentistico copertino lecce',
    'parodontologia lecce',
    'ortodonzia invisibile lecce',
    'odontoiatra copertino',
  ],
  alternates: {
    canonical: `${config.seo.siteUrl}/chi-siamo`,
  },
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    siteName: config.seo.siteName,
    url: `${config.seo.siteUrl}/chi-siamo`,
    title: `Chi Siamo | ${config.studio.nomeBreve}`,
    description: `${config.studio.dottore} — ${config.stats.anniEsperienza}+ anni di esperienza in ${config.studio.specializzazione} a Lecce.`,
    images: [{ url: `${config.seo.siteUrl}${config.seo.ogImage}`, width: 1200, height: 630 }],
  },
};

export default function ChiSiamoPage() {
  return <About />;
}
