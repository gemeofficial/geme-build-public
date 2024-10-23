/* eslint-disable react/no-unescaped-entities */
import {
  HeroSection1,
  ContentSection1,
  ContentSection2,
  ContentSection3,
  ContentSection4,
  ContentSection5,
  ContentSection6Fixed,
  CompostStep1,
  CompostStep2,
  CompostStep3,
  SecondLife,
  UserStoriesVideos,
} from 'ui'
import type {
  IHeroSection1Props,
  IContentSection1Props,
  IContentSection2Props,
  IContentSection3Props,
  IContentSection4Props,
  IContentSection5Props,
  IContentSection6FixedProps,
  ISecondLifeProps,
  IReviewsSectionConfig,
  IUserStoriesVideoProps,
} from 'ui'
import { Footprints, type IFootprintsProps } from '../../components/footprints'
import { Newsletter, INewsletterProps } from './components/newsletter'
import { ReviewsSectionModule } from '../../components/reviews-section-module'
import { IHomePageProps } from './en'
import HomeHeroSectionSwiper, {
  IHomeHeroSectionSwiperProps,
} from './components/HomeHeroSectionSwiper'
import { LogoCloud } from 'ui'

// 首页video部分的内容数据配置 Fr
const heroSection1Props: IHeroSection1Props = {
  title: `Le premier composteur de déchets organiques au monde`, // 世界上第一个有机废物堆肥机 | The world's first organic waste composter
  description: (
    <>
      <span className=" hidden xl:inline ">
        Découvrez GEME, le composteur électrique moderne pour la maison
        <br />
        Transformez vos déchets alimentaires quotidiens en compost organique
        grâce aux micro organismes
        <br />
        Moins de décharges, pour vos plantes et végétations. Triez à la source
        pour un impact maximal.
      </span>
      {/* 
      中文：
      发现GEME，现代家用电动堆肥机
      通过微生物将日常厨余垃圾转化为有机肥料
      减少垃圾填埋，滋养您的植物和绿化。在源头进行分类，实现最大影响。

      English:
      Discover GEME, the modern electric composter for your home
      Transform your daily food waste into organic compost using micro-organisms
      Less landfill, more nourishment for your plants and vegetation. Sort at source for maximum impact.
      */}
      <span className=" xl:hidden ">
        Découvrez GEME, le composteur électrique <br />
        moderne pour la maison. Transformez vos déchets <br />
        alimentaires quotidiens en compost organique grâce aux micro organismes
        <br />
        Moins de décharges, pour vos plantes et végétations. Triez à la source.
      </span>
    </>
  ),
  linkText: 'Acheter maintenant', // 立即购买 | Buy now
  linkUrl: '/product/geme',
  videoProps: {
    src: 'https://www-geme-bio-us.s3.us-west-1.amazonaws.com/hero-banner-window-video-19s-480p.mp4',
    posterUrl: '/assets/images/home-v2311/hero-blurred.webp',
  },
  fullScreenVideoUrl: 'https://www.youtube.com/embed/ROJYZBp0jcM',
  heroImageUrlPc: '/assets/images/home-v2311/cover-v3.jpg',
  heroImageUrlMobile: '/assets/images/home-v2311/cover-v3-mobile.jpg',
}

// 首页Swiper滚动轮播区域的内容数据配置 Fr
const heroSectionSwiperProps: IHomeHeroSectionSwiperProps = {
  section1: heroSection1Props,
  section2: {
    title: (
      <>
        Messedamm 22 <br /> Hall 1.2 Stand No.312
      </>
    ),
    description: (
      <>
        <div className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 3xl:text-[100px]">
          Rencontrez GEME à
        </div>
        <div className="xl:leading-[0.65] leading-none text-7xl md:text-[100px] lg:text-[150px] xl:text-[200px] 2xl:text-[300px] 3xl:text-[400px]">
          IFA
        </div>
        <div className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 3xl:text-[100px]">
          Berlin 2024
        </div>
      </>
    ),
    // 在IFA柏林2024展会上与GEME相见 | Meet GEME at IFA Berlin 2024
    linkText: 'En savoir plus', // 了解更多 | Learn more
    linkUrl: '/ifa',
    heroImageUrlPc: '/assets/images/ifa/hero-bg.png',
    heroImageUrlMobile: '/assets/images/ifa/hero-bg.png',
  },
  section3: {
    title: 'TERRA 2',
    description: (
      <>
        <div className="mt-10 xl:mt-20 3xl:mt-44 text-2xl md:text-5xl lg:text-6xl xl:text-4xl 3xl:text-6xl md:leading-none">
          NOUVELLE GÉNÉRATION DE COMPOSTEUR GEME
        </div>
        <div className="text-2xl md:text-5xl lg:text-6xl xl:text-4xl 3xl:text-6xl md:leading-none">
          SORTIE PROCHAINE
        </div>
      </>
    ),
    // GEME新一代堆肥机 即将推出 | NEW GENERATION OF GEME COMPOSTER COMING SOON
    linkText: 'En savoir plus', // 了解更多 | Learn more
    linkUrl: '/geme-terra-2',
    heroImageUrlPc: '/assets/images/home-v2311/hero-bg-3.jpg',
    heroImageUrlMobile: '/assets/images/home-v2311/hero-bg-mobile-3.jpg',
  },

  section4: {
    link: '/news',
    linkText: 'Voir les détails des nouvelles',
    videoUrlPc:
      'https://www-geme-bio-us.s3.us-west-1.amazonaws.com/media/videos/news-swiper-video-fr-pc.mp4',
    videoUrlMobile:
      'https://www-geme-bio-us.s3.us-west-1.amazonaws.com/media/videos/news-swiper-video-fr-mobile.mp4',
  },
}

// 首页第二部分的内容数据配置 Fr
const contentSection2Props: IContentSection2Props = {
  title:
    'Vous ressentez toujours la terrible expérience des ordures ménagères et du gaspillage alimentaire ?', // 您是否仍在经历令人不快的家庭垃圾和食物浪费？ | Are you still experiencing the terrible household waste and food waste experience?
  description: (
    <>
      Les ordures ménagères et les restes de nourriture peuvent être salissants
      et désagréables. <br />
      Ils créent des odeurs, attirent les mouches bruyantes et les ratons
      laveurs agaçants. <br />
      Votre poubelle est bouchée, la cuisine est mouillée et sale ? <br />
      60 % des déchets alimentaires finissent par être mis en décharge. <br />
      Vous pouvez l&apos;arrêter en triant vos déchets alimentaires à la source.
    </>
  ),
  /* 
  中文：
  家庭垃圾和食物残渣可能又脏又难闻。
  它们产生异味，吸引嗡嗡作响的苍蝇和讨厌的浣熊。
  您的垃圾桶堵塞了，厨房又湿又脏？
  60%的食物垃圾最终被送往垃圾填埋场。
  您可以通过在源头分类厨余垃圾来阻止这种情况。

  English:
  Household waste and food leftovers can be messy and unpleasant.
  They create odors, attract noisy flies and annoying raccoons.
  Is your trash can clogged, the kitchen wet and dirty?
  60% of food waste ends up in landfills.
  You can stop this by sorting your food waste at the source.
  */
  imageSrc: '/assets/images/home-v2311/food-waste-experience.jpg',
  imageAlt: "photo d'ordures ménagères et de gaspillage alimentaire", // 家庭垃圾和食物浪费照片 | photo of household waste and food waste
}

// 首页第三部分的内容数据配置 Fr
const contentSection3Props: IContentSection3Props = {
  title: 'Déchets alimentaires en nourriture pour plantes', // 将厨余垃圾转化为植物养料 | Food waste into plant nourishment
  items: [
    {
      id: 1,
      description: (
        <>
          Jetez toutes sortes de déchets compostables
          <br />
          Ajoutez des déchets alimentaires à tout moment
        </>
      ),
      /* 
      中文：
      扔掉各种可堆肥废弃物
      随时添加厨余垃圾

      English:
      Dispose of all kinds of compostable waste
      Add food waste at any time
      */
      imageSrc: '/assets/images/home-v2311/put-food-in-geme.jpg',
      imageAlt: 'put food waste in GEME composter', // 将厨余垃圾放入GEME堆肥机 | put food waste in GEME composter
    },
    {
      id: 2,
      description: (
        <>
          Compostage continu
          <br />
          Les déchets organiques sont réduits dans le composteur GEME
        </>
      ),
      /* 
      中文：
      持续堆肥
      有机废弃物在GEME堆肥机中被分解

      English:
      Continuous composting
      Organic waste is broken down in the GEME composter
      */
      imageSrc: '/assets/images/home-v2311/geme-is-running.jpg',
      imageAlt: 'wait food waste composting when GEME is running', // GEME运行时等待厨余垃圾堆肥 | wait for food waste composting while GEME is running
    },
    {
      id: 3,
      description: (
        <>
          Transformez les déchets en compost
          <br />
          Sortez facilement et utilisez
        </>
      ),
      /* 
      中文：
      将废弃物转化为堆肥
      轻松取出并使用

      English:
      Transform waste into compost
      Easily remove and use
      */
      imageSrc: '/assets/images/home-v2311/get-compost-from-geme.jpg',
      imageAlt: 'item 3',
    },
    {
      id: 4,
      description: (
        <>
          Enrichissez votre jardin d'un terreau fertile et nourrissant
          <br />
          Choyez vos plantes et contemplez leur épanouissement
        </>
      ),
      /* 
      中文：
      用肥沃的土壤丰富您的花园
      呵护您的植物，欣赏它们的茁壮成长

      English:
      Enrich your garden with fertile and nourishing soil
      Cherish your plants and watch them thrive
      */
      imageSrc: '/assets/images/home-v2311/planting.jpg',
      imageAlt: 'item 4',
    },
  ],
}

// 首页第四部分（youtube视频）的内容数据配置 Fr
const contentSection4Props: IContentSection4Props = {
  title: (
    <>
      Fini l'enfouissement,
      <br />
      Place au compostage !
    </>
  ),
  // 告别填埋，迎接堆肥！ | No more landfill, welcome composting!
  description:
    "GEME donne aux familles le pouvoir de transformer leurs déchets alimentaires quotidiens en jardins florissants et en sols fertiles. Réduisez votre empreinte carbone tout en détournant les déchets des décharges et des incinérateurs, contribuant ainsi à l'économie circulaire et à la valorisation des déchets. Triez vos déchets alimentaires à la source pour une meilleure valorisation.",
  /* 
  中文：
  GEME赋予家庭将日常厨余垃圾转化为繁茂花园和肥沃土壤的能力。减少您的碳足迹，同时将废弃物从垃圾填埋场和焚烧炉中转移，为循环经济和废弃物增值做出贡献。在源头对厨余垃圾进行分类，以实现更好的增值。

  English:
  GEME empowers families to transform their daily food waste into flourishing gardens and fertile soils. Reduce your carbon footprint while diverting waste from landfills and incinerators, contributing to the circular economy and waste valorization. Sort your food waste at the source for better valorization.
  */
  withMp4VideoOrYoutubeVideo: {
    type: 'youtube',
    videoPosterImage: {
      src: '/assets/images/home-v2311/cover-v4.jpg',
      alt: 'GEME dans votre maison', // GEME在您的家中 | GEME in your home
      width: 1600,
      height: 900,
      srcSetData: {
        '100w': '/assets/images/home-v2311/cover-v4.jpg',
      },
    },
    videoSrcUrl: 'https://www.youtube.com/embed/nlsTg4l_3zE',
  },
}

// 首页第五部分（滚动动画部分）的内容数据配置 Fr
const secondLifeProps: ISecondLifeProps = {
  titleLeftPart: 'Compost',
  titleRightPart: 'Nouvelle vie pour les déchets', // 废弃物的新生 | New life for waste
  description:
    'Vous pouvez réduire de 100 kg à 300 kg les émissions de CO2 en recyclant tous vos déchets alimentaires par le compostage, contribuant ainsi à la valorisation des déchets et en triant vos déchets alimentaires à la source.',
  /* 
  中文：
  通过堆肥回收所有厨余垃圾，您可以减少100kg到300kg的二氧化碳排放，从而为废弃物的增值做出贡献，并在源头对厨余垃圾进行分类。

  English:
  You can reduce CO2 emissions by 100 kg to 300 kg by recycling all your food waste through composting, thus contributing to waste valorization and sorting your food waste at the source.
  */

  articles: [
    {
      id: 1,
      title: 'Un sol vivant', // 活力土壤 | A living soil
      description: (
        <>
          Le compost, alchimie verte, enrichit la terre du jardin
          <br /> Et donne aux plantes l'élan d'une croissance sublime
        </>
      ),
      /* 
      中文：
      堆肥，这种绿色炼金术，丰富了花园的土壤
      并给予植物茁壮成长的动力

      English:
      Compost, a green alchemy, enriches the garden soil
      And gives plants the impetus for sublime growth
      */
      image: {
        width: 1200,
        height: 800,
        alt: 'Un sol vivant', // 活力土壤 | A living soil
        src: 'https://www.datocms-assets.com/79468/1666986512-moins_eau.jpg?w=10',
        srcSetData: {
          '100w':
            'https://www.datocms-assets.com/79468/1666986512-moins_eau.jpg?ixlib=js-2.3.2&auto=format&w=100',
          '300w':
            'https://www.datocms-assets.com/79468/1666986512-moins_eau.jpg?ixlib=js-2.3.2&auto=format&w=300',
          '600w':
            'https://www.datocms-assets.com/79468/1666986512-moins_eau.jpg?ixlib=js-2.3.2&auto=format&w=600',
          '900w':
            'https://www.datocms-assets.com/79468/1666986512-moins_eau.jpg?ixlib=js-2.3.2&auto=format&w=900',
          '1200w':
            'https://www.datocms-assets.com/79468/1666986512-moins_eau.jpg?ixlib=js-2.3.2&auto=format&w=1200',
        },
      },
    },
    {
      id: 2,
      title: 'Préservons chaque goutte', // 珍惜每一滴水 | Let's preserve every drop
      description: (
        <>
          Le compost, éponge fertile, étanche la soif de la terre <br /> Et
          berce vos semences vers une éclosion vigoureuse
        </>
      ),
      /* 
      中文：
      堆肥，这片肥沃的海绵，解除了土地的干渴
      并轻轻摇动您的种子，迎接它们茁壮的萌发

      English:
      Compost, a fertile sponge, quenches the thirst of the earth
      And gently rocks your seeds towards a vigorous sprouting
      */
      image: {
        width: 1200,
        height: 800,
        alt: 'Préservons chaque goutte', // 珍惜每一滴水 | Let's preserve every drop
        src: 'https://www.datocms-assets.com/79468/1666986527-sols_riches.jpg?w=10',
        srcSetData: {
          '100w':
            'https://www.datocms-assets.com/79468/1666986527-sols_riches.jpg?ixlib=js-2.3.2&auto=format&w=100',
          '300w':
            'https://www.datocms-assets.com/79468/1666986527-sols_riches.jpg?ixlib=js-2.3.2&auto=format&w=300',
          '600w':
            'https://www.datocms-assets.com/79468/1666986527-sols_riches.jpg?ixlib=js-2.3.2&auto=format&w=600',
          '900w':
            'https://www.datocms-assets.com/79468/1666986527-sols_riches.jpg?ixlib=js-2.3.2&auto=format&w=900',
          '1200w':
            'https://www.datocms-assets.com/79468/1666986527-sols_riches.jpg?ixlib=js-2.3.2&auto=format&w=1200',
        },
      },
    },
    {
      id: 3,
      title: 'Luttons contre le changement climatique', // 让我们共同应对气候变化 | Let's fight climate change
      description: (
        <>
          Le compost, gardien de notre terre, Éloigne les déchets de leur
          funeste destin <br /> Et pare notre planète d'un manteau verdoyant.
        </>
      ),
      /* 
      中文：
      堆肥，我们地球的守护者，将废弃物从悲惨的命运中解救出来
      并为我们的星球披上一件绿色的外衣。

      English:
      Compost, guardian of our earth, rescues waste from its grim fate
      And adorns our planet with a verdant mantle.
      */
      image: {
        width: 1200,
        height: 800,
        alt: 'Luttons contre le changement climatique', // 让我们共同应对气候变化 | Let's fight climate change
        src: 'https://www.datocms-assets.com/79468/1666986537-changements_climatiques.jpg?w=10',
        srcSetData: {
          '100w':
            'https://www.datocms-assets.com/79468/1666986537-changements_climatiques.jpg?ixlib=js-2.3.2&auto=format&w=100',
          '300w':
            'https://www.datocms-assets.com/79468/1666986537-changements_climatiques.jpg?ixlib=js-2.3.2&auto=format&w=300',
          '600w':
            'https://www.datocms-assets.com/79468/1666986537-changements_climatiques.jpg?ixlib=js-2.3.2&auto=format&w=600',
          '900w':
            'https://www.datocms-assets.com/79468/1666986537-changements_climatiques.jpg?ixlib=js-2.3.2&auto=format&w=900',
          '1200w':
            'https://www.datocms-assets.com/79468/1666986537-changements_climatiques.jpg?ixlib=js-2.3.2&auto=format&w=1200',
        },
      },
    },
  ],

  endTitleLeftPart: 'Renaissance des déchets', // 废弃物的重生 | Rebirth of waste
  endTitleRightPart: 'La vie continue !', // 生命在继续！ | Life goes on!
}

// 首页第六部分的内容数据配置 Fr
const contentSection6FixedProps: IContentSection6FixedProps = {
  title: "La façon la plus simple d'obtenir du compost", // 获得堆肥的最简单方法 | The simplest way to get compost
  videoPosterUrl: '/assets/images/home-v2311/use-compost-cover.jpg',
  videoSrcUrl:
    'https://www-geme-bio-us.s3.us-west-1.amazonaws.com/geme-genereate-compost-12s-480p.mp4',
  steps: [
    {
      id: 1,
      Icon: CompostStep1,
      description: (
        <>
          Pas de temps d'attente lent
          <br />
          Entretien facile
        </>
      ),
      /* 
      中文：
      无需漫长等待
      易于维护

      English:
      No slow waiting time
      Easy maintenance
      */
    },
    {
      id: 2,
      Icon: CompostStep2,
      description: (
        <>
          Pas de souillures <br />
          Inodore
        </>
      ),
      /* 
      中文：
      无污染
      无异味

      English:
      No mess
      Odorless
      */
    },
    {
      id: 3,
      Icon: CompostStep3,
      description: (
        <>
          Nul besoin de mélanger <br />
          fonctionne par tous les temps
        </>
      ),
      /* 
      中文：
      无需搅拌
      全天候运作

      English:
      No need to mix
      Works in all weather
      */
    },
  ],
}

// 首页第七部分的内容数据配置 Fr
const contentSection1Props2: IContentSection1Props = {
  title: <>L'essence du véritable compost</>, // 真正堆肥的精髓 | The essence of true compost
  description: (
    <>
      Loin des simulacres desséchés Gardez à l'esprit que la plupart des
      prétendus « composteurs » Ne sont que de vulgaires déshydrateurs,
      Réduisant les aliments en une pâle imitation de l'humus.
      <br />
      <br />
      GEME, quant à lui, orchestre une symphonie microbienne, Où la
      biotechnologie sublime la fermentation aérobie naturelle, Donnant
      naissance à l'authentique alchimie du compostage, transformant vos déchets
      verts et fruits et légumes en matière organique précieuse. Triez à la
      source pour un compostage optimal.
    </>
  ),
  /* 
  中文：
  远离干燥的仿制品 请记住，大多数所谓的"堆肥机"
  不过是简单的脱水器，
  将食物变成腐殖质的苍白模仿。

  而GEME则编排了一场微生物的交响乐，
  在这里，生物技术升华了自然的好氧发酵，
  孕育出真正的堆肥炼金术，将您的绿色废弃物和水果蔬菜转化为宝贵的有机物质。在源头进行分类，以实现最佳堆肥效果。

  English:
  Far from dried imitations Keep in mind that most so-called "composters"
  Are merely vulgar dehydrators,
  Reducing food to a pale imitation of humus.

  GEME, on the other hand, orchestrates a microbial symphony,
  Where biotechnology sublimates natural aerobic fermentation,
  Giving birth to the authentic alchemy of composting, transforming your green waste and fruits and vegetables into precious organic matter. Sort at source for optimal composting.
  */
  imageSrc: '/assets/images/home-v2311/the-man-get-compost-from-geme.jpg',
  imageAlt: "l'homme obtient du compost de GEME", // 男子从GEME获得堆肥 | The man gets compost from GEME
}

// 首页第八部分的内容数据配置 Fr
const contentSection1Props3: IContentSection1Props = {
  title: <>L'alliance de la BioTech et de l'ingénierie moderne</>, // 生物技术与现代工程的结合 | The alliance of BioTech and modern engineering
  description: (
    <>
      Un demi-siècle d'expertise scientifique Nos chercheurs, tels des
      alchimistes modernes, ont patiemment affiné leur art Au cœur des
      biodéchets, des sols épuisés et des eaux souillées Donnant naissance à la
      merveille qu'est GEME Kobold
      <br />
      <br />
      L'ingéniosité au service de l'environnement Nos ingénieurs, maîtres dans
      l'art de dompter les déchets. Ont forgé le GEME Composteur, fruit de leur
      savoir-faire
      <br />
      <br />
      GEME Kobold et GEME Composteur : Hérauts d'une révolution verte, ils
      métamorphosent nos déchets en trésors, contribuant à la collecte des
      déchets alimentaires et à leur valorisation dès janvier 2024. Triez à la
      source pour maximiser l'efficacité de ces innovations.
    </>
  ),
  /* 
  中文：
  半个世纪的科学专业知识 我们的研究人员，如现代炼金术士，
  耐心地在生物废弃物、贫瘠的土壤和污染的水中精进他们的技艺
  孕育出GEME Kobold这个奇迹

  工程智慧服务于环境 我们的工程师，驾驭废弃物的大师，
  打造出GEME堆肥机，这是他们专业知识的结晶

  GEME Kobold和GEME堆肥机：绿色革命的先驱，
  它们将我们的废弃物转化为宝藏，从2024年1月起为厨余垃圾的收集和增值做出贡献。在源头进行分类，以最大化这些创新的效率。

  English:
  Half a century of scientific expertise Our researchers, like modern alchemists,
  Have patiently refined their art in the heart of biowaste, exhausted soils and polluted waters
  Giving birth to the marvel that is GEME Kobold

  Ingenuity in service of the environment Our engineers, masters in the art of taming waste,
  Have forged the GEME Composter, fruit of their know-how

  GEME Kobold and GEME Composter: Heralds of a green revolution,
  They metamorphose our waste into treasures, contributing to food waste collection and valorization from January 2024. Sort at source to maximize the efficiency of these innovations.
  */
  imageSrc: '/assets/images/home-v2311/observe-the-plants.jpg',
  imageAlt: 'observer les plantes', // 观察植物 | Observing plants
}

// 首页第九部分（三动图）的内容数据配置 Fr
const contentSection5Props: IContentSection5Props = {
  title: 'Du déchet à la ressource : la transformation par GEME Kobold', // 从废弃物到资源：GEME Kobold的转化 | From waste to resource: the transformation by GEME Kobold
  description: (
    <>
      GEME Kobold : un processus biologique innovant Nos micro-organismes
      spécialisés prolifèrent en se nourrissant de vos résidus alimentaires.
      Efficaces sur tous types de déchets, qu'ils soient salés ou acides.
      <br />
      <br />
      Un cycle vertueux à domicile Transformez vos restes de cuisine en un
      compost de qualité. Une solution écologique, pratique et économique pour
      trier vos déchets alimentaires à la source.
      <br />
      <br />
      Résultat : un amendement organique prêt à l'emploi Nourrissez vos plantes
      avec un compost riche en nutriments. Contribuez à la santé de votre jardin
      et à la préservation de l'environnement en valorisant vos déchets
      organiques.
    </>
  ),
  /* 
  中文：
  GEME Kobold：创新的生物过程 我们专门的微生物通过消化您的厨余垃圾而繁殖。
  对各种类型的废弃物都有效，无论是含盐的还是酸性的。

  家庭中的良性循环 将您的厨房剩余物转化为优质堆肥。
  一种生态、实用且经济的解决方案，可以在源头对厨余垃圾进行分类。

  结果：即用型有机肥料 用富含营养的堆肥滋养您的植物。
  通过回收利用有机废物，为您的花园健康和环境保护做出贡献。

  English:
  GEME Kobold: An innovative biological process Our specialized microorganisms proliferate by digesting your food waste.
  Effective on all types of waste, whether salty or acidic.

  A virtuous cycle at home Transform your kitchen leftovers into quality compost.
  An ecological, practical and economical solution for sorting your food waste at the source.

  Result: Ready-to-use organic amendment Nourish your plants with nutrient-rich compost.
  Contribute to the health of your garden and the preservation of the environment by recycling your organic waste.
  */
  images: [
    {
      id: 1,
      stepText: 'Mettre les déchets',
      imageSrc: '/assets/images/home-v2311/compost-step-1.gif',
      imageAlt: 'image des déchets alimentaires',
    },
    {
      id: 2,
      stepText: 'Attendre quelques jours',
      imageSrc: '/assets/images/home-v2311/compost-step-2.gif',
      imageAlt: 'image des déchets alimentaires',
    },
    {
      id: 3,
      stepText: 'Sortir le compost',
      imageSrc: '/assets/images/home-v2311/compost-step-3.gif',
      imageAlt: 'image des déchets alimentaires',
    },
  ],
  bottomDescription: (
    <>
      Seulement 3 étapes en font la façon la plus simple de lutter contre le
      changement climatique.
    </>
  ),
}

// 首页第十部分（好评卡片）的内容数据配置 Fr -- 暂时弃用
const reviewsSectionProps = {
  title: 'Ce que disent les vrais utilisateurs',
  description:
    'Cliquez ci-dessous pour voir les vrais avis des gens, bons et mauvais - la vérité non filtrée dont vous avez besoin.',
}

// 首页第十部分（用户使用视频）的内容数据配置 Fr
const userStoriesVideosProps: IUserStoriesVideoProps = {
  title: 'Ce que disent les clients',
  videos: [
    {
      type: 'youtube',
      src: 'https://youtu.be/bYzh9ZUJKxs?t=845',
      coverImageUrl: '/assets/images/user-stories-videos/youtube4.png',
      coverAlt: 'Review video from bricolou, France',
      buttonText: '@bricolou',
    },
    {
      type: 'youtube',
      src: 'https://youtu.be/TwCYDZgoUl0?si=w5mzwn4dQJr6x0vD',
      coverImageUrl: '/assets/images/user-stories-videos/youtube.png',
      coverAlt: 'Real life usage reviews from Amazon',
      buttonText: '@Mister and Miss Ginger Jones',
    },
    {
      type: 'youtube',
      src: 'https://youtu.be/-qkjLB3GcKo',
      coverImageUrl: '/assets/images/user-stories-videos/youtube2.png',
      coverAlt: 'Real composter vs other dehydrate food recyclers',
      buttonText: '@Mister and Miss Ginger Jones',
    },
    {
      type: 'youtube',
      src: 'https://youtu.be/CVoDNDONFAk?t=979',
      coverImageUrl: '/assets/images/user-stories-videos/youtube3.png',
      coverAlt: 'Review video from Benson Chik, United Kingdom',
      buttonText: '@Benson Chik',
    },
    // {
    //   type: 'instagram',
    //   src: 'https://www.instagram.com/reel/CxBKZOYRKQN/?utm_source=ig_web_copy_link',
    //   coverImageUrl: '/assets/images/user-stories-videos/instagram.png',
    //   coverAlt: 'Real use video from twin brothers',
    //   buttonText: '@Messitttwins',
    // },
    // {
    //   type: 'tiktok',
    //   src: 'https://www.tiktok.com/@kc_smithwrites/video/7312898892079697198',
    //   coverImageUrl: '/assets/images/user-stories-videos/tiktok2.png',
    //   coverAlt: 'Users from tiktok use videos',
    //   buttonText: '@kc_smithwrites',
    // },
  ],
}

// 首页第十一部分（地图）的内容数据配置 Fr
const footprintsProps: IFootprintsProps = {
  grayBackground: true,
  title: 'Les empreintes vertes de GEME dans le monde',
  description:
    "Merci de soutenir GEME et d'apporter plus de vert au monde. Soyez le premier à le diffuser chez vous !",
  proportionalSymbolMapProps: {
    recentOrderedFrom: 'Les gens de {city} soutiennent GEME avec leur amour.',
  },
}

// 首页最后一个部分（加入我们）的内容数据配置 Fr
const newsltterProps: INewsletterProps = {
  newsletterCenteredCardProps: {
    title: 'Rejoignez le mouvement',
    description: (
      <>
        Une nouvelle approche du problème des déchets mondiaux commence avec
        chacun de nous, sans effort dans la vie quotidienne
      </>
    ),
    emailInputName: 'email-address',
    emailLabel: 'Adresse e-mail',
    emailPlaceholder: 'Entrez votre e-mail',
    submitButtonLabel: "S'abonner",
  },
  successNoticeProps: {
    title: 'Merci de vous être abonné!',
    description: 'Nous vous tiendrons au courant des dernières nouvelles.',
  },
}

function HomePageFr({ PrefetchLink, reviewsSectionConfig }: IHomePageProps) {
  heroSection1Props.LinkComponent = PrefetchLink
  heroSectionSwiperProps.LinkComponent = PrefetchLink
  const isOpenSwiperContent =
    process.env.NEXT_PUBLIC_HOME_HERO_SWIPER &&
    process.env.NEXT_PUBLIC_HOME_HERO_SWIPER == 'true'
      ? true
      : false

  return (
    <>
      {isOpenSwiperContent && (
        <HomeHeroSectionSwiper {...heroSectionSwiperProps} />
      )}
      {!isOpenSwiperContent && <HeroSection1 {...heroSection1Props} />}

      {/*<ContentSection2 {...contentSection2Props} />*/}
      <ContentSection3 {...contentSection3Props} />

      <LogoCloud canRedirect locale="fr" />

      <ContentSection4 {...contentSection4Props} />

      <SecondLife {...secondLifeProps} />

      <div>
        <ContentSection6Fixed {...contentSection6FixedProps} />
        <ContentSection1 {...contentSection1Props2} isDisplayTextOnLeft />
        <ContentSection1 {...contentSection1Props3} />
      </div>

      <div className=" bg-v2311-bg-light-green ">
        <ContentSection5 {...contentSection5Props} />
      </div>

      {/* <ReviewsSectionModule
        locale="fr"
        reviewsSectionConfig={reviewsSectionConfig}
        {...reviewsSectionProps}
      /> */}

      <UserStoriesVideos {...userStoriesVideosProps} />

      <Footprints {...footprintsProps} />

      <Newsletter {...newsltterProps} />
    </>
  )
}

export { HomePageFr }
