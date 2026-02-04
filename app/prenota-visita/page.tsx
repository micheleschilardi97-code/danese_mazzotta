'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './PrenotaVisita.module.css';

interface TimeSlot {
  time: string;
  available: boolean;
}

interface FormData {
  nome: string;
  cognome: string;
  email: string;
  telefono: string;
  note: string;
}

const ORARI_LAVORO = {
  inizio: 9,
  fine: 19,
  pausaPranzoInizio: 13,
  pausaPranzoFine: 15,
  durataAppuntamento: 60 // minuti
};

export default function PrenotaVisitaPage() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    cognome: '',
    email: '',
    telefono: '',
    note: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Genera gli orari disponibili per un giorno
  const generateTimeSlots = (date: Date): TimeSlot[] => {
    const slots: TimeSlot[] = [];
    const dayOfWeek = date.getDay();
    
    // Chiuso domenica
    if (dayOfWeek === 0) return [];
    
    // Sabato solo mattina
    const endHour = dayOfWeek === 6 ? 13 : ORARI_LAVORO.fine;
    
    for (let hour = ORARI_LAVORO.inizio; hour < endHour; hour++) {
      // Salta pausa pranzo
      if (hour >= ORARI_LAVORO.pausaPranzoInizio && hour < ORARI_LAVORO.pausaPranzoFine) {
        continue;
      }
      
      for (let minute = 0; minute < 60; minute += ORARI_LAVORO.durataAppuntamento) {
        const timeString = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
        // Simula disponibilità (in produzione verificare con backend)
        const available = Math.random() > 0.3;
        slots.push({ time: timeString, available });
      }
    }
    
    return slots;
  };

  // Genera giorni del mese
  const calendarDays = useMemo(() => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());
    
    const days: (Date | null)[] = [];
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    for (let i = 0; i < 42; i++) {
      const date = new Date(startDate);
      date.setDate(date.getDate() + i);
      
      // Solo giorni del mese corrente e futuri
      if (date.getMonth() === month && date >= today) {
        days.push(date);
      } else if (date.getMonth() === month) {
        days.push(null);
      } else {
        days.push(null);
      }
    }
    
    return days;
  }, [currentMonth]);

  const timeSlots = useMemo(() => {
    if (!selectedDate) return [];
    return generateTimeSlots(selectedDate);
  }, [selectedDate]);

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    setSelectedTime(null);
    setStep(2);
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    setStep(3);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simula invio al backend
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setShowSuccess(true);
    
    // Reset dopo 5 secondi
    setTimeout(() => {
      setShowSuccess(false);
      setStep(1);
      setSelectedDate(null);
      setSelectedTime(null);
      setFormData({
        nome: '',
        cognome: '',
        email: '',
        telefono: '',
        note: ''
      });
    }, 5000);
  };

  const goToPreviousMonth = () => {
    setCurrentMonth(prev => new Date(prev.getFullYear(), prev.getMonth() - 1));
  };

  const goToNextMonth = () => {
    setCurrentMonth(prev => new Date(prev.getFullYear(), prev.getMonth() + 1));
  };

  const monthName = currentMonth.toLocaleDateString('it-IT', { month: 'long', year: 'numeric' });

  const isFormValid = formData.nome && formData.cognome && formData.email && formData.telefono;

  return (
    <main className={styles.container}>
      <div className={styles.wrapper}>
        {/* Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className={styles.title}>Prenota la tua Visita</h1>
          <p className={styles.subtitle}>
            Prima visita gratuita del valore di 150€ • Scegli data e orario
          </p>
        </motion.div>

        {/* Progress Steps */}
        <div className={styles.progressSteps}>
          <div className={`${styles.progressStep} ${step >= 1 ? styles.active : ''}`}>
            <span className={styles.stepNumber}>1</span>
            <span className={styles.stepLabel}>Data</span>
          </div>
          <div className={styles.progressLine} />
          <div className={`${styles.progressStep} ${step >= 2 ? styles.active : ''}`}>
            <span className={styles.stepNumber}>2</span>
            <span className={styles.stepLabel}>Orario</span>
          </div>
          <div className={styles.progressLine} />
          <div className={`${styles.progressStep} ${step >= 3 ? styles.active : ''}`}>
            <span className={styles.stepNumber}>3</span>
            <span className={styles.stepLabel}>Dati</span>
          </div>
        </div>

        {/* Content */}
        <div className={styles.content}>
          <AnimatePresence mode="wait">
            {/* Step 1: Calendario */}
            {step === 1 && (
              <motion.div
                key="calendar"
                className={styles.calendarSection}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <div className={styles.calendarHeader}>
                  <button
                    className={styles.monthButton}
                    onClick={goToPreviousMonth}
                    aria-label="Mese precedente"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                  </button>
                  <h2 className={styles.monthName}>{monthName}</h2>
                  <button
                    className={styles.monthButton}
                    onClick={goToNextMonth}
                    aria-label="Mese successivo"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </button>
                </div>

                <div className={styles.weekDays}>
                  {['Dom', 'Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab'].map(day => (
                    <div key={day} className={styles.weekDay}>{day}</div>
                  ))}
                </div>

                <div className={styles.calendarGrid}>
                  {calendarDays.map((date, index) => (
                    <button
                      key={index}
                      className={`${styles.dayButton} ${
                        date ? styles.active : styles.inactive
                      } ${
                        selectedDate && date && date.toDateString() === selectedDate.toDateString()
                          ? styles.selected
                          : ''
                      }`}
                      onClick={() => date && handleDateSelect(date)}
                      disabled={!date}
                    >
                      {date ? date.getDate() : ''}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 2: Orari */}
            {step === 2 && selectedDate && (
              <motion.div
                key="timeslots"
                className={styles.timeSlotsSection}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <div className={styles.selectedDateInfo}>
                  <button className={styles.backButton} onClick={() => setStep(1)}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                  </button>
                  <h2 className={styles.sectionTitle}>
                    {selectedDate.toLocaleDateString('it-IT', { 
                      weekday: 'long', 
                      day: 'numeric', 
                      month: 'long' 
                    })}
                  </h2>
                </div>

                <div className={styles.timeSlotsGrid}>
                  {timeSlots.length === 0 ? (
                    <p className={styles.noSlots}>Nessun orario disponibile per questo giorno</p>
                  ) : (
                    timeSlots.map(slot => (
                      <button
                        key={slot.time}
                        className={`${styles.timeSlot} ${
                          !slot.available ? styles.unavailable : ''
                        } ${selectedTime === slot.time ? styles.selected : ''}`}
                        onClick={() => slot.available && handleTimeSelect(slot.time)}
                        disabled={!slot.available}
                      >
                        {slot.time}
                      </button>
                    ))
                  )}
                </div>
              </motion.div>
            )}

            {/* Step 3: Form dati */}
            {step === 3 && (
              <motion.div
                key="form"
                className={styles.formSection}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <div className={styles.selectedInfo}>
                  <button className={styles.backButton} onClick={() => setStep(2)}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                  </button>
                  <div>
                    <p className={styles.infoLabel}>Data e orario selezionati:</p>
                    <p className={styles.infoValue}>
                      {selectedDate?.toLocaleDateString('it-IT', { 
                        weekday: 'long', 
                        day: 'numeric', 
                        month: 'long' 
                      })} alle {selectedTime}
                    </p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className={styles.form}>
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="nome">Nome *</label>
                      <input
                        type="text"
                        id="nome"
                        name="nome"
                        value={formData.nome}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="cognome">Cognome *</label>
                      <input
                        type="text"
                        id="cognome"
                        name="cognome"
                        value={formData.cognome}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="email">Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="telefono">Telefono *</label>
                      <input
                        type="tel"
                        id="telefono"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="note">Note aggiuntive (opzionale)</label>
                    <textarea
                      id="note"
                      name="note"
                      value={formData.note}
                      onChange={handleInputChange}
                      rows={4}
                      placeholder="Inserisci eventuali note o richieste particolari..."
                    />
                  </div>

                  <button
                    type="submit"
                    className={styles.submitButton}
                    disabled={!isFormValid || isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className={styles.loader}>
                        <svg className={styles.spinner} viewBox="0 0 50 50">
                          <circle cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
                        </svg>
                        Invio in corso...
                      </span>
                    ) : (
                      'Conferma Prenotazione'
                    )}
                  </button>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Success Modal */}
        <AnimatePresence>
          {showSuccess && (
            <motion.div
              className={styles.successOverlay}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className={styles.successModal}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
              >
                <div className={styles.successIcon}>
                  <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <h2 className={styles.successTitle}>Prenotazione Confermata!</h2>
                <p className={styles.successMessage}>
                  Ti abbiamo inviato una email di conferma con tutti i dettagli della tua visita.
                </p>
                <p className={styles.successDate}>
                  {selectedDate?.toLocaleDateString('it-IT', { 
                    weekday: 'long', 
                    day: 'numeric', 
                    month: 'long',
                    year: 'numeric'
                  })} alle {selectedTime}
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
