/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import { IManualsPageProps } from '../manual'
import { IManualHeroSectionProps } from '../manual/components/HeroSection'
import GEMESolarPoweredTrashCompactor, {
  IGEMESolarPoweredTrashCompactorProps,
} from './components/GEMESolarPoweredTrashCompactor'
import HeroSection from './components/HeroSection'
import Link from 'next/link'
import TheFirstChoiceForSmartCities, {
  featureIcon as TheFirstChoiceForSmartCitiesIcon,
} from './components/TheFirstChoiceForSmartCities'
import ProductFeatures, {
  featureIcon as ProductFeaturesIcon,
} from './components/ProductFeatures'
import ProductOptions, {
  featureIcon as productOptionsIcon,
} from './components/ProductOptions'
import { IGridWithOffsetIconsProps } from '../../components/feature-sections'
import MultipleCombinations, {
  IMultipleCombinationsProps,
} from './components/MultipleCombinations'

// 第1部分配置文件 De版
const solarCompactorHeroSectionProps: IManualHeroSectionProps = {
  title: 'Solarverdichter',
  description: (
    <>
      <p>
        Die Lösung von GEME Solarverdichter besteht darin, die branchenführende
        cloudbasierte Software zur Abfallsortierung und -sammlung zu nutzen, die
        mit den neuesten IoT-Sensoren und der Technologie von intelligenten
        Mülleimern verbunden ist, um eine umfassende intelligente
        Abfallmanagementlösung bereitzustellen.
      </p>
      <p className="mt-3">Unsere umfassende Produktlinie umfasst:</p>
      <div className="prose prose-ul:text-lg prose-ul:text-gray-500 prose-ul:text-left">
        <ul className="mt-3">
          <li>Solarverdichter (SolarCompactor).</li>
          <li>Abfallanalyseplattform (GreenCityNetworks)</li>
        </ul>
      </div>
    </>
  ),
  primaryButtonLabel: `Lass uns reden`,
  secondaryButtonLabel: 'Kontakt aufnehmen',
  buttonLn: true,
}

// 第2部分配置文件 De版
const GEMESolarPoweredTrashCompactorProps: IGEMESolarPoweredTrashCompactorProps =
  {
    textAndImageblocks: [
      {
        name: 'solarbetriebener Müllverdichter',
        RightBlock: () => (
          <>
            <Image
              className="relative mx-auto"
              width={490}
              height={490}
              src="/assets/images/solar-compactor/s2-1.png"
              alt="solar compactor on street"
            />
          </>
        ),
        LeftBlock: () => (
          <>
            <div className="mx-auto max-w-xl px-4 sm:px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
              <div>
                <div className="mt-6">
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                    <span>Natürlich</span> GEME solarbetriebener Müllverdichter
                  </h2>
                  <p className="mt-4 text-lg text-gray-500">
                    Lassen Sie die Sonne Ihnen helfen, den Müll zu verdichten!
                  </p>
                  <p className="mt-4 text-lg text-gray-500">
                    Reduzieren Sie das Müllvolumen um das Fünffache, und die
                    Kosten für Müllreinigung und -transport werden um bis zu 80
                    % gesenkt
                  </p>
                </div>
              </div>
            </div>
          </>
        ),
      },
      {
        name: 'Die erste Wahl für intelligente Städte',
        RightBlock: () => (
          <>
            <Image
              className="relative mx-auto"
              width={450}
              height={310}
              src="/assets/images/solar-compactor/s2-2.png"
              alt="solar compactor on street"
            />
          </>
        ),
        LeftBlock: () => (
          <>
            <div className="mx-auto max-w-xl px-4 sm:px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
              <div>
                <div className="mt-6">
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                    Die erste Wahl für intelligente Städte
                  </h2>
                  <p className="mt-4 text-lg text-gray-500">
                    Das{' '}
                    <strong className="font-bold text-emerald-600">
                      GreenCityNetworks(GCN)
                    </strong>{' '}
                    -System sammelt und analysiert Daten in Echtzeit, um die
                    Transportfrequenz automatisch zuzuweisen und Fahrzeugrouten
                    zu planen. Effiziente Energieeinsparung und
                    Emissionsreduzierung GEME solarbetriebener Müllverdichter
                  </p>
                  <div className="mt-6">
                    <Link
                      href="/green-city-networks"
                      passHref
                      className="inline-flex rounded-md border border-transparent bg-v2311-bg-dark-green hover:bg-v2311-primary px-4 py-2 text-base font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                    >
                      Grüne Stadtnetzwerke (GCN)
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </>
        ),
      },
    ],
  }

// 第3部分配置文件 De版
const theFirstChoiceForSmartCitiesProps = {
  title: 'Der Beginn Ihrer grünen Stadt',
  features: [
    {
      name: 'Betriebsabläufe optimieren und Effizienz steigern',
      description: (
        <>
          <ul>
            <li>
              Reduzieren Sie die Sammlungen durchschnittlich um bis zu 80 %
            </li>
            <li>
              Fundierte Entscheidungsfindung und Betriebsplanung mit
              Echtzeitdaten und Analysen im GCN-System, erhöhte Produktivität
              und Routen-Effizienz
            </li>
          </ul>
        </>
      ),
      icon: TheFirstChoiceForSmartCitiesIcon(1),
    },
    {
      name: 'Verschönern Sie Ihre Stadt und verbessern Sie die Lebensqualität',
      description: (
        <>
          <ul>
            <li>
              Verabschieden Sie sich von der Beseitigung von sichtbarem Abfall,
              verwehtem Müll, Überläufen und Tierzugang
            </li>
            <li>Abschied von Müllwagenverkehr, Lärm und Staus</li>
            <li>Willkommen in sauberen Straßen, schönen Gemeinden</li>
          </ul>
        </>
      ),
      icon: TheFirstChoiceForSmartCitiesIcon(2),
    },
    {
      name: 'Umweltfreundlich und reduzierter CO2-Fußabdruck',
      description: (
        <>
          <ul>
            <li>Reduzieren Sie die Zeiten für Reinigungsfahrten</li>
            <li>Reduzieren Sie den Kraftstoffverbrauch</li>
            <li>Reduzieren Sie Emissionen</li>
            <li>Reduzieren Sie die Verschmutzung</li>
            <li>Reduzieren Sie den CO2-Fußabdruck</li>
            <li>
              Angetrieben von Solarenergie, saubere Energie, keine Emissionen
            </li>
          </ul>
        </>
      ),
      icon: TheFirstChoiceForSmartCitiesIcon(3),
    },
  ],
}

// 第4部分配置文件 De版
const productFeaturesProps = {
  title: 'Produkteigenschaften',
  featureNameWrapperClassName: 'lg:min-h-[48px] ',
  features: [
    {
      name: 'Bis zu 5 Mal mehr Abfall',
      icon: ProductFeaturesIcon(1),
    },
    {
      name: 'Angetrieben durch Solarenergie',
      icon: ProductFeaturesIcon(2),
    },
    {
      name: 'Eingebettetes zentrales Steuerungssystem',
      icon: ProductFeaturesIcon(3),
    },
    {
      name: 'Erinnerung an die volle Eimerquote',
      icon: ProductFeaturesIcon(4),
    },
    {
      name: 'Sicherheits-Sensoren',
      icon: ProductFeaturesIcon(5),
    },
    {
      name: 'Gesamtwasserdicht-Funktion',
      icon: ProductFeaturesIcon(6),
    },
    {
      name: 'Eingangsport-Indikator',
      icon: ProductFeaturesIcon(7),
    },
    {
      name: 'Eingangsport-Antiklemmvorrichtung',
      icon: ProductFeaturesIcon(8),
    },
    {
      name: 'Automatische Induktionstüröffnung',
      icon: ProductFeaturesIcon(9),
    },
    {
      name: 'Drahtlose Datenübertragung',
      icon: ProductFeaturesIcon(10),
    },
    {
      name: 'GPS-Standortverfolgung',
      icon: ProductFeaturesIcon(11),
    },
    {
      name: 'Kompatibel mit Rollbehältern',
      icon: ProductFeaturesIcon(12),
    },
  ],
}

// 第5部分配置文件 De版
const productOptionsProps: IGridWithOffsetIconsProps = {
  title: 'Produktoptionen',
  features: [
    {
      name: 'Größe',
      description: (
        <ul>
          <li>
            120 L / 32 gal. <br /> Kompatibel mit Rollbehältern
          </li>
          <li>
            240 L / 64 gal. <br /> Kompatibel mit Rollbehältern
          </li>
          <li>
            360 L / 95 gal. <br /> Kompatibel mit Rollbehältern
          </li>
        </ul>
      ),
      icon: productOptionsIcon(1),
    },
    {
      name: 'Stromversorgung',
      description: (
        <ul>
          <li>
            Solar <br /> Nur Solarenergie
          </li>
          <li>
            AC-Stecker <br /> Nur Wechselstrom
          </li>
          <li>
            Hybrid <br /> Sowohl Solar- als auch Wechselstrom
          </li>
        </ul>
      ),
      icon: productOptionsIcon(2),
    },
    {
      name: 'Öffnung',
      description: (
        <ul>
          <li>
            Allgemein <br /> Automatische Induktionstüröffnung
          </li>
          <li>
            Recycling <br /> Eingang für das Einwerfen von Flaschen
          </li>
          <li>
            Recycling <br /> Eingang für das Einwerfen von Papier
          </li>
        </ul>
      ),
      icon: productOptionsIcon(3),
    },
  ],
}

// 第6部分配置文件 De版
const multipleCombinationsProps: IMultipleCombinationsProps = {
  title: 'Mehrfachkombinationen',
  description: '',
  categories: [
    {
      name: 'Flaschenabfälle, anderer Müll und Papierabfälle',
      imageSrc: '/assets/images/solar-compactor/s6-1-1130.png',
      imageAlt:
        'Der Solarverdichter mit Flaschenabfällen, anderem Müll und Papierabfällen',
      imageClassName: '!object-contain',
    },
    {
      name: 'Flaschenabfälle und anderer Müll',
      imageSrc: '/assets/images/solar-compactor/s6-2-1130.png',
      imageAlt: 'Der Solarverdichter mit Flaschenabfällen und anderem Müll',
      imageClassName: '!object-contain',
    },
    {
      name: 'Anderer Müll und Papierabfälle',
      imageSrc: '/assets/images/solar-compactor/s6-3-1130.png',
      imageAlt: 'Der Solarverdichter mit anderem Müll und Papierabfällen',
      imageClassName: '!object-contain',
    },
  ],
}

export function SolarCompactorPageDe({
  PrefetchLink,
  WhatsAppBusinessAccountURL,
}: IManualsPageProps) {
  return (
    <>
      <HeroSection
        {...solarCompactorHeroSectionProps}
        PrefetchLink={PrefetchLink}
        WhatsAppBusinessAccountURL={WhatsAppBusinessAccountURL}
      />
      <GEMESolarPoweredTrashCompactor
        {...GEMESolarPoweredTrashCompactorProps}
      />
      <TheFirstChoiceForSmartCities {...theFirstChoiceForSmartCitiesProps} />
      <ProductFeatures {...productFeaturesProps} />
      <ProductOptions {...productOptionsProps} />
      <MultipleCombinations {...multipleCombinationsProps} />
    </>
  )
}
