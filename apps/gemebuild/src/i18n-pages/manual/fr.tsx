/* eslint-disable react/no-unescaped-entities */
import CanNotCompostItems, {
  ICanNotCompostItemsProps,
  noSymbolIcon,
} from './components/CanNotCompostItems'
import FeaturesWithVideos, {
  featureIcon,
  IFeaturesWithVideos,
} from './components/FeaturesWithVideos'
import GeemDailyUsage from './components/GemeDailyUsage'
import HeroSection, { IManualHeroSectionProps } from './components/HeroSection'
import { IManualsPageProps } from './en'

// 第1部分配置文件 Fr版
const manualHeroSectionProps: IManualHeroSectionProps = {
  title: 'Tutoriel sur le Compostage avec GEME', // 使用GEME进行堆肥的教程
  description: (
    <>
      <p>
        <strong>Points clés pour démarrer votre composteur GEME</strong>{' '}
        {/* GEME堆肥箱入门要点 */}
      </p>
      <br></br>
      <div className="flex flex-col justify-center items-center lg:block">
        <ol className="text-left">
          <li>1. Déballage et installation de votre bac à compost GEME</li>{' '}
          {/* 拆箱和安装您的GEME堆肥箱 */}
          <li>2. Précautions et conseils pour optimiser le compostage</li>{' '}
          {/* 优化堆肥的注意事项和建议 */}
          <li>3. Activation des micro-organismes avec GEME-Kobold</li>{' '}
          {/* 使用GEME-Kobold激活微生物 */}
          <li>
            4. Utilisation quotidienne pour réduire votre volume de déchets
          </li>{' '}
          {/* 日常使用以减少废物量 */}
          <li>
            5. Valorisation du compost et des matières organiques produites
          </li>{' '}
          {/* 利用产生的堆肥和有机物质 */}
          <li>6. Stabilisation de votre composteur GEME</li>{' '}
          {/* 稳定您的GEME堆肥箱 */}
          <li>7. Utilisation du panneau de contrôle et dépannage</li>{' '}
          {/* 控制面板的使用和故障排除 */}
          <li>
            8. Remplacement de la lampe UV pour une désinfection optimale
          </li>{' '}
          {/* 更换紫外线灯以实现最佳消毒 */}
          <li>9. Guide des déchets compostables et non compostables</li>{' '}
          {/* 可堆肥和不可堆肥废物指南 */}
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
  title: "Manuel de l'utilisateur pour un compostage efficace !", // 高效堆肥用户手册！
  description:
    'Découvrez nos vidéos détaillées sur les différentes méthodes de compostage avec GEME', // 了解使用GEME进行堆肥的各种方法的详细视频
  features: [
    {
      name: 'Déballage et installation', // 拆箱和安装
      description:
        'Cette vidéo vous guide étape par étape pour déballer et configurer votre bac à compost GEME, prêt à décomposer vos déchets organiques en 6 à 8 heures et à produire du compost mûr en 45 jours.', // 本视频将指导您逐步拆箱并设置GEME堆肥箱，准备在6到8小时内分解有机废物，并在45天内产生成熟堆肥。
      icon: featureIcon(1),
      videoUrl: 'https://www.youtube.com/embed/izYVDd6KwO8',
      videoImageSrc: '/assets/images/manual/video-cover-unboxing.png',
      videoImageAlt: 'Déballage du composteur GEME',
    },
    {
      name: 'Précautions et optimisation', // 注意事项和优化
      description:
        "L'utilisation optimale du composteur GEME nécessite quelques précautions, notamment pour gérer les déchets verts et les déchets bruns.", // GEME堆肥箱的最佳使用需要一些注意事项，特别是在处理绿色废物和棕色废物时。
      icon: featureIcon(2),
      videoUrl: 'https://www.youtube.com/embed/f09NNpAnyTQ',
      videoImageSrc: '/assets/images/manual/video-cover-cautions.png',
      videoImageAlt: "Précautions d'utilisation du composteur GEME",
    },
    {
      name: 'Activation des micro-organismes', // 激活微生物
      description:
        "1. Placez le GEME-kobold dans le conteneur; 2. Ajoutez 800 ml d'eau; 3. Patientez 6+ heures pour que les micro-organismes s'activent.", // 1. 将GEME-kobold放入容器中; 2. 加入800毫升水; 3. 等待6小时以上，让微生物激活。
      icon: featureIcon(3),
      videoUrl: 'https://www.youtube.com/embed/hSpq48ymKrA',
      videoImageSrc:
        '/assets/images/manual/video-cover-activate-microbiota.png',
      videoImageAlt: 'Comment activer GEME-Kobold (Microbiota)',
    },
    {
      name: 'Utilisation quotidienne', // 日常使用
      description:
        'Utiliser GEME au quotidien est aussi simple que de trier vos déchets alimentaires et déchets verts. Réduisez votre volume de déchets facilement !', // 日常使用GEME就像分类食物垃圾和绿色废物一样简单。轻松减少废物量！
      icon: featureIcon(4),
      videoUrl: 'https://www.youtube.com/embed/mi8fwlJdt68',
      videoImageSrc: '/assets/images/manual/video-cover-daily-usage.png',
      videoImageAlt: 'Utilisation quotidienne du composteur GEME',
    },
    {
      name: 'Utilisation du compost produit', // 使用产生的堆肥
      description:
        'Récupérez le compost mûr et mélangez-le avec de la terre pour nourrir vos plantes. Un excellent moyen de valoriser vos déchets organiques !', // 取出成熟的堆肥，与土壤混合以滋养植物。这是利用有机废物的绝佳方式！
      icon: featureIcon(5),
      videoUrl: 'https://www.youtube.com/embed/qHo9WgCKUsw',
      videoImageSrc: '/assets/images/manual/video-cover-by-product-usage.png',
      videoImageAlt: 'Comment utiliser le compost organique produit',
    },
    {
      name: 'Stabilisation du composteur', // 稳定堆肥箱
      description:
        'Apprenez à stabiliser votre composteur GEME pour qu\'il reste "abrité du vent" et fonctionne efficacement.', // 学习如何稳定您的GEME堆肥箱，使其"避风"并高效运作。
      icon: featureIcon(6),
      videoUrl: 'https://www.youtube.com/embed/rthDSasoOrY',
      videoImageSrc: '/assets/images/manual/video-cover-make-steady.png',
      videoImageAlt: 'Comment stabiliser le composteur GEME',
    },
    {
      name: 'Utilisation du panneau de contrôle et dépannage', // 控制面板使用和故障排除
      description:
        "En général, vous n'aurez pas à vous soucier des indicateurs, mais cette vidéo vous aidera en cas de besoin pour optimiser le processus de compostage.", // 通常，您不需要担心指示灯，但如果需要优化堆肥过程，这个视频会帮助您。
      icon: featureIcon(7),
      videoUrl: 'https://www.youtube.com/embed/jc5_ferVOa8',
      videoImageSrc:
        '/assets/images/manual/video-cover-control-panel-usage.png',
      videoImageAlt: 'Comment dépanner via le panneau de contrôle',
    },
    {
      name: 'Remplacement de la lampe UV', // 更换紫外线灯
      description:
        'GEME utilise une lampe UV pour désinfecter, assurant que vos déchets se décomposent sainement. Elle peut fonctionner plus de 15 000 heures, mais voici comment la remplacer si nécessaire.', // GEME使用紫外线灯进行消毒，确保您的废物健康分解。它可以工作超过15,000小时，但这里是如何在必要时更换它。
      icon: featureIcon(8),
      videoUrl: 'https://www.youtube.com/embed/VdAtQfpSQ_E',
      videoImageSrc: '/assets/images/manual/video-cover-change-uv-lamp.png',
      videoImageAlt: 'Comment changer la lampe UV du composteur GEME',
    },
    {
      name: 'Guide des déchets compostables', // 可堆肥废物指南
      description:
        "Jusqu'à 90% des déchets organiques peuvent être compostés avec GEME. Découvrez quels déchets sont compostables et lesquels éviter pour un compost de qualité.", // 高达90%的有机废物可以用GEME堆肥。了解哪些废物可以堆肥，哪些应避免，以获得高质量的堆肥。
      icon: featureIcon(9),
      videoUrl: 'https://www.youtube.com/embed/2DSFcxFRSos',
      videoImageSrc: '/assets/images/manual/video-cover-can-and-can-not.png',
      videoImageAlt:
        'Ce qui peut être mis dans le composteur GEME et ce qui ne peut pas',
    },
  ],
}

// 第3部分配置文件 Fr版
const geemDailyUsageProps = {
  title: 'Utilisation quotidienne simplifiée', // 简化的日常使用
  description:
    "Avec GEME, pas besoin d'ajuster le rapport carbone-azote, de retourner le compost ou de remplacer les filtres. Ajoutez vos déchets organiques à tout moment et récoltez le compost quand il est prêt. Son axe rotatif interne mélange efficacement les déchets sans que vous ayez à intervenir. GEME n'est pas un composteur rotatif traditionnel, mais une solution de compostage innovante et sans complications !", // 使用GEME，无需调整碳氮比，翻堆或更换过滤器。随时添加有机废物，在堆肥准备好时收获。其内部旋转轴有效混合废物，无需您的干预。GEME不是传统的旋转堆肥箱，而是一种创新的、无复杂操作的堆肥解决方案！
  categories: [
    {
      imageSrc: '/assets/images/meet-geme/m1.png',
      imageAlt: 'Une main ajoutant des déchets alimentaires dans GEME', // 一只手将食物垃圾添加到GEME中
    },
    {
      imageSrc: '/assets/images/meet-geme/m2.png',
      imageAlt: 'Une main tenant du compost fraîchement produit', // 一只手拿着新鲜产生的堆肥
    },
    {
      imageSrc: '/assets/images/meet-geme/m3.png',
      imageAlt: 'Utilisation du compost pour nourrir des fleurs', // 使用堆肥滋养花卉
    },
  ],
}

// 第4部分配置文件 Fr版
const canNotCompostItemsProps: ICanNotCompostItemsProps = {
  title: 'Déchets à éviter dans votre GEME', // 避免放入GEME的废物
  description:
    'GEME est conçu pour traiter la plupart des déchets organiques, mais certains matériaux peuvent perturber le processus de compostage.', // GEME设计用于处理大多数有机废物，但某些材料可能会干扰堆肥过程。
  features: [
    {
      name: 'Os',
      description:
        "Les gros os peuvent endommager le mécanisme, sauf s'ils sont préalablement broyés.", // 大骨头可能会损坏机制，除非事先粉碎。
      icon: noSymbolIcon(),
    },
    {
      name: 'Coquilles',
      description:
        "Les coquilles dures risquent d'endommager la machine, à moins d'être concassées.", // 坚硬的贝壳可能会损坏机器，除非被压碎。
      icon: noSymbolIcon(),
    },
    {
      name: 'Tiges de fruits fibreuses',
      description:
        "Les fibres longues peuvent s'enrouler autour de l'axe. Coupez-les en petits morceaux avant de les ajouter.", // 长纤维可能会缠绕在轴上。在添加之前将它们切成小块。
      icon: noSymbolIcon(),
    },
    {
      name: 'Papier et mouchoirs',
      description:
        'Bien que biodégradables, le papier journal et les mouchoirs ne sont pas considérés comme des déchets verts. Préférez le recyclage.', // 虽然可生物降解，但报纸和纸巾不被视为绿色废物。最好回收利用。
      icon: noSymbolIcon(),
    },
    {
      name: 'Sachets de thé',
      description:
        'Ils contiennent souvent des matières non biodégradables qui pourraient nuire à la qualité de votre compost.', // 它们通常含有不可生物降解的材料，可能会影响堆肥的质量。
      icon: noSymbolIcon(),
    },
    {
      name: 'Mégots de cigarette',
      description:
        'Les substances toxiques des cigarettes pourraient contaminer votre compost et nuire aux plantes.', // 香烟中的有毒物质可能会污染堆肥并伤害植物。
      icon: noSymbolIcon(),
    },
    {
      name: 'Serviettes hygiéniques',
      description:
        'Ces produits ne sont pas des déchets organiques compostables. Disposez-en dans les poubelles appropriées.', // 这些产品不是可堆肥的有机废物。请将它们放入适当的垃圾桶。
      icon: noSymbolIcon(),
    },
    {
      name: 'Graines',
      description:
        'Les graines sont naturellement résistantes au compostage et pourraient germer dans votre compost, créant des plantes indésirables.', // 种子天然抗堆肥，可能会在堆肥中发芽，产生不需要的植物。
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
      <GeemDailyUsage {...geemDailyUsageProps} />
      <CanNotCompostItems {...canNotCompostItemsProps} />
    </>
  )
}
