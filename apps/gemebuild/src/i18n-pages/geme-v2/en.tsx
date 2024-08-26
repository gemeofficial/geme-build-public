import { FC } from 'react'
import { ILinkComponent } from '../../contexts/link-context'

export interface IGemeV2PageProps {
  PrefetchLink?: ILinkComponent
  SubscribeComponent?: FC<{}>
}

export function GemeV2PageEn({
  PrefetchLink,
  SubscribeComponent,
}: IGemeV2PageProps) {
  return <>1234</>
}
