/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import { IAlternativeSideBySideWithImagesProps } from '../../components/feature-sections'
import { IWithSquareImagesProps } from '../../components/product-features'
import CurrentStatus from './components/CurrentStatus'
import HeroSection, { IGKHeroSectionProps } from './components/HeroSection'
import TheLongTermDependence from './components/TheLongTermDependence'
import OrganicWaste from './components/OrganicWaste'
import { IThreeColumnWithDescriptionProps } from '../../components/category-previews'
import SoilImprovement from './components/SoilImprovement'
import EmpiricalComparison, {
  IEmpiricalComparisonProps,
} from './components/EmpiricalComparison'

// 第1部分配置文件 De版
const gkHeroSectionProps: IGKHeroSectionProps = {
  title: 'GK Ressourcenkreislauf-Technologie',
  highlightTitle: 'Ordentlicher Kreislauf, der den Gesetzen der Natur folgt',
  description: (
    <>
      <p>
        Verwirklichen Sie den geschlossenen Betrieb des biologischen Kreislaufs
        "vom Land und zurück zum Land"
      </p>
      <p className="mt-4">
        Verwirklichen Sie "erneuerbare Ressourcen, freundlichere Umwelt,
        gesündere Böden und sicherere Lebensmittel".
      </p>
      <p className="mt-4">
        Es wurde nach mehr als 50 Jahren Praxis erfolgreich verifiziert
      </p>
    </>
  ),
  imageAlt: 'GK Ressourcenkreislauf-Technologie',
}

// 第2部分配置文件 De版
const theLongTermDependenceProps: IWithSquareImagesProps = {
  title: 'Die langfristige Abhängigkeit von Düngemitteln auf Ackerland hat zu',
  features: [
    {
      name: 'Bodenversauerung',
      title: 'Bodenversauerung',
      imageSrc: '/assets/images/gk/s1-1.png',
      imageAlt: 'Bodenversauerung',
    },
    {
      name: 'Sekundäre Versalzung',
      title: 'Sekundäre Versalzung',
      imageSrc: '/assets/images/gk/s1-2.png',
      imageAlt: 'Sekundäre Versalzung',
    },
    {
      name: 'Boden ist arm und degradiert',
      title: 'Boden ist arm und degradiert',
      imageSrc: '/assets/images/gk/s1-3.png',
      imageAlt: 'Boden ist arm und degradiert',
    },
    {
      name: 'Zunahme bodenbürtiger Krankheiten',
      title: 'Zunahme bodenbürtiger Krankheiten',
      imageSrc: '/assets/images/gk/s1-4.png',
      imageAlt: 'Zunahme bodenbürtiger Krankheiten',
    },
  ],
}

// 第3部分配置文件 De版
const currentStatusProps: IAlternativeSideBySideWithImagesProps = {
  textAndImageblocks: [
    {
      name: 'Aktueller Status',
      LeftBlock: () => (
        <>
          <div className="mx-auto max-w-xl px-4 sm:px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
            <div>
              <div className="mt-6">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                  Aktueller Status des Gehalts an organischer Substanz im Boden
                  <span>wie schnell sich Lebensmittelabfälle zersetzen</span>
                </h2>
                <div className="prose mt-4 text-lg text-gray-500">
                  <ul>
                    <li>
                      Internationaler gesunder Gehalt an organischer Substanz im
                      Boden 5%
                    </li>
                    <li>Japan 6%</li>
                    <li>USA 5%</li>
                    <li>Europa 4%</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </>
      ),
      RightBlock: () => (
        <>
          <Image
            className="relative mx-auto"
            width={490}
            height={490}
            src="/assets/images/gk/s2-1.png"
            alt="GEME GK recycling technology"
          />
        </>
      ),
    },
    {
      name: 'Angetrieben von Biotechnologie',
      LeftBlock: () => (
        <>
          <div className="mx-auto max-w-xl px-4 sm:px-6 lg:col-start-2 lg:mx-0 lg:max-w-none lg:py-32 lg:px-0">
            <div>
              <div className="mt-6">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                  <span className="block text-gray-900 xl:inline">
                    Wie lange dauert es, bis der Gehalt an organischer Substanz
                    im Boden um 0,1% steigt?
                  </span>
                  <span>keine Dehydrierung</span>
                </h2>
                <div className="prose mt-4 text-lg text-gray-500">
                  <ul>
                    <li>Unter natürlicher Brache dauert es 79 Jahre</li>
                    <li>
                      Grüner Dünger frisches Gras benötigt 5 Jahre, um 6 Tonnen
                      pro Acre hinzuzufügen
                    </li>
                    <li>
                      Gewöhnlicher organischer Dünger benötigt 2 Jahre, um 9
                      Tonnen pro Acre hinzuzufügen
                    </li>
                    <li>
                      GK benötigt 1 Jahr, um 2,4 Tonnen pro Acre hinzuzufügen
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </>
      ),
      RightBlock: () => (
        <>
          <Image
            className="relative mx-auto"
            width={490}
            height={490}
            src="/assets/images/gk/s2-2.png"
            alt="GEME GK recycling technology"
          />
        </>
      ),
    },
  ],
}

// 第4部分配置文件 De版
const organicWasteProps: IThreeColumnWithDescriptionProps = {
  title: 'Organische Abfälle sind die hochwertigste organische Materie',
  description: (
    <>
      <p>
        Bioabfall, insbesondere Küchenabfall, ist die hochwertigste organische
        Materie
      </p>
      <p>
        Das in 50 Millionen Tonnen Küchenabfall enthaltene Protein entspricht
        der Proteinproduktion von 3,3 Millionen Hektar Sojabohnen pro Jahr
      </p>
    </>
  ),
  imageAspectClassName: 'aspect-w-1 aspect-h-1 ',
  categories: [
    {
      name: 'Bioabfall',
      imageSrc: '/assets/images/gk/s4-1.png',
      imageAlt: 'Bioabfall',
    },
    {
      name: 'GEME & GEME-Kobold',
      imageSrc: '/assets/images/gk/s4-2.png',
      imageAlt: 'GEME & GEME-Kobold',
    },
    {
      name: 'Organischer Dünger',
      imageSrc: '/assets/images/gk/s4-3.png',
      imageAlt: 'Organischer Dünger',
    },
  ],
}

// 第5部分配置文件 De版
const soilImprovementProps: IAlternativeSideBySideWithImagesProps = {
  title:
    'Bodenverbesserungsprogramme der GK-Technologie - Bringen Sie den Boden schnell wieder zum Leben',
  description:
    'GK-Bodensanierung/-verbesserung, Bodenverbesserung Gesamtkonzept Kernlösung:',
  textAndImageblocks: [
    {
      name: 'Join the movement',
      LeftBlock: () => (
        <>
          <div className="mx-auto max-w-xl px-4 sm:px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
            <div>
              <div className="mt-6">
                <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                  Organische Materialverbesserung
                </h3>
                <p className="mt-4 text-lg text-gray-500">
                  Schnell wirkender Kohlenstoff und stabiler Kohlenstoff wirken
                  mit Mineralnährstoffen zusammen, um die physikalischen und
                  chemischen Eigenschaften des Bodens zu verbessern
                </p>
                <h3 className="mt-6 text-2xl font-bold tracking-tight text-gray-900">
                  Revitalisierung von nützlichen Bakterien +
                  pflanzenspezifischer mikrobieller Komplex
                </h3>
                <p className="mt-4 text-lg text-gray-500">
                  Komplexe Mikroflora und Biostimulanzien regulieren das
                  dynamische Gleichgewicht der mikrobiellen Gemeinschaften
                </p>
              </div>
            </div>
          </div>
        </>
      ),
      RightBlock: () => (
        <>
          <Image
            className="relative mx-auto"
            width={490}
            height={490}
            src="/assets/images/gk/s5-1.gif"
            alt="GK Bodenverbesserung"
          />
        </>
      ),
    },
  ],
}

// 第6部分配置文件 De版
const empiricalComparisonProps: IEmpiricalComparisonProps = {
  title: (
    <>
      Empirischer Vergleich vor und nach der GK-Bodensanierung/-verbesserung und
      Bodenverbesserung
    </>
  ),
  description1: (
    <>
      Die Wachstumsverteilung der Wurzeln kann nicht nur bestimmen, wie effektiv
      der lebende Bakterienfermentationsdünger für die Gesundheit und das
      Wachstum der Pflanze ist, sondern auch die Verbesserung der Bodenqualität
      sehen
    </>
  ),
  description2: (
    <>
      Im Vergleichsexperiment können Sie deutlich die Wirksamkeit von GK bei der
      Wiederherstellung der Bodenlebendigkeit und der Förderung von
      GEME-Kobold-reichem Boden auf Pflanzenwachstum und Krankheitsresistenz
      beobachten
    </>
  ),
  pictureDescription1: 'Linkes Bild: Versuchsgruppe mit GK-Technologie',
  pictureSubDescription2:
    'Rechtes Bild: Kontrollgruppe mit herkömmlicher Anbaumethode',
  featuresImage: {
    width: 280,
    height: 150,
  },
  features: [
    {
      name: 'Keimlingsstadium',
      imageSrc: '/assets/images/gk/s6-1.png',
      imageAlt: 'Bodenversauerung',
    },
    {
      name: '2 Wochen nach der Aussaat',
      imageSrc: '/assets/images/gk/s6-2.png',
      imageAlt: 'Sekundäre Versalzung',
    },
    {
      name: '1 Monat nach der Aussaat',
      imageSrc: '/assets/images/gk/s6-3.png',
      imageAlt: 'Boden ist schlecht und degradiert',
    },
    {
      name: 'Feldvergleich',
      imageSrc: '/assets/images/gk/s6-4.png',
      imageAlt: 'Boden ist schlecht und degradiert',
    },
  ],
}

// 第7部分配置文件 De版

const empiricalComparison2Props: IEmpiricalComparisonProps = {
  title: (
    <>
      Empirischer Vergleich der kontaminierten Boden- und Wasserbehandlung in
      Vietnam mit GEME-Kobold
    </>
  ),
  featuresImage: {
    width: 592,
    height: 236,
  },
  features: [
    {
      name: 'Vorher vs. Nachher',
      title: 'Vorher vs. Nachher',
      imageSrc: '/assets/images/gk/s7-1.png',
      imageAlt: 'Vorher vs. Nachher',
    },
    {
      name: 'Vorher vs. Nachher',
      title: 'Vorher vs. Nachher',
      imageSrc: '/assets/images/gk/s7-2.png',
      imageAlt: 'Vorher vs. Nachher 2',
    },
  ],
}

export function GKPageDe() {
  return (
    <>
      <HeroSection {...gkHeroSectionProps} />
      <TheLongTermDependence {...theLongTermDependenceProps} />
      <CurrentStatus {...currentStatusProps} />
      <OrganicWaste {...organicWasteProps} />
      <SoilImprovement {...soilImprovementProps} />
      <EmpiricalComparison
        {...empiricalComparisonProps}
        grayBackground={false}
      />
      <EmpiricalComparison
        {...empiricalComparison2Props}
        grayBackground={true}
        gridClassName="grid-cols-1 lg:grid-cols-2"
      />
    </>
  )
}
