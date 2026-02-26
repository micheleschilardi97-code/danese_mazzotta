import type { Metadata } from 'next';
import { config } from '@/config';
import FAQ from '../(sections)/faq/FAQ';

export const metadata: Metadata = {
  title: 'FAQ - Domande Frequenti',
  description: `Risposte alle domande più frequenti su parodontologia, ortodonzia, impianti dentali e trattamenti dentali a Copertino (Lecce). Scopri tutto sui nostri servizi presso lo studio ${config.studio.dottore}.`,
  keywords: [
    'domande frequenti dentista copertino',
    'faq studio dentistico copertino lecce',
    'impianti dentali domande',
    'parodontologia domande',
    'ortodonzia invisibile faq',
    'sbiancamento dentale faq',
  ],
  alternates: {
    canonical: `${config.seo.siteUrl}/faq`,
  },
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    siteName: config.seo.siteName,
    url: `${config.seo.siteUrl}/faq`,
    title: `FAQ — Domande Frequenti | ${config.studio.nomeBreve}`,
    description: 'Risposte alle domande più frequenti su implantologia dentale, chirurgia orale e trattamenti a Lecce.',
    images: [{ url: `${config.seo.siteUrl}${config.seo.ogImage}`, width: 1200, height: 630 }],
  },
};

// Generate FAQ structured data
const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Gli impianti dentali sono dolorosi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Gli impianti dentali vengono posizionati in anestesia locale, quindi la procedura è indolore. Dopo l'intervento, eventuali fastidi sono gestibili con comuni analgesici e tendono a scomparire in pochi giorni."
      }
    },
    {
      "@type": "Question",
      "name": "Quanto dura un impianto dentale?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Con una corretta igiene orale e controlli periodici, un impianto dentale può durare anche tutta la vita. Gli impianti in titanio hanno un tasso di successo superiore al 95% a 10 anni."
      }
    },
    {
      "@type": "Question",
      "name": "Quanto tempo richiede l'intero trattamento implantologico?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Il tempo varia in base al caso specifico. In media, il processo completo richiede 3-6 mesi, includendo l'osteointegrazione. In alcuni casi è possibile il carico immediato, con protesi provvisoria lo stesso giorno dell'intervento."
      }
    }
  ]
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <FAQ />
    </>
  );
}
