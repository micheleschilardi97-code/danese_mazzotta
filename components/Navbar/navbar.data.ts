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
  nome: "Studio Dentistico di Chirurgia Orale ed Implantologia Avanzata",
  dottore: "Dott. Mario Giugno",
  telefono: "0832 199 3151",
  telefono_tel: "+390832-199-3151",
};
