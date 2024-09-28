import EquipmentView, {
  IEquipmentViewProps,
  IProductOverviewSplitWithImageOtherProps,
} from './components/EquipmentView'

import type { TEquipment } from '../../helpers/industrial-equipments/data/data-en'

import { industrialEquipmentXJsonLd } from '../../lib/serp'
import { findEquipmentById } from '../../helpers/industrial-equipments/tool'
import { IEquipmentFeaturesProps } from './components/EquipmentFeatures'

//  productOverviewSplitWithImage组件内容的配置数据  En版
const productOverviewSplitWithImageOtherProps: IProductOverviewSplitWithImageOtherProps =
  {
    firstBreadcrumbsName: 'All equipments',
    btn1Label: `Let's talk`,
    btn2Label: `Get in touch`,
  }

//  EquipmentFeatures组件内容的配置数据  En版
function generateEquipmentFeaturesProps(
  equipment: TEquipment,
): IEquipmentFeaturesProps {
  return {
    equipment,
    tabNames: {
      baiscParams: 'Parameters',
      power: 'Modular Power',
      EquipmentPower: 'Equipment Power',
      MaterialOfMain: 'Material',
    },
    tabHeadingAndDescription: {
      baiscParams: {
        heading: 'Basic Device Parameters',
        description: `It is a large equipment for processing general kitchen waste and food waste. It adopts intelligent PLC control system and integrates the functions of crushing, sorting, fermentation and waste water treatment. Can be supplied to centralized waste treatment stations in towns, large commercial centers, etc. Remote monitoring and data sharing can be realized.`,
      },
      power: {
        heading: 'Modular Power',
        description: (
          <>
            GEME is always looking for the best balance between high performance
            and low energy consumption. Trying to handle more food waste with
            less energy consumption.
          </>
        ),
      },
      EquipmentPower: {
        heading: 'Equipment Power',
        description: `GEME maximizes the restoration of the entire process of natural composting, using a smart chip to regulate the temperature and save as much energy as possible while providing a suitable environment for the rapid reproduction and decomposition of the microbiota.`,
      },
      MaterialOfMain: {
        heading: 'Material',
        description: `We have made quality our habit. It's not something that we just strive for - we live by this principle every day. While most of the things about the creative process will be forgotten. The excellence of our products and services will be remembered.`,
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
