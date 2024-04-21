import {
  HeroSection1,
  ContentSection1,
  ContentSection2,
  ContentSection3,
  ContentSection4,
  ContentSection5,
  ContentSection6Fixed,
  CompostStep1,
  CompostStep2,
  CompostStep3,
  SecondLife,
} from 'ui'
import type {
  IHeroSection1Props,
  IContentSection1Props,
  IContentSection2Props,
  IContentSection3Props,
  IContentSection4Props,
  IContentSection5Props,
  IContentSection6FixedProps,
  ISecondLifeProps,
} from 'ui'
import { Footprints, type IFootprintsProps } from '../../components/footprints'
import { Newsletter, INewsletterProps } from './containers/newsletter'
import Link from 'next/link'
import mixpanel from 'mixpanel-browser'

// 首页video部分的内容数据配置 Fr
const heroSection1Props: IHeroSection1Props = {
  title: (
    <>
      <span className="hidden xl:inline">
        Le premier composteur <br />
        <span className="ml-24 block">de biodéchets au monde</span>
      </span>
      <span className="xl:hidden">
        Le premier composteur de biodéchets au monde
      </span>
    </>
  ),
  description: (
    <>
      <span className=" hidden xl:inline ">
        Découvrez GEME, le composteur électrique moderne pour la maison
        <br />
        Transformez vos déchets alimentaires quotidiens en compost organique
        <br />
        Moins de décharges, plus de terre de jardin.
      </span>
      <span className=" xl:hidden ">
        Découvrez GEME, le composteur domestique électrique moderne <br />
        Transformez vos déchets alimentaires quotidiens en compost organique
        <br />
        Moins de décharges, plus de jardinage.
      </span>
    </>
  ),
  linkText: 'Achetez maintenant',
  linkUrl: '/product/geme',
  linkClickedTrack: () => {
    mixpanel.track('Go Product Page', {
      From: 'Hero Primary Button',
    })
  },
  LinkComponent: Link,
  videoProps: {
    sources: [
      // for pc
      {
        minWidth: 1280,
        src: 'https://public-assest-434759801795.s3.us-west-1.amazonaws.com/geme-bio-home-hero-backgruond-video-1080p.mp4',
        playbackId: 'PHDmho81odHhv3yvvm4WLQjqUFpKqwAR01gJwEVEUcXo',
        posterUrl: '/assets/images/home-v2311/hero-blurred.webp',
      },
      // for mobile/tablet
      {
        minWidth: 0,
        src: 'https://public-assest-434759801795.s3.us-west-1.amazonaws.com/geme-bio-home-background-video-no-sound-480p.mp4',
        playbackId: 'WcYd7fIP97ciG1zR5Hkq9dEmqLeQpsoX5iIZdMQn8Lc',
        posterUrl: '/assets/images/home-v2311/hero-blurred-m.webp',
      },
    ],
  },
}

// 首页第二部分的内容数据配置 Fr
const contentSection2Props: IContentSection2Props = {
  title:
    'Vous ressentez toujours la terrible expérience du gaspillage alimentaire ?',
  description: (
    <>
      Les restes de nourriture peuvent être salissants et désagréables. <br />
      Il crée des odeurs, attire les mouches bruyantes et les ratons laveurs
      agaçants. <br />
      Votre poubelle est bouchée, la cuisine est mouillée et sale ? <br />
      60 % des déchets alimentaires finissent par être mis en décharge. <br />
      Vous pouvez l&apos;arrêter.
    </>
  ),
  // imageSrc: '/assets/images/home-v2311/waste-food.jpeg',
  imageSrc: '/assets/images/home-v2311/food-waste-experience.jpg',
  imageAlt: 'photo de gaspillage alimentaire',
}

// 首页第三部分的内容数据配置 Fr
const contentSection3Props: IContentSection3Props = {
  title: 'Déchets alimentaires pour nourrir les plantes Poubelle magique',
  items: [
    {
      id: 1,
      description: (
        <>
          Jetez toutes sortes de déchets
          <br />
          Ajoutez des déchets alimentaires à tout moment
        </>
      ),
      imageSrc: '/assets/images/home-v2311/put-food-in-geme.jpg',
      imageAlt: 'mettre les déchets alimentaires dans le composteur GEME',
    },
    {
      id: 2,
      description: (
        <>
          Composter en continu
          <br />
          Les déchets sont réduits dans une boîte
        </>
      ),
      imageSrc: '/assets/images/home-v2311/geme-is-running.jpg',
      imageAlt:
        'attendre le compostage des déchets alimentaires lorsque GEME fonctionne',
    },
    {
      id: 3,
      description: (
        <>
          Transformez les déchets en compost
          <br />
          Il suffit de le retirer facilement et de l&apos;utiliser
        </>
      ),
      imageSrc: '/assets/images/home-v2311/get-compost-from-geme.jpg',
      imageAlt: 'item 3',
    },
    {
      id: 4,
      description: (
        <>
          Free and good gardening soil
          <br />
          Feed and grow your plant
        </>
      ),
      imageSrc: '/assets/images/home-v2311/planting.jpg',
      imageAlt: 'item 4',
    },
  ],
}

// 首页第四部分（youtube视频）的内容数据配置 Fr
const contentSection4Props: IContentSection4Props = {
  title: (
    <>
      Arrêtez la mise en décharge
      <br />
      Commencer le compostage
    </>
  ),
  description: `GEME aide chaque famille à éliminer le gaspillage alimentaire quotidien, à créer un sol nourri, à construire un jardin sain, à réduire l'empreinte carbone et à éviter la mise en décharge et l'incinération.`,
  withMp4VideoOrYoutubeVideo: {
    type: 'youtube',
    videoPosterImage: {
      src: '/assets/images/home-v2311/cover-v3.jpg',
      alt: 'GEME in your home',
      width: 1600,
      height: 900,
      srcSetData: {
        '100w': '/assets/images/home-v2311/cover-v3.jpg',
      },
    },
    // videoSrcUrl:
    //   'https://public-assest-434759801795.s3.us-west-1.amazonaws.com/geme-banner.mp4',
    videoSrcUrl: 'https://www.youtube.com/embed/ROJYZBp0jcM',
  },
}

// 首页第五部分（滚动动画部分）的内容数据配置 Fr
const secondLifeProps: ISecondLifeProps = {
  titleLeftPart: 'Compost',
  titleRightPart: 'Une nouvelle vie pour les déchets',
  description:
    'Vous pouvez réduire de 100 kg à 300 kg les émissions de CO2. Si vous recyclez tous vos déchets alimentaires via le compostage.',

  articles: [
    {
      id: 1,
      title: `Prévenir la perte d'eau`,
      description: `Le compost peut absorber l'eau, permettant à vos graines de mieux pousser.`,
      image: {
        width: 1200,
        height: 800,
        alt: `Prévenir la perte d'eau`,
        src: 'https://www.datocms-assets.com/79468/1666986512-moins_eau.jpg?w=10',
        srcSetData: {
          '100w':
            'https://www.datocms-assets.com/79468/1666986512-moins_eau.jpg?ixlib=js-2.3.2&auto=format&w=100',
          '300w':
            'https://www.datocms-assets.com/79468/1666986512-moins_eau.jpg?ixlib=js-2.3.2&auto=format&w=300',
          '600w':
            'https://www.datocms-assets.com/79468/1666986512-moins_eau.jpg?ixlib=js-2.3.2&auto=format&w=600',
          '900w':
            'https://www.datocms-assets.com/79468/1666986512-moins_eau.jpg?ixlib=js-2.3.2&auto=format&w=900',
          '1200w':
            'https://www.datocms-assets.com/79468/1666986512-moins_eau.jpg?ixlib=js-2.3.2&auto=format&w=1200',
        },
      },
    },
    {
      id: 2,
      title: 'Faire du bon sol',
      description:
        'Le compost peut nourrir la terre du jardin et permettre aux plantes de grandir.',
      image: {
        width: 1200,
        height: 800,
        alt: `Prévenir la perte d'eau`,
        src: 'https://www.datocms-assets.com/79468/1666986527-sols_riches.jpg?w=10',
        srcSetData: {
          '100w':
            'https://www.datocms-assets.com/79468/1666986527-sols_riches.jpg?ixlib=js-2.3.2&auto=format&w=100',
          '300w':
            'https://www.datocms-assets.com/79468/1666986527-sols_riches.jpg?ixlib=js-2.3.2&auto=format&w=300',
          '600w':
            'https://www.datocms-assets.com/79468/1666986527-sols_riches.jpg?ixlib=js-2.3.2&auto=format&w=600',
          '900w':
            'https://www.datocms-assets.com/79468/1666986527-sols_riches.jpg?ixlib=js-2.3.2&auto=format&w=900',
          '1200w':
            'https://www.datocms-assets.com/79468/1666986527-sols_riches.jpg?ixlib=js-2.3.2&auto=format&w=1200',
        },
      },
    },
    {
      id: 3,
      title: 'Combattre le changement climatique',
      description:
        'Le compost peut réduire la mise en décharge et permettre à notre planète de devenir plus verte.',
      image: {
        width: 1200,
        height: 800,
        alt: `Prévenir la perte d'eau`,
        src: 'https://www.datocms-assets.com/79468/1666986537-changements_climatiques.jpg?w=10',
        srcSetData: {
          '100w':
            'https://www.datocms-assets.com/79468/1666986537-changements_climatiques.jpg?ixlib=js-2.3.2&auto=format&w=100',
          '300w':
            'https://www.datocms-assets.com/79468/1666986537-changements_climatiques.jpg?ixlib=js-2.3.2&auto=format&w=300',
          '600w':
            'https://www.datocms-assets.com/79468/1666986537-changements_climatiques.jpg?ixlib=js-2.3.2&auto=format&w=600',
          '900w':
            'https://www.datocms-assets.com/79468/1666986537-changements_climatiques.jpg?ixlib=js-2.3.2&auto=format&w=900',
          '1200w':
            'https://www.datocms-assets.com/79468/1666986537-changements_climatiques.jpg?ixlib=js-2.3.2&auto=format&w=1200',
        },
      },
    },
  ],

  endTitleLeftPart: 'Les déchets renaîtront',
  endTitleRightPart: 'La vie continue !',
}

// 首页第六部分的内容数据配置 Fr
const contentSection6FixedProps: IContentSection6FixedProps = {
  title: `Le moyen le plus simple d'obtenir du compost`,
  videoPosterUrl: '/assets/images/home-v2311/use-compost-cover.jpg',
  videoSrcUrl:
    'https://public-assest-434759801795.s3.us-west-1.amazonaws.com/geme-genereate-compost-12s-480p.mp4',
  steps: [
    {
      id: 1,
      Icon: CompostStep1,
      description: (
        <>
          pas de temps d&apos;attente
          <br />
          lents et maintenance facile
        </>
      ),
    },
    {
      id: 2,
      Icon: CompostStep2,
      description: (
        <>
          pas de salissures <br />
          odeur propre et inodore
        </>
      ),
    },
    {
      id: 3,
      Icon: CompostStep3,
      description: (
        <>
          pas besoin de transférer <br />
          le travail par tous les temps
        </>
      ),
    },
  ],
}

// 首页第七部分的内容数据配置 Fr
const contentSection1Props2: IContentSection1Props = {
  title: (
    <>
      Du vrai compost <br />
      Déchets non déshydratés
    </>
  ),
  description: (
    <>
      Gardez à l’esprit que la plupart des autres « composteurs » sont en fait
      des déshydrateurs;
      <br />
      ils cuisent et sèchent simplement les aliments en morceaux qui ressemblent
      à de la terre.
      <br />
      En revanche, GAME utilise la biotechnologie microbienne pour améliorer la
      fermentation aérobie naturelle, ce qui en fait un véritable processus de
      compostage.
    </>
  ),
  imageSrc: '/assets/images/home-v2311/the-man-get-compost-from-geme.jpg',
  imageAlt: `l'homme récupère le compost de GAME`,
}

// 首页第八部分的内容数据配置 Fr
const contentSection1Props3: IContentSection1Props = {
  title: (
    <>
      Propulsé par BioTech
      <br />
      et fabrication moderne
    </>
  ),
  description: (
    <>
      Notre équipe scientifique a testé cette technologie de manière approfondie
      au cours des 50 dernières années. années dans le traitement des
      biodéchets, des sols et des eaux polluées. Ils ont affiné la technologie
      de base, menant à la création de GEME Kobold.
      <br />
      <br />
      Notre équipe d&apos;ingénieurs possède une vaste expérience dans la
      conception et fabrication de compacteurs de déchets. Ils ont récemment
      développé le GEME Composteur.
      <br />
      <br />
      GEME Kobold et GEME Composter déclenchent une révolution.
    </>
  ),
  imageSrc: '/assets/images/home-v2311/observe-the-plants.jpg',
  imageAlt: 'observer les plantes',
}

// 首页第九部分（三动图）的内容数据配置 Fr
const contentSection5Props: IContentSection5Props = {
  title: 'Transformez les restes de nourriture en compost organique',
  description: (
    <>
      GEME Kobold est un micro-organisme qui se reproduit lorsqu&apos;il est
      bien nourri.
      <br />
      Il décompose vos déchets alimentaires, qu&apos;ils soient salés ou acides.
      <br />
      Le résultat? Compost organique maison prêt à l&apos;emploi pour plantes.
    </>
  ),
  images: [
    {
      id: 1,
      stepText: 'Mettre des déchets',
      imageSrc: '/assets/images/home-v2311/compost-step-1.gif',
      imageAlt: 'photo de gaspillage alimentaire',
    },
    {
      id: 2,
      stepText: 'Attendez quelques jours',
      imageSrc: '/assets/images/home-v2311/compost-step-2.gif',
      imageAlt: 'photo de gaspillage alimentaire',
    },
    {
      id: 3,
      stepText: 'Sortez le compost',
      imageSrc: '/assets/images/home-v2311/compost-step-3.gif',
      imageAlt: 'photo de gaspillage alimentaire',
    },
  ],
  bottomDescription: (
    <>
      Seulement 3 étapes en font le moyen le plus simple de lutter contre le
      changement climatique.
    </>
  ),
}

// 首页第十部分（地图）的内容数据配置 Fr
const footprintsProps: IFootprintsProps = {
  grayBackground: false,
  title: 'Empreintes vertes de GEME dans le monde',
  description: `Merci de soutenir GEME et d'apporter plus de vert au monde. Soyez le premier à vous propager chez vous !`,
  proportionalSymbolMapProps: {
    recentOrderedFrom: 'Les gens de {city} soutiennent GEME avec leur amour.',
  },
}

// 首页最后一个部分（加入我们）的内容数据配置 Fr
const newsltterProps: INewsletterProps = {
  newsletterCenteredCardProps: {
    title: 'Rejoignez le mouvement',
    description: (
      <>
        Une nouvelle approche du problème mondial des déchets commence avec
        chacun de nous, sans effort dans la vie quotidienne
      </>
    ),
    emailInputName: 'email-address',
    emailLabel: 'Adresse e-mail',
    emailPlaceholder: 'Entrer votre Email',
    submitButtonLabel: `S'abonner`,
  },
  successNoticeProps: {
    title: 'Merci de vous être abonné!',
    description: 'Nous vous tiendrons au courant des dernières nouvelles.',
  },
}

function HomePageFr() {
  return (
    <>
      <HeroSection1 {...heroSection1Props} />

      <ContentSection2 {...contentSection2Props} />
      <ContentSection3 {...contentSection3Props} />
      <ContentSection4 {...contentSection4Props} />

      <SecondLife {...secondLifeProps} />

      <div>
        <ContentSection6Fixed {...contentSection6FixedProps} />
        <ContentSection1 {...contentSection1Props2} isDisplayTextOnLeft />
        <ContentSection1 {...contentSection1Props3} />
      </div>

      <div className=" bg-v2311-bg-light-green ">
        <ContentSection5 {...contentSection5Props} />
      </div>

      <Footprints {...footprintsProps} />

      <Newsletter {...newsltterProps} />
    </>
  )
}

export { HomePageFr }
