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

// 首页video部分的内容数据配置 De
const heroSection1Props: IHeroSection1Props = {
  title: (
    <>
      <span className="hidden xl:inline whitespace-nowrap">
        Weltweit erster Bio-Abfallkomposter
      </span>
      <span className="xl:hidden">Weltweit erster Bio-Abfallkomposter</span>
    </>
  ),
  description: (
    <>
      <span className=" hidden xl:inline ">
        Schauen Sie sich GEME an, den modernen elektrischen Komposter für zu
        Hause
        <br />
        Verwandeln Sie Ihre täglichen Küchenabfälle in organischen Kompost
        <br />
        Weniger Deponiemüll, mehr Gartenboden.
      </span>
      <span className=" xl:hidden ">
        Schauen Sie sich GEME an, den modernen elektrischen Komposter für zu
        Hause <br />
        Verwandeln Sie Ihre täglichen Küchenabfälle in organischen Kompost
        <br />
        Weniger Deponiemüll, mehr Gartenfreude.
      </span>
    </>
  ),
  linkText: 'Jetzt einkaufen',
  linkUrl: '/de/product/geme',
  videoProps: {
    src: 'https://www-geme-bio-us.s3.us-west-1.amazonaws.com/hero-banner-window-video-19s-480p.mp4',
    posterUrl: '/assets/images/home-v2311/hero-blurred.webp',
  },
  fullScreenVideoUrl: 'https://www.youtube.com/embed/ROJYZBp0jcM',
  heroImageUrlPc: '/assets/images/home-v2311/cover-v3.jpg',
  heroImageUrlMobile: '/assets/images/home-v2311/cover-v3-mobile.jpg',
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
  title: 'Lebensmittelabfälle zu Pflanzennahrung Heimkomposter',
  items: [
    {
      id: 1,
      description: (
        <>
          Alle Arten von Abfällen wegwerfen
          <br />
          Jederzeit Lebensmittelabfälle hinzufügen
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
          Abfälle werden in einer Box reduziert
        </>
      ),
      imageSrc: '/assets/images/home-v2311/geme-is-running.jpg',
      imageAlt: 'wait food waste composting when GEME is running',
    },
    {
      id: 3,
      description: (
        <>
          Abfälle in Kompost verwandeln
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
          Kostenloser und guter Gartenboden
          <br />
          Ihre Pflanzen füttern und wachsen lassen
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
      Stoppen Sie das Deponieren
      <br />
      Beginnen Sie mit dem Kompostieren
    </>
  ),
  description:
    'GEME hilft jeder Familie, tägliche Lebensmittelabfälle zu beseitigen, nährstoffreichen Boden zu schaffen, einen gesunden Garten zu bauen, den CO2-Fußabdruck zu reduzieren und Deponierung und Verbrennung zu vermeiden.',
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
    videoSrcUrl: 'https://www.youtube.com/embed/ROJYZBp0jcM',
  },
}

// 首页第五部分（滚动动画部分）的内容数据配置 De
const secondLifeProps: ISecondLifeProps = {
  titleLeftPart: 'Kompostieren',
  titleRightPart: 'Neues Leben für Abfall',
  description:
    'Wenn Sie alle Ihre Lebensmittelabfälle kompostieren, können Sie 100 kg bis 300 kg CO2-Emissionen reduzieren.',

  articles: [
    {
      id: 1,
      title: 'Guten Boden herstellen',
      description:
        'Kompost kann den Gartenboden nähren, Pflanzen wachsen lassen.',
      image: {
        width: 1200,
        height: 800,
        alt: 'Guten Boden herstellen',
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
        'Kompost kann Wasser speichern, Samen besser wachsen lassen.',
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
      title: 'Klimawandel bekämpfen',
      description:
        'Kompost kann Deponien reduzieren, unsere Erde grüner machen.',
      image: {
        width: 1200,
        height: 800,
        alt: 'Klimawandel bekämpfen',
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
          kein Wenden erforderlich
          <br />
          funktioniert bei jedem Wetter
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
      Denken Sie daran, dass die meisten anderen „Komposter“ eigentlich
      Dehydratoren sind;
      <br />
      sie kochen und trocknen die Lebensmittel einfach zu Stücken, die wie Erde
      aussehen.
      <br />
      Im Gegensatz dazu nutzt GEME die Mikroben-Biotechnologie zur Verbesserung
      der natürlichen aeroben Fermentation und macht daraus einen echten
      Kompostierungsprozess.
    </>
  ),
  imageSrc: '/assets/images/home-v2311/the-man-get-compost-from-geme.jpg',
  imageAlt: 'Der Mann bekommt Kompost von GAME',
}

// 首页第八部分的内容数据配置 De
const contentSection1Props3: IContentSection1Props = {
  title: (
    <>
      Angetrieben durch Biotech
      <br />
      und moderne Fertigung
    </>
  ),
  description: (
    <>
      Unser Wissenschaftsteam hat diese Technologie in den letzten 50 Jahren
      ausgiebig getestet, um Bioabfälle, Boden und verschmutztes Wasser zu
      behandeln. Sie haben die Kerntechnologie verfeinert, was zur Schaffung von
      GEME Kobold führte.
      <br />
      <br />
      Unser Ingenieurteam verfügt über umfangreiche Erfahrung in der
      Konstruktion und Herstellung von Müllpressen. Sie haben kürzlich den GEME
      Komposter entwickelt.
      <br />
      <br />
      GEME Kobold und GEME Komposter entfachen eine Revolution.
    </>
  ),
  imageSrc: '/assets/images/home-v2311/observe-the-plants.jpg',
  imageAlt: 'Beobachte die Pflanzen',
}

// 首页第九部分（三动图）的内容数据配置 De
const contentSection5Props: IContentSection5Props = {
  title: 'Essensreste in organischen Kompost verwandeln',
  description: (
    <>
      GEME Kobold vermehrt Mikroorganismen, wenn sie gut gefüttert werden.
      <br />
      Er zersetzt Ihre Lebensmittelabfälle, egal wie salzig oder sauer.
      <br />
      Das Ergebnis? Fertiger, hausgemachter organischer Kompost für Pflanzen.
    </>
  ),
  images: [
    {
      id: 1,
      stepText: 'Abfälle einwerfen',
      imageSrc: '/assets/images/home-v2311/compost-step-1.gif',
      imageAlt: 'Bild der Lebensmittelverschwendung',
    },
    {
      id: 2,
      stepText: 'Ein paar Tage warten',
      imageSrc: '/assets/images/home-v2311/compost-step-2.gif',
      imageAlt: 'Bild der Lebensmittelverschwendung',
    },
    {
      id: 3,
      stepText: 'Kompost herausnehmen',
      imageSrc: '/assets/images/home-v2311/compost-step-3.gif',
      imageAlt: 'Bild der Lebensmittelverschwendung',
    },
  ],
  bottomDescription: (
    <>
      Nur 3 Schritte machen es zum einfachsten Weg, den Klimawandel zu
      bekämpfen.
    </>
  ),
}

// 首页第十部分（好评卡片）的内容数据配置 De
const reviewsSectionProps = {
  title: 'Was echte Nutzer sagen',
  description:
    'Verzichten Sie auf die falschen Lächeln und einstudierten Sätze bezahlter Influencer. Hören Sie stattdessen echten Menschen zu, die ihre ehrlichen Gedanken und Frustrationen teilen. Erhalten Sie die ungefilterte Wahrheit, sowohl das Gute als auch das Schlechte.',
}

// 首页第十一部分（地图）的内容数据配置 De
const footprintsProps: IFootprintsProps = {
  grayBackground: true,
  title: 'GEMEs grüne Fußabdrücke in der Welt',
  description:
    'Danke, dass Sie GEME unterstützen und mehr Grün in die Welt bringen. Seien Sie der Erste, der es in Ihre Region verbreitet!',
  proportionalSymbolMapProps: {
    recentOrderedFrom: 'Menschen aus {city} unterstützen GEME mit ihrer Liebe.',
  },
}

// 首页最后一个部分（加入我们）的内容数据配置 De
const newsltterProps: INewsletterProps = {
  newsletterCenteredCardProps: {
    title: 'Treten Sie der Bewegung bei',
    description: (
      <>
        Ein neuer Ansatz zur Lösung des weltweiten Abfallproblems beginnt bei
        jedem von uns, mühelos im Alltag
      </>
    ),
    emailInputName: 'E-Mail-Adresse',
    emailLabel: 'E-Mail-Adresse',
    emailPlaceholder: 'E-Mail-Adresse eingeben',
    submitButtonLabel: 'Abonnieren',
  },
  successNoticeProps: {
    title: 'Danke für Ihr Abonnement!',
    description:
      'Wir halten Sie mit den neuesten Nachrichten auf dem Laufenden.',
  },
}

function HomePageDe({
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
        locale="de"
        reviewsSectionConfig={reviewsSectionConfig}
        {...reviewsSectionProps}
      />

      <Footprints {...footprintsProps} />

      <Newsletter {...newsltterProps} />
    </>
  )
}

export { HomePageDe }
