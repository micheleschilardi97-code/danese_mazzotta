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
    nome: "Studio Dentistico di Chirurgia Orale ed Implantologia Avanzata",
    nomeBreve: "Studio Dr. Giugno",
    dottore: "Dott. Mario Giugno",
    specializzazione: "Chirurgia Orale ed Implantologia Avanzata",
  },

  // Contatti
  contatti: {
    telefono: "0832 199 3151",
    telefonoLink: "+390832-199-3151",
    email: "info@studiomariogiugno.it",
    whatsapp: "+393331234567",
    indirizzo: "Via Esempio 123, 73100 Lecce LE",
    coordinate: {
      lat: 40.3515,
      lng: 18.1750
    }
  },

  // Orari
  orari: {
    lunedi: { aperto: true, mattina: "09:00-13:00", pomeriggio: "15:00-19:00" },
    martedi: { aperto: true, mattina: "09:00-13:00", pomeriggio: "15:00-19:00" },
    mercoledi: { aperto: true, mattina: "09:00-13:00", pomeriggio: "15:00-19:00" },
    giovedi: { aperto: true, mattina: "09:00-13:00", pomeriggio: "15:00-19:00" },
    venerdi: { aperto: true, mattina: "09:00-13:00", pomeriggio: "15:00-19:00" },
    sabato: { aperto: true, mattina: "09:00-13:00", pomeriggio: null },
    domenica: { aperto: false, mattina: null, pomeriggio: null }
  },

  // Hero Section
  hero: {
    title: "Il Tuo Sorriso",
    titleHighlight: "è la Nostra Passione",
    subtitle: "Tecnologia all'avanguardia e cure personalizzate nel cuore di Lecce",
    ctaPrimary: {
      text: "Prenota Visita",
      href: "/prenota-visita",
      badge: "Valore 150€ - GRATIS"
    },
    ctaSecondary: {
      text: "Chiama Ora",
      href: "tel:+390832-199-3151"
    },
    trustBadges: [
      { text: "Certificato ISO 9001", icon: "shield" },
      { text: "Disponibilità H24", icon: "clock" },
      { text: "5 Stelle", icon: "star" },
      { text: "Eccellenza Certificata", icon: "certificate" }
    ],
    certifications: [
      { abbr: "ISO", name: "Certificazione ISO 9001" },
      { abbr: "AIC", name: "Accademia Italiana di Conservativa" },
      { abbr: "SIDO", name: "Società Italiana di Ortodonzia" }
    ]
  },

  // Statistiche
  stats: {
    anniEsperienza: 20,
    pazientiSoddisfatti: 2000,
    interventiFatti: 5000,
    recensioni5Stelle: 4.9
  },

  // SEO & Social
  seo: {
    siteName: "Studio Dentistico Dr. Mario Giugno",
    siteUrl: "https://studiomariogiugno.it",
    description: "Studio dentistico a Lecce specializzato in implantologia e chirurgia orale. Prima visita gratuita.",
    keywords: "dentista lecce, implantologia lecce, studio dentistico lecce",
    ogImage: "/images/og-mario-giugno.jpg"
  },

  social: {
    facebook: "https://facebook.com/studiomariogiugno",
    instagram: "https://instagram.com/studiomariogiugno",
    linkedin: null,
    youtube: null
  },

  // Immagini specifiche
  images: {
    logo: "/images/logo-mario-giugno.png",
    heroBg: "/images/studio-dentistico-bg.jpg.png",
    heroMobile: "/images/dentista-mobile.png",
    doctor: "/images/doctor-mario-giugno.jpg"
  },

  // Colori brand (opzionale - per personalizzazione colori)
  branding: {
    primaryColor: "#0d9488", // teal
    secondaryColor: "#14b8a6",
    accentColor: "#f59e0b"
  }
};
