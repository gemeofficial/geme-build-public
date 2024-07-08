/* eslint-disable react/no-unescaped-entities */
import {
  ExaminingReport,
  IExaminingReportProps,
  IInlinePalyerType,
  InlinePlayer,
  type IOxygenCycleProps,
  IUseCompostContrastProps,
  ReviewsScoreHeader,
  ScrollTriggeredAnimatedOxygenCycle,
  SvgFoodWaste,
  SvgMicrobe,
  SvgOxygen,
  SvgTemperature,
  SvgWaterDrop,
  SvgWood,
  UseCompostContrast,
} from 'ui'

import { ShortVideo, IShortVideoProps } from 'ui/src/how-it-works/ShortVideo'
import { ILinkComponent } from '../../contexts/link-context'
import { FC } from 'react'

export interface IPdpIntroProps {
  ReviewsComponent: FC<{}>
  PrefetchLink?: ILinkComponent
}

// page静态页面的内容 配置文件 Fr版
// 短视频工作过程section
const shortVideoProps: IShortVideoProps = {
  title: 'Tas de compost dans une boîte',
  description: (
    <>
      <ul className="list-disc ml-4 mt-4">
        <li className="mt-4">
          <a href="product/geme">Le composteur GEME</a> décompose rapidement les
          déchets alimentaires et les excréments d'animaux à l'aide de microbes
          spéciaux.
        </li>
        <li className="mt-4">
          Le mélangeur augmente la surface des déchets alimentaires pour que les
          microbes puissent s'y fixer.
        </li>
        <li className="mt-4">
          Il crée un <strong>environnement idéal pour les microbes</strong> afin
          de prospérer et de décomposer les déchets.
        </li>
        <li className="mt-4">
          Semblable au compostage en extérieur, mais dans un contenant propre et
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
const imageTextProps: IShortVideoProps = {
  title: 'Microbes, pas déshydrater',
  description: (
    <>
      <p>
        De nombreuses machines de déshydratation des aliments sont
        commercialisées de manière trompeuse en tant que composteurs. Cependant,
        ce sont simplement des machines à pain qui cuisent et déshydratent les
        aliments, sans les composter réellement.
      </p>
      <p>
        Ces déshydrateurs utilisent l'électricité pour chauffer et sécher les
        déchets alimentaires.
      </p>
      <hr className="mt-4 mb-4" />
      <p>
        En revanche, le composteur GEME utilise le{' '}
        <a href="/geme-kobold">GEME Kobold</a> pour accélérer le processus de
        compostage.
      </p>
      <p>
        Il utilise l'électricité pour{' '}
        <strong>simuler et maintenir l'environnement optimal</strong> pour que
        les microbes prospèrent et décomposent efficacement les déchets
        organiques.
      </p>
    </>
  ),
  imageUrl: '/assets/images/how-it-works/geme-vs-dehydrators.png',
  isReverse: true,
}

// 工作原理图
const gemeComposterImageProps: IExaminingReportProps = {
  title: `Comment fonctionne le composteur GEME`,
  description: `Comprenez parfaitement comment fonctionne la machine et pourquoi le composteur GEME est le meilleur composteur domestique avec ses sous-systèmes de fonctionnalités.`,
  imageInfo: {
    imageUrl: '/assets/images/how-it-works/how-geme-composter-works.jpg',
    alt: 'Schéma de fonctionnement du composteur GEME',
  },
}

// Kobold工作过程大图section
const gemeKoboldImageProps: IExaminingReportProps = {
  title: `Comment fonctionne le GEME Kobold`,
  description: `GEME possède de petits décomposeurs appelés Kobold qui consomment vos déchets alimentaires。 Ces décomposeurs se multiplient rapidement et décomposent les déchets en compost riche en nutriments. Au fur et à mesure qu'ils travaillent, la quantité de déchets alimentaires diminue. Kobold maintient également le compost en bonne santé en équilibrant son acidité et son humidité.`,
  imageInfo: {
    imageUrl: '/assets/images/how-it-works/how-geme-kobold-works.png',
    alt: 'Comment fonctionne le GEME Kobold',
  },
}

// 证书及测试报告
const examiningReportProps: IExaminingReportProps = {
  title: `Certificats et Rapport de Test`,
  description: `Le GEME Kobold et le composteur GEME sont bien certifiés et ont passé tous les tests menés par des organisations autoritaires.`,
  imageInfo: {
    imageUrl: '/assets/images/how-it-works/certificates-and-test-report.jpeg',
    alt: 'Certificats et rapport de test pour GEME',
  },
  downloadHref: (
    <>
      Télécharger le rapport de décomposition du niveau de sel{' '}
      <a href="#" target="_blank">
        ICI
      </a>
    </>
  ),
}

// before vs after
const useCompostContrastProps: IUseCompostContrastProps = {
  title: "Avant et après l'application du compost GEME",
  description:
    'Voyez comment le compost GEME peut aider à rendre la terre plus verte en réduisant les déchets de décharge, en améliorant la santé du sol et en favorisant la croissance des plantes.',
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
const inlinePlayerProps: IInlinePalyerType = {
  title: "Voir c'est croire",
  description: (
    <>
      <strong>Décomposez 2 kg de déchets en 7 heures!</strong> Cette vidéo non
      éditée de 7 heures peut sembler ennuyeuse, mais elle offre un aperçu
      approfondi des performances réelles du composteur GEME. En comparant les 3
      premières minutes aux 10 dernières minutes, vous serez étonné.
    </>
  ),

  type: 'youtube',
  videoSrcUrlOrVidioId: 'asNRoqkC_BA',
  mixpanelFrom: 'Lecteur intégré de la page produit',
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

function HowItWorksFr({ ReviewsComponent }: IPdpIntroProps) {
  return (
    <>
      <div className="py-8 lg:pt-6 lg:pb-16">
        <ShortVideo {...shortVideoProps} />
        <ShortVideo {...imageTextProps} />
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
