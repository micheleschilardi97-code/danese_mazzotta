import type { ClientConfig } from './ditanna-cairo';

export const clientConfig: ClientConfig = {
  // Informazioni Studio
  studio: {
    nome: "Studio Dentistico Nuzzoli Zacchino",
    nomeBreve: "Studio Nuzzoli Zacchino",
    dottore: "Dott. Nuzzoli Zacchino",
    specializzazione: "Odontoiatria e Cure Dentali",
  },

  // Contatti
  contatti: {
    telefono: "329 392 3074",
    telefonoLink: "+393293923074",
    email: "info@nuzzolizacchino.it",
    whatsapp: "+393293923074",
    indirizzo: "Via Giovanni Antonio Orsini del Balzo, 26, 73100 Lecce LE",
    coordinate: {
      lat: 40.3499,
      lng: 18.1781
    }
  },

  // Orari
  orari: {
    lunedi: { aperto: false, mattina: null, pomeriggio: null },
    martedi: { aperto: false, mattina: null, pomeriggio: null },
    mercoledi: { aperto: false, mattina: null, pomeriggio: null },
    giovedi: { aperto: true, mattina: "09:00-13:00", pomeriggio: "15:00-19:00" },
    venerdi: { aperto: true, mattina: "09:00-13:00", pomeriggio: "15:00-19:00" },
    sabato: { aperto: true, mattina: "09:00-13:00", pomeriggio: null },
    domenica: { aperto: false, mattina: null, pomeriggio: null }
  },

  // Hero Section
  hero: {
    title: "Il Tuo Sorriso",
    titleHighlight: "è la Nostra Priorità",
    subtitle: "Cure odontoiatriche di qualità nel cuore di Lecce",
    ctaPrimary: {
      text: "Prenota Visita",
      href: "/prenota-visita",
      badge: "Valore 150€ - GRATIS"
    },
    ctaSecondary: {
      text: "Chiama Ora",
      href: "tel:+393293923074"
    },
    trustBadges: [
      { text: "Professionalità Garantita", icon: "shield" },
      { text: "Orari Flessibili", icon: "clock" },
      { text: "5 Stelle", icon: "star" },
      { text: "Centro Autorizzato", icon: "certificate" }
    ],
    certifications: [
      { abbr: "OMC", name: "Ordine Medici Chirurghi" },
      { abbr: "SIO", name: "Società Italiana Odontoiatria" },
      { abbr: "AIC", name: "Accademia Italiana di Conservativa" }
    ]
  },

  // Statistiche
  stats: {
    anniEsperienza: 15,
    pazientiSoddisfatti: 1500,
    interventiFatti: 3500,
    recensioni5Stelle: 4.8
  },

  // SEO & Social
  seo: {
    siteName: "Studio Dentistico Nuzzoli Zacchino",
    siteUrl: "https://nuzzolizacchino.it",
    description: "Studio dentistico a Lecce. Cure odontoiatriche professionali. Prima visita gratuita.",
    keywords: "dentista lecce, studio dentistico lecce, odontoiatra lecce",
    ogImage: "/images/og-nuzzoli-zacchino.jpg"
  },

  social: {
    facebook: "https://facebook.com/nuzzolizacchino",
    instagram: "https://instagram.com/nuzzolizacchino",
    linkedin: null,
    youtube: null
  },

  // Immagini specifiche
  images: {
    logo: "/images/logo-nuzzoli-zacchino.png",
    heroBg: "/images/studio-dentistico-bg.jpg.png",
    heroMobile: "/images/dentista-mobile.png",
    doctor: "/images/doctor-nuzzoli-zacchino.jpg"
  },

  // Colori brand
  branding: {
    primaryColor: "#0d9488", // teal
    secondaryColor: "#14b8a6",
    accentColor: "#f59e0b"
  }
};
