import Image from 'next/image'
import {
  GridWithOffsetIcons,
  IGridWithOffsetIconsProps,
} from '../../../components/feature-sections'

export function featureIcon(num: number) {
  const Icon = () => (
    <Image
      src={`/assets/images/solar-compactor/s5-${num}.png`}
      alt={`feature icon${num}`}
      width={64}
      height={64}
    />
  )
  return Icon
}

export default function ProductOptions(props: IGridWithOffsetIconsProps) {
  return <GridWithOffsetIcons {...props} />
}
