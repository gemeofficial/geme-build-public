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
} from 'ui'

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
          <SvgFoodWaste className=" w-8 h-8 md:w-16 md:h-16 " />
          <h3 className=" v2311-font-body md:v2311-font-h3 text-v2311-primary font-bold text-center mt-2 md:mt-4 ">
            Nutriments (déchets alimentaires)
          </h3>
          <p className="hidden lg:block v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2">
            Les micro-organismes ont besoin de C, N, de phosphore (P) et de
            potassium (K) comme principaux nutriments. Le rapport C:N des
            matières premières est important. Le rapport C:N optimal des
            matières premières se situe entre 25:1 et 30:1.
          </p>
          <p className="hidden xl:block v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2">
            Lorsque le ratio est trop élevé, la croissance des micro-organismes
            est limitée, ce qui entraîne un temps de compostage plus long. Un
            rapport C:N inférieur conduit à une sous-utilisation de N et les
            odeurs peuvent être un problème.
          </p>
          <p className=" v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 ">
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
          <SvgOxygen className=" w-8 h-8 md:w-16 md:h-16 " />
          <h3 className=" v2311-font-body md:v2311-font-h3 text-v2311-primary font-bold text-center mt-2 md:mt-4 ">
            Aération (oxygène)
          </h3>
          <p className="hidden lg:block v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 ">
            Le compostage aérobie a lieu en présence d'une grande quantité d'O2.
            Au cours de ce processus, les micro-organismes aérobies décomposent
            la matière organique et produisent de l'ammoniac, de l'eau, de la
            chaleur et de l'humus, le produit final organique relativement
            stable.
          </p>
          <p className=" v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 ">
            GEME Composter fournit un système d'échange d'air pour que cela se
            produise à l'intérieur d'une boîte.
          </p>
        </>
      ),
    },
    {
      minProgress: 40,
      content: (
        <>
          <SvgWood className=" w-8 h-8 md:w-16 md:h-16 " />
          <h3 className=" v2311-font-body md:v2311-font-h3 text-v2311-primary font-bold text-center mt-2 md:mt-4 ">
            Teneur en lignine (trucs bruns)
          </h3>
          <p className="hidden lg:block  v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 ">
            La lignine est l’un des principaux constituants des parois
            cellulaires végétales et sa structure chimique complexe la rend très
            résistante à la dégradation microbienne.
          </p>
          <p className="hidden xl:block  v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 ">
            Cette nature de la lignine a deux implications. La première est que
            la lignine réduit la biodisponibilité des autres constituants de la
            paroi cellulaire, ce qui rend le rapport C:N réel (c'est-à-dire le
            rapport C/N biodégradable) inférieur à celui normalement cité.
            L’autre est que la lignine sert d’amplificateur de porosité, ce qui
            crée des conditions favorables au compostage aérobie.
          </p>
          <p className=" v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 ">
            Le démarreur GEME Kobold contient un tel matériel et est bien
            configuré pour vous.
          </p>
        </>
      ),
    },
    {
      minProgress: 60,
      content: (
        <>
          <SvgWaterDrop className=" w-8 h-8 md:w-16 md:h-16 " />
          <h3 className=" v2311-font-body md:v2311-font-h3 text-v2311-primary font-bold text-center mt-2 md:mt-4 ">
            Humidité
          </h3>
          <p className="hidden lg:block v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 ">
            L'humidité est nécessaire pour soutenir l'activité métabolique des
            micro-organismes. Les matériaux de compostage doivent maintenir une
            teneur en humidité de 40 à 65 pour cent.
          </p>
          <p className="hidden xl:block v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 ">
            Lorsque le tas est trop sec, le compostage se produit plus
            lentement, tandis qu'une teneur en humidité supérieure à 65 pour
            cent développe des conditions anaérobies. En pratique, il est
            conseillé de commencer le tas avec une teneur en humidité de 50 à 60
            pour cent et de finir à environ 30 pour cent.
          </p>
          <p className=" v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 ">
            GEME Composter est étanche à l'eau et permet d'ajouter de l'eau et
            de déshumidifier lorsqu'il est trop mouillé.
          </p>
        </>
      ),
    },
    {
      minProgress: 78,
      content: (
        <>
          <SvgTemperature className=" w-8 h-8 md:w-16 md:h-16 " />
          <h3 className=" v2311-font-body md:v2311-font-h3 text-v2311-primary font-bold text-center mt-2 md:mt-4 ">
            Température
          </h3>
          <p className="hidden lg:block v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 ">
            Le processus de compostage implique deux plages de température :
            mésophile et thermophile.
          </p>
          <p className="hidden xl:block v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 ">
            Alors que la température idéale pour l'étape initiale de compostage
            est de 20 à 45 °C, aux étapes suivantes, lorsque les organismes
            thermophiles prennent le relais, une plage de température de 50 à 70
            °C peut être idéale. Des températures élevées caractérisent le
            processus de compostage aérobie et sont le signe d'activités
            microbiennes vigoureuses.
          </p>
          <p className=" v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 ">
            GEME Composter dispose d'un contrôleur de température intelligent,
            gère la température pour s'adapter au GAME Kobold dans les
            meilleures conditions.
          </p>
        </>
      ),
    },
    {
      minProgress: 100,
      content: (
        <>
          <SvgMicrobe className=" w-8 h-8 md:w-16 md:h-16 " />
          <h3 className=" v2311-font-body md:v2311-font-h3 text-v2311-primary font-bold text-center mt-2 md:mt-4 ">
            Microbes(GEME Kobold)
          </h3>
          <p className="hidden lg:block v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 ">
            Pour améliorer l'efficacité, l'inoculation de micro-organismes
            pourrait être introduite.
          </p>
          <p className="hidden xl:block v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 ">
            Les organismes inoculums utilisés pour le compostage sont
            principalement des champignons tels que Trichoderma et Pleurotus.
            Certains contiennent également des « micro-organismes efficaces »
            (EM).
          </p>
          <p className=" v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 ">
            GEME Kobold est un ensemble de microbiotes, qui est le seul
            microbiote composite résistant aux hautes températures découvert et
            validé au monde. Il agit 100 fois plus vite que les bactéries
            ordinaires dans la nature.
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
          src: 'https://public-assest-434759801795.s3.us-west-1.amazonaws.com/how-geme-kobold-eat-food-waste-480p.mp4',
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

      <PdpIntroSection7 {...pdpIntroSection7Props} />

      <ContentSection2 {...contentSection23Props} />

      <ContentSection2 {...contentSection24Props} />

      <ContentSection8 {...contentSection8Props} />

      <PdpIntroSection8 {...pdpIntroSection8Props} />
    </div>
  )
}

export default Intro
