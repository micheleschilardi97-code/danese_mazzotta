export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const faqData: FAQItem[] = [
  {
    id: '1',
    question: 'Cos\'è la laser terapia dentale?',
    answer: 'La laser terapia è una tecnica innovativa che utilizza la luce laser per trattare diverse patologie del cavo orale. È minimamente invasiva, riduce il sanguinamento e accelera i tempi di guarigione rispetto alle tecniche tradizionali.'
  },
  {
    id: '2',
    question: 'Come si cura la parodontite?',
    answer: 'La parodontite si cura con un approccio personalizzato che può includere igiene professionale profonda, levigatura radicolare, terapia rigenerativa e, nei casi più avanzati, interventi chirurgici mini-invasivi. Il nostro studio è specializzato in rigenerazione ossea parodontale.'
  },
  {
    id: '3',
    question: 'Cos\'è l\'ortodonzia invisibile All-in?',
    answer: 'All-in è il primo sistema italiano di ortodonzia invisibile mediante mascherine trasparenti. Permette di riallineare i denti in modo discreto, senza l\'utilizzo di apparecchi metallici visibili. Il nostro studio è certificato All-in.'
  },
  {
    id: '4',
    question: 'Quanto dura un impianto dentale?',
    answer: 'Con una corretta igiene orale e controlli periodici, un impianto dentale può durare anche tutta la vita. Gli impianti in titanio hanno un tasso di successo superiore al 95% a 10 anni.'
  },
  {
    id: '5',
    question: 'Ogni quanto bisogna fare l\'igiene dentale?',
    answer: 'Si consiglia un\'igiene dentale professionale ogni 6 mesi, ma la frequenza può variare in base alle condizioni del singolo paziente. Durante la visita valuteremo insieme il programma di prevenzione più adatto.'
  },
  {
    id: '6',
    question: 'Lo sbiancamento dentale è sicuro?',
    answer: 'Sì, lo sbiancamento professionale eseguito in studio è sicuro e non danneggia lo smalto. Utilizziamo prodotti certificati e personalizzati per ottenere un risultato naturale e duraturo.'
  },
  {
    id: '7',
    question: 'Che tecnologie utilizzate nello studio?',
    answer: 'Disponiamo di un panoramico digitale di ultima generazione, sistemi di ingrandimento per garantire la massima precisione e una videocamera intraorale per una comunicazione più efficace con il paziente.'
  },
  {
    id: '8',
    question: 'Come posso prenotare una visita?',
    answer: 'Puoi prenotare online direttamente dal nostro sito, chiamare al 371 585 5834, oppure compilare il modulo di contatto. Ti ricontatteremo al più presto per fissare l\'appuntamento.'
  }
];

export const faqIntro = {
  subtitle: 'FAQ',
  title: 'Domande Frequenti',
  description: 'Trova le risposte alle domande più comuni sui nostri trattamenti e servizi.'
};
