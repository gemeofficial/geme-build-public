/* eslint-disable react/no-unescaped-entities */

import {
  AboutContentSection1,
  AboutContentSection15,
  AboutContentSection2,
  AboutContentSection4,
  AboutContentSection6,
  AboutHeroSection,
  AboutLogoCloud,
} from 'ui'

import type {
  IAboutContentSection1,
  IAboutContentSection15,
  IAboutContentSection2,
  IAboutContentSection4,
  IAboutContentSection6,
  IAboutHeroSection,
  IAboutLogoCloudProps,
} from 'ui'

// about page静态页面的内容 配置文件 Fr版

// 第一部分 Fr
const aboutHeroSectionProps: IAboutHeroSection = {
  title: 'Moins de déchets, plus de vert',
  mTitle: `Le chemin de ROKH vers un avenir durable`,
  descriptionSection: (
    <div className="w-full mt-3 md:mt-5 max-w-md text-base text-v2311-text-gary md:max-w-3xl">
      <div>
        Chez ROKH, nous partageons une vision unifiée : transformer les déchets
        en ressources et créer un monde où la nature prospère aux côtés du
        progrès humain. Notre passion pour l'innovation scientifique nous pousse
        à avoir un impact positif sur le monde. En commercialisant nos solutions
        biotechnologiques révolutionnaires, nous transformons la recherche en
        avantages tangibles qui améliorent le bien-être humain et répondent aux
        défis mondiaux.
      </div>
      <div>
        <ul className="space-y-1">
          <li className="my-2">Notre équipe se compose de :</li>
          <li>
            <strong>Professionnels expérimentés</strong> : Avec plus de 20 ans
            d'expérience dans le traitement des ressources en déchets solides,
            nous apportons une expertise approfondie à notre travail.
          </li>
          <li className="md:w-[60%] lg:w-full">
            <strong>Scientifiques dévoués</strong> : Nos microbiologistes et
            agronomes explorent en permanence de nouvelles façons d'exploiter la
            nature pour une gestion durable des déchets.
          </li>
          <li className="md:w-[60%] lg:w-full">
            <strong>Rêveurs et faiseurs</strong> : Nous nous engageons à
            transformer notre vision en réalité, une solution innovante à la
            fois.
          </li>
        </ul>
      </div>
    </div>
  ),

  contactUs: 'Contactez-nous',
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

// 第二部分 Fr版
const aboutContentSection1Props: IAboutContentSection1 = {
  mTitle: 'Notre mission',
  title: 'Tout vit éternellement et en harmonie avec la Terre',
  descriptions: [
    "Les déchets alimentaires sont l'un des plus grands défis mondiaux, et nous pouvons vous aider à le résoudre ensemble. Mais il ne s'agit pas seulement de déchets alimentaires - les excréments d'animaux et tous les déchets biodégradables peuvent être efficacement décomposés.",
    'En combinant la biotechnologie avec la fabrication moderne, GEME offre une solution pour un meilleur recyclage des déchets : Réduire et Recycler sur place.',
    'Similaire au concept de cache dans les réseaux informatiques, le moyen le plus efficace de gérer les déchets, en particulier les bio-déchets, est de les traiter là où ils sont créés, raccourcissant ainsi considérablement le chemin du recyclage.',
    "GEME crée des produits pour faire de cette idée une réalité. Être respectueux de l'environnement et protéger la nature n'est pas seulement un slogan pour nous; c'est réalisable à travers chaque petit pas lorsque nous nous débarrassons de nos déchets quotidiens.",
    "GEME est plus qu'un produit; c'est une solution technologique.",
    "Nous utilisons la technologie pour créer un réseau reliant des équipes de scientifiques, des partenaires distributeurs, des restaurants durables, des communautés de recyclage, des fermes biologiques, des stations d'élimination, des organisations de gestion des déchets et des individus. Chaque nœud en bénéficie, tout comme toutes les choses vivant en harmonie sur notre planète.",
  ],
  points: [
    {
      title: 'Repenser',
      desc: 'Adoptez une vision holistique des soins environnementaux. Traitez les bio-déchets non pas comme des ordures, mais comme une ressource pour les jardins et la planète. Comprenez que nos actions ont un impact profond sur la Terre.',
    },
    {
      title: 'Réduire',
      desc: "Réduisez l'utilisation des ressources et les déchets. Suivez des pratiques durables pour économiser les ressources et protéger l'environnement. Gérez les déchets à leur source pour en réduire l'impact.",
    },
    {
      title: 'Réutiliser',
      desc: 'Recyclez, réutilisez et valorisez les matériaux. Transformez différents types de déchets en ressources utiles, prolongeant leur durée de vie et réduisant le besoin de nouveaux matériaux.',
    },
    {
      title: 'Restaurer',
      desc: 'Protégez et revitalisez les écosystèmes naturels. Améliorez la santé des sols, nettoyez la pollution et réparez les environnements endommagés pour assurer le bien-être de notre planète.',
    },
  ],
  fullImgUrl: '/assets/images/about/v2406/s2-family.png',
}

// 第三部分 Fr版
const aboutContentSection15Props: IAboutContentSection15 = {
  mTitle: 'Notre équipe',
  title: 'Esprits pionniers, cœurs passionnés',
  bodyTexts: (
    <>
      <div>
        <strong>Visionnaires</strong> : Nos dirigeants visionnaires définissent
        la direction, nous inspirant à penser au-delà de l'ordinaire et à
        remettre en question les approches conventionnelles de la gestion des
        déchets.
      </div>
      <div>
        <strong>Scientifiques</strong> : Nos brillants scientifiques sont à la
        pointe de la recherche, explorant constamment de nouvelles façons
        d'exploiter la puissance de la nature pour des solutions durables de
        gestion des déchets.
      </div>
      <div>
        <strong>Ingénieurs</strong> : Nos ingénieurs qualifiés donnent vie aux
        idées, transformant des concepts innovants en solutions tangibles qui
        font une réelle différence dans le monde.
      </div>
      <div>
        <strong>Collaborateurs</strong> : Nous favorisons un esprit de
        collaboration, encourageant la communication ouverte et l'échange
        d'idées à tous les niveaux de l'organisation.
      </div>
    </>
  ),
  mainImgUrl: '/assets/images/about/v2406/s1-birth.png',
  imgSectionUrl1: '/assets/images/about/v2406/s1-team.png',
  imgSectionUrl2: '/assets/images/about/v2406/s1-meeting.png',
  imgSectionUrl3: '/assets/images/about/v2406/s1-colleagues.png',
}

// 第四部分 Fr版
const aboutContentSection2Props: IAboutContentSection2 = {
  mTitle: 'Nos valeurs',
  title: 'Prendre le chemin le moins fréquenté',
  desc: 'Nous basons nos actions sur la vérité et les premiers principes. Avec un objectif clair en vue, nous rêvons ambitieux mais prenons des mesures calculées pour y parvenir.',
  dataList: [
    {
      title: 'Être de classe mondiale',
      desc: `Nous fixons les normes les plus élevées, poursuivant sans relâche l'excellence dans tous les aspects de notre travail, avec la durabilité au cœur.`,
    },
    {
      title: 'Ouvert et coopératif',
      desc: `Favoriser le dialogue ouvert et la collaboration pour trouver des solutions collectives. Établir de solides partenariats avec des individus, des organisations et des communautés.`,
    },
    {
      title: 'Toujours apprendre',
      desc: `Adopter la recherche de pointe pour relever les défis environnementaux. Innover et affiner continuellement nos solutions pour obtenir des résultats optimaux.`,
    },
    {
      title: 'Être solidaire',
      desc: `Cultiver un environnement de soutien où les individus se sentent valorisés, encouragés et habilités à atteindre leur plein potentiel.`,
    },
    {
      title: 'Faits et solutions',
      desc: `Élaborer des solutions efficaces non influencées par des hypothèses ou des biais, mais par les résultats expérimentaux et les données ; nous laissons les données guider notre chemin.`,
    },
    {
      title: 'Prendre ses responsabilités',
      desc: `Assurer nos engagements, notre travail est en accord avec nos valeurs et principes éthiques. Partager notre expertise et nos connaissances pour autonomiser les communautés du monde entier.`,
    },
  ],
}

// Logo Cloud Props Fr版
const aboutLogoCloudProps: IAboutLogoCloudProps = {
  mTitle: 'Notre présence médiatique',
  title: 'Petit progrès, grand impact',
}

// 第五部分 Fr版
const aboutContentSection4Props: IAboutContentSection4 = {
  mTitle: 'Nos Jalons',
  title: 'Des fondations solides, pas à pas',
  desc: `Poussés par la passion et un engagement commun envers l'excellence, nous avançons rapidement dans notre processus de développement.`,
  progressList: [
    {
      progressBarTitle: 'Juillet 2022',
      title: 'Campagne Kickstarter',
      desc: (
        <div>
          A reçu le soutien de contributeurs dans plus de 22 pays dans le monde.
        </div>
      ),
    },
    {
      progressBarTitle: 'Mars 2023',
      title: 'Entrée sur le marché américain',
      desc: 'Début des ventes aux États-Unis, lancement de la boutique Amazon autorisée.',
    },
    {
      progressBarTitle: 'Juin 2023',
      title: 'Vente en Europe',
      desc: "Première série de machines arrivant en Europe, mise en place d'un entrepôt local.",
    },
    {
      progressBarTitle: 'Janvier 2024',
      title: 'Mise à niveau du modèle GEME I',
      desc: 'Mise à niveau du matériel après un an de retour client, plus silencieux et plus robuste.',
    },
    {
      progressBarTitle: 'Septembre/Octobre 2024',
      title: 'GEME II',
      desc: 'Plus intelligent, plus pratique et plus abordable.',
    },
    {
      progressBarTitle: '2026',
      title: 'Réseau GEME',
      desc: 'Connexion des communautés, des fermes et des solutions de gestion des déchets pour la durabilité.',
    },
  ],
}

// 第六部分 Fr版
const aboutContentSection6Props: IAboutContentSection6 = {
  title: 'Devenez partenaire de GEME',
  incentives: [
    {
      name: 'Vivez avec GEME',
      link: '/product/geme',
      imageSrc: '/assets/images/about/icons/use-geme.png',
      description: (
        <>
          Sentez-vous bien, faites le bien, vivez durablement. Remplacez votre
          système d'élimination des déchets par{' '}
          <a href="/product/geme">le composteur GEME</a>.
        </>
      ),
    },
    {
      name: 'Compostage à grande échelle avec GEME',
      link: '/industrial-equipments',
      imageSrc: '/assets/images/about/icons/composting.png',
      description: `Des maisons aux usines, biotechnologie sur mesure pour un compostage industriel d'excellence.`,
    },
    {
      name: 'Rejoignez le réseau GEME',
      link: '/geme-network-survey',
      imageSrc: '/assets/images/about/icons/networking.png',
      description: `Communauté d'échange de compost gratuite ! Partagez ce dont vous n'avez pas besoin, créez ensemble un avenir plus vert.`,
    },
    {
      name: 'Affiliez-vous à GEME',
      link: '/coming-soon',
      imageSrc: '/assets/images/about/icons/affiliate-marketing.png',
      description: `Devenez un champion de GEME ! Rejoignez notre union d'affiliés et menez la révolution durable.`,
    },
    {
      name: 'Vente au détail ou distribution avec GEME',
      link: 'https://eu.jotform.com/form/221943772954062',
      imageSrc: '/assets/images/about/icons/distribution.png',
      description: `Étendez votre portée et rejoignez le mouvement GEME. Nous recherchons des distributeurs solides dans le monde entier.`,
    },
    {
      name: 'Investissez avec GEME',
      link: 'mailto:admin@geme.bio',
      imageSrc: '/assets/images/about/icons/profits.png',
      description: `Alimentez l'avenir ! Investissez dans GEME et rejoignez un mouvement durable révolutionnaire. (admin@geme.bio).`,
    },
  ],
}

function AboutPageFr() {
  return (
    <>
      <div className="py-8 lg:pt-6 lg:pb-16">
        <AboutHeroSection {...aboutHeroSectionProps} />
        <AboutContentSection1 {...aboutContentSection1Props} />
        <AboutContentSection15 {...aboutContentSection15Props} />
        <AboutContentSection2 {...aboutContentSection2Props} />
        <AboutLogoCloud {...aboutLogoCloudProps} />
        <AboutContentSection4 {...aboutContentSection4Props} />
        <AboutContentSection6 {...aboutContentSection6Props} />
      </div>
    </>
  )
}

export { AboutPageFr }
