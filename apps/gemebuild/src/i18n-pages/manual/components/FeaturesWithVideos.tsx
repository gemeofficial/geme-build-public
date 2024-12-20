import Image from 'next/image'
import {
  GridWithVideos,
  IGridWithVideosProps,
} from '../../../components/feature-sections'
import { ILinkComponent } from '../../../contexts/link-context'

export interface IFeaturesWithVideos extends IGridWithVideosProps {
  LinkComponent?: ILinkComponent
}

export function featureIcon(num: number) {
  return (
    <Image
      alt="feature-icon"
      src={`/assets/images/geme-kobold/feature-icon-${num}.png`}
      width={64}
      height={64}
    />
  )
}

export default function FeaturesWithVideos(props: IFeaturesWithVideos) {
  return <GridWithVideos {...props} />
}
