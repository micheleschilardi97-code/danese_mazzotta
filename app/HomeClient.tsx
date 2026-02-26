'use client';

import { useEffect } from 'react';
import dynamic from 'next/dynamic';
import Hero from "./(sections)/hero/Hero";

// Lazy load below-fold sections — reduces initial JS bundle
const Servizi = dynamic(() => import("./(sections)/servizi/Servizi"), {
  loading: () => <section style={{ minHeight: '400px' }} />,
});
const Contatti = dynamic(() => import("./(sections)/contatti/Contatti"), {
  loading: () => <section style={{ minHeight: '400px' }} />,
});

export default function HomeClient() {
  // Event delegation for smooth scroll — single listener instead of N
  useEffect(() => {
    const handleSmoothScroll = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (anchor?.hash) {
        e.preventDefault();
        const element = document.querySelector(anchor.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll);
    return () => document.removeEventListener('click', handleSmoothScroll);
  }, []);

  return (
    <>
      <Hero />
      <Servizi />
      <Contatti />
    </>
  );
}
