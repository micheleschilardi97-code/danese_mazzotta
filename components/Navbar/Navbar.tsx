'use client';

import { useScrollThreshold } from '@/hooks/useScrollPosition';
import { navLinks, studioInfo } from './navbar.data';
import MobileMenu from './MobileMenu';
import styles from './Navbar.module.css';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const isScrolled = useScrollThreshold(50);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger entrance animation
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''} ${isLoaded ? styles.loaded : ''}`}>
        <div className="container">
          <div className={styles.navbarContent}>
            {/* Logo with Badge */}
            <div className={styles.logoWrapper}>
              <Link href="/" className={styles.logo}>
                <div className={styles.logoTitle}>{studioInfo.dottore}</div>
                <div className={styles.logoSubtitle}>Studio Dentistico - Lecce</div>
              </Link>
              <span className={styles.badge} aria-label="Offerta prima visita gratuita">
                Prima Visita Gratis
              </span>
            </div>

            {/* Desktop Navigation */}
            <ul className={styles.navLinks} role="menubar">
              {navLinks.map((link) => (
                <li key={link.href} role="none">
                  <Link 
                    href={link.href} 
                    className={styles.navLink}
                    role="menuitem"
                    aria-label={`Naviga a ${link.label}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* CTA Button with Pulse Animation */}
            <a 
              href={`tel:${studioInfo.telefono_tel}`} 
              className={styles.ctaButton}
              aria-label={`Chiama ora al numero ${studioInfo.telefono}`}
            >
              <span className={styles.ctaIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </span>
              <span className={styles.ctaText}>
                <span className={styles.ctaLabel}>Chiama Ora</span>
                <span className={styles.ctaPhone}>{studioInfo.telefono}</span>
              </span>
            </a>

            {/* Mobile Menu Button */}
            <button
              className={`${styles.mobileMenuButton} ${isMobileMenuOpen ? styles.open : ''}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Chiudi menu" : "Apri menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <div className={styles.hamburgerIcon}>
                <span className={styles.hamburgerLine}></span>
                <span className={styles.hamburgerLine}></span>
                <span className={styles.hamburgerLine}></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        links={navLinks}
        studioInfo={studioInfo}
        onLinkClick={handleLinkClick}
      />
    </>
  );
}
