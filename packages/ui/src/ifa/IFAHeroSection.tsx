import Image from 'next/image'
import DefaultLink from 'next/link'
import { PlayIcon } from '../video-inline-player'
import CountDown from './CountDown'
import clsx from 'clsx'
import { ILinkComponent } from '../../../../apps/gemebuild/src/contexts/link-context'
import { ReactNode } from 'react'
import { LocaleType } from '../reviews'
import Video from './Video'

export interface IIFAHeroSectionProps {
  noticeTitle: string
  exhibitionTitle: ReactNode
  ifaExhibitionDate: string
  location: string
  activityTitle: string
  activityDescription: string
  activitySteps: string
  immediateParticipationButton: string
  countdownTitle: string
  winningProbabilityTitle: string
  sampleVideoTitle: string
  descriptionText: string
  bgImageUrl: string
  prizeImage: string
  locale: LocaleType
  PrefetchLink?: ILinkComponent
}

export function IFAHeroSection({
  PrefetchLink,
  activityDescription,
  activitySteps,
  location,
  activityTitle,
  countdownTitle,
  descriptionText,
  exhibitionTitle,
  ifaExhibitionDate,
  immediateParticipationButton,
  noticeTitle,
  sampleVideoTitle,
  winningProbabilityTitle,
  bgImageUrl,
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

      <div className="flex flex-col 2xl:flex-row absolute inset-x-[5%] inset-y-10 md:inset-y-[5%] xl:inset-y-[10%] rounded-lg bg-gradient-to-r from-black/80 to-black/60 text-[#f8f1eb] p-6 md:p-10">
        {/* 左侧区域 */}
        <div className="3xl:w-[40%] 2xl:mr-[10%] relative">
          <h1 className="text-3xl md:text-4xl 3xl:text-6xl text-nowrap text-v2311-text-yellow">
            {noticeTitle}
          </h1>
          {exhibitionTitle}
          <div className="text-sm md:text-lg 2xl:text-xl mt-4 lg:mt-8 2xl:absolute 2xl:bottom-0">
            <p>{location}</p>
            <p>{ifaExhibitionDate}</p>
          </div>
        </div>

        {/* 右侧区域 */}
        <div className="flex-1 flex flex-col text-sm md:text-base lg:text-lg 2xl:text-base 3xl:text-lg mt-10 lg:mt-20 2xl:mt-0">
          <h2 className="text-xl md:text-3xl 3xl:text-4xl text-center text-v2311-text-yellow font-semibold">
            {activityTitle}
          </h2>
          <div className="mt-4 flex items-start justify-between">
            <div className="mr-8 flex flex-col justify-between h-full">
              <div className="text-sm md:text-base lg:text-lg 2xl:text-base 3xl:text-lg">
                {activityDescription}
                <div className="hidden md:block 2xl:hidden 3xl:block">
                  {activitySteps}
                </div>
              </div>
              <Button
                PrefetchLink={PrefetchLink}
                text={immediateParticipationButton}
                className="hidden md:block"
              />
            </div>
            <Image
              src={prizeImage}
              height={400}
              width={400}
              alt="geme kobold"
              className="w-28 h-28 md:w-40 md:h-40 3xl:w-52 3xl:h-52 object-cover rounded-lg"
            />
          </div>
          <Button
            PrefetchLink={PrefetchLink}
            text={immediateParticipationButton}
            className="md:hidden mt-4 max-w-full"
            translatexClass="!translate-x-[-25%] hover:!translate-x-[25%]"
          />

          {/* 下半部分区域 */}
          <div className="flex justify-between mt-8 gap-8 flex-1">
            <div className="flex-1 relative">
              <div className="">{countdownTitle}</div>
              <CountDown locale={locale} />
              <div className="">{winningProbabilityTitle}</div>
              <div className="text-xl md:text-3xl 2xl:text-2xl 3xl:text-4xl my-2 lg:my-5 2xl:my-3 3xl:my-4 text-v2311-text-yellow">
                1 / 8
              </div>
              <Description text={descriptionText} className="hidden md:block" />
            </div>
            <div className="flex flex-col gap-2">
              <Video rootClassName="w-28 h-full max-h-52 md:max-h-max md:w-40 lg:w-[300px] 2xl:w-40 3xl:w-[350px] " />
              <div className="text-center">{sampleVideoTitle}</div>
            </div>
          </div>

          <Description text={descriptionText} className="md:hidden !relative" />
        </div>
      </div>
    </div>
  )
}

function Button({
  className,
  translatexClass,
  PrefetchLink,
  text,
}: {
  text: string
  className?: string
  translatexClass?: string
  PrefetchLink?: ILinkComponent
}) {
  const Link = PrefetchLink ? PrefetchLink : DefaultLink

  return (
    <Link
      href="/"
      className={clsx(
        'relative overflow-hidden text-sm md:text-lg 3xl:text-2xl font-bold text-v2311-text-yellow xl:w-auto flex items-center justify-center border-solid border-2 border-v2311-text-yellow rounded-xl max-w-[90%] md:mt-6 mb-1',
        className,
      )}
    >
      <span className="absolute z-[1] inset-0 flex items-center justify-center">
        {text}
      </span>
      <div
        className={clsx(
          'relative z-[2] h-full translate-x-[-50%] transition-all duration-500 hover:translate-x-[0%] ease-out min-h-8 md:min-h-10 3xl:min-h-14 w-[200%] flex flex-shrink-0',
          translatexClass,
        )}
      >
        <div className="w-full h-full bg-gradient-to-r from-v2311-text-yellow/20 to-v2311-text-yellow/60 min-h-[34px] md:min-h-[40px] 3xl:min-h-[56px]"></div>
        <div className="w-full h-full min-h-8 md:min-h-10 3xl:min-h-14"></div>
      </div>
    </Link>
  )
}

function Description({
  className,
  text,
}: {
  text: string
  className?: string
}) {
  return (
    <div
      className={clsx(
        'absolute bottom-0 text-xs md:text-sm 3xl:text-lg',
        className,
      )}
    >
      {text}
    </div>
  )
}
