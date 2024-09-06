/* eslint-disable react/no-unescaped-entities */
import { Faq } from 'ui'
import { IGridWithOffsetIconsLiteProps } from '../../components/feature-sections'
import EnjoyYourLife, { IEnjoyYourLifeProps } from './components/EnjoyYourLife'
import { koboldFaqPropsFr } from './components/faq-data'
import Features from './components/Features'
import FeaturesWithIcons, { FeatureIcon } from './components/FeaturesWithIcons'
import HeroSection, { IHeroSectionProps } from './components/HeroSection'

// kobold页第一部分配置项 Fr
const heroSectionProps: IHeroSectionProps = {
  title: 'GEME KOBOLD',
  description: `Le pouvoir magique de transformer les déchets biologiques en compost organique hautement actif.`,
  highlights: [
    {
      id: 1,
      title: 'Défense contre les parasites',
      description: `Gardez les plantes exemptes de maladies et de parasites.`,
      iconPath: '/assets/images/geme-kobold/highlight-icon-1.svg',
    },
    {
      id: 2,
      title: 'Boost de floraison et de fruits',
      description: `Rendez les fleurs plus parfumées, les fruits plus sucrés et les récoltes plus abondantes.`,
      iconPath: '/assets/images/geme-kobold/highlight-icon-2.svg',
    },
    {
      id: 3,
      title: 'Revitalisation des terres et des rivières',
      description: `Rendez les terres plus fertiles, les rivières plus claires et l'environnement meilleur.`,
      iconPath: '/assets/images/geme-kobold/highlight-icon-3.svg',
    },
  ],
}

// kobold页第二部分配置项 Fr
const featuresProps = {
  section1Title: 'Microbiote naturel',
  section1Description: (
    <>
      GEME-Kobold est le seul microbiote composite résistant aux hautes
      températures connu au monde, une communauté ancienne avec des décennies de
      succès évolutif. Ce n'est pas un microbe développé artificiellement mais
      un praticien de la loi de la circulation naturelle.
    </>
  ),
  section2Title: 'Unique au monde',
  section2Description: (
    <>
      Dans le système de circulation du processeur de déchets biologiques à
      haute efficacité, les déchets biologiques subissent un chauffage rapide à
      75℃, une fermentation et un séchage grâce à l'action de GEME-Kobold.
      <br />
      <br />
      Cette exposition à haute température aérobie tue les agents pathogènes
      potentiels et neutralise la nocivité des produits de fermentation.
    </>
  ),
  section3Title: 'Microbiote complexe',
  section3Description: (
    <>
      GEME-Kobold contribue de manière significative au recyclage de la matière
      organique. Il comprend 46 bactéries bacillus aérobies complexes et
      résistantes à la chaleur.
      <br />
      <br />
      En 6 à 8 heures, il peut décomposer divers déchets biologiques, produisant
      un engrais organique à haute activité. Il active également les
      microorganismes du sol et de l'eau, les régénérant.
    </>
  ),
}

// kobold页第三部分配置项 Fr
const featuresWithIconsProps: IGridWithOffsetIconsLiteProps = {
  title: 'Supériorité nutritionnelle',
  description: 'Riche en microbiote bénéfique de GEME-Kobold',
  features: [
    {
      icon: FeatureIcon(1, 'Sans pollution'),
      name: 'Sans pollution',
      description:
        'Méthodes agricoles dérivées du système de circulation naturelle.',
    },
    {
      icon: FeatureIcon(2, 'Haute sécurité'),
      name: 'Haute sécurité',
      description: `En utilisant les micro-organismes originaux dans le sol, l'écosystème ne sera pas détruit. Pas besoin de pesticides.`,
    },
    {
      icon: FeatureIcon(3, 'Forte résistance aux maladies'),
      name: 'Forte résistance aux maladies',
      description: `Les sols riches en micro-organismes bénéfiques rendent difficile l'entrée des agents pathogènes.`,
    },
    {
      icon: FeatureIcon(4, 'Amélioration de la qualité des cultures'),
      name: 'Amélioration de la qualité des cultures',
      description:
        'La pratique a prouvé que le rendement est de 20%-30% supérieur à celui des cultures chimiques.',
    },
    {
      icon: FeatureIcon(5, 'Résistant à la chaleur et au froid'),
      name: 'Résistant à la chaleur et au froid',
      description:
        'Les microbes produisent des ingrédients organiques qui activent les racines, et les cultures sont saines même par temps froid ou chaud.',
    },
    {
      icon: FeatureIcon(6, 'Rendements plus élevés'),
      name: 'Rendements plus élevés',
      description:
        'Il a meilleur goût et une meilleure valeur nutritionnelle que les cultures chimiques.',
    },
    {
      icon: FeatureIcon(7, 'Résistance aux troubles des cultures'),
      name: 'Résistance aux troubles des cultures',
      description:
        'Même avec une plantation continue, comme le sol devient sain, il est facile de surmonter les maladies et le déclin des rendements. Les bactéries nématodes (nœuds racinaires) disparaissent.',
    },
    {
      icon: FeatureIcon(8, 'Hygiène'),
      name: 'Hygiène',
      description: `GEME-Kobold est une bactérie activée à haute température de 80°C, l'environnement à haute température empêche les agents pathogènes d'entrer, créant ainsi un sol microbien hautement sécurisé.`,
    },
    {
      icon: FeatureIcon(9, 'Équilibre des champignons du sol'),
      name: 'Équilibre des champignons du sol',
      description: `GEME-Kobold contient plus de 46 bactéries du sol identifiées, qui mettent le sol en bon état plus rapidement qu'une seule bactérie du sol.`,
    },
  ],
}

// kobold页第四部分配置项 Fr
const enjoyYourLifeProps: IEnjoyYourLifeProps = {
  title: 'Essayez Kobold',
  description: (
    <>
      Arrêtez de payer des frais supplémentaires pour les engrais, de vous
      inquiéter de retourner le tas et de gaspiller vos déchets alimentaires.
      Commencez à récolter des fruits, des légumes et des fleurs sur le balcon
      et dans le jardin!
    </>
  ),
}

export function GemeKoboldPageFr() {
  return (
    <>
      <HeroSection {...heroSectionProps} />
      <Features {...featuresProps} />
      <FeaturesWithIcons {...featuresWithIconsProps} />
      <EnjoyYourLife {...enjoyYourLifeProps} />

      <div className="bg-gray-50">
        <Faq
          titleClassName="!text-xl md:!text-3xl !text-gray-900 !font-bold"
          {...koboldFaqPropsFr}
        />
      </div>
    </>
  )
}
