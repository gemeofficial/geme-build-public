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
        Lernen Sie GEME kennen, den modernen elektrischen Komposter für Zuhause
        <br />
        Verwandeln Sie Ihre täglichen Lebensmittelabfälle in organischen Kompost
        <br />
        Weniger Deponie, mehr fruchtbare Erde.
      </span>
      <span className=" xl:hidden ">
        Lernen Sie GEME kennen, den modernen elektrischen Komposter für Zuhause{' '}
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
        Messedamm 22 <br /> Halle 12 Stand Nr. 312
      </>
    ),
    description: (
      <>
        <div className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 3xl:text-[100px]">
          Treffen Sie GEME auf der
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
    linkUrl: '/geme-v2',
    heroImageUrlPc: '/assets/images/home-v2311/hero-bg-3.jpg',
    heroImageUrlMobile: '/assets/images/home-v2311/hero-bg-mobile-3.jpg',
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
  title: 'Vom Lebensmittelabfall zum Pflanzendünger Heimkomposter',
  items: [
    {
      id: 1,
      description: (
        <>
          Werfen Sie alle Arten von Abfall hinein
          <br />
          Fügen Sie jederzeit Lebensmittelabfälle hinzu
        </>
      ),
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
          Abfall in Kompost verwandeln
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
          Bereichern Sie Ihren Garten mit nährstoffreicher Erde
          <br />
          Pflegen Sie Ihre Pflanzen und sehen Sie zu, wie sie gedeihen
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
      Kein Mülldeponieren mehr
      <br />
      Beginnen Sie mit dem Kompostieren
    </>
  ),
  description:
    'GEME ermöglicht es Familien, ihre täglichen Lebensmittelreste in blühende Gärten, nährstoffreiche Böden und einen kleineren CO2-Fußabdruck zu verwandeln, während der Abfall aus Deponien und Verbrennungsanlagen ferngehalten wird.',
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
  titleRightPart: 'Neues Leben für Abfall',
  description:
    'Sie können 100 kg bis 300 kg CO2-Emissionen reduzieren, wenn Sie all Ihre Lebensmittelabfälle kompostieren.',

  articles: [
    {
      id: 1,
      title: 'Gute Erde machen',
      description:
        'Kompost kann Gartenerde nähren und Pflanzen größer wachsen lassen.',
      image: {
        width: 1200,
        height: 800,
        alt: 'Gute Erde machen',
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
      title: 'Wasserverlust verhindern',
      description:
        'Kompost kann Wasser speichern und Ihre Samen besser wachsen lassen.',
      image: {
        width: 1200,
        height: 800,
        alt: 'Wasserverlust verhindern',
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
      title: 'Den Klimawandel bekämpfen',
      description:
        'Kompost kann Deponien reduzieren und unseren Planeten grüner machen.',
      image: {
        width: 1200,
        height: 800,
        alt: 'Den Klimawandel bekämpfen',
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

  endTitleLeftPart: 'Abfall wird neu geboren',
  endTitleRightPart: 'Das Leben geht weiter!',
}

// 首页第六部分的内容数据配置 De
const contentSection6FixedProps: IContentSection6FixedProps = {
  title: 'Der einfachste Weg, Kompost zu bekommen',
  videoPosterUrl: '/assets/images/home-v2311/use-compost-cover.jpg',
  videoSrcUrl:
    'https://www-geme-bio-us.s3.us-west-1.amazonaws.com/geme-genereate-compost-12s-480p.mp4',
  steps: [
    {
      id: 1,
      Icon: CompostStep1,
      description: (
        <>
          keine lange Wartezeit
          <br />
          einfache Wartung
        </>
      ),
    },
    {
      id: 2,
      Icon: CompostStep2,
      description: (
        <>
          kein Schmutz und Geruch <br />
          sauber und geruchlos
        </>
      ),
    },
    {
      id: 3,
      Icon: CompostStep3,
      description: (
        <>
          kein Wenden erforderlich <br />
          Arbeit bei jedem Wetter
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
      Beachten Sie, dass die meisten anderen &quot;Komposter&quot; eigentlich
      Dehydratoren sind;
      <br />
      sie kochen und trocknen einfach die Lebensmittel zu Stücken, die wie Erde
      aussehen.
      <br />
      Im Gegensatz dazu verwendet GEME Mikroben-Biotechnologie, um die
      natürliche aerobe Fermentation zu verbessern und so einen echten
      Kompostierungsprozess zu schaffen.
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
      Unser Wissenschaftsteam hat diese Technologie in den letzten 50 Jahren
      umfassend getestet, um Bioabfälle, Boden und verschmutztes Wasser zu
      behandeln. Sie haben die Kerntechnologie verfeinert und so den GEME Kobold
      erschaffen.
      <br />
      <br />
      Unser Ingenieurteam verfügt über umfangreiche Erfahrung in der
      Konstruktion und Herstellung von Müllverdichtern. Sie haben kürzlich den
      GEME Komposter entwickelt.
      <br />
      <br />
      GEME Kobold und GEME Komposter entfachen eine Revolution.
    </>
  ),
  imageSrc: '/assets/images/home-v2311/observe-the-plants.jpg',
  imageAlt: 'die Pflanzen beobachten',
}

// 首页第九部分（三动图）的内容数据配置 De
const contentSection5Props: IContentSection5Props = {
  title: 'Lebensmittelreste in organischen Kompost verwandeln',
  description: (
    <>
      GEME Kobold ist ein Mikroorganismus, der sich bei guter Fütterung
      vermehrt.
      <br />
      Er zersetzt Ihre Lebensmittelabfälle, egal wie salzig oder sauer sie sind.
      <br />
      Das Ergebnis? Gebrauchsfertiger, hausgemachter organischer Kompost für
      Pflanzen.
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
  title: 'Was echte Benutzer sagen',
  description:
    'Klicken Sie unten, um zu sehen, wie echte Menschen ihre Meinung sagen, gut und schlecht - die ungefilterte Wahrheit, die Sie brauchen.',
}

// 首页第十部分（用户使用视频）的内容数据配置 De
const userStoriesVideosProps: IUserStoriesVideoProps = {
  title: 'Was Kunden sagen',
  videos: [
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
      type: 'instagram',
      src: 'https://www.instagram.com/reel/CxBKZOYRKQN/?utm_source=ig_web_copy_link',
      coverImageUrl: '/assets/images/user-stories-videos/instagram.png',
      coverAlt: 'Real use video from twin brothers',
      buttonText: '@Messitttwins',
    },
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
  title: 'GEMEs grüne Fußabdrücke in der Welt',
  description:
    'Vielen Dank, dass Sie GEME unterstützen und mehr Grün in die Welt bringen. Seien Sie der Erste, der es an Ihren Ort verbreitet!',
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
        Ein neuer Ansatz zur Lösung des weltweiten Abfallproblems beginnt bei
        jedem von uns, mühelos im Alltag
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
