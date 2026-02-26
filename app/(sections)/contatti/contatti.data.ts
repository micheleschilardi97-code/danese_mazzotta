import { config } from '@/config';

// Helper per formattare orari su una riga
const formatOrario = (mattina: string | null, pomeriggio: string | null): string => {
  if (!mattina && !pomeriggio) return 'Chiuso';
  if (mattina && pomeriggio) return `${mattina}  ${pomeriggio}`;
  return mattina || pomeriggio || 'Chiuso';
};

// Genera schedule da config.orari
const generateSchedule = () => {
  const giorni = ['lunedi', 'martedi', 'mercoledi', 'giovedi', 'venerdi', 'sabato', 'domenica'] as const;
  const giorniItaliano = ['Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato', 'Domenica'];
  
  return giorni.map((giorno, index) => {
    const orario = config.orari[giorno];
    return {
      day: giorniItaliano[index],
      hours: orario.aperto ? formatOrario(orario.mattina, orario.pomeriggio) : 'Chiuso'
    };
  });
};

export const contattiData = {
  subtitle: 'Contatti',
  title: 'Prenota la Tua Visita',
  description: 'Compila il form o contattaci direttamente. Siamo qui per rispondere a tutte le tue domande.',
  info: {
    indirizzo: {
      label: 'Indirizzo',
      value: config.contatti.indirizzo.split(',')[0],
      city: config.contatti.indirizzo.split(',').slice(1).join(',').trim(),
      full: config.contatti.indirizzo
    },
    telefono: {
      label: 'Telefono',
      value: config.contatti.telefono,
      tel: config.contatti.telefonoLink
    },
    orari: {
      label: 'Orari',
      schedule: generateSchedule()
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
      'Laser Terapia',
      'Parodontologia',
      'Igiene Dentale',
      'Impianti Dentali',
      'Ortodonzia',
      'Endodonzia',
      'Sbiancamento Dentale',
      'Altro'
    ],
    submitButton: 'Invia Richiesta',
    privacyText: 'Accetto la privacy policy e il trattamento dei dati personali'
  },
  map: {
    latitude: config.contatti.coordinate.lat,
    longitude: config.contatti.coordinate.lng,
    embedUrl: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3029.123!2d${config.contatti.coordinate.lng}!3d${config.contatti.coordinate.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDIxJzA1LjQiTiAxOMKwMTAnMzAuMCJF!5e0!3m2!1sit!2sit!4v1234567890`
  }
};
