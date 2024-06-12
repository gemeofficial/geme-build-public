const data = {
  title: 'Partner with GEME',
  incentives: [
    {
      name: 'Live with GEME',
      link: '/product/geme',
      imageSrc: '/assets/images/about/icons/litter.png',
      description:
        'GEME makes your everyday life a breeze, not only by cutting down on waste but also by helping you feel less wasteful.',
    },
    {
      name: 'Large Scale Composting with GEME',
      link: '/industrial-equipments',
      imageSrc: '/assets/images/about/icons/composting.png',
      description:
        'Beyond our range of household units, GEME leverages its cutting-edge biotechnology to offer customized industrial-grade composting equipment and solutions.',
    },
    {
      name: 'Join GEME Networking',
      link: '/geme-network-survey',
      imageSrc: '/assets/images/about/icons/networking.png',
      description:
        "Get compost from someone's  unnecessary food scraps, with zero or minimum cost! Donate your GEME byproduct if you don't need compost. Join the community!",
    },
    {
      name: 'Affiliate with GEME',
      link: '/coming-soon',
      imageSrc: '/assets/images/about/icons/affiliate-marketing.png',
      description:
        "GEME's growth is fueled by the support of our users and allies. Join our affiliate union and become an early advocate for the new lifestyle.",
    },
    {
      name: 'Retail or Distribute with GEME',
      link: 'https://eu.jotform.com/form/221943772954062',
      imageSrc: '/assets/images/about/icons/distribution.png',
      description:
        "We are open to partnering with distributors from all over the world. If you have strong local market presence, please don't hesitate to reach out to us.",
    },
    {
      name: 'Investment with GEME',
      link: 'mailto:admin@geme.bio',
      imageSrc: '/assets/images/about/icons/profits.png',
      description:
        'GEME has ambitious dreams, and our continued rapid growth hinges on the support of external capital. Email us(admin@geme.bio) if you get investment intentions.',
    },
  ],
}

export default function ContentSection6() {
  return (
    <div className="mt-28 lg:mt-40 mx-auto max-w-xl lg:max-w-7xl px-8 lg:px-12 2xl:px-0">
      <div className="rounded-2xl bg-gray-50 px-6 py-16 sm:p-16">
        <div className="mx-auto max-w-xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-800">
              {data.title}
            </h2>
          </div>
          <div className="lg:mx-auto mt-12 grid max-w-sm grid-cols-1 gap-x-8 gap-y-10 sm:max-w-none lg:grid-cols-3">
            {data.incentives.map((incentive) => (
              <div
                key={incentive.name}
                className="sm:flex sm:gap-8 sm:text-left lg:block lg:text-center"
              >
                <a
                  href={incentive.link || ''}
                  className="hover:underline text-v2311-primary decoration-inherit block min-w-min"
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
                  <h3 className="text-center mt-3 lg:mt-6 text-sm font-medium ">
                    {incentive.name}
                  </h3>
                </a>
                <p className="text-left sm:max-w-[250px] lg:max-w-full mt-2 sm:mt-0 lg:mt-2 text-sm text-gray-500">
                  {incentive.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
