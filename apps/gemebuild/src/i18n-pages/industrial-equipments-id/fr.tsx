/* eslint-disable react/no-unescaped-entities */
import EquipmentView, {
  IEquipmentViewProps,
  IProductOverviewSplitWithImageOtherProps,
} from './components/EquipmentView'

// 1.翻译其他语言版本需要将Data中的数据一并翻译
import { items } from '../../helpers/industrial-equipments/data/data-fr'
import type { TEquipment } from '../../helpers/industrial-equipments/data/data-fr'

import { industrialEquipmentXJsonLd } from '../../lib/serp'
import {
  equipmentCanonicalUrl,
  findEquipmentById,
} from '../../helpers/industrial-equipments/tool'
import { IEquipmentFeaturesProps } from './components/EquipmentFeatures'

interface IPageParams {
  locale: string
  id: string
}

interface IPageProps {
  params: IPageParams
  searchParams?: Record<string, string | undefined>
}

//  2.productOverviewSplitWithImage组件内容的配置数据  Fr版
const productOverviewSplitWithImageOtherProps: IProductOverviewSplitWithImageOtherProps =
  {
    firstBreadcrumbsName: 'Tous les équipements',
    btn1Label: `Parlons-en`,
    btn2Label: `Entrer en contact`,
  }

//  3.EquipmentFeatures组件内容的配置数据  Fr版
function generateEquipmentFeaturesProps(
  equipment: TEquipment,
): IEquipmentFeaturesProps {
  return {
    equipment,
    tabNames: {
      baiscParams: 'Paramètres',
      power: 'Puissance modulaire',
      EquipmentPower: "Puissance de l'équipement",
      MaterialOfMain: 'Matériel',
    },
    tabHeadingAndDescription: {
      baiscParams: {
        heading: "Paramètres de base de l'appareil",
        description: `Il s'agit d'un grand équipement pour le traitement des déchets de cuisine généraux et des déchets alimentaires. Il utilise un système de contrôle PLC intelligent et intègre les fonctions de concassage, de tri, de fermentation et de traitement des eaux usées. Peut être fourni aux stations de traitement des déchets centralisées dans les villes, les grands centres commerciaux, etc. La surveillance à distance et le partage de données peuvent être réalisés.`,
      },
      power: {
        heading: 'Puissance modulaire',
        description: (
          <>
            GEME cherche toujours le meilleur équilibre entre haute performance
            et faible consommation d'énergie. Essayer de gérer plus de déchets
            alimentaires avec moins de consommation d'énergie.
          </>
        ),
      },
      EquipmentPower: {
        heading: "Puissance de l'équipement",
        description: `GEME maximise la restauration de tout le processus de compostage naturel, en utilisant une puce intelligente pour réguler la température et économiser autant d'énergie que possible tout en fournissant un environnement adapté à la reproduction rapide et à la décomposition des microbiotes.`,
      },
      MaterialOfMain: {
        heading: 'Matériel',
        description: `Nous avons fait de la qualité notre habitude. Ce n'est pas quelque chose que nous nous efforçons simplement d'atteindre - nous vivons selon ce principe chaque jour. Bien que la plupart des choses liées au processus créatif soient oubliées, l'excellence de nos produits et services sera rappelée.`,
      },
    },
  }
}

function IndustrialEquipmentsIdPageFr({ params }: IPageProps) {
  const equipmentId = params.id
  const equipment = findEquipmentById(params.id, items)

  if (equipment == null) {
    throw new Error(
      `impossible de trouver l'équipement par identifiant: ${equipmentId}`,
    )
  }

  const contentProps: IEquipmentViewProps = {
    productOverviewSplitWithImageOtherProps,
    equipment,
    equipmentFeaturesProps: generateEquipmentFeaturesProps(equipment),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={industrialEquipmentXJsonLd(
          equipment.name,
          equipment.id,
        )}
        key="industrial-equipment-x-jsonld"
      />
      <EquipmentView {...contentProps} />
    </>
  )
}

export { IndustrialEquipmentsIdPageFr }
