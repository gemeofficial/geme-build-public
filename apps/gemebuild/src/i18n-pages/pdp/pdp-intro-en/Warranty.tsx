import {
  ShieldCheckIcon,
  TruckIcon,
  ChatBubbleLeftRightIcon,
} from '@heroicons/react/24/solid'

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

function Warranty() {
  // return (
  //   <div className=" h-32 bg-orange-500 ">
  //     TODO: This a placeholder for Warranty
  //   </div>
  // )

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-emerald-600 sm:text-4xl">
            Buy with Confident
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We know you will feel expensive, but we make sure it worth. Your
            money wont gone, it turns into the a better life style and good
            service around you.
          </p>
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
                      Learn more <span aria-hidden="true">→</span>
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
