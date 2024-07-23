/* eslint-disable react/no-unescaped-entities */
import {
  IPdpUserStoryTeamSectionsProps,
  LocaleType,
  PdpIntroSection3,
  PdpIntroSection4,
} from 'ui'
import PdpIntroEnContent, { IPdpContentProps, IPdpTabsText } from './components'
import { IPdpIntroProps } from './components/Intro'
import { IPdpCompareProps } from './components/Compare'
import { IPdpSpecProps } from './components/Spec'
import {
  ShieldCheckIcon,
  TruckIcon,
  ChatBubbleLeftRightIcon,
} from '@heroicons/react/24/solid'
import { IProductProps } from './en'

const locale: LocaleType = 'en'

// 产品页Tabs吸顶栏的文本 Fr
const tabs: IPdpTabsText = {
  intro: 'Introduction',
  compare: 'Comparer',
  spec: 'Spécifications',
  warranty: 'Garantie',
  userStories: `Histoires d'utilisateurs`,
  reviews: 'Avis',
}

// ----------------  产品页 Introduction模块内容配置 Fr start  ----------------------
const introProps: IPdpIntroProps = {
  // Introduction 第1部分 Fr
  pdpIntroSection1Props: {
    title: 'Le premier composteur de déchets biologiques au monde',
    description:
      'Utilise des microbiotes pour décomposer rapidement les déchets alimentaires, 100 fois plus rapide que le compostage traditionnel, complètement différent des "composteurs" électriques de comptoir à déshydratation.',
    bgImageSrc:
      '/assets/images/pdp-v2311/dividers/geme-with-compost-background-min.jpg',
    comparisonText: {
      brfore: 'Avant',
      after: 'Après',
    },
    bottomItems: [
      { id: 1, description: 'Décomposition par les microbes' },
      { id: 2, description: 'Pas par déshydratation' },
      { id: 3, description: 'Tas de compost dans la boîte' },
    ],
  },

  // Introduction 第2部分 Fr
  contentSection71Props: {
    title: 'Des déchets aux merveilles',
    description: `Plongeons dans les petits super-héros qui ont un impact significatif : les microbes (GEME Kobold). Semblables aux microbes amicaux qui aident à la digestion dans votre intestin, avec des conditions idéales et un mélange de rotation régulière, ils transforment rapidement les déchets alimentaires en compost organique.`,

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
    bottomContent: <PdpIntroSection3 title="6-8 heures" />,
    isDisplayTextOnLeft: true,
  },

  // Introduction 第3部分 Fr
  contentSection72Props: {
    title: 'Fonctionnement silencieux',
    description: `Niveau sonore de GEME d'environ 35-45 dB, le composteur le plus silencieux sur le marché.`,
    withImageOrVideo: {
      type: 'image',
      imageSrc: '/assets/images/pdp-v2311/introduction/geme-silent.jpg',
      imageAlt: 'image des déchets alimentaires',
    },
    bottomContent: <PdpIntroSection4 />,
  },

  // Introduction 第4部分 Fr
  pdpIntroSection5Props: {
    title: 'Presque tous les déchets peuvent aller dans GEME',
    leftNotes: (
      <>
        <strong>400+</strong>
        <br />
        types de déchets
      </>
    ),
  },

  // Introduction 第5部分 Fr
  contentSection21Props: {
    title: "Continuez à jeter les ordures, GEME s'occupe du reste",
    description: (
      <>
        🫳&nbsp;&nbsp;Ajoutez des déchets à tout moment <br />
        🫷&nbsp;&nbsp;Pas besoin d'appuyer sur des boutons <br />
        🕓&nbsp;&nbsp;Pas besoin d'attendre des cycles <br />
        🤗&nbsp;&nbsp;Aucune courbe d'apprentissage <br />
        🚮&nbsp;&nbsp;Comme une poubelle ordinaire
      </>
    ),
    imageSrc:
      '/assets/images/pdp-v2311/introduction/geme-take-care-of-the-rest.jpg',
    imageAlt: "GEME s'occupe de vos déchets alimentaires",
    isDisplayTextOnLeft: true,
  },

  // Introduction 第6部分 Fr
  contentSection22Props: {
    title:
      'Élimination des déchets basée sur des microbes innovants, fonctionne rapidement et en toute sécurité',
    description: (
      <>
        🔥&nbsp;&nbsp;Pas de déshydratation, c'est du vrai compostage <br />
        🚰&nbsp;&nbsp;Pas de déchiquetage, plus d'évier bouché
        <br />
        🌿&nbsp;&nbsp;Pas de greenwashing, véritable solution écologique
      </>
    ),
    imageSrc: '/assets/images/pdp-v2311/introduction/geme-garbage-disposal.jpg',
    imageAlt: 'image des déchets alimentaires',
  },

  // Introduction 第7部分 Fr
  pdpIntroSection6Props: {
    title: 'Composter devient facile',
    description: 'Apprécié par plus de 100k jardiniers',
    items: [
      {
        id: 1,
        featured: true,
        title: 'GEME',
        imageSrc:
          '/assets/images/pdp-v2311/introduction/section-comparison-geme.jpeg',
        imageAlt: 'Compost GEME',
        features: [
          'Vrai compost',
          'Fermentation aérobie',
          'Sans odeur et silencieux',
          'Économique en énergie',
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
          'Cuisiner et sécher',
          'Malodorant et bruyant',
          'Coûteux en énergie',
        ],
      },
      {
        id: 3,
        title: 'Tas de compost',
        imageSrc:
          '/assets/images/pdp-v2311/introduction/section-comparison-pile.jpeg',
        imageAlt: 'Tas de compost',
        features: [
          `Temps d'attente long`,
          'Sale et désordonné',
          'Retourner souvent',
          'Attire les animaux',
        ],
      },
    ],
  },

  // Introduction 第8部分 Fr
  pdpIntroSection7Props: {
    title: 'Grand, plus et à long terme',
    description: "Fonctionne 7x24 mais économise de l'énergie",
    features: [
      '😄 Utilisation quotidienne pour une famille de plus de 10 personnes',
      '📅 3 mois sans nettoyage requis',
      '💰 Vaut le prix',
    ],
  },

  // Introduction 第9部分 Fr
  contentSection23Props: {
    title:
      'Imaginez une vie sans avoir besoin de jeter les déchets alimentaires',
    description: (
      <>
        👪&nbsp;&nbsp;Utilisation quotidienne pour une famille de plus de 10
        personnes <br />
        📅&nbsp;&nbsp;3+ mois sans nettoyage requis <br />
        💰&nbsp;&nbsp;Vaut le prix pour un si gros appareil <br />
        🐳&nbsp;&nbsp;Volume de 19L, capacité d'alimentation quotidienne de
        11£/5kg <br />
        🐘&nbsp;&nbsp;45,5x32x66,5(cm) 18x12,6x26,2 (pouces)
      </>
    ),
    imageSrc:
      '/assets/images/pdp-v2311/introduction/geme-composter-size-v2.jpeg',
    imageAlt: 'Grande taille pour le composteur GEME',
    isDisplayTextOnLeft: true,
  },

  // Introduction 第10部分 Fr
  contentSection24Props: {
    title: 'Pas besoin de changer de filtre',
    description: (
      <>
        Le seul modèle au monde qui utilise le filtre industriel le plus avancé,
        avec <b>purification par oxydation catalytique aux ions métalliques</b>.
        <br />
        Cette technologie est puissante et ne nécessite aucun remplacement.
        <br />
        Les autres « composteurs » doivent remplacer le filtre tous les 3 mois,
        coût caché élevé !
        <br />
        <br />
        👃🏻&nbsp;&nbsp;Pas d'odeur <br />
        💰&nbsp;&nbsp;Pas de coût caché supplémentaire
        <br />
        🔨&nbsp;&nbsp;Pas de corvées de remplacement
      </>
    ),
    imageSrc: '/assets/images/pdp-v2311/introduction/no-filters.jpg',
    imageAlt: 'GEME ne nécessite pas de remplacement de filtre',
  },

  // Introduction 第11部分 Fr
  contentSection8Props: {
    title: 'Compostage sans odeur à la maison',
    description:
      'GEME utilise des filtres industriels avec la technologie de désodorisation la plus avancée. Profitez du compostage moderne et propre de haute technologie, profitez du mode de vie zéro déchet.',
    items: [
      {
        id: 1,
        imageSrc: '/assets/images/pdp-v2311/introduction/no-smell-before.jpg',
        imageAlt: "Odeur avant d'utiliser le composteur GEME",
      },
      {
        id: 2,
        imageSrc: '/assets/images/pdp-v2311/introduction/no-smell-after.jpg',
        imageAlt: 'Aucune odeur après avoir utilisé le composteur GEME',
      },
    ],
  },
}
// ----------------  产品页 Introduction模块内容配置 Fr end  ----------------------

// 产品页 compareSection模块内容配置 Fr
const compareProps: IPdpCompareProps = {
  compareSectionProps: {
    title: 'Comparons',
    description: 'Découvrez ce qui rend GEME différent.',
    compareList: [
      {
        imgUrl: '/assets/images/compare-section/compare-section-geme.png',
        devicename: 'GEME',
        compareItems: [
          {
            title: 'Véritable compost',
            desc: 'Les microbes hautement actifs accélèrent le processus de compostage',
          },
          {
            title: 'Pas besoin de changer le filtre',
            desc: 'Aucun coût, filtre de qualité industrielle, pas de matériau carboné',
          },
          {
            title: 'Volume super grand de 19L',
            desc: 'Prend des mois pour se remplir',
          },
          {
            title: `Aussi pour les excréments d'animaux et la soupe`,
            desc: `Soutient les déchets biologiques, y compris la litière pour chat et les déchets liquides`,
          },
          {
            title: 'Pas besoin de nettoyer',
            desc: `Réduisez simplement lorsque c'est plein, pas besoin de vider et de nettoyer`,
          },
          {
            title: `Pas d'abonnement`,
            desc: `Le prix est élevé, mais aucun coût d'abonnement caché, essai gratuit, retour gratuit`,
          },
          {
            title: 'Compostage en continu',
            desc: `Ajoutez à tout moment, pas besoin d'attendre la fin du cycle`,
          },
        ],
      },
      {
        imgUrl: '/assets/images/compare-section/compare-section-lomi.png',
        devicename: 'Brand 1', // Lomi
        compareItems: [
          {
            title: 'Pas de vrai compost',
            desc: 'Déshydrater et cuire, toujours des déchets secs',
          },
          {
            title: 'Changer régulièrement le filtre à charbon',
            desc: `Jusqu'à $240/an pour les remplacements de filtres`,
          },
          {
            title: 'Petit volume de 3L',
            desc: 'Taille limitée des déchets alimentaires',
          },
          {
            title: 'Déchets alimentaires limités',
            desc: `Ne peut pas traiter la viande et la soupe`,
          },
          {
            title: 'Vider quotidiennement',
            desc: 'Nettoyer après chaque utilisation',
          },
          {
            title: 'Abonnement requis',
            desc: `Piège à abonnement à coût caché élevé`,
          },
          {
            title: 'Démarrage manuel basé sur le cycle',
            desc: `Tournez le couvercle, appuyez sur le bouton pour démarrer, attendez la fin du cycle`,
          },
        ],
      },
      {
        imgUrl: '/assets/images/compare-section/compare-section-mill.png',
        devicename: 'Brand 2', // mill
        compareItems: [
          {
            title: 'Pas de vrai compost',
            desc: 'Déshydrater et moudre, toujours des déchets secs',
          },
          {
            title: 'Filtre à odeurs de charbon',
            desc: `$60+ pour chaque remplacement de filtre`,
          },
          {
            title: 'Volume de 6,5L',
            desc: 'Haut et grand, mais capacité limitée',
          },
          {
            title: 'Déchets alimentaires limités',
            desc: `Ne peut pas traiter la viande et la soupe`,
          },
          {
            title: 'Vider chaque semaine',
            desc: `Fonctionne et se vide lorsqu'il est plein`,
          },
          {
            title: 'Abonnement requis',
            desc: `Abonnement par défaut, difficulté pour annuler et retourner, remboursement non applicable`,
          },
          {
            title: 'Hachage continu',
            desc: `Redémarrage automatique lorsque vous ajoutez des déchets, continue à hacher`,
          },
        ],
      },
      {
        imgUrl: '/assets/images/compare-section/compare-section-reencle.png',
        devicename: 'Brand 3', // Reencle
        compareItems: [
          {
            title: 'Véritable compost',
            desc: 'Microbes à faible entretien impliqués',
          },
          {
            title: 'Changer régulièrement le filtre à charbon',
            desc: `Coût $35+ par remplacement`,
          },
          {
            title: 'Volume de 6L',
            desc: `14L d'espace extérieur, 6L de volume intérieur`,
          },
          {
            title: `Uniquement des déchets alimentaires`,
            desc: `Ne peut pas traiter les excréments d'animaux`,
          },
          {
            title: 'Nettoyage à la demande',
            desc: `Vider, nettoyer et réinitialiser le démarreur de compost lorsqu'il est plein`,
          },
          {
            title: 'Abonnement offert',
            desc: `Semble abordable, mais des difficultés lors de l'annulation ou du remboursement`,
          },
          {
            title: 'Compostage en continu',
            desc: `Ajoutez à tout moment, pas besoin d'attendre la fin du cycle`,
          },
        ],
      },
    ],
    buttonText: 'Acheter maintenant',
  },
  locale: 'fr',
}

// 产品页Spec模块配置内容 Fr
const specProps: IPdpSpecProps = {
  gemeSpecsProps: {
    title: 'Caractéristiques techniques',
    specs: [
      {
        id: 1,
        name: 'Volume',
        description: '19L',
      },
      {
        id: 2,
        name: 'Capacité',
        description: '5kg/jour',
      },
      {
        id: 3,
        name: 'Taille',
        description: 'W320*D455*H665mm  (18" x 12.6" x 26.2")',
      },
      {
        id: 4,
        name: 'Poids',
        description: '19.5kg',
      },
      {
        id: 5,
        name: 'Puissance',
        description: `
          <p>AC110V-60Hz(Modèle G601N-2K pour l'Amérique du Nord)</p>
          <p>AC220V-50Hz(Modèle G601U-2K pour l'Europe)</p>
        `,
      },
      {
        id: 6,
        name: 'Décibel',
        description: '≈40db (23db-55db)',
      },
      {
        id: 7,
        name: 'Certifications',
        description: 'CE/FCC/ISO9001/ISO14001/ISO45001',
      },
      {
        id: 8,
        name: 'Fonction',
        description:
          'Compostage biologique rapide et entièrement automatique; Sûr et économe en énergie; Désodorisation automatique; Déshumidification automatique',
      },
    ],
  },

  gemeWhatsInBoxProps: {
    title: `Que contient la boîte`,
    features: [
      {
        name: '1',
        title: 'Composteur GEME',
        description: `La machine à décomposition rapide des déchets organiques`,
        imageSrc: '/assets/images/geme-whats-in-box/q2.png',
        imageAlt: 'Composteur bio-déchets GEME',
      },
      {
        name: '2',
        title: 'GEME-Kobold',
        description: `Les microbiotes naturels pour le compostage`,
        imageSrc: '/assets/images/geme-whats-in-box/q1.png',
        imageAlt: 'Microbiote naturel GEME-Kobold',
      },
      {
        name: '3',
        title: 'Pelle',
        description: `Utilisée pour retirer l'engrais organique`,
        imageSrc: '/assets/images/geme-whats-in-box/q3.png',
        imageAlt: 'Pelle',
      },
      {
        name: '4',
        title: 'Racloir',
        description: 'Utilisé pour nettoyer le bac de décomposition',
        imageSrc: '/assets/images/geme-whats-in-box/q4.png',
        imageAlt: 'Racloir',
      },
    ],
  },
}

// 产品页Warranty模块配置内容 Fr
const warrantyProps = {
  title: `Achetez en toute confiance`,
  description: `Nous savons que vous trouverez cela cher, mais nous vous assurons que cela en vaut la peine. Votre argent n'est pas perdu, il se transforme en un meilleur style de vie et un bon service autour de vous.`,

  features: [
    {
      name: `30 jours d'essai gratuit`,
      description: `Livraison gratuite (continent des États-Unis), essai gratuit, aucun frais de retour facturé. Posez-nous toutes vos questions pendant votre essai, les amateurs de produits innovants méritent d'être encouragés !`,
      href: '/return-policy',
      icon: TruckIcon,
    },
    {
      name: `Garantie d'un an`,
      description: `Nous nous engageons à réparer ou à remplacer gratuitement les pièces défectueuses si le défaut initial survient pendant la période de garantie.`,
      href: '/warranty',
      icon: ShieldCheckIcon,
    },
    {
      name: `Taux de réponse client de 100 %`,
      description: `Expérimentez le compostage sans souci avec notre garantie complète. Votre composteur GEME, notre engagement.`,
      href: '/contact',
      icon: ChatBubbleLeftRightIcon,
    },
  ],

  btnText: 'En savoir plus',
}

// 产品页 User Stories 模块配置内容 Fr
const userStoryProps: IPdpUserStoryTeamSectionsProps = {
  title: `Rencontrez les témoignages des clients de GEME`,
  description: (
    <>Comment nos clients ont vu leur vie changer après avoir utilisé GEME</>
  ),
  people: [
    {
      id: 1,
      name: 'Alex Egertson',
      role: 'Directeur de la durabilité',
      image: {
        src: '/assets/images/pdp-v2311/user-stories/user-stories-llc.jpg',
        alt: 'Alex Egertson',
      },
      bio: (
        <>
          Alex travaille chez Lutheran Retreats, Camps & Conferences, aussi
          connu sous le nom de{' '}
          <a
            className="text-emerald-600"
            href="https://lrcchome.com/"
            target="_blank"
          >
            LRCC
          </a>{' '}
          , une école de camps où les enfants apprennent et vivent une vie
          verte.
          <br />
          Avec GEME, plus d'enfants peuvent apprendre à composter facilement
          dans leur vie quotidienne.
        </>
      ),
      quote: `Heureux d'aider. Cela semble être un excellent produit jusqu'à présent.`,
    },
    {
      id: 2,
      name: 'Rainforest Inn',
      role: 'Bill, Patron',
      image: {
        src: '/assets/images/pdp-v2311/user-stories/user-stories-rainforest.jpg',
        alt: 'Rainforest Inn',
      },
      bio: (
        <>
          Bill est le propriétaire du{' '}
          <a
            className="text-emerald-600"
            href="https://www.rainforestinn.com/"
            target="_blank"
          >
            Rainforest Inn
          </a>{' '}
          situé à Porto Rico. Il veut désespérément GEME et a même payé
          plusieurs fois et des frais d'expédition supplémentaires, juste pour
          utiliser le composteur GEME. Regardons son{' '}
          <a
            className="text-emerald-600"
            href="https://www.tiktok.com/@rainforestinn/video/7309861665711901998"
            target="_blank"
          >
            vlog
          </a>{' '}
          pour voir comment ça se passe.
        </>
      ),
      quote:
        'Je cherche un composteur propre et facile à utiliser qui peut être dans la cuisine car nos grands bacs à compost sont trop loin. Il fonctionne très efficacement. Calme et propre.',
    },
    {
      id: 3,
      name: 'LAE. Angeles Delgado',
      role: 'Directeur financier',
      image: {
        src: '/assets/images/pdp-v2311/user-stories/user-stories-angelita.jpeg',
        alt: 'Leonard Krasner',
      },
      bio: (
        <>
          La cliente mexicaine Angelita (contactée en avril) a acheté une unité
          malgré nos premières difficultés de livraison entre les États-Unis et
          le Mexique. Son entreprise de transport a facilité la collecte au
          Texas. Aimant le produit, elle en a acheté trois de plus pour Noël de
          ses filles ! Angelita est même devenue une héroïne en nous aidant à
          résoudre un problème de livraison pour une autre campagne Kickstarter
          au Mexique.
        </>
      ),
      quote: `Je suis allé sur Internet et j'ai cherché plus et j'ai trouvé le vôtre et la publicité dit que c'est un composteur bio et j'ai vu des vidéos et finalement j'ai trouvé le vôtre et je l'ai adoré. Je veux acheter mes composteurs ! Je suis prêt pour 2 de plus maintenant. Peut-être les trois.`,
      mobileQuote:
        'Je veux acheter mes composteurs ! Je suis prêt pour 2 de plus maintenant. Peut-être les trois.',
    },
    {
      id: 4,
      name: 'Vasil Borukov',
      role: 'Ingénieur principal en support informatique',
      image: {
        src: '/assets/images/pdp-v2311/user-stories/user-stories-vasil.png',
        alt: 'Vasil Software engineer',
      },
      bio: (
        <>
          Le défenseur bulgare du zéro déchet, Vasil, aime GEME pour lutter
          contre le gaspillage alimentaire et réduire l'empreinte carbone.
          Suivant GEME depuis sa campagne de financement participatif en juillet
          2022, il a obtenu une unité à 499 € via des versements et a activement
          promu le produit et la vision de GEME à son réseau. Un vrai champion
          de la durabilité !
        </>
      ),
      quote: `J'ai toujours voulu m'impliquer de plus en plus dans tout ce qui m'entoure pour une vie plus durable et c'est pourquoi je voulais vraiment obtenir autant de GEME. Il combine tout ce dont vous avez besoin pour une vie plus facile sans stress. Je le recommande totalement à tous mes amis !`,
      mobileQuote:
        'Il combine tout ce dont vous avez besoin pour une vie plus facile sans stress.',
    },
  ],
  locale: 'fr',
}

export function PdpIntroFr(props: IProductProps) {
  const allProps: IPdpContentProps = {
    ...props,
    tabs,
    introProps,
    compareProps,
    specProps,
    warrantyProps,
    userStoryProps,
    locale,
  }

  return <PdpIntroEnContent {...allProps} />
}
