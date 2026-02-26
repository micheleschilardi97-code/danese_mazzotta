import { config } from '@/config';

export const aboutData = {
  subtitle: 'Chi Siamo',
  title: 'Professionalità e Cura al Servizio del Tuo Sorriso',
  description: `La dott.ssa Maria Giovanna Cairo si laurea con il massimo dei voti presso l'Università G. D'Annunzio di Chieti nel 2010, con una tesi in parodontologia sulla rigenerazione ossea con cellule mesenchimali. Negli anni successivi si perfeziona in Endodonzia ed Ortodonzia, conseguendo anche la certificazione All-in, primo sistema italiano di ortodonzia invisibile mediante mascherine.\n\nIl dott. Di Tanna Fernando consegue la laurea in Odontoiatria e Protesi Dentaria presso l'Università G. D'Annunzio di Chieti nel 2006 e successivamente si perfeziona in chirurgia orale e implantare, in endodonzia, conservativa e protesi.\n\nNel nostro studio troverai massima professionalità e cura per la qualità dei materiali e per l'igiene, utilizziamo sistemi di ingrandimento per garantire l'estrema precisione dei nostri lavori, disponiamo di un panoramico digitale di ultima generazione e ci avvaliamo della videocamera intraorale per rendere la comunicazione con il paziente più efficace e diretta.`,
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
