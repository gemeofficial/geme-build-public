/* eslint-disable react/no-unescaped-entities */
import CanNotCompostItems, {
  ICanNotCompostItemsProps,
  noSymbolIcon,
} from './components/CanNotCompostItems'
import FeaturesWithVideos, {
  featureIcon,
  IFeaturesWithVideos,
} from './components/FeaturesWithVideos'
import GemeDailyUsage from './components/GemeDailyUsage'
import HeroSection, { IManualHeroSectionProps } from './components/HeroSection'
import { IManualsPageProps } from './en'

// 第1部分配置文件 Fr版
const manualHeroSectionProps: IManualHeroSectionProps = {
  title: 'Tutoriel',
  description: (
    <>
      <p>
        <strong>Points forts du contenu</strong>
      </p>
      <br></br>
      <div className="flex flex-col justify-center items-center lg:block">
        <ol className="text-left">
          <li>1. Comment déballer et installer</li>
          <li>2. Précautions & Avis</li>
          <li>3. Comment activer GEME-Kobold</li>
          <li>4. Démonstration d'utilisation quotidienne</li>
          <li>5. Utilisation des sous-produits (compost)</li>
          <li>6. Comment stabiliser votre GEME</li>
          <li>7. Utilisation du panneau de contrôle et dépannage</li>
          <li>8. Comment changer la lampe UV</li>
          <li>
            9. Ce qui peut être mis dans GEME et ce qui ne peut pas l'être
          </li>
        </ol>
      </div>
    </>
  ),
  primaryButtonLabel: `Obtenez de l'aide sur WhatsApp`,
  secondaryButtonLabel: 'Service Client',
  hintsLinkLabel: 'Télécharger le manuel PDF',
  buttonLn: true,
}

// 第2部分配置文件 Fr版
const featuresWithVideos: IFeaturesWithVideos = {
  title: "Manuel de l'utilisateur！",
  description:
    "Regardez des vidéos sur différents sujets de manuel d'utilisateur",
  features: [
    {
      name: 'Déballage',
      description:
        'Cette vidéo vous guide sur la façon de déballer le paquet GEME et les configurations de base',
      icon: featureIcon(1),
      videoUrl: 'https://www.youtube.com/embed/izYVDd6KwO8',
      videoImageSrc: '/assets/images/manual/video-cover-unboxing.png',
      videoImageAlt: 'Déballage du composteur GEME',
    },
    {
      name: 'Précautions',
      description:
        "L'utilisation du composteur GEME nécessite quelques précautions, un peu d'attention suffit.",
      icon: featureIcon(2),
      videoUrl: 'https://www.youtube.com/embed/f09NNpAnyTQ',
      videoImageSrc: '/assets/images/manual/video-cover-cautions.png',
      videoImageAlt: "Précautions d'utilisation du composteur GEME",
    },
    {
      name: 'Activer les microbiotes',
      description:
        "1. Mettez le GEME-kobold dans le conteneur; 2. Versez 800 ml d'eau; 3. Attendez 6+ heures",
      icon: featureIcon(3),
      videoUrl: 'https://www.youtube.com/embed/hSpq48ymKrA',
      videoImageSrc:
        '/assets/images/manual/video-cover-activate-microbiota.png',
      videoImageAlt: 'Comment activer GEME-Kobold (Microbiota)',
    },
    {
      name: 'Utilisation quotidienne',
      description:
        'Utiliser GEME au quotidien est aussi simple que des poubelles ordinaires, rien à expliquer',
      icon: featureIcon(4),
      videoUrl: 'https://www.youtube.com/embed/mi8fwlJdt68',
      videoImageSrc: '/assets/images/manual/video-cover-daily-usage.png',
      videoImageAlt: 'Utilisation quotidienne du composteur GEME',
    },
    {
      name: 'Utilisation du sous-produit (compost)',
      description:
        'Sortez le sous-produit et mélangez-le avec de la terre, puis allez nourrir vos plantes',
      icon: featureIcon(5),
      videoUrl: 'https://www.youtube.com/embed/qHo9WgCKUsw',
      videoImageSrc: '/assets/images/manual/video-cover-by-product-usage.png',
      videoImageAlt: 'Comment utiliser le sous-produit (compost organique)',
    },
    {
      name: 'Comment stabiliser',
      description:
        'Soulevez légèrement le GEME et vissez un des pieds pour le stabiliser',
      icon: featureIcon(6),
      videoUrl: 'https://www.youtube.com/embed/rthDSasoOrY',
      videoImageSrc: '/assets/images/manual/video-cover-make-steady.png',
      videoImageAlt: 'Comment stabiliser le composteur GEME',
    },
    {
      name: 'Utilisation du panneau de contrôle et dépannage',
      description:
        "Habituellement, il n'est pas nécessaire de se soucier des indicateurs et des boutons, au cas où quelque chose se produirait, cette vidéo peut aider",
      icon: featureIcon(7),
      videoUrl: 'https://www.youtube.com/embed/jc5_ferVOa8',
      videoImageSrc:
        '/assets/images/manual/video-cover-control-panel-usage.png',
      videoImageAlt: 'Comment dépanner via le panneau de contrôle',
    },
    {
      name: 'Comment changer la lampe UV',
      description:
        'GEME utilise une lampe UV pour désinfecter, elle peut fonctionner pendant plus de 15 000 heures. Cependant, vous pouvez la changer si elle est cassée.',
      icon: featureIcon(8),
      videoUrl: 'https://www.youtube.com/embed/VdAtQfpSQ_E',
      videoImageSrc: '/assets/images/manual/video-cover-change-uv-lamp.png',
      videoImageAlt: 'Comment changer la lampe UV du composteur GEME',
    },
    {
      name: 'Ce qui peut et ne peut pas être mis',
      description:
        "Jusqu'à 90% des déchets organiques peuvent être mis dans GEME. Cependant, il y a des déchets que GEME ne traite pas bien.",
      icon: featureIcon(9),
      videoUrl: 'https://www.youtube.com/embed/2DSFcxFRSos',
      videoImageSrc: '/assets/images/manual/video-cover-can-and-can-not.png',
      videoImageAlt:
        'Ce qui peut être mis dans le composteur GEME et ce qui ne peut pas',
    },
  ],
}

// 第3部分配置文件 Fr版
const gemeDailyUsageProps = {
  title: 'Utilisation quotidienne',
  description:
    "Pas besoin d'appuyer sur des boutons, pas besoin d'ajuster le rapport carbone-azote du compost, pas besoin de retourner le compost, pas besoin de remplacer le filtre. Mettez vos déchets à tout moment, retirez le compost à tout moment. Rien de spécial.",
  categories: [
    {
      imageSrc: '/assets/images/meet-geme/m1.png',
      imageAlt: 'une main jetant des déchets alimentaires dans le GEME',
    },
    {
      imageSrc: '/assets/images/meet-geme/m2.png',
      imageAlt: 'une main avec le fertilisant généré',
    },
    {
      imageSrc: '/assets/images/meet-geme/m3.png',
      imageAlt: 'utiliser le fertilisant pour la culture de fleurs',
    },
  ],
}

// 第4部分配置文件 Fr版
const canNotCompostItemsProps: ICanNotCompostItemsProps = {
  title: 'Ne mettez pas ces objets dans GEME',
  description:
    "GEME ne convient qu'au traitement de la plupart des déchets organiques",
  features: [
    {
      name: 'Os',
      description: "Les gros os endommagent l'axe, sauf s'ils sont écrasés",
      icon: noSymbolIcon(),
    },
    {
      name: 'Coquilles',
      description: 'Elles endommageront la machine, sauf si elles sont cassées',
      icon: noSymbolIcon(),
    },
    {
      name: 'Tiges de fruits',
      description:
        "Les fibres longues endommagent l'axe, sauf si elles sont coupées court",
      icon: noSymbolIcon(),
    },
    {
      name: 'Papier et mouchoirs',
      description:
        'Le papier ou les mouchoirs ne conviennent pas, ce ne sont pas des déchets verts',
      icon: noSymbolIcon(),
    },
    {
      name: 'Sachet de thé',
      description:
        'Il contient des déchets non biologiques, ce qui pourrait ne pas être bon pour les plantes',
      icon: noSymbolIcon(),
    },
    {
      name: 'Cigarette',
      description:
        'GEME ne fume pas, cela pourrait être nocif pour les plantes',
      icon: noSymbolIcon(),
    },
    {
      name: 'Serviettes',
      description:
        'Ce ne sont pas des déchets organiques, mettez-les simplement dans une autre poubelle',
      icon: noSymbolIcon(),
    },
    {
      name: 'Graines',
      description:
        'Elles sont difficiles à composter, par nature elles sont anti-compostage',
      icon: noSymbolIcon(),
    },
  ],
}

export function ManualsPageFr({
  PrefetchLink,
  WhatsAppBusinessAccountURL,
}: IManualsPageProps) {
  return (
    <>
      <HeroSection
        {...manualHeroSectionProps}
        PrefetchLink={PrefetchLink}
        WhatsAppBusinessAccountURL={WhatsAppBusinessAccountURL}
      />
      <FeaturesWithVideos {...featuresWithVideos} />
      <GemeDailyUsage {...gemeDailyUsageProps} />
      <CanNotCompostItems {...canNotCompostItemsProps} />
    </>
  )
}
