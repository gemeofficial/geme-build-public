import Image from 'next/image'
import CountDown from './CountDown'
import clsx from 'clsx'
import { ILinkComponent } from '../../../../apps/gemebuild/src/contexts/link-context'
import { PropsWithChildren, ReactNode } from 'react'
import { LocaleType } from '../reviews'
import Video from './Video'
import { Divider } from '../divider'
import { Button } from './Button'
import ImageZoomViewer from '../client-components/ImageZoomViewer'

export interface IIFAHeroSectionProps {
  noticeTitle: ReactNode
  ifaExhibitionDate: string
  prizeDesc: ReactNode
  activityTitle: string
  activityDescription: ReactNode
  buttonText: string
  countdownTitle: string
  winningProbabilityTitle: string
  prizeImageTitle: string
  sampleVideoTitle: string
  descriptionText: ReactNode
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
    <div className="relative h-[1100px] md:h-[1300px] lg:h-[1400px] xl:h-[800px] 2xl:h-screen font-v2311">
      <Image
        src={bgImageUrl}
        height={1080}
        width={1920}
        alt="hero section background"
        className="w-full h-[1100px] md:h-[1300px] lg:h-[1400px] xl:h-[800px] 2xl:h-screen object-cover"
        priority
      />

      <div className="flex items-center justify-center absolute inset-0 bg-black/60 text-[#f8f1eb]">
        <div className="flex flex-col xl:flex-row px-4 md:px-8 lg:px-[10vw] xl:px-10">
          {/* 左侧区域 */}
          <div className="xl:flex-1 xl:mr-[5%] 2xl:mr-[10%] relative">
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
              <h1 className="text-3xl md:text-4xl 3xl:text-5xl">
                {noticeTitle}
              </h1>
              <p className="text-sm md:text-lg 2xl:text-xl">
                {ifaExhibitionDate}
              </p>

              {/* 黑白底色背景 */}
              <div className="rounded-lg bg-black/50 lg:bg-white/20 p-4 md:p-6 xl:p-8 h-max flex flex-col gap-4 lg:gap-6 md:w-[500px] lg:w-max">
                <p className="text-sm md:text-lg 2xl:text-xl text-v2311-text-yellow">
                  {prizeDesc}
                </p>
                <p className="text-xs md:text-sm 3xl:text-base text-white font-normal lg:max-w-[450px]">
                  {activityDescription}
                </p>

                <Button PrefetchLink={PrefetchLink} text={buttonText} />
              </div>
            </div>
          </div>

          {/* 右侧区域 */}
          <div
            className={clsx(
              'flex-1 flex flex-col gap-4 2xl:gap-6  mt-8 2xl:mt-0',
              'text-sm md:text-lg 2xl:text-xl 3xl:text-2xl font-semibold',
              'md:min-w-[550px] md:max-w-[550px] 2xl:min-w-[600px] 2xl:max-w-[600px]',
            )}
          >
            <p>{countdownTitle}</p>

            <CountDown locale={locale} />

            <p>{winningProbabilityTitle}</p>
            <div className="flex items-center w-full gap-4 2xl:gap-8">
              <p className="text-xl md:text-3xl 2xl:text-4xl 3xl:text-6xl text-nowrap whitespace-nowrap">
                1 / 2
              </p>
              <Divider color="#058669" height="130px" width="3px" />
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
                <ImageZoomViewer>
                  <Image
                    src={prizeImage}
                    height={400}
                    width={400}
                    alt="geme kobold"
                    className="w-40 h-40 md:w-56 md:h-56 lg:w-[259px] lg:h-64 xl:w-56 xl:h-56 2xl:w-full 2xl:h-[292px] max-h-[292px] object-cover rounded-lg"
                  />
                </ImageZoomViewer>
              </MediaBox>

              <MediaBox
                textInfo={sampleVideoTitle}
                className="lg:flex-1 xl:flex-none 2xl:flex-1"
              >
                <Video
                  videoConfig={{
                    autoPlay: true,
                    src: 'https://www-geme-bio-us.s3.us-west-1.amazonaws.com/user-videos/ifa-page-exampl-video.mp4',
                    poster: '/assets/images/ifa/ifa-example-video-poster.png',
                    className:
                      'w-40 h-40 md:w-56 md:h-56 lg:w-[259px] lg:h-64 xl:w-56 xl:h-56 2xl:w-full 2xl:h-[292px] max-h-[292px] ',
                  }}
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
        'flex flex-col text-center bg-v2311-bg-dark-green rounded-lg h-max',
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
