const incentives = [
  {
    name: 'Live with GEME',
    link: '/product/geme',
    imageSrc:
      'https://tailwindui.com/img/ecommerce/icons/icon-shipping-simple.svg',
    description:
      'GEME makes your everyday life a breeze, not only by cutting down on waste but also by helping you feel less wasteful.',
  },
  {
    name: 'Large Scale Composting with GEME',
    link: '/industrial-equipments',
    imageSrc:
      'https://tailwindui.com/img/ecommerce/icons/icon-exchange-simple.svg',
    description:
      'Beyond our range of household composting devices, GEME leverages its cutting-edge biotechnology to offer customized industrial-grade composting equipment and solutions.',
  },
  {
    name: 'Join GEME Networking',
    link: '/geme-network-survey',
    imageSrc:
      'https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg',
    description:
      "Get compost from someone's  unnecessary food scraps, with zero or minimum cost!  Donate your GEME byproduct if you don't need compost. Join our waiting list to be the super early users for this great program!.",
  },
  {
    name: 'Affiliate with GEME',
    link: '/coming-soon',
    imageSrc:
      'https://tailwindui.com/img/ecommerce/icons/icon-exchange-simple.svg',
    description:
      "GEME's growth is fueled by the support of our users and allies. Join our affiliate union and become an early advocate for the new lifestyle.",
  },
  {
    name: 'Distribute with GEME',
    link: 'https://eu.jotform.com/form/221943772954062',
    imageSrc:
      'https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg',
    description:
      "We are open to partnering with distributors from all over the world. If you have strong local market presence, please don't hesitate to reach out to us.",
  },
  {
    name: 'Investment with GEME',
    link: 'mailto:admin@geme.bio',
    imageSrc:
      'https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg',
    description:
      'GEME has ambitious dreams, and our continued rapid growth hinges on the support of external capital. If you are interested and have investment intentions, please send an email to admin@geme.bio to discuss further.',
  },
]

export default function ContentSection6() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-gray-50 px-6 py-16 sm:p-16">
          <div className="mx-auto max-w-xl lg:max-w-none">
            <div className="text-center">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                Partner with GEME
              </h2>
            </div>
            <div className="mx-auto mt-12 grid max-w-sm grid-cols-1 gap-x-8 gap-y-10 sm:max-w-none lg:grid-cols-3">
              {incentives.map((incentive) => (
                <div
                  key={incentive.name}
                  className="text-center sm:flex sm:text-left lg:block lg:text-center"
                >
                  <div className="sm:flex-shrink-0">
                    <div className="flow-root">
                      <img
                        className="mx-auto h-16 w-16"
                        src={incentive.imageSrc}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="mt-3 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6">
                    {incentive.link && (
                      <a
                        href={incentive.link}
                        className="text-v2311-primary hover:text-amber-400"
                      >
                        <h3 className="text-sm font-medium">
                          {incentive.name}
                        </h3>
                      </a>
                    )}
                    {!incentive.link && (
                      <h3 className="text-sm font-medium text-gray-900">
                        {incentive.name}
                      </h3>
                    )}

                    <p className="text-left mt-2 text-sm text-gray-500">
                      {incentive.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
