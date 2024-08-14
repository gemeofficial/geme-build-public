import Image from 'next/image'
import CountDown from './CountDown'
import clsx from 'clsx'
import { ILinkComponent } from '../../../../apps/gemebuild/src/contexts/link-context'
import { PropsWithChildren } from 'react'
import { LocaleType } from '../reviews'
import Video from './Video'
import { Divider } from '../divider'
import { Button } from './Button'

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
    <div className="relative h-[900px] md:h-screen font-v2311">
      <Image
        src={bgImageUrl}
        height={1080}
        width={1920}
        alt="hero section background"
        className="w-full h-[900px] md:h-screen object-cover"
        priority
      />

      <div className="flex items-center justify-center absolute inset-0 bg-black/60 text-[#f8f1eb]">
        <div className="flex flex-col xl:flex-row">
          {/* 左侧区域 */}
          <div className="xl:w-[40%] xl:mr-[10%] 3xl:ml-[10%] 4xl:ml-[13%] relative">
            {/* Logo */}
            <div className="flex items-center gap-4 lg:gap-6 3xl:gap-8">
              <Image
                src={gemeLogo}
                height={800}
                width={175}
                alt="hero section background"
                className="w-24 h-5 md:w-[7.5rem] md:h-6 xl:w-40 xl:h-10 3xl:w-52 3xl:h-16 object-contain"
                priority
              />
              <Divider className="xl:!h-8 3xl:!h-12" />
              <Image
                src={ifaLogo}
                height={480}
                width={240}
                alt="hero section background"
                className="w-16 h-8 md:w-24 md:h-12 object-contain"
                priority
              />
            </div>

            <div className="flex flex-col gap-4 lg:gap-6 3xl:gap-8 mt-4 xl:mt-8 font-semibold">
              <h1 className="text-3xl md:text-4xl 3xl:text-6xl text-nowrap">
                {noticeTitle}
              </h1>
              <p className="text-sm md:text-lg 2xl:text-xl">
                {ifaExhibitionDate}
              </p>
              <p className="text-sm md:text-lg 2xl:text-xl text-v2311-text-yellow">
                {prizeDesc}
              </p>
              <p className="text-xs md:text-sm 3xl:text-base text-white/80 font-normal lg:max-w-[450px]">
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
          <div className="flex-1 flex flex-col gap-4 2xl:gap-6 text-sm md:text-lg 2xl:text-xl 3xl:text-2xl font-semibold max-w-[600px] 3xl:max-w-max mt-8 2xl:mt-0">
            {/* <h2 className="text-xl md:text-3xl 3xl:text-4xl text-center text-v2311-text-yellow font-semibold">
            {activityTitle}
          </h2> */}
            <p>{countdownTitle}</p>

            <CountDown locale={locale} />

            <p>{winningProbabilityTitle}</p>
            <div className="flex items-center w-full gap-4 2xl:gap-8">
              <p className="text-xl md:text-3xl 2xl:text-2xl 3xl:text-4xl text-nowrap whitespace-nowrap">
                1 / 2
              </p>
              <Divider color="#058669" height="56px" width="5px" />
              <p className="font-normal text-xs md:text-sm xl:text-base">
                {descriptionText}
              </p>
            </div>

            {/* 下半部分区域 */}
            <div className="mt-4 flex items-center justify-between lg:gap-8 lg:justify-normal lg:items-stretch">
              <MediaBox
                textInfo={prizeImageTitle}
                className="lg:flex-1 xl:flex-none 2xl:flex-1"
              >
                <Image
                  src={prizeImage}
                  height={400}
                  width={400}
                  alt="geme kobold"
                  className="w-40 h-40 md:w-56 md:h-56 lg:w-full lg:h-full xl:w-56 xl:h-56 2xl:w-full 2xl:h-full object-cover rounded-lg max-h-[292px]"
                />
              </MediaBox>

              <MediaBox
                textInfo={sampleVideoTitle}
                className="lg:flex-1 xl:flex-none 2xl:flex-1"
              >
                <Video
                  autoPlay
                  poster="/assets/images/ifa/ifa-example-video-poster.png"
                  src="https://www-geme-bio-us.s3.us-west-1.amazonaws.com/user-videos/ifa-page-exampl-video.mp4"
                  className="w-40 h-40 md:w-56 md:h-56 lg:w-full lg:h-full xl:w-56 xl:h-56 2xl:w-full 2xl:h-full max-h-[292px]"
                />
              </MediaBox>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function MediaBox({
  children,
  textInfo,
  className,
}: PropsWithChildren<{ textInfo: string; className?: string }>) {
  return (
    <div
      className={clsx(
        'flex flex-col text-center bg-v2311-bg-dark-green rounded-lg',
        className,
      )}
    >
      {children}
      <p className="text-white text-nowrap text-xs md:text-sm lg:text-base py-2">
        {textInfo}
      </p>
    </div>
  )
}
