import {
  ShieldCheckIcon,
  TruckIcon,
  ChatBubbleLeftRightIcon,
} from '@heroicons/react/24/solid'
import { ILinkComponent } from '../../../contexts/link-context'
import { IPdpWarranty, PdpWarranty } from 'ui'

const title = 'Achetez en toute confiance'
const description = `Nous savons que vous vous sentirez cher, mais nous veillons à ce que cela en vaille la peine.
Votre argent ne disparaîtra pas, il se transformera en un meilleur style de vie et un bon service autour de vous.`

const features = [
  {
    name: `30 jours d'essai gratuit`,
    description: `Livraison gratuite (continent américain), essai gratuit, aucun frais de retour facturé. Posez-nous toutes vos questions lors de votre essai, les amateurs de produits innovants méritent d'être encouragés !`,
    href: '/return-policy',
    icon: TruckIcon,
  },
  {
    name: '2 ans de garantie',
    description:
      'Nous nous engageons à réparer ou à remplacer gratuitement les pièces défectueuses si le défaut initial survient pendant la période de garantie.',
    href: '/warranty',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Taux de réponse client de 100%',
    description: `Faites l'expérience d'un compostage sans souci grâce à notre garantie complète. Votre Composteur GEME, notre engagement.`,
    href: '/contact',
    icon: ChatBubbleLeftRightIcon,
  },
]

const btnText = 'Apprendre encore plus'

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
