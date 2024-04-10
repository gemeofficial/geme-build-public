import {
  ShieldCheckIcon,
  TruckIcon,
  ChatBubbleLeftRightIcon,
} from '@heroicons/react/24/solid'

const title = 'Achetez en toute confiance'
const description = `Nous savons que vous vous sentirez cher, mais nous veillons à ce que cela en vaille la peine.
Votre argent ne disparaîtra pas, il se transformera en un meilleur style de vie et un bon service autour de vous.`

const features = [
  {
    name: `30 jours d'essai gratuit`,
    description:
      `Livraison gratuite (continent américain), essai gratuit, aucun frais de retour facturé. Posez-nous toutes vos questions lors de votre essai, les amateurs de produits innovants méritent d'être encouragés !`,
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
    description:
      `Faites l'expérience d'un compostage sans souci grâce à notre garantie complète. Votre Composteur GEME, notre engagement.`,
    href: '/contact',
    icon: ChatBubbleLeftRightIcon,
  },
]

const btnText = 'Apprendre encore plus'

function Warranty() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-emerald-600 sm:text-4xl">
            {title}
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">{description}</p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-600">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                    <a
                      href={feature.href}
                      className="text-sm font-semibold leading-6 text-emerald-600"
                    >
                      {btnText} <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

export default Warranty
