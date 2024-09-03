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
  mTitle: `Der Weg von ROKH zu einer nachhaltigen Zukunft`,
  descriptionSection: (
    <div className="w-full mt-3 md:mt-5 max-w-md text-base text-v2311-text-gary md:max-w-3xl">
      <div>
        Wir, bei ROKH, haben eine gemeinsame Vision: Wir wollen Abfall in eine
        Ressource umwandeln und eine Welt schaffen, in der die Natur mit dem
        menschlichen Fortschritt zusammenwächst. Unsere Passion für
        wissenschaftliche Innovationen bringt uns dazu, die Welt positiv zu
        beeinflussen. Durch die Kommerzialisierung unserer innovativen
        biotechnologischen Lösungen verwirklichen wir Forschungsergebnisse, die
        das menschliche Wohlbefinden verbessern und globale Herausforderungen
        angehen.
      </div>
      <div>
        <ul className="space-y-1">
          <li className="my-2">Unser Team besteht aus:</li>
          <li>
            <strong>Erfahrenen Fachleuten</strong>: Mit mehr als 20 Jahren
            Erfahrung in der Verarbeitung fester Abfallressourcen bringen wir
            fundierte Fachkenntnisse in unsere Arbeit ein.
          </li>
          <li className="md:w-[60%] lg:w-full">
            <strong>Engagierten Wissenschaftlern</strong>: Unsere Mikrobiologen
            und Agronomen erforschen ständig neue Wege, um eine nachhaltige
            Abfallwirtschaft zu verwirklichen.
          </li>
          <li className="md:w-[60%] lg:w-full">
            <strong>Träumer und Macher</strong>: Wir setzen uns dafür ein,
            unsere Visionen in die Realität umzusetzen, eine innovative Lösung
            nach der anderen.
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
    'Lebensmittelabfälle sind eine der größten Herausforderungen der Welt, und wir tragen gemeinsam mit Ihnen dazu bei, dieses Problem zu lösen. Aber es sind nicht nur Lebensmittelabfälle - auch Tierkot und alle biologisch abbaubaren Abfälle, die effektiv zersetzt werden können.',
    'Durch die Kombination von Biotechnologie und moderner Produktion bietet GEME eine Lösung für ein besseres Abfallrecycling: Direkt-Reduzieren und Recyceln am Ort.',
    'Wie beim Cache-Konzept in Computernetzwerken, die effizienteste Art um Abfälle, insbesondere Bioabfälle, zu verwalten, ist dort zu verarbeiten, wo sie entstehen, um den Recyclingweg erheblich zu verkürzen.',
    'GEME entwickelt Produkte, die diese Idee in die Tat umsetzen. Umweltfreundlich zu sein und die Natur zu schützen ist für uns nicht nur ein Slogan, sondern in jedem kleinen Schritt, den wir bei der Entsorgung unseres täglichen Abfalls machen, umsetzbar.',
    'GEME ist mehr als ein Produkt, sondern eine technologische Lösung.',
    'Wir verwenden Technologien, um ein Netzwerk aus Wissenschaftlerteams, Vertriebspartner, nachhaltige Restaurants, Recyclinggemeinschaften, Biobetriebe, Entsorgungsstationen, Abfallwirtschaftsorganisationen und Einzelpersonen zu schaffen. Jeder Stakeholder profitiert davon, und ermöglicht Harmonie.',
  ],
  points: [
    {
      title: 'Neues Konzept',
      desc: 'EineÜbernehmen Sie eine neue Sichtweise des Umweltschutzes. Behandeln Sie Bioabfälle nicht als Müll, sondern als Ressource für den Garten und den Planeten. Dieses Verhalten hat  tiefgreifende Auswirkungen auf die Erde.',
    },
    {
      title: 'Reduzierung ',
      desc: 'Reduzieren Sie Ressourcenverbrauch und Abfall. Nachhaltige Praktiken sparen Ressourcen und schützen die Umwelt. Verarbeitung des Abfalls an der Quelle, verringert seine negativen Auswirkungen.',
    },
    {
      title: 'Recycling',
      desc: 'Verschiedene Arten von Abfällen werden in nützliche Ressourcen umwandelt, sodass der Bedarf an neuen Materialien aufgrund der verlängerten Lebensdauer verringert wird.',
    },
    {
      title: 'Wiederherstellen',
      desc: 'Schützen Sie natürliche Ökosysteme und revitalisieren Sie sie wieder. Die Bodengesundheit wird verbessert, die Verschmutzungen werden beseitigt und die beschädigten Umgebungen werden repariert, sodass das Wohlergehen unseres Planeten gewährleistet wird.',
    },
  ],
  fullImgUrl: '/assets/images/about/v2406/s2-family.png',
}

// 第三部分 De版
const aboutContentSection15Props: IAboutContentSection15 = {
  mTitle: 'Unsere Mitarbeiter',
  title: 'Pioniergeister, leidenschaftliche Herzen',
  bodyTexts: (
    <>
      <div>
        <strong>Visionäre</strong>: Unsere visionären Führungskräfte geben die
        Richtung vor und inspirieren uns dazu, über das Gewöhnliche
        hinauszudenken und konventionelle Ansätze in der Abfallwirtschaft in
        Frage zu stellen.
      </div>
      <div>
        <strong>Wissenschaftler</strong>: Unsere brillanten Wissenschaftler
        stehen an der Spitze der Forschung und erforschen ständig neue
        nachhaltige Abfalllösungen mithilfe von der Kraft der Natur.
      </div>
      <div>
        <strong>Ingenieure</strong>: Unsere qualifizierten Ingenieure setzen
        Ideen in Produkt und innovative Konzepte in greifbare Lösungen und
        Produkten um, die einen echten Unterschied in der Welt machen.
      </div>
      <div>
        <strong>Kooperationspartner</strong>: Wir ermutigen den Geist der
        Zusammenarbeit, indem wir eine offene Kommunikation und den Austausch
        von Ideen auf allen Ebenen des Unternehmens unterstützen.
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
  desc: 'Wir richten unser Verhalten auf Wahrheit und Prinzipien. Wie träumen ambitioniert aber gehen kalkulierte Schritte, um die klaren Ziele zu erreichen.',
  dataList: [
    {
      title: 'Weltklasse sein',
      desc: `Wir setzen die höchsten Standard und streben in allen Aspekten unserer Arbeit unermüdlich nach Spitzenleistungen, mit Nachhaltigkeit im Mittelpunkt.`,
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
      name: 'Großflächenkompostierung mit GEME',
      link: '/industrial-equipments',
      imageSrc: '/assets/images/about/icons/composting.png',
      description: `Vom Haus bis zur Fabrik: Passende Biotechnologie für die Kompostierung im industriellen Maßstab`,
    },
    {
      name: 'Sei Mitglied im GEME Networking',
      link: '/geme-network-survey',
      imageSrc: '/assets/images/about/icons/networking.png',
      description: `Kostenlose Kompost-Tauschbörse! Tauschen Sie, was Sie nicht brauchen, und bauen Sie gemeinsam an einer grüneren Zukunft.`,
    },
    {
      name: 'Mit GEME affiliieren',
      link: '/coming-soon',
      imageSrc: '/assets/images/about/icons/affiliate-marketing.png',
      description: `Werden Sie ein GEME-Champion! Treten Sie unserer Affiliate-Union bei und führen Sie die nachhaltige Revolution an.`,
    },
    {
      name: 'Einzelhandeln oder Vertrieb',
      link: 'https://eu.jotform.com/form/221943772954062',
      imageSrc: '/assets/images/about/icons/distribution.png',
      description: `Erweitern Sie Ihre Reichweite und schließen Sie sich der GEME Bewegung an. Wir verstäken uns weltweit mit Vertriebspartnern.`,
    },
    {
      name: 'GEME investieren',
      link: 'mailto:admin@geme.bio',
      imageSrc: '/assets/images/about/icons/profits.png',
      description: `Treibe die Zukunft an! Investieren Sie in GEME und werden Sie Teil einer zukunftsweisenden, nachhaltigen Bewegung. (admin@geme.bio).`,
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
