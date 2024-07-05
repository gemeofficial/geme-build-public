import Image from 'next/image'
import {
  SectionContainer,
  SectionDescription,
  SectionTitle,
} from '../ui-components'
import clsx from 'clsx'
import { PropsWithChildren } from 'react'
import { LocaleType } from '../reviews'

export interface ICompareSectionProps {
  title: string
  description: string
  compareList: CompareList[]
  buttonText: string
}

interface CompareList {
  imgUrl: string
  devicename: string
  compareItems: {
    title: string
    desc: string
  }[]
}

export default function CompareSection({
  description,
  title,
  buttonText,
  compareList,
  locale,
  className
}: ICompareSectionProps & {
  locale?: LocaleType
  className?: string
}) {
  return (
    <div className={clsx("bg-[#f8f8f8] font-v2311 font-medium",className)}>
      <SectionContainer>
        <SectionTitle>{title}</SectionTitle>
        <SectionDescription className="my-4">
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
                    className={clsx(
                      'md:h-36 xl:h-40 flex flex-col text-left overflow-hidden',
                      locale !== 'en' ? 'h-32' : 'h-28',
                    )}
                    key={iten.title}
                  >
                    <div
                      className={clsx(
                        'lg:text-xl !leading-5 lg:!leading-6 pt-4 pb-1 px-5 border-t border-[#A8A8A8]',
                        index === 0 ? 'text-v2311-primary' : 'text-gray-800',
                        locale !== 'en' ? 'text-[15px]' : 'text-base',
                      )}
                    >
                      {iten.title}
                    </div>
                    <div
                      className={clsx(
                        'xl:text-base flex-1 px-5 text-gray-600',
                        locale !== 'en' ? 'text-[13px]' : 'text-sm',
                      )}
                    >
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
        'md:text-lg xl:text-xl bg-v2311-bg-dark-green hover:bg-v2311-primary transition-all duration-300 text-white flex items-center justify-center my-4 rounded-full py-2 md:py-3 xl:px-8',
        className,
      )}
      href="/product/geme"
    >
      {children}
    </a>
  )
}
