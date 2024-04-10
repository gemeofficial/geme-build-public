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
  title: 'Der weltweit erste Komposter für Bioabfälle',
  description:
    'Nutzen Sie Mikrobiota, um Lebensmittelabfälle schnell abzubauen, 100x schneller als herkömmliche Kompostierung, völlig anders als elektrische „Komposter“ mit Dörrfunktion auf der Arbeitsplatte.',
  bgImageSrc:
    '/assets/images/pdp-v2311/dividers/geme-with-compost-background.jpg',
  comparisonText: {
    brfore: 'Vor',
    after: 'Nach',
  },
  bottomItems: [
    { id: 1, description: 'Aufschlüsselung nach Mikroben' },
    { id: 2, description: 'Nicht durch Dehydrierung' },
    { id: 3, description: 'Komposthaufen im Kasten' },
  ],
}

const oxygenCycleProps: IOxygenCycleProps = {
  title: 'Notwendige Schritte für einen echten Kompostierungsprozess',
  progresses: [
    {
      minProgress: 12.5,
      content: (
        <>
          <SvgFoodWaste className=" w-8 h-8 md:w-16 md:h-16 " />
          <h3 className="v2311-font-body md:v2311-font-h3 text-v2311-primary font-bold text-center mt-2 md:mt-4 ">
            Nährstoffe (Lebensmittelabfälle)
          </h3>
          <p className="hidden lg:block v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2">
            Mikroorganismen benötigen C, N, Phosphor (P) und Kalium (K). die
            primären Nährstoffe. Das C:N-Verhältnis der Rohstoffe ist wichtig.
            Der Das optimale C:N-Verhältnis der Rohstoffe liegt zwischen 25:1
            und 30:1.
          </p>
          <p className="hidden xl:block v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2">
            Wenn das Verhältnis zu hoch ist, kommt es zu einem Wachstum von
            Mikroorganismen begrenzt, was zu einer längeren Kompostierungszeit
            führt. Ein geringeres C:N-Verhältnis führt zu einer Unterausnutzung
            von N und Geruch kann ein Problem sein.
          </p>
          <p className=" v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 ">
            GEME Composter und GEME Kobold kümmern sich um das C:N-Verhältnis
            automatisch für Sie.
          </p>
        </>
      ),
    },
    {
      minProgress: 25,
      content: (
        <>
          <SvgOxygen className=" w-8 h-8 md:w-16 md:h-16 " />
          <h3 className=" v2311-font-body md:v2311-font-h3 text-v2311-primary font-bold text-center mt-2 md:mt-4 ">
            Belüftung (Sauerstoff)
          </h3>
          <p className="hidden lg:block v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 ">
            Die aerobe Kompostierung erfolgt in Gegenwart von reichlich O2. In
            diesem Bei diesem Prozess bauen aerobe Mikroorganismen organische
            Stoffe ab und produzieren Ammoniak, Wasser, Wärme und Humus, die
            relativ stabil sind Bio-Endprodukt.
          </p>
          <p className=" v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 ">
            GEME Composter bietet ein Luftaustauschsystem, um dies zu
            ermöglichen in einer Kiste.
          </p>
        </>
      ),
    },
    {
      minProgress: 40,
      content: (
        <>
          <SvgWood className=" w-8 h-8 md:w-16 md:h-16 " />
          <h3 className=" v2311-font-body md:v2311-font-h3 text-v2311-primary font-bold text-center mt-2 md:mt-4 ">
            Ligningehalt (braunes Zeug)
          </h3>
          <p className="hidden lg:block  v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 ">
            Lignin ist einer der Hauptbestandteile pflanzlicher Zellwände Die
            komplexe chemische Struktur macht es äußerst resistent gegen
            Mikroben Degradierung.
          </p>
          <p className="hidden xl:block  v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 ">
            Diese Art von Lignin hat zwei Auswirkungen. Eines davon ist Lignin
            verringert die Bioverfügbarkeit der anderen Zellwandbestandteile,
            Ermittlung des tatsächlichen C:N-Verhältnisses (d. h. Verhältnis von
            biologisch abbaubarem C zu N) niedriger als der normalerweise
            angegebene Wert. Das andere ist, dass Lignin dient als
            Porositätsverstärker, der günstige Bedingungen schafft aerobe
            Kompostierung.
          </p>
          <p className=" v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 ">
            Der GEME Kobold-Starter enthält solches Material und ist dafür gut
            konfiguriert Du.
          </p>
        </>
      ),
    },
    {
      minProgress: 60,
      content: (
        <>
          <SvgWaterDrop className=" w-8 h-8 md:w-16 md:h-16 " />
          <h3 className=" v2311-font-body md:v2311-font-h3 text-v2311-primary font-bold text-center mt-2 md:mt-4 ">
            Feuchtigkeit
          </h3>
          <p className="hidden lg:block v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 ">
            Feuchtigkeit ist notwendig, um die Stoffwechselaktivität des Körpers
            zu unterstützen Mikroorganismen. Kompostierungsmaterialien sollten
            die Feuchtigkeit aufrechterhalten Gehalt von 40-65 Prozent.
          </p>
          <p className="hidden xl:block v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 ">
            Wenn der Haufen zu trocken ist, erfolgt die Kompostierung langsamer,
            während a Feuchtigkeitsgehalt über 65 Prozent entwickelt sich
            anaerob Bedingungen. In der Praxis empfiehlt es sich, den Stapel mit
            a zu beginnen Feuchtigkeitsgehalt von 50-60 Prozent, am Ende etwa 30
            Prozent.
          </p>
          <p className=" v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 ">
            GEME Composter ist wasserdicht und ermöglicht die Zugabe von Wasser
            und entfeuchten, wenn es zu nass ist.
          </p>
        </>
      ),
    },
    {
      minProgress: 78,
      content: (
        <>
          <SvgTemperature className=" w-8 h-8 md:w-16 md:h-16 " />
          <h3 className=" v2311-font-body md:v2311-font-h3 text-v2311-primary font-bold text-center mt-2 md:mt-4 ">
            Temperatur
          </h3>
          <p className="hidden lg:block v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 ">
            Der Kompostierungsprozess umfasst zwei Temperaturbereiche: mesophil
            und thermophil.
          </p>
          <p className="hidden xl:block v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 ">
            Während die ideale Temperatur für die erste Kompostierungsphase ist
            20-45 °C, in weiteren Stadien mit den thermophilen Organismen Bei
            der Übernahme kann ein Temperaturbereich von 50–70 °C ideal sein.
            Hoch Temperaturen charakterisieren den aeroben Kompostierungsprozess
            und dienen dazu als Zeichen starker mikrobieller Aktivität.
          </p>
          <p className=" v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 ">
            GEME Composter verfügt über einen intelligenten Temperaturregler,
            der die Temperatur so regelt, dass der GAME Kobold in den besten
            Zustand passt.
          </p>
        </>
      ),
    },
    {
      minProgress: 100,
      content: (
        <>
          <SvgMicrobe className=" w-8 h-8 md:w-16 md:h-16 " />
          <h3 className=" v2311-font-body md:v2311-font-h3 text-v2311-primary font-bold text-center mt-2 md:mt-4 ">
            Mikroben (GEME Kobold)
          </h3>
          <p className="hidden lg:block v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 ">
            Um die Effizienz zu verbessern, könnte die Beimpfung von
            Mikroorganismen erfolgen eingeführt.
          </p>
          <p className="hidden xl:block v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 ">
            Bei den für die Kompostierung verwendeten Inokulumorganismen handelt
            es sich hauptsächlich um Pilze wie z Trichoderma und Pleurotus.
            Einige verfügen auch über „effektive“. Mikroorganismen“ (EMs).
          </p>
          <p className=" v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 ">
            GEME Kobold ist ein Mikrobiota-Set, das weltweit einzigartig ist
            zuvor entdeckte und validierte Hochtemperaturbeständigkeit
            zusammengesetzte Mikrobiota. Es wirkt 100x schneller als gewöhnliche
            Bakterien natürlich.
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
  title: 'Von der Verschwendung zum Wunder',
  description:
    'Tauchen wir ein in die winzigen Superhelden, die eine bedeutende Wirkung haben: Mikroben (GEME Kobold). Ähnlich wie die freundlichen Mikroben, die die Verdauung in Ihrem Darm unterstützen, verwandeln sie bei idealen Bedingungen und regelmäßiger Rotationsmischung Speisereste schnell in organischen Kompost.',

  withImageOrVideo: {
    type: 'video',
    videoProps: {
      sources: [
        {
          minWidth: 0,
          src: 'https://public-assest-434759801795.s3.us-west-1.amazonaws.com/how-geme-kobold-eat-food-waste-480p.mp4',
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
    'GAME Geräuschpegel etwa 35–45 dB, der leiseste Komposter auf dem Markt.',
  withImageOrVideo: {
    type: 'image',
    imageSrc: '/assets/images/pdp-v2311/introduction/geme-silent.jpg',
    imageAlt: 'food waste picture',
  },
  bottomContent: <PdpIntroSection4 />,
}

const contentSection21Props: IContentSection2Props = {
  title: 'Wirf weiterhin Müll, GEME kümmert sich um den Rest',
  description: (
    <>
      🫳&nbsp;&nbsp;Fügen Sie jederzeit Abfall hinzu
      <br />
      🫷&nbsp;&nbsp;Es ist nicht nötig, Knöpfe zu drücken <br />
      🕓&nbsp;&nbsp;Keine Wartezeiten erforderlich <br />
      🤗&nbsp;&nbsp;Keine Lernkurve <br />
      🚮&nbsp;&nbsp;Genau wie ein normaler Mülleimer
    </>
  ),
  imageSrc:
    '/assets/images/pdp-v2311/introduction/geme-take-care-of-the-rest.jpg',
  imageAlt: 'GEME kümmert sich um Ihre Lebensmittelabfälle',
  isDisplayTextOnLeft: true,
}

const contentSection22Props: IContentSection2Props = {
  title:
    'Innovative mikrobenbasierte Müllentsorgung, funktioniert schnell und sicher',
  description: (
    <>
      🔥&nbsp;&nbsp;Es entwässert nicht, es ist echte Kompostierung <br />
      🚰&nbsp;&nbsp;Kein Schreddern, kein verstopftes Waschbecken mehr
      <br />
      🌿&nbsp;&nbsp;Kein Greenwashing, eine echte umweltfreundliche Lösung
    </>
  ),
  imageSrc: '/assets/images/pdp-v2311/introduction/geme-garbage-disposal.jpg',
  imageAlt: 'Bild der Lebensmittelverschwendung',
}

const pdpIntroSection5Props: IPdpIntroSection5Props = {
  title: 'Fast der gesamte Abfall kann in GAME fließen',
  leftNotes: (
    <>
      <strong>400+</strong>
      <br />
      Arten von Abfällen
    </>
  ),
}

const pdpIntroSection6Props: IPdpIntroSection6Props = {
  title: 'Kompostieren leicht gemacht',
  description: 'Geliebt von 100k+ Gärtnern',
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
        'Energie sparen',
      ],
    },
    {
      id: 2,
      title: 'Dörrgerät',
      imageSrc:
        '/assets/images/pdp-v2311/introduction/section-comparison-dehydrator.jpeg',
      imageAlt: 'Dörrgerät',
      features: [
        'Gefälschter Kompost',
        'Kochen & trocknen',
        'Stinkend & laut',
        'Energie kostspielig',
      ],
    },
    {
      id: 3,
      title: 'Komposthaufen',
      imageSrc:
        '/assets/images/pdp-v2311/introduction/section-comparison-pile.jpeg',
      imageAlt: 'Komposthaufen',
      features: [
        'Lange warten',
        'Schmutzig & chaotisch',
        'Oft umdrehen',
        'Tiere anlocken',
      ],
    },
  ],
}

const pdpIntroSection7Props: IPdpIntroSection7Props = {
  title: 'Groß, mehr und langfristig',
  description: 'Arbeitet 7x24 aber energiesparend',
  features: [
    '😄 10+ personen Familie täglich mit',
    '📅 3 monate keine Reinigung erforderlich',
    '💰 Den Preis wert',
  ],
}

const contentSection23Props: IContentSection2Props = {
  // title: '19L Size, 11£/5kg Daily Feed',
  title: 'Imaging A Life, No Need to Throw Food Waste Any More',
  description: (
    <>
      👪&nbsp;&nbsp;10+ personen Familie täglich mit <br />
      📅&nbsp;&nbsp;3+ monate keine Reinigung erforderlich <br />
      💰&nbsp;&nbsp;Den Preis wert für so einen großen Kerl <br />
      🐳&nbsp;&nbsp;19L Volumen, 11£/5kg tägliche Futterkapazität <br />
      🐘&nbsp;&nbsp;45,5x32x66,5(cm) 18x12,6x26,2 (Zoll)
    </>
  ),
  imageSrc: '/assets/images/pdp-v2311/introduction/geme-composter-size-v2.jpeg',
  imageAlt: 'Große Größe für GEME Komposter',
  isDisplayTextOnLeft: true,
}

const contentSection24Props: IContentSection2Props = {
  title: 'Kein Filterwechsel erforderlich',
  description: (
    <>
      Das weltweit einzige Modell, das den fortschrittlichsten Industriefilter
      verwendet, mit <b>katalytischer Metallionenoxidation</b> Reinigung.
      <br />
      Diese Technologie ist leistungsstark und erfordert keinerlei Austausch.
      <br />
      Andere „Komposter“ müssen den Filter alle 3 Monate austauschen, große
      Teile sind versteckt kosten!
      <br />
      <br />
      👃🏻&nbsp;&nbsp;Kein Geruch <br />
      💰&nbsp;&nbsp;Keine zusätzlichen versteckten Kosten
      <br />
      🔨&nbsp;&nbsp;Keine Ersatzbesorgungen
    </>
  ),
  imageSrc: '/assets/images/pdp-v2311/introduction/no-filters.jpg',
  imageAlt: 'GAME erfordert keinen Filterwechsel',
}

const contentSection8Props: IContentSection8Props = {
  title: 'Keine Geruchskompostierung zu Hause',
  description:
    'GEME verwendet Industriefilter mit modernster Desodorierungstechnologie. Genießen Sie die saubere, moderne High-Tech-Kompostierung und den Zero-Waste-Lebensstil.',
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
      Lebensmittelabfälle werden durch Mikrobiota zersetzt, nicht durch den
      Strom. Der Strom dient lediglich der Aufrechterhaltung der besten
      Umgebung, damit die Mikrobiota effizient arbeiten kann.
    </>
  ),
  features: [
    {
      id: 1,
      Icon: usingCompostIcons.SvgPlantOnHandIcon,
      imgSrc: '/assets/images/pdp-v2311/introduction/icon-plant-on-hand.svg',
      feature: 'innenplan',
    },
    {
      id: 2,
      Icon: usingCompostIcons.SvgFlowerOnHandIcon,
      imgSrc: '/assets/images/pdp-v2311/introduction/icon-flower-on-hand.svg',
      feature: 'bonsai',
    },
    {
      id: 3,
      Icon: usingCompostIcons.SvgRiceOnHandIcon,
      imgSrc: '/assets/images/pdp-v2311/introduction/icon-rice-on-hand.svg',
      feature: 'gemüsebeet',
    },
    {
      id: 4,
      Icon: usingCompostIcons.SvgGardenCareIcon,
      imgSrc: '/assets/images/pdp-v2311/introduction/icon-garden-care.svg',
      feature: 'gartenpflege',
    },
    {
      id: 5,
      Icon: usingCompostIcons.SvgGiftIcon,
      imgSrc: '/assets/images/pdp-v2311/introduction/icon-gift.svg',
      feature: 'teilt es',
    },
    {
      id: 6,
      Icon: usingCompostIcons.SvgWaterIcon,
      imgSrc: '/assets/images/pdp-v2311/introduction/icon-water.svg',
      feature: 'wasser reinigen',
    },
  ],

  bgImageSrc:
    '/assets/images/pdp-v2311/dividers/use-geme-compost-in-a-garden-cropped.jpg',
  bgDesktopImageSrc:
    '/assets/images/pdp-v2311/dividers/use-geme-compost-in-a-garden.jpeg',

  linkText: 'ERHALTEN GEME',
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
