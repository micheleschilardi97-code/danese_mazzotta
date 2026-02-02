'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

interface Testimonial {
  id: number;
  name: string;
  age: number;
  city: string;
  service: string;
  rating: number;
  text: string;
  image: string;
  date: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Maria Rossi',
    age: 52,
    city: 'Lecce',
    service: 'Impianto Dentale Completo',
    rating: 5,
    text: 'Dopo anni di insicurezza, finalmente posso sorridere senza vergogna. Il Dr. Giugno è stato professionale e delicato, non ho sentito alcun dolore.',
    image: '/images/testimonials/maria-r.jpg',
    date: 'Gennaio 2026'
  },
  {
    id: 2,
    name: 'Giuseppe Toma',
    age: 45,
    city: 'Surbo',
    service: 'Sbiancamento Professionale',
    rating: 5,
    text: 'Risultato incredibile! I miei denti sono tornati bianchi come 20 anni fa. Servizio impeccabile e prezzi onesti.',
    image: '/images/testimonials/giuseppe-t.jpg',
    date: 'Dicembre 2025'
  },
  {
    id: 3,
    name: 'Anna Martini',
    age: 38,
    city: 'Lecce',
    service: 'Ortodonzia Invisibile',
    rating: 5,
    text: 'Ho sempre desiderato un sorriso perfetto. Grazie all\'ortodonzia invisibile, nessuno si è accorto del trattamento. Consigliatissimo!',
    image: '/images/testimonials/anna-m.jpg',
    date: 'Novembre 2025'
  }
];

export default function TestimonialSection() {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1
    }
  };

  return (
    <section 
      ref={ref}
      className="py-20 md:py-32 bg-gradient-to-b from-[#0f172a] to-[#1e293b]"
      aria-labelledby="testimonials-heading"
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
            Testimonianze Reali
          </span>
          <h2 
            id="testimonials-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Cosa Dicono i Nostri{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">
              Pazienti
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Oltre 5000 sorrisi trasformati con tecnologia avanzata e cura personalizzata
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {testimonials.map((testimonial) => (
            <motion.article
              key={testimonial.id}
              variants={cardVariants}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-emerald-500/50 hover:shadow-glow transition-all duration-300"
            >
              {/* Quote Icon */}
              <Quote 
                className="absolute top-4 right-4 w-12 h-12 text-emerald-500/20 group-hover:text-emerald-500/30 transition-colors" 
                aria-hidden="true"
              />

              {/* Patient Info */}
              <div className="flex items-start gap-4 mb-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-emerald-500/20 group-hover:ring-emerald-500/50 transition-all">
                  <Image
                    src={testimonial.image}
                    alt={`Foto di ${testimonial.name}`}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-white text-lg">{testimonial.name}</h3>
                  <p className="text-sm text-gray-400">{testimonial.age} anni • {testimonial.city}</p>
                  
                  {/* Star Rating */}
                  <div className="flex gap-1 mt-2" role="img" aria-label={`Valutazione ${testimonial.rating} stelle su 5`}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < testimonial.rating 
                            ? 'fill-yellow-400 text-yellow-400' 
                            : 'fill-gray-600 text-gray-600'
                        }`}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Service Badge */}
              <div className="inline-block px-3 py-1 bg-emerald-500/10 text-emerald-400 text-xs font-medium rounded-full mb-4">
                {testimonial.service}
              </div>

              {/* Testimonial Text */}
              <blockquote>
                <p className="text-gray-300 leading-relaxed mb-4 line-clamp-4">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
              </blockquote>

              {/* Date */}
              <time className="text-xs text-gray-500" dateTime={testimonial.date}>
                {testimonial.date}
              </time>

              {/* Verified Badge */}
              <div className="absolute bottom-4 right-4 flex items-center gap-1 text-xs text-emerald-400">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Verificato</span>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* CTA Bottom */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <a
            href="https://g.page/r/..."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full text-white hover:border-emerald-500 hover:bg-emerald-500/10 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-emerald-500/50"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <span className="font-semibold">Leggi tutte le recensioni su Google</span>
            <span className="flex items-center gap-1 px-2 py-1 bg-emerald-500/20 rounded-full text-sm">
              5.0 ⭐
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
