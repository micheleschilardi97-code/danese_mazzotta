import { config } from '@/config';

export const footerData = {
  studio: {
    name: config.studio.nome,
    dottore: config.studio.dottore,
    description: `Specializzazione in ${config.studio.specializzazione.toLowerCase()} nel cuore di Lecce.`
  },
  links: {
    servizi: [
      { label: 'Implantologia', href: '/servizi/implantologia' },
      { label: 'Chirurgia Orale', href: '/servizi/chirurgia-orale' },
      { label: 'Estetica Dentale', href: '/servizi/estetica-dentale' },
      { label: 'Protesi', href: '/servizi/protesi' }
    ],
    informazioni: [
      { label: 'Chi Siamo', href: '/chi-siamo' },
      { label: 'Testimonianze', href: '/testimonianze' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Contatti', href: '/contatti' }
    ]
  },
  contatti: {
    indirizzo: config.contatti.indirizzo,
    telefono: config.contatti.telefono,
    telefono_tel: config.contatti.telefonoLink,
    email: config.contatti.email
  },
  social: Object.entries(config.social)
    .filter(([_, url]) => url)
    .map(([name, url]) => ({
      name: name.charAt(0).toUpperCase() + name.slice(1),
      url: url as string,
      icon: name
    })),
  copyright: {
    year: new Date().getFullYear(),
    text: `${config.studio.nome}. Tutti i diritti riservati.`
  },
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Cookie Policy', href: '/cookie' },
    { label: 'Note Legali', href: '/note-legali' }
  ]
};
