import EquipmentView, {
  IEquipmentViewProps,
  IProductOverviewSplitWithImageOtherProps,
} from './components/EquipmentView'

import type { TEquipment } from '../../helpers/industrial-equipments/data/data-en'

import { industrialEquipmentXJsonLd } from '../../lib/serp'
import { findEquipmentById } from '../../helpers/industrial-equipments/tool'
import { IEquipmentFeaturesProps } from './components/EquipmentFeatures'

//  productOverviewSplitWithImage组件内容的配置数据  De版
const productOverviewSplitWithImageOtherProps: IProductOverviewSplitWithImageOtherProps =
  {
    firstBreadcrumbsName: 'Alle Geräte',
    btn1Label: `Lass uns reden`,
    btn2Label: `Kontakt aufnehmen`,
  }

//  EquipmentFeatures组件内容的配置数据  De版
function generateEquipmentFeaturesProps(
  equipment: TEquipment,
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
        description: `Es handelt sich um ein großes Gerät zur Verarbeitung von allgemeinen Küchenabfällen und Lebensmittelabfällen. Es verwendet ein intelligentes PLC-Steuerungssystem und integriert die Funktionen Zerkleinerung, Sortierung, Fermentation und Abwasserbehandlung. Kann an zentralisierte Abfallbehandlungsstationen in Städten, großen Einkaufszentren usw. geliefert werden. Fernüberwachung und Datenaustausch können realisiert werden.`,
      },
      power: {
        heading: 'Modulare Leistung',
        description: (
          <>
            GEME sucht immer nach dem besten Gleichgewicht zwischen hoher
            Leistung und niedrigem Energieverbrauch. Der Versuch, mit weniger
            Energieverbrauch mehr Lebensmittelabfälle zu bewältigen.
          </>
        ),
      },
      EquipmentPower: {
        heading: 'Geräteleistung',
        description: `GEME maximiert die Wiederherstellung des gesamten Prozesses der natürlichen Kompostierung, indem ein intelligenter Chip verwendet wird, um die Temperatur zu regeln und so viel Energie wie möglich zu sparen, während gleichzeitig eine geeignete Umgebung für die schnelle Reproduktion und den Abbau der Mikroben bereitgestellt wird.`,
      },
      MaterialOfMain: {
        heading: 'Material',
        description: `Wir haben Qualität zu unserer Gewohnheit gemacht. Es ist nicht nur etwas, das wir anstreben - wir leben nach diesem Prinzip jeden Tag. Während die meisten Dinge des kreativen Prozesses vergessen werden, wird die Exzellenz unserer Produkte und Dienstleistungen in Erinnerung bleiben.`,
      },
    },
  }
}

function IndustrialEquipmentsIdPageDe({
  equipment,
}: {
  equipment: ReturnType<typeof findEquipmentById>
}) {
  if (equipment == null) return

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

export { IndustrialEquipmentsIdPageDe }
