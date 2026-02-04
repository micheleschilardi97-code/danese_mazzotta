import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    template: '%s | Studio Dentistico Dott. Mario Giugno — Lecce',
    default: 'Dentista Lecce | Impianti Senza Dolore | Prima Visita Gratuita — Studio Dott. Mario Giugno'
  },
  description: 'Impianti dentali con sedazione cosciente a Lecce. 15+ anni esperienza, 2000+ pazienti soddisfatti. Prima visita gratuita. ☎️ 0832 199 3151 — Viale Leopardi 90',
  keywords: ['dentista lecce', 'implantologia lecce', 'impianti dentali senza dolore', 'chirurgia orale lecce', 'studio dentistico lecce', 'dott mario giugno', 'sedazione cosciente', 'prima visita gratuita dentista'],
  authors: [{ name: 'Dott. Mario Giugno' }],
  creator: 'Studio Dentistico Dott. Mario Giugno',
  publisher: 'Studio Dentistico Dott. Mario Giugno',
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
    canonical: 'https://studgiugno.it/'
  },
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    siteName: 'Studio Dentistico Dott. Mario Giugno',
    url: 'https://studgiugno.it/',
    title: 'Dentista Lecce | Impianti Senza Dolore | Studio Dott. Mario Giugno',
    description: 'Impianti dentali con sedazione cosciente a Lecce. Prima visita gratuita. 15+ anni esperienza, 2000+ pazienti felici. ☎️ 0832 199 3151',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dentista Lecce | Impianti Senza Dolore | Studio Dott. Mario Giugno',
    description: 'Impianti dentali con sedazione cosciente. Prima visita gratuita. ☎️ 0832 199 3151',
  },
  icons: {
    icon: '/icons/favicon.ico',
    apple: '/icons/apple-touch-icon.png',
    shortcut: '/icons/favicon-16x16.png'
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "DentalClinic",
  "name": "Studio Dentistico di Chirurgia Orale ed Implantologia Avanzata del Dott. Mario Giugno",
  "image": "https://studgiugno.it/images/studio-dentistico-bg.jpg.png",
  "description": "Studio dentistico specializzato in implantologia avanzata e chirurgia orale in Lecce",
  "@id": "https://studgiugno.it/",
  "url": "https://studgiugno.it",
  "telephone": "+390832199315",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Viale G. Leopardi, 90",
    "addressLocality": "Lecce",
    "addressRegion": "Puglia",
    "postalCode": "73100",
    "addressCountry": "IT"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 40.3515,
    "longitude": 18.1750
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "reviewCount": "2000",
    "bestRating": "5",
    "worstRating": "1"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday"],
      "opens": "17:30",
      "closes": "20:30"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Wednesday"],
      "opens": "17:30",
      "closes": "20:30"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Friday"],
      "opens": "09:00",
      "closes": "13:00"
    }
  ],
  "medicalSpecialty": ["Implantologia Dentale", "Chirurgia Orale", "Estetica Dentale"],
  "availableService": [
    {
      "@type": "MedicalProcedure",
      "name": "Impianti Dentali",
      "description": "Implantologia avanzata con sedazione cosciente"
    },
    {
      "@type": "MedicalProcedure",
      "name": "Chirurgia Orale",
      "description": "Interventi di chirurgia orale e maxillo-facciale"
    },
    {
      "@type": "MedicalProcedure",
      "name": "Estetica Dentale",
      "description": "Trattamenti estetici per il sorriso perfetto"
    },
    {
      "@type": "MedicalProcedure",
      "name": "Bonifica Dentale",
      "description": "Rimozione protesi incongrue e bonifica odontoiatrica"
    },
    {
      "@type": "MedicalProcedure",
      "name": "Protesi Dentale",
      "description": "Protesi fisse e mobili personalizzate"
    },
    {
      "@type": "MedicalProcedure",
      "name": "Laser Terapia",
      "description": "Trattamenti con tecnologia laser di ultima generazione"
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
