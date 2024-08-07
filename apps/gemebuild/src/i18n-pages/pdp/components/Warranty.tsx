import { ILinkComponent } from '../../../contexts/link-context'
import { IPdpWarranty, PdpWarranty } from 'ui'

export interface IPdpWarrantyProps extends IPdpWarranty {
  Link?: ILinkComponent
}

function Warranty(props: IPdpWarrantyProps) {
  return <PdpWarranty {...props} />
}

export default Warranty
