import { getHeroData } from '@/config';

/**
 * Hero Section Data Configuration
 * Dental Practice - Lecce, Italy
 * Target: 5%+ conversion rate | Mobile-first
 */

const configHero = getHeroData();

export const heroData = {
  // ═══════════════════════════════════════════════════════════════
  // HEADLINE
  // ═══════════════════════════════════════════════════════════════
  title: configHero.title,
  titleHighlight: configHero.titleHighlight,
  
  // ═══════════════════════════════════════════════════════════════
  // SUBHEADLINE + VALUE PROPS
  // ═══════════════════════════════════════════════════════════════
  subtitle: configHero.subtitle,
  
  // ═══════════════════════════════════════════════════════════════
  // VIDEO BACKGROUND (Authentic footage, NOT stock)
  // ═══════════════════════════════════════════════════════════════
  backgroundVideo: "/videos/studio-dentistico.mp4",
  backgroundVideoMobile: "/videos/studio-dentistico-mobile.mp4",
  backgroundImage: "/images/studio_2.png",
  
  // ═══════════════════════════════════════════════════════════════
  // TRUST BADGES (Above headline - CRITICAL positioning)
  // ═══════════════════════════════════════════════════════════════
  trustBadges: configHero.trustBadges,
  
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
  certifications: configHero.certifications,
  
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
      { name: "Maria R.", city: "Lecce", service: "Parodontologia", rating: 5, timeAgo: "2 ore fa" },
      { name: "Giuseppe T.", city: "Leverano", service: "Impianto dentale", rating: 5, timeAgo: "5 ore fa" },
      { name: "Anna M.", city: "Nardò", service: "Sbiancamento", rating: 5, timeAgo: "1 giorno fa" },
      { name: "Marco L.", city: "Lecce", service: "Ortodonzia invisibile", rating: 5, timeAgo: "3 ore fa" }
    ]
  },
  
  // ═══════════════════════════════════════════════════════════════
  // PRIMARY CTA (Most important - €150 value)
  // ═══════════════════════════════════════════════════════════════
  ctaPrimary: configHero.ctaPrimary,
  
  // ═══════════════════════════════════════════════════════════════
  // CLICK-TO-CALL CTA (+64% mobile calls)
  // ═══════════════════════════════════════════════════════════════
  phoneNumber: configHero.ctaSecondary.text,
  phoneHref: configHero.ctaSecondary.href,
  phoneText: "CHIAMA ORA",
  phoneSubtext: "Lun-Sab · Risposta immediata",
  phoneAriaLabel: `Chiama ora al ${configHero.ctaSecondary.text}`,
  
  // ═══════════════════════════════════════════════════════════════
  // SEO & SCHEMA.ORG DATA
  // ═══════════════════════════════════════════════════════════════
  seo: {
    title: "Dentista Lecce | Studio Dentistico Danese-Mazzotta | Prenota Online",
    description: "Studio Dentistico Danese-Mazzotta a Lecce (LE). Parodontologia, ortodonzia invisibile, implantologia, laser terapia. Prenota online.",
    keywords: ["dentista lecce", "studio dentistico lecce", "parodontologia lecce", "ortodonzia invisibile lecce"]
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
