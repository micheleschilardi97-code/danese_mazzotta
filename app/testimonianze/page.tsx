import type { Metadata } from 'next';
import { config } from '@/config';
import Testimonianze from '../(sections)/testimonianze/Testimonianze';

export const metadata: Metadata = {
  title: 'Testimonianze e Recensioni',
  description: `Leggi le recensioni e le esperienze dei pazienti dello studio ${config.studio.dottore} a Lecce. ${config.stats.pazientiSoddisfatti}+ pazienti soddisfatti, valutazione ${config.stats.recensioni5Stelle}/5.`,
  keywords: [
    'recensioni dentista lecce',
    'testimonianze dentista lecce',
    'opinioni studio dentistico lecce',
    'pazienti soddisfatti dentista lecce',
    'recensioni danese mazzotta',
    'studio dentistico danese mazzotta recensioni',
  ],
  alternates: {
    canonical: `${config.seo.siteUrl}/testimonianze`,
  },
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    siteName: config.seo.siteName,
    url: `${config.seo.siteUrl}/testimonianze`,
    title: `Testimonianze | ${config.studio.nomeBreve}`,
    description: `${config.stats.pazientiSoddisfatti}+ pazienti soddisfatti. Leggi le recensioni dei pazienti dello studio dentistico a Lecce.`,
    images: [{ url: `${config.seo.siteUrl}${config.seo.ogImage}`, width: 1200, height: 630 }],
  },
};

export default function TestimonianzeP() {
  return <Testimonianze />;
}
