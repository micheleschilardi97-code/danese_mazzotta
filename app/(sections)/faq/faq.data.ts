export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const faqData: FAQItem[] = [
  {
    id: '1',
    question: 'Gli impianti dentali sono dolorosi?',
    answer: 'Gli impianti dentali vengono posizionati in anestesia locale, quindi la procedura è indolore. Dopo l\'intervento, eventuali fastidi sono gestibili con comuni analgesici e tendono a scomparire in pochi giorni.'
  },
  {
    id: '2',
    question: 'Quanto dura un impianto dentale?',
    answer: 'Con una corretta igiene orale e controlli periodici, un impianto dentale può durare anche tutta la vita. Gli impianti in titanio hanno un tasso di successo superiore al 95% a 10 anni.'
  },
  {
    id: '3',
    question: 'Quanto tempo richiede l\'intero trattamento implantologico?',
    answer: 'Il tempo varia in base al caso specifico. In media, il processo completo richiede 3-6 mesi, includendo l\'osteointegrazione. In alcuni casi è possibile il carico immediato, con protesi provvisoria lo stesso giorno dell\'intervento.'
  },
  {
    id: '4',
    question: 'Gli impianti dentali sono sicuri?',
    answer: 'Sì, l\'implantologia dentale è una procedura sicura e consolidata con oltre 50 anni di storia. Utilizziamo materiali biocompatibili certificati e tecnologie digitali per massima precisione e sicurezza.'
  },
  {
    id: '5',
    question: 'Cosa fare prima dell\'intervento?',
    answer: 'È importante seguire una buona igiene orale e arrivare a digiuno se verrà utilizzata sedazione cosciente. Durante la visita preliminare forniremo tutte le istruzioni specifiche per la preparazione.'
  },
  {
    id: '6',
    question: 'L\'età è un limite per gli impianti dentali?',
    answer: 'Non esiste un limite di età superiore per gli impianti. Ciò che conta è lo stato di salute generale e la qualità dell\'osso. Valutiamo ogni caso singolarmente per garantire il miglior risultato.'
  },
  {
    id: '7',
    question: 'Accettate pagamenti rateali?',
    answer: 'Sì, offriamo soluzioni di pagamento flessibili e dilazionato per rendere i trattamenti accessibili. Durante la prima visita discuteremo insieme il piano finanziario più adatto alle vostre esigenze.'
  },
  {
    id: '8',
    question: 'Fornite garanzie sui trattamenti?',
    answer: 'Sì, forniamo garanzia scritta su tutti i trattamenti implantologici. La durata e le condizioni specifiche vengono discusse e concordate prima dell\'inizio del trattamento.'
  }
];

export const faqIntro = {
  subtitle: 'FAQ',
  title: 'Domande Frequenti',
  description: 'Trova le risposte alle domande più comuni sui nostri trattamenti e servizi.'
};
