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

// 第1部分配置文件 Fr版
const gkHeroSectionProps: IGKHeroSectionProps = {
  title: 'Technologie de recyclage des ressources GK',
  highlightTitle: 'Cycle ordonné qui suit les lois de la nature',
  description: (
    <>
      <p>
        Réaliser le fonctionnement en boucle fermée du cycle biologique "de la
        terre et de retour à la terre"
      </p>
      <p className="mt-4">
        Réaliser des "ressources renouvelables, un environnement plus convivial,
        un sol plus sain et une nourriture plus sûre".
      </p>
      <p className="mt-4">
        Il a été vérifié avec succès après plus de 50 ans de pratique
      </p>
    </>
  ),
  imageAlt: 'Technologie de recyclage des ressources GK',
}

// 第2部分配置文件 Fr版
const theLongTermDependenceProps: IWithSquareImagesProps = {
  title:
    'La dépendance à long terme aux engrais sur les terres arables a conduit à',
  features: [
    {
      name: 'Acidification des sols',
      title: 'Acidification des sols',
      imageSrc: '/assets/images/gk/s1-1.png',
      imageAlt: 'Acidification des sols',
    },
    {
      name: 'Salinisation secondaire',
      title: 'Salinisation secondaire',
      imageSrc: '/assets/images/gk/s1-2.png',
      imageAlt: 'Salinisation secondaire',
    },
    {
      name: 'Les sols sont pauvres et dégradés',
      title: 'Les sols sont pauvres et dégradés',
      imageSrc: '/assets/images/gk/s1-3.png',
      imageAlt: 'Les sols sont pauvres et dégradés',
    },
    {
      name: 'Augmentation des maladies transmises par le sol',
      title: 'Augmentation des maladies transmises par le sol',
      imageSrc: '/assets/images/gk/s1-4.png',
      imageAlt: 'Augmentation des maladies transmises par le sol',
    },
  ],
}

// 第3部分配置文件 Fr版
const currentStatusProps: IAlternativeSideBySideWithImagesProps = {
  textAndImageblocks: [
    {
      name: 'Rejoindre le mouvement',
      LeftBlock: () => (
        <>
          <div className="mx-auto max-w-xl px-4 sm:px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
            <div>
              <div className="mt-6">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                  État actuel de la matière organique du sol
                  <span>
                    la rapidité de la décomposition des déchets alimentaires
                  </span>
                </h2>
                <div className="prose mt-4 text-lg text-gray-500">
                  <ul>
                    <li>
                      Teneur en matière organique des sols sains à
                      l'international 5%
                    </li>
                    <li>Japon 6%</li>
                    <li>États-Unis 5%</li>
                    <li>Europe 4%</li>
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
      name: 'Propulsé par la biotechnologie',
      LeftBlock: () => (
        <>
          <div className="mx-auto max-w-xl px-4 sm:px-6 lg:col-start-2 lg:mx-0 lg:max-w-none lg:py-32 lg:px-0">
            <div>
              <div className="mt-6">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                  <span className="block text-gray-900 xl:inline">
                    Combien de temps faut-il pour que la matière organique du
                    sol augmente de 0,1%?
                  </span>
                  <span>pas de déshydratation</span>
                </h2>
                <div className="prose mt-4 text-lg text-gray-500">
                  <ul>
                    <li>En jachère naturelle, il faut 79 ans</li>
                    <li>
                      Les engrais verts frais mettent 5 ans pour ajouter 6
                      tonnes par acre
                    </li>
                    <li>
                      Les engrais organiques ordinaires mettent 2 ans pour
                      ajouter 9 tonnes par acre
                    </li>
                    <li>
                      Avec GK, il faut 1 an pour ajouter 2,4 tonnes par acre
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

// 第4部分配置文件 Fr版
const organicWasteProps: IThreeColumnWithDescriptionProps = {
  title:
    'Les déchets organiques sont la ressource organique de la plus haute qualité',
  description: (
    <>
      <p>
        Les biodéchets, en particulier les déchets de cuisine, sont la ressource
        organique de la plus haute qualité
      </p>
      <p>
        Les protéines contenues dans chaque 50 millions de tonnes de déchets de
        cuisine équivalent à la production de protéines de 3,3 millions d'acres
        de soja par an
      </p>
    </>
  ),
  imageAspectClassName: 'aspect-w-1 aspect-h-1 ',
  categories: [
    {
      name: 'Biodéchets',
      imageSrc: '/assets/images/gk/s4-1.png',
      imageAlt: 'Biodéchets',
    },
    {
      name: 'GEME & GEME-Kobold',
      imageSrc: '/assets/images/gk/s4-2.png',
      imageAlt: 'GEME & GEME-Kobold',
    },
    {
      name: 'Engrais organique',
      imageSrc: '/assets/images/gk/s4-3.png',
      imageAlt: 'Engrais organique',
    },
  ],
}

// 第5部分配置文件 Fr版
const soilImprovementProps: IAlternativeSideBySideWithImagesProps = {
  title: `Programmes d'amélioration des sols de la technologie GK - Ramenez les sols à la vie rapidement`,
  description: `Réhabilitation/amélioration des sols GK, solution centrale pour l'amélioration globale des sols :`,
  textAndImageblocks: [
    {
      name: 'Join the movement',
      LeftBlock: () => (
        <>
          <div className="mx-auto max-w-xl px-4 sm:px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
            <div>
              <div className="mt-6">
                <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                  Amélioration de la matière organique
                </h3>
                <p className="mt-4 text-lg text-gray-500">
                  Le carbone à action rapide et le carbone à l'état stable
                  agissent en synergie avec les nutriments minéraux pour
                  améliorer les propriétés physiques et chimiques des sols
                </p>
                <h3 className="mt-6 text-2xl font-bold tracking-tight text-gray-900">
                  Revitalisation des bactéries bénéfiques + complexe microbien
                  spécifique aux cultures
                </h3>
                <p className="mt-4 text-lg text-gray-500">
                  La microflore complexe et les biostimulants régulent
                  l'équilibre dynamique des communautés microbiennes
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
            alt="Amélioration des sols GK"
          />
        </>
      ),
    },
  ],
}

// 第6部分配置文件 Fr版
const empiricalComparisonProps: IEmpiricalComparisonProps = {
  title: (
    <>
      Comparaison empirique avant et après la réhabilitation/amélioration du sol
      GK et l'amélioration du sol
    </>
  ),
  description1: (
    <>
      La répartition de la croissance des racines peut non seulement déterminer
      l'efficacité de l'engrais de fermentation de bactéries vivantes sur la
      santé et la croissance des cultures, mais aussi observer l'amélioration de
      la qualité du sol
    </>
  ),
  description2: (
    <>
      Dans l'expérience comparative, vous pouvez clairement observer
      l'efficacité de GK sur la restauration de la vitalité du sol et la
      promotion du sol riche en GEME-Kobold sur la croissance des plantes et la
      résistance aux maladies
    </>
  ),
  pictureDescription1:
    'Image de gauche : groupe expérimental utilisant la technologie GK',
  pictureSubDescription2:
    'Image de droite : groupe témoin utilisant la méthode de plantation conventionnelle',
  featuresImage: {
    width: 280,
    height: 150,
  },
  features: [
    {
      name: 'Stade de semis',
      imageSrc: '/assets/images/gk/s6-1.png',
      imageAlt: 'Acidification du sol',
    },
    {
      name: '2 semaines après le semis',
      imageSrc: '/assets/images/gk/s6-2.png',
      imageAlt: 'Salinisation secondaire',
    },
    {
      name: '1 mois après le semis',
      imageSrc: '/assets/images/gk/s6-3.png',
      imageAlt: 'Le sol est pauvre et dégradé',
    },
    {
      name: 'Comparaison sur le terrain',
      imageSrc: '/assets/images/gk/s6-4.png',
      imageAlt: 'Le sol est pauvre et dégradé',
    },
  ],
}

// 第7部分配置文件 Fr版
const empiricalComparison2Props: IEmpiricalComparisonProps = {
  title: (
    <>
      Comparaison empirique du traitement des sols contaminés et de l'eau au
      Vietnam utilisant GEME-Kobold
    </>
  ),
  featuresImage: {
    width: 592,
    height: 236,
  },
  features: [
    {
      name: 'Avant vs Après',
      title: 'Avant vs Après',
      imageSrc: '/assets/images/gk/s7-1.png',
      imageAlt: 'Avant vs Après',
    },
    {
      name: 'Avant vs Après',
      title: 'Avant vs Après',
      imageSrc: '/assets/images/gk/s7-2.png',
      imageAlt: 'Avant vs Après 2',
    },
  ],
}

export function GKPageFr() {
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
