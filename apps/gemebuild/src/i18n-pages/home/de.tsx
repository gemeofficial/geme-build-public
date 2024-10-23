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
import { ReviewsSectionModule } from '../../components/reviews-section-module'
import { IHomePageProps } from './en'
import HomeHeroSectionSwiper, {
  IHomeHeroSectionSwiperProps,
} from './components/HomeHeroSectionSwiper'
import { LogoCloud } from 'ui'

// 首页video部分的内容数据配置 De
const heroSection1Props: IHeroSection1Props = {
  title: (
    <>
      <span className="hidden xl:inline">
        Weltweit erster Bioabfallkomposter
      </span>
      <span className="xl:hidden">Weltweit erster Bioabfallkomposter</span>
    </>
  ),
  description: (
    <>
      <span className=" hidden xl:inline ">
        Entdecken Sie GEME, den modernen elektrischen Komposter für Zuhause
        <br />
        Verwandeln Sie Ihre täglichen Lebensmittelabfälle in organischen Kompost
        <br />
        Weniger Deponie, mehr fruchtbare Erde.
      </span>
      <span className=" xl:hidden ">
        Entdecken Sie GEME, den modernen elektrischen Komposter für Zuhause{' '}
        <br />
        Verwandeln Sie Ihre täglichen Lebensmittelabfälle in organischen Kompost
        <br />
        Weniger Deponie, mehr fruchtbare Erde.
      </span>
    </>
  ),
  linkText: 'Jetzt kaufen',
  linkUrl: '/product/geme',
  videoProps: {
    src: 'https://www-geme-bio-us.s3.us-west-1.amazonaws.com/hero-banner-window-video-19s-480p.mp4',
    posterUrl: '/assets/images/home-v2311/hero-blurred.webp',
  },
  fullScreenVideoUrl: 'https://www.youtube.com/embed/ROJYZBp0jcM',
  heroImageUrlPc: '/assets/images/home-v2311/cover-v3.jpg',
  heroImageUrlMobile: '/assets/images/home-v2311/cover-v3-mobile.jpg',
}

// 首页Swiper滚动轮播区域的内容数据配置 De
const heroSectionSwiperProps: IHomeHeroSectionSwiperProps = {
  section1: heroSection1Props,
  section2: {
    title: (
      <>
        Messedamm 22 <br /> Halle 1.2 Stand Nr. 312
      </>
    ),
    description: (
      <>
        <div className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 3xl:text-[100px] max-w-5xl">
          Treffen Sie sich GEME auf der
        </div>
        <div className="xl:leading-[0.65] leading-none text-7xl md:text-[100px] lg:text-[150px] xl:text-[200px] 2xl:text-[300px] 3xl:text-[400px]">
          IFA
        </div>
        <div className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 3xl:text-[100px]">
          Berlin 2024
        </div>
      </>
    ),
    linkText: 'Mehr erfahren',
    linkUrl: '/ifa',
    heroImageUrlPc: '/assets/images/ifa/hero-bg.png',
    heroImageUrlMobile: '/assets/images/ifa/hero-bg.png',
  },
  section3: {
    title: 'TERRA 2',
    description: (
      <>
        <div className="mt-10 xl:mt-20 3xl:mt-44 text-2xl md:text-5xl lg:text-6xl xl:text-4xl 3xl:text-6xl md:leading-none">
          NEUE GENERATION DES GEME KOMPOSTIERERS
        </div>
        <div className="text-2xl md:text-5xl lg:text-6xl xl:text-4xl 3xl:text-6xl md:leading-none">
          DEMNÄCHST ERHÄLTLICH
        </div>
      </>
    ),
    linkText: 'Mehr erfahren',
    linkUrl: '/geme-terra-2',
    heroImageUrlPc: '/assets/images/home-v2311/hero-bg-3.jpg',
    heroImageUrlMobile: '/assets/images/home-v2311/hero-bg-mobile-3.jpg',
  },
  section4: {
    link: '/news',
    linkText: 'Neuigkeiten ansehen',
    videoUrlPc:
      'https://www-geme-bio-us.s3.us-west-1.amazonaws.com/media/videos/news-swiper-video-de-pc.mp4',
    videoUrlMobile:
      'https://www-geme-bio-us.s3.us-west-1.amazonaws.com/media/videos/news-swiper-video-de-mobile.mp4',
  },
}

// 首页第二部分的内容数据配置 De
const contentSection2Props: IContentSection2Props = {
  title: 'Schlechte Erfahrungen mit Lebensmittelabfällen?',
  description: (
    <>
      Essensreste können unordentlich und unangenehm sein.
      <br />
      Sie erzeugen Gerüche, ziehen laute Fliegen und nervige Waschbären an.
      <br />
      Ihre Müllentsorgung ist verstopft, die Küche wird nass und schmutzig?
      <br />
      60 % der Lebensmittelabfälle landen schließlich auf der Deponie. <br />
      Sie können das stoppen.
    </>
  ),
  // imageSrc: '/assets/images/home-v2311/waste-food.jpeg',
  imageSrc: '/assets/images/home-v2311/food-waste-experience.jpg',
  imageAlt: 'food waste picture',
}

// 首页第三部分的内容数据配置 De
const contentSection3Props: IContentSection3Props = {
  title: 'Vom Lebensmittelabfälle zum Pflanzenfutter',
  items: [
    {
      id: 1,
      description: <>Lebensmittelabfälle jederzeit hinzufügen</>,
      imageSrc: '/assets/images/home-v2311/put-food-in-geme.jpg',
      imageAlt: 'put food waste in GEME composter',
    },
    {
      id: 2,
      description: (
        <>
          Kontinuierliche Kompostierung
          <br />
          Abfälle werden im GEME-Komposter reduziert
        </>
      ),
      imageSrc: '/assets/images/home-v2311/geme-is-running.jpg',
      imageAlt: 'wait food waste composting when GEME is running',
    },
    {
      id: 3,
      description: (
        <>
          Verwandlung der Abfälle in Kompost
          <br />
          Einfach herausnehmen und verwenden
        </>
      ),
      imageSrc: '/assets/images/home-v2311/get-compost-from-geme.jpg',
      imageAlt: 'item 3',
    },
    {
      id: 4,
      description: (
        <>
          Pflegen Sie Ihren Garten mit nährstoffreicher
          <br />
          Erde und mit nachhaltigem Düngemittel
        </>
      ),
      imageSrc: '/assets/images/home-v2311/planting.jpg',
      imageAlt: 'item 4',
    },
  ],
}

// 首页第四部分（youtube视频）的内容数据配置 De
const contentSection4Props: IContentSection4Props = {
  title: (
    <>
      Nicht mehr Deponierung
      <br />
      Aber Recycling mit Kompostierung
    </>
  ),
  description:
    'Mithilfe von GEME, Sie und Ihre Familie verwandeln Ihre alltäglichen Lebensmittelabfälle in blühende Gärten und nährstoffreiche Erde und reduzieren das CO2-Fußabdruck ohne dass die Abfälle auf Deponien oder in Verbrennungsanlagen landet',
  withMp4VideoOrYoutubeVideo: {
    type: 'youtube',
    videoPosterImage: {
      src: '/assets/images/home-v2311/cover-v4.jpg',
      alt: 'GEME in Ihrem Zuhause',
      width: 1600,
      height: 900,
      srcSetData: {
        '100w': '/assets/images/home-v2311/cover-v4.jpg',
      },
    },
    videoSrcUrl: 'https://www.youtube.com/embed/nlsTg4l_3zE',
  },
}

// 首页第五部分（滚动动画部分）的内容数据配置 De
const secondLifeProps: ISecondLifeProps = {
  titleLeftPart: 'Kompost',
  titleRightPart: 'Neues Leben für die Abfälle',
  description:
    'Sie reduzieren 100 – 300 kg CO2-Emission, wenn Sie alle Ihre Lebensmittelabfälle über Kompostierung recyceln.',

  articles: [
    {
      id: 1,
      title: 'Nachhaltige Erde ',
      description:
        'Kompost nährt den Gartenboden, sodass die Pflanzen prächtig wächsen können.',
      image: {
        width: 1200,
        height: 800,
        alt: 'Nachhaltige Erde ',
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
      title: 'Wasser sparen',
      description:
        'Kompost speichert Wasser, so dass die Samen besser wachsen können.',
      image: {
        width: 1200,
        height: 800,
        alt: 'Wasser sparen',
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
      title: 'Dekarbonisierung und Klimaschutz',
      description:
        'Kompostierung reduziert Deponierung und macht unsere Planet grüner und nachhaltiger.',
      image: {
        width: 1200,
        height: 800,
        alt: 'Dekarbonisierung und Klimaschutz',
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

  endTitleLeftPart: 'Abfälle werden neu geboren',
  endTitleRightPart: 'Das Lebenszyklus geht weiter!',
}

// 首页第六部分的内容数据配置 De
const contentSection6FixedProps: IContentSection6FixedProps = {
  title: 'Der einfachste Weg zu kompostieren',
  videoPosterUrl: '/assets/images/home-v2311/use-compost-cover.jpg',
  videoSrcUrl:
    'https://www-geme-bio-us.s3.us-west-1.amazonaws.com/geme-genereate-compost-12s-480p.mp4',
  steps: [
    {
      id: 1,
      Icon: CompostStep1,
      description: (
        <>
          Keine lange Wartezeit
          <br />
          Einfache Wartung
        </>
      ),
    },
    {
      id: 2,
      Icon: CompostStep2,
      description: (
        <>
          Kein Schmutz und Geruch <br />
          Sauber und geruchlos
        </>
      ),
    },
    {
      id: 3,
      Icon: CompostStep3,
      description: (
        <>
          Kein Wenden erfoderlich, <br />
          Funktioniert in jedem Wetterkondition
        </>
      ),
    },
  ],
}

// 首页第七部分的内容数据配置 De
const contentSection1Props2: IContentSection1Props = {
  title: (
    <>
      Echter Kompost <br />
      Kein dehydrierter Abfall
    </>
  ),
  description: (
    <>
      Achten Sie darauf, dass die meisten anderen „Komposter“ Dehydratoren sind,
      welchen die Lebensmittelsabfälle in Stücke kochen und, sodass es
      letztendlich wie Erde aussehen.
      <br />
      Im Gegensatz dazu verwendet GEME die Mikroben-Biotechnologie, um die
      natürliche aerobe Fermentation zu verstärken, sodass es sich um einen
      echten Kompostierungsprozess handelt.
    </>
  ),
  imageSrc: '/assets/images/home-v2311/the-man-get-compost-from-geme.jpg',
  imageAlt: 'der Mann bekommt Kompost von GEME',
}

// 首页第八部分的内容数据配置 De
const contentSection1Props3: IContentSection1Props = {
  title: (
    <>
      Angetrieben durch Biotechnologie
      <br />
      und moderne Herstellung
    </>
  ),
  description: (
    <>
      Unser Forschungsteam hat diese Technologie in den letzten 50 Jahren bei
      der Behandlung von Bioabfällen, Böden und verschmutztem Wasser intensiv
      geprüpft. Das GEME Kobold ist der daraus entstandene Produkt.
      <br />
      <br />
      Unser Entwicklungsteam für GEME Komposter verfügt über umfangreiche
      Erfahrung in der Entwicklung und Herstellung von Müllpressen.
      <br />
      <br />
      GEME Kobold und GEME Composter lösen eine Revolution aus.
    </>
  ),
  imageSrc: '/assets/images/home-v2311/observe-the-plants.jpg',
  imageAlt: 'die Pflanzen beobachten',
}

// 首页第九部分（三动图）的内容数据配置 De
const contentSection5Props: IContentSection5Props = {
  title: 'Aus Lebensmittelreste wird Bio-Kompost',
  description: (
    <>
      GEME Kobold ist ein Mikroorganismus Reproduzent. Es baut Ihre
      Lebensmittelabfälle ab, egal wie salzig oder sauer sie sind.
      <br />
      Das Ergebnis? Gebrauchsfertiger, selbstgemachter Bio-Kompost für Pflanzen.
    </>
  ),
  images: [
    {
      id: 1,
      stepText: 'Abfall hineinwerfen',
      imageSrc: '/assets/images/home-v2311/compost-step-1.gif',
      imageAlt: 'Lebensmittelabfälle Bild',
    },
    {
      id: 2,
      stepText: 'Ein paar Tage warten',
      imageSrc: '/assets/images/home-v2311/compost-step-2.gif',
      imageAlt: 'Lebensmittelabfälle Bild',
    },
    {
      id: 3,
      stepText: 'Kompost entnehmen',
      imageSrc: '/assets/images/home-v2311/compost-step-3.gif',
      imageAlt: 'Lebensmittelabfälle Bild',
    },
  ],
  bottomDescription: (
    <>
      Nur 3 Schritte machen es zur einfachsten Methode, dem Klimawandel
      entgegenzuwirken.
    </>
  ),
}

// 首页第十部分（好评卡片）的内容数据配置 De -- 暂时弃用
const reviewsSectionProps = {
  title: 'Was unsere Benutzer sagen',
  description:
    'Klicken Sie unten, um zu sehen, wie echte Menschen ihre Meinung sagen, gut und schlecht - die ungefilterte Wahrheit, die Sie brauchen.',
}

// 首页第十部分（用户使用视频）的内容数据配置 De
const userStoriesVideosProps: IUserStoriesVideoProps = {
  title: 'Was die Kunden sagen',
  videos: [
    {
      type: 'youtube',
      src: 'https://youtu.be/bYzh9ZUJKxs?t=845',
      coverImageUrl: '/assets/images/user-stories-videos/youtube4.png',
      coverAlt: 'Review video from bricolou, France',
      buttonText: '@bricolou',
    },
    {
      type: 'youtube',
      src: 'https://youtu.be/TwCYDZgoUl0?si=w5mzwn4dQJr6x0vD',
      coverImageUrl: '/assets/images/user-stories-videos/youtube.png',
      coverAlt: 'Real life usage reviews from Amazon',
      buttonText: '@Mister and Miss Ginger Jones',
    },
    {
      type: 'youtube',
      src: 'https://youtu.be/-qkjLB3GcKo',
      coverImageUrl: '/assets/images/user-stories-videos/youtube2.png',
      coverAlt: 'Real composter vs other dehydrate food recyclers',
      buttonText: '@Mister and Miss Ginger Jones',
    },
    {
      type: 'youtube',
      src: 'https://youtu.be/CVoDNDONFAk?t=979',
      coverImageUrl: '/assets/images/user-stories-videos/youtube3.png',
      coverAlt: 'Review video from Benson Chik, United Kingdom',
      buttonText: '@Benson Chik',
    },
    // {
    //   type: 'instagram',
    //   src: 'https://www.instagram.com/reel/CxBKZOYRKQN/?utm_source=ig_web_copy_link',
    //   coverImageUrl: '/assets/images/user-stories-videos/instagram.png',
    //   coverAlt: 'Real use video from twin brothers',
    //   buttonText: '@Messitttwins',
    // },
    // {
    //   type: 'tiktok',
    //   src: 'https://www.tiktok.com/@kc_smithwrites/video/7312898892079697198',
    //   coverImageUrl: '/assets/images/user-stories-videos/tiktok2.png',
    //   coverAlt: 'Users from tiktok use videos',
    //   buttonText: '@kc_smithwrites',
    // },
  ],
}

// 首页第十一部分（地图）的内容数据配置 De
const footprintsProps: IFootprintsProps = {
  grayBackground: true,
  title: 'Weltweit grüne Fußabdrücke von GEME',
  description:
    'Danke, dass Sie GEME dabei unterstützen, mehr Grün in die Welt zu bringen. Seien Sie der Erste, der das nachhaltige GEME in Ihrem Ort verbreitet!',
  proportionalSymbolMapProps: {
    recentOrderedFrom: 'Menschen aus {city} unterstützen GEME mit ihrer Liebe.',
  },
}

// 首页最后一个部分（加入我们）的内容数据配置 De
const newsltterProps: INewsletterProps = {
  newsletterCenteredCardProps: {
    title: 'Mach mit',
    description: (
      <>
        Eine neue, mühelose Herangehensweise an das weltweite Abfallproblem
        beginnt bei jedem von uns im täglichen Leben.
      </>
    ),
    emailInputName: 'email-address',
    emailLabel: 'E-Mail-Adresse',
    emailPlaceholder: 'Geben Sie Ihre E-Mail-Adresse ein',
    submitButtonLabel: 'Abonnieren',
  },
  successNoticeProps: {
    title: 'Vielen Dank für Ihre Anmeldung!',
    description:
      'Wir werden Sie mit den neuesten Nachrichten auf dem Laufenden halten.',
  },
}

function HomePageDe({ PrefetchLink, reviewsSectionConfig }: IHomePageProps) {
  heroSection1Props.LinkComponent = PrefetchLink
  heroSectionSwiperProps.LinkComponent = PrefetchLink
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

      <LogoCloud canRedirect locale="de" />

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

      {/* <ReviewsSectionModule
        locale="de"
        reviewsSectionConfig={reviewsSectionConfig}
        {...reviewsSectionProps}
      /> */}

      <UserStoriesVideos {...userStoriesVideosProps} />

      <Footprints {...footprintsProps} />

      <Newsletter {...newsltterProps} />
    </>
  )
}

export { HomePageDe }
