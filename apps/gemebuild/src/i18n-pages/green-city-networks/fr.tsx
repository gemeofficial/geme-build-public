/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import GcnCustomizedDevelopment, {
  IGcnCustomizedDevelopmentProps,
} from './components/GcnCustomizedDevelopment'
import GcnIntelligentManagementApp from './components/GcnIntelligentManagementApp'
import HeroSection, { IGCNHeroSectionProps } from './components/HeroSection'
import { IAlternativeSideBySideWithImagesProps } from '../../components/feature-sections'

// 第1部分配置文件 Fr版
const gcnHeroSectionMessagesObj: IGCNHeroSectionProps = {
  title: 'Solution totale de séparation des déchets intelligente',
  description:
    'Plateforme de gestion du recyclage intelligente AI + Système de gestion des Big Data',
  subDescription1: (
    <>
      <strong className="flex-1 text-left ">
        Plateforme de gestion intelligente GCN
      </strong>
      <strong className="flex-1 text-left lg:text-right">
        Application de gestion intelligente GCN
      </strong>
    </>
  ),
  subDescription2: (
    <>
      <p className="mt-4 text-lg text-gray-500">
        GreenCityNetworks (GCN) est notre plateforme de gestion des déchets et
        la plateforme commune qui combine toutes nos solutions.
      </p>
      <p className="mt-4 text-lg text-gray-500">
        GCN fournit un environnement de surveillance, un tableau de bord
        intelligent, un centre d'analyse et de contrôle dans un package complet
        et simple.
      </p>
      <p className="mt-4 text-lg text-gray-500">
        Basé sur l'internet mobile, les big data, l'IoT, le cloud computing et
        l'intelligence artificielle, GCN peut être utilisé partout où vous avez
        un terminal de bureau ou mobile avec une connexion internet.
      </p>
      <p className="mt-4 text-lg text-gray-500">
        Il vous donne un contrôle complet et une vue d'ensemble de vos
        opérations de gestion des déchets et prouve les avantages de la
        réduction des coûts dans tous vos départements opérationnels.
      </p>
    </>
  ),
}

// 第2部分配置文件 Fr版
const gcnIntelligentManagementAppProps: IAlternativeSideBySideWithImagesProps =
  {
    textAndImageblocks: [
      {
        name: 'Application de gestion intelligente GCN',
        LeftBlock: () => (
          <>
            <div className="mx-auto max-w-xl px-4 sm:px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
              <div>
                <div className="mt-6">
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                    <span className="text-emerald-600">GCN</span> Application de
                    gestion intelligente
                  </h2>
                  <p className="mt-4 text-lg text-gray-500">
                    Le personnel opérationnel peut facilement le réaliser via
                    l'application de gestion du tri à tout moment et en tout
                    lieu.
                  </p>
                  <div className="mt-4 text-lg prose text-gray-500">
                    <ul>
                      <li>
                        Activation des équipements, inspection et surveillance
                      </li>
                      <li>Enlèvement des déchets</li>
                      <li>Rapport de panne</li>
                      <li>Acquisition et analyse de données</li>
                    </ul>
                  </div>
                  <p className="mt-4 text-lg text-gray-500">
                    En même temps, il s'intègre à d'autres systèmes pour obtenir
                    divers rapports de données de gestion des déchets, ce qui
                    peut améliorer globalement l'efficacité des gestionnaires
                    opérationnels. Laissez le soleil vous aider à compresser les
                    déchets!
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
              src="/assets/images/green-city-networks/s2-1.png"
              alt="un écran de l'application de gestion intelligente GCN"
            />
          </>
        ),
      },
    ],
  }

// 第3部分配置文件 Fr版
const gcnCustomizedDevelopmentProps: IGcnCustomizedDevelopmentProps = {
  title: (
    <>
      <span className="text-emerald-600">GCN</span> Développement personnalisé
    </>
  ),
  subTitle: 'Développement intelligent de la plateforme de gestion/application',
  description: (
    <>
      <p className="mt-3 text-lg text-gray-500">
        Répondez à vos besoins individuels en matière de fonctionnalité
        <br></br>
        Créez une expérience utilisateur fluide grâce à des applications natives
        ou HTML5 développées sur IOS/ANDROID
      </p>
      <h3 className="mt-6 text-xl font-bold tracking-tight text-gray-900">
        Collocation visuelle personnalisée
      </h3>
      <p className="mt-3 text-lg text-gray-500">
        Les modèles personnalisés vous permettent de créer une plateforme de
        gestion personnalisée en faisant glisser et déposer librement
      </p>
      <h3 className="mt-6 text-xl font-bold tracking-tight text-gray-900">
        Modèles standardisés de l'industrie
      </h3>
      <p className="mt-3 text-lg text-gray-500">
        Les modèles standardisés de l'industrie sont des modèles professionnels
        pour l'industrie de la gestion intelligente des déchets, offrant un
        soutien complet, sûr et stable, et un cycle de livraison court
      </p>
      <h3 className="mt-6 text-xl font-bold tracking-tight text-gray-900">
        Fonction puissante d'analyse des données
      </h3>
      <p className="mt-3 text-lg text-gray-500">
        Rendre les opérations de gestion des déchets plus précises
      </p>
    </>
  ),
  imageAlt: 'Réseau de la ville verte GEME',
}

export function GreenCityNetworksPageFr() {
  return (
    <>
      <HeroSection {...gcnHeroSectionMessagesObj} />
      <GcnIntelligentManagementApp {...gcnIntelligentManagementAppProps} />
      <GcnCustomizedDevelopment {...gcnCustomizedDevelopmentProps} />
    </>
  )
}
