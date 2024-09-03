/* eslint-disable react/no-unescaped-entities */
import {
  IPdpUserStoryTeamSectionsProps,
  LocaleType,
  PdpIntroSection3,
  PdpIntroSection4,
} from 'ui'
import PdpIntroEnContent, { IPdpContentProps, IPdpTabsText } from './components'
import { IPdpIntroProps } from './components/Intro'
import { IPdpCompareProps } from './components/Compare'
import { IPdpSpecProps } from './components/Spec'
import {
  ShieldCheckIcon,
  TruckIcon,
  ChatBubbleLeftRightIcon,
} from '@heroicons/react/24/solid'
import { IProductProps } from './en'

const locale: LocaleType = 'de'

// 产品页Tabs吸顶栏的文本 De
const tabs: IPdpTabsText = {
  intro: 'Einführung',
  compare: 'Vergleichen',
  spec: 'Spezifikationen',
  warranty: 'Garantie',
  userStories: 'Kundenfeedback',
  reviews: 'Bewertungen',
}

// ----------------  产品页 Introduction模块内容配置 De start  ----------------------

const introProps: IPdpIntroProps = {
  // Introduction 第1部分 De
  pdpIntroSection1Props: {
    title: 'Erster Bio-Abfall-Komposter der Welt',
    description:
      'GEME verwendet Mikrobiota, um Lebensmittelabfälle 100-mal schneller als bei der herkömmlichen Kompostierung abzubauen, ganz anders als bei elektrischen „Kompostierern“, die auf der Arbeitsplatte stehen und trocknen.',
    bgImageSrc:
      '/assets/images/pdp-v2311/dividers/geme-with-compost-background-min.jpg',
    comparisonText: {
      brfore: 'Vorher',
      after: 'Nachher',
    },
    bottomItems: [
      { id: 1, description: 'Abbau durch Mikroben' },
      { id: 2, description: 'Nicht durch Dehydration' },
      { id: 3, description: 'Komposthaufen in der Box' },
    ],
  },

  // Introduction 第2部分 De
  contentSection71Props: {
    title: 'Vom Abfall zum Wunder',
    description: `Lassen wir den kleinen Superhelden, die eine bedeutende Rolle hat, kennenlernen: Mikroben (GEME Kobold). Ähnlich wie den Enzymen, die die Verdauung im Darm unterstützen, verwandeln sie bei idealen Bedingungen und regelmäßiger Rotation Lebensmittelabfälle schnell in organischen Kompost.`,

    withImageOrVideo: {
      type: 'video',
      videoProps: {
        sources: [
          {
            minWidth: 0,
            src: 'https://www-geme-bio-us.s3.us-west-1.amazonaws.com/how-geme-kobold-eat-food-waste-480p.mp4',
          },
        ],
      },
    },
    bottomContent: <PdpIntroSection3 title="6-8 Stunden" />,
    isDisplayTextOnLeft: true,
  },

  // Introduction 第3部分 De
  contentSection72Props: {
    title: 'Geräuscharmer Betrieb',
    description: `GEME-Schallpegel liegt bei etwa 35-45 dB, der leiseste Komposter auf dem Markt.`,
    withImageOrVideo: {
      type: 'image',
      imageSrc: '/assets/images/pdp-v2311/introduction/geme-silent.jpg',
      imageAlt: 'Lebensmittelabfälle Bild',
    },
    bottomContent: <PdpIntroSection4 />,
  },

  // Introduction 第4部分 De
  pdpIntroSection5Props: {
    title: 'Fast alle Abfallarten können in GEME verarbeitet werden',
    leftNotes: (
      <>
        <strong>400+</strong>
        <br />
        Abfallarten
      </>
    ),
  },

  // Introduction 第5部分 De
  contentSection21Props: {
    title:
      'Werfen Sie den Müll einfach in den Komposter, GEME kümmert sich um den Rest',
    description: (
      <>
        🫳&nbsp;&nbsp;Abfälle jederzeit hinzufügen <br />
        🫷&nbsp;&nbsp;Keine Knöpfe drücken <br />
        🕓&nbsp;&nbsp;Keine Zyklen abwarten <br />
        🤗&nbsp;&nbsp;Keine Lernkurve <br />
        🚮&nbsp;&nbsp;Genau wie ein normaler Mülleimer
      </>
    ),
    imageSrc:
      '/assets/images/pdp-v2311/introduction/geme-take-care-of-the-rest.jpg',
    imageAlt: 'GEME kümmert sich um Ihre Lebensmittelabfälle',
    isDisplayTextOnLeft: true,
  },

  // Introduction 第6部分 De
  contentSection22Props: {
    title: 'Innovative mikrobenbasierte Müllentsorgung, schnell und sicher',
    description: (
      <>
        🔥&nbsp;&nbsp;Nicht dehydrieren, es ist echtes Kompostieren <br />
        🚰&nbsp;&nbsp;Nicht zerkleinern, kein verstopftes Waschbecken mehr
        <br />
        🌿&nbsp;&nbsp;Kein Greenwashing, echte umweltfreundliche Lösung
      </>
    ),
    imageSrc: '/assets/images/pdp-v2311/introduction/geme-garbage-disposal.jpg',
    imageAlt: 'Lebensmittelabfälle Bild',
  },

  // Introduction 第7部分 De
  pdpIntroSection6Props: {
    title: 'Kompostieren leicht gemacht',
    description: 'Geliebt von über 100.000 Gärtnern',
    items: [
      {
        id: 1,
        featured: true,
        title: 'GEME',
        imageSrc:
          '/assets/images/pdp-v2311/introduction/section-comparison-geme.jpeg',
        imageAlt: 'GEME Kompost',
        features: [
          'Echter Kompost',
          'Aerobe Fermentation',
          'Geruchlos und leise',
          'Energiesparend',
        ],
      },
      {
        id: 2,
        title: 'Entwässerer',
        imageSrc:
          '/assets/images/pdp-v2311/introduction/section-comparison-dehydrator.jpeg',
        imageAlt: 'Entwässerer',
        features: [
          'Falscher Kompost',
          'Kochen und Trocknen',
          'Stinkend und laut',
          'Energieaufwendig',
        ],
      },
      {
        id: 3,
        title: 'Komposthaufen',
        imageSrc:
          '/assets/images/pdp-v2311/introduction/section-comparison-pile.jpeg',
        imageAlt: 'Komposthaufen',
        features: [
          'Lange Wartezeit',
          'Schmutzig und unordentlich',
          'Oft umdrehen',
          'Zieht Tiere an',
        ],
      },
    ],
  },

  // Introduction 第8部分 De
  pdpIntroSection7Props: {
    mobileBgImageUrl:
      '/assets/images/pdp-v2311/introduction/big-more-and-long-term-mobile-de.png',
    pcBgImageUrl:
      '/assets/images/pdp-v2311/introduction/big-more-and-long-term-pc-de.png',
    title: 'Groß, Mehr & Langfristig',
    description: '',
    features: [
      '🏡 Für den täglichen Gebrauch in Familien mit über 10 Personen geeignet',
      '🐳 Tägliche Fütterungskapazität: 11 Pfund/5 kg',
      '💰 Preiswert',
    ],
  },

  // Introduction 第9部分 De
  contentSection23Props: {
    title:
      'Stellen Sie sich ein Leben vor, in dem Sie keinen Lebensmittelabfall mehr wegwerfen müssen',
    description: (
      <>
        👪&nbsp;&nbsp;Für Familien mit mehr als 10 Personen täglich geeignet{' '}
        <br />
        📅&nbsp;&nbsp;3+ Monate ohne Reinigung erforderlich <br />
        {/* 💰&nbsp;&nbsp;Der Preis für so einen großen Kerl lohnt sich <br /> */}
        🐳&nbsp;&nbsp;19L Volumen, 11£/5kg tägliche Zuführkapazität <br />
        🐘&nbsp;&nbsp;45,5x32x66,5(cm) 18x12,6x26,2 (Zoll)
      </>
    ),
    imageSrc:
      '/assets/images/pdp-v2311/introduction/geme-composter-size-v2.jpeg',
    imageAlt: 'Große Größe für GEME Komposter',
    isDisplayTextOnLeft: true,
  },

  // Introduction 第10部分 De
  contentSection24Props: {
    title: 'Kein Filterwechsel erforderlich',
    description: (
      <>
        Das weltweit einzige Modell, das den fortschrittlichsten Industriefilter
        mit <b>Metallionenkatalyse-Oxidation</b> verwendet.
        <br />
        Diese Technologie ist leistungsstark und erfordert keinerlei Ersatz.
        <br />
        Andere Marken vom „Komposter“ müssen den Filter alle 3 Monate
        austauschen mit großen versteckten Kosten!
        <br />
        <br />
        👃🏻&nbsp;&nbsp;Kein Geruch <br />
        💰&nbsp;&nbsp;Keine zusätzlichen versteckten Kosten
        <br />
        🔨&nbsp;&nbsp;Keine Austauschvorgänge
      </>
    ),
    imageSrc: '/assets/images/pdp-v2311/introduction/no-filters.jpg',
    imageAlt: 'GEME erfordert keinen Filterwechsel',
  },

  // Introduction 第11部分 De
  contentSection8Props: {
    title: 'Geruchloses Kompostieren zu Hause',
    description:
      'GEME verwendet industrielle Filter mit der fortschrittlichsten Deodorisationstechnologie. Genießen Sie das hochmoderne, saubere Kompostieren und den Zero-Waste-Lebensstil.',
    items: [
      {
        id: 1,
        imageSrc: '/assets/images/pdp-v2311/introduction/no-smell-before.jpg',
        imageAlt: 'Geruch vor der Verwendung des GEME Komposters',
      },
      {
        id: 2,
        imageSrc: '/assets/images/pdp-v2311/introduction/no-smell-after.jpg',
        imageAlt: 'Kein Geruch nach der Verwendung des GEME Komposters',
      },
    ],
  },
}
// ----------------  产品页 Introduction模块内容配置 De end  ----------------------

// 产品页 compareSection模块内容配置 De
const compareProps: IPdpCompareProps = {
  compareSectionProps: {
    title: 'Marken vergleichen',
    description: 'Entdecken Sie, was GEME anders macht.',
    compareList: [
      {
        imgUrl: '/assets/images/compare-section/compare-section-geme.png',
        devicename: 'GEME',
        compareItems: [
          {
            title: 'Echter Kompost',
            desc: 'Hochaktive Mikroben beschleunigen den Kompostierungsprozess',
          },
          {
            title: 'Kein Filterwechsel erforderlich',
            desc: 'Keine zusätzliche Kosten',
          },
          {
            title: '19L super großes Volumen',
            desc: 'Dauert Monate, bis sie gefüllt sind',
          },
          {
            title: 'Auch für Tierkot und Suppe geeignet',
            desc: 'Unterstützt Bio-Abfälle, einschließlich Katzenstreu und flüssige Abfälle',
          },
          {
            title: 'Keine Reinigung erforderlich',
            desc: 'Einfach reduzieren, wenn voll, kein Entleeren und Reinigen erforderlich',
          },
          {
            title: 'Kein Abonnement',
            desc: 'Preis ist hoch, aber keine versteckten Abonnementkosten, kostenlose Testversion, kostenlose Rückgabe',
          },
          {
            title: 'Kontinuierliche Kompostierung',
            desc: 'Jederzeit hinzufügen, kein Warten auf Zyklusende',
          },
        ],
      },
      {
        imgUrl: '/assets/images/compare-section/compare-section-lomi.png',
        devicename: 'Marke 1', // Lomi
        compareItems: [
          {
            title: 'Kein echter Kompost',
            desc: 'Dehydrieren und Kochen, immer noch trockene Abfälle',
          },
          {
            title: 'Kohlenstofffilter regelmäßig wechseln',
            desc: 'Bis zu €240/Jahr für Filterwechsel',
          },
          {
            title: '3L kleines Volumen',
            desc: 'Begrenzte Größe des Lebensmittelabfalls',
          },
          {
            title: 'Begrenzte Lebensmittelabfälle',
            desc: 'Verarbeitet kein Fleisch und keine Suppe',
          },
          {
            title: 'Täglich entleeren',
            desc: 'Nach jeder Nutzung reinigen',
          },
          {
            title: 'Abonnement erforderlich',
            desc: 'Hohe versteckte Kosten des Abonnements',
          },
          {
            title: 'Manueller Start basierend auf Zyklus',
            desc: 'Deckel abdrehen, Knopf drücken zum Starten, warten bis der Zyklus endet',
          },
        ],
      },
      {
        imgUrl: '/assets/images/compare-section/compare-section-mill.png',
        devicename: 'Marke 2', // mill
        compareItems: [
          {
            title: 'Kein echter Kompost',
            desc: 'Dehydrieren und Mahlen, immer noch trockene Abfälle',
          },
          {
            title: 'Kohlenstoffgeruchsfilter',
            desc: '€60+ für jeden Filterwechsel',
          },
          {
            title: '6,5L Volumen',
            desc: 'Hoch und groß, aber begrenzte Kapazität',
          },
          {
            title: 'Begrenzte Lebensmittelabfälle',
            desc: 'Verarbeitet kein Fleisch und keine Suppe',
          },
          {
            title: 'Wöchentlich entleeren',
            desc: 'Laufen und entleeren, wenn voll',
          },
          {
            title: 'Abonnement erforderlich',
            desc: 'Standardmäßig abonniert, Schwierigkeiten bei Stornierung und Rückgabe, keine Rückerstattung möglich',
          },
          {
            title: 'Kontinuierliches Hacken',
            desc: 'Automatischer Neustart, wenn Sie Abfall hinzufügen, weiterhacken',
          },
        ],
      },
      {
        imgUrl: '/assets/images/compare-section/compare-section-reencle.png',
        devicename: 'Marke 3', // Reencle
        compareItems: [
          {
            title: 'Echter Kompost',
            desc: 'Niedrige Reduktionsrate',
          },
          {
            title: 'Kohlenstofffilter regelmäßig wechseln',
            desc: 'Kosten €35+ pro Ersatz',
          },
          {
            title: '6L Volumen',
            desc: '14L Außenraum, 6L Innenvolumen',
          },
          {
            title: 'Nur Lebensmittelabfälle',
            desc: 'Verarbeitet kein Tierkot',
          },
          {
            title: 'Reinigung bei Bedarf',
            desc: 'Entleeren, reinigen und Kompoststarter bei Vollstand zurücksetzen',
          },
          {
            title: 'Abonnement angeboten',
            desc: 'Sieht erschwinglich aus, aber Schwierigkeiten bei Stornierung oder Rückerstattung',
          },
          {
            title: 'Kontinuierliche Kompostierung',
            desc: 'Jederzeit hinzufügen, kein Warten auf Zyklusende',
          },
        ],
      },
    ],
    buttonText: 'Jetzt kaufen',
  },
  locale: 'de',
}

// 产品页Spec模块配置内容 De
const specProps: IPdpSpecProps = {
  gemeSpecsProps: {
    title: 'Technische Daten',
    specs: [
      {
        id: 1,
        name: 'Volumen',
        description: '19L',
      },
      {
        id: 2,
        name: 'Kapazität',
        description: '5kg/Tag',
      },
      {
        id: 3,
        name: 'Größe',
        description: 'W320*D455*H665mm  (18" x 12.6" x 26.2")',
      },
      {
        id: 4,
        name: 'Gewicht',
        description: '19.5kg',
      },
      {
        id: 5,
        name: 'Leistung',
        description: (
          <>
            <p>AC110V-60Hz(Modell G601N-2K für Nordamerika)</p>
            <p>AC220V-50Hz(Modell G601U-2K für Europa)</p>
          </>
        ),
      },
      {
        id: 6,
        name: 'Dezibel',
        description: '≈40db (23db-55db)',
      },
      {
        id: 7,
        name: 'Zertifizierungen',
        description: 'CE/FCC/ISO9001/ISO14001/ISO45001',
      },
      {
        id: 8,
        name: 'Funktion',
        description:
          'Vollautomatische Schnellkompostierung; Sicher und energiesparend; Automatische Geruchsneutralisation; Automatische Entfeuchtung',
      },
    ],
  },

  gemeWhatsInBoxProps: {
    title: 'Was ist in der Box',
    features: [
      {
        name: '1',
        title: 'GEME Komposter',
        description: 'Die schnell wirkende Bio-Abfallmaschine',
        imageSrc: '/assets/images/geme-whats-in-box/q2.png',
        imageAlt: 'GEME schnell wirkender Bio-Abfallkomposter',
      },
      {
        name: '2',
        title: 'GEME-Kobold',
        description: 'Die natürlichen Mikroben für die Kompostierung',
        imageSrc: '/assets/images/geme-whats-in-box/q1.png',
        imageAlt: 'GEME-Kobold natürliche Mikroben',
      },
      {
        name: '3',
        title: 'Schaufel',
        description: 'Wird verwendet, um organischen Dünger zu entnehmen',
        imageSrc: '/assets/images/geme-whats-in-box/q3.png',
        imageAlt: 'Schaufel',
      },
      {
        name: '4',
        title: 'Schaber',
        description: 'Wird zur Reinigung des Zersetzungstanks verwendet',
        imageSrc: '/assets/images/geme-whats-in-box/q4.png',
        imageAlt: 'Schaber',
      },
    ],
  },
}

// 产品页Warranty模块配置内容 De
const warrantyProps = {
  title: 'Kaufen Sie mit Vertrauen',
  description: `Wir wissen, dass Sie es als teuer empfinden werden, aber wir stellen sicher, dass es sich lohnt. Ihr Geld ist nicht verloren, es verwandelt sich in einen besseren Lebensstil und guten Service um Sie herum.`,

  features: [
    {
      name: '30 Tage kostenloser Test',
      description: `Kostenloser Versand (Festland USA), kostenloser Test, keine Rücksendegebühr. Stellen Sie uns während Ihrer Testphase alle Fragen, die Sie haben, und wir ermutigen Liebhaber innovativer Produkte!`,
      href: '/return-policy',
      icon: TruckIcon,
    },
    {
      name: 'Ein Jahr Garantie',
      description: `Wir übernehmen die Reparatur oder den kostenlosen Austausch defekter Teile, wenn der ursprüngliche Defekt während der Garantiezeit auftritt.`,
      href: '/warranty',
      icon: ShieldCheckIcon,
    },
    {
      name: '100% Kundenantwortquote',
      description: `Erleben Sie sorgenfreies Kompostieren mit unserer umfassenden Garantie. Ihr GEME Komposter, unser Versprechen.`,
      href: '/contact',
      icon: ChatBubbleLeftRightIcon,
    },
  ],

  btnText: 'Erfahren Sie mehr',
}

// 产品页 User Stories 模块配置内容 De
const userStoryProps: IPdpUserStoryTeamSectionsProps = {
  title: 'Entdecken Sie die User-Stories von GEME-Kunden',
  description: (
    <>
      Wie GEME das Leben unserer Kunden verändert hat
    </>
  ),
  people: [
    {
      id: 1,
      name: 'Alex Egertson',
      role: 'Nachhaltigkeitsdirektor',
      image: {
        src: '/assets/images/pdp-v2311/user-stories/user-stories-llc.jpg',
        alt: 'Alex Egertson',
      },
      bio: (
        <>
          Alex arbeitet bei Lutheran Retreats, Camps & Conferences, auch bekannt
          als{' '}
          <a
            className="text-emerald-600"
            href="https://lrcchome.com/"
            target="_blank"
          >
            LRCC
          </a>{' '}
          , einer Campschule, in der Kinder ein grünes Leben lernen und leben.
          <br />
          Mit GEME können mehr Kinder durch einfaches Kompostieren in ihrem
          täglichen Leben lernen.
        </>
      ),
      quote: 'Ich helfe gerne. Scheint bisher ein großartiges Produkt zu sein.',
    },
    {
      id: 2,
      name: 'Rainforest Inn',
      role: 'Bill, Chef',
      image: {
        src: '/assets/images/pdp-v2311/user-stories/user-stories-rainforest.jpg',
        alt: 'Rainforest Inn',
      },
      bio: (
        <>
          Bill ist der Besitzer des{' '}
          <a
            className="text-emerald-600"
            href="https://www.rainforestinn.com/"
            target="_blank"
          >
            Rainforest Inn
          </a>{' '}
          in Puerto Rico. Er wollte GEME unbedingt haben und hat sogar mehrmals
          und zusätzliche Versandkosten bezahlt, nur um den GEME-Komposter zu
          benutzen. Lassen Sie uns seinen{' '}
          <a
            className="text-emerald-600"
            href="https://www.tiktok.com/@rainforestinn/video/7309861665711901998"
            target="_blank"
          >
            Vlog
          </a>{' '}
          ansehen, um zu sehen, wie es läuft.
        </>
      ),
      quote:
        'Ich suche nach einem sauberen, einfachen Komposter, der in der Küche stehen kann, da unsere großen Kompostbehälter zu weit entfernt sind. Es funktioniert sehr effizient. Ruhig und sauber.',
    },
    {
      id: 3,
      name: 'LAE. Angeles Delgado',
      role: 'Finanz-CEO',
      image: {
        src: '/assets/images/pdp-v2311/user-stories/user-stories-angelita.jpeg',
        alt: 'Leonard Krasner',
      },
      bio: (
        <>
          Die mexikanische Kundin Angelita (Kontakt im April) kaufte eine
          Einheit trotz unserer anfänglichen Schwierigkeiten beim Versand von
          den USA nach Mexiko. Ihr Transportunternehmen erleichterte die
          Abholung in Texas. Sie liebt das Produkt und kaufte drei weitere für
          das Weihnachtsfest ihrer Töchter! Angelita wurde sogar zur Heldin,
          indem sie uns bei der Lösung eines Erfüllungsproblems für eine weitere
          mexikanische Kickstarter-Kampagne half.
        </>
      ),
      quote:
        'Ich bin ins Internet gegangen, habe mehr gesucht und herausgefunden, dass eure Werbung besagt, dass es sich um einen Biokomposter handelt, und ich habe Videos gesehen und schließlich euren gefunden. Ich liebe ihn. Ich möchte meine Komposter kaufen! Ich bin jetzt bereit für 2 weitere. Vielleicht drei.',
      mobileQuote:
        'Ich möchte meine Komposter kaufen! Ich bin jetzt bereit für 2 weitere. Vielleicht drei.',
    },
    {
      id: 4,
      name: 'Vasil Borukov',
      role: 'Senior IT-Support-Ingenieur',
      image: {
        src: '/assets/images/pdp-v2311/user-stories/user-stories-vasil.png',
        alt: 'Vasil Software engineer',
      },
      bio: (
        <>
          Der bulgarische Zero-Waste-Befürworter Vasil liebt GEME, weil es
          Lebensmittelverschwendung bekämpft und den CO2-Fußabdruck reduziert.
          Seit der Crowdfunding-Kampagne von GEME im Juli 2022 sicherte er sich
          eine Einheit für 499 € über Ratenzahlungen und förderte aktiv GEMEs
          Produkt und Vision in seinem Netzwerk. Ein wahrer
          Nachhaltigkeits-Champion!
        </>
      ),
      quote:
        'Ich wollte schon immer mehr und mehr an allem um mich herum teilnehmen, um ein besseres nachhaltiges Leben zu führen, und deshalb wollte ich so viel GEME haben. Es vereint alles, was man für ein einfacheres, stressfreies Leben braucht. Ich empfehle es all meinen Freunden!',
      mobileQuote:
        'Es vereint alles, was man für ein einfacheres, stressfreies Leben braucht.',
    },
  ],
  locale: 'de',
}

export function PdpIntroDe(props: IProductProps) {
  const allProps: IPdpContentProps = {
    ...props,
    tabs,
    introProps,
    compareProps,
    specProps,
    warrantyProps,
    userStoryProps,
    locale,
  }

  return <PdpIntroEnContent {...allProps} />
}
