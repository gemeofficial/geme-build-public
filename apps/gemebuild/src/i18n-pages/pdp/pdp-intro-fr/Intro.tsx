/* eslint-disable react/no-unescaped-entities */
import {
  PdpIntroSection1,
  PdpIntroSection3,
  PdpIntroSection4,
  ContentSection7,
  ContentSection2,
  PdpIntroSection5,
  PdpIntroSection6,
  PdpIntroSection7,
  ContentSection8,
  PdpIntroSection8,
  usingCompostIcons,
  ScrollTriggeredAnimatedOxygenCycle,
  SvgOxygen,
  SvgFoodWaste,
  SvgWood,
  SvgWaterDrop,
  SvgTemperature,
  SvgMicrobe,
} from 'ui'
import type {
  IPdpIntroSection1Props,
  IPdpIntroSection3Props,
  IContentSection7Props,
  IContentSection2Props,
  IPdpIntroSection5Props,
  IPdpIntroSection6Props,
  IPdpIntroSection7Props,
  IContentSection8Props,
  IPdpIntroSection8Props,
  IOxygenCycleProps,
  ICompareSectionProps,
} from 'ui'
import CompareSection from 'ui/src/compare-section/CompareSection'

const pdpIntroSection1Props: IPdpIntroSection1Props = {
  title: 'Le premier composteur de biodéchets au monde',
  description:
    'Utilisez le microbiote pour décomposer rapidement les déchets alimentaires, 100 fois plus rapide que le compostage traditionnel, complètement différent des « composteurs » électriques déshydratants de comptoir.',
  bgImageSrc:
    '/assets/images/pdp-v2311/dividers/geme-with-compost-background-min.jpg',
  comparisonText: {
    brfore: 'Avant',
    after: 'Après',
  },
  bottomItems: [
    { id: 1, description: 'Répartition par microbes' },
    { id: 2, description: 'Pas par déshydratation' },
    { id: 3, description: 'Tas de compost dans la boîte' },
  ],
}

const oxygenCycleProps: IOxygenCycleProps = {
  title: 'Étapes nécessaires pour un véritable processus de compostage',
  progresses: [
    {
      minProgress: 12.5,
      content: (
        <>
          <SvgFoodWaste className="w-8 h-8 md:w-16 md:h-16" />
          <h3 className=" v2311-font-body !text-[11px] md:!text-[24px] md:!v2311-font-h3 text-v2311-primary font-bold text-center mt-2 md:mt-4 ">
            Nutriments
            <br />
            (déchets alimentaires)
          </h3>
          <p className="hidden lg:block v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 text-xs !text-[10px] md:!text-base">
            Les micro-organismes ont besoin de C, N, de phosphore (P) et de
            potassium (K) comme principaux nutriments. Le rapport C:N des
            matières premières est important. Le rapport C:N optimal des
            matières premières se situe entre 25:1 et 30:1.
          </p>
          <p className="hidden xl:block v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 text-xs !text-[10px] md:!text-base">
            Lorsque le ratio est trop élevé, la croissance des micro-organismes
            est limitée, ce qui entraîne un temps de compostage plus long. Un
            rapport C:N inférieur conduit à une sous-utilisation de N et les
            odeurs peuvent être un problème.
          </p>
          <p className=" v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 text-xs !text-[10px] md:!text-base ">
            GEME Composter et GEME Kobold s'occupent automatiquement du rapport
            C:N pour vous.
          </p>
        </>
      ),
    },
    {
      minProgress: 25,
      content: (
        <>
          <SvgOxygen className="w-8 h-8 md:w-16 md:h-16" />
          <h3 className=" v2311-font-body !text-[11px] md:!text-[24px] md:!v2311-font-h3 text-v2311-primary font-bold text-center mt-2 md:mt-4 ">
            Compostage Aérobie:
            <br />
            Cycle Naturel des Nutriments
          </h3>
          <p className="hidden lg:block v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 text-xs !text-[10px] md:!text-base ">
            Le compostage aérobie décompose la matière organique en utilisant de
            l'oxygène ( O<sub>2</sub> ), nécessitant des microbes aérobies pour
            décomposer les matériaux en vapeur d'eau, chaleur et humus riche en
            nutriments. Le composteur GEME simplifie ce processus avec un
            système d'aération efficace, optimisant le flux d'oxygène pour une
            décomposition efficace.
          </p>
          <p className="lg:hidden v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 text-xs !text-[10px] md:!text-base ">
            Décompose les déchets organiques avec de l'oxygène ( O<sub>2</sub> )
            pour obtenir des nutriments précieux. Le composteur GEME simplifie
            cela avec un système d'aération efficace pour une décomposition plus
            rapide.
          </p>
        </>
      ),
    },
    {
      minProgress: 40,
      content: (
        <>
          <SvgWood className="w-8 h-8 md:w-16 md:h-16" />
          <h3 className=" v2311-font-body !text-[11px] md:!text-[24px] md:!v2311-font-h3 text-v2311-primary font-bold text-center mt-2 md:mt-4 ">
            Matières brunes dans le compostage: assurer des conditions optimales
          </h3>
          <p className="hidden lg:block  v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 text-xs !text-[10px] md:!text-base ">
            Les matières brunes, riches en carbone, jouent un rôle crucial dans
            le compostage en équilibrant le rapport carbone-azote (C:N),
            essentiel à l'activité microbienne. Leur structure améliore la
            porosité et favorise la décomposition aérobie. Le starter GEME
            Kobold, contenant des matières brunes soigneusement sélectionnées,
            garantit un rapport C:N équilibré et des conditions de compostage
            optimales.
          </p>
          <p className="lg:hidden v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 text-xs !text-[10px] md:!text-base ">
            Les matières brunes, riches en carbone, équilibrent le rapport C:N
            pour les microbiens. Leur structure favorise la circulation de
            l'air. Le starter GEME Kobold fournit ces matières brunes pour des
            conditions parfaites.
          </p>
        </>
      ),
    },
    {
      minProgress: 60,
      content: (
        <>
          <SvgWaterDrop className="w-8 h-8 md:w-16 md:h-16" />
          <h3 className=" v2311-font-body !text-[11px] md:!text-[24px] md:!v2311-font-h3 text-v2311-primary font-bold text-center mt-2 md:mt-4 ">
            Humidité : Le secret du
            <br />
            compostage rapide
          </h3>
          <p className="hidden lg:block v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 text-xs !text-[10px] md:!text-base ">
            L'humidité est cruciale pour la décomposition. La plage idéale ?
            40-60 %. Cela favorise les microbes et accélère la décomposition.
            Trop d'humidité (&gt;70 %) crée des odeurs, trop peu (&lt;30 %)
            inhibe les microbes.
          </p>
          <p className="hidden lg:block v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 text-xs !text-[10px] md:!text-base ">
            Le composteur GEME simplifie la gestion de l'humidité. Son contrôle
            intelligent maintient automatiquement 40-60 % pour un compost
            efficace et de haute qualité.
          </p>
          <p className="lg:hidden v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 text-xs !text-[10px] md:!text-base ">
            La bonne humidité (40-60%) nourrit les microorganismes qui
            décomposent les déchets. Trop humide (&gt;70%) crée des odeurs et
            ralentit le processus. Trop sec (&lt;30%) rend les microorganismes
            paresseux. GEME gère l'humidité pour un compostage parfait.
          </p>
        </>
      ),
    },
    {
      minProgress: 78,
      content: (
        <>
          <SvgTemperature className="w-8 h-8 md:w-16 md:h-16" />
          <h3 className=" v2311-font-body !text-[11px] md:!text-[24px] md:!v2311-font-h3 text-v2311-primary font-bold text-center mt-2 md:mt-4 ">
            Compostage : Une Danse
            <br />
            de Température
          </h3>
          <p className="hidden lg:block v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 text-xs !text-[10px] md:!text-base ">
            Le compostage transforme les déchets en sol riche en nutriments
            grâce aux variations de température dues à l'activité microbienne.
            Au début, les microbes chauffent le compost à 40-50°C. Pendant la
            phase de décomposition maximale, les températures montent à 50-65°C
            pour une décomposition rapide. À maturité, le compost se refroidit à
            30-40°C.
          </p>
          <p className="hidden lg:block v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 text-xs !text-[10px] md:!text-base ">
            GEME optimise ce processus en régulant la température à chaque
            étape, garantissant un compostage efficace et un compost de haute
            qualité.
          </p>
          <p className="lg:hidden v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 text-xs !text-[10px] md:!text-base ">
            Le compostage transforme les déchets en sol riche en nutriments
            grâce aux variations de température provoquées par l'activité
            microbienne. GEME améliore ce processus en contrôlant les
            températures à chaque étape, garantissant ainsi un compostage
            efficace et de haute qualité.
          </p>
        </>
      ),
    },
    {
      minProgress: 100,
      content: (
        <>
          <SvgMicrobe className="w-8 h-8 md:w-16 md:h-16" />
          <h3 className=" v2311-font-body !text-[11px] md:!text-[24px] md:!v2311-font-h3 text-v2311-primary font-bold text-center mt-2 md:mt-4 ">
            Micro-organismes
            <br />
            (GEME Kobold)
          </h3>
          <p className="hidden lg:block v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 text-xs !text-[10px] md:!text-base ">
            Le compostage est un processus naturel décomposé par des
            micro-organismes qui transforment les déchets organiques en
            amendements de sol riches en nutriments. Les champignons s'attaquent
            aux matériaux durs comme la cellulose, tandis que d'autres
            micro-organismes décomposent d'autres matières organiques. GEME
            Kobold, une équipe microbienne unique et résistante à la chaleur,
            accélère le compostage.
          </p>
          <p className="lg:hidden v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 text-xs !text-[10px] md:!text-base ">
            Recyclage naturel: les microbes décomposent les déchets en
            amendements du sol riches en nutriments. Les champignons s'attaquent
            aux matériaux résistants, tandis que les autres s'occupent du reste.
            GEME Kobold, une équipe microbienne résistante à la chaleur,
            accélère le compostage.
          </p>
        </>
      ),
    },
  ],
}

const pdpIntroSection3Props: IPdpIntroSection3Props = {
  title: '6-8 heures',
}

const contentSection71Props: IContentSection7Props = {
  title: 'Du déchet à l’émerveillement',
  description:
    'Plongeons-nous dans les petits super-héros qui créent un impact significatif : les microbes (GEME Kobold). Semblables aux microbes amicaux facilitant la digestion dans votre intestin, avec des conditions idéales et un mélange régulier, ils transforment rapidement les restes de nourriture en compost organique.',

  withImageOrVideo: {
    type: 'video',
    videoProps: {
      sources: [
        {
          minWidth: 0,
          src: 'https://www-geme-bio-us.s3.us-west-1.amazonaws.com/how-geme-kobold-eat-food-waste-480p.mp4',
        },
      ],
    },
  },
  bottomContent: <PdpIntroSection3 {...pdpIntroSection3Props} />,
  isDisplayTextOnLeft: true,
}

const contentSection72Props: IContentSection7Props = {
  title: 'Fonctionnement silencieux',
  description:
    'GAME Niveau sonore autour de 35-45 dB, le composteur le plus silencieux du marché.',
  withImageOrVideo: {
    type: 'image',
    imageSrc: '/assets/images/pdp-v2311/introduction/geme-silent.jpg',
    imageAlt: 'photo de gaspillage alimentaire',
  },
  bottomContent: <PdpIntroSection4 />,
}

const contentSection21Props: IContentSection2Props = {
  title: `Continuez à jeter les déchets, GEME s'occupe du reste`,
  description: (
    <>
      🫳&nbsp;&nbsp;Ajoutez des déchets à tout moment <br />
      🫷&nbsp;&nbsp;Pas besoin d'appuyer sur des boutons <br />
      🕓&nbsp;&nbsp;Pas besoin d'attendre des cycles <br />
      🤗&nbsp;&nbsp;Courbe d'apprentissage nulle <br />
      🚮&nbsp;&nbsp;Comme une poubelle ordinaire
    </>
  ),
  imageSrc:
    '/assets/images/pdp-v2311/introduction/geme-take-care-of-the-rest.jpg',
  imageAlt: 'GEME prend soin de votre gaspillage alimentaire',
  isDisplayTextOnLeft: true,
}

const contentSection22Props: IContentSection2Props = {
  title:
    'Élimination des déchets innovante basée sur des microbes, fonctionne rapidement et en toute sécurité',
  description: (
    <>
      🔥&nbsp;&nbsp;Pas de déshydratation, c'est du vrai compostage <br />
      🚰&nbsp;&nbsp;Pas de déchiquetage, plus d'évier bouché
      <br />
      🌿&nbsp;&nbsp;Pas de green washing, une véritable solution écologique
    </>
  ),
  imageSrc: '/assets/images/pdp-v2311/introduction/geme-garbage-disposal.jpg',
  imageAlt: 'photo de gaspillage alimentaire',
}

const pdpIntroSection5Props: IPdpIntroSection5Props = {
  title: 'Presque tous les déchets peuvent aller dans le JEU',
  leftNotes: (
    <>
      <strong>400+</strong>
      <br />
      types de déchets
    </>
  ),
}

const pdpIntroSection6Props: IPdpIntroSection6Props = {
  title: 'Le compostage simplifié',
  description: 'Apprécié par plus de 100 000 jardiniers',
  items: [
    {
      id: 1,
      featured: true,
      title: 'GEME',
      imageSrc:
        '/assets/images/pdp-v2311/introduction/section-comparison-geme.jpeg',
      imageAlt: 'GEME compose',
      features: [
        'Du vrai compost',
        'Fermentation aérobie',
        'Inodore et silencieux',
        `Économie d'énergie`,
      ],
    },
    {
      id: 2,
      title: 'Déshydrateur',
      imageSrc:
        '/assets/images/pdp-v2311/introduction/section-comparison-dehydrator.jpeg',
      imageAlt: 'Déshydrateur',
      features: [
        'Faux compost',
        'Cuire et sécher',
        'Malodorant et bruyant',
        'Énergie coûteuse',
      ],
    },
    {
      id: 3,
      title: 'Tas de compost',
      imageSrc:
        '/assets/images/pdp-v2311/introduction/section-comparison-pile.jpeg',
      imageAlt: 'Tas de compost',
      features: [
        'Attendre longtemps',
        'Sale et salissant',
        'Se retourne souvent',
        'Attirer les animaux',
      ],
    },
  ],
}

const compareSectionProps: ICompareSectionProps = {
  title: "Comparons",
  description: 'Découvrez ce qui rend GEME différent.',
  compareList: [
    {
      imgUrl:
        'assets/images/compare-section/compare-section-geme.png',
      devicename: 'GEME',
      compareItems: [
        {
          title: 'Véritable compost',
          desc: 'Des microbes hautement actifs accélèrent le processus de compostage',
        },
        {
          title: 'Pas besoin de changer le filtre',
          desc: 'Aucun coût, filtre de qualité industrielle, pas de matériau carbone',
        },
        {
          title: 'Volume super grand de 19L',
          desc: 'Prend des mois pour se remplir',
        },
        {
          title: 'Aussi pour les excréments d\'animaux et la soupe',
          desc: 'Prend en charge les déchets bio, y compris litière pour chats et liquides',
        },
        {
          title: 'Pas besoin de nettoyer',
          desc: 'Réduire simplement quand il est plein, pas besoin de vider et de nettoyer',
        },
        {
          title: 'Pas d\'abonnement',
          desc: 'Le prix est élevé, mais aucun coût d\'abonnement caché, essai gratuit, retour gratuit',
        },
        {
          title: 'Compostage continu',
          desc: 'Ajouter à tout moment, pas besoin d\'attendre la fin du cycle',
        },
      ],
    },
    {
      imgUrl:
        'assets/images/compare-section/compare-section-lomi.png',
      devicename: 'Marque 1', // Lomi
      compareItems: [
        {
          title: 'Pas de véritable compost',
          desc: 'Déshydrater et cuire, toujours des déchets secs',
        },
        {
          title: 'Changer régulièrement le filtre carbone',
          desc: 'Jusqu\'à 240 $/an pour le remplacement des filtres',
        },
        {
          title: 'Volume de 3L',
          desc: 'Capacité limitée pour les déchets alimentaires',
        },
        {
          title: 'Déchets alimentaires limités',
          desc: 'Ne peut pas gérer la viande et la soupe',
        },
        {
          title: 'Vider quotidiennement',
          desc: 'Nettoyer après chaque utilisation',
        },
        {
          title: 'Abonnement requis',
          desc: 'Coût caché élevé de l\'abonnement',
        },
        {
          title: 'Démarrage manuel basé sur le cycle',
          desc: 'Dévisser le couvercle, appuyer sur le bouton pour démarrer, attendre la fin du cycle',
        },
      ],
    },
    {
      imgUrl:
        'assets/images/compare-section/compare-section-mill.png',
      devicename: 'Marque 2', // Mill
      compareItems: [
        {
          title: 'Pas de véritable compost',
          desc: 'Déshydrater et broyer, toujours des déchets secs',
        },
        {
          title: 'Filtre à odeurs carbone',
          desc: '60 $+ pour chaque remplacement de filtre',
        },
        {
          title: 'Volume de 6,5L',
          desc: 'Haut et grand, mais capacité limitée',
        },
        {
          title: 'Déchets alimentaires limités',
          desc: 'Ne peut pas gérer la viande et la soupe',
        },
        {
          title: 'Vider chaque semaine',
          desc: 'Fonctionne et se vide quand il est plein',
        },
        {
          title: 'Abonnement requis',
          desc: 'Abonnement par défaut, difficultés à annuler et à retourner, pas de remboursement possible',
        },
        {
          title: 'Hachage continu',
          desc: 'Redémarrage automatique lorsque vous ajoutez des déchets, continue de hacher',
        },
      ],
    },
    {
      imgUrl:
        'assets/images/compare-section/compare-section-reencle.png',
      devicename: 'Marque 3', // Reencle
      compareItems: [
        {
          title: 'Véritable compost',
          desc: 'Microbes impliqués, faible entretien',
        },
        {
          title: 'Changer régulièrement le filtre carbone',
          desc: 'Coût de 35 $+ pour chaque remplacement de filtre',
        },
        {
          title: 'Volume de 6L',
          desc: '14L espace extérieur, 6L volume intérieur',
        },
        {
          title: 'Seulement les déchets alimentaires',
          desc: 'Ne peut pas gérer les excréments d\'animaux',
        },
        {
          title: 'Nettoyage à la demande',
          desc: 'Vider, nettoyer et réinitialiser le composteur lorsque plein',
        },
        {
          title: 'Abonnement offert',
          desc: 'Semble abordable, mais des difficultés pour annuler ou obtenir un remboursement',
        },
        {
          title: 'Compostage continu',
          desc: 'Ajouter à tout moment, pas besoin d\'attendre la fin du cycle',
        },
      ],
    },
  ],
  buttonText: 'Acheter maintenant',
}


const pdpIntroSection7Props: IPdpIntroSection7Props = {
  title: 'Grand, plus et à long terme',
  description: `Travail 7x24 mais économie d'énergie`,
  features: [
    '😄 10+ famille de personnes utilisant quotidiennement',
    '📅 3 mois pas de nettoyage nécessaire',
    '💰 Le prix en vaut la peine',
  ],
}

const contentSection23Props: IContentSection2Props = {
  // title: '19L Size, 11£/5kg Daily Feed',
  title: 'Imaging A Life, No Need to Throw Food Waste Any More',
  description: (
    <>
      👪&nbsp;&nbsp;10+ famille de personnes utilisant quotidiennement <br />
      📅&nbsp;&nbsp;3+ mois pas de nettoyage nécessaire <br />
      💰&nbsp;&nbsp;Le prix en vaut la peine pour un si grand homme <br />
      🐳&nbsp;&nbsp;Volume de 19 L, capacité d'alimentation quotidienne de 11
      £/5 kg <br />
      🐘&nbsp;&nbsp;45,5x32x66,5 (cm) 18x12,6x26,2 (pouces)
    </>
  ),
  imageSrc: '/assets/images/pdp-v2311/introduction/geme-composter-size-v2.jpeg',
  imageAlt: 'Grand format pour composteur GEME',
  isDisplayTextOnLeft: true,
}

const contentSection24Props: IContentSection2Props = {
  title: 'Pas besoin de changer de filtre',
  description: (
    <>
      Le seul modèle au monde qui utilise le filtre industriel le plus avancé,
      avec purification par <b>oxydation catalytique des ions métalliques</b>.
      <br />
      Cette technologie est puissante et ne nécessite aucun remplacement.
      <br />
      Les autres « composteurs » doivent remplacer le filtre tous les 3 mois,
      gros coût caché !
      <br />
      <br />
      👃🏻&nbsp;&nbsp;Pas d'odeur <br />
      💰&nbsp;&nbsp;Aucun coût caché supplémentaire
      <br />
      🔨&nbsp;&nbsp;Pas de courses de remplacement
    </>
  ),
  imageSrc: '/assets/images/pdp-v2311/introduction/no-filters.jpg',
  imageAlt: 'GAME ne nécessite aucun remplacement de filtre',
}

const contentSection8Props: IContentSection8Props = {
  title: 'Compostage sans odeur à la maison',
  description:
    'GEME utilise des filtres industriels dotés de la technologie de désodorisation la plus avancée. Profitez du compostage moderne et propre de haute technologie, profitez du style de vie zéro déchet.',
  items: [
    {
      id: 1,
      imageSrc: '/assets/images/pdp-v2311/introduction/no-smell-before.jpg',
      imageAlt: `Obtenez l'odeur avant d'utiliser GEME Composter`,
    },
    {
      id: 2,
      imageSrc: '/assets/images/pdp-v2311/introduction/no-smell-after.jpg',
      imageAlt: 'Aucune odeur après avoir utilisé GEME Composter',
    },
  ],
}

const pdpIntroSection8Props: IPdpIntroSection8Props = {
  title: 'Utiliser le compost',
  description: (
    <>
      Le gaspillage alimentaire est décomposé par le microbiote, et non par
      l’énergie électrique, l’énergie sert simplement à maintenir le meilleur
      environnement pour que le microbiote fonctionne efficacement.
    </>
  ),
  features: [
    {
      id: 1,
      Icon: usingCompostIcons.SvgPlantOnHandIcon,
      imgSrc: '/assets/images/pdp-v2311/introduction/icon-plant-on-hand.svg',
      feature: 'plan intérieur',
    },
    {
      id: 2,
      Icon: usingCompostIcons.SvgFlowerOnHandIcon,
      imgSrc: '/assets/images/pdp-v2311/introduction/icon-flower-on-hand.svg',
      feature: 'bonsaï',
    },
    {
      id: 3,
      Icon: usingCompostIcons.SvgRiceOnHandIcon,
      imgSrc: '/assets/images/pdp-v2311/introduction/icon-rice-on-hand.svg',
      feature: 'lit de légumes',
    },
    {
      id: 4,
      Icon: usingCompostIcons.SvgGardenCareIcon,
      imgSrc: '/assets/images/pdp-v2311/introduction/icon-garden-care.svg',
      feature: 'entretien du jardin',
    },
    {
      id: 5,
      Icon: usingCompostIcons.SvgGiftIcon,
      imgSrc: '/assets/images/pdp-v2311/introduction/icon-gift.svg',
      feature: 'partagez-le',
    },
    {
      id: 6,
      Icon: usingCompostIcons.SvgWaterIcon,
      imgSrc: '/assets/images/pdp-v2311/introduction/icon-water.svg',
      feature: `purifier l'eau`,
    },
  ],

  bgImageSrc:
    '/assets/images/pdp-v2311/dividers/use-geme-compost-in-a-garden-cropped.jpg',
  bgDesktopImageSrc:
    '/assets/images/pdp-v2311/dividers/use-geme-compost-in-a-garden.jpeg',

  linkText: 'OBTENIR GEME',
  linkUrl: '/product/geme',
}

function Intro(): JSX.Element {
  return (
    <div>
      <PdpIntroSection1 {...pdpIntroSection1Props} />

      <ScrollTriggeredAnimatedOxygenCycle {...oxygenCycleProps} />

      <ContentSection7 {...contentSection71Props} />

      <ContentSection7 {...contentSection72Props} />

      <PdpIntroSection5 {...pdpIntroSection5Props} />

      <ContentSection2 {...contentSection21Props} />

      <ContentSection2 {...contentSection22Props} />

      <PdpIntroSection6 {...pdpIntroSection6Props} />

      <CompareSection className="mb-4" locale='fr' {...compareSectionProps} />

      <PdpIntroSection7 {...pdpIntroSection7Props} />

      <ContentSection2 {...contentSection23Props} />

      <ContentSection2 {...contentSection24Props} />

      <ContentSection8 {...contentSection8Props} />

      <PdpIntroSection8 {...pdpIntroSection8Props} />
    </div>
  )
}

export default Intro
