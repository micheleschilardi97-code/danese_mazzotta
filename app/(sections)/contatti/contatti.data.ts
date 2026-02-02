export const contattiData = {
  subtitle: 'Contatti',
  title: 'Prenota la Tua Visita',
  description: 'Compila il form o contattaci direttamente. Siamo qui per rispondere a tutte le tue domande.',
  info: {
    indirizzo: {
      label: 'Indirizzo',
      value: 'Viale G. Leopardi, 90',
      city: '73100 Lecce LE',
      full: 'Viale G. Leopardi, 90, 73100 Lecce LE'
    },
    telefono: {
      label: 'Telefono',
      value: '0832 199 3151',
      tel: '+390832-199-3151'
    },
    orari: {
      label: 'Orari',
      schedule: [
        { day: 'Lunedì', hours: '17:30 - 20:30' },
        { day: 'Martedì', hours: 'Chiuso' },
        { day: 'Mercoledì', hours: '17:30 - 20:30' },
        { day: 'Giovedì', hours: 'Chiuso' },
        { day: 'Venerdì', hours: '09:00 - 13:00' },
        { day: 'Sabato', hours: 'Su appuntamento' },
        { day: 'Domenica', hours: 'Chiuso' }
      ]
    }
  },
  form: {
    fields: {
      nome: 'Nome e Cognome',
      email: 'Email',
      telefono: 'Telefono',
      servizio: 'Servizio di interesse',
      messaggio: 'Messaggio'
    },
    servizi: [
      'Implantologia Dentale',
      'Chirurgia Orale',
      'Estetica Dentale',
      'Bonifica Dentale',
      'Protesi Dentali',
      'Laser Dentale',
      'Altro'
    ],
    submitButton: 'Invia Richiesta',
    privacyText: 'Accetto la privacy policy e il trattamento dei dati personali'
  },
  map: {
    latitude: 40.3515,
    longitude: 18.1750,
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3029.123!2d18.175!3d40.3515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDIxJzA1LjQiTiAxOMKwMTAnMzAuMCJF!5e0!3m2!1sit!2sit!4v1234567890'
  }
};
