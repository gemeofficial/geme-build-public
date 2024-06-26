import {
  ShieldCheckIcon,
  TruckIcon,
  ChatBubbleLeftRightIcon,
} from '@heroicons/react/24/solid'
import { ILinkComponent } from '../../../contexts/link-context'
import { IPdpWarranty, PdpWarranty } from 'ui'

const title = 'Kaufen Sie mit Vertrauen'
const description = `Wir wissen, dass Sie es teuer finden werden, aber wir stellen sicher, dass es sich lohnt.
Ihr Geld ist nicht weg, es verwandelt sich in einen besseren Lebensstil und guten Service um Sie herum.`

const features = [
  {
    name: '30 Tage kostenloser Test',
    description:
      'Kostenloser Versand (US-Festland), kostenloser Test, keine Rücksendegebühren. Stellen Sie uns während Ihres Tests Fragen, innovative Produktliebhaber verdienen Unterstützung!',
    href: '/return-policy',
    icon: TruckIcon,
  },
  {
    name: '2 Jahre Garantie',
    description:
      'Wir verpflichten uns, defekte Teile kostenlos zu reparieren oder zu ersetzen, wenn der anfängliche Defekt während der Garantiezeit auftritt.',
    href: '/warranty',
    icon: ShieldCheckIcon,
  },
  {
    name: '100% Kundenantwortquote',
    description:
      'Erleben Sie sorgenfreies Kompostieren mit unserer umfassenden Garantie. Ihr GEME-Komposter, unser Engagement.',
    href: '/contact',
    icon: ChatBubbleLeftRightIcon,
  },
]

const btnText = 'Erfahren Sie mehr'

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
