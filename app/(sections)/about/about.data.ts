import { config } from '@/config';

export const aboutData = {
  subtitle: 'Chi Siamo',
  title: 'Professionalità e Cura al Servizio del Tuo Sorriso',
  description: `Omnia Dentes Studio Dentistico a Monteroni di Lecce offre un servizio odontoiatrico completo e all'avanguardia. Il nostro team di professionisti qualificati si dedica con passione alla cura del sorriso di ogni paziente.\n\nNel nostro studio troverai massima professionalità e cura per la qualità dei materiali e per l'igiene, utilizziamo sistemi di ingrandimento per garantire l'estrema precisione dei nostri lavori, disponiamo di un panoramico digitale di ultima generazione e ci avvaliamo della videocamera intraorale per rendere la comunicazione con il paziente più efficace e diretta.`,
  image: config.images.doctor,
  imageMobile: config.images.doctorMobile,
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
    'Panoramico digitale di ultima generazione',
    'Sistemi di ingrandimento ad alta precisione',
    'Videocamera intraorale',
    'Materiali di prima qualità',
    'Massima cura per l\'igiene',
    'Comunicazione diretta con il paziente'
  ]
};
