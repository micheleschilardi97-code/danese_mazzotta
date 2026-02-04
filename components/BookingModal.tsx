'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Phone, Mail, User, Clock, MessageSquare } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

// Schema validazione con Zod
const bookingSchema = z.object({
  name: z.string()
    .min(2, 'Il nome deve contenere almeno 2 caratteri')
    .max(50, 'Il nome è troppo lungo'),
  email: z.string()
    .email('Inserisci un\'email valida'),
  phone: z.string()
    .regex(/^[0-9]{9,10}$/, 'Inserisci un numero di telefono valido (9-10 cifre)'),
  service: z.string()
    .min(1, 'Seleziona un servizio'),
  preferredDate: z.string()
    .min(1, 'Seleziona una data preferita'),
  preferredTime: z.string()
    .min(1, 'Seleziona un orario preferito'),
  message: z.string()
    .max(500, 'Il messaggio è troppo lungo (max 500 caratteri)')
    .optional(),
  privacy: z.boolean()
    .refine(val => val === true, 'Devi accettare la privacy policy')
});

type BookingFormData = z.infer<typeof bookingSchema>;

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema)
  });

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true);
    
    try {
      // Simula invio form (sostituisci con la tua API)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitSuccess(true);
      reset();
      
      // Chiudi modal dopo 3 secondi
      setTimeout(() => {
        setSubmitSuccess(false);
        onClose();
      }, 3000);
      
    } catch (error) {
      console.error('Errore invio form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    'Prima Visita',
    'Impianti Dentali',
    'Ortodonzia Invisibile',
    'Sbiancamento Dentale',
    'Protesi Dentarie',
    'Igiene Orale',
    'Parodontologia',
    'Altro'
  ];

  const timeSlots = [
    '09:00', '10:00', '11:00', '12:00',
    '14:00', '15:00', '16:00', '17:00', '18:00'
  ];

  // Get minimum date (tomorrow)
  const minDate = new Date();
  minDate.setDate(minDate.getDate() + 1);
  const minDateString = minDate.toISOString().split('T')[0];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <motion.div
                className="relative w-full max-w-2xl bg-[#1e293b] rounded-2xl shadow-2xl border border-white/10 overflow-hidden"
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: 'spring', duration: 0.5 }}
                role="dialog"
                aria-modal="true"
                aria-labelledby="booking-modal-title"
              >
                {/* Header */}
                <div className="relative bg-gradient-to-r from-emerald-500 to-emerald-600 px-6 py-8 text-white">
                  <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
                    aria-label="Chiudi modal"
                  >
                    <X className="w-6 h-6" />
                  </button>

                  <h2 id="booking-modal-title" className="text-3xl font-bold mb-2">
                    Prenota la Tua Visita
                  </h2>
                  <p className="text-emerald-50">
                    Compila il form e ti ricontatteremo entro 24 ore
                  </p>
                </div>

                {/* Form Content */}
                <div className="px-6 py-8 max-h-[calc(100vh-12rem)] overflow-y-auto">
                  {submitSuccess ? (
                    /* Success Message */
                    <motion.div
                      className="text-center py-12"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                    >
                      <div className="inline-flex items-center justify-center w-20 h-20 bg-emerald-500/20 rounded-full mb-6">
                        <svg className="w-10 h-10 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">Prenotazione Inviata!</h3>
                      <p className="text-gray-400">
                        Ti ricontatteremo al più presto per confermare l&apos;appuntamento.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                      {/* Nome Completo */}
                      <div>
                        <label htmlFor="name" className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
                          <User className="w-4 h-4" aria-hidden="true" />
                          Nome e Cognome *
                        </label>
                        <input
                          {...register('name')}
                          type="text"
                          id="name"
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                          placeholder="Mario Rossi"
                          aria-invalid={errors.name ? 'true' : 'false'}
                          aria-describedby={errors.name ? 'name-error' : undefined}
                        />
                        {errors.name && (
                          <p id="name-error" className="mt-1 text-sm text-red-400" role="alert">
                            {errors.name.message}
                          </p>
                        )}
                      </div>

                      {/* Email & Telefono - Grid 2 colonne su desktop */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="email" className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
                            <Mail className="w-4 h-4" aria-hidden="true" />
                            Email *
                          </label>
                          <input
                            {...register('email')}
                            type="email"
                            id="email"
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                            placeholder="mario@email.com"
                            aria-invalid={errors.email ? 'true' : 'false'}
                            aria-describedby={errors.email ? 'email-error' : undefined}
                          />
                          {errors.email && (
                            <p id="email-error" className="mt-1 text-sm text-red-400" role="alert">
                              {errors.email.message}
                            </p>
                          )}
                        </div>

                        <div>
                          <label htmlFor="phone" className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
                            <Phone className="w-4 h-4" aria-hidden="true" />
                            Telefono *
                          </label>
                          <input
                            {...register('phone')}
                            type="tel"
                            id="phone"
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                            placeholder="3331234567"
                            aria-invalid={errors.phone ? 'true' : 'false'}
                            aria-describedby={errors.phone ? 'phone-error' : undefined}
                          />
                          {errors.phone && (
                            <p id="phone-error" className="mt-1 text-sm text-red-400" role="alert">
                              {errors.phone.message}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Servizio */}
                      <div>
                        <label htmlFor="service" className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
                          <Calendar className="w-4 h-4" aria-hidden="true" />
                          Servizio Richiesto *
                        </label>
                        <select
                          {...register('service')}
                          id="service"
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all appearance-none cursor-pointer"
                          aria-invalid={errors.service ? 'true' : 'false'}
                          aria-describedby={errors.service ? 'service-error' : undefined}
                        >
                          <option value="" className="bg-[#1e293b]">Seleziona un servizio</option>
                          {services.map((service) => (
                            <option key={service} value={service} className="bg-[#1e293b]">
                              {service}
                            </option>
                          ))}
                        </select>
                        {errors.service && (
                          <p id="service-error" className="mt-1 text-sm text-red-400" role="alert">
                            {errors.service.message}
                          </p>
                        )}
                      </div>

                      {/* Data & Orario Preferiti */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="preferredDate" className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
                            <Calendar className="w-4 h-4" aria-hidden="true" />
                            Data Preferita *
                          </label>
                          <input
                            {...register('preferredDate')}
                            type="date"
                            id="preferredDate"
                            min={minDateString}
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                            aria-invalid={errors.preferredDate ? 'true' : 'false'}
                            aria-describedby={errors.preferredDate ? 'date-error' : undefined}
                          />
                          {errors.preferredDate && (
                            <p id="date-error" className="mt-1 text-sm text-red-400" role="alert">
                              {errors.preferredDate.message}
                            </p>
                          )}
                        </div>

                        <div>
                          <label htmlFor="preferredTime" className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
                            <Clock className="w-4 h-4" aria-hidden="true" />
                            Orario Preferito *
                          </label>
                          <select
                            {...register('preferredTime')}
                            id="preferredTime"
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all appearance-none cursor-pointer"
                            aria-invalid={errors.preferredTime ? 'true' : 'false'}
                            aria-describedby={errors.preferredTime ? 'time-error' : undefined}
                          >
                            <option value="" className="bg-[#1e293b]">Seleziona orario</option>
                            {timeSlots.map((time) => (
                              <option key={time} value={time} className="bg-[#1e293b]">
                                {time}
                              </option>
                            ))}
                          </select>
                          {errors.preferredTime && (
                            <p id="time-error" className="mt-1 text-sm text-red-400" role="alert">
                              {errors.preferredTime.message}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Note Aggiuntive */}
                      <div>
                        <label htmlFor="message" className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
                          <MessageSquare className="w-4 h-4" aria-hidden="true" />
                          Note Aggiuntive (opzionale)
                        </label>
                        <textarea
                          {...register('message')}
                          id="message"
                          rows={4}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none"
                          placeholder="Eventuali richieste particolari o informazioni utili..."
                          aria-invalid={errors.message ? 'true' : 'false'}
                          aria-describedby={errors.message ? 'message-error' : undefined}
                        />
                        {errors.message && (
                          <p id="message-error" className="mt-1 text-sm text-red-400" role="alert">
                            {errors.message.message}
                          </p>
                        )}
                      </div>

                      {/* Privacy Checkbox */}
                      <div className="flex items-start gap-3">
                        <input
                          {...register('privacy')}
                          type="checkbox"
                          id="privacy"
                          className="mt-1 w-5 h-5 rounded border-white/10 bg-white/5 text-emerald-500 focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-[#1e293b] cursor-pointer"
                          aria-invalid={errors.privacy ? 'true' : 'false'}
                          aria-describedby={errors.privacy ? 'privacy-error' : undefined}
                        />
                        <label htmlFor="privacy" className="text-sm text-gray-400 cursor-pointer">
                          Accetto la{' '}
                          <a href="/privacy" className="text-emerald-400 hover:underline" target="_blank" rel="noopener noreferrer">
                            Privacy Policy
                          </a>{' '}
                          e autorizzo il trattamento dei miei dati personali *
                        </label>
                      </div>
                      {errors.privacy && (
                        <p id="privacy-error" className="mt-1 text-sm text-red-400" role="alert">
                          {errors.privacy.message}
                        </p>
                      )}

                      {/* Submit Button */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full px-6 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-bold text-lg rounded-lg hover:shadow-glow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-emerald-500/50"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center justify-center gap-2">
                            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            Invio in corso...
                          </span>
                        ) : (
                          'Invia Richiesta di Prenotazione'
                        )}
                      </button>

                      <p className="text-xs text-gray-500 text-center">
                        * Campi obbligatori
                      </p>
                    </form>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
