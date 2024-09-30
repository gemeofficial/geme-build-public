import Image from 'next/image'
import {
  LocaleType,
  SectionContainer,
  SectionDescription,
  SectionTitle,
} from 'ui'
import clsx from 'clsx'
import { PropsWithChildren } from 'react'

export interface IPdpCompareProps {
  compareSectionProps: ICompareSectionProps
  locale: LocaleType
}
export default function Compare({
  compareSectionProps,
  locale,
}: IPdpCompareProps) {
  return <CompareSection locale={locale} {...compareSectionProps} />
}

interface ICompareSectionProps {
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

function CompareSection({
  description,
  title,
  buttonText,
  compareList,
  locale,
  className,
}: ICompareSectionProps & {
  locale?: LocaleType
  className?: string
}) {
  return (
    <div className={clsx('bg-[#f8f8f8] font-v2311 font-medium', className)}>
      <SectionContainer>
        <SectionTitle>{title}</SectionTitle>
        <SectionDescription className="my-4">{description}</SectionDescription>

        <div className="overflow-auto">
          <div className="w-[700px] md:w-[1152px] xl:w-full grid grid-cols-4 text-center pt-4">
            <div className="col-span-1 sticky left-0 z-10 bg-[#f8f8f8]">
              {compareList.slice(0, 1).map((item, index) => (
                <div className={clsx('flex flex-col')} key={item.devicename}>
                  <Content
                    buttonText={buttonText}
                    locale={locale}
                    item={item}
                    index={index}
                  />
                </div>
              ))}
            </div>

            <div className="col-span-3 flex overflow-x-auto">
              {compareList.slice(1).map((item, index) => (
                <div className={clsx('flex flex-col')} key={item.devicename}>
                  <Content
                    buttonText={buttonText}
                    locale={locale}
                    item={item}
                    index={index + 1}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <BuyNowButton className="xl:hidden w-full md:w-1/2">
          {buttonText}
        </BuyNowButton>
      </SectionContainer>
    </div>
  )
}

function Content({
  index,
  item,
  locale,
  buttonText,
}: {
  item: CompareList
  index: number
  buttonText: string
  locale?: LocaleType
}) {
  const linkMap = [
    { href: '/how-it-works', text: 'Learn more' },
    { href: '/blog/lomi-vs-geme-composter', text: 'Detailed Compare' },
    { href: '#', text: 'Detailed Compare' },
    { href: '#', text: 'Detailed Compare' },
  ]
  const link = linkMap[index] || linkMap[0]

  return (
    <>
      <Image
        className="w-full h-32 md:h-40 xl:h-52 object-contain"
        src={item.imgUrl}
        alt={item.devicename}
        width={350}
        height={200}
      />
      <h4 className="text-lg md:text-xl xl:text-2xl text-[#333] mb-2 mt-6 font-bold px-5">
        {item.devicename}
      </h4>
      <p className="text-sm md:text-base xl:text-lg text-gray-600 mb-8 px-5">
        <a href={link.href}>{link.text}</a>
      </p>

      {item.compareItems.map((iten) => (
        <div
          className={clsx(
            'md:h-36 xl:h-40 flex flex-col text-left overflow-hidden',
            locale === 'de' || locale === 'it'
              ? 'h-36'
              : locale === 'fr'
              ? 'h-40'
              : 'h-32',
          )}
          key={iten.title}
        >
          <div
            className={clsx(
              'lg:text-xl !leading-5 lg:!leading-6 pt-4 pb-1 px-2 md:px-5 border-t border-[#A8A8A8]',
              index === 0 ? 'text-v2311-primary' : 'text-gray-800',
              locale !== 'en' ? 'text-[15px]' : 'text-base',
            )}
          >
            {iten.title}
          </div>
          <div
            className={clsx(
              'xl:text-base flex-1 px-2 md:px-5 text-gray-600',
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
    </>
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
