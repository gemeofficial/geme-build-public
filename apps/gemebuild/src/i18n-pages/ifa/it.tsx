/* eslint-disable react/no-unescaped-entities */
import {
  ComposterSurvey,
  IComposterSurveyProps,
  IFAHeroSection,
  IIFAHeroSectionProps,
  ISubscribeGemeTerra2Props,
  IVideoList,
  IWinnersNamesTickerProps,
  LocationSection,
  SubscribeGemeTerra2,
  VideoList,
} from './components'

import { winnersNames } from './winnersNames'
import { IIFAPageProps } from './en'

// Hero Section  It版
const IFAHeroSectionProps: IIFAHeroSectionProps = {
  bgImageUrl: '/assets/images/ifa/hero-bg.png',
  prizeImage: '/assets/images/ifa/prize.jpg',
  gemeLogo: '/assets/images/ifa/white-logo.png',
  ifaLogo: '/assets/images/ifa/ifa-berlin-seeklogo.png',
  noticeTitle: (
    <>
      <p className="leading-tight">
        Brilla con GEME <br />
        <span className="text-[#ea3c58]">Alla IFA di Berlino 2024</span>
      </p>
      <span className="text-2xl md:text-3xl 3xl:text-4xl">
        Condividi la tua storia con GEME,
        <br />
        Vinci un Compostatore GEME!
      </span>
    </>
  ),
  ifaExhibitionDate: 'GEME alla IFA di Berlino, dal 6 al 10 settembre 2024',
  prizeDesc: (
    <>
      <span className="text-lg md:text-xl xl:text-3xl">
        Sono in corso 2 grandi estrazioni! <br />
      </span>
    </>
  ),
  activityTitle: 'Attività',
  activityDescription: (
    <>
      <strong>Vittorie settimanali: </strong>
      <p>
        Dal 19 agosto al 6 settembre, vinci un pacchetto di ricarica Kobold da $59,9 ogni lunedì, mercoledì e venerdì.
      </p>
      <br />
      <strong>Gran Premio: </strong>
      <p>
        Un fortunato vincitore tra tutti i partecipanti vincerà un compostatore GEME il 14 settembre.
      </p>
    </>
  ),
  buttonText: 'Invia il tuo video!',
  countdownTitle: 'Conto alla rovescia per la prossima estrazione:',
  winningProbabilityTitle: 'Probabilità di vincita attuale per ricarica Kobold:',
  prizeImageTitle: 'Premi',
  sampleVideoTitle: 'Idee per la presentazione del video',
  descriptionText: (
    <>
      <ul>
        <li className="list-disc">
          1/N rappresenta la tua probabilità di vincita in ciascuna estrazione.
        </li>
        <li className="list-disc">
          Effettueremo l’estrazione dei vincitori ogni lunedì, mercoledì e venerdì.
        </li>
        <li className="list-disc">
          La probabilità di vincita verrà aggiornata dopo ogni estrazione.
        </li>
      </ul>
    </>
  ),
  locale: 'it',
}


// 视频列表   It版
const videoListProps: IVideoList = {
  title: 'Lista dei Video',
  description:
    'Ecco alcuni dei video caricati dai nostri utenti vincitori e come interagiscono con GEME nella loro vita quotidiana.',
  linkText: 'carica di più',
  fromText: 'Da',
  useTimeText: 'Durata dell’uso',
  emptyTexy:
    'I dati dell’elenco video saranno visualizzati dopo questa estrazione, si prega di attendere pazientemente.',
  videoList: [
    {
      poster: '/assets/images/ifa/poster-images/poster1.png',
      src: 'https://www-geme-bio-us.s3.us-west-1.amazonaws.com/user-videos/ifa-page-user-video-1.mp4',
      from: 'MN',
      useTime: '9 mesi',
    },
    {
      poster: '/assets/images/ifa/poster-images/poster2.png',
      src: 'https://www-geme-bio-us.s3.us-west-1.amazonaws.com/user-videos/ifa-page-user-video-2.mp4',
      from: 'OH',
      useTime: '10 mesi',
    },
    {
      poster: '/assets/images/ifa/poster-images/poster3.png',
      src: 'https://www-geme-bio-us.s3.us-west-1.amazonaws.com/user-videos/geme_val.mp4',
      from: 'Germania',
      useTime: '1,5 mesi',
    },
  ],
}

// 中奖名单  It版
const winnersNamesTickerProps: IWinnersNamesTickerProps = {
  title: 'Vincitori Storici',
  linkText: 'visualizza di più',
  winnersNames,
}

// 问卷调查 It版
const composterSurveyProps: IComposterSurveyProps = {
  title: 'Sondaggio Compostiera',
  desc: 'Dacci qualche idea sulla tua gestione dei rifiuti',
  buttonText: 'Vai alla Pubblicazione',
}
// 订阅模块 It版
const subscribeGemeTerra2Props: ISubscribeGemeTerra2Props = {
  title: 'Incontra GEME II',
  description: <>Interessato? Iscriviti alla lista d'attesa!</>,
  emailPlaceholder: 'Inserisci la tua email',
  submitButtonLabel: 'Avvisami',
  productSectionTitle: 'Anteprima',
  imageList: [
    {
      src: '/assets/images/geme-v2-product/geme-v2-1-color.png',
      alt: 'Immagine del prodotto Geme II 1',
      title: 'Conveniente',
      desc: 'Elegante e sottile, ma comunque potente',
    },
    {
      src: '/assets/images/geme-v2-product/geme-v2-2.png',
      alt: 'Immagine del prodotto Geme II 2',
      title: 'Intelligente',
      desc: 'La migliore esperienza per i rifiuti alimentari che non hai mai immaginato',
    },
    {
      src: '/assets/images/geme-v2-product/geme-4r.jpeg',
      alt: 'Immagine del prodotto Geme II 3',
      title: 'Cura & Amore',
      desc: 'Non solo un prodotto, ma una comunità sostenibile e connessa',
    },
  ],
}

function IFAPageIt({ PrefetchLink, SubscribeComponent }: IIFAPageProps) {
  return (
    <>
      <IFAHeroSection {...IFAHeroSectionProps} PrefetchLink={PrefetchLink} />

      <LocationSection />

      <div className="bg-[#fcfcfc]">
        <VideoList
          buttonText={IFAHeroSectionProps.buttonText}
          videoListProps={videoListProps}
          winnersNamesTickerProps={winnersNamesTickerProps}
          PrefetchLink={PrefetchLink}
        />
      </div>

      <ComposterSurvey {...composterSurveyProps} PrefetchLink={PrefetchLink} />

      <SubscribeGemeTerra2
        {...subscribeGemeTerra2Props}
        SubscribeComponent={SubscribeComponent}
      />
    </>
  )
}

export { IFAPageIt }
