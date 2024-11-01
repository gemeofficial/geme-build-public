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

import { ILinkComponent } from '../../contexts/link-context'
import { FC } from 'react'

export interface IHowItWorksProps {
  ReviewsComponent: FC<{}>
  PrefetchLink?: ILinkComponent
}

// page静态页面的内容 配置文件 It版
// 短视频工作过程section
const shortVideoProps: IImgAndTextSectionProps = {
  title: 'Cumulo di Compost in una Scatola',
  description: (
    <>
      <ul className="list-disc ml-4 mt-4">
        <li className="mt-4">
          <a href="product/geme">Compostiera GEME</a> scompone rapidamente gli
          scarti alimentari e i rifiuti degli animali domestici utilizzando
          microbi speciali.
        </li>

        <li className="mt-4">
          Il miscelatore aumenta la superficie dei rifiuti alimentari a cui i
          microbi possono attaccarsi.
        </li>

        <li className="mt-4">
          Crea un <strong>ambiente ideale per i microbi</strong> per prosperare
          e decomporre i rifiuti.
        </li>

        <li className="mt-4">
          Simile al compostaggio all'aperto, ma in un contenitore ordinato e
          conveniente.
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
  title: 'Microbi, Non Disidratazione',
  description: (
    <>
      <p>
        Molti disidratatori per alimenti vengono commercializzati in modo
        fuorviante come compostatori. Tuttavia, sono semplicemente macchine per
        il pane che cuociono e disidratano il cibo, non lo compostano realmente.
      </p>
      <p>
        Questi disidratatori utilizzano l'elettricità per riscaldare e asciugare
        gli scarti alimentari.
      </p>
      <hr className="mt-4 mb-4" />
      <p>
        Al contrario, il Compostiera GEME utilizza{' '}
        <a href="/geme-kobold">GEME Kobold</a> per accelerare il processo di
        compostaggio.
      </p>
      <p>
        Utilizza l'elettricità per{' '}
        <strong>simulare e mantenere l'ambiente ottimale</strong>, permettendo
        ai microbi di prosperare, scomponendo efficacemente i rifiuti organici.
      </p>
    </>
  ),
  imageUrl: '/assets/images/how-it-works/geme-vs-dehydrator.png',
  isReverse: true,
}

// YouTube 视频播放器
const inlinePlayerProps: IInlinePlayerType = {
  title: 'Vedere per Credere',
  description: (
    <>
      <strong>Scomponi 2 kg di rifiuti in 7 ore</strong>! Questo video non
      modificato di 7 ore potrebbe sembrare noioso, ma offre uno sguardo
      approfondito sulle prestazioni reali del compostatore GEME. Confrontando i
      primi 3 minuti con gli ultimi 10 minuti, rimarrai stupito.
    </>
  ),

  type: 'youtube',
  videoSrcUrlOrVideoId: 'asNRoqkC_BA',
  mixpanelFrom: 'Product page inline player',
}

// 工作原理图
const gemeComposterImageProps: IExaminingReportProps = {
  title: `Come Funziona il Compostiera GEME`,
  description: `Comprendere completamente come funziona la macchina e perché il Compostiera GEME è il miglior compostiera domestico con i suoi sottosistemi speciali.`,
  imageInfo: {
    imageUrl: '/assets/images/how-it-works/how-geme-composter-works.jpg',
    alt: 'Schema di funzionamento del Compostiera GEME',
  },
}

// Kobold工作过程大图section
const gemeKoboldImageProps: IExaminingReportProps = {
  title: `Come funziona il GEME Kobold`,
  description: `GEME ha piccoli decompositori chiamati Kobold che mangiano i tuoi scarti alimentari. Questi decompositori si moltiplicano rapidamente e scompongono gli scarti in compost ricco di nutrienti. Man mano che lavorano, la quantità di rifiuti alimentari diminuisce. Kobold mantiene anche il compost sano bilanciando la sua acidità e umidità.`,
  imageInfo: {
    imageUrl: '/assets/images/how-it-works/how-geme-kobold-works.png',
    alt: 'Come funziona il GEME Kobold',
  },
}

// 滚动圈配置项
const oxygenCycleProps: IOxygenCycleProps = {
  title: 'Come Funziona il Compostaggio Naturale',
  progresses: [
    {
      minProgress: 12.5,
      content: (
        <>
          <SvgFoodWaste className="w-8 h-8 md:w-16 md:h-16" />
          <h3 className="v2311-body-large !text-[11px] md:!text-[24px] md:!v2311-title-h5 text-v2311-primary font-bold text-center mt-2 md:mt-4 ">
            Nutrienti (Rifiuti Alimentari)
          </h3>
          <p className="hidden md:block v2311-body-medium md:v2311-body-large text-v2311-primary mt-1 md:mt-2 text-xs !text-[10px] md:!text-base">
            I microrganismi richiedono C, N, fosforo (P) e potassio (K) come
            nutrienti primari. Il rapporto C:N delle materie prime è importante.
            Il rapporto C:N ottimale delle materie prime è compreso tra 25:1 e
            30:1.
          </p>
          <p className="hidden lg:block v2311-body-medium md:v2311-body-large text-v2311-primary mt-1 md:mt-2 text-xs !text-[10px] md:!text-base">
            Quando il rapporto è troppo alto, la crescita dei microrganismi è
            limitata, con conseguente allungamento del tempo di compostaggio. Un
            rapporto C:N troppo basso porta a una sottoutilizzazione dell'azoto
            e può causare cattivi odori.
          </p>
          <p className="v2311-body-medium md:v2311-body-large text-v2311-primary mt-1 md:mt-2 text-xs !text-[10px] md:!text-base">
            Il Compostiera GEME e il GEME Kobold si occuperanno automaticamente
            del rapporto C:N per te.
          </p>
        </>
      ),
    },
    {
      minProgress: 25,
      content: (
        <>
          <SvgOxygen className="w-8 h-8 md:w-16 md:h-16" />
          <h3 className="v2311-body-large !text-[11px] md:!text-[24px] md:!v2311-title-h5 text-v2311-primary font-bold text-center mt-2 md:mt-4 ">
            Compostaggio Aerobico:
            <br />
            Ciclo Naturale dei Nutrienti
          </h3>
          <p className="hidden lg:block v2311-body-medium md:v2311-body-large text-v2311-primary mt-1 md:mt-2 text-xs !text-[10px] md:!text-base">
            Il compostaggio aerobico decompone la materia organica utilizzando
            ossigeno (O2), richiedendo microrganismi aerobi per decomporre i
            materiali in vapore acqueo, calore e humus ricco di nutrienti. Il
            compostiera GEME semplifica questo processo con un efficiente
            sistema di aerazione, ottimizzando il flusso d'ossigeno per una
            decomposizione efficace.
          </p>
          <p className="lg:hidden v2311-body-medium md:v2311-body-large text-v2311-primary mt-1 md:mt-2 text-xs !text-[10px] md:!text-base">
            Decompone i rifiuti biologici con l'ossigeno (O2) per ottenere
            nutrienti preziosi. Il compostiera GEME semplifica questo con un
            efficiente sistema di aerazione per una decomposizione più rapida.
          </p>
        </>
      ),
    },
    {
      minProgress: 40,
      content: (
        <>
          <SvgWood className="w-8 h-8 md:w-16 md:h-16" />
          <h3 className="v2311-body-large !text-[11px] md:!text-[24px] md:!v2311-title-h5 text-v2311-primary font-bold text-center mt-2 md:mt-4 ">
            Materiali Marroni nel Compostaggio: Garantire Condizioni Ottimali
          </h3>
          <p className="hidden lg:block v2311-body-medium md:v2311-body-large text-v2311-primary mt-1 md:mt-2 text-xs !text-[10px] md:!text-base">
            I materiali marroni, ricchi di carbonio, svolgono un ruolo cruciale
            nel compostaggio bilanciando il rapporto carbonio-azoto (C:N),
            essenziale per l'attività microbica. La loro struttura migliora la
            porosità, promuovendo la decomposizione aerobica. Il GEME Kobold
            starter, contenente materiali marroni selezionati con cura, assicura
            un rapporto C:N equilibrato e condizioni ottimali per il
            compostaggio.
          </p>
          <p className="lg:hidden v2311-body-medium md:v2311-body-large text-v2311-primary mt-1 md:mt-2 text-xs !text-[10px] md:!text-base">
            I materiali marroni, ricchi di carbonio, bilanciano il rapporto C:N
            per i microrganismi. La loro struttura promuove il flusso d'aria. Il
            GEME Kobold starter fornisce questi materiali per condizioni
            ottimali.
          </p>
        </>
      ),
    },
    {
      minProgress: 60,
      content: (
        <>
          <SvgWaterDrop className="w-8 h-8 md:w-16 md:h-16" />
          <h3 className="v2311-body-large !text-[11px] md:!text-[24px] md:!v2311-title-h5 text-v2311-primary font-bold text-center mt-2 md:mt-4 ">
            Umidità: Il Segreto per un Compostaggio Rapido
          </h3>
          <p className="hidden lg:block v2311-body-medium md:v2311-body-large text-v2311-primary mt-1 md:mt-2 text-xs !text-[10px] md:!text-base">
            L'umidità è fondamentale nel compostaggio, influenzando il modo in
            cui i microrganismi decompongono i materiali. Il punto ottimale?
            40-60%. Questo alimenta la crescita microbica, accelerando la
            decomposizione. Troppa umidità (&gt;70%) crea odori e rallenta la
            decomposizione. Troppa secchezza (&lt;30%) ostacola i microrganismi,
            bloccando il processo.
          </p>
          <p className="lg:hidden v2311-body-medium md:v2311-body-large text-v2311-primary mt-1 md:mt-2 text-xs !text-[10px] md:!text-base">
            La giusta umidità (40-60%) alimenta i microrganismi che decompongono
            i rifiuti. Troppa umidità (&gt;70%) rallenta il processo, mentre
            troppa secchezza (&lt;30%) lo blocca. Il compostiera GEME gestisce
            automaticamente l'umidità per garantire un compostaggio perfetto.
          </p>
        </>
      ),
    },
    {
      minProgress: 78,
      content: (
        <>
          <SvgTemperature className="w-8 h-8 md:w-16 md:h-16" />
          <h3 className=" v2311-body-large !text-[11px] md:!text-[24px] md:!v2311-title-h5 text-v2311-primary font-bold text-center mt-2 md:mt-4 ">
            Compostaggio:
            <br /> Una Danza di Temperature
          </h3>
          <p className="hidden lg:block v2311-body-medium md:v2311-body-large text-v2311-primary mt-1 md:mt-2 text-xs !text-[10px] md:!text-base ">
            Il compostaggio trasforma i rifiuti in terriccio ricco di nutrienti
            attraverso cambiamenti di temperatura dovuti all'attività microbica.
            Inizialmente, i microbi riscaldano il compost a 40-50°C. Durante la
            fase di decomposizione massima, le temperature aumentano a 50-65°C
            per una rapida decomposizione. Quando il compost matura, la
            temperatura scende a 30-40°C.
          </p>
          <p className="hidden lg:block v2311-body-medium md:v2311-body-large text-v2311-primary mt-1 md:mt-2 text-xs !text-[10px] md:!text-base ">
            Il compostatore GEME ottimizza questo processo regolando la
            temperatura in ogni fase, assicurando un compostaggio efficiente e
            un compost di alta qualità.
          </p>
          <p className="lg:hidden v2311-body-medium md:v2311-body-large text-v2311-primary mt-1 md:mt-2 text-xs !text-[10px] md:!text-base ">
            Il compostaggio trasforma i rifiuti in terriccio ricco di nutrienti
            attraverso cambiamenti di temperatura. Il compostatore GEME migliora
            questo processo controllando la temperatura durante tutto il
            processo, garantendo un compostaggio efficiente e di alta qualità.
          </p>
        </>
      ),
    },
    {
      minProgress: 100,
      content: (
        <>
          <SvgMicrobe className="w-8 h-8 md:w-16 md:h-16" />
          <h3 className=" v2311-body-large !text-[11px] md:!text-[24px] md:!v2311-title-h5 text-v2311-primary font-bold text-center mt-2 md:mt-4 ">
            Microbi
            <br />
            (GEME Kobold)
          </h3>
          <p className="hidden lg:block v2311-body-medium md:v2311-body-large text-v2311-primary mt-1 md:mt-2 text-xs !text-[10px] md:!text-base ">
            Il compostaggio è un processo naturale guidato dai microbi che
            scompongono i rifiuti organici in ammendanti del suolo ricchi di
            nutrienti. I funghi affrontano i materiali difficili come la
            cellulosa, mentre altri microbi decompongono altre sostanze
            organiche. GEME Kobold, un team microbico unico e resistente al
            calore, accelera il processo di compostaggio.
          </p>
          <p className="lg:hidden v2311-body-medium md:v2311-body-large text-v2311-primary mt-1 md:mt-2 text-xs !text-[10px] md:!text-base ">
            I microbi sono i riciclatori della natura: scompongono i rifiuti in
            terriccio ricco di nutrienti. I funghi affrontano i materiali
            difficili, mentre altri microbi si occupano del resto. GEME Kobold,
            un team microbico resistente al calore, accelera il compostaggio.
          </p>
        </>
      ),
    },
  ],
}

// 证书及测试报告
const examiningReportProps: IExaminingReportProps = {
  title: `Certificati e Rapporto di Test`,
  description: `Sia GEME Kobold che GEME Compostiera sono ben certificati e hanno superato tutti i test condotti da organizzazioni autorevoli.`,
  imageInfo: {
    imageUrl: '/assets/images/how-it-works/certificates-and-test-report.jpeg',
    alt: 'Certificati e rapporto di test per GEME',
  },
  downloadHref: (
    <>
      Scarica il Rapporto di Test per il Livello di Sale{' '}
      <a href="#" target="_blank">
        QUI
      </a>
    </>
  ),
}

// before vs after
const useCompostContrastProps: IUseCompostContrastProps = {
  title: 'Prima e Dopo l’Applicazione del Compost GEME',
  description:
    'Scopri come il compost GEME può contribuire a rendere la Terra più verde riducendo i rifiuti in discarica, migliorando la salute del suolo e promuovendo la crescita delle piante.',
  beforeImage: {
    imageUrl: '/assets/images/how-it-works/used-geme-compost-before.png',
    alt: 'Prima dell’utilizzo del compost',
  },
  afterImage: {
    imageUrl: '/assets/images/how-it-works/used-geme-compost-after.png',
    alt: 'Dopo l’utilizzo del compost',
  },
}

function HowItWorksIt({ ReviewsComponent }: IHowItWorksProps) {
  return (
    <>
      <h1 className="sr-only">
        Come funziona il Compostatore GEME: Trasformazione dei rifiuti
        alimentari in compost ricco di nutrienti
      </h1>
      <div className="py-8 lg:pt-6 lg:pb-16">
        <ImgAndTextSection {...shortVideoProps} />
        <ImgAndTextSection {...imageTextProps} />
        <InlinePlayer {...inlinePlayerProps} />
        <ExaminingReport {...gemeComposterImageProps} />
        <ExaminingReport {...gemeKoboldImageProps} />
        <ScrollTriggeredAnimatedOxygenCycle {...oxygenCycleProps} />
        <ExaminingReport {...examiningReportProps} />
        <UseCompostContrast {...useCompostContrastProps} />
        <div className="my-4">
          <ReviewsScoreHeader locale="it" />
        </div>
        <ReviewsComponent />
      </div>
    </>
  )
}

export { HowItWorksIt }
