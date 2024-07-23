/* eslint-disable react/no-unescaped-entities */
import { FC } from 'react'
import Specs, { type IGemeSpecsProps } from '../../../components/geme-specs'
import WhatsInBox, {
  type IGemeWhatsInBoxProps,
} from '../../../components/geme-whats-in-box'

export interface IPdpSpecProps {
  gemeSpecsProps: IGemeSpecsProps
  gemeWhatsInBoxProps: IGemeWhatsInBoxProps
  GemeModelViewer?: FC<{}>
}

function Spec({
  GemeModelViewer,
  gemeSpecsProps,
  gemeWhatsInBoxProps,
}: IPdpSpecProps) {
  return (
    <>
      <Specs {...gemeSpecsProps} GemeModelViewer={GemeModelViewer} />
      <WhatsInBox {...gemeWhatsInBoxProps} />
    </>
  )
}

export default Spec
