import Image from 'next/image'
import DefaultLink from 'next/link'
import CountDown from './CountDown'
import clsx from 'clsx'
import { ILinkComponent } from '../../../../apps/gemebuild/src/contexts/link-context'
import { ReactNode } from 'react'
import { LocaleType } from '../reviews'
import Video from './Video'
import { Divider } from '../divider'

export interface IIFAHeroSectionProps {
  noticeTitle: string
  ifaExhibitionDate: string
  prizeDesc: string
  activityTitle: string
  activityDescription: string
  buttonText: string
  countdownTitle: string
  winningProbabilityTitle: string
  prizeImageTitle: string
  sampleVideoTitle: string
  descriptionText: string
  bgImageUrl: string
  prizeImage: string
  gemeLogo: string
  ifaLogo: string
  locale: LocaleType
  PrefetchLink?: ILinkComponent
}

export function IFAHeroSection({
  PrefetchLink,
  activityDescription,
  prizeDesc,
  activityTitle,
  countdownTitle,
  descriptionText,
  ifaExhibitionDate,
  buttonText,
  noticeTitle,
  prizeImageTitle,
  sampleVideoTitle,
  winningProbabilityTitle,
  bgImageUrl,
  gemeLogo,
  ifaLogo,
  prizeImage,
  locale,
}: IIFAHeroSectionProps) {
  return (
    <div className="relative min-h-[900px] max-h-max md:min-h-screen md:max-h-screen lg:min-h-[1100px] lg:max-h-max 2xl:min-h-screen 2xl:max-h-screen font-v2311">
      <Image
        src={bgImageUrl}
        height={1080}
        width={1920}
        alt="hero section background"
        className="w-full h-full min-h-[900px] max-h-max md:min-h-screen md:max-h-screen lg:min-h-[1100px] lg:max-h-max 2xl:min-h-screen 2xl:max-h-screen object-cover"
        priority
      />

      <div className="flex flex-col 2xl:flex-row absolute inset-0 bg-black/60 text-[#f8f1eb] p-6 md:p-20 3xl:px-52 3xl:py-32">
        {/* 左侧区域 */}
        <div className="2xl:w-[40%] 2xl:mr-[10%] 3xl:mr-[20%] relative">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <Image
              src={gemeLogo}
              height={800}
              width={175}
              alt="hero section background"
              className="w-24 h-5 md:w-[7.5rem] md:h-6 object-cover"
              priority
            />
            <Divider />
            <Image
              src={ifaLogo}
              height={480}
              width={240}
              alt="hero section background"
              className="w-16 h-8 md:w-24 md:h-12 object-contain"
              priority
            />
          </div>

          <div className="flex flex-col gap-4 mt-4 xl:mt-8 font-semibold">
            <h1 className="text-3xl md:text-4xl 3xl:text-6xl text-nowrap">
              {noticeTitle}
            </h1>
            <p className="text-sm md:text-lg 2xl:text-xl">
              {ifaExhibitionDate}
            </p>
            <p className="text-sm md:text-lg 2xl:text-xl text-v2311-text-yellow">
              {prizeDesc}
            </p>
            <p className="text-xs md:text-sm 3xl:text-base text-white/80 font-normal 2xl:max-w-[450px]">
              {activityDescription}
            </p>

            <Button
              PrefetchLink={PrefetchLink}
              text={buttonText}
              className="mt-4"
            />
          </div>
        </div>

        {/* 右侧区域 */}
        <div className="flex-1 flex flex-col gap-4 2xl:gap-6 text-sm md:text-lg 2xl:text-xl font-semibold">
          {/* <h2 className="text-xl md:text-3xl 3xl:text-4xl text-center text-v2311-text-yellow font-semibold">
            {activityTitle}
          </h2> */}
          <p className="">{countdownTitle}</p>

          <CountDown locale={locale} />

          <p className="">{winningProbabilityTitle}</p>
          <div className="flex items-center w-full gap-4 2xl:gap-8">
            <p className="text-xl md:text-3xl 2xl:text-2xl 3xl:text-4xl text-nowrap">
              1 / 8
            </p>
            <Divider color='#058669' height='50px' />
            <p className="font-normal text-xs xl:text-sm max-w-96">{descriptionText}</p>
          </div>

          {/* 下半部分区域 */}
          <div className="mt-4 flex items-center justify-between">
            <Image
              src={prizeImage}
              height={400}
              width={400}
              alt="geme kobold"
              className="w-28 h-28 md:w-40 md:h-40 3xl:w-52 3xl:h-52 object-cover rounded-lg"
            />

            <div className="flex flex-col gap-2">
              <Video rootClassName="w-28 h-full max-h-52 md:max-h-max md:w-40 lg:w-[300px] 2xl:w-40 3xl:w-[350px] " />
              <div className="text-center">{sampleVideoTitle}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Button({
  className,
  PrefetchLink,
  text,
}: {
  text: string
  className?: string
  PrefetchLink?: ILinkComponent
}) {
  const Link = PrefetchLink ? PrefetchLink : DefaultLink

  return (
    <Link
      href="/ifa-active-form"
      className={clsx(
        'relative items-center rounded-md border border-transparent bg-v2311-bg-dark-green hover:bg-v2311-primary px-3 py-1 md:px-8 md:py-3 text-xs font-medium text-white shadow-sm md:text-base focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-1 md:focus:ring-offset-2 max-w-max',
        className,
      )}
    >
      {text}
    </Link>
  )
}
