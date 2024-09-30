/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import { IAlternativeSideBySideWithImagesProps } from '../../components/feature-sections'
import { IWithSquareImagesProps } from '../../components/product-features'
import CurrentStatus from './components/CurrentStatus'
import HeroSection, { IGKHeroSectionProps } from './components/HeroSection'
import TheLongTermDependence from './components/TheLongTermDependence'
import OrganicWaste from './components/OrganicWaste'
import { IThreeColumnWithDescriptionProps } from '../../components/category-previews'
import SoilImprovement from './components/SoilImprovement'
import EmpiricalComparison, {
  IEmpiricalComparisonProps,
} from './components/EmpiricalComparison'

// 第1部分配置文件 It版
const gkHeroSectionProps: IGKHeroSectionProps = {
  title: 'Tecnologia di Riciclaggio delle Risorse GK',
  highlightTitle: 'Ciclo ordinato che segue le leggi della natura',
  description: (
    <>
      <p>
        Realizza il funzionamento a ciclo chiuso del ciclo biologico "dalla
        terra alla terra".
      </p>
      <p className="mt-4">
        Realizza "risorse rinnovabili, ambiente più amichevole, terreno più sano
        e cibo più sicuro".
      </p>
      <p className="mt-4">
        È stato verificato con successo dopo più di 50 anni di pratica.
      </p>
    </>
  ),
  imageAlt: 'Tecnologia di Riciclaggio delle Risorse GK',
}

// 第2部分配置文件 It版
const theLongTermDependenceProps: IWithSquareImagesProps = {
  title:
    'La dipendenza a lungo termine dai fertilizzanti nelle terre coltivabili ha portato a',
  features: [
    {
      name: 'Acidificazione del suolo',
      title: 'Acidificazione del suolo',
      imageSrc: '/assets/images/gk/s1-1.png',
      imageAlt: 'Acidificazione del suolo',
    },
    {
      name: 'Salinizzazione secondaria',
      title: 'Salinizzazione secondaria',
      imageSrc: '/assets/images/gk/s1-2.png',
      imageAlt: 'Salinizzazione secondaria',
    },
    {
      name: 'Il suolo è povero e degradato',
      title: 'Il suolo è povero e degradato',
      imageSrc: '/assets/images/gk/s1-3.png',
      imageAlt: 'Il suolo è povero e degradato',
    },
    {
      name: 'Aumento delle malattie trasmesse dal suolo',
      title: 'Aumento delle malattie trasmesse dal suolo',
      imageSrc: '/assets/images/gk/s1-4.png',
      imageAlt: 'Aumento delle malattie trasmesse dal suolo',
    },
  ],
  textColorClassName: '!text-gray-900',
}

// 第3部分配置文件 It版
const currentStatusProps: IAlternativeSideBySideWithImagesProps = {
  textAndImageblocks: [
    {
      name: 'Unisciti al movimento',
      LeftBlock: () => (
        <>
          <div className="mx-auto max-w-xl px-4 sm:px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
            <div>
              <div className="mt-6">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                  Stato attuale del contenuto di materia organica nel suolo
                  <span>
                    come si decompone rapidamente il rifiuto alimentare
                  </span>
                </h2>
                <div className="prose mt-4 text-lg text-gray-500">
                  <ul>
                    <li>Contenuto organico sano del suolo internazionale 5%</li>
                    <li>Giappone 6%</li>
                    <li>Stati Uniti 5%</li>
                    <li>Europa 4%</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </>
      ),
      RightBlock: () => (
        <>
          <Image
            className="relative mx-auto"
            width={490}
            height={490}
            src="/assets/images/gk/s2-1.png"
            alt="Tecnologia di riciclaggio GEME GK"
          />
        </>
      ),
    },
    {
      name: 'Alimentato dalla biotecnologia',
      LeftBlock: () => (
        <>
          <div className="mx-auto max-w-xl px-4 sm:px-6 lg:col-start-2 lg:mx-0 lg:max-w-none lg:py-32 lg:px-0">
            <div>
              <div className="mt-6">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                  <span className="block text-gray-900 xl:inline">
                    Quanto tempo ci vuole per aumentare la materia organica del
                    suolo dello 0,1%?
                  </span>
                  <span>non disidratazione</span>
                </h2>
                <div className="prose mt-4 text-lg text-gray-500">
                  <ul>
                    <li>Con la messa a riposo naturale, ci vogliono 79 anni</li>
                    <li>
                      L'erba fresca del concime verde impiega 5 anni per
                      aggiungere 6 tonnellate per acro
                    </li>
                    <li>
                      Il fertilizzante organico ordinario impiega 2 anni per
                      aggiungere 9 tonnellate per acro
                    </li>
                    <li>
                      GK, ci vuole 1 anno per aggiungere 2,4 tonnellate per acro
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </>
      ),
      RightBlock: () => (
        <>
          <Image
            className="relative mx-auto"
            width={490}
            height={490}
            src="/assets/images/gk/s2-2.png"
            alt="Tecnologia di riciclaggio GEME GK"
          />
        </>
      ),
    },
  ],
}

// 第4部分配置文件 It版
const organicWasteProps: IThreeColumnWithDescriptionProps = {
  title:
    'I rifiuti organici sono la risorsa di materia organica di qualità più alta',
  description: (
    <>
      <p>
        I rifiuti biologici, in particolare i rifiuti da cucina, sono la risorsa
        di materia organica di qualità più alta.
      </p>
      <p>
        La quantità di proteine contenuta in ogni 50 milioni di tonnellate di
        rifiuti da cucina è equivalente alla produzione proteica di 3,3 milioni
        di acri di soia all'anno.
      </p>
    </>
  ),
  imageAspectClassName: 'aspect-w-1 aspect-h-1 ',
  categories: [
    {
      name: 'Rifiuti biologici',
      imageSrc: '/assets/images/gk/s4-1.png',
      imageAlt: 'Rifiuti biologici',
    },
    {
      name: 'GEME & GEME-Kobold',
      imageSrc: '/assets/images/gk/s4-2.png',
      imageAlt: 'GEME & GEME-Kobold',
    },
    {
      name: 'Fertilizzante organico',
      imageSrc: '/assets/images/gk/s4-3.png',
      imageAlt: 'Fertilizzante organico',
    },
  ],
}

// 第5部分配置文件 It版
const soilImprovementProps: IAlternativeSideBySideWithImagesProps = {
  title:
    'Programmi di miglioramento del suolo della tecnologia GK - Riporta i suoli in vita rapidamente',
  description:
    'Risanamento/miglioramento del suolo GK, miglioramento complessivo delle idee centrali:',
  textAndImageblocks: [
    {
      name: 'Unisciti al movimento',
      LeftBlock: () => (
        <>
          <div className="mx-auto max-w-xl px-4 sm:px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
            <div>
              <div className="mt-6">
                <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                  Miglioramento della materia organica
                </h3>
                <p className="mt-4 text-lg text-gray-500">
                  Il carbonio a rapida azione e il carbonio a stato stazionario
                  si sinergizzano con i nutrienti minerali per migliorare le
                  proprietà fisiche e chimiche del suolo.
                </p>
                <h3 className="mt-6 text-2xl font-bold tracking-tight text-gray-900">
                  Rivitalizzazione dei batteri benefici + complesso microbico
                  specifico per colture
                </h3>
                <p className="mt-4 text-lg text-gray-500">
                  Complessi microflora e biostimolanti regolano l'equilibrio
                  dinamico delle comunità microbiche.
                </p>
              </div>
            </div>
          </div>
        </>
      ),
      RightBlock: () => (
        <>
          <Image
            className="relative mx-auto"
            width={490}
            height={490}
            src="/assets/images/gk/s5-1.gif"
            alt="Miglioramento del suolo GK"
          />
        </>
      ),
    },
  ],
}

// 第6部分配置文件 It版
const empiricalComparisonProps: IEmpiricalComparisonProps = {
  title: (
    <>
      Confronto empirico prima e dopo il risanamento/miglioramento del suolo GK
      e il miglioramento del suolo
    </>
  ),
  description1: (
    <>
      La distribuzione della crescita delle radici non può solo determinare
      quanto sia efficace il fertilizzante a fermentazione di batteri vivi sulla
      salute e la crescita delle colture, ma anche vedere il miglioramento della
      qualità del suolo
    </>
  ),
  description2: (
    <>
      Nell'esperimento comparativo, puoi chiaramente osservare l'efficacia di GK
      nel ripristino della vitalità del suolo e nella promozione del suolo ricco
      di GEME-Kobold sulla crescita delle piante e la resistenza alle malattie
    </>
  ),
  pictureDescription1:
    'Immagine a sinistra: Gruppo sperimentale che utilizza la tecnologia GK',
  pictureSubDescription2:
    'Immagine a destra: Gruppo di controllo che utilizza il metodo di piantagione convenzionale',
  featuresImage: {
    width: 280,
    height: 150,
  },
  features: [
    {
      name: 'Fase di germinazione',
      imageSrc: '/assets/images/gk/s6-1.png',
      imageAlt: 'Acidificazione del suolo',
    },
    {
      name: '2 settimane dopo la semina',
      imageSrc: '/assets/images/gk/s6-2.png',
      imageAlt: 'Salinizzazione secondaria',
    },
    {
      name: '1 mese dopo la semina',
      imageSrc: '/assets/images/gk/s6-3.png',
      imageAlt: 'Il suolo è povero e degradato',
    },
    {
      name: 'Confronto sul campo',
      imageSrc: '/assets/images/gk/s6-4.png',
      imageAlt: 'Il suolo è povero e degradato',
    },
  ],
}

// 第7部分配置文件 It版
const empiricalComparison2Props: IEmpiricalComparisonProps = {
  title: (
    <>
      Confronto empirico del trattamento di suoli contaminati e acque in Vietnam
      utilizzando GEME-Kobold
    </>
  ),
  featuresImage: {
    width: 592,
    height: 236,
  },
  features: [
    {
      name: 'Prima vs Dopo 1',
      title: 'Prima vs Dopo',
      imageSrc: '/assets/images/gk/s7-1.png',
      imageAlt: 'Prima vs Dopo',
    },
    {
      name: 'Prima vs Dopo 2',
      title: 'Prima vs Dopo',
      imageSrc: '/assets/images/gk/s7-2.png',
      imageAlt: 'Prima vs Dopo 2',
    },
  ],
}

export function GKPageIt() {
  return (
    <>
      <HeroSection {...gkHeroSectionProps} />
      <TheLongTermDependence {...theLongTermDependenceProps} />
      <CurrentStatus {...currentStatusProps} />
      <OrganicWaste {...organicWasteProps} />
      <SoilImprovement {...soilImprovementProps} />
      <EmpiricalComparison
        {...empiricalComparisonProps}
        grayBackground={false}
      />
      <EmpiricalComparison
        {...empiricalComparison2Props}
        grayBackground={true}
        gridClassName="grid-cols-1 lg:grid-cols-2"
      />
    </>
  )
}
