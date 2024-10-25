/* eslint-disable react/no-unescaped-entities */
import { Faq } from 'ui'
import { IGridWithOffsetIconsLiteProps } from '../../components/feature-sections'
import EnjoyYourLife, { IEnjoyYourLifeProps } from './components/EnjoyYourLife'
import Features from './components/Features'
import FeaturesWithIcons, { FeatureIcon } from './components/FeaturesWithIcons'
import HeroSection, { IHeroSectionProps } from './components/HeroSection'
import { koboldFaqPropsIt } from './components/faq-data'

// kobold页第一部分配置项 It
const heroSectionProps: IHeroSectionProps = {
  title: 'GEME KOBOLD',
  description:
    'Il potere magico per trasformare i rifiuti biologici in compost organico altamente attivo.',
  highlights: [
    {
      id: 1,
      title: 'Difesa dai parassiti',
      description: 'Mantieni le piante libere da malattie e parassiti.',
      iconPath: '/assets/images/geme-kobold/highlight-icon-1.svg',
    },
    {
      id: 2,
      title: 'Fioritura e frutti potenziati',
      description:
        'Fai profumare meglio i fiori, rendi i frutti più dolci e raccogli di più.',
      iconPath: '/assets/images/geme-kobold/highlight-icon-2.svg',
    },
    {
      id: 3,
      title: 'Rinascita della terra e dei fiumi',
      description:
        'Rendi la terra più fertile, i fiumi più limpidi e migliora l’ambiente.',
      iconPath: '/assets/images/geme-kobold/highlight-icon-3.svg',
    },
  ],
}

// kobold页第二部分配置项 It
const featuresProps = {
  section1Title: 'Microbiota Naturale',
  section1Description: (
    <>
      GEME-Kobold è l'unica microbiota composita al mondo resistente alle alte
      temperature, una comunità antica con decenni di successo evolutivo. Non è
      un microbo sviluppato artificialmente, ma un praticante della legge della
      circolazione naturale.
    </>
  ),
  section2Title: 'Unico al Mondo',
  section2Description: (
    <>
      Nel sistema di circolazione dell'efficiente processore biologico dei
      rifiuti, i rifiuti biologici subiscono un rapido riscaldamento fino a 75℃,
      fermentando e asciugandosi grazie all'azione di GEME-Kobold.
      <br />
      <br />
      Questa esposizione aerobica ad alta temperatura uccide i patogeni
      potenziali e neutralizza la nocività dei prodotti di fermentazione.
    </>
  ),
  section3Title: 'Microbiota Complessa',
  section3Description: (
    <>
      GEME-Kobold contribuisce significativamente al riciclaggio della materia
      organica. Comprende 46 complessi batteri aerobi termoresistenti.
      <br />
      <br />
      Entro 6-8 ore, può decomporre vari rifiuti biologici, producendo
      fertilizzanti organici ad alta attività. Attiva anche microrganismi del
      suolo e dell'acqua, rivitalizzandoli.
    </>
  ),
}

// kobold页第三部分配置项 It
const featuresWithIconsProps: IGridWithOffsetIconsLiteProps = {
  title: 'Superiorità Nutrizionale',
  description: 'Ricco della microbiota benefica di GEME-Kobold',
  features: [
    {
      icon: FeatureIcon(1, 'Senza Inquinamento'),
      name: 'Senza Inquinamento',
      description:
        'Metodi agricoli derivati dal sistema di circolazione naturale.',
    },
    {
      icon: FeatureIcon(2, 'Altamente Sicuro'),
      name: 'Altamente Sicuro',
      description: `Utilizzando i microrganismi originali nel suolo, l'ecosistema non verrà distrutto. Non è necessario usare pesticidi.`,
    },
    {
      icon: FeatureIcon(3, 'Forte Resistenza Alle Malattie'),
      name: 'Forte Resistenza Alle Malattie',
      description: `I terreni ricchi di microrganismi benefici rendono difficile l'ingresso dei patogeni.`,
    },
    {
      icon: FeatureIcon(4, 'Miglioramento Della Qualità Dei Raccolti'),
      name: 'Miglioramento Della Qualità Dei Raccolti',
      description:
        'La pratica ha dimostrato che il rendimento è del 20%-30% superiore rispetto a quello delle colture chimiche.',
    },
    {
      icon: FeatureIcon(5, 'Resistente Al Caldo E Al Freddo'),
      name: 'Resistente Al Caldo E Al Freddo',
      description:
        'I microrganismi producono ingredienti organici che attivano le radici, mantenendo le colture sane anche in condizioni di caldo o freddo.',
    },
    {
      icon: FeatureIcon(6, 'Raccolti Più Alti'),
      name: 'Raccolti Più Alti',
      description:
        'Ha un sapore migliore e un valore nutrizionale superiore rispetto alle colture chimiche.',
    },
    {
      icon: FeatureIcon(7, 'Resistenza Ai Disordini Dei Raccolti'),
      name: 'Resistenza Ai Disordini Dei Raccolti',
      description:
        'Anche con piantagioni continue, man mano che il suolo diventa sano, è facile superare le malattie e il declino del raccolto. I batteri nematodi (noduli radicali) scompaiono.',
    },
    {
      icon: FeatureIcon(8, 'Igiene'),
      name: 'Igiene',
      description: `GEME-Kobold è un batterio attivato a una temperatura di 80°C. L'ambiente ad alta temperatura impedisce l'ingresso di patogeni, creando così un suolo microbico altamente sicuro.`,
    },
    {
      icon: FeatureIcon(9, 'Equilibrio Dei Funghi Del Suolo'),
      name: 'Equilibrio Dei Funghi Del Suolo',
      description:
        'GEME-Kobold contiene più di 46 batteri del suolo identificati, che mettono il terreno in buone condizioni più rapidamente rispetto a un singolo batterio del suolo.',
    },
  ],
}

// kobold页第四部分配置项 It
const enjoyYourLifeProps: IEnjoyYourLifeProps = {
  title: 'Prova Kobold',
  description: (
    <>
      Smetti di pagare costi extra per il fertilizzante, smetti di preoccuparti
      di girare il compost, smetti di sprecare i tuoi rifiuti alimentari. Inizia
      a raccogliere frutta, verdura e fiori sul balcone e nel giardino!
    </>
  ),
}

export function GemeKoboldPageIt() {
  return (
    <>
      <HeroSection {...heroSectionProps} />
      <Features {...featuresProps} />
      <FeaturesWithIcons {...featuresWithIconsProps} />
      <EnjoyYourLife {...enjoyYourLifeProps} />

      <div className="bg-gray-50">
        <Faq
          titleClassName="!text-xl md:!text-3xl !text-gray-900 !font-bold"
          {...koboldFaqPropsIt}
        />
      </div>
    </>
  )
}
