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
  title: 'GK Resource Recycling Technology',
  highlightTitle: 'Geregelter Kreislauf, der den Naturgesetz folgt',
  description: (
    <>
      <p>
        Verwirklichung des geschlossenen biologischen Kreislaufs „vom Land und
        zurück zum Land“.
      </p>
      <p className="mt-4">
        Realisierung der „erneuerbaren Ressourcen, der freundlicheren Umwelt,
        gesünderen Böden und sichereren Lebensmittel“.
      </p>
      <p className="mt-4">Erfolgsgarantie mit mehr als 50 Jahren Praxis.</p>
    </>
  ),
  imageAlt: 'GK Resource Recycling Technology',
}

// 第2部分配置文件 De版
const theLongTermDependenceProps: IWithSquareImagesProps = {
  title:
    'Die langfristige Abhängigkeit von Düngemitteln auf Ackerland führt zu...',
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
      name: 'Arme und degradierte Böden',
      title: 'Arme und degradierte Böden',
      imageSrc: '/assets/images/gk/s1-3.png',
      imageAlt: 'Arme und degradierte Böden',
    },
    {
      name: 'Mehr bodenübertragene Krankheiten',
      title: 'Mehr bodenübertragene Krankheiten',
      imageSrc: '/assets/images/gk/s1-4.png',
      imageAlt: 'Mehr bodenübertragene Krankheiten',
    },
  ],
  textColorClassName: '!text-gray-900',
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
                  Aktueller Bestandsteile der organischen Substanz im Boden -
                  Wie schnell sich Lebensmittelabfälle abgebaut werden?
                </h2>
                <div className="prose mt-4 text-lg text-gray-500">
                  <ul>
                    <li>
                      Internationaler Bestandsteile an gesunder organischer
                      Bodensubstanz Boden 5%
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
                    Wie lange dauert es, bis die organische Substanz im Boden um
                    0,1 % ohne Dehydrierung zunimmt?
                  </span>
                </h2>
                <div className="prose mt-4 text-lg text-gray-500">
                  <ul>
                    <li>Bei natürlicher Brache dauert es 79 Jahre.</li>
                    <li>
                      Bei Gründüngung mit frischem Gras dauert es 5 Jahre, um 6
                      Tonnen pro Acker zu erhalten.
                    </li>
                    <li>
                      Gewöhnlicher organischer Dünger benötigt 2 Jahre, um 9
                      Tonnen pro Acker zu erhalten.
                    </li>
                    <li>
                      <strong>
                        Mit GK dauert es nur 1 Jahr, um 2,4 Tonnen pro Acre zu
                        erreichen
                      </strong>
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
  title: 'Bioabfälle sind die hochwertigste Ressource für organisches Material',
  description: (
    <>
      <p>
        Das Eiweiß in 50 Millionen Tonnen Küchenabfällen entspricht der
        Eiweißproduktion von 3,3 Millionen Hektar Sojabohnen pro Jahr
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
    'Bodenverbesserungsprogramme von GK-Technology - Böden schnell wieder zum Leben bringen',
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
                  Verbesserung der organischen Substanz
                </h3>
                <p className="mt-4 text-lg text-gray-500">
                  Gleichmäßige schnell wirkende Kohlenstoff im Boden harmonieren
                  mit mineralischen Nährstoffen zur Verbesserung der
                  physikalischen und chemischen Eigenschaften des Bodens.
                </p>
                <h3 className="mt-6 text-2xl font-bold tracking-tight text-gray-900">
                  Revitalisierung hilfreichen Bakterien + pflanzenspezifischer
                  mikrobieller Komplex
                </h3>
                <p className="mt-4 text-lg text-gray-500">
                  Komplexe Mikroflora und Biostimulanzien regulieren das
                  dynamische Gleichgewicht der mikrobiellen Einheiten.
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
      Das Wachstum der Wurzeln zeigt die Wirksamkeit der
      Lebendbakterien-Gärungsdünger auf die Pflanzen-Gesundheit,
      Wachstumspotenzial, und die Verbesserung der Bodenqualität
    </>
  ),
  description2: (
    <>
      Im Vergleichsexperiment sieht man deutlich die Wirksamkeit von GK auf die
      Wiederherstellung der Bodenvitalität und die Auswirkung von
      GEME-Kobold-reichem Boden auf Pflanzenwachstum und Krankheitsresisten.
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
      Empirischer Vergleich der Behandlungen von kontaminiertem Boden und Wasser
      in Vietnam mit GEME-Kobold
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
