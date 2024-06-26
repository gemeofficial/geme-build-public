import {
  ShieldCheckIcon,
  TruckIcon,
  ChatBubbleLeftRightIcon,
} from '@heroicons/react/24/solid'
import { ILinkComponent } from '../../../contexts/link-context'
import { IPdpWarranty, PdpWarranty, SectionDescription, SectionTitle } from 'ui'

const title = 'Buy with Confident'
const description = `We know you will feel expensive, but we make sure it worth.
Your money wont gone, it turns into the a better life style and good service around you.`

const features = [
  {
    name: '30 Days Free Trial',
    description:
      'Free shipping(US mainland), Free trial, No return fee charged. Ask us any questions during your trial, innovative product lovers deserved encouraged!',
    href: '/return-policy',
    icon: TruckIcon,
  },
  {
    name: '1 Year Warranty',
    description:
      'We will undertakes to repair or replace defective parts free of charge if the initial defect occurs during the warranty period.',
    href: '/warranty',
    icon: ShieldCheckIcon,
  },
  {
    name: '100% Customer Reply Rate',
    description:
      'Experience worry-free composting with our comprehensive warranty. Your GEME Composter, our commitment.',
    href: '/contact',
    icon: ChatBubbleLeftRightIcon,
  },
]

const btnText = 'Learn more'

function Warranty({ Link }: { Link?: ILinkComponent }) {
  const props: IPdpWarranty = {
    title,
    description,
    features,
    Link,
    btnText,
  }
  return <PdpWarranty {...props} />
}

export default Warranty
