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
import { IIFAPageProps } from './en'
import { winnersNames } from './winnersNames'

// Hero Section  Fr
const IFAHeroSectionProps: IIFAHeroSectionProps = {
  bgImageUrl: '/assets/images/ifa/hero-bg.png',
  prizeImage: '/assets/images/ifa/prize.jpg',
  gemeLogo: '/assets/images/ifa/white-logo.png',
  ifaLogo: '/assets/images/ifa/ifa-berlin-seeklogo.png',
  noticeTitle: (
    <>
      <p className="leading-tight">
        Briller avec GEME <br />
        <span className="text-[#ea3c58]">À l'IFA Berlin 2024</span>
      </p>
      <span className="text-2xl md:text-3xl 3xl:text-4xl">
        Partagez votre histoire GEME,
        <br />
        gagnez un composteur GEME!
      </span>
    </>
  ),
  ifaExhibitionDate: `GEME à l'IFA Berlin, du 6 au 10 septembre 2024`,
  prizeDesc: (
    <>
      <span className="text-lg md:text-xl xl:text-3xl">
        2 grands tirages sont en cours! <br />
      </span>
      {/* <span className="text-sm md:text-base 2xl:text-lg">
        Pour marquer la présence de GEME à l'IFA Berlin.
      </span> */}
    </>
  ),
  activityTitle: 'Activité',
  activityDescription: (
    <>
      <strong>Gains Hebdomadaires: </strong>
      <p>
        Du 19 août au 6 septembre, gagnez un pack de recharge Kobold de 59,9 $
        chaque lundi, mercredi et vendredi.
      </p>
      <br />
      <strong>Grand Prix: </strong>
      <p>
        Un heureux gagnant parmi tous les participants remportera un composteur
        GEME le 14 septembre.
      </p>
    </>
  ),
  buttonText: 'Soumettez votre vidéo!',
  countdownTitle: `Compte à rebours jusqu'au prochain tirage :`,
  winningProbabilityTitle:
    'Probabilité actuelle de gagner un pack de recharge Kobold :',
  prizeImageTitle: 'Récompenses',
  sampleVideoTitle: 'Idées de soumission vidéo',
  descriptionText: (
    <>
      <ul>
        <li className="list-disc">
          1/N représente votre probabilité de gagner à chaque tirage.
        </li>
        <li className="list-disc">
          Nous tirerons au sort des gagnants chaque lundi, mercredi et vendredi.
        </li>
        <li className="list-disc">
          La probabilité de gagner sera actualisée après chaque tirage.
        </li>
      </ul>
    </>
  ),
  locale: 'fr',
}

// 视频列表   Fr
const videoListProps: IVideoList = {
  title: 'Liste de Vidéos',
  description:
    'Voici quelques-unes des vidéos téléchargées par nos utilisateurs primés et comment ils interagissent avec GEME dans leur vie quotidienne.',
  linkText: 'charger plus',
  fromText: 'De',
  useTimeText: "Durée d'utilisation",
  emptyTexy:
    'Les données de la liste des vidéos seront affichées après ce tirage, veuillez patienter.',
  videoList: [
    {
      poster: '/assets/images/ifa/poster-images/poster1.png',
      src: 'https://www-geme-bio-us.s3.us-west-1.amazonaws.com/user-videos/ifa-page-user-video-1.mp4',
      from: 'MN',
      useTime: '9 mois',
    },
    {
      poster: '/assets/images/ifa/poster-images/poster2.png',
      src: 'https://www-geme-bio-us.s3.us-west-1.amazonaws.com/user-videos/ifa-page-user-video-2.mp4',
      from: 'OH',
      useTime: '10 mois',
    },
  ],
}

// 中奖名单  Fr
const winnersNamesTickerProps: IWinnersNamesTickerProps = {
  title: 'Gagnants Historiques',
  linkText: 'voir plus',
  winnersNames,
}

// 问卷调查 Fr
const composterSurveyProps: IComposterSurveyProps = {
  title: 'Enquête sur le composteur',
  desc: 'Donnez-nous votre avis sur votre idée de gestion des déchets',
  buttonText: 'Aller publier',
}

// 订阅模块 Fr
const subscribeGemeTerra2Props: ISubscribeGemeTerra2Props = {
  title: 'Découvrez GEME II',
  description: <>Intéressé ? Rejoignez la liste d'attente !</>,
  emailPlaceholder: 'Entrez votre email',
  submitButtonLabel: 'Prévenez-moi',
  productSectionTitle: 'Aperçu',
  imageList: [
    {
      src: '/assets/images/geme-v2-product/geme-v2-1-color.png',
      alt: 'Image du produit Geme II 1',
      title: 'Abordable',
      desc: 'Net et mince, mais puissant',
    },
    {
      src: '/assets/images/geme-v2-product/geme-v2-2.png',
      alt: 'Image du produit Geme II 2',
      title: 'Intelligent',
      desc: "La meilleure expérience pour les déchets alimentaires que vous n'avez jamais imaginée",
    },
    {
      src: '/assets/images/geme-v2-product/geme-4r.jpeg',
      alt: 'Image du produit Geme II 3',
      title: 'Soin & Amour',
      desc: 'Pas seulement un produit, mais une communauté durable connectée',
    },
  ],
}

function IFAPageFr({ PrefetchLink, SubscribeComponent }: IIFAPageProps) {
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

export { IFAPageFr }
