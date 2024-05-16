import { ReactNode } from 'react'
import type { TEquipment } from '../../../helpers/industrial-equipments/data/data-en'
import {
  equipmentToFeaturesProps,
  IProductFeaturesTabProps,
} from '../../../helpers/industrial-equipments/tool'
import { EquipmentFeaturesView } from 'ui'

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

export interface IEquipmentToFeaturesPropsFnPayload
  extends IEquipmentFeaturesProps {
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

  const data: IProductFeaturesTabProps[] =
    equipmentToFeaturesProps(payload) || []

  return (
    <EquipmentFeaturesView tabs={data}/>
  )
}

export default EquipmentFeatures
