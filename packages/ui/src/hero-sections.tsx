import { ReactNode, ComponentType, PropsWithChildren } from 'react'
import { IconCycleArrow, IconLogoGeme } from './icons'
// import { IVideoPlayerProps, VideoPlayer } from './video'
import { IMuxVideoPlayerProps, MuxVideoPlayer } from './mux-video'
import { ILinkComponent } from '../../../apps/gemebuild/src/contexts/link-context'

interface IHeroSection1Props {
  title?: ReactNode
  description?: ReactNode
  linkText?: string
  linkUrl?: string
  linkClickedTrack?: () => void
  videoProps?: IMuxVideoPlayerProps
  LinkComponent?: ILinkComponent
}

const heroSection1Props: IHeroSection1Props = {
  title: (
    <>
      <span className=" hidden xl:inline ">
        World&apos;s First Bio Waste Composter
      </span>
      <span className=" xl:hidden ">New Life for Waste</span>
    </>
  ),
  description: (
    <>
      <span className=" hidden xl:inline ">
        Meet GEME, the modern electric composter for home. <br />
        Turn your daily food waste into organic compost.
        <br />
        Less landfill, more garden soil.
      </span>
      <span className=" xl:hidden ">
        Does your food scrap garbage ever ... <br />
        Turn your floor wet and dirty.
      </span>
    </>
  ),
  linkText: 'Shop Now',
  linkUrl: '/product/geme',
  linkClickedTrack: () => {},
  videoProps: {
    sources: [
      // for pc
      {
        minWidth: 1280,
        src: 'https://public-assest-434759801795.s3.us-west-1.amazonaws.com/geme-bio-home-hero-backgruond-video-1080p.mp4',
        playbackId: 'PHDmho81odHhv3yvvm4WLQjqUFpKqwAR01gJwEVEUcXo',
        posterUrl:
          'https://public-assest-434759801795.s3.us-west-1.amazonaws.com/cover-v2.jpg',
      },
      // for mobile/tablet
      {
        minWidth: 0,
        src: 'https://public-assest-434759801795.s3.us-west-1.amazonaws.com/geme-bio-home-background-video-no-sound-480p.mp4',
        playbackId: 'WcYd7fIP97ciG1zR5Hkq9dEmqLeQpsoX5iIZdMQn8Lc',
      },
    ],
  },
}

function HeroSection1({
  title,
  description,
  linkText,
  linkUrl,
  linkClickedTrack,
  videoProps,
  LinkComponent,
}: IHeroSection1Props) {
  return (
    <div className="h-screen ">
      <div className="overflow-hidden h-full relative">
        <div className="z-10 absolute inset-0 bg-v2311-bg-dark-green/[15%]"></div>
        {/* 停用原生Video */}
        {/*<VideoPlayer*/}
        {/*  {...videoProps}*/}
        {/*  className="relative w-full h-full overflow-hidden object-cover"*/}
        {/*/>*/}
        {/* 疫情Mux Player */}
        <MuxVideoPlayer {...videoProps} />
      </div>

      <div className=" h-screen xl:mx-auto xl:max-w-7xl absolute z-40 inset-0 flex flex-col items-center xl:items-start justify-center text-center xl:text-left">
        <IconLogoGeme className="hidden xl:block w-16" />
        {title && (
          <h1 className="v2311-font-h0 text-white xl:mt-12">{title}</h1>
        )}
        {description && (
          <p className="v2311-font-h2 font-normal text-white mt-4 md:mt-12 xl:mt-12">
            {description}
          </p>
        )}
        {linkText && linkUrl && LinkComponent == null && (
          <a
            className=" v2311-font-h3 font-bold text-white xl:w-auto flex items-center justify-center mt-[80px] md:mt-[160px] xl:mt-16 border-solid border-2 border-white rounded-xl py-1 md:py-2 px-16 md:px-32 xl:px-8"
            href={linkUrl}
            onClick={linkClickedTrack}
          >
            {linkText}
            <IconCycleArrow className="inline-block ml-4 md:ml-8 xl:ml-4 w-5 md:w-10 xl:w-12 h-5 md:h-10 xl:h-12" />
          </a>
        )}
        {linkText && linkUrl && LinkComponent != null && (
          <LinkComponent
            className=" v2311-font-h3 font-bold text-white xl:w-auto flex items-center justify-center mt-[80px] md:mt-[160px] xl:mt-16 border-solid border-2 border-white rounded-xl py-1 md:py-2 px-16 md:px-32 xl:px-8"
            href={linkUrl}
            // onClick={linkClickedTrack}
          >
            {linkText}
            <IconCycleArrow className="inline-block ml-4 md:ml-8 xl:ml-4 w-5 md:w-10 xl:w-12 h-5 md:h-10 xl:h-12" />
          </LinkComponent>
        )}
      </div>
    </div>
  )
}

const EXAMPLE_HERO_SECTION_PROPS = { heroSection1Props }

export { HeroSection1, EXAMPLE_HERO_SECTION_PROPS }
export type { IHeroSection1Props }
