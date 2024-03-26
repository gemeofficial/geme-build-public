import { ReactNode } from 'react'
import ProductFeaturesWithTabs, {
  IProductFeaturesWithTabsProps,
} from './ProductFeaturesWithTabs'

import type { TEquipment } from '../../../helpers/industrial-equipments/data/data-en'
import { equipmentToFeaturesProps } from '../../../helpers/industrial-equipments/tool'

export type TTab = keyof Pick<
  TEquipment,
  'baiscParams' | 'EquipmentPower' | 'power' | 'MaterialOfMain'
>

const TABS: TTab[] = [
  'baiscParams',
  'power',
  'EquipmentPower',
  'MaterialOfMain',
]

export interface IEquipmentToFeaturesPropsFnPayload extends IEquipmentFeaturesProps {
  tabs: TTab[]
}

export interface IEquipmentFeaturesProps {
  equipment: TEquipment
  tabNames: Record<TTab, string>
  tabHeadingAndDescription: Record<
    TTab,
    { heading: string; description?: ReactNode }
  >
}

function EquipmentFeatures(props: IEquipmentFeaturesProps) {
  const payload: IEquipmentToFeaturesPropsFnPayload = {
    ...props,
    tabs: TABS,
  }

  const data: IProductFeaturesWithTabsProps = {
    tabs: equipmentToFeaturesProps(payload),
  }

  return <ProductFeaturesWithTabs {...data} />
}

export default EquipmentFeatures
