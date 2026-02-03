/**
 * Hero Section Constants
 * Centralized configuration for easy maintenance and consistency
 */

// Animation timing constants (in milliseconds)
export const ANIMATION_TIMING = {
  FAST: 300,
  MEDIUM: 600,
  SLOW: 900,
  EXTRA_SLOW: 1200,
  
  // Delays
  INITIAL_DELAY: 200,
  STAGGER_DELAY: 80,
  
  // Social proof
  SOCIAL_PROOF_DISPLAY: 5000,
  SOCIAL_PROOF_INTERVAL: 15000,
  SOCIAL_PROOF_FIRST_DELAY: 3000,
} as const;

// Intersection observer thresholds
export const OBSERVER_THRESHOLDS = {
  HERO: 0.2,
  SECTION: 0.1,
  PRECISE: [0, 0.25, 0.5, 0.75, 1],
} as const;

// Parallax intensity multipliers
export const PARALLAX_INTENSITY = {
  MILD: 0.3,
  MODERATE: 0.5,
  STRONG: 1.0,
  PARTICLES: { X: 0.5, Y: 0.3 },
} as const;

// Magnetic button settings
export const MAGNETIC_SETTINGS = {
  PRIMARY: { strength: 0.3, radius: 100 },
  SECONDARY: { strength: 0.2, radius: 80 },
  PHONE: { strength: 0.25, radius: 90 },
} as const;

// Breakpoints (must match CSS)
export const BREAKPOINTS = {
  MOBILE: 768,
  TABLET: 1024,
  DESKTOP: 1280,
  WIDE: 1920,
} as const;

// Z-index layers
export const Z_INDEX = {
  BACKGROUND: 0,
  GRADIENT: 1,
  PARTICLES: 2,
  NOISE: 3,
  CONTENT: 10,
  SOCIAL_PROOF: 999,
  NAVBAR: 1000,
  MODAL: 1100,
} as const;

// Color scheme
export const COLORS = {
  PRIMARY: '#0a0a0f',
  ACCENT: '#00d4aa',
  ACCENT_HOVER: '#00ffcc',
  ACCENT_GLOW: 'rgba(0, 212, 170, 0.5)',
  
  TEXT: {
    PRIMARY: 'rgba(255, 255, 255, 0.95)',
    SECONDARY: 'rgba(255, 255, 255, 0.7)',
    TERTIARY: 'rgba(255, 255, 255, 0.5)',
  },
  
  BACKGROUND: {
    OVERLAY: 'rgba(10, 10, 15, 0.95)',
    GLASS: 'rgba(255, 255, 255, 0.05)',
    GLASS_HOVER: 'rgba(255, 255, 255, 0.08)',
  },
} as const;

// Video settings
export const VIDEO_CONFIG = {
  OPACITY: 0.4,
  FALLBACK_OPACITY: 1,
  MOBILE_MAX_WIDTH: 768,
  PRELOAD: 'metadata' as const,
  LOADING: 'lazy' as const,
} as const;

// Performance settings
export const PERFORMANCE = {
  DEBOUNCE_DELAY: 150,
  THROTTLE_LIMIT: 16, // ~60fps
  RAF_TIMEOUT: 1000 / 60, // 60fps
  LAZY_LOAD_OFFSET: '200px',
} as const;

// Trust badges icons
export const TRUST_ICONS = {
  SHIELD: 'shield',
  CLOCK: 'clock',
  STAR: 'star',
  CERTIFICATE: 'certificate',
  CHECK: 'check',
  AWARD: 'award',
} as const;

// Social proof animation states
export const SOCIAL_PROOF_STATES = {
  IDLE: 'idle',
  ENTERING: 'entering',
  VISIBLE: 'visible',
  EXITING: 'exiting',
} as const;

// CTA button variants
export const CTA_VARIANTS = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  OUTLINE: 'outline',
  GHOST: 'ghost',
  LINK: 'link',
} as const;

// Accessibility labels
export const ARIA_LABELS = {
  HERO_SECTION: 'Sezione principale - Studio Dentistico',
  CTA_PRIMARY: 'Prenota una visita gratuita',
  CTA_SECONDARY: 'Visualizza testimonianze e risultati',
  PHONE_CTA: 'Chiama lo studio dentistico',
  SOCIAL_PROOF: 'Notifica di prenotazione recente',
  COUNTDOWN: 'Tempo rimanente per l\'offerta',
  VIDEO_BACKGROUND: 'Video di sfondo dello studio',
  TRUST_BADGE: (text: string) => `Badge di fiducia: ${text}`,
  CERTIFICATION: (name: string) => `Certificazione professionale: ${name}`,
} as const;

// Error messages
export const ERROR_MESSAGES = {
  VIDEO_LOAD_FAILED: 'Impossibile caricare il video',
  COUNTDOWN_EXPIRED: 'L\'offerta è scaduta',
  GENERIC_ERROR: 'Si è verificato un errore',
} as const;

// Success messages
export const SUCCESS_MESSAGES = {
  FORM_SUBMITTED: 'Richiesta inviata con successo!',
  CALL_INITIATED: 'Chiamata in corso...',
} as const;

// Particle count by device
export const PARTICLE_CONFIG = {
  DESKTOP: 8,
  TABLET: 6,
  MOBILE: 4,
  SIZE_RANGE: { MIN: 3, MAX: 6 },
  ANIMATION_RANGE: { MIN: 15, MAX: 25 },
} as const;

// Countdown display format
export const COUNTDOWN_FORMAT = {
  SHOW_DAYS_THRESHOLD: 1, // Show days only if > 1 day remaining
  ZERO_PAD: true,
  LABELS: {
    DAYS: 'giorni',
    HOURS: 'ore',
    MINUTES: 'min',
    SECONDS: 'sec',
  },
} as const;

// Phone number formatting
export const PHONE_FORMAT = {
  DISPLAY: 'XXXX XXX XXXX', // Italian format
  HREF: '+39XXXXXXXXXX',
  COUNTRY_CODE: '+39',
} as const;

// SEO & Meta
export const SEO_CONFIG = {
  TITLE_TEMPLATE: '%s | Studio Dentistico Dott. Mario Giugno',
  DEFAULT_TITLE: 'Dentista Lecce | Impianti Senza Dolore',
  DESCRIPTION_LENGTH: { MIN: 120, MAX: 160 },
  OG_IMAGE_SIZE: { WIDTH: 1200, HEIGHT: 630 },
} as const;

// Feature flags (for A/B testing or gradual rollout)
export const FEATURES = {
  ENABLE_SOCIAL_PROOF: true,
  ENABLE_COUNTDOWN: true,
  ENABLE_PARTICLES: true,
  ENABLE_VIDEO_BACKGROUND: true,
  ENABLE_MAGNETIC_BUTTONS: true,
  ENABLE_3D_EFFECTS: true,
} as const;

// Type exports for TypeScript
export type AnimationTiming = typeof ANIMATION_TIMING;
export type ColorScheme = typeof COLORS;
export type BreakpointConfig = typeof BREAKPOINTS;
export type AriaLabels = typeof ARIA_LABELS;
