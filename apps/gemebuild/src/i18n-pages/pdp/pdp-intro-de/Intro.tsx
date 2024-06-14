/* eslint-disable react/no-unescaped-entities */
import {
  PdpIntroSection1,
  PdpIntroSection3,
  PdpIntroSection4,
  ContentSection7,
  ContentSection2,
  PdpIntroSection5,
  PdpIntroSection6,
  PdpIntroSection7,
  ContentSection8,
  PdpIntroSection8,
  usingCompostIcons,
  ScrollTriggeredAnimatedOxygenCycle,
  SvgOxygen,
  SvgFoodWaste,
  SvgWood,
  SvgWaterDrop,
  SvgTemperature,
  SvgMicrobe,
} from 'ui'
import type {
  IPdpIntroSection1Props,
  IPdpIntroSection3Props,
  IContentSection7Props,
  IContentSection2Props,
  IPdpIntroSection5Props,
  IPdpIntroSection6Props,
  IPdpIntroSection7Props,
  IContentSection8Props,
  IPdpIntroSection8Props,
  IOxygenCycleProps,
} from 'ui'

const pdpIntroSection1Props: IPdpIntroSection1Props = {
  title: 'Weltweit erster Bio-Abfallkomposter',
  description:
    'Verwendet Mikroorganismen, um Lebensmittelabfälle schnell abzubauen, 100-mal schneller als herkömmliche Kompostierung, völlig anders als elektrische "Komposter", die auf der Arbeitsplatte dehydrieren.',
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
}

const oxygenCycleProps: IOxygenCycleProps = {
  title: 'Notwendige Schritte für den echten Kompostierungsprozess',
  progresses: [
    {
      minProgress: 12.5,
      content: (
        <>
          <SvgFoodWaste className="w-8 h-8 md:w-16 md:h-16" />
          <h3 className="v2311-font-body !text-[11px] md:!text-[24px] md:!v2311-font-h3 text-v2311-primary font-bold text-center mt-2 md:mt-4">
            Nährstoffe (Lebensmittelabfälle)
          </h3>
          <p className="hidden lg:block v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 text-xs !text-[10px] md:!text-base">
            Mikroorganismen benötigen C, N, Phosphor (P) und Kalium (K) als
            Hauptnährstoffe. Das C ältnis der Rohstoffe ist wichtig. Das
            optimale C ältnis der Rohstoffe liegt zwischen 25:1 und 30:1.
          </p>
          <p className="hidden xl:block v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 text-xs !text-[10px] md:!text-base">
            Wenn das Verhältnis zu hoch ist, wird das Wachstum der
            Mikroorganismen eingeschränkt, was zu einer längeren
            Kompostierungszeit führt. Ein geringeres C ältnis führt zu einer
            Unterausnutzung von N und kann zu Geruchsproblemen führen.
          </p>
          <p className=" v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 text-xs !text-[10px] md:!text-base ">
            Der GEME Komposter und der GEME Kobold kümmern sich automatisch um
            das C ältnis für Sie.
          </p>
        </>
      ),
    },
    {
      minProgress: 25,
      content: (
        <>
          <SvgOxygen className="w-8 h-8 md:w-16 md:h-16" />
          <h3 className=" v2311-font-body !text-[11px] md:!text-[24px] md:!v2311-font-h3 text-v2311-primary font-bold text-center mt-2 md:mt-4 ">
            Aerobe Kompostierung:
            <br />
            Natürlicher Nährstoffkreislauf
          </h3>
          <p className="hidden lg:block v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 text-xs !text-[10px] md:!text-base ">
            Die aerobe Kompostierung zersetzt organisches Material mithilfe von
            Sauerstoff ( O<sub>2</sub> ), wobei aerobe Mikroben die Materialien in
            Wasserdampf, Wärme und nährstoffreichen Humus umwandeln. Der GEME
            Komposter vereinfacht diesen Prozess mit einem effizienten
            Belüftungssystem, das den Sauerstofffluss für eine effektive
            Zersetzung optimiert.
          </p>
          <p className="lg:hidden v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 text-xs !text-[10px] md:!text-base ">
            Zersetzt Bioabfall mit Sauerstoff ( O<sub>2</sub> ) zu wertvollen Nährstoffen.
            Der GEME Komposter vereinfacht dies mit einem effizienten
            Belüftungssystem für eine schnellere Zersetzung.
          </p>
        </>
      ),
    },
    {
      minProgress: 40,
      content: (
        <>
          <SvgWood className="w-8 h-8 md:w-16 md:h-16" />
          <h3 className=" v2311-font-body !text-[11px] md:!text-[24px] md:!v2311-font-h3 text-v2311-primary font-bold text-center mt-2 md:mt-4 ">
            Braune Materialien <br className='md:hidden' /> in der Kompostierung: Gewährleistung optimaler
            Bedingungen
          </h3>
          <p className="hidden lg:block  v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 text-xs !text-[10px] md:!text-base ">
            Braune Materialien, die reich an Kohlenstoff sind, spielen eine
            entscheidende Rolle in der Kompostierung, indem sie das
            Kohlenstoff-Stickstoff-Verhältnis (C:N) ausgleichen, das für die
            mikrobielle Aktivität essentiell ist. Ihre Struktur verbessert die
            Porosität und fördert die aerobe Zersetzung. Der GEME Kobold
            Starter, der sorgfältig ausgewählte braune Materialien enthält,
            sorgt für ein ausgewogenes C:N-Verhältnis und optimale
            Kompostierungsbedingungen.
          </p>
          <p className="lg:hidden v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 text-xs !text-[10px] md:!text-base ">
            Braune Materialien, reich an Kohlenstoff, gleichen das
            C:N-Verhältnis für Mikroben aus. Ihre Struktur fördert den
            Luftstrom. Der GEME Kobold Starter bietet diese braunen Materialien
            für perfekte Bedingungen.
          </p>
        </>
      ),
    },
    {
      minProgress: 60,
      content: (
        <>
          <SvgWaterDrop className="w-8 h-8 md:w-16 md:h-16" />
          <h3 className=" v2311-font-body !text-[11px] md:!text-[24px] md:!v2311-font-h3 text-v2311-primary font-bold text-center mt-2 md:mt-4 ">
            Feuchtigkeit: Das Geheimnis
            <br className="hidden md:block" />
            schnellen Kompostierens
          </h3>
          <p className="hidden lg:block v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 text-xs !text-[10px] md:!text-base ">
            Feuchtigkeit ist entscheidend für die Zersetzung. Der ideale
            Bereich? 40-60%. Dies fördert das mikrobielle Wachstum und
            beschleunigt die Zersetzung. Zu viel Feuchtigkeit (&gt;70%) führt zu
            Gerüchen, zu wenig (&lt;30%) hemmt Mikroben.
          </p>
          <p className="hidden lg:block v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 text-xs !text-[10px] md:!text-base ">
            Der GEME Komposter vereinfacht die Feuchtigkeitskontrolle. Seine
            One-Touch-Smart-Steuerung hält automatisch 40-60% für effizienten,
            hochwertigen Kompost.
          </p>
          <p className="lg:hidden v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 text-xs !text-[10px] md:!text-base ">
            Richtige Feuchtigkeit (40-60%) füttert Mikroben, die Abfall abbauen.
            Zu nass (&gt;70%) erzeugt Gerüche und verlangsamt den Prozess. Zu
            trocken (&lt;30%) macht Mikroben träge. GEME regelt die Feuchtigkeit
            für perfekte Kompostierung.
          </p>
        </>
      ),
    },
    {
      minProgress: 78,
      content: (
        <>
          <SvgTemperature className="w-8 h-8 md:w-16 md:h-16" />
          <h3 className=" v2311-font-body !text-[11px] md:!text-[24px] md:!v2311-font-h3 text-v2311-primary font-bold text-center mt-2 md:mt-4 ">
            Kompostierung: Ein Temperaturtanz
          </h3>
          <p className="hidden lg:block v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 text-xs !text-[10px] md:!text-base ">
            Kompostierung verwandelt Abfall durch temperaturgesteuerte
            mikrobielle Aktivität in nährstoffreichen Boden. Zunächst erhitzen
            Mikroben den Kompost auf 40-50°C. In der Hauptabbauphase steigen die
            Temperaturen auf 50-65°C für eine schnelle Zersetzung. Wenn der
            Kompost reift, kühlt er auf 30-40°C ab.
          </p>
          <p className="hidden lg:block v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 text-xs !text-[10px] md:!text-base ">
            Der GEME Komposter optimiert diesen Prozess, indem er die Temperatur
            in jeder Phase reguliert und so für eine effiziente Kompostierung
            und hochwertigen Kompost sorgt.
          </p>
          <p className="lg:hidden v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 text-xs !text-[10px] md:!text-base ">
            Kompostierung verwandelt Abfall durch Temperaturschwankungen, die
            durch mikrobielle Aktivität verursacht werden, in nährstoffreichen
            Boden. Der GEME verbessert dies, indem er die Temperaturen
            durchgängig kontrolliert und so eine effiziente und hochwertige
            Kompostierung sicherstellt.
          </p>
        </>
      ),
    },
    {
      minProgress: 100,
      content: (
        <>
          <SvgMicrobe className="w-8 h-8 md:w-16 md:h-16" />
          <h3 className=" v2311-font-body !text-[11px] md:!text-[24px] md:!v2311-font-h3 text-v2311-primary font-bold text-center mt-2 md:mt-4">
            Mikroorganismen
            <br />
            (GEME Kobold)
          </h3>
          <p className="hidden lg:block v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 text-xs !text-[10px] md:!text-base ">
            Mikroorganismen zerlegen organische Abfälle in Kompost, einen
            nährstoffreichen Bodenverbesserer. Pilze zersetzen zähe Stoffe wie
            Cellulose, während andere Mikroben andere organische Materialien
            abbauen. GEME Kobold, ein einzigartiges hitzebeständiges
            Mikrobenteam, beschleunigt die Kompostierung.
          </p>
          <p className="lg:hidden v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 text-xs !text-[10px] md:!text-base ">
            Natur's Recycler: Mikroben zersetzen Abfälle in nährstoffreiche
            Bodenverbesserungsmittel. Pilze zerlegen zähe Materialien, während
            andere den Rest übernehmen. GEME Kobold, ein hitzeresistentes
            Mikrobenteam, beschleunigt die Kompostierung.
          </p>
        </>
      ),
    },
  ],
}

const pdpIntroSection3Props: IPdpIntroSection3Props = {
  title: '6-8 Stunden',
}

const contentSection71Props: IContentSection7Props = {
  title: 'Von Abfall zu Wunder',
  description:
    'Tauchen wir ein in die kleinen Superhelden, die einen großen Einfluss haben: Mikroben (GEME Kobold). Ähnlich wie die freundlichen Mikroben, die bei der Verdauung in Ihrem Darm helfen, verwandeln sie unter idealen Bedingungen und regelmäßiger Rotation schnell Speisereste in organischen Kompost.',

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
  bottomContent: <PdpIntroSection3 {...pdpIntroSection3Props} />,
  isDisplayTextOnLeft: true,
}

const contentSection72Props: IContentSection7Props = {
  title: 'Leiser Betrieb',
  description:
    'GEME Lautstärke liegt bei etwa 35-45 dB, der leiseste Komposter auf dem Markt.',
  withImageOrVideo: {
    type: 'image',
    imageSrc: '/assets/images/pdp-v2311/introduction/geme-silent.jpg',
    imageAlt: 'food waste picture',
  },
  bottomContent: <PdpIntroSection4 />,
}

const contentSection21Props: IContentSection2Props = {
  title: 'Werfen Sie weiterhin Müll hinein, GEME kümmert sich um den Rest',
  description: (
    <>
      🫳&nbsp;&nbsp;Fügen Sie jederzeit Abfall hinzu
      <br />
      🫷&nbsp;&nbsp;Keine Tasten drücken notwendig <br />
      🕓&nbsp;&nbsp;Keine Wartezyklen <br />
      🤗&nbsp;&nbsp;Keine Lernkurve
      <br />
      🚮&nbsp;&nbsp;Einfach wie ein gewöhnlicher Mülleimer
    </>
  ),
  imageSrc:
    '/assets/images/pdp-v2311/introduction/geme-take-care-of-the-rest.jpg',
  imageAlt: 'GEME kümmert sich um Ihre Lebensmittelabfälle',
  isDisplayTextOnLeft: true,
}

const contentSection22Props: IContentSection2Props = {
  title:
    'Innovative, mikrobenbasierte Müllentsorgung, arbeitet schnell & sicher',
  description: (
    <>
      🔥&nbsp;&nbsp;Kein Trocknen, es ist echtes Kompostieren <br />
      🚰&nbsp;&nbsp;Kein Zerkleinern, keine verstopften Abflüsse mehr
      <br />
      🌿&nbsp;&nbsp;Nicht nur grüner Anstrich, sondern eine wahrhaft
      umweltfreundliche Lösung
    </>
  ),
  imageSrc: '/assets/images/pdp-v2311/introduction/geme-garbage-disposal.jpg',
  imageAlt: 'Bild der Lebensmittelverschwendung',
}

const pdpIntroSection5Props: IPdpIntroSection5Props = {
  title: 'Fast jeder Abfall kann in GEME',
  leftNotes: (
    <>
      <strong>400+</strong>
      <br />
      Arten von Abfall
    </>
  ),
}

const pdpIntroSection6Props: IPdpIntroSection6Props = {
  title: 'Kompostieren leicht gemacht',
  description: 'Geliebt von über 100.000 Gärtnern',
  items: [
    {
      id: 1,
      featured: true,
      title: 'GEME',
      imageSrc:
        '/assets/images/pdp-v2311/introduction/section-comparison-geme.jpeg',
      imageAlt: 'GEME komponiert',
      features: [
        'Echter Kompost',
        'Aerobe Fermentation',
        'Geruchlos & leise',
        'Energiesparend',
      ],
    },
    {
      id: 2,
      title: 'Dehydrator',
      imageSrc:
        '/assets/images/pdp-v2311/introduction/section-comparison-dehydrator.jpeg',
      imageAlt: 'Dehydrator',
      features: [
        'Falscher Kompost',
        'Kochen & Trocknen',
        'Übelriechend & laut',
        'Energiekostenintensiv',
      ],
    },
    {
      id: 3,
      title: 'Komposthaufen',
      imageSrc:
        '/assets/images/pdp-v2311/introduction/section-comparison-pile.jpeg',
      imageAlt: 'Komposthaufen',
      features: [
        'Lange Wartezeiten',
        'Schmutzig & unordentlich',
        'Häufiges Umgraben',
        'Zieht Tiere an',
      ],
    },
  ],
}

const pdpIntroSection7Props: IPdpIntroSection7Props = {
  title: 'Groß, mehr & langfristig',
  description: 'Arbeitet 7x24 Stunden, aber energiesparend',
  features: [
    '😄 Täglich nutzbar für Familien mit 10+ Personen',
    '📅 3 Monate keine Reinigung erforderlich',
    '💰 Preis wert',
  ],
}

const contentSection23Props: IContentSection2Props = {
  // title: '19L Size, 11£/5kg Daily Feed',
  title:
    'Stellen Sie sich ein Leben vor, in dem Sie keine Lebensmittelabfälle mehr wegwerfen müssen',
  description: (
    <>
      👪&nbsp;&nbsp;Täglich nutzbar für Familien mit 10+ Personen <br />
      📅&nbsp;&nbsp;3+ Monate keine Reinigung erforderlich <br />
      💰&nbsp;&nbsp;Preis wert für so ein großes Gerät <br />
      🐳&nbsp;&nbsp;19L Volumen, 5kg tägliche Zuführungskapazität <br />
      🐘&nbsp;&nbsp;45,5x32x66,5(cm) 18x12,6x26,2 (Zoll)
    </>
  ),
  imageSrc: '/assets/images/pdp-v2311/introduction/geme-composter-size-v2.jpeg',
  imageAlt: 'Große Größe für GEME Komposter',
  isDisplayTextOnLeft: true,
}

const contentSection24Props: IContentSection2Props = {
  title: 'Kein Filterwechsel notwendig',
  description: (
    <>
      Das weltweit einzige Modell, das den fortschrittlichsten industriellen
      Filter mit <b>Metallionen-Katalysatoroxidation</b> zur Reinigung
      verwendet.
      <br />
      Diese Technologie ist leistungsstark und erfordert keinen Austausch.
      <br />
      Andere "Komposter" müssen den Filter alle 3 Monate wechseln, versteckte
      Kosten!
      <br />
      <br />
      👃🏻&nbsp;&nbsp;Kein Geruch <br />
      💰&nbsp;&nbsp;Keine zusätzlichen versteckten Kosten
      <br />
      🔨&nbsp;&nbsp;Keine Austauschaufgaben
    </>
  ),
  imageSrc: '/assets/images/pdp-v2311/introduction/no-filters.jpg',
  imageAlt: 'GAME erfordert keinen Filterwechsel',
}

const contentSection8Props: IContentSection8Props = {
  title: 'Geruchloses Kompostieren zu Hause',
  description:
    'GEME verwendet industrielle Filter mit der fortschrittlichsten Deodorisationstechnologie. Genießen Sie das Hightech-saubere, moderne Kompostieren, genießen Sie den Zero-Waste-Lifestyle.',
  items: [
    {
      id: 1,
      imageSrc: '/assets/images/pdp-v2311/introduction/no-smell-before.jpg',
      imageAlt:
        'Nehmen Sie den Geruch wahr, bevor Sie den GEME-Komposter verwenden',
    },
    {
      id: 2,
      imageSrc: '/assets/images/pdp-v2311/introduction/no-smell-after.jpg',
      imageAlt: 'Kein Geruch nach der Verwendung des GEME-Komposters',
    },
  ],
}

const pdpIntroSection8Props: IPdpIntroSection8Props = {
  title: 'Kompost verwenden',
  description: (
    <>
      Lebensmittelabfälle werden von Mikroben zersetzt, nicht durch elektrische
      Energie. Der Strom dient nur dazu, die besten Bedingungen für die Mikroben
      zu erhalten, damit sie effizient arbeiten können.
    </>
  ),
  features: [
    {
      id: 1,
      Icon: usingCompostIcons.SvgPlantOnHandIcon,
      imgSrc: '/assets/images/pdp-v2311/introduction/icon-plant-on-hand.svg',
      feature: 'Zimmerpflanzen',
    },
    {
      id: 2,
      Icon: usingCompostIcons.SvgFlowerOnHandIcon,
      imgSrc: '/assets/images/pdp-v2311/introduction/icon-flower-on-hand.svg',
      feature: 'Bonsai',
    },
    {
      id: 3,
      Icon: usingCompostIcons.SvgRiceOnHandIcon,
      imgSrc: '/assets/images/pdp-v2311/introduction/icon-rice-on-hand.svg',
      feature: 'Gemüsebeet',
    },
    {
      id: 4,
      Icon: usingCompostIcons.SvgGardenCareIcon,
      imgSrc: '/assets/images/pdp-v2311/introduction/icon-garden-care.svg',
      feature: 'Gartenpflege',
    },
    {
      id: 5,
      Icon: usingCompostIcons.SvgGiftIcon,
      imgSrc: '/assets/images/pdp-v2311/introduction/icon-gift.svg',
      feature: 'Teilen Sie es',
    },
    {
      id: 6,
      Icon: usingCompostIcons.SvgWaterIcon,
      imgSrc: '/assets/images/pdp-v2311/introduction/icon-water.svg',
      feature: 'Wasser reinigen',
    },
  ],

  bgImageSrc:
    '/assets/images/pdp-v2311/dividers/use-geme-compost-in-a-garden-cropped.jpg',
  bgDesktopImageSrc:
    '/assets/images/pdp-v2311/dividers/use-geme-compost-in-a-garden.jpeg',

  linkText: 'BEKOMMEN GEME',
  linkUrl: '/product/geme',
}

function Intro(): JSX.Element {
  return (
    <div>
      <PdpIntroSection1 {...pdpIntroSection1Props} />

      <ScrollTriggeredAnimatedOxygenCycle {...oxygenCycleProps} />

      <ContentSection7 {...contentSection71Props} />

      <ContentSection7 {...contentSection72Props} />

      <PdpIntroSection5 {...pdpIntroSection5Props} />

      <ContentSection2 {...contentSection21Props} />

      <ContentSection2 {...contentSection22Props} />

      <PdpIntroSection6 {...pdpIntroSection6Props} />

      <PdpIntroSection7 {...pdpIntroSection7Props} />

      <ContentSection2 {...contentSection23Props} />

      <ContentSection2 {...contentSection24Props} />

      <ContentSection8 {...contentSection8Props} />

      <PdpIntroSection8 {...pdpIntroSection8Props} />
    </div>
  )
}

export default Intro
