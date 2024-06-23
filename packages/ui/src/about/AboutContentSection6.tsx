import { MTitle } from '../ui-components'

const data = {
  title: 'Partner with GEME',
  incentives: [
    {
      name: 'Live with GEME',
      link: '/product/geme',
      imageSrc: '/assets/images/about/icons/use-geme.png',
      description: (
        <>
          Feel good, do good, live sustainably. Replace your garbage disposal
          with <a href="/product/geme">GEME Composter</a>.
        </>
      ),
    },
    {
      name: 'Large Scale Composting with GEME',
      link: '/industrial-equipments',
      imageSrc: '/assets/images/about/icons/composting.png',
      description: (
        <>
          From homes to factories, Tailored biotechnology for industrial-grade
          composting excellence.
        </>
      ),
    },
    {
      name: 'Join GEME Networking',
      link: '/geme-network-survey',
      imageSrc: '/assets/images/about/icons/networking.png',
      description: (
        <>
          Free compost swap community! Share what you don't need, grow a greener
          future together.
        </>
      ),
    },
    {
      name: 'Affiliate with GEME',
      link: '/coming-soon',
      imageSrc: '/assets/images/about/icons/affiliate-marketing.png',
      description: (
        <>
          Be a GEME champion! Join our affiliate union & lead the sustainable
          revolution.
        </>
      ),
    },
    {
      name: 'Retail or Distribute with GEME',
      link: 'https://eu.jotform.com/form/221943772954062',
      imageSrc: '/assets/images/about/icons/distribution.png',
      description: (
        <>
          Expand your reach & join the GEME movement. We're seeking strong
          distributors worldwide.
        </>
      ),
    },
    {
      name: 'Investment with GEME',
      link: 'mailto:admin@geme.bio',
      imageSrc: '/assets/images/about/icons/profits.png',
      description: (
        <>
          Fuel the future! Invest in GEME & join a game-changing sustainable
          movement. (admin@geme.bio)
        </>
      ),
    },
  ],
}

export function AboutContentSection6() {
  return (
    <div className="mt-20 md:mt-28 lg:mt-40 mx-auto max-w-xl lg:max-w-7xl px-8 lg:px-12 2xl:px-0">
      <div className="rounded-2xl bg-gray-50 px-6 py-16 sm:p-16">
        <div className="mx-auto max-w-xl lg:max-w-none">
          <div className="text-center">
            <MTitle className="!text-[#222]">{data.title}</MTitle>
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
                  <h3 className="text-center mt-3 lg:mt-6 font-bold ">
                    {incentive.name}
                  </h3>
                </a>
                <p className="text-left sm:max-w-[250px] lg:max-w-full mt-2 sm:mt-0 lg:mt-2 text-base text-v2311-text-gary">
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
