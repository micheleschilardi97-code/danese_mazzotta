export interface Servizio {
  id: string;
  slug: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
  backgroundImage?: string;
}

export const serviziData: Servizio[] = [
  {
    id: '1',
    slug: 'laser-terapia',
    icon: 'laser',
    title: 'Laser Terapia',
    description: 'Trattamenti con tecnologia laser di ultima generazione per interventi minimamente invasivi, più rapidi e con tempi di guarigione ridotti.',
    features: ['Trattamenti minimamente invasivi', 'Guarigione rapida', 'Massimo comfort'],
    backgroundImage: '/images/servizi/laser-terapia.jpg'
  },
  {
    id: '2',
    slug: 'parodontologia',
    icon: 'shield',
    title: 'Parodontologia',
    description: 'Diagnosi e trattamento delle malattie parodontali con approccio rigenerativo. Specializzazione in rigenerazione ossea.',
    features: ['Rigenerazione ossea', 'Terapia parodontale', 'Mantenimento gengivale'],
    backgroundImage: '/images/servizi/parodontologia.jpg'
  },
  {
    id: '3',
    slug: 'igiene-dentale',
    icon: 'smile',
    title: 'Igiene Dentale',
    description: 'Pulizia professionale e programmi di prevenzione personalizzati per mantenere una bocca sana e un sorriso splendente.',
    features: ['Pulizia professionale', 'Programmi di prevenzione', 'Educazione all\'igiene orale'],
    backgroundImage: '/images/servizi/igiene-dentale.jpg'
  },
  {
    id: '4',
    slug: 'impianti-dentali',
    icon: 'tooth',
    title: 'Impianti Dentali',
    description: 'Chirurgia orale e implantare avanzata per sostituire i denti mancanti con soluzioni permanenti e naturali.',
    features: ['Impianti in titanio', 'Chirurgia implantare', 'Innesti ossei'],
    backgroundImage: '/images/servizi/impianti-dentali.jpg'
  },
  {
    id: '5',
    slug: 'ortodonzia',
    icon: 'dental',
    title: 'Ortodonzia',
    description: 'Ortodonzia invisibile con sistema All-in, il primo sistema italiano di mascherine trasparenti, e apparecchi tradizionali.',
    features: ['Mascherine All-in', 'Ortodonzia invisibile', 'Apparecchi tradizionali'],
    backgroundImage: '/images/servizi/ortodonzia.jpg'
  },
  {
    id: '6',
    slug: 'endodonzia',
    icon: 'surgery',
    title: 'Endodonzia',
    description: 'Trattamenti endodontici di precisione con sistemi di ingrandimento per salvare i denti naturali compromessi.',
    features: ['Devitalizzazioni', 'Ritrattamenti', 'Microscopia operatoria'],
    backgroundImage: '/images/servizi/endodonzia.jpg'
  },
  {
    id: '7',
    slug: 'sbiancamento-dentale',
    icon: 'star',
    title: 'Sbiancamento Dentale',
    description: 'Sbiancamento professionale per donare luminosità e brillantezza al tuo sorriso in modo sicuro e duraturo.',
    features: ['Sbiancamento professionale', 'Risultati duraturi', 'Trattamento sicuro'],
    backgroundImage: '/images/servizi/sbiancamento.jpg'
  }
];

export const serviziIntro = {
  subtitle: 'I Nostri Servizi',
  title: 'Soluzioni Complete per la Tua Salute Dentale',
  description: 'Offriamo una gamma completa di trattamenti dentistici con tecnologie all\'avanguardia e un approccio personalizzato per ogni paziente.'
};
