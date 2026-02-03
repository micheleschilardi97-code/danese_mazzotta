/**
 * useReducedMotion Hook
 * Respects user's motion preferences (WCAG 2.1 AA)
 * Returns true if user prefers reduced motion
 */

import { useEffect, useState } from 'react';

export const useReducedMotion = (): boolean => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check if window is available (SSR safety)
    if (typeof window === 'undefined') return;

    // Media query for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    // Set initial value
    setPrefersReducedMotion(mediaQuery.matches);

    // Handler for changes
    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    // Listen for changes (modern browsers)
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
    } else {
      // Fallback for older browsers
      mediaQuery.addListener(handleChange);
    }

    // Cleanup
    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleChange);
      } else {
        mediaQuery.removeListener(handleChange);
      }
    };
  }, []);

  return prefersReducedMotion;
};

/**
 * Usage example:
 * 
 * const prefersReducedMotion = useReducedMotion();
 * 
 * // Disable animations
 * const animationConfig = prefersReducedMotion
 *   ? { duration: 0 }
 *   : { duration: 0.6, type: 'spring' };
 * 
 * // Or conditionally render
 * {!prefersReducedMotion && <AnimatedComponent />}
 */
