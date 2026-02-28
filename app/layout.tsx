import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { config } from '@/config';

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  weight: ["400", "600", "700", "900"],
  style: ["normal", "italic"],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0a0e27',
};

export const metadata: Metadata = {
  title: {
    template: `%s | ${config.studio.nome} — Lecce`,
    default: `Dentista Lecce | ${config.studio.specializzazione} | Prenota Online — ${config.studio.nomeBreve}`
  },
  description: `${config.studio.specializzazione} a Lecce. ${config.stats.anniEsperienza}+ anni esperienza, ${config.stats.pazientiSoddisfatti}+ pazienti soddisfatti. Prenota online. ☎️ ${config.contatti.telefono} — ${config.contatti.indirizzo}`,
  keywords: ['dentista lecce', 'studio dentistico lecce', 'parodontologia lecce', config.studio.dottore.toLowerCase(), 'ortodonzia invisibile lecce'],
  authors: [{ name: config.studio.dottore }],
  creator: config.studio.nome,
  publisher: config.studio.nome,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: config.seo.siteUrl
  },
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    siteName: config.seo.siteName,
    url: config.seo.siteUrl,
    title: `Dentista Lecce | ${config.studio.specializzazione} | ${config.studio.nomeBreve}`,
    description: `${config.studio.specializzazione} a Lecce. Prenota online. ${config.stats.anniEsperienza}+ anni esperienza. ☎️ ${config.contatti.telefono}`,
  },
  twitter: {
    card: 'summary_large_image',
    title: `Dentista Lecce | ${config.studio.specializzazione} | ${config.studio.nomeBreve}`,
    description: `${config.studio.specializzazione} a Lecce. Prenota online. ☎️ ${config.contatti.telefono}`,
  },
  icons: {
    icon: '/icons/favicon.ico',
    apple: '/icons/apple-touch-icon.png',
    shortcut: '/icons/favicon-16x16.png'
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "DentalClinic",
  "name": config.studio.nome,
  "image": `${config.seo.siteUrl}${config.images.heroBg}`,
  "description": config.seo.description,
  "@id": config.seo.siteUrl,
  "url": config.seo.siteUrl,
  "telephone": config.contatti.telefonoLink,
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": config.contatti.indirizzo.split(',')[0],
    "addressLocality": "Lecce",
    "addressRegion": "Puglia",
    "postalCode": "73100",
    "addressCountry": "IT"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": config.contatti.coordinate.lat,
    "longitude": config.contatti.coordinate.lng
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "reviewCount": String(config.stats.pazientiSoddisfatti),
    "bestRating": "5",
    "worstRating": "1"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "13:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "15:00",
      "closes": "20:00"
    }
  ],
  "medicalSpecialty": ["Parodontologia", "Ortodonzia", "Implantologia Dentale", "Endodonzia", "Laser Terapia"],
  "availableService": [
    {
      "@type": "MedicalProcedure",
      "name": "Laser Terapia",
      "description": "Trattamenti con tecnologia laser di ultima generazione"
    },
    {
      "@type": "MedicalProcedure",
      "name": "Parodontologia",
      "description": "Diagnosi e trattamento delle malattie parodontali con approccio rigenerativo"
    },
    {
      "@type": "MedicalProcedure",
      "name": "Igiene Dentale",
      "description": "Pulizia professionale e prevenzione"
    },
    {
      "@type": "MedicalProcedure",
      "name": "Impianti Dentali",
      "description": "Chirurgia orale e implantare avanzata"
    },
    {
      "@type": "MedicalProcedure",
      "name": "Ortodonzia",
      "description": "Ortodonzia invisibile con sistema All-in e apparecchi tradizionali"
    },
    {
      "@type": "MedicalProcedure",
      "name": "Endodonzia",
      "description": "Trattamenti endodontici di precisione con sistemi di ingrandimento"
    },
    {
      "@type": "MedicalProcedure",
      "name": "Sbiancamento Dentale",
      "description": "Sbiancamento professionale per un sorriso luminoso"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Servizi Dentistici",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Prima Visita Gratuita",
          "description": "Consulenza iniziale e valutazione completa senza costi"
        }
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
