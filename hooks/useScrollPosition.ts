'use client';

import { useState, useEffect } from 'react';

interface ScrollPosition {
  x: number;
  y: number;
}

export function useScrollPosition(): ScrollPosition {
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    // Check if window is defined (client-side)
    if (typeof window === 'undefined') return;

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          setScrollPosition({
            x: window.scrollX,
            y: window.scrollY,
          });
          ticking = false;
        });
      }
    };

    // Set initial position
    setScrollPosition({ x: window.scrollX, y: window.scrollY });

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return scrollPosition;
}

/**
 * Hook to detect if user has scrolled past a certain threshold
 */
export function useScrollThreshold(threshold: number = 100): boolean {
  const { y } = useScrollPosition();
  return y > threshold;
}
