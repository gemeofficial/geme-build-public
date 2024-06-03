import EquipmentView, {
  IEquipmentViewProps,
  IProductOverviewSplitWithImageOtherProps,
} from './components/EquipmentView'

// 1.翻译其他语言版本需要将Data中的数据一并翻译
import { items } from '../../helpers/industrial-equipments/data/data-de'
import type { TEquipment } from '../../helpers/industrial-equipments/data/data-en'

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

//  2.productOverviewSplitWithImage组件内容的配置数据  De版
const productOverviewSplitWithImageOtherProps: IProductOverviewSplitWithImageOtherProps =
  {
    firstBreadcrumbsName: 'Alle Geräte',
    btn1Label: `Lass uns reden`,
    btn2Label: `In Kontakt kommen`,
  }

//  3.EquipmentFeatures组件内容的配置数据  De版
function generateEquipmentFeaturesProps(
  equipment: TEquipment
): IEquipmentFeaturesProps {
  return {
    equipment,
    tabNames: {
      baiscParams: 'Parameter',
      power: 'Modulare Leistung',
      EquipmentPower: 'Geräteleistung',
      MaterialOfMain: 'Material',
    },
    tabHeadingAndDescription: {
      baiscParams: {
        heading: 'Grundlegende Geräteparameter',
        description: `Es handelt sich um eine Großanlage zur Verarbeitung von allgemeinen Küchenabfällen und Lebensmittelabfällen. Es verfügt über ein intelligentes SPS-Steuerungssystem und integriert die Funktionen Zerkleinerung, Sortierung, Fermentation und Abwasserbehandlung. Kann an zentrale Abfallbehandlungsstationen in Städten, großen Handelszentren usw. geliefert werden. Fernüberwachung und Datenaustausch können realisiert werden.`,
      },
      power: {
        heading: 'Modulare Leistung',
        description: (
          <>
            GEME ist stets auf der Suche nach der besten Balance zwischen hoher
            Leistung und geringer Energieverbrauch. Ich versuche, mit mehr
            Lebensmittelabfällen umzugehen weniger energie verbrauch.
          </>
        ),
      },
      EquipmentPower: {
        heading: 'Geräteleistung',
        description: `GEME maximiert die Wiederherstellung des gesamten Prozesses der natürlichen Kompostierung, indem es einen intelligenten Chip verwendet, um die Temperatur zu regulieren und so viel Energie wie möglich zu sparen und gleichzeitig eine geeignete Umgebung für die schnelle Reproduktion und Zersetzung der Mikrobiota zu schaffen.`,
      },
      MaterialOfMain: {
        heading: 'Material',
        description: `Wir haben Qualität zu unserer Gewohnheit gemacht. Wir streben nicht nur danach, sondern leben diesen Grundsatz jeden Tag. Dabei werden die meisten Dinge des kreativen Prozesses vergessen. Die Exzellenz unserer Produkte und Dienstleistungen wird uns in Erinnerung bleiben.`,
      },
    },
  }
}

function IndustrialEquipmentsIdPageDe({ params }: IPageProps) {
  const equipmentId = params.id
  const equipment = findEquipmentById(params.id, items)

  if (equipment == null) {
    throw new Error(`Kann Geräte anhand der ID nicht finden: ${equipmentId}`)
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
          equipment.id
        )}
        key="industrial-equipment-x-jsonld"
      />
      <EquipmentView {...contentProps} />
    </>
  )
}

export { IndustrialEquipmentsIdPageDe }
