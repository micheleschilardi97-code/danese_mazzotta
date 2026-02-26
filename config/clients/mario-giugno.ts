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
    nome: "Studio Dentistico Di Tanna Cairo",
    nomeBreve: "Studio Di Tanna Cairo",
    dottore: "Dott. Di Tanna e Dott.ssa Cairo",
    specializzazione: "Odontoiatria e Protesi Dentaria",
  },

  // Contatti
  contatti: {
    telefono: "333 445 8620",
    telefonoLink: "+393334458620",
    email: "info@studioditannocairo.it",
    whatsapp: "+393334458620",
    indirizzo: "Via Oronzo Quarta 7, 73043 Copertino LE",
    coordinate: {
      lat: 40.2697,
      lng: 18.0497
    }
  },

  // Orari (Aperto fino alle 20)
  orari: {
    lunedi: { aperto: true, mattina: "09:00-13:00", pomeriggio: "15:00-20:00" },
    martedi: { aperto: true, mattina: "09:00-13:00", pomeriggio: "15:00-20:00" },
    mercoledi: { aperto: true, mattina: "09:00-13:00", pomeriggio: "15:00-20:00" },
    giovedi: { aperto: true, mattina: "09:00-13:00", pomeriggio: "15:00-20:00" },
    venerdi: { aperto: true, mattina: "09:00-13:00", pomeriggio: "15:00-20:00" },
    sabato: { aperto: true, mattina: "09:00-13:00", pomeriggio: null },
    domenica: { aperto: false, mattina: null, pomeriggio: null }
  },

  // Hero Section
  hero: {
    title: "Il Tuo Sorriso",
    titleHighlight: "è la Nostra Missione",
    subtitle: "Professionalità, tecnologia d'avanguardia e cura dei dettagli a Copertino, nel cuore del Salento",
    ctaPrimary: {
      text: "Prenota Visita",
      href: "/prenota-visita",
      badge: "Prenota Online"
    },
    ctaSecondary: {
      text: "Chiama Ora",
      href: "tel:+393334458620"
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
    siteName: "Studio Dentistico Di Tanna Cairo",
    siteUrl: "https://studioditannocairo.it",
    description: "Studio dentistico a Copertino (Lecce) specializzato in parodontologia, ortodonzia invisibile, implantologia e laser terapia. Prenota online.",
    keywords: "dentista copertino, studio dentistico copertino lecce, parodontologia lecce, ortodonzia invisibile lecce, implantologia copertino",
    ogImage: "/images/og-ditanna-cairo.jpg"
  },

  social: {
    facebook: null,
    instagram: null,
    linkedin: null,
    youtube: null
  },

  // Immagini specifiche
  images: {
    logo: "/images/logo-ditanna-cairo.png",
    heroBg: "/images/studio-dentistico-bg.jpg.png",
    heroMobile: "/images/dentista-mobile.png",
    doctor: "/images/studio-dentistico-bg.jpg.png",
    doctorMobile: "/images/dentista-mobile.png"
  },

  // Colori brand (opzionale - per personalizzazione colori)
  branding: {
    primaryColor: "#0d9488", // teal
    secondaryColor: "#14b8a6",
    accentColor: "#f59e0b"
  }
};
