/* eslint-disable react/no-unescaped-entities */
import {
  IInlinePlayerType,
  InlinePlayer,
  type IOxygenCycleProps,
  ScrollTriggeredAnimatedOxygenCycle,
  SvgFoodWaste,
  SvgMicrobe,
  SvgOxygen,
  SvgTemperature,
  SvgWaterDrop,
  SvgWood,
  ImgAndTextSection,
  IImgAndTextSectionProps,
} from 'ui'

import {
  IUseCompostContrastProps,
  UseCompostContrast,
  IExaminingReportProps,
  ExaminingReport,
} from './components'
import { ReviewsScoreHeader } from '../pdp/components/reviews-score-header'
import { IHowItWorksProps } from './en'

// page静态页面的内容 配置文件 Fr版
// 短视频工作过程section
const shortVideoProps: IImgAndTextSectionProps = {
  title: 'Tas de compost dans une boîte',
  description: (
    <>
      <ul className="list-disc ml-4 mt-4">
        <li className="mt-4">
          <a href="product/geme">Le composteur GEME</a> décompose rapidement les
          restes de nourriture et les déchets d'animaux en utilisant des
          microbes spéciaux.
        </li>

        <li className="mt-4">
          Le mélangeur augmente la surface des déchets alimentaires pour que les
          microbes s'y attachent.
        </li>

        <li className="mt-4">
          Il crée un <strong>environnement idéal pour que les microbes</strong>
          prospèrent et décomposent les déchets.
        </li>

        <li className="mt-4">
          Similaire au compostage extérieur, mais dans un contenant propre et
          pratique.
        </li>
      </ul>
    </>
  ),
  videoPosterUrl: '/assets/images/home-v2311/use-compost-cover.jpg',
  videoSrcUrl:
    'https://www-geme-bio-us.s3.us-west-1.amazonaws.com/geme-genereate-compost-12s-480p.mp4',
}

// 图文section
const imageTextProps: IImgAndTextSectionProps = {
  title: 'Microbes, pas déshydrater',
  description: (
    <>
      <p>
        De nombreuses machines déshydratantes alimentaires sont commercialisées
        de manière trompeuse comme des composteurs. Cependant, ce sont
        simplement des machines à pain qui cuisent et déshydratent les aliments,
        sans vraiment les composter.
      </p>
      <p>
        Ces déshydrateurs utilisent l'électricité pour chauffer et sécher les
        restes de nourriture.
      </p>
      <hr className="mt-4 mb-4" />
      <p>
        En revanche, le composteur GEME utilise{' '}
        <a href="/geme-kobold">GEME Kobold</a> pour accélérer le processus de
        compostage.
      </p>
      <p>
        Il utilise l'électricité pour{' '}
        <strong>simuler et maintenir l'environnement optimal</strong>,
        permettant aux microbes de prospérer et de décomposer efficacement les
        déchets organiques.
      </p>
    </>
  ),
  imageUrl: '/assets/images/how-it-works/geme-vs-dehydrators.png',
  isReverse: true,
}

// 工作原理图
const gemeComposterImageProps: IExaminingReportProps = {
  title: `Comment fonctionne le composteur GEME`,
  description: `Comprendre complètement comment la machine fonctionne et pourquoi le composteur GEME est le meilleur composteur domestique avec ses sous-systèmes fonctionnels.`,
  imageInfo: {
    imageUrl: '/assets/images/how-it-works/how-geme-composter-works.jpg',
    alt: 'Schéma de fonctionnement du composteur GEME',
  },
}

// Kobold工作过程大图section
const gemeKoboldImageProps: IExaminingReportProps = {
  title: `Comment fonctionne le GEME Kobold`,
  description: `GEME a de petits décomposeurs appelés Kobold qui mangent vos restes de nourriture. Ces décomposeurs se multiplient rapidement et décomposent les restes en compost riche en nutriments. En travaillant, la quantité de déchets alimentaires diminue. Kobold maintient également la santé du compost en équilibrant son acidité et son humidité.`,
  imageInfo: {
    imageUrl: '/assets/images/how-it-works/how-geme-kobold-works.png',
    alt: 'Comment fonctionne le GEME Kobold',
  },
}

// 滚动圈配置项
const oxygenCycleProps: IOxygenCycleProps = {
  title: 'Comment fonctionne le compostage naturel',
  progresses: [
    {
      minProgress: 12.5,
      content: (
        <>
          <SvgFoodWaste className="w-8 h-8 md:w-16 md:h-16" />
          <h3 className=" v2311-font-body !text-[11px] md:!text-[24px] md:!v2311-font-h3 text-v2311-primary font-bold text-center mt-2 md:mt-4 ">
            Nutriments (déchets alimentaires)
          </h3>
          <p className="hidden md:block v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 text-xs !text-[10px] md:!text-base">
            Les micro-organismes ont besoin de C, N, phosphore (P) et potassium
            (K) comme nutriments principaux. Le rapport C:N des matières
            premières est important. Le rapport C:N optimal des matières
            premières se situe entre 25:1 et 30:1.
          </p>
          <p className="hidden lg:block v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 text-xs !text-[10px] md:!text-base">
            Lorsque le rapport est trop élevé, la croissance des
            micro-organismes est limitée, ce qui entraîne un temps de compostage
            plus long. Un rapport C:N plus faible conduit à une sous-utilisation
            de N et peut poser des problèmes d'odeur.
          </p>
          <p className=" v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 text-xs !text-[10px] md:!text-base ">
            Le composteur GEME et GEME Kobold s'occuperont automatiquement du
            rapport C:N pour vous.
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
            Compostage aérobie :
            <br />
            cycle naturel des nutriments
          </h3>
          <p className="hidden lg:block v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 text-xs !text-[10px] md:!text-base ">
            Le compostage aérobie décompose la matière organique en utilisant de
            l'oxygène (O₂), nécessitant des microbes aérobies pour décomposer
            les matériaux en vapeur d'eau, chaleur et humus riche en nutriments.
            Le composteur GEME simplifie ce processus avec un système de
            ventilation efficace, optimisant le flux d'oxygène pour une
            décomposition efficace.
          </p>
          <p className="lg:hidden v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 text-xs !text-[10px] md:!text-base ">
            Décompose les bio-déchets avec de l'oxygène (O₂) pour des nutriments
            précieux. Le composteur GEME simplifie cela avec un système d'air
            efficace pour une décomposition plus rapide.
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
            Matériaux bruns dans le compostage : garantir des conditions
            optimales
          </h3>
          <p className="hidden lg:block  v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 text-xs !text-[10px] md:!text-base ">
            Les matériaux bruns, riches en carbone, jouent un rôle crucial dans
            le compostage en équilibrant le rapport carbone-azote (C:N),
            essentiel pour l'activité microbienne. Leur structure améliore la
            porosité, favorisant la décomposition aérobie. Le démarreur GEME
            Kobold, contenant des matériaux bruns soigneusement sélectionnés,
            assure un rapport C:N équilibré et des conditions de compostage
            optimales.
          </p>
          <p className="lg:hidden  v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 text-xs !text-[10px] md:!text-base ">
            Les matériaux bruns, riches en carbone, équilibrent le rapport C:N
            pour les microbes. Leur structure favorise le flux d'air. Le
            démarreur GEME Kobold fournit ces matériaux bruns pour des
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
            Humidité : le secret du
            <br />
            compostage rapide
          </h3>
          <p className="hidden lg:block v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 text-xs !text-[10px] md:!text-base ">
            L'humidité est essentielle dans le compostage, influençant la façon
            dont les microbes décomposent les matériaux. La plage idéale ?
            40-60%. Cela favorise la croissance microbienne, accélérant la
            décomposition. Trop d'humidité (&gt;70%) crée des odeurs et ralentit
            la décomposition. La sécheresse (&lt;30%) entrave les microbes,
            ralentissant le processus.
          </p>
          <p className="hidden lg:block v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 text-xs !text-[10px] md:!text-base ">
            Le composteur GEME simplifie la gestion de l'humidité. Son contrôle
            intelligent à une touche ajuste automatiquement, garantissant la
            plage parfaite de 40-60% pour un compost efficace et de haute
            qualité.
          </p>
          <p className="lg:hidden v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 text-xs !text-[10px] md:!text-base ">
            La bonne humidité (40-60%) favorise les microbes qui décomposent les
            déchets. Trop humide (plus de 70%) crée des odeurs et ralentit la
            décomposition. Trop sec (moins de 30%) rend les microbes paresseux.
            GEME gère l'humidité pour un compostage parfait.
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
            Compostage :
            <br />
            une danse de température
          </h3>
          <p className="hidden lg:block v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 text-xs !text-[10px] md:!text-base ">
            Le compostage transforme les déchets en sol riche en nutriments
            grâce à des changements de température dus à l'activité microbienne.
            Initialement, les microbes chauffent le compost à 40-50°C. Pendant
            la décomposition de pointe, les températures montent à 50-65°C pour
            une décomposition rapide. À mesure que le compost mûrit, il se
            refroidit à 30-40°C.
          </p>
          <p className="hidden lg:block v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 text-xs !text-[10px] md:!text-base ">
            Le composteur GEME optimise ce processus en régulant la température
            à chaque étape, assurant un compostage efficace et de haute qualité.
          </p>
          <p className="lg:hidden v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 text-xs !text-[10px] md:!text-base ">
            Le compostage transforme les déchets en sol riche en nutriments
            grâce à des changements de température dus à l'activité microbienne.
            Initialement, les microbes chauffent le compost à 40-50°C. Pendant
            la décomposition de pointe, les températures montent à 50-65°C pour
            une décomposition rapide. À mesure que le compost mûrit, il se
            refroidit à 30-40°C. Le composteur GEME optimise ce processus en
            régulant la température à chaque étape, assurant un compostage
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
            Microbes
            <br />
            (GEME Kobold)
          </h3>
          <p className="hidden lg:block v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 text-xs !text-[10px] md:!text-base ">
            Le compostage est un processus naturel entraîné par des microbes qui
            décomposent les déchets organiques en amendements du sol riches en
            nutriments. Les champignons s'attaquent aux matériaux difficiles
            comme la cellulose, tandis que d'autres microbes décomposent
            d'autres matières organiques. GEME Kobold, une équipe microbienne
            unique résistante à la chaleur, accélère le compostage.
          </p>
          <p className="lg:hidden v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 text-xs !text-[10px] md:!text-base ">
            Recycleurs naturels : les microbes décomposent les déchets en
            amendements du sol riches en nutriments. Les champignons s'attaquent
            aux matériaux difficiles, tandis que d'autres microbes décomposent
            d'autres matières organiques. GEME Kobold, une équipe microbienne
            unique résistante à la chaleur, accélère le compostage.
          </p>
        </>
      ),
    },
  ],
}

// 证书及测试报告
const examiningReportProps: IExaminingReportProps = {
  title: `Certificats et rapport de test`,
  description: `Tant GEME Kobold que GEME Composter sont bien certifiés et ont passé tous les tests effectués par des organisations autorisées.`,
  imageInfo: {
    imageUrl: '/assets/images/how-it-works/certificates-and-test-report.jpeg',
    alt: 'Certificats et rapport de test pour GEME',
  },
  downloadHref: (
    <>
      Télécharger le rapport de test de niveau de sel{' '}
      <a href="#" target="_blank">
        ICI
      </a>
    </>
  ),
}

// before vs after
const useCompostContrastProps: IUseCompostContrastProps = {
  title: `Avant et après l'application du compost GEME`,
  description: `Voyez comment le compost GEME peut aider à rendre la terre plus verte en réduisant les déchets d'enfouissement, en améliorant la santé du sol et en favorisant la croissance des plantes.`,
  beforeImage: {
    imageUrl: '/assets/images/how-it-works/used-geme-compost-before.png',
    alt: "Avant l'utilisation du compost",
  },
  afterImage: {
    imageUrl: '/assets/images/how-it-works/used-geme-compost-after.png',
    alt: "Après l'utilisation du compost",
  },
}

// YouTube 视频播放器
const inlinePlayerProps: IInlinePlayerType = {
  title: `Voir, c'est croire`,
  description: (
    <>
      <strong>Détruire 2 kg de déchets en 7 heures</strong> ! Cette vidéo non
      montée de 7 heures peut sembler ennuyeuse, mais elle offre un aperçu
      approfondi des performances réelles du composteur GEME. En comparant les 3
      premières minutes aux 10 dernières, vous serez étonné.
    </>
  ),

  type: 'youtube',
  videoSrcUrlOrVidioId: 'asNRoqkC_BA',
  mixpanelFrom: 'Lecteur intégré de la page produit',
}

function HowItWorksFr({ ReviewsComponent }: IHowItWorksProps) {
  return (
    <>
      <div className="py-8 lg:pt-6 lg:pb-16">
        <ImgAndTextSection {...shortVideoProps} />
        <ImgAndTextSection {...imageTextProps} />
        <ExaminingReport {...gemeComposterImageProps} />
        <ExaminingReport {...gemeKoboldImageProps} />
        <ScrollTriggeredAnimatedOxygenCycle {...oxygenCycleProps} />
        <ExaminingReport {...examiningReportProps} />
        <UseCompostContrast {...useCompostContrastProps} />
        <InlinePlayer {...inlinePlayerProps} />
        <div className="my-4">
          <ReviewsScoreHeader locale="fr" />
        </div>
        <ReviewsComponent />
      </div>
    </>
  )
}

export { HowItWorksFr }
