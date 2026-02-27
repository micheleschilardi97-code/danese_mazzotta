'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { NavLink } from './navbar.data';
import styles from './MobileMenu.module.css';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: NavLink[];
  studioInfo: {
    dottore: string;
    telefono: string;
    telefono_tel: string;
  };
  onLinkClick: () => void;
}

export default function MobileMenu({ 
  isOpen, 
  onClose, 
  links, 
  studioInfo,
  onLinkClick 
}: MobileMenuProps) {
  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleLinkClick = () => {
    onLinkClick();
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`${styles.backdrop} ${isOpen ? styles.open : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Menu Panel */}
      <div 
        className={`${styles.mobileMenu} ${isOpen ? styles.open : ''}`}
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menu principale"
      >
        {/* Header */}
        <div className={styles.menuHeader}>
          <div className={styles.menuLogo}>
            <div className={styles.logoTitle}>{studioInfo.dottore}</div>
            <div className={styles.logoSubtitle}>Studio Dentistico - Monteroni di Lecce</div>
          </div>
          <button
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Chiudi menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Menu Content */}
        <div className={styles.menuContent}>
          {/* Navigation Links */}
          <ul className={styles.menuLinks}>
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={styles.menuLink}
                  onClick={handleLinkClick}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA Section */}
          <div className={styles.menuCta}>
            <div className={styles.ctaTitle}>Prenota una visita</div>
            <a
              href={`tel:${studioInfo.telefono_tel}`}
              className={styles.ctaButton}
              onClick={handleLinkClick}
              aria-label={`Chiama ora al numero ${studioInfo.telefono}`}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span className={styles.ctaButtonText}>Chiama Ora</span>
              <span className={styles.ctaButtonPhone}>{studioInfo.telefono}</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
