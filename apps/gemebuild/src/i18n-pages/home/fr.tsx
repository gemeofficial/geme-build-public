/* eslint-disable react/no-unescaped-entities */
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
  IReviewsSectionConfig,
} from 'ui'
import { Footprints, type IFootprintsProps } from '../../components/footprints'
import { Newsletter, INewsletterProps } from './containers/newsletter'
import { ILinkComponent } from '../../contexts/link-context'
import { ReviewsSectionModule } from '../../components/reviews-section-module'

// 首页video部分的内容数据配置 Fr
const heroSection1Props: IHeroSection1Props = {
  title: (
    <>
      <span className="hidden xl:inline">
        Le premier composteur de déchets bio au monde
      </span>
      <span className="xl:hidden">Le premier composteur de déchets bio au monde</span>
    </>
  ),
  description: (
    <>
      <span className=" hidden xl:inline ">
        GEME : le choix intelligent pour la maison
        <br />
        Transformez vos déchets de cuisine en compost organique
        <br />
        Moins de décharges, plus de terre fertile pour votre jardin
      </span>
      <span className=" xl:hidden ">
        GEME : le choix intelligent pour la maison
        <br />
        Transformez vos déchets de cuisine en compost organique
        <br />
        Moins de décharges, plus de terre fertile pour votre jardin
      </span>
    </>
  ),
  linkText: 'Achetez maintenant',
  linkUrl: '/fr/product/geme',
  videoProps: {
    src: 'https://www-geme-bio-us.s3.us-west-1.amazonaws.com/hero-banner-window-video-19s-480p.mp4',
    posterUrl: '/assets/images/home-v2311/hero-blurred.webp',
  },
  fullScreenVideoUrl: 'https://www.youtube.com/embed/ROJYZBp0jcM',
  heroImageUrlPc: '/assets/images/home-v2311/cover-v3.jpg',
  heroImageUrlMobile: '/assets/images/home-v2311/cover-v3-mobile.jpg',
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
  title: 'Des déchets alimentaires à l’engrais pour plantes – Composteur domestique',
  items: [
    {
      id: 1,
      description: (
        <>
          Jetez tous types de déchets
          <br />
          Ajoutez des déchets alimentaires à tout moment
        </>
      ),
      imageSrc: '/assets/images/home-v2311/put-food-in-geme.jpg',
      imageAlt: 'put food waste in GEME composter',
    },
    {
      id: 2,
      description: (
        <>
          Compostage continu
          <br />
          Les déchets se réduisent dans une boîte
        </>
      ),
      imageSrc: '/assets/images/home-v2311/geme-is-running.jpg',
      imageAlt: 'wait food waste composting when GEME is running',
    },
    {
      id: 3,
      description: (
        <>
          Transformez les déchets en compost
          <br />
          Retirez-le facilement et utilisez-le
        </>
      ),
      imageSrc: '/assets/images/home-v2311/get-compost-from-geme.jpg',
      imageAlt: 'item 3',
    },
    {
      id: 4,
      description: (
        <>
          Sol de jardin gratuit et de qualité
          <br />
          Nourrissez et faites pousser vos plantes
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
      Arrêtez les décharges
      <br />
      Commencez le compostage
    </>
  ),
  description:
    'GEME aide les familles à transformer leurs restes alimentaires quotidiens en jardins prospères, en sol nourrissant et en une empreinte carbone réduite, tout en maintenant les déchets hors des décharges et des incinérateurs.',
  withMp4VideoOrYoutubeVideo: {
    type: 'youtube',
    videoPosterImage: {
      src: '/assets/images/home-v2311/cover-v4.jpg',
      alt: 'GEME in your home',
      width: 1600,
      height: 900,
      srcSetData: {
        '100w': '/assets/images/home-v2311/cover-v4.jpg',
      },
    },
    // videoSrcUrl:
    videoSrcUrl: 'https://www.youtube.com/embed/nlsTg4l_3zE',
  },
}

// 首页第五部分（滚动动画部分）的内容数据配置 Fr
const secondLifeProps: ISecondLifeProps = {
  titleLeftPart: 'Compost',
  titleRightPart: 'Nouvelle vie pour les déchets',
  description: `Vous pouvez réduire de 100 kg à 300 kg les émissions de CO2. Si vous recyclez tous vos déchets alimentaires par le compostage.`,

  articles: [
    {
      id: 1,
      title: 'Bon sol',
      description: 'Le compost peut nourrir le sol du jardin, laisser les plantes grandir davantage.',
      image: {
        width: 1200,
        height: 800,
        alt: 'Make Good Soil',
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
      title: `Prévenir la perte d'eau`,
      description: `Le compost peut absorber l'eau, laisser vos graines mieux pousser.`,
      image: {
        width: 1200,
        height: 800,
        alt: 'Prevent Water Lost',
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
      title: 'Lutter contre le changement climatique',
      description: 'Le compost peut réduire les décharges, rendre notre planète plus verte.',
      image: {
        width: 1200,
        height: 800,
        alt: 'Fight Climate Change',
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

  endTitleLeftPart: 'Renaissance des déchets',
  endTitleRightPart: 'La vie continue!',
}

// 首页第六部分的内容数据配置 Fr
const contentSection6FixedProps: IContentSection6FixedProps = {
  title: `Le moyen le plus simple d'obtenir du compost`,
  videoPosterUrl: '/assets/images/home-v2311/use-compost-cover.jpg',
  videoSrcUrl:
    'https://www-geme-bio-us.s3.us-west-1.amazonaws.com/geme-genereate-compost-12s-480p.mp4',
  steps: [
    {
      id: 1,
      Icon: CompostStep1,
      description: (
        <>
          Pas de temps d'attente lent
          <br />
          Entretien facile
        </>
      ),
    },
    {
      id: 2,
      Icon: CompostStep2,
      description: (
        <>
          Pas de désordre ni d'odeur
          <br />
          Propre et sans odeur
        </>
      ),
    },
    {
      id: 3,
      Icon: CompostStep3,
      description: (
        <>
          Pas besoin de retourner
          <br />
          Travailler par tous les temps
        </>
      ),
    },
  ],
}

// 首页第七部分的内容数据配置 Fr
const contentSection1Props2: IContentSection1Props = {
  title: (
    <>
      Compost réel <br />
      Pas de déchets déshydratés
    </>
  ),
  description: (
    <>
      Gardez à l'esprit que la plupart des autres "composteurs" sont en fait
      des déshydrateurs;
      <br />
      ils cuisinent et sèchent simplement la nourriture en morceaux qui
      ressemblent à du sol.
      <br />
      En revanche, GEME utilise la biotechnologie microbienne pour améliorer la
      fermentation aérobie naturelle, en faisant un véritable processus de compostage.
    </>
  ),
  imageSrc: '/assets/images/home-v2311/the-man-get-compost-from-geme.jpg',
  imageAlt: 'the man get compost from GEME',
}

// 首页第八部分的内容数据配置 Fr
const contentSection1Props3: IContentSection1Props = {
  title: (
    <>
      Propulsé par la biotechnologie
      <br />
      et la fabrication moderne
    </>
  ),
  description: (
    <>
      Notre équipe scientifique a testé cette technologie de manière exhaustive
      au cours des 50 dernières années pour traiter les biodéchets, le sol et
      l'eau polluée. Ils ont affiné la technologie de base, menant à la
      création de GEME Kobold.
      <br />
      <br />
      Notre équipe d'ingénieurs possède une vaste expérience dans la conception
      et la fabrication de compacteurs de déchets. Ils ont récemment développé
      le composteur GEME.
      <br />
      <br />
      GEME Kobold et le composteur GEME déclenchent une révolution.
    </>
  ),
  imageSrc: '/assets/images/home-v2311/observe-the-plants.jpg',
  imageAlt: 'observe the plants',
}

// 首页第九部分（三动图）的内容数据配置 Fr
const contentSection5Props: IContentSection5Props = {
  title: 'Transformer les restes alimentaires en compost organique',
  description: (
    <>
      GEME Kobold est un micro-organisme se reproduisant lorsqu'il est bien
      nourri.
      <br />
      Il décompose vos déchets alimentaires, peu importe leur salinité ou leur
      acidité.
      <br />
      Le résultat ? Un compost organique maison, prêt à l'emploi pour les
      plantes.
    </>
  ),
  images: [
    {
      id: 1,
      stepText: 'Mettre les déchets',
      imageSrc: '/assets/images/home-v2311/compost-step-1.gif',
      imageAlt: 'food waste picture',
    },
    {
      id: 2,
      stepText: 'Attendre quelques jours',
      imageSrc: '/assets/images/home-v2311/compost-step-2.gif',
      imageAlt: 'food waste picture',
    },
    {
      id: 3,
      stepText: 'Retirer le compost',
      imageSrc: '/assets/images/home-v2311/compost-step-3.gif',
      imageAlt: 'food waste picture',
    },
  ],
  bottomDescription: (
    <>Seulement 3 étapes en font la méthode la plus simple pour lutter contre le changement climatique.</>
  ),
}

// 首页第十部分（好评卡片）的内容数据配置 Fr
const reviewsSectionProps = {
  title: 'Avis des utilisateurs réels',
  description:
    `Cliquez ci-dessous pour voir les retours des vraies personnes, bons et mauvais - la vérité non filtrée dont vous avez besoin.`,
}

// 首页第十一部分（地图）的内容数据配置 Fr
const footprintsProps: IFootprintsProps = {
  grayBackground: true,
  title: "Les empreintes vertes de GEME dans le monde",
  description:
    `Merci de soutenir GEME et d'apporter plus de vert au monde. Soyez le premier à le répandre chez vous !`,
  proportionalSymbolMapProps: {
    recentOrderedFrom: `Les gens de {city} soutiennent GEME avec amour.`,
  },
}

// 首页最后一个部分（加入我们）的内容数据配置 Fr
const newsltterProps: INewsletterProps = {
  newsletterCenteredCardProps: {
    title: 'Rejoignez le mouvement',
    description: (
      <>
        Une nouvelle approche du problème des déchets mondiaux commence avec chacun de nous,
        sans effort dans la vie quotidienne
      </>
    ),
    emailInputName: 'email-address',
    emailLabel: 'Adresse e-mail',
    emailPlaceholder: 'Entrez votre adresse e-mail',
    submitButtonLabel: `S'abonner`,
  },
  successNoticeProps: {
    title: 'Merci pour votre abonnement!',
    description: 'Nous vous tiendrons informé des dernières nouvelles.',
  },
}

function HomePageFr({
  PrefetchLink,
  reviewsSectionConfig,
}: {
  PrefetchLink?: ILinkComponent
  reviewsSectionConfig: IReviewsSectionConfig
}) {
  heroSection1Props.LinkComponent = PrefetchLink
  return (
    <>
      <HeroSection1 {...heroSection1Props} />

      {/*<ContentSection2 {...contentSection2Props} />*/}
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

      <ReviewsSectionModule
        locale="fr"
        reviewsSectionConfig={reviewsSectionConfig}
        {...reviewsSectionProps}
      />

      <Footprints {...footprintsProps} />

      <Newsletter {...newsltterProps} />
    </>
  )
}

export { HomePageFr }
