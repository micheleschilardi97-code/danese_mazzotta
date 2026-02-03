/**
 * Hero Section Data Configuration
 * Dental Practice - Lecce, Italy
 * Target: 5%+ conversion rate | Mobile-first
 */

export const heroData = {
  // ═══════════════════════════════════════════════════════════════
  // HEADLINE
  // ═══════════════════════════════════════════════════════════════
  title: "Il Tuo Sorriso Perfetto",
  titleHighlight: "Impianti Dentali Senza Dolore",
  
  // ═══════════════════════════════════════════════════════════════
  // SUBHEADLINE + VALUE PROPS
  // ═══════════════════════════════════════════════════════════════
  subtitle: "Tecnologia 3D avanzata · Sedazione cosciente · Garanzia 10 anni",
  
  // ═══════════════════════════════════════════════════════════════
  // VIDEO BACKGROUND (Authentic footage, NOT stock)
  // ═══════════════════════════════════════════════════════════════
  backgroundVideo: "/videos/studio-dentistico.mp4",
  backgroundVideoMobile: "/videos/studio-dentistico-mobile.mp4",
  backgroundImage: "/images/studio-hero-poster.jpg",
  
  // ═══════════════════════════════════════════════════════════════
  // TRUST BADGES (Above headline - CRITICAL positioning)
  // ═══════════════════════════════════════════════════════════════
  trustBadges: [
    { icon: "shield", text: "15 Anni Esperienza", color: "accent" },
    { icon: "star", text: "5★ Google (200+ Recensioni)", color: "gold" },
    { icon: "users", text: "2000+ Pazienti Felici", color: "accent" }
  ],
  
  // ═══════════════════════════════════════════════════════════════
  // GOOGLE RATING (Inline with subheadline)
  // ═══════════════════════════════════════════════════════════════
  googleRating: {
    enabled: true,
    ratingValue: 5.0,
    reviewCount: 200,
    stars: 5
  },
  
  // ═══════════════════════════════════════════════════════════════
  // PROFESSIONAL CERTIFICATIONS
  // ═══════════════════════════════════════════════════════════════
  certifications: [
    { name: "Società Italiana Implantologia", abbr: "SIO" },
    { name: "Ordine Medici Chirurghi", abbr: "OMC Lecce" },
    { name: "European Association of Dental Implantologists", abbr: "EADI" }
  ],
  
  // ═══════════════════════════════════════════════════════════════
  // URGENCY COUNTDOWN TIMER (+22% conversion)
  // ═══════════════════════════════════════════════════════════════
  urgencyCountdown: {
    enabled: true,
    endDate: "2026-02-28T23:59:59",
    text: "🎯 Offerta Prima Visita Gratuita scade tra:"
  },
  urgencyText: "⚡ Solo 5 posti disponibili per Febbraio 2026",
  
  // ═══════════════════════════════════════════════════════════════
  // SOCIAL PROOF NOTIFICATIONS (+31% conversion)
  // ═══════════════════════════════════════════════════════════════
  socialProof: {
    enabled: true,
    rotationInterval: 15000, // 15 seconds
    displayDuration: 5000, // 5 seconds
    initialDelay: 3000, // First after 3s
    recentPatients: [
      { name: "Maria R.", city: "Lecce", service: "Impianto dentale", rating: 5, timeAgo: "2 ore fa" },
      { name: "Giuseppe T.", city: "Surbo", service: "Prima visita", rating: 5, timeAgo: "5 ore fa" },
      { name: "Anna M.", city: "Lecce", service: "Sbiancamento", rating: 5, timeAgo: "1 giorno fa" },
      { name: "Marco L.", city: "Lecce", service: "Impianto dentale", rating: 5, timeAgo: "3 ore fa" }
    ]
  },
  
  // ═══════════════════════════════════════════════════════════════
  // PRIMARY CTA (Most important - €150 value)
  // ═══════════════════════════════════════════════════════════════
  ctaPrimary: {
    text: "Prima Visita Gratuita",
    href: "/contatti#prenota",
    badge: "€150 di valore - GRATIS",
    ariaLabel: "Prenota una visita gratuita con il Dott. Mario Giugno"
  },
  
  // ═══════════════════════════════════════════════════════════════
  // CLICK-TO-CALL CTA (+64% mobile calls)
  // ═══════════════════════════════════════════════════════════════
  phoneNumber: "0832 199 3151",
  phoneHref: "tel:+390832199315",
  phoneText: "CHIAMA ORA",
  phoneSubtext: "Lun-Ven 8:00-20:00 · Risposta immediata",
  phoneAriaLabel: "Chiama ora il 0832 199 3151",
  
  // ═══════════════════════════════════════════════════════════════
  // SEO & SCHEMA.ORG DATA
  // ═══════════════════════════════════════════════════════════════
  seo: {
    title: "Dentista Lecce | Impianti Senza Dolore | Prima Visita Gratis",
    description: "Studio Dentistico Dott. Mario Giugno. Impianti dentali con tecnologia 3D e sedazione cosciente. 15+ anni esperienza, 2000+ pazienti felici. Prima visita GRATIS.",
    keywords: ["dentista lecce", "impianti dentali", "sedazione cosciente", "prima visita gratis"]
  },
  
  // ═══════════════════════════════════════════════════════════════
  // PERFORMANCE FLAGS
  // ═══════════════════════════════════════════════════════════════
  features: {
    enableSocialProof: true,
    enableCountdown: true,
    enableParticles: true,
    enableVideoBackground: true,
    enableMagneticButtons: true,
    enable3DEffects: true
  }
};
