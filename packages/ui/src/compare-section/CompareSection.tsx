import Image from 'next/image'
import {
  SectionContainer,
  SectionDescription,
  SectionTitle,
} from '../ui-components'
import clsx from 'clsx'
import { PropsWithChildren } from 'react'

const props = {
  title: 'Compare Section',
  description: 'Discover what makes Mill different.',
  compareList: [
    {
      imgUrl:
        'https://m.media-amazon.com/images/S/aplus-media-library-service-media/fee657c2-7e60-41d8-9b8d-9b1cd8e7ee24.__CR0,0,600,450_PT0_SX300_V1___.jpg',
      devicename: 'GEME',
      compareItems: [
        {
          title: 'Empty daily',
          desc: 'Run and empty every day food is added',
        },
        {
          title: 'Manual start',
          desc: 'Runs when you remember to push the button',
        },
        {
          title: 'Up to 60 dB',
          desc: 'Similar to an electric toothbrush',
        },
        {
          title: '3 month odor filter',
          desc: 'Up to $240/year for filter replacements',
        },
        {
          title: 'Twist-off lid',
          desc: 'Run and empty every day food is added',
        },
        {
          title: 'Home use',
          desc: 'Additional work needed to turn it into compost',
        },
      ],
    },
    {
      imgUrl:
        'https://cdn.sanity.io/images/0u2q0huj/production/7f4899f5fe3877b287b29b9de868a86aeb88c5d0-1552x1768.png?w=430&auto=format',
      devicename: 'Others',
      compareItems: [
        {
          title: 'Empty daily',
          desc: 'Run and empty every day food is added',
        },
        {
          title: 'Manual start',
          desc: 'Runs when you remember to push the button',
        },
        {
          title: 'Up to 60 dB',
          desc: 'Similar to an electric toothbrush',
        },
        {
          title: '3 month odor filter',
          desc: 'Up to $240/year for filter replacements',
        },
        {
          title: 'Twist-off lid',
          desc: 'Run and empty every day food is added',
        },
        {
          title: 'Home use',
          desc: 'Additional work needed to turn it into compost',
        },
      ],
    },
    {
      imgUrl:
        'https://cdn.sanity.io/images/0u2q0huj/production/f3eb4e0e9738129809ed179edb732beed21ab3ec-1552x1768.png?w=430&auto=format',
      devicename: 'Mill',
      compareItems: [
        {
          title: 'Empty daily',
          desc: 'Run and empty every day food is added',
        },
        {
          title: 'Manual start',
          desc: 'Runs when you remember to push the button',
        },
        {
          title: 'Up to 60 dB',
          desc: 'Similar to an electric toothbrush',
        },
        {
          title: '3 month odor filter',
          desc: 'Up to $240/year for filter replacements',
        },
        {
          title: 'Twist-off lid',
          desc: 'Run and empty every day food is added',
        },
        {
          title: 'Home use',
          desc: 'Additional work needed to turn it into compost',
        },
      ],
    },
    {
      imgUrl:
        'https://cdn.sanity.io/images/0u2q0huj/production/7f4899f5fe3877b287b29b9de868a86aeb88c5d0-1552x1768.png?w=430&auto=format',
      devicename: 'Other product',
      compareItems: [
        {
          title: 'Empty daily',
          desc: 'Run and empty every day food is added',
        },
        {
          title: 'Manual start',
          desc: 'Runs when you remember to push the button',
        },
        {
          title: 'Up to 60 dB',
          desc: 'Similar to an electric toothbrush',
        },
        {
          title: '3 month odor filter',
          desc: 'Up to $240/year for filter replacements',
        },
        {
          title: 'Twist-off lid',
          desc: 'Run and empty every day food is added',
        },
        {
          title: 'Home use',
          desc: 'Additional work needed to turn it into compost',
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
