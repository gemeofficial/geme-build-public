import {
  AboutContentSection1,
  AboutContentSection15,
  AboutContentSection2,
  AboutContentSection4,
  AboutContentSection6,
  AboutHeroSection,
} from 'ui'

import type {
  IAboutContentSection1,
  IAboutContentSection15,
  IAboutContentSection2,
  IAboutContentSection4,
  IAboutContentSection6,
  IAboutHeroSection,
} from 'ui'

// about page静态页面的内容 配置文件 De版

// AboutHeroSection
const aboutHeroSectionProps: IAboutHeroSection = {
  title: 'Weniger Abfall, mehr Grün',
  mTitle: `ROKH's Weg zu einer nachhaltigen Zukunft`,
  descriptionSection: (
    <div className="w-full mt-3 md:mt-5 max-w-md text-base text-v2311-text-gary md:max-w-3xl">
      <div>
        Bei ROKH teilen wir eine einheitliche Vision: Abfall in eine Ressource umzuwandeln
        und eine Welt zu schaffen, in der die Natur neben dem menschlichen Fortschritt gedeiht. Unsere
        Leidenschaft für wissenschaftliche Innovation treibt uns an, eine positive Wirkung auf
        die Welt zu haben. Durch die Kommerzialisierung unserer bahnbrechenden Biotechnologielösungen
        verwandeln wir Forschung in greifbare Vorteile, die das menschliche Wohlbefinden verbessern und globale Herausforderungen angehen.
      </div>
      <div>
        <ul className="space-y-1">
          <li className="my-2">Unser Team besteht aus:</li>
          <li>
            <strong>Erfahrenen Fachleuten</strong>: Mit über 20 Jahren Erfahrung in der
            Behandlung von festen Abfallressourcen bringen wir tiefes Fachwissen in unsere Arbeit ein.
          </li>
          <li className="md:w-[60%] lg:w-full">
            <strong>Engagierten Wissenschaftlern</strong>: Unsere Mikrobiologen und
            Agronomen erforschen kontinuierlich neue Wege, die Natur für nachhaltiges Abfallmanagement zu nutzen.
          </li>
          <li className="md:w-[60%] lg:w-full">
            <strong>Träumern und Machern</strong>: Wir sind bestrebt, unsere
            Vision in die Realität umzusetzen, eine innovative Lösung nach der anderen.
          </li>
        </ul>
      </div>
    </div>
  ),

  contactUs: 'Kontaktiere uns',
  imgUrls1: '/assets/images/about/v2406/s0-company.png',
  imgUrls2: [
    '/assets/images/about/v2406/s0-experiment.png',
    '/assets/images/about/v2406/s0-scientist.png',
  ],
  imgUrls3: [
    '/assets/images/about/v2406/s0-soil.png',
    '/assets/images/about/v2406/s0-seed.png',
  ],
}

// AboutContentSection1
const aboutContentSection1Props: IAboutContentSection1 = {
  mTitle: 'Unsere Mission',
  title: 'Alles lebt ewig und in Harmonie mit der Erde',
  descriptions: [
    "Lebensmittelabfälle sind eine der größten Herausforderungen der Welt, und wir können sie gemeinsam mit Ihnen lösen. Aber es geht nicht nur um Lebensmittelabfälle – Tierkot und alle biologisch abbaubaren Abfälle können effektiv zersetzt werden.",
    'Durch die Kombination von Biotechnologie mit moderner Fertigung bietet GEME eine Lösung für eine bessere Abfallverwertung: Reduzieren & Recyceln vor Ort.',
    "Ähnlich wie das Cache-Konzept in Computernetzwerken ist der effizienteste Weg, Abfälle, insbesondere Bioabfälle, zu verwalten, sie dort zu verarbeiten, wo sie entstehen, und so den Recyclingweg erheblich zu verkürzen.",
    "GEME schafft Produkte, um diese Idee Wirklichkeit werden zu lassen. Umweltfreundlich zu sein und die Natur zu schützen, ist für uns nicht nur ein Slogan; es ist durch jeden kleinen Schritt bei der Entsorgung unserer täglichen Abfälle umsetzbar.",
    "GEME ist mehr als ein Produkt; es ist eine Technologie-Lösung.",
    'Wir nutzen Technologie, um ein Netzwerk zu schaffen, das Wissenschaftlerteams, Vertriebspartner, nachhaltige Restaurants, Recyclinggemeinschaften, Bio-Bauernhöfe, Entsorgungsstationen, Abfallwirtschaftsorganisationen und Einzelpersonen verbindet. Jeder Knotenpunkt profitiert, genau wie alles, was in Harmonie auf unserem Planeten lebt.',
  ],
  points: [
    {
      title: 'Umdenken',
      desc: 'Nehmen Sie eine ganzheitliche Sichtweise des Umweltschutzes ein. Behandeln Sie Bioabfall nicht als Müll, sondern als Ressource für Gärten und den Planeten. Verstehen Sie, dass unsere Handlungen die Erde tief beeinflussen.',
    },
    {
      title: 'Reduzieren',
      desc: 'Verringern Sie den Ressourcenverbrauch und den Abfall. Folgen Sie nachhaltigen Praktiken, um Ressourcen zu sparen und die Umwelt zu schützen. Behandeln Sie Abfall an seiner Quelle, um seine Auswirkungen zu verringern.',
    },
    {
      title: 'Wiederverwerten',
      desc: 'Recyceln, wiederverwenden und Materialien aufwerten. Verwandeln Sie verschiedene Arten von Abfall in nützliche Ressourcen, verlängern Sie deren Lebensdauer und reduzieren Sie den Bedarf an neuen Materialien.',
    },
    {
      title: 'Wiederherstellen',
      desc: "Schützen und regenerieren Sie natürliche Ökosysteme. Verbessern Sie die Bodengesundheit, reinigen Sie Verschmutzungen und reparieren Sie beschädigte Umgebungen, um das Wohlbefinden unseres Planeten zu gewährleisten.",
    },
  ],
  fullImgUrl: '/assets/images/about/v2406/s2-family.png',
}

// AboutContentSection15
const aboutContentSection15Props: IAboutContentSection15 = {
  mTitle: 'Unsere Leute',
  title: 'Pioniergeister, leidenschaftliche Herzen',
  bodyTexts: (
    <>
      <div>
        <strong>Visionäre</strong>: Unsere visionären Führungskräfte setzen die Richtung,
        inspirieren uns, über das Gewöhnliche hinaus zu denken und konventionelle Ansätze zur Abfallbewirtschaftung in Frage zu stellen.
      </div>
      <div>
        <strong>Wissenschaftler</strong>: Unsere brillanten Wissenschaftler stehen an der
        Spitze der Forschung und erforschen ständig neue Wege, die Kraft der Natur für nachhaltige Abfalllösungen zu nutzen.
      </div>
      <div>
        <strong>Ingenieure</strong>: Unsere erfahrenen Ingenieure setzen Ideen in die Tat um,
        verwandeln innovative Konzepte in greifbare Lösungen, die einen echten Unterschied in der Welt machen.
      </div>
      <div>
        <strong>Kooperationspartner</strong>: Wir fördern einen Geist der Zusammenarbeit,
        ermutigen zu offener Kommunikation und zum Austausch von Ideen auf allen Ebenen der Organisation.
      </div>
    </>
  ),
  mainImgUrl: '/assets/images/about/v2406/s1-birth.png',
  imgSectionUrl1: '/assets/images/about/v2406/s1-team.png',
  imgSectionUrl2: '/assets/images/about/v2406/s1-meeting.png',
  imgSectionUrl3: '/assets/images/about/v2406/s1-colleagues.png',
}

// AboutContentSection15
const aboutContentSection2Props: IAboutContentSection2 = {
  mTitle: 'Unsere Werte',
  title: 'Den weniger befahrenen Weg gehen',
  desc: 'Wir basieren unsere Handlungen auf Wahrheit und grundlegenden Prinzipien. Mit einem klaren Ziel vor Augen träumen wir ehrgeizig, gehen aber kalkulierte Schritte, um es zu erreichen.',
  dataList: [
    {
      title: 'Weltklasse sein',
      desc: `Wir setzen die höchsten Standards und streben unermüdlich nach Exzellenz in allen Aspekten unserer Arbeit, wobei Nachhaltigkeit im Mittelpunkt steht.`,
    },
    {
      title: 'Offen und kooperativ',
      desc: `Förderung eines offenen Dialogs und Zusammenarbeit zur Findung kollektiver Lösungen. Aufbau starker Partnerschaften mit Einzelpersonen, Organisationen und Gemeinschaften.`,
    },
    {
      title: 'Immer lernen',
      desc: `Annahme modernster Forschung, um Umweltprobleme zu bewältigen. Ständige Innovation und Verfeinerung unserer Lösungen, um optimale Ergebnisse zu erzielen.`,
    },
    {
      title: 'Unterstützend sein',
      desc: `Schaffung eines unterstützenden Umfelds, in dem sich Einzelpersonen ermächtigt, wertgeschätzt und ermutigt fühlen, ihr volles Potenzial zu entfalten.`,
    },
    {
      title: 'Fakten und Lösungen',
      desc: `Entwicklung effektiver Lösungen, die nicht durch Annahmen oder Vorurteile beeinflusst werden, sondern durch Experimentergebnisse und Daten; wir lassen die Daten unseren Weg leiten.`,
    },
    {
      title: 'Verantwortung übernehmen',
      desc: `Sicherstellen, dass unsere Verpflichtungen und unsere Arbeit mit unseren Werten und ethischen Grundsätzen übereinstimmen. Teilen unseres Wissens und unserer Expertise, um Gemeinschaften weltweit zu stärken.`,
    },
  ],
}

// aboutContentSection4
const aboutContentSection4Props: IAboutContentSection4 = {
  mTitle: 'Unsere Meilensteine',
  title: 'Solide Grundlagen, Schritt für Schritt',
  desc: 'Angetrieben von Leidenschaft und einem gemeinsamen Engagement für Exzellenz bewegen wir uns schnell durch unseren Entwicklungsprozess.',
  progressList: [
    {
      progressBarTitle: 'Juli 2022',
      title: 'Kickstarter-Kampagne',
      desc: (
        <div>
          Erhalten{' '}
          <a href="https://www.kickstarter.com/projects/geme/geme-harvest-ready-to-use-organic-compost-easily">
            Unterstützung
          </a>{' '}
          von Unterstützern aus über 22 Ländern weltweit.
        </div>
      ),
    },
    {
      progressBarTitle: 'März 2023',
      title: 'Eintritt in den US-Markt',
      desc: 'Beginn des Verkaufs in den USA, autorisierter Amazon-Store eröffnet.',
    },
    {
      progressBarTitle: 'Juni 2023',
      title: 'Verkauf in Europa',
      desc: 'Erste Charge Maschinen in Europa angekommen, lokales Lager eingerichtet.',
    },
    {
      progressBarTitle: 'Januar 2024',
      title: 'GEME I Modell-Upgrade',
      desc: 'Hardware-Upgrade nach einem Jahr Kundenfeedback, leiser und robuster.',
    },
    {
      progressBarTitle: 'September/Oktober 2024',
      title: 'GEME II',
      desc: 'Intelligenter, bequemer und erschwinglicher.',
    },
    {
      progressBarTitle: '2026',
      title: 'GEME Networking',
      desc: 'Verbindung von Gemeinschaften, Bauernhöfen und Abfalllösungen für Nachhaltigkeit.',
    },
  ],
}

// aboutContentSection6
const aboutContentSection6Props: IAboutContentSection6 = {
  title: 'Partnerschaft mit GEME',
  incentives: [
    {
      name: 'Lebe mit GEME',
      link: '/product/geme',
      imageSrc: '/assets/images/about/icons/use-geme.png',
      description: (
        <>
          Fühlen Sie sich gut, tun Sie Gutes, leben Sie nachhaltig. Ersetzen Sie Ihren Müllentsorger
          durch <a href="/product/geme">GEME Komposter</a>.
        </>
      ),
    },
    {
      name: 'Großmaßstäbliches Kompostieren mit GEME',
      link: '/industrial-equipments',
      imageSrc: '/assets/images/about/icons/composting.png',
      description: `Von Haushalten bis zu Fabriken maßgeschneiderte Biotechnologie für industrielle Kompostierungsqualität.`,
    },
    {
      name: 'Treten Sie dem GEME Netzwerk bei',
      link: '/geme-network-survey',
      imageSrc: '/assets/images/about/icons/networking.png',
      description: `Kostenlose Kompost-Tauschgemeinschaft! Teilen Sie, was Sie nicht brauchen, und gestalten Sie gemeinsam eine grünere Zukunft.`,
    },
    {
      name: 'Werden Sie GEME-Partner',
      link: '/coming-soon',
      imageSrc: '/assets/images/about/icons/affiliate-marketing.png',
      description: `Seien Sie ein GEME-Champion! Treten Sie unserer Partnervereinigung bei und führen Sie die nachhaltige Revolution an.`,
    },
    {
      name: 'Verkaufen oder vertreiben Sie mit GEME',
      link: 'https://eu.jotform.com/form/221943772954062',
      imageSrc: '/assets/images/about/icons/distribution.png',
      description: `Erweitern Sie Ihre Reichweite und schließen Sie sich der GEME-Bewegung an. Wir suchen starke Vertriebspartner weltweit.`,
    },
    {
      name: 'Investieren Sie in GEME',
      link: 'mailto:admin@geme.bio',
      imageSrc: '/assets/images/about/icons/profits.png',
      description: `Schaffen Sie die Zukunft! Investieren Sie in GEME und schließen Sie sich einer bahnbrechenden nachhaltigen Bewegung an. (admin@geme.bio).`,
    },
  ],
}


function AboutPageDe() {
  return (
    <>
      <div className="py-8 lg:pt-6 lg:pb-16">
        <AboutHeroSection {...aboutHeroSectionProps} />
        <AboutContentSection1 {...aboutContentSection1Props} />
        <AboutContentSection15 {...aboutContentSection15Props} />
        <AboutContentSection2 {...aboutContentSection2Props} />
        <AboutContentSection4 {...aboutContentSection4Props} />
        <AboutContentSection6 {...aboutContentSection6Props} />
      </div>
    </>
  )
}

export { AboutPageDe }
