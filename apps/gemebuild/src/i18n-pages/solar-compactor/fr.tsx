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

// 第1部分配置文件 Fr版
const solarCompactorHeroSectionProps: IManualHeroSectionProps = {
  title: 'Compacteur solaire',
  description: (
    <>
      <p>
        La solution de GEME Compacteur Solaire est d'utiliser le logiciel de
        gestion de collecte de classification des déchets basé sur le cloud,
        connecté aux derniers capteurs intelligents IoT et à la technologie des
        poubelles intelligentes, pour fournir une solution complète de gestion
        des déchets intelligents.
      </p>
      <p className="mt-3">Notre gamme de produits complète comprend :</p>
      <div className="prose prose-ul:text-lg prose-ul:text-gray-500 prose-ul:text-left">
        <ul className="mt-3">
          <li>Compacteur solaire (SolarCompactor).</li>
          <li>Plateforme d'analyse des déchets (GreenCityNetworks)</li>
        </ul>
      </div>
    </>
  ),
  primaryButtonLabel: `Parlons-en`,
  secondaryButtonLabel: 'Contactez-nous',
  buttonLn: true,
}

// 第2部分配置文件 Fr版
const GEMESolarPoweredTrashCompactorProps: IGEMESolarPoweredTrashCompactorProps =
  {
    textAndImageblocks: [
      {
        name: 'compacteur de déchets solaire',
        RightBlock: () => (
          <>
            <Image
              className="relative mx-auto"
              width={490}
              height={490}
              src="/assets/images/solar-compactor/s2-1.png"
              alt="compacteur solaire dans la rue"
            />
          </>
        ),
        LeftBlock: () => (
          <>
            <div className="mx-auto max-w-xl px-4 sm:px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
              <div>
                <div className="mt-6">
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                    <span>Naturel</span> Compacteur de déchets solaire GEME
                  </h2>
                  <p className="mt-4 text-lg text-gray-500">
                    Laissez le soleil vous aider à compacter les déchets !
                  </p>
                  <p className="mt-4 text-lg text-gray-500">
                    Réduisez le volume des déchets par 5 et les coûts de
                    nettoyage et de transport des déchets jusqu'à 80 %
                  </p>
                </div>
              </div>
            </div>
          </>
        ),
      },
      {
        name: 'Le premier choix pour les villes intelligentes',
        RightBlock: () => (
          <>
            <Image
              className="relative mx-auto"
              width={450}
              height={310}
              src="/assets/images/solar-compactor/s2-2.png"
              alt="compacteur solaire dans la rue"
            />
          </>
        ),
        LeftBlock: () => (
          <>
            <div className="mx-auto max-w-xl px-4 sm:px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
              <div>
                <div className="mt-6">
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                    Le premier choix pour les villes intelligentes
                  </h2>
                  <p className="mt-4 text-lg text-gray-500">
                    Le{' '}
                    <strong className="font-bold text-emerald-600">
                      GreenCityNetworks(GCN)
                    </strong>{' '}
                    système collecte et analyse les données en temps réel pour
                    allouer automatiquement la fréquence de transport et
                    planifier les itinéraires des véhicules. Économie d'énergie
                    efficace et réduction des émissions Compacteur de déchets
                    solaire GEME
                  </p>
                  <div className="mt-6">
                    <Link
                      href="/fr/green-city-networks"
                      passHref
                      className="inline-flex rounded-md border border-transparent bg-v2311-bg-dark-green hover:bg-v2311-primary px-4 py-2 text-base font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                    >
                      Réseaux de Villes Vertes (GCN)
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

// 第3部分配置文件 Fr版
const theFirstChoiceForSmartCitiesProps = {
  title: 'Le début de votre ville verte',
  features: [
    {
      name: "Rationaliser les opérations et améliorer l'efficacité",
      description: (
        <>
          <ul>
            <li>Réduire les collectes jusqu'à 80% en moyenne</li>
            <li>
              Prise de décision éclairée et planification opérationnelle avec
              des données et des analyses en temps réel dans le système GCN,
              productivité accrue et efficacité des itinéraires
            </li>
          </ul>
        </>
      ),
      icon: TheFirstChoiceForSmartCitiesIcon(1),
    },
    {
      name: 'Embellez votre ville et améliorez la qualité de vie',
      description: (
        <>
          <ul>
            <li>
              Dites adieu à l'élimination des déchets visibles, des détritus
              soufflés par le vent, des débordements et de l'accès des animaux
            </li>
            <li>
              Adieu au trafic des camions de déchets, au bruit et à la
              congestion
            </li>
            <li>
              Bienvenue dans des rues propres, des communautés magnifiques
            </li>
          </ul>
        </>
      ),
      icon: TheFirstChoiceForSmartCitiesIcon(2),
    },
    {
      name: "Respectueux de l'environnement et réduction de l'empreinte carbone",
      description: (
        <>
          <ul>
            <li>Réduire les temps des expéditions de nettoyage</li>
            <li>Réduire la consommation de carburant</li>
            <li>Réduire les émissions</li>
            <li>Réduire la pollution</li>
            <li>Réduire l'empreinte carbone</li>
            <li>
              Alimenté par l'énergie solaire, énergie propre, sans émissions
            </li>
          </ul>
        </>
      ),
      icon: TheFirstChoiceForSmartCitiesIcon(3),
    },
  ],
}

// 第4部分配置文件 Fr版
const productFeaturesProps = {
  title: 'Caractéristiques du produit',
  featureNameWrapperClassName: 'lg:min-h-[48px] ',
  features: [
    {
      name: "Jusqu'à 5 fois plus de déchets",
      icon: ProductFeaturesIcon(1),
    },
    {
      name: "Alimenté par l'énergie solaire",
      icon: ProductFeaturesIcon(2),
    },
    {
      name: 'Système de contrôle central intégré',
      icon: ProductFeaturesIcon(3),
    },
    {
      name: 'Rappel du taux de remplissage du seau',
      icon: ProductFeaturesIcon(4),
    },
    {
      name: 'Capteurs de sécurité',
      icon: ProductFeaturesIcon(5),
    },
    {
      name: 'Fonction étanche globale',
      icon: ProductFeaturesIcon(6),
    },
    {
      name: "Indicateur de port d'entrée",
      icon: ProductFeaturesIcon(7),
    },
    {
      name: "Dispositif anti-pincement du port d'entrée",
      icon: ProductFeaturesIcon(8),
    },
    {
      name: 'Ouverture automatique de la porte à induction',
      icon: ProductFeaturesIcon(9),
    },
    {
      name: 'Transmission de données sans fil',
      icon: ProductFeaturesIcon(10),
    },
    {
      name: 'Suivi de localisation GPS',
      icon: ProductFeaturesIcon(11),
    },
    {
      name: 'Compatible avec les bacs roulants',
      icon: ProductFeaturesIcon(12),
    },
  ],
}

// 第5部分配置文件 Fr版
const productOptionsProps: IGridWithOffsetIconsProps = {
  title: 'Options de produit',
  features: [
    {
      name: 'Taille',
      description: (
        <ul>
          <li>
            120 L / 32 gal. <br /> Compatible avec les bacs roulants
          </li>
          <li>
            240 L / 64 gal. <br /> Compatible avec les bacs roulants
          </li>
          <li>
            360 L / 95 gal. <br /> Compatible avec les bacs roulants
          </li>
        </ul>
      ),
      icon: productOptionsIcon(1),
    },
    {
      name: 'Puissance',
      description: (
        <ul>
          <li>
            Solaire <br /> Alimentation solaire uniquement
          </li>
          <li>
            Prise CA <br /> Alimentation CA uniquement
          </li>
          <li>
            Hybride <br /> Alimentation solaire et CA
          </li>
        </ul>
      ),
      icon: productOptionsIcon(2),
    },
    {
      name: 'Ouverture',
      description: (
        <ul>
          <li>
            Général <br /> Ouverture automatique de la porte à induction
          </li>
          <li>
            Recyclage <br /> Entrée pour déposer les bouteilles
          </li>
          <li>
            Recyclage <br /> Entrée pour déposer le papier
          </li>
        </ul>
      ),
      icon: productOptionsIcon(3),
    },
  ],
}

// 第6部分配置文件 Fr版
const multipleCombinationsProps: IMultipleCombinationsProps = {
  title: 'Multiples combinaisons',
  description: '',
  categories: [
    {
      name: 'Déchets de bouteilles, autres ordures et déchets de papier',
      imageSrc: '/assets/images/solar-compactor/s6-1-1130.png',
      imageAlt:
        "Le compacteur solaire avec des déchets de bouteilles, d'autres ordures et des déchets de papier",
      imageClassName: '!object-contain',
    },
    {
      name: 'Déchets de bouteilles et autres ordures',
      imageSrc: '/assets/images/solar-compactor/s6-2-1130.png',
      imageAlt:
        "Le compacteur solaire avec des déchets de bouteilles et d'autres ordures",
      imageClassName: '!object-contain',
    },
    {
      name: 'Autres ordures et déchets de papier',
      imageSrc: '/assets/images/solar-compactor/s6-3-1130.png',
      imageAlt:
        "Le compacteur solaire avec d'autres ordures et des déchets de papier",
      imageClassName: '!object-contain',
    },
  ],
}

export function SolarCompactorPageFr({
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
