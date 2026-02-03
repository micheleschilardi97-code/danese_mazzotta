'use client';

import { useEffect } from 'react';
import Hero from "./(sections)/hero/Hero";
import Servizi from "./(sections)/servizi/Servizi";
import Contatti from "./(sections)/contatti/Contatti";

export default function Home() {
  useEffect(() => {
    // Smooth scroll behavior enhanced
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };

    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', handleSmoothScroll as EventListener);
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.removeEventListener('click', handleSmoothScroll as EventListener);
      });
    };
  }, []);

  return (
    <>
      <Hero />
      <Servizi />
      <Contatti />
    </>
  );
}
