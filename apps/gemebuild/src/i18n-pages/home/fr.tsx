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
  UserStoriesVideos,
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
  IUserStoriesVideoProps,
} from 'ui'
import { Footprints, type IFootprintsProps } from '../../components/footprints'
import { Newsletter, INewsletterProps } from './containers/newsletter'
import { ILinkComponent } from '../../contexts/link-context'
import { ReviewsSectionModule } from '../../components/reviews-section-module'
import { IHomePageProps } from './en'
import { mixpanelEventHandles } from '../../lib/mixpanel-config'

// 首页video部分的内容数据配置 Fr
const heroSection1Props: IHeroSection1Props = {
  title: `Le premier composteur de déchets biologiques au monde`,
  description: (
    <>
      <span className=" hidden xl:inline ">
        Découvrez GEME, le composteur électrique moderne pour la maison
        <br />
        Transformez vos déchets alimentaires quotidiens en compost organique
        <br />
        Moins de décharges, pour votre plants et végétations
      </span>
      <span className=" xl:hidden ">
        Découvrez GEME, le composteur électrique <br />
        moderne pour la maison Transformez vos déchets <br />
        alimentaires quotidiens en compost organique
        <br />
        Moins de décharges, pour votre plants et végétations
      </span>
    </>
  ),
  linkText: 'Acheter maintenant',
  linkUrl: '/product/geme',
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
  title: 'Déchets alimentaires en engrais pour plantes Composteur domestique',
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
      imageAlt: 'put food waste in GEME composter',
    },
    {
      id: 2,
      description: (
        <>
          Compostage continu
          <br />
          Les déchets sont réduits dans le composteur GEME
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
          Sortez facilement et utilisez
        </>
      ),
      imageSrc: '/assets/images/home-v2311/get-compost-from-geme.jpg',
      imageAlt: 'item 3',
    },
    {
      id: 4,
      description: (
        <>
          Enrichissez votre jardin d'un terreau fertile et nourrissant
          <br />
          Choyez vos plantes et contemplez leur épanouissement
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
      Fini l'enfouissement,
      <br />
      Place au compostage !
    </>
  ),
  description:
    'GEME donne aux familles le pouvoir de transformer leurs déchets alimentaires quotidiens en jardins florissants et en sols fertiles. Réduisez votre empreinte carbone tout en détournant les déchets des décharges et des incinérateurs.',
  withMp4VideoOrYoutubeVideo: {
    type: 'youtube',
    videoPosterImage: {
      src: '/assets/images/home-v2311/cover-v4.jpg',
      alt: 'GEME dans votre maison',
      width: 1600,
      height: 900,
      srcSetData: {
        '100w': '/assets/images/home-v2311/cover-v4.jpg',
      },
    },
    videoSrcUrl: 'https://www.youtube.com/embed/nlsTg4l_3zE',
  },
}

// 首页第五部分（滚动动画部分）的内容数据配置 Fr
const secondLifeProps: ISecondLifeProps = {
  titleLeftPart: 'Compost',
  titleRightPart: 'Nouvelle vie pour les déchets',
  description:
    'Vous pouvez réduire de 100 kg à 300 kg les émissions de CO2 en recyclant tous vos déchets alimentaires par le compostage.',

  articles: [
    {
      id: 1,
      title: 'Un sol vivant',
      description: (
        <>
          Le compost, alchimie verte, enrichit la terre du jardin
          <br /> Et donne aux plantes l'élan d'une croissance sublime
        </>
      ),
      image: {
        width: 1200,
        height: 800,
        alt: 'Un sol vivant',
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
      title: 'Préservons chaque goutte',
      description: (
        <>
          Le compost, éponge fertile, étanche la soif de la terre <br /> Et
          berce vos semences vers une éclosion vigoureuse
        </>
      ),
      image: {
        width: 1200,
        height: 800,
        alt: 'Préservons chaque goutte',
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
      title: 'Luttons contre le changement climatique',
      description: (
        <>
          Le compost, gardien de notre terre, Éloigne les déchets de leur
          funeste destin <br /> Et pare notre planète d'un manteau verdoyant.
        </>
      ),
      image: {
        width: 1200,
        height: 800,
        alt: 'Luttons contre le changement climatique',
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
  endTitleRightPart: 'La vie continue !',
}

// 首页第六部分的内容数据配置 Fr
const contentSection6FixedProps: IContentSection6FixedProps = {
  title: "La façon la plus simple d'obtenir du compost",
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
          Pas de souillures <br />
          Inodore
        </>
      ),
    },
    {
      id: 3,
      Icon: CompostStep3,
      description: (
        <>
          Nul besoin de mélanger <br />
          fonctionne par tous les temps
        </>
      ),
    },
  ],
}

// 首页第七部分的内容数据配置 Fr
const contentSection1Props2: IContentSection1Props = {
  title: <>L'essence du véritable compost</>,
  description: (
    <>
      Loin des simulacres desséchés Gardez à l'esprit que la plupart des
      prétendus « composteurs » Ne sont que de vulgaires déshydrateurs,
      Réduisant les aliments en une pâle imitation de l'humus.
      <br />
      <br />
      GEME, quant à lui, orchestre une symphonie microbienne,Où la
      biotechnologie sublime la fermentation aérobie naturelle,Donnant naissance
      à l'authentique alchimie du compostage."
    </>
  ),
  imageSrc: '/assets/images/home-v2311/the-man-get-compost-from-geme.jpg',
  imageAlt: "l'homme obtient du compost de GEME",
}

// 首页第八部分的内容数据配置 Fr
const contentSection1Props3: IContentSection1Props = {
  title: <>L'alliance de la BioTech et de l'ingénierie moderne</>,
  description: (
    <>
      Un demi-siècle d'expertise scientifique Nos chercheurs, tels des
      alchimistes modernes, ont patiemment affiné leur art Au cœur des
      biodéchets, des sols épuisés et des eaux souillées Donnant naissance à la
      merveille qu'est GEME Kobold
      <br />
      <br />
      L'ingéniosité au service de l'environnement Nos ingénieurs, maîtres dans
      l'art de dompter les déchets. Ont forgé le GEME Composteur, fruit de leur
      savoir-faire
      <br />
      <br />
      GEME Kobold et GEME Composteur : Hérauts d'une révolution verte, ils
      métamorphosent nos déchets en trésors
    </>
  ),
  imageSrc: '/assets/images/home-v2311/observe-the-plants.jpg',
  imageAlt: 'observer les plantes',
}

// 首页第九部分（三动图）的内容数据配置 Fr
const contentSection5Props: IContentSection5Props = {
  title: 'Du déchet à la ressource : la transformation par GEME Kobold',
  description: (
    <>
      GEME Kobold : un processus biologique innovant Nos micro-organismes
      spécialisés prolifèrent en se nourrissant de vos résidus alimentaires.
      Efficaces sur tous types de déchets, qu'ils soient salés ou acides.
      <br />
      <br />
      Un cycle vertueux à domicile Transformez vos restes de cuisine en un
      compost de qualité. Une solution écologique, pratique et économique.
      <br />
      <br />
      Résultat : un amendement organique prêt à l'emploi Nourrissez vos plantes
      avec un compost riche en nutriments. Contribuez à la santé de votre jardin
      et à la préservation de l'environnement.
    </>
  ),
  images: [
    {
      id: 1,
      stepText: 'Mettre les déchets',
      imageSrc: '/assets/images/home-v2311/compost-step-1.gif',
      imageAlt: 'image des déchets alimentaires',
    },
    {
      id: 2,
      stepText: 'Attendre quelques jours',
      imageSrc: '/assets/images/home-v2311/compost-step-2.gif',
      imageAlt: 'image des déchets alimentaires',
    },
    {
      id: 3,
      stepText: 'Sortir le compost',
      imageSrc: '/assets/images/home-v2311/compost-step-3.gif',
      imageAlt: 'image des déchets alimentaires',
    },
  ],
  bottomDescription: (
    <>
      Seulement 3 étapes en font la façon la plus simple de lutter contre le
      changement climatique.
    </>
  ),
}

// 首页第十部分（好评卡片）的内容数据配置 Fr -- 暂时弃用
const reviewsSectionProps = {
  title: 'Ce que disent les vrais utilisateurs',
  description:
    'Cliquez ci-dessous pour voir les vrais avis des gens, bons et mauvais - la vérité non filtrée dont vous avez besoin.',
}

// 首页第十部分（用户使用视频）的内容数据配置 Fr
const userStoriesVideosProps: IUserStoriesVideoProps = {
  title: 'Ce que disent les clients',
  videos: [
    {
      type: 'youtube',
      src: 'https://youtu.be/TwCYDZgoUl0?si=w5mzwn4dQJr6x0vD',
      coverImageUrl: '/assets/images/user-stories-videos/youtube.png',
      coverAlt: 'Real life usage reviews from Amazon',
      buttonText: '@Mister and Miss Ginger Jones',
    },
    {
      type: 'instagram',
      src: 'https://www.instagram.com/reel/CxBKZOYRKQN/?utm_source=ig_web_copy_link',
      coverImageUrl: '/assets/images/user-stories-videos/instagram.png',
      coverAlt: 'Real use video from twin brothers',
      buttonText: '@Messitttwins',
    },
    {
      type: 'tiktok',
      src: 'https://www.tiktok.com/@kc_smithwrites/video/7312898892079697198',
      coverImageUrl: '/assets/images/user-stories-videos/tiktok2.png',
      coverAlt: 'Users from tiktok use videos',
      buttonText: '@kc_smithwrites',
    },
  ],
}

// 首页第十一部分（地图）的内容数据配置 Fr
const footprintsProps: IFootprintsProps = {
  grayBackground: true,
  title: 'Les empreintes vertes de GEME dans le monde',
  description:
    "Merci de soutenir GEME et d'apporter plus de vert au monde. Soyez le premier à le diffuser chez vous !",
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
        Une nouvelle approche du problème des déchets mondiaux commence avec
        chacun de nous, sans effort dans la vie quotidienne
      </>
    ),
    emailInputName: 'email-address',
    emailLabel: 'Adresse e-mail',
    emailPlaceholder: 'Entrez votre e-mail',
    submitButtonLabel: "S'abonner",
  },
  successNoticeProps: {
    title: 'Merci de vous être abonné!',
    description: 'Nous vous tiendrons au courant des dernières nouvelles.',
  },
}

function HomePageFr({ PrefetchLink, reviewsSectionConfig }: IHomePageProps) {
  heroSection1Props.LinkComponent = PrefetchLink
  return (
    <>
      <HeroSection1
        {...heroSection1Props}
        heroSectionsButtonOnClick={mixpanelEventHandles.homeHeroButton}
        onPlayCallback={mixpanelEventHandles.homeWatchVideoFromHero}
      />

      <ContentSection3 {...contentSection3Props} />
      <ContentSection4
        {...contentSection4Props}
        onPlayCallback={mixpanelEventHandles.homeWatchVideoFromStopLandfilling}
      />

      <SecondLife {...secondLifeProps} />

      <div>
        <ContentSection6Fixed {...contentSection6FixedProps} />
        <ContentSection1 {...contentSection1Props2} isDisplayTextOnLeft />
        <ContentSection1 {...contentSection1Props3} />
      </div>

      <div className=" bg-v2311-bg-light-green">
        <ContentSection5 {...contentSection5Props} />
      </div>

      {/* <ReviewsSectionModule
        locale="en"
        reviewsSectionConfig={reviewsSectionConfig}
        {...reviewsSectionProps}
      /> */}

      <UserStoriesVideos
        {...userStoriesVideosProps}
        onPlayCallback={(payload) => {
          mixpanelEventHandles.homeWatchVideoFromWhatCustomersSay(payload)
        }}
      />

      <Footprints {...footprintsProps} />

      <Newsletter {...newsltterProps} />
    </>
  )
}

export { HomePageFr }
