export interface Servizio {
  id: string;
  slug: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
}

export const serviziData: Servizio[] = [
  {
    id: '1',
    slug: 'implantologia',
    icon: 'tooth',
    title: 'Implantologia Dentale',
    description: 'Impianti dentali di ultima generazione per sostituire i denti mancanti con soluzioni permanenti e naturali.',
    features: ['Impianti in titanio', 'Carico immediato', 'All-on-4 e All-on-6']
  },
  {
    id: '2',
    slug: 'chirurgia-orale',
    icon: 'surgery',
    title: 'Chirurgia Orale',
    description: 'Interventi di chirurgia orale avanzata, dalle estrazioni complesse alla rigenerazione ossea.',
    features: ['Estrazioni complesse', 'Rialzo del seno mascellare', 'Innesti ossei']
  },
  {
    id: '3',
    slug: 'estetica-dentale',
    icon: 'smile',
    title: 'Estetica Dentale',
    description: 'Sbiancamento professionale, faccette e trattamenti estetici per un sorriso perfetto.',
    features: ['Sbiancamento LED', 'Faccette in ceramica', 'Bonding estetico']
  },
  {
    id: '4',
    slug: 'bonifica-dentale',
    icon: 'shield',
    title: 'Bonifica Dentale',
    description: 'Trattamenti conservativi per eliminare carie e infezioni preservando i denti naturali.',
    features: ['Cura carie', 'Devitalizzazioni', 'Endodonzia']
  },
  {
    id: '5',
    slug: 'protesi',
    icon: 'dental',
    title: 'Protesi Dentali',
    description: 'Protesi fisse e mobili di alta qualità per ripristinare funzionalità ed estetica.',
    features: ['Corone e ponti', 'Protesi mobili', 'Protesi su impianti']
  },
  {
    id: '6',
    slug: 'laser-dentale',
    icon: 'laser',
    title: 'Laser Dentale',
    description: 'Tecnologia laser per trattamenti indolori e minimamente invasivi.',
    features: ['Gengivectomia laser', 'Desensibilizzazione', 'Trattamenti parodontali']
  }
];

export const serviziIntro = {
  subtitle: 'I Nostri Servizi',
  title: 'Soluzioni Complete per la Tua Salute Dentale',
  description: 'Offriamo una gamma completa di trattamenti dentistici con tecnologie all\'avanguardia e un approccio personalizzato per ogni paziente.'
};
