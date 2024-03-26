import Hero from './Hero'
import EquipmentPreview from './EquipmentPreview'
import EquipmentList from './EquipmentList'

import type { IHeroWithImageTilesProps } from './Hero'
import type { IEquipmentPreviewProps } from './EquipmentPreview'
import type { IProductListsWithTallImagesProps } from './EquipmentList'

interface IIndustrialEquipmentsProps {
  heroConfigProps: IHeroWithImageTilesProps
  equipmentPreviewConfigProps: IEquipmentPreviewProps
  equipmentListConfigProps: IProductListsWithTallImagesProps
}

function IndustrialEquipments(props: IIndustrialEquipmentsProps) {
  const {
    heroConfigProps,
    equipmentPreviewConfigProps,
    equipmentListConfigProps,
  } = props

  return (
    <>
      <Hero {...heroConfigProps}/>
      <EquipmentPreview {...equipmentPreviewConfigProps}/>
      <EquipmentList {...equipmentListConfigProps}/>
    </>
  )
}

export default IndustrialEquipments
export type { IIndustrialEquipmentsProps }
