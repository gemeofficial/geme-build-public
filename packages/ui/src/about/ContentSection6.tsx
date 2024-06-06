const incentives = [
  {
    name: 'Live with GEME',
    link: '/product/geme',
    imageSrc:
      'https://tailwindui.com/img/ecommerce/icons/icon-shipping-simple.svg',
    description:
      "It's not actually free we just price it into the products. Someone's paying for it, and it's not us.",
  },
  {
    name: 'Large Scale Composting with GEME',
    link: '/business-inquiry',
    imageSrc:
      'https://tailwindui.com/img/ecommerce/icons/icon-exchange-simple.svg',
    description:
      "If you don't like it, trade it to one of your friends for something of theirs. Don't send it here though.",
  },
  {
    name: 'Join GEME Networking',
    link: '/geme-network-survey',
    imageSrc:
      'https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg',
    description:
      "If it breaks in the first 10 years we'll replace it. After that you're on your own though.",
  },
  {
    name: 'Affiliate with GEME',
    link: '/coming-soon',
    imageSrc:
      'https://tailwindui.com/img/ecommerce/icons/icon-exchange-simple.svg',
    description:
      "If you don't like it, trade it to one of your friends for something of theirs. Don't send it here though.",
  },
  {
    name: 'Distribute with GEME',
    link: 'https://eu.jotform.com/form/221943772954062',
    imageSrc:
      'https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg',
    description:
      "If it breaks in the first 10 years we'll replace it. After that you're on your own though.",
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
