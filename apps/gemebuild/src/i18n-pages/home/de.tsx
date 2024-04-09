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

// 首页video部分的内容数据配置 De
const heroSection1Props: IHeroSection1Props = {
  title: (
    <>
      <span className="hidden xl:inline whitespace-nowrap">
        Der erste Bioabfallkomposter der Welt
      </span>
      <span className="xl:hidden">Der erste Bioabfallkomposter der Welt</span>
    </>
  ),
  description: (
    <>
      <span className=" hidden xl:inline ">
        Lernen Sie GEME kennen, den modernen elektrischen Komposter für zu Hause
        <br />
        Verwandeln Sie Ihre täglichen Lebensmittelabfälle in organischen Kompost
        <br />
        Weniger Deponie, mehr Gartenerde.
      </span>
      <span className=" xl:hidden ">
        Treffen Sie GEME, den modernen elektrischen Heimkomposter <br />
        Verwandeln Sie Ihre täglichen Lebensmittelabfälle in organischen Kompost
        <br />
        Less landfill, more gardening.
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
        posterUrl: '/assets/images/home-v2311/hero-blurred.jpg',
      },
      // for mobile/tablet
      {
        minWidth: 0,
        src: 'https://public-assest-434759801795.s3.us-west-1.amazonaws.com/geme-bio-home-background-video-no-sound-480p.mp4',
        playbackId: 'WcYd7fIP97ciG1zR5Hkq9dEmqLeQpsoX5iIZdMQn8Lc',
        posterUrl: '/assets/images/home-v2311/hero-blurred.jpg',
      },
    ],
  },
}

// 首页第二部分的内容数据配置 De
const contentSection2Props: IContentSection2Props = {
  title:
    'Machen Sie immer noch schreckliche Erfahrungen mit Lebensmittelabfällen?',
  description: (
    <>
      Essensreste können unordentlich und ekelhaft sein. <br />
      Es erzeugt Geruch, zieht lästige Fliegen und nervige Waschbären an. <br />
      Ihre Müllentsorgung ist verstopft, die Küche wird nass und schmutzig?
      <br />
      Letztendlich landen 60% der Lebensmittelabfälle auf der Deponie. <br />
      Sie können es stoppen.
    </>
  ),
  // imageSrc: '/assets/images/home-v2311/waste-food.jpeg',
  imageSrc: '/assets/images/home-v2311/food-waste-experience.jpg',
  imageAlt: 'food waste picture',
}

// 首页第三部分的内容数据配置 De
const contentSection3Props: IContentSection3Props = {
  title: 'Food Waste to Plant Feed Magic Trash Bin',
  items: [
    {
      id: 1,
      description: (
        <>
          Wirf alle möglichen Abfälle weg
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
          In einer Box wird der Abfall reduziert
        </>
      ),
      imageSrc: '/assets/images/home-v2311/geme-is-running.jpg',
      imageAlt: 'wait food waste composting when GEME is running',
    },
    {
      id: 3,
      description: (
        <>
          Verwandeln Sie Abfall in Kompost
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
          Freier und guter Gartenboden
          <br />
          Füttere und züchte deine Pflanze
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
      Stoppen Sie die Deponierung
      <br />
      Beginnen Sie mit der Kompostierung
    </>
  ),
  description:
    'GEME hilft jeder Familie, die tägliche Lebensmittelverschwendung zu beseitigen, nährstoffreichen Boden zu schaffen, einen gesunden Garten anzulegen, den CO2-Fußabdruck zu reduzieren und Deponierung und Verbrennung zu vermeiden.',
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

// 首页第五部分（滚动动画部分）的内容数据配置 De
const secondLifeProps: ISecondLifeProps = {
  titleLeftPart: 'Kompost',
  titleRightPart: 'Neues Leben für Abfall',
  description:
    'Sie können den CO2-Ausstoß um 100 bis 300 kg reduzieren. Wenn Sie alle Ihre Lebensmittelabfälle durch Kompostierung recyceln.',

  articles: [
    {
      id: 1,
      title: 'Verhindern Sie Wasserverlust',
      description:
        'Kompost kann Wasser aufnehmen und Ihre Samen besser wachsen lassen.',
      image: {
        width: 1200,
        height: 800,
        alt: 'Verhindern Sie Wasserverlust',
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
      title: 'Machen Sie guten Boden',
      description:
        'Kompost kann den Gartenboden nähren und Pflanzen wachsen lassen.',
      image: {
        width: 1200,
        height: 800,
        alt: 'Verhindern Sie Wasserverlust',
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
        'Kompost kann die Mülldeponie reduzieren und unseren Planeten grüner machen.',
      image: {
        width: 1200,
        height: 800,
        alt: 'Verhindern Sie Wasserverlust',
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

  endTitleLeftPart: 'Abfall wiedergeboren',
  endTitleRightPart: 'Das Leben geht weiter!',
}

// 首页第六部分的内容数据配置 De
const contentSection6FixedProps: IContentSection6FixedProps = {
  title: 'Der einfachste Weg, Kompost zu erhalten',
  videoPosterUrl: '/assets/images/home-v2311/use-compost-cover.jpg',
  videoSrcUrl:
    'https://public-assest-434759801795.s3.us-west-1.amazonaws.com/geme-genereate-compost-12s-480p.mp4',
  steps: [
    {
      id: 1,
      Icon: CompostStep1,
      description: (
        <>
          keine lange Wartezeit
          <br />
          und einfache Wartung
        </>
      ),
    },
    {
      id: 2,
      Icon: CompostStep2,
      description: (
        <>
          kein Schmutz riecht
          <br />
          sauber und geruchlos
        </>
      ),
    },
    {
      id: 3,
      Icon: CompostStep3,
      description: (
        <>
          keine Übergabe der <br />
          arbeit bei jedem Wetter
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
      Nicht dehydrierter Abfall
    </>
  ),
  description: (
    <>
      Denken Sie daran, dass die meisten anderen &quot;Kompostierer&quot;
      eigentlich Dörrgeräte sind;
      <br />
      Sie kochen und trocknen das Essen einfach in Stücke, die wie Erde
      aussehen.
      <br />
      Im Gegensatz dazu nutzt GEME die Mikroben-Biotechnologie, um die
      natürliche aerobe Fermentation zu verbessern, was es zu einem echten
      Kompostierungsprozess macht.
    </>
  ),
  imageSrc: '/assets/images/home-v2311/the-man-get-compost-from-geme.jpg',
  imageAlt: 'Der Mann bekommt Kompost von GAME',
}

// 首页第八部分的内容数据配置 De
const contentSection1Props3: IContentSection1Props = {
  title: (
    <>
      Unterstützt von BioTech
      <br />
      und moderne Manufaktur
    </>
  ),
  description: (
    <>
      Unser Wissenschaftsteam hat diese Technologie in den letzten 50 Jahren
      ausgiebig getestet Jahre in der Behandlung von Bioabfällen, Böden und
      verschmutztem Wasser. Sie haben verfeinert die Kerntechnologie, die zur
      Entstehung von GEME Kobold führte.
      <br />
      <br />
      Unser Ingenieurteam verfügt über umfangreiche Erfahrung in der Entwicklung
      und Herstellung von Müllpressen. Sie haben kürzlich das GEME entwickelt
      Komposter.
      <br />
      <br />
      GEME Kobold und GEME Composter lösen eine Revolution aus.
    </>
  ),
  imageSrc: '/assets/images/home-v2311/observe-the-plants.jpg',
  imageAlt: 'Beobachte die Pflanzen',
}

// 首页第九部分（三动图）的内容数据配置 De
const contentSection5Props: IContentSection5Props = {
  title: 'Verwandeln Sie Essensreste in Bio-Kompost',
  description: (
    <>
      GEME Kobold ist ein Mikroorganismus, der sich bei guter Ernährung
      vermehrt.
      <br />
      Es zersetzt Ihre Lebensmittelabfälle, egal wie salzig oder sauer.
      <br />
      Das Ergebnis? Gebrauchsfertiger, selbstgemachter Bio-Kompost für Pflanzen.
    </>
  ),
  images: [
    {
      id: 1,
      stepText: 'Müll reinwerfen',
      imageSrc: '/assets/images/home-v2311/compost-step-1.gif',
      imageAlt: 'Bild der Lebensmittelverschwendung',
    },
    {
      id: 2,
      stepText: 'warte ein paar Tage',
      imageSrc: '/assets/images/home-v2311/compost-step-2.gif',
      imageAlt: 'Bild der Lebensmittelverschwendung',
    },
    {
      id: 3,
      stepText: 'Kompost rausnehmen',
      imageSrc: '/assets/images/home-v2311/compost-step-3.gif',
      imageAlt: 'Bild der Lebensmittelverschwendung',
    },
  ],
  bottomDescription: (
    <>
      Nur drei Schritte machen es zum einfachsten Weg, den Klimawandel zu
      bekämpfen.
    </>
  ),
}

// 首页第十部分（地图）的内容数据配置 De
const footprintsProps: IFootprintsProps = {
  grayBackground: false,
  title: 'GEMEs grüne Fußabdrücke in der Welt',
  description:
    'Vielen Dank, dass Sie GEME unterstützen und mehr Grün in die Welt bringen. Seien Sie der Erste, der sich bei Ihnen verbreitet!',
  proportionalSymbolMapProps: {
    recentOrderedFrom: 'Menschen aus {city} unterstützen GEME mit ihrer Liebe.',
  },
}

// 首页最后一个部分（加入我们）的内容数据配置 De
const newsltterProps: INewsletterProps = {
  newsletterCenteredCardProps: {
    title: 'Der Bewegung beitreten',
    description: (
      <>
        Eine neue Herangehensweise an das weltweite Abfallproblem beginnt bei
        jedem von uns, mühelos im täglichen Leben
      </>
    ),
    emailInputName: 'email-address',
    emailLabel: 'E-Mail-Adresse',
    emailPlaceholder: 'Geben ihre E-Mail',
    submitButtonLabel: 'Abonnieren',
  },
  successNoticeProps: {
    title: 'Danke fürs Abonnieren!',
    description:
      'Wir halten Sie mit den neuesten Nachrichten auf dem Laufenden.',
  },
}

function HomePageDe() {
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

export { HomePageDe }
