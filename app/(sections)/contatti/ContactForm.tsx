'use client';

import { useState, FormEvent } from 'react';
import styles from './ContactForm.module.css';

interface FormData {
  nome: string;
  email: string;
  telefono: string;
  servizio: string;
  messaggio: string;
  privacy: boolean;
}

interface ContactFormProps {
  servizi: string[];
}

export default function ContactForm({ servizi }: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    email: '',
    telefono: '',
    servizio: '',
    messaggio: '',
    privacy: false,
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.nome.trim()) {
      newErrors.nome = 'Il nome è obbligatorio';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'L\'email è obbligatoria';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email non valida';
    }

    if (!formData.telefono.trim()) {
      newErrors.telefono = 'Il telefono è obbligatorio';
    }

    if (!formData.messaggio.trim()) {
      newErrors.messaggio = 'Il messaggio è obbligatorio';
    }

    if (!formData.privacy) {
      newErrors.privacy = true;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log('Form data:', formData);
      setSubmitStatus('success');
      setFormData({
        nome: '',
        email: '',
        telefono: '',
        servizio: '',
        messaggio: '',
        privacy: false,
      });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {/* Nome */}
      <div className={styles.formGroup}>
        <label htmlFor="nome" className={styles.label}>
          Nome e Cognome *
        </label>
        <input
          type="text"
          id="nome"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
          className={`${styles.input} ${errors.nome ? styles.error : ''}`}
          placeholder="Mario Rossi"
        />
        {errors.nome && <span className={styles.errorMessage}>{errors.nome}</span>}
      </div>

      {/* Email */}
      <div className={styles.formGroup}>
        <label htmlFor="email" className={styles.label}>
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`${styles.input} ${errors.email ? styles.error : ''}`}
          placeholder="mario.rossi@email.com"
        />
        {errors.email && <span className={styles.errorMessage}>{errors.email}</span>}
      </div>

      {/* Telefono */}
      <div className={styles.formGroup}>
        <label htmlFor="telefono" className={styles.label}>
          Telefono *
        </label>
        <input
          type="tel"
          id="telefono"
          name="telefono"
          value={formData.telefono}
          onChange={handleChange}
          className={`${styles.input} ${errors.telefono ? styles.error : ''}`}
          placeholder="+39 333 1234567"
        />
        {errors.telefono && <span className={styles.errorMessage}>{errors.telefono}</span>}
      </div>

      {/* Servizio */}
      <div className={styles.formGroup}>
        <label htmlFor="servizio" className={styles.label}>
          Servizio di interesse
        </label>
        <select
          id="servizio"
          name="servizio"
          value={formData.servizio}
          onChange={handleChange}
          className={styles.select}
        >
          <option value="">Seleziona un servizio</option>
          {servizi.map((servizio) => (
            <option key={servizio} value={servizio}>
              {servizio}
            </option>
          ))}
        </select>
      </div>

      {/* Messaggio */}
      <div className={styles.formGroup}>
        <label htmlFor="messaggio" className={styles.label}>
          Messaggio *
        </label>
        <textarea
          id="messaggio"
          name="messaggio"
          value={formData.messaggio}
          onChange={handleChange}
          className={`${styles.textarea} ${errors.messaggio ? styles.error : ''}`}
          placeholder="Scrivi il tuo messaggio..."
          rows={5}
        />
        {errors.messaggio && <span className={styles.errorMessage}>{errors.messaggio}</span>}
      </div>

      {/* Privacy */}
      <div className={styles.formGroup}>
        <label className={styles.checkboxLabel}>
          <input
            type="checkbox"
            name="privacy"
            checked={formData.privacy}
            onChange={handleChange}
            className={styles.checkbox}
          />
          <span className={errors.privacy ? styles.error : ''}>
            Accetto la privacy policy e il trattamento dei dati personali *
          </span>
        </label>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className={styles.submitButton}
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Invio in corso...' : 'Invia Richiesta'}
        {!isSubmitting && (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
          </svg>
        )}
      </button>

      {/* Status Messages */}
      {submitStatus === 'success' && (
        <div className={styles.successMessage}>
          Grazie! La tua richiesta è stata inviata con successo. Ti contatteremo presto.
        </div>
      )}
      {submitStatus === 'error' && (
        <div className={styles.errorMessageBox}>
          Si è verificato un errore. Riprova più tardi o contattaci telefonicamente.
        </div>
      )}
    </form>
  );
}
