import { config } from '@/config';

export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Servizi', href: '/servizi' },
  { label: 'Chi Siamo', href: '/chi-siamo' },
  { label: 'Testimonianze', href: '/testimonianze' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contatti', href: '/contatti' },
  { label: 'Prenota Visita', href: '/prenota-visita' },
];

export const studioInfo = {
  nome: config.studio.nome,
  dottore: config.studio.dottore,
  telefono: config.contatti.telefono,
  telefono_tel: config.contatti.telefonoLink,
};
