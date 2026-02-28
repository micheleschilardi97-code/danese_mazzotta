// Definizione tipo comune per tutte le configurazioni client
export interface ClientConfig {
  studio: {
    nome: string;
    nomeBreve: string;
    dottore: string;
    specializzazione: string;
  };
  contatti: {
    telefono: string;
    telefonoLink: string;
    email: string;
    whatsapp: string;
    indirizzo: string;
    coordinate: {
      lat: number;
      lng: number;
    };
  };
  orari: {
    [key: string]: {
      aperto: boolean;
      mattina: string | null;
      pomeriggio: string | null;
    };
  };
  hero: {
    title: string;
    titleHighlight: string;
    subtitle: string;
    ctaPrimary: {
      text: string;
      href: string;
      badge: string;
    };
    ctaSecondary: {
      text: string;
      href: string;
    };
    trustBadges: Array<{
      text: string;
      icon: string;
    }>;
    certifications: Array<{
      abbr: string;
      name: string;
    }>;
  };
  stats: {
    anniEsperienza: number;
    pazientiSoddisfatti: number;
    interventiFatti: number;
    recensioni5Stelle: number;
  };
  seo: {
    siteName: string;
    siteUrl: string;
    description: string;
    keywords: string;
    ogImage: string;
  };
  social: {
    facebook: string | null;
    instagram: string | null;
    linkedin: string | null;
    youtube: string | null;
  };
  images: {
    logo: string;
    heroBg: string;
    heroMobile: string;
    doctor: string;
    doctorMobile?: string;
  };
  branding: {
    primaryColor: string;
    secondaryColor: string;
    accentColor: string;
  };
}

export const clientConfig: ClientConfig = {
  // Informazioni Studio
  studio: {
    nome: "Studio Dentistico Danese-Mazzotta",
    nomeBreve: "Danese-Mazzotta",
    dottore: "Danese-Mazzotta",
    specializzazione: "Odontoiatria e Protesi Dentaria",
  },

  // Contatti
  contatti: {
    telefono: "371 585 5834",
    telefonoLink: "+393715855834",
    email: "info@danesemazzotta.it",
    whatsapp: "+393715855834",
    indirizzo: "Via Lupiae, 5, 73100 Lecce LE",
    coordinate: {
      lat: 40.3516,
      lng: 18.1718
    }
  },

  // Orari (Aperto fino alle 20)
  orari: {
    lunedi: { aperto: true, mattina: "09:00-13:00", pomeriggio: "15:00-20:00" },
    martedi: { aperto: true, mattina: "09:00-13:00", pomeriggio: "15:00-20:00" },
    mercoledi: { aperto: true, mattina: "09:00-13:00", pomeriggio: "15:00-20:00" },
    giovedi: { aperto: true, mattina: "09:00-13:00", pomeriggio: "15:00-20:00" },
    venerdi: { aperto: true, mattina: "09:00-13:00", pomeriggio: "15:00-20:00" },
    sabato: { aperto: false, mattina: null, pomeriggio: null },
    domenica: { aperto: false, mattina: null, pomeriggio: null }
  },

  // Hero Section
  hero: {
    title: "Il Tuo Sorriso",
    titleHighlight: "è la Nostra Missione",
    subtitle: "Professionalità, tecnologia d'avanguardia e cura dei dettagli a Lecce, nel cuore del Salento",
    ctaPrimary: {
      text: "Prenota Visita",
      href: "/prenota-visita",
      badge: "Prenota Online"
    },
    ctaSecondary: {
      text: "Chiama Ora",
      href: "tel:+393715855834"
    },
    trustBadges: [
      { text: "Massima Professionalità", icon: "shield" },
      { text: "Tecnologia Avanzata", icon: "clock" },
      { text: "5 Stelle", icon: "star" },
      { text: "Precisione Garantita", icon: "certificate" }
    ],
    certifications: [
      { abbr: "All-in", name: "Certificazione All-in Ortodonzia Invisibile" },
      { abbr: "SIDO", name: "Società Italiana di Ortodonzia" },
      { abbr: "SIdP", name: "Società Italiana di Parodontologia" }
    ]
  },

  // Statistiche
  stats: {
    anniEsperienza: 16,
    pazientiSoddisfatti: 3000,
    interventiFatti: 8000,
    recensioni5Stelle: 5.0
  },

  // SEO & Social
  seo: {
    siteName: "Studio Dentistico Danese-Mazzotta",
    siteUrl: "https://danesemazzotta.it",
    description: "Studio Dentistico Danese-Mazzotta a Lecce. Specializzati in parodontologia, ortodonzia invisibile, implantologia e laser terapia. Prenota online.",
    keywords: "dentista lecce, studio dentistico lecce, parodontologia lecce, ortodonzia invisibile lecce, implantologia lecce, danese mazzotta",
    ogImage: "/images/og-danese-mazzotta.jpg"
  },

  social: {
    facebook: null,
    instagram: null,
    linkedin: null,
    youtube: null
  },

  // Immagini specifiche
  images: {
    logo: "/images/logo-danese-mazzotta.png",
    heroBg: "/images/studio_2.png",
    heroMobile: "/images/studio_2.png",
    doctor: "/images/studio_2.png",
    doctorMobile: "/images/studio_2.png"
  },

  // Colori brand (opzionale - per personalizzazione colori)
  branding: {
    primaryColor: "#0d9488", // teal
    secondaryColor: "#14b8a6",
    accentColor: "#f59e0b"
  }
};
