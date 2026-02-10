import { config } from '@/config';

export const aboutData = {
  subtitle: 'Chi Siamo',
  title: 'Esperienza e Innovazione al Servizio del Tuo Sorriso',
  description: `${config.studio.dottore} è un professionista specializzato in ${config.studio.specializzazione.toLowerCase()}, con anni di esperienza nel settore dentale. Il nostro studio utilizza le tecnologie più moderne per garantire trattamenti sicuri, efficaci e minimamente invasivi.`,
  image: config.images.doctor,
  stats: [
    {
      value: config.stats.anniEsperienza,
      suffix: '+',
      label: 'Anni di Esperienza'
    },
    {
      value: config.stats.pazientiSoddisfatti,
      suffix: '+',
      label: 'Pazienti Soddisfatti'
    },
    {
      value: 100,
      suffix: '%',
      label: 'Tasso di Successo'
    },
    {
      value: config.stats.interventiFatti,
      suffix: '+',
      label: 'Interventi Realizzati'
    }
  ],
  features: [
    'Tecnologie digitali all\'avanguardia',
    'Protocolli sterilizzazione certificati',
    'Materiali di prima qualità',
    'Consulenza personalizzata',
    'Assistenza post-intervento completa',
    'Garanzia sui trattamenti'
  ]
};
