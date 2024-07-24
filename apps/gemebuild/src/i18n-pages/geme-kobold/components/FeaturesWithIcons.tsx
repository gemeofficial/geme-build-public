import Image from 'next/image'

import React from 'react'
import {
  GridWithOffsetIconsLite,
  IGridWithOffsetIconsLiteProps,
} from '../../../components/feature-sections'

export function FeatureIcon(num: number, featureName: string) {
  const Icon = () => (
    <Image
      className="object-cover"
      width={100}
      height={100}
      src={`/assets/images/geme-kobold/feature-icon-${num}.png`}
      alt={`Image icon illustrating '${featureName}'.`}
    />
  )
  return Icon
}

export default function FeaturesWithIcons(
  props: IGridWithOffsetIconsLiteProps,
) {
  return <GridWithOffsetIconsLite {...props} />
}
