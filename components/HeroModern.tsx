'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Phone, Calendar, Award, Users, ChevronRight, Play } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface HeroProps {
  onBookingClick?: () => void;
}

export default function HeroModern({ onBookingClick }: HeroProps) {
  const shouldReduceMotion = useReducedMotion();

  // Varianti animazione per accessibilità
  const fadeInUp = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 50 },
    visible: { 
      opacity: 1, 
      y: 0
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
        duration: 0.6
      }
    }
  };

  const staggerItem = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 30 },
    visible: { 
      opacity: 1, 
      y: 0
    }
  };

  const trustBadges = [
    {
      icon: Award,
      label: '15 Anni Esperienza',
      color: 'text-emerald-400'
    },
    {
      icon: Users,
      label: '5000+ Pazienti',
      color: 'text-blue-400'
    },
    {
      icon: '⭐',
      label: '5.0 Google Rating',
      color: 'text-yellow-400',
      isEmoji: true
    }
  ];

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0f172a]"
      aria-label="Hero section - Studio dentistico moderno"
    >
      {/* Video Background con overlay gradient */}
      <div className="absolute inset-0 z-0">
        {/* Video per desktop */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="hidden md:block absolute inset-0 w-full h-full object-cover opacity-40"
          poster="/images/studio-dentistico-bg.jpg"
        >
          <source src="/videos/studio-dentistico.mp4" type="video/mp4" />
        </video>

        {/* Immagine fallback per mobile */}
        <Image
          src="/images/studio-dentistico-bg.jpg"
          alt="Studio dentistico moderno con tecnologia avanzata"
          fill
          priority
          quality={90}
          className="md:hidden object-cover opacity-30"
          sizes="100vw"
        />

        {/* Gradient overlay per leggibilità */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a]/90 via-[#1e293b]/85 to-[#0f172a]/90" />
        
        {/* Pattern dots decorativo */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle, #10b981 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-0">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Trust Badges Above the Fold */}
          <motion.div 
            variants={staggerItem}
            className="flex flex-wrap justify-center gap-4 md:gap-6 mb-8"
          >
            {trustBadges.map((badge, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full"
                whileHover={{ scale: 1.05, borderColor: 'rgba(16, 185, 129, 0.5)' }}
                transition={{ type: 'spring', bounce: 0.2 }}
              >
                {badge.isEmoji ? (
                  <span className="text-xl" role="img" aria-label="stella">⭐</span>
                ) : (
                  <badge.icon className={`w-5 h-5 ${badge.color}`} aria-hidden="true" />
                )}
                <span className="text-sm md:text-base font-medium text-white/90">
                  {badge.label}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Main Headline - Emozionale e orientata al paziente */}
          <motion.h1 
            variants={fadeInUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Sorridi con{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 animate-pulse-subtle">
              Fiducia
            </span>
          </motion.h1>

          {/* Subheadline - Servizi chiave e tecnologia */}
          <motion.p 
            variants={staggerItem}
            className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Impianti dentali di ultima generazione con tecnologia 3D avanzata.
            <br className="hidden sm:block" />
            <span className="text-emerald-400 font-semibold">Senza dolore</span>, con sedazione cosciente e risultati garantiti.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            variants={staggerItem}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            {/* Primary CTA - Prenota Visita */}
            <motion.button
              onClick={onBookingClick}
              className="group relative w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-bold text-lg rounded-full overflow-hidden shadow-lg shadow-emerald-500/30 focus:outline-none focus:ring-4 focus:ring-emerald-500/50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', bounce: 0.2 }}
              aria-label="Prenota una visita gratuita"
            >
              {/* Shine effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              
              <span className="relative flex items-center justify-center gap-2">
                <Calendar className="w-5 h-5" aria-hidden="true" />
                Prenota Visita Gratuita
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </span>
              
              {/* Badge "Valore 150€" */}
              <span className="absolute -top-2 -right-2 px-2 py-1 bg-red-500 text-white text-xs font-bold rounded-full shadow-lg">
                Valore 150€
              </span>
            </motion.button>

            {/* Secondary CTA - Scopri Servizi */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/servizi"
                className="group flex items-center gap-2 w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white/30 text-white font-semibold text-lg rounded-full hover:border-emerald-500 hover:bg-emerald-500/10 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white/30"
                aria-label="Scopri tutti i nostri servizi"
              >
                <Play className="w-5 h-5 text-emerald-400" aria-hidden="true" />
                Guarda i Risultati
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Chiamata diretta - Sticky su mobile */}
          <motion.div 
            variants={staggerItem}
            className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl"
          >
            <Phone className="w-6 h-6 text-emerald-400 animate-pulse" aria-hidden="true" />
            <div className="text-left">
              <p className="text-xs text-gray-400 uppercase tracking-wide">Chiamaci Ora</p>
              <a 
                href="tel:+393715855834"
                className="text-xl font-bold text-white hover:text-emerald-400 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-[#0f172a] rounded"
                aria-label="Chiama il numero 371 585 5834"
              >
                371 585 5834
              </a>
              <p className="text-xs text-gray-400">Lun-Ven 9:00-20:00</p>
            </div>
          </motion.div>

          {/* Trust Signals testuali */}
          <motion.div 
            variants={staggerItem}
            className="mt-12 pt-8 border-t border-white/10"
          >
            <p className="text-sm text-gray-400 mb-4">Certificati e Partner Ufficiali</p>
            <div className="flex flex-wrap justify-center gap-6 items-center opacity-60">
              <span className="text-xs font-medium text-gray-500">SIO • OMC Lecce • EADI</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 text-white/50"
        >
          <span className="text-xs uppercase tracking-wider">Scorri</span>
          <ChevronRight className="w-4 h-4 rotate-90" aria-hidden="true" />
        </motion.div>
      </motion.div>
    </section>
  );
}
