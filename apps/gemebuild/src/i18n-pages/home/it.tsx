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
import { Newsletter, INewsletterProps } from './components/newsletter'
import { ILinkComponent } from '../../contexts/link-context'
import { ReviewsSectionModule } from '../../components/reviews-section-module'
import HomeHeroSectionSwiper, {
  IHomeHeroSectionSwiperProps,
} from './components/HomeHeroSectionSwiper'
import { LogoCloud } from 'ui'

// 首页video部分的内容数据配置 It
const heroSection1Props: IHeroSection1Props = {
  title: `Il primo compostiera  di rifiuti biologici al mondo`,
  description: (
    <>
      <span className=" hidden xl:inline ">
        Incontra GEME, il moderno compostiera elettrico per la casa
        <br />
        Trasforma i tuoi rifiuti alimentari quotidiani in compost organico
        <br />
        Meno discariche, più terreno da giardino.
      </span>
      <span className=" xl:hidden ">
        Incontra GEME, il moderno compostiera elettrico per la casa
        <br />
        Trasforma i tuoi rifiuti alimentari quotidiani in compost organico
        <br />
        Meno discariche, più giardinaggio.
      </span>
    </>
  ),
  linkText: 'Acquista Ora',
  linkUrl: '/product/geme',
  videoProps: {
    src: 'https://www-geme-bio-us.s3.us-west-1.amazonaws.com/hero-banner-window-video-19s-480p.mp4',
    posterUrl: '/assets/images/home-v2311/hero-blurred.webp',
  },
  fullScreenVideoUrl: 'https://www.youtube.com/embed/ROJYZBp0jcM',
  heroImageUrlPc: '/assets/images/home-v2311/cover-v3.jpg',
  heroImageUrlMobile: '/assets/images/home-v2311/cover-v3-mobile.jpg',
}

// 首页Swiper滚动轮播区域的内容数据配置 It
const heroSectionSwiperProps: IHomeHeroSectionSwiperProps = {
  section1: heroSection1Props,
  section2: {
    title: (
      <>
        Messedamm 22 <br /> Hall 1.2 Stand No.312
      </>
    ),
    description: (
      <>
        <div className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 3xl:text-[100px]">
          Incontra GEME a
        </div>
        <div className="xl:leading-[0.65] leading-none text-7xl md:text-[100px] lg:text-[150px] xl:text-[200px] 2xl:text-[300px] 3xl:text-[400px]">
          IFA
        </div>
        <div className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 3xl:text-[100px]">
          Berlino 2024
        </div>
      </>
    ),
    linkText: 'Scopri di più',
    linkUrl: '/ifa',
    heroImageUrlPc: '/assets/images/ifa/hero-bg.png',
    heroImageUrlMobile: '/assets/images/ifa/hero-bg.png',
  },

  section3: {
    title: 'TERRA 2',
    description: (
      <>
        <div className="mt-10 xl:mt-20 3xl:mt-44 text-2xl md:text-5xl lg:text-6xl xl:text-4xl 3xl:text-6xl md:leading-none">
          NUOVA GENERAZIONE DI COMPOSTIERA GEME
        </div>
        <div className="text-2xl md:text-5xl lg:text-6xl xl:text-4xl 3xl:text-6xl md:leading-none">
          PROSSIMO RILASCIO
        </div>
      </>
    ),
    linkText: 'SCOPRI DI PIÙ',
    linkUrl: '/geme-terra-2',
    heroImageUrlPc: '/assets/images/home-v2311/hero-bg-3.jpg',
    heroImageUrlMobile: '/assets/images/home-v2311/hero-bg-mobile-3.jpg',
  },

  section4: {
    link: '/news',
    linkText: 'Visualizza i dettagli delle notizie',
    videoUrlPc:
      'https://www-geme-bio-us.s3.us-west-1.amazonaws.com/media/videos/news-swiper-video-en-pc.mp4',
    videoUrlMobile:
      'https://www-geme-bio-us.s3.us-west-1.amazonaws.com/media/videos/news-swiper-video-en-mobile.mp4',
  },
}

// 首页第二部分的内容数据配置 It
const contentSection2Props: IContentSection2Props = {
  title: 'Hai ancora una terribile esperienza con i rifiuti alimentari?',
  description: (
    <>
      I rifiuti alimentari possono essere disordinati e sgradevoli. <br />
      Creano odori, attirano mosche rumorose e procioni fastidiosi. <br />
      Il tuo scarico è intasato, la cucina diventa bagnata e sporca? <br />
      Il 60% dei rifiuti alimentari finisce in discarica. <br />
      Puoi fermarlo.
    </>
  ),
  imageSrc: '/assets/images/home-v2311/food-waste-experience.jpg',
  imageAlt: 'immagine di rifiuti alimentari',
}

// 首页第三部分的内容数据配置 It
const contentSection3Props: IContentSection3Props = {
  title: 'Rifiuti alimentari trasformati in fertilizzante per piante',
  items: [
    {
      id: 1,
      description: (
        <>
          Getta tutti i tipi di rifiuti
          <br />
          Aggiungi rifiuti alimentari in qualsiasi momento
        </>
      ),
      imageSrc: '/assets/images/home-v2311/put-food-in-geme.jpg',
      imageAlt: 'inserisci i rifiuti alimentari nel compostiera  GEME',
    },
    {
      id: 2,
      description: (
        <>
          Compostaggio continuo
          <br />I rifiuti vengono ridotti nel compostiera GEME
        </>
      ),
      imageSrc: '/assets/images/home-v2311/geme-is-running.jpg',
      imageAlt: 'compostaggio dei rifiuti alimentari quando GEME è in funzione',
    },
    {
      id: 3,
      description: (
        <>
          Trasforma i rifiuti in compost
          <br />
          Basta estrarlo facilmente e utilizzarlo
        </>
      ),
      imageSrc: '/assets/images/home-v2311/get-compost-from-geme.jpg',
      imageAlt: 'item 3',
    },
    {
      id: 4,
      description: (
        <>
          Rivitalizza il tuo terreno e il tuo giardino
          <br />
          Nutri le tue piante con fertilizzante gratuito
        </>
      ),
      imageSrc: '/assets/images/home-v2311/planting.jpg',
      imageAlt: 'item 4',
    },
  ],
}

// 首页第四部分（youtube视频）的内容数据配置 It
const contentSection4Props: IContentSection4Props = {
  title: (
    <>
      Smetti di riempire le discariche
      <br />
      Inizia a compostare
    </>
  ),
  description: `GEME consente alle famiglie di trasformare gli scarti alimentari quotidiani in giardini rigogliosi, terreni nutrienti e un'impronta di carbonio ridotta, il tutto mantenendo i rifiuti fuori da discariche e inceneritori.`,
  withMp4VideoOrYoutubeVideo: {
    type: 'youtube',
    videoPosterImage: {
      src: '/assets/images/home-v2311/cover-v4.jpg',
      alt: 'GEME nella tua casa',
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

// 首页第五部分（滚动动画部分）的内容数据配置 It
const secondLifeProps: ISecondLifeProps = {
  titleLeftPart: 'Compost',
  titleRightPart: 'Nuova Vita per i Rifiuti',
  description:
    'Puoi ridurre da 100 kg a 300 kg di emissioni di CO2. Se ricicli tutti i tuoi rifiuti alimentari tramite il compostaggio.',

  articles: [
    {
      id: 1,
      title: 'Rendere il Suolo Fertile',
      description:
        'Il compost può nutrire il terreno del giardino, facendo crescere le piante più grandi.',
      image: {
        width: 1200,
        height: 800,
        alt: 'Rendere il Suolo Fertile',
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
      title: `Prevenire la Perdita d'Acqua`,
      description: `Il compost può assorbire l'acqua, facendo crescere meglio i tuoi semi.`,
      image: {
        width: 1200,
        height: 800,
        alt: `Prevenire la Perdita d'Acqua`,
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
      title: 'Combattere il Cambiamento Climatico',
      description:
        'Il compost può ridurre le discariche, rendendo il nostro pianeta più verde.',
      image: {
        width: 1200,
        height: 800,
        alt: 'Combattere il Cambiamento Climatico',
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

  endTitleLeftPart: 'Rifiuti Rinascono',
  endTitleRightPart: 'La Vita Continua!',
}

// 首页第六部分的内容数据配置 It
const contentSection6FixedProps: IContentSection6FixedProps = {
  title: 'Il modo più semplice per ottenere compost',
  videoPosterUrl: '/assets/images/home-v2311/use-compost-cover.jpg',
  videoSrcUrl:
    'https://www-geme-bio-us.s3.us-west-1.amazonaws.com/geme-genereate-compost-12s-480p.mp4',
  steps: [
    {
      id: 1,
      Icon: CompostStep1,
      description: (
        <>
          nessun lungo tempo di attesa
          <br />
          facile manutenzione
        </>
      ),
    },
    {
      id: 2,
      Icon: CompostStep2,
      description: (
        <>
          nessun disordine e cattivo odore
          <br />
          pulito e inodore
        </>
      ),
    },
    {
      id: 3,
      Icon: CompostStep3,
      description: (
        <>
          non è necessario girare il compost
          <br />
          funziona in qualsiasi condizione climatica
        </>
      ),
    },
  ],
}

// 首页第七部分的内容数据配置 It
const contentSection1Props2: IContentSection1Props = {
  title: (
    <>
      Compost vero <br />
      Non rifiuti disidratati
    </>
  ),
  description: (
    <>
      Ricorda che la maggior parte degli altri &quot;compostatori&quot; in
      realtà sono essiccatori;
      <br />
      si limitano a cuocere e asciugare il cibo in pezzi che sembrano terriccio.
      <br />
      Al contrario, GEME utilizza la biotecnologia microbica per migliorare la
      fermentazione aerobica naturale, rendendo il processo di compostaggio
      autentico.
    </>
  ),
  imageSrc: '/assets/images/home-v2311/the-man-get-compost-from-geme.jpg',
  imageAlt: `l'uomo che ottiene il compost da GEME`,
}

// 首页第八部分的内容数据配置 It
const contentSection1Props3: IContentSection1Props = {
  title: (
    <>
      Alimentato dalla biotecnologia
      <br />e dalla moderna produzione
    </>
  ),
  description: (
    <>
      Il nostro team scientifico ha testato ampiamente questa tecnologia negli
      ultimi 50 anni nel trattamento di rifiuti organici, terreno e acqua
      inquinata. Hanno perfezionato la tecnologia di base, portando alla
      creazione del GEME Kobold.
      <br />
      <br />
      Il nostro team di ingegneri possiede una vasta esperienza nella
      progettazione e produzione di compattatori di rifiuti. Hanno recentemente
      sviluppato il compostatore GEME.
      <br />
      <br />
      GEME Kobold e il compostatore GEME danno inizio a una rivoluzione.
    </>
  ),
  imageSrc: '/assets/images/home-v2311/observe-the-plants.jpg',
  imageAlt: 'osservare le piante',
}

// 首页第九部分（三动图）的内容数据配置 It
const contentSection5Props: IContentSection5Props = {
  title: 'Trasforma gli scarti alimentari in compost organico',
  description: (
    <>
      GEME Kobold è un microrganismo che si riproduce quando ben nutrito.
      <br />
      Scompone i tuoi rifiuti alimentari, indipendentemente da quanto siano
      salati o acidi.
      <br />
      Il risultato? Compost organico fatto in casa pronto all'uso per le piante.
    </>
  ),
  images: [
    {
      id: 1,
      stepText: 'Metti i rifiuti dentro',
      imageSrc: '/assets/images/home-v2311/compost-step-1.gif',
      imageAlt: 'immagine di scarti alimentari',
    },
    {
      id: 2,
      stepText: 'Aspetta qualche giorno',
      imageSrc: '/assets/images/home-v2311/compost-step-2.gif',
      imageAlt: 'immagine di scarti alimentari',
    },
    {
      id: 3,
      stepText: 'Prendi il compost',
      imageSrc: '/assets/images/home-v2311/compost-step-3.gif',
      imageAlt: 'immagine di scarti alimentari',
    },
  ],
  bottomDescription: (
    <>
      Solo 3 passaggi lo rendono il modo più semplice per combattere i
      cambiamenti climatici.
    </>
  ),
}

// 首页第十部分（好评卡片）的内容数据配置 It -- 暂时弃用
const reviewsSectionProps = {
  title: 'Cosa dicono i veri utenti',
  description:
    'Clicca qui sotto per vedere cosa dicono le persone reali, sia positivo che negativo - la verità senza filtri di cui hai bisogno.',
}

// 首页第十部分（用户使用视频）的内容数据配置 It
const userStoriesVideosProps: IUserStoriesVideoProps = {
  title: 'Cosa dicono i clienti',
  videos: [
    {
      type: 'youtube',
      src: 'https://youtu.be/TwCYDZgoUl0?si=w5mzwn4dQJr6x0vD',
      coverImageUrl: '/assets/images/user-stories-videos/youtube.png',
      coverAlt: "Recensioni sull'uso reale da Amazon",
      buttonText: '@Mister and Miss Ginger Jones',
    },
    {
      type: 'youtube',
      src: 'https://youtu.be/-qkjLB3GcKo',
      coverImageUrl: '/assets/images/user-stories-videos/youtube2.png',
      coverAlt: 'Compostatore reale vs altri riciclatori di cibo disidratato',
      buttonText: '@Mister and Miss Ginger Jones',
    },
    {
      type: 'youtube',
      src: 'https://youtu.be/CVoDNDONFAk?t=979',
      coverImageUrl: '/assets/images/user-stories-videos/youtube3.png',
      coverAlt: 'Video di recensione di Benson Chik, Regno Unito',
      buttonText: '@Benson Chik',
    },
    {
      type: 'youtube',
      src: 'https://youtu.be/bYzh9ZUJKxs?t=845',
      coverImageUrl: '/assets/images/user-stories-videos/youtube4.png',
      coverAlt: 'Review video from bricolou, France',
      buttonText: '@bricolou',
    },
  ],
}

// 首页第十一部分（地图）的内容数据配置 It
const footprintsProps: IFootprintsProps = {
  grayBackground: true,
  title: 'Le impronte verdi di GEME nel mondo',
  description:
    'Grazie per aver sostenuto GEME e portato più verde nel mondo. Sii il primo a diffonderlo nella tua zona!',
  proportionalSymbolMapProps: {
    recentOrderedFrom:
      'Le persone da {city} sostengono GEME con il loro amore.',
  },
}

// 首页最后一个部分（加入我们）的内容数据配置 It
const newsltterProps: INewsletterProps = {
  newsletterCenteredCardProps: {
    title: 'Unisciti al movimento',
    description: (
      <>
        Un nuovo approccio al problema dei rifiuti mondiali inizia con ognuno di
        noi, senza sforzo nella vita quotidiana
      </>
    ),
    emailInputName: 'indirizzo-email',
    emailLabel: 'Indirizzo email',
    emailPlaceholder: 'Inserisci la tua email',
    submitButtonLabel: 'Iscriviti',
  },
  successNoticeProps: {
    title: 'Grazie per esserti iscritto!',
    description: 'Ti terremo aggiornato con le ultime novità.',
  },
}

export interface IHomePageProps {
  PrefetchLink?: ILinkComponent
  reviewsSectionConfig: IReviewsSectionConfig
}

export function HomePageIt({
  PrefetchLink,
  reviewsSectionConfig,
}: IHomePageProps) {
  heroSection1Props.LinkComponent = PrefetchLink
  heroSectionSwiperProps.LinkComponent = PrefetchLink

  // const isOpenSwiperContent = true
  const isOpenSwiperContent =
    process.env.NEXT_PUBLIC_HOME_HERO_SWIPER &&
    process.env.NEXT_PUBLIC_HOME_HERO_SWIPER == 'true'
      ? true
      : false

  return (
    <>
      {isOpenSwiperContent && (
        <HomeHeroSectionSwiper {...heroSectionSwiperProps} />
      )}
      {!isOpenSwiperContent && <HeroSection1 {...heroSection1Props} />}

      {/*<ContentSection2 {...contentSection2Props} />*/}
      <ContentSection3 {...contentSection3Props} />

      <LogoCloud canRedirect locale="it" />
      <ContentSection4 {...contentSection4Props} />

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

      <UserStoriesVideos {...userStoriesVideosProps} />

      <Footprints {...footprintsProps} />

      <Newsletter {...newsltterProps} />
    </>
  )
}
