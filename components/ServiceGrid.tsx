'use client';

import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Zap, 
  Shield, 
  Smile, 
  Scan, 
  Heart,
  ArrowRight 
} from 'lucide-react';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string; size?: number }>;
  features: string[];
  price: string;
  popular?: boolean;
  href: string;
}

const services: Service[] = [
  {
    id: 1,
    title: 'Impianti Dentali',
    description: 'Tecnologia 3D per impianti precisi, duraturi e senza dolore con sedazione cosciente.',
    icon: Sparkles,
    features: [
      'Scansione 3D digitale',
      'Sedazione cosciente',
      'Garanzia 10 anni',
      'Risultato immediato'
    ],
    price: 'Da €890',
    popular: true,
    href: '/servizi/impianti-dentali'
  },
  {
    id: 2,
    title: 'Ortodonzia Invisibile',
    description: 'Allineatori trasparenti per raddrizzare i denti senza apparecchi metallici.',
    icon: Smile,
    features: [
      'Invisibile al 100%',
      'Rimovibile',
      'Piano personalizzato',
      'Risultati in 6-12 mesi'
    ],
    price: 'Da €1.200',
    href: '/servizi/ortodonzia'
  },
  {
    id: 3,
    title: 'Sbiancamento Dentale',
    description: 'Trattamento professionale per un sorriso bianco e brillante in una sola seduta.',
    icon: Zap,
    features: [
      'Risultato immediato',
      'LED professionale',
      'Sicuro per smalto',
      'Dura 12-24 mesi'
    ],
    price: 'Da €299',
    href: '/servizi/sbiancamento'
  },
  {
    id: 4,
    title: 'Protesi Dentarie',
    description: 'Protesi fisse e mobili su misura per ripristinare funzionalità ed estetica.',
    icon: Shield,
    features: [
      'Materiali certificati',
      'Design naturale',
      'Lunga durata',
      'Confort garantito'
    ],
    price: 'Da €650',
    href: '/servizi/protesi'
  },
  {
    id: 5,
    title: 'Parodontologia',
    description: 'Cura specialistica delle gengive per prevenire perdita ossea e mobilità dentale.',
    icon: Heart,
    features: [
      'Laser terapia',
      'Rigenerazione ossea',
      'Trattamento indolore',
      'Prevenzione efficace'
    ],
    price: 'Da €450',
    href: '/servizi/parodontologia'
  },
  {
    id: 6,
    title: 'Diagnostica 3D',
    description: 'TAC Cone Beam e scanner intraorali per diagnosi precise e pianificazione chirurgica.',
    icon: Scan,
    features: [
      'Immagini HD 3D',
      'Radiazioni minime',
      'Referto immediato',
      'Precisione chirurgica'
    ],
    price: 'Incluso',
    href: '/servizi/diagnostica'
  }
];

export default function ServiceGrid() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1
    }
  };

  return (
    <section 
      ref={ref}
      className="py-20 md:py-32 bg-gradient-to-b from-[#1e293b] to-[#0f172a]"
      aria-labelledby="services-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-2 bg-emerald-500/10 text-emerald-400 rounded-full text-sm font-semibold mb-4">
            I Nostri Servizi
          </span>
          <h2 
            id="services-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Soluzioni Avanzate per{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">
              Ogni Esigenza
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Tecnologia 3D, sedazione cosciente e materiali certificati per risultati eccellenti
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {services.map((service) => (
            <motion.article
              key={service.id}
              variants={cardVariants}
              whileHover={{ 
                y: -8,
                boxShadow: '0 20px 40px rgba(16, 185, 129, 0.2)',
                transition: { duration: 0.3 }
              }}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-emerald-500/50 transition-all duration-300 overflow-hidden"
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white text-xs font-bold rounded-full shadow-lg">
                  Più Richiesto
                </div>
              )}

              {/* Icon */}
              <div className="relative mb-6">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 rounded-2xl group-hover:from-emerald-500/30 group-hover:to-emerald-600/30 transition-all duration-300">
                  <service.icon 
                    className="w-7 h-7 text-emerald-400 group-hover:scale-110 transition-transform" 
                    aria-hidden="true"
                  />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features List */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, index) => (
                  <li 
                    key={index}
                    className="flex items-center gap-2 text-sm text-gray-300"
                  >
                    <svg 
                      className="w-4 h-4 text-emerald-500 flex-shrink-0" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Price & CTA */}
              <div className="flex items-center justify-between pt-6 border-t border-white/10">
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">A partire da</p>
                  <p className="text-2xl font-bold text-white">{service.price}</p>
                </div>
                
                <Link
                  href={service.href}
                  className="group/btn inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 text-emerald-400 rounded-lg hover:bg-emerald-500 hover:text-white transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-emerald-500/50"
                  aria-label={`Scopri di più su ${service.title}`}
                >
                  <span className="text-sm font-semibold">Scopri</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" aria-hidden="true" />
                </Link>
              </div>

              {/* Hover Gradient Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 via-emerald-500/0 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" />
            </motion.article>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <p className="text-gray-400 mb-6">
            Non trovi il servizio che cerchi? <br className="sm:hidden" />
            Contattaci per una consulenza personalizzata.
          </p>
          <Link
            href="/contatti"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-bold rounded-full hover:shadow-glow-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-emerald-500/50"
          >
            <span>Richiedi Consulenza Gratuita</span>
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
