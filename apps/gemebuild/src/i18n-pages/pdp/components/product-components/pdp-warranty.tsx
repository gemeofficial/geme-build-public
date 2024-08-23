import {
  ShieldCheckIcon,
  TruckIcon,
  ChatBubbleLeftRightIcon,
} from '@heroicons/react/24/solid'
import { SectionDescription, SectionTitle } from 'ui'
import { ILinkComponent } from '../../../../contexts/link-context'

export interface IPdpWarranty {
  title: string
  description: string
  features: {
    name: string
    description: string
    href: string
    icon: typeof TruckIcon
  }[]
  btnText: string
  Link?: ILinkComponent
}

export const examplePdpWarrantyProps: IPdpWarranty = {
  title: 'Buy with Confident',
  description: `We know you will feel expensive, but we make sure it worth.
Your money wont gone, it turns into the a better life style and good service around you.`,

  features: [
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
  ],

  btnText: 'Learn more',
}

export function PdpWarranty({
  Link,
  description,
  features,
  title,
  btnText,
}: IPdpWarranty) {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionTitle>{title}</SectionTitle>
        <SectionDescription className="mt-6">{description}</SectionDescription>
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
                  <SectionDescription className="flex-auto !text-left leading-6">
                    {feature.description}
                  </SectionDescription>
                  <p className="mt-3 lg:mt-6">
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
