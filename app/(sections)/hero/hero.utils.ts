// Hero utility functions for performance optimization

/**
 * Preload critical assets for faster initial render
 */
export const preloadCriticalAssets = () => {
  if (typeof window === 'undefined') return;
  
  // Preload video
  const videoLink = document.createElement('link');
  videoLink.rel = 'preload';
  videoLink.as = 'video';
  videoLink.href = '/videos/studio-dentistico.mp4';
  document.head.appendChild(videoLink);
};

/**
 * Optimized intersection observer options
 */
export const heroObserverOptions = {
  threshold: [0, 0.2, 0.4, 0.6, 0.8, 1],
  rootMargin: '-10% 0px -10% 0px'
};

/**
 * Performance-optimized countdown calculation
 */
export const calculateTimeLeft = (endDate: string) => {
  const difference = new Date(endDate).getTime() - Date.now();
  
  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
    expired: false
  };
};

/**
 * Smooth number counter animation
 */
export const animateCount = (
  start: number,
  end: number,
  duration: number,
  callback: (value: number) => void
) => {
  const startTime = performance.now();
  const range = end - start;

  const updateCount = (currentTime: number) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    // Easing function for smooth animation
    const easeOutQuart = 1 - Math.pow(1 - progress, 4);
    const currentValue = Math.floor(start + range * easeOutQuart);
    
    callback(currentValue);
    
    if (progress < 1) {
      requestAnimationFrame(updateCount);
    }
  };

  requestAnimationFrame(updateCount);
};

/**
 * Debounce function for performance
 */
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

/**
 * Throttle function for scroll/resize events
 */
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

/**
 * Generate random particle positions for visual variety
 */
export const generateParticlePositions = (count: number) => {
  return Array.from({ length: count }, () => ({
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    size: Math.random() * 3 + 3, // 3-6px
    delay: Math.random() * 5,
    duration: Math.random() * 10 + 15 // 15-25s
  }));
};

/**
 * Check if reduced motion is preferred (accessibility)
 */
export const prefersReducedMotion = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

/**
 * Format phone number for display
 */
export const formatPhoneNumber = (phone: string): string => {
  // Format: 0832 199 3151
  const cleaned = phone.replace(/\D/g, '');
  const match = cleaned.match(/^(\d{4})(\d{3})(\d{4})$/);
  
  if (match) {
    return `${match[1]} ${match[2]} ${match[3]}`;
  }
  
  return phone;
};

/**
 * Get optimal video source based on device
 */
export const getOptimalVideoSource = (isMobile: boolean) => {
  return isMobile 
    ? '/videos/studio-dentistico-mobile.mp4'
    : '/videos/studio-dentistico.mp4';
};

/**
 * Validate email format
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Get time of day greeting
 */
export const getTimeBasedGreeting = (): string => {
  const hour = new Date().getHours();
  
  if (hour < 12) return 'Buongiorno';
  if (hour < 18) return 'Buon pomeriggio';
  return 'Buonasera';
};

/**
 * Calculate urgency level based on remaining spots
 */
export const getUrgencyLevel = (remainingSpots: number): 'low' | 'medium' | 'high' => {
  if (remainingSpots <= 2) return 'high';
  if (remainingSpots <= 5) return 'medium';
  return 'low';
};

/**
 * Generate structured data for SEO
 */
export const generateHeroStructuredData = (data: any) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    'name': 'Studio Dentistico Di Tanna Cairo',
    'description': data.subtitle,
    'telephone': data.phoneNumber,
    'priceRange': '$$',
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '5',
      'reviewCount': '2000'
    }
  };
};
