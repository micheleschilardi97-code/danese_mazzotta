export const heroData = {
  title: "Il Tuo Sorriso Perfetto",
  titleHighlight: "Senza Dolore, Con Tecnologia Avanzata",
  subtitle: "Impianti dentali di ultima generazione con sedazione cosciente. Oltre 15 anni di esperienza e 2000+ pazienti soddisfatti a Lecce.",
  
  // Video background per maggiore engagement
  backgroundVideo: "/videos/studio-dentistico.mp4",
  backgroundVideoMobile: "/videos/studio-dentistico-mobile.mp4",
  backgroundImage: "/images/studio-dentistico-bg.jpg", // Fallback
  
  trustBadges: [
    { icon: "shield", text: "Garanzia 10 Anni", color: "accent" },
    { icon: "clock", text: "Prima Visita Gratuita", color: "accent" },
    { icon: "star", text: "2000+ Pazienti Felici", color: "gold" },
    { icon: "certificate", text: "Certificato ISO 9001", color: "blue" }
  ],
  
  // Certificazioni professionali
  certifications: [
    { name: "Società Italiana Implantologia", abbr: "SIO" },
    { name: "Ordine Medici Chirurghi", abbr: "OMC Lecce" },
    { name: "European Association of Dental Implantologists", abbr: "EADI" }
  ],
  
  // Countdown urgency - scadenza offerta
  urgencyCountdown: {
    enabled: true,
    endDate: "2026-02-28T23:59:59", // Fine febbraio 2026
    text: "Offerta Prima Visita Gratuita scade tra:"
  },
  urgencyText: "🎯 Solo 5 posti disponibili per febbraio 2026",
  
  // Social proof dinamico
  socialProof: {
    enabled: true,
    recentPatients: [
      { name: "Maria R.", city: "Lecce", service: "Impianto dentale", rating: 5, timeAgo: "2 ore fa" },
      { name: "Giuseppe T.", city: "Surbo", service: "Prima visita", rating: 5, timeAgo: "5 ore fa" },
      { name: "Anna M.", city: "Lecce", service: "Sbiancamento", rating: 5, timeAgo: "1 giorno fa" }
    ]
  },
  
  ctaPrimary: {
    text: "Prenota Visita Gratuita",
    href: "/contatti",
    badge: "Valore 150€ - GRATIS" // Value proposition
  },
  ctaSecondary: {
    text: "Guarda i Risultati",
    href: "/testimonianze", // Cambiato per mostrare prima i risultati
    icon: "play" // Video testimonials
  },
  phoneNumber: "0832 199 3151",
  phoneText: "Chiama Ora",
  phoneSubtext: "Risposta immediata 8:00-20:00"
};
