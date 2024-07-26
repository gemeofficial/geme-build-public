import Image from 'next/image'

import React from 'react'
import {
  GridWithOffsetIcons,
  IGridWithOffsetIconsProps,
} from '../../../components/feature-sections'

export function featureIcon(num: number) {
  const Icon = () => (
    <Image
      className="w-16 h-16"
      src={`/assets/images/solar-compactor/s3-${num}.gif`}
      width={64}
      height={64}
      alt={'Feature ' + num}
    />
  )
  return Icon
}

export interface ITheFirstChoiceForSmartCitiesProps
  extends IGridWithOffsetIconsProps {}

export default function TheFirstChoiceForSmartCities(
  props: ITheFirstChoiceForSmartCitiesProps,
) {
  return <GridWithOffsetIcons {...props} />
}
