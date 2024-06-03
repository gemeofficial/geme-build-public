import {
  ShieldCheckIcon,
  TruckIcon,
  ChatBubbleLeftRightIcon,
} from '@heroicons/react/24/solid'
import { ILinkComponent } from '../../../contexts/link-context'

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
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-v2311-bg-dark-green">
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
                    {Link && (
                      <Link
                        href={feature.href}
                        className="text-sm font-semibold leading-6 text-emerald-600"
                      >
                        {btnText} <span aria-hidden="true">→</span>
                      </Link>
                    )}

                    {!Link && (
                      <a
                        href={feature.href}
                        className="text-sm font-semibold leading-6 text-emerald-600"
                      >
                        {btnText} <span aria-hidden="true">→</span>
                      </a>
                    )}
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
