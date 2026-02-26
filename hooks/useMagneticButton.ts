import { useState, useRef, MouseEvent, useCallback } from 'react';

interface MagneticOffset {
  x: number;
  y: number;
}

export function useMagneticButton(strength: number = 0.3) {
  const [offset, setOffset] = useState<MagneticOffset>({ x: 0, y: 0 });
  const buttonRef = useRef<HTMLElement | null>(null);
  const rafId = useRef<number>(0);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!buttonRef.current) return;

    // Throttle via requestAnimationFrame
    cancelAnimationFrame(rafId.current);
    rafId.current = requestAnimationFrame(() => {
      if (!buttonRef.current) return;
      const rect = buttonRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const distanceX = (e.clientX - centerX) * strength;
      const distanceY = (e.clientY - centerY) * strength;
      setOffset({ x: distanceX, y: distanceY });
    });
  }, [strength]);

  const handleMouseLeave = useCallback(() => {
    cancelAnimationFrame(rafId.current);
    setOffset({ x: 0, y: 0 });
  }, []);

  return {
    offset,
    buttonRef,
    handleMouseMove,
    handleMouseLeave
  };
}
