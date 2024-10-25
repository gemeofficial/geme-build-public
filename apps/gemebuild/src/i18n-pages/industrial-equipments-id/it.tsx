import EquipmentView, {
  IEquipmentViewProps,
  IProductOverviewSplitWithImageOtherProps,
} from './components/EquipmentView'

import type { TEquipment } from '../../helpers/industrial-equipments/data/data-en'

import { industrialEquipmentXJsonLd } from '../../lib/serp'
import { findEquipmentById } from '../../helpers/industrial-equipments/tool'
import { IEquipmentFeaturesProps } from './components/EquipmentFeatures'

//  productOverviewSplitWithImage组件内容的配置数据  It版
const productOverviewSplitWithImageOtherProps: IProductOverviewSplitWithImageOtherProps =
  {
    firstBreadcrumbsName: 'Tutte le attrezzature',
    btn1Label: `Parliamone`,
    btn2Label: `Mettiti in contatto`,
  }

//  EquipmentFeatures组件内容的配置数据  It版
function generateEquipmentFeaturesProps(
  equipment: TEquipment,
): IEquipmentFeaturesProps {
  return {
    equipment,
    tabNames: {
      baiscParams: 'Parametri',
      power: 'Potenza Modulare',
      EquipmentPower: "Potenza dell'Apparecchiatura",
      MaterialOfMain: 'Materiale',
    },
    tabHeadingAndDescription: {
      baiscParams: {
        heading: 'Parametri di Base del Dispositivo',
        description: `È un'attrezzatura di grandi dimensioni per il trattamento dei rifiuti da cucina generici e dei rifiuti alimentari. Adotta un sistema di controllo PLC intelligente e integra le funzioni di frantumazione, selezione, fermentazione e trattamento delle acque reflue. Può essere fornito a stazioni centralizzate di trattamento dei rifiuti nei centri urbani, nei grandi centri commerciali, ecc. È possibile realizzare monitoraggio remoto e condivisione dei dati.`,
      },
      power: {
        heading: 'Potenza Modulare',
        description: (
          <>
            GEME cerca sempre il miglior equilibrio tra alte prestazioni e basso
            consumo energetico. Tentando di gestire più rifiuti alimentari con
            un minor consumo di energia.
          </>
        ),
      },
      EquipmentPower: {
        heading: "Potenza dell'Apparecchiatura",
        description: `GEME massimizza il ripristino dell'intero processo di compostaggio naturale, utilizzando un chip intelligente per regolare la temperatura e risparmiare quanta più energia possibile fornendo al contempo un ambiente adatto per la rapida riproduzione e decomposizione del microbiota.`,
      },
      MaterialOfMain: {
        heading: 'Materiale',
        description: `Abbiamo fatto della qualità un'abitudine. Non è qualcosa per cui ci sforziamo semplicemente, viviamo seguendo questo principio ogni giorno. Mentre la maggior parte delle cose del processo creativo verrà dimenticata, l'eccellenza dei nostri prodotti e servizi sarà ricordata.`,
      },
    },
  }
}

function IndustrialEquipmentsIdPageIt({
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

export { IndustrialEquipmentsIdPageIt }
