import { config } from '@/config';

export const footerData = {
  studio: {
    name: config.studio.nome,
    dottore: config.studio.dottore,
    description: `Odontoiatria e protesi dentaria a Lecce, nel cuore del Salento.`
  },
  links: {
    servizi: [
      { label: 'Laser Terapia', href: '/servizi/laser-terapia' },
      { label: 'Parodontologia', href: '/servizi/parodontologia' },
      { label: 'Impianti Dentali', href: '/servizi/impianti-dentali' },
      { label: 'Ortodonzia', href: '/servizi/ortodonzia' }
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
