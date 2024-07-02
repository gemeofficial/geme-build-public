import Image from 'next/image'
import {
  SectionContainer,
  SectionDescription,
  SectionTitle,
} from '../ui-components'
import clsx from 'clsx'
import { PropsWithChildren } from 'react'

const props = {
  title: "Let's Compare",
  description: 'Discover what makes GEME different.',
  compareList: [
    {
      imgUrl:
        'https://m.media-amazon.com/images/S/aplus-media-library-service-media/fee657c2-7e60-41d8-9b8d-9b1cd8e7ee24.__CR0,0,600,450_PT0_SX300_V1___.jpg',
      devicename: 'GEME',
      compareItems: [
        {
          title: 'Real Compost',
          desc: 'High active microbe accelerate composting process',
        },
        {
          title: 'No need to change filter',
          desc: 'Zero cost, industrial grade filter, not carbon material',
        },
        {
          title: '19L super large volume',
          desc: 'Take months to fill up',
        },
        {
          title: 'Also pet poops & soup',
          desc: 'Support bio waste, including cat litter and liquid waste',
        },
        {
          title: 'No need to clean',
          desc: 'Just reduce when full, no need to empty and clean',
        },
        {
          title: 'No subscription',
          desc: 'Price is high, but no hidden subscription cost, free trail, free return',
        },
        {
          title: 'Continuously composting',
          desc: 'Add anytime, no need to wait cycle completed',
        },
      ],
    },
    {
      imgUrl:
        'https://cdn.sanity.io/images/0u2q0huj/production/7f4899f5fe3877b287b29b9de868a86aeb88c5d0-1552x1768.png?w=430&auto=format',
      devicename: 'Brand 1', // Lomi
      compareItems: [
        {
          title: 'Not real compost',
          desc: 'Dehydrate and cook, still dry waste',
        },
        {
          title: 'Change carbon filter regularly',
          desc: 'Up to $240/year for filter replacements',
        },
        {
          title: '3L small volume',
          desc: 'Limited size of food waste',
        },
        {
          title: 'Limited food scraps',
          desc: 'Can not handle meat and soup',
        },
        {
          title: 'Empty daily',
          desc: 'Clean up after each use',
        },
        {
          title: 'Subscription required',
          desc: 'High hidden cost subscription trap',
        },
        {
          title: 'Cycle based manual start',
          desc: 'Twist off lid, push button to start, wait until cycle ends',
        },
      ],
    },
    {
      imgUrl:
        'https://cdn.sanity.io/images/0u2q0huj/production/f3eb4e0e9738129809ed179edb732beed21ab3ec-1552x1768.png?w=430&auto=format',
      devicename: 'Brand 2', // mill
      compareItems: [
        {
          title: 'Not real compost',
          desc: 'Dehydrate and grind, still dry waste',
        },
        {
          title: 'Carbon odor filter',
          desc: '$60+ for each filter replacements',
        },
        {
          title: '6.5L volume',
          desc: 'Looks big, but capacity limited',
        },
        {
          title: 'Limited food scraps',
          desc: 'Can not handle meat and soup',
        },
        {
          title: 'Empty weekly',
          desc: 'Run and empty when get full',
        },
        {
          title: 'Subscription required',
          desc: 'Subscription by default, trouble for cancel and return, no possible refund',
        },
        {
          title: 'Continuously chopping',
          desc: 'Auto restart when you add waste, keep chopping',
        },
      ],
    },
    {
      imgUrl:
        'https://cdn.sanity.io/images/0u2q0huj/production/7f4899f5fe3877b287b29b9de868a86aeb88c5d0-1552x1768.png?w=430&auto=format',
      devicename: 'Brand 3', // Reencle
      compareItems: [
        {
          title: 'Real Compost',
          desc: 'Low maintenance microbes involved',
        },
        {
          title: 'Change carbon filter regularly',
          desc: 'Cost $35+ each replacement',
        },
        {
          title: '6L volume',
          desc: '14L outer space, 6L inner volume',
        },
        {
          title: 'Food waste only',
          desc: 'Can not handle pet poops',
        },
        {
          title: 'Clean up on demand',
          desc: 'Empty, clean up and reset compost starter when full',
        },
        {
          title: 'Subscription offered',
          desc: 'Looks affordable, but trouble when cancel or refund',
        },
        {
          title: 'Continuously composting',
          desc: 'Add anytime, no need to wait cycle completed',
        },
      ],
    },
  ],
  buttonText: 'Buy Now',
}

export default function CompareSection() {
  const { description, title, buttonText, compareList } = props
  return (
    <div className="bg-v2311-bg-light-green">
      <SectionContainer>
        <SectionTitle>{title}</SectionTitle>
        <SectionDescription className="mt-4 md:mt-8">
          {description}
        </SectionDescription>

        <div className="overflow-auto">
          <div className="w-[960px] md:w-[1152px] xl:w-full grid grid-cols-4 text-center pt-4">
            {compareList.map((item, index) => (
              <div className="flex flex-col" key={item.devicename}>
                <Image
                  className="w-full h-32 md:h-40 xl:h-52 object-cover"
                  src={item.imgUrl}
                  alt={item.devicename}
                  width={350}
                  height={200}
                />
                <h4 className="text-lg md:text-xl xl:text-2xl text-[#333] mb-10 mt-6 font-bold px-5">
                  {item.devicename}
                </h4>
                {item.compareItems.map((iten) => (
                  <div
                    className="h-28 md:h-36 xl:h-40 flex flex-col text-left overflow-hidden"
                    key={iten.title}
                  >
                    <div
                      className={clsx(
                        'text-base lg:text-xl pt-4 px-5 border-t border-[#A8A8A8]',
                        index === 0 ? 'text-v2311-primary' : 'text-gray-800',
                      )}
                    >
                      {iten.title}
                    </div>
                    <div className="text-sm xl:text-base flex-1 px-5 text-gray-600">
                      {iten.desc}
                    </div>
                  </div>
                ))}

                {index === 0 && (
                  <BuyNowButton className="hidden xl:flex w-full">
                    {buttonText}
                  </BuyNowButton>
                )}
              </div>
            ))}
          </div>
        </div>
        <BuyNowButton className="xl:hidden w-full md:w-1/2">
          {buttonText}
        </BuyNowButton>
      </SectionContainer>
    </div>
  )
}

function BuyNowButton({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  return (
    <a
      className={clsx(
        'md:text-lg xl:text-xl bg-[#047857] text-white flex items-center justify-center my-4 rounded-full py-2 md:py-3 xl:px-8',
        className,
      )}
      href="/product/geme"
    >
      {children}
    </a>
  )
}
