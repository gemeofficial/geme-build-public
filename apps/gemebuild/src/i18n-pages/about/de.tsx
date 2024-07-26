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

// 第一部分 De
const aboutHeroSectionProps: IAboutHeroSection = {
  title: 'Weniger Abfall, mehr Grün',
  mTitle: `ROKHs Weg zu einer nachhaltigen Zukunft`,
  descriptionSection: (
    <div className="w-full mt-3 md:mt-5 max-w-md text-base text-v2311-text-gary md:max-w-3xl">
      <div>
        Bei ROKH teilen wir eine einheitliche Vision: Abfall in eine Ressource
        zu verwandeln und eine Welt zu schaffen, in der die Natur neben dem
        menschlichen Fortschritt gedeiht. Unsere Leidenschaft für
        wissenschaftliche Innovation treibt uns an, einen positiven Einfluss auf
        die Welt zu haben. Durch die Kommerzialisierung unserer bahnbrechenden
        Biotechnologielösungen verwandeln wir Forschung in greifbare Vorteile,
        die das menschliche Wohlbefinden verbessern und globale
        Herausforderungen angehen.
      </div>
      <div>
        <ul className="space-y-1">
          <li className="my-2">Unser Team besteht aus:</li>
          <li>
            <strong>Erfahrene Fachleute</strong>: Mit über 20 Jahren Erfahrung
            in der Behandlung von festen Abfallressourcen bringen wir tiefes
            Fachwissen in unsere Arbeit ein.
          </li>
          <li className="md:w-[60%] lg:w-full">
            <strong>Engagierte Wissenschaftler</strong>: Unsere Mikrobiologen
            und Agronomen erforschen kontinuierlich neue Wege, die Natur für ein
            nachhaltiges Abfallmanagement zu nutzen.
          </li>
          <li className="md:w-[60%] lg:w-full">
            <strong>Träumer und Macher</strong>: Wir sind bestrebt, unsere
            Vision in die Realität umzusetzen, eine innovative Lösung nach der
            anderen.
          </li>
        </ul>
      </div>
    </div>
  ),

  contactUs: 'Kontaktieren Sie uns',
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

// 第二部分 De版
const aboutContentSection1Props: IAboutContentSection1 = {
  mTitle: 'Unsere Mission',
  title: 'Alles lebt für immer und in Harmonie mit der Erde',
  descriptions: [
    'Lebensmittelverschwendung ist eine der größten Herausforderungen der Welt, und wir können sie gemeinsam mit Ihnen lösen. Aber es geht nicht nur um Lebensmittelabfälle - auch Tierkot und alle biologisch abbaubaren Abfälle können effektiv zersetzt werden.',
    'Durch die Kombination von Biotechnologie mit moderner Fertigung bietet GEME eine Lösung für ein besseres Abfallrecycling: Reduzieren & Recyceln vor Ort.',
    'Ähnlich wie beim Cache-Konzept in Computernetzwerken ist der effizienteste Weg, Abfälle, insbesondere Bioabfälle, zu verwalten, sie dort zu verarbeiten, wo sie entstehen, was den Recyclingweg erheblich verkürzt.',
    'GEME schafft Produkte, um diese Idee Wirklichkeit werden zu lassen. Umweltfreundlichkeit und der Schutz der Natur sind für uns nicht nur ein Slogan; sie sind durch jeden kleinen Schritt bei der Entsorgung unserer täglichen Abfälle umsetzbar.',
    'GEME ist mehr als ein Produkt; es ist eine technologische Lösung.',
    'Wir nutzen Technologie, um ein Netzwerk zu schaffen, das Wissenschaftsteams, Vertriebspartner, nachhaltige Restaurants, Recyclinggemeinschaften, Bio-Bauernhöfe, Entsorgungsstationen, Abfallmanagementorganisationen und Einzelpersonen verbindet. Jeder Knotenpunkt profitiert, genau wie alle Dinge, die in Harmonie auf unserem Planeten leben.',
  ],
  points: [
    {
      title: 'Neu überdenken',
      desc: 'Einen ganzheitlichen Blick auf den Umweltschutz annehmen. Behandeln Sie Bioabfall nicht als Müll, sondern als Ressource für Gärten und den Planeten. Verstehen Sie, dass unsere Handlungen tiefgreifende Auswirkungen auf die Erde haben.',
    },
    {
      title: 'Reduzieren',
      desc: 'Reduzieren Sie den Ressourcenverbrauch und die Abfallmenge. Folgen Sie nachhaltigen Praktiken, um Ressourcen zu sparen und die Umwelt zu schützen. Handhaben Sie Abfälle an der Quelle, um ihre Auswirkungen zu verringern.',
    },
    {
      title: 'Wiederverwenden',
      desc: 'Recyceln, wiederverwenden und Materialien aufwerten. Verwandeln Sie verschiedene Arten von Abfällen in nützliche Ressourcen, verlängern Sie deren Lebensdauer und reduzieren Sie den Bedarf an neuen Materialien.',
    },
    {
      title: 'Wiederherstellen',
      desc: 'Schützen und beleben Sie natürliche Ökosysteme. Verbessern Sie die Bodengesundheit, säubern Sie Verschmutzungen und reparieren Sie beschädigte Umgebungen, um das Wohlbefinden unseres Planeten zu gewährleisten.',
    },
  ],
  fullImgUrl: '/assets/images/about/v2406/s2-family.png',
}

// 第三部分 De版
const aboutContentSection15Props: IAboutContentSection15 = {
  mTitle: 'Unsere Leute',
  title: 'Pioniergeister, leidenschaftliche Herzen',
  bodyTexts: (
    <>
      <div>
        <strong>Visionäre</strong>: Unsere visionären Führungskräfte setzen die
        Richtung, inspirieren uns, über das Gewöhnliche hinaus zu denken und
        konventionelle Ansätze zur Abfallbewirtschaftung in Frage zu stellen.
      </div>
      <div>
        <strong>Wissenschaftler</strong>: Unsere brillanten Wissenschaftler
        stehen an der Spitze der Forschung und erforschen ständig neue Wege, die
        Kraft der Natur für nachhaltige Abfalllösungen zu nutzen.
      </div>
      <div>
        <strong>Ingenieure</strong>: Unsere erfahrenen Ingenieure setzen Ideen
        in die Tat um, verwandeln innovative Konzepte in greifbare Lösungen, die
        einen echten Unterschied in der Welt machen.
      </div>
      <div>
        <strong>Kooperationspartner</strong>: Wir fördern einen Geist der
        Zusammenarbeit, ermutigen zu offener Kommunikation und zum Austausch von
        Ideen auf allen Ebenen der Organisation.
      </div>
    </>
  ),
  mainImgUrl: '/assets/images/about/v2406/s1-birth.png',
  imgSectionUrl1: '/assets/images/about/v2406/s1-team.png',
  imgSectionUrl2: '/assets/images/about/v2406/s1-meeting.png',
  imgSectionUrl3: '/assets/images/about/v2406/s1-colleagues.png',
}

// 第四部分 De版
const aboutContentSection2Props: IAboutContentSection2 = {
  mTitle: 'Unsere Werte',
  title: 'Den weniger begangenen Weg gehen',
  desc: 'Wir basieren unser Handeln auf Wahrheit und grundlegenden Prinzipien. Mit einem klaren Ziel vor Augen träumen wir ehrgeizig, aber gehen kalkulierte Schritte, um es zu erreichen.',
  dataList: [
    {
      title: 'Weltklasse sein',
      desc: `Wir setzen die höchsten Standards und streben unermüdlich nach Exzellenz in allen Aspekten unserer Arbeit, wobei Nachhaltigkeit im Mittelpunkt steht.`,
    },
    {
      title: 'Offen und kooperativ',
      desc: `Förderung eines offenen Dialogs und Zusammenarbeit, um kollektive Lösungen zu finden. Aufbau starker Partnerschaften mit Einzelpersonen, Organisationen und Gemeinschaften.`,
    },
    {
      title: 'Ständig lernen',
      desc: `Annahme modernster Forschung zur Bewältigung ökologischer Herausforderungen. Ständige Innovation und Verfeinerung unserer Lösungen, um optimale Ergebnisse zu erzielen.`,
    },
    {
      title: 'Unterstützend sein',
      desc: `Förderung einer unterstützenden Umgebung, in der sich Einzelpersonen ermächtigt, wertgeschätzt und ermutigt fühlen, ihr volles Potenzial zu erreichen.`,
    },
    {
      title: 'Fakten und Lösungen',
      desc: `Entwicklung effektiver Lösungen, die nicht durch Annahmen oder Vorurteile beeinflusst werden, sondern durch Versuchsergebnisse und Daten; wir lassen uns von den Daten leiten.`,
    },
    {
      title: 'Verantwortung übernehmen',
      desc: `Sicherstellung unserer Verpflichtungen, unsere Arbeit steht im Einklang mit unseren Werten und ethischen Prinzipien. Teilen unseres Fachwissens und unserer Kenntnisse, um Gemeinschaften weltweit zu stärken.`,
    },
  ],
}

// 第五部分 De版
const aboutContentSection4Props: IAboutContentSection4 = {
  mTitle: 'Unsere Meilensteine',
  title: 'Solide Grundlagen, Schritt für Schritt',
  desc: 'Angetrieben von Leidenschaft und einem gemeinsamen Engagement für Exzellenz, bewegen wir uns zügig durch unseren Entwicklungsprozess.',
  progressList: [
    {
      progressBarTitle: 'Juli 2022',
      title: 'Kickstarter-Kampagne',
      desc: (
        <div>
          Unterstützung von Unterstützern aus über 22 Ländern weltweit erhalten.
        </div>
      ),
    },
    {
      progressBarTitle: 'März 2023',
      title: 'Markteintritt in den USA',
      desc: 'Beginn des Verkaufs in den USA, autorisierter Amazon-Shop gestartet.',
    },
    {
      progressBarTitle: 'Juni 2023',
      title: 'Verkauf in Europa',
      desc: 'Erste Maschinencharge landet in Europa, lokales Lager eingerichtet.',
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
      title: 'GEME-Netzwerk',
      desc: 'Verbindung von Gemeinschaften, Bauernhöfen und Abfalllösungen für Nachhaltigkeit.',
    },
  ],
}

// 第六部分 De版
const aboutContentSection6Props: IAboutContentSection6 = {
  title: 'Partner mit GEME',
  incentives: [
    {
      name: 'Mit GEME leben',
      link: '/product/geme',
      imageSrc: '/assets/images/about/icons/use-geme.png',
      description: (
        <>
          Fühlen Sie sich gut, tun Sie Gutes, leben Sie nachhaltig. Ersetzen Sie
          Ihre Müllentsorgung durch <a href="/product/geme">GEME-Komposter</a>.
        </>
      ),
    },
    {
      name: 'Großflächiges Kompostieren mit GEME',
      link: '/industrial-equipments',
      imageSrc: '/assets/images/about/icons/composting.png',
      description: `Von Häusern bis zu Fabriken, maßgeschneiderte Biotechnologie für industrielle Kompostierung auf höchstem Niveau.`,
    },
    {
      name: 'Teilnehmen am GEME-Netzwerk',
      link: '/geme-network-survey',
      imageSrc: '/assets/images/about/icons/networking.png',
      description: `Kostenlose Komposttauschgemeinschaft! Teilen Sie, was Sie nicht benötigen, und schaffen Sie gemeinsam eine grünere Zukunft.`,
    },
    {
      name: 'Mit GEME affiliieren',
      link: '/coming-soon',
      imageSrc: '/assets/images/about/icons/affiliate-marketing.png',
      description: `Werden Sie ein GEME-Champion! Treten Sie unserer Affiliate-Union bei und führen Sie die nachhaltige Revolution an.`,
    },
    {
      name: 'Mit GEME Einzelhandel oder Vertrieb',
      link: 'https://eu.jotform.com/form/221943772954062',
      imageSrc: '/assets/images/about/icons/distribution.png',
      description: `Erweitern Sie Ihre Reichweite und treten Sie der GEME-Bewegung bei. Wir suchen weltweit starke Vertriebspartner.`,
    },
    {
      name: 'Mit GEME investieren',
      link: 'mailto:admin@geme.bio',
      imageSrc: '/assets/images/about/icons/profits.png',
      description: `Treiben Sie die Zukunft an! Investieren Sie in GEME und schließen Sie sich einer bahnbrechenden nachhaltigen Bewegung an. (admin@geme.bio).`,
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
