'use client';

import { useState, useEffect, RefObject } from 'react';

interface UseIntersectionObserverProps {
  threshold?: number;        // 0.0 – 1.0 — percentuale elemento visibile
  rootMargin?: string;       // Offset prima del trigger (es. '0px 0px -100px 0px')
  triggerOnce?: boolean;     // Se true, l'animazione si attiva una sola volta
}

export function useIntersectionObserver(
  ref: RefObject<HTMLElement | null>,
  { 
    threshold = 0.15, 
    rootMargin = '0px 0px -50px 0px', 
    triggerOnce = true 
  }: UseIntersectionObserverProps = {}
) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasCheckedSupport, setHasCheckedSupport] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Check if IntersectionObserver is supported
    if (!hasCheckedSupport && !('IntersectionObserver' in window)) {
      // Use queueMicrotask to defer setState
      queueMicrotask(() => {
        setIsVisible(true);
        setHasCheckedSupport(true);
      });
      return;
    }

    if (hasCheckedSupport && !('IntersectionObserver' in window)) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [ref, threshold, rootMargin, triggerOnce, hasCheckedSupport]);

  return { isVisible };
}
