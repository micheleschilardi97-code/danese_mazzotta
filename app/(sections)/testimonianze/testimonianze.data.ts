export interface Testimonianza {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  text: string;
  date: string;
}

export const testimonianzeData: Testimonianza[] = [
  {
    id: '1',
    name: 'Maria Rossi',
    role: 'Paziente dal 2020',
    avatar: '/images/avatar-1.jpg',
    rating: 5,
    text: 'Esperienza eccellente! Il Dott. Giugno è stato molto professionale e attento. L\'impianto dentale è stato un successo completo e ora posso sorridere con fiducia.',
    date: '2024-01-15'
  },
  {
    id: '2',
    name: 'Giuseppe Martino',
    role: 'Paziente dal 2019',
    avatar: '/images/avatar-2.jpg',
    rating: 5,
    text: 'Professionalità e competenza ai massimi livelli. Lo studio è dotato di tecnologie moderne e il personale è sempre disponibile. Consigliatissimo!',
    date: '2024-01-10'
  },
  {
    id: '3',
    name: 'Laura Bianchi',
    role: 'Paziente dal 2021',
    avatar: '/images/avatar-3.jpg',
    rating: 5,
    text: 'Avevo paura del dentista, ma il Dott. Giugno mi ha messo subito a mio agio. Il trattamento è stato praticamente indolore e il risultato è fantastico.',
    date: '2024-01-05'
  },
  {
    id: '4',
    name: 'Antonio Greco',
    role: 'Paziente dal 2018',
    avatar: '/images/avatar-4.jpg',
    rating: 5,
    text: 'Dopo anni di problemi dentali, ho finalmente trovato un professionista di cui fidarmi. Intervento di implantologia perfettamente riuscito.',
    date: '2023-12-28'
  },
  {
    id: '5',
    name: 'Francesca Leone',
    role: 'Paziente dal 2022',
    avatar: '/images/avatar-5.jpg',
    rating: 5,
    text: 'Studio moderno, pulito e accogliente. Il Dott. Giugno è molto scrupoloso e spiega ogni passaggio del trattamento. Risultati oltre le aspettative!',
    date: '2023-12-20'
  }
];

export const testimonianzeIntro = {
  subtitle: 'Testimonianze',
  title: 'Cosa Dicono i Nostri Pazienti',
  description: 'La soddisfazione dei nostri pazienti è la nostra priorità. Leggi le esperienze di chi ha già scelto il nostro studio.'
};
