import { ReactNode, ComponentType, PropsWithChildren } from 'react'
import { IconCycleArrow, IconLogoGeme } from './icons'
// import { IVideoPlayerProps, VideoPlayer } from './video'
import { IMuxVideoPlayerProps, MuxVideoPlayer } from './mux-video'
import Image from 'next/image'
import VideoInlinePlayer, { PlayIcon } from './video-inline-player'

interface IHeroSection1Props {
  title?: ReactNode
  description?: ReactNode
  linkText?: string
  linkUrl?: string
  linkClickedTrack?: () => void
  videoProps?: IMuxVideoPlayerProps
  LinkComponent?: ComponentType<
    PropsWithChildren<{
      className?: string
      href?: string | Object
    }>
  >
  fullScreenVideoUrl?: string
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
        playbackId: '4xlpgl6PcY6d8N3H5FowWDdP01kCupf3Pn8A101zaCnFo',
        posterUrl:
          'https://public-assest-434759801795.s3.us-west-1.amazonaws.com/cover-v2.jpg',
      },
      // for mobile/tablet
      {
        minWidth: 0,
        src: 'https://public-assest-434759801795.s3.us-west-1.amazonaws.com/geme-bio-home-background-video-no-sound-480p.mp4',
        playbackId: '4xlpgl6PcY6d8N3H5FowWDdP01kCupf3Pn8A101zaCnFo',
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
  fullScreenVideoUrl,
}: IHeroSection1Props) {
  return (
    <div className="h-screen ">
      {/* 大屏图片层 */}
      <div className="overflow-hidden h-full relative">
        <div className="z-10 absolute inset-0 bg-opacity-30 md:bg-opacity-40 bg-black "></div>
        {/* 停用Mux Player自动背景播放 */}
        {/* <MuxVideoPlayer {...videoProps} /> */}
        <Image
          priority={true}
          src="/assets/images/home-v2311/cover-v3.jpg"
          alt="hero picture"
          layout="fill"
          className="w-full h-full object-cover"
        />
      </div>

      {/* 文字定位层 */}
      <div className="h-screen xl:mx-auto xl:max-w-7xl absolute z-40 inset-0 flex flex-col items-center xl:items-start justify-center text-center xl:text-left">
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

      {/* 全屏播放器 */}
      <VideoInlinePlayer
        videoUrl={
          fullScreenVideoUrl || 'https://www.youtube.com/embed/ROJYZBp0jcM'
        }
        description="Watch our video to learn more"
        hiddenPlayIcon={true}
        mixpanelStatPayload={{
          title: 'Watch video',
          payload: { From: 'Home hero video' },
        }}
      >
        <div className="portrait:w-48 portrait:h-28 absolute right-[18px] bottom-[18px] z-40">
          {/* 右下角视频小窗 */}
          <div className="relative h-full landscape:w-[180px] landscape:h-[111px] landscape:lg:w-[270px] landscape:lg:h-[152px]  landscape:2xl:w-[400px] landscape:2xl:h-[230px] rounded-xl landscape:rounded-xl overflow-hidden group">
            <div className="relative h-full w-full object-cover transform-gpu transition-transform group-hover:scale-125 duration-[0.25s] ease-[cubic-bezier(0.24, 0.8, 0.4, 1)]">
              <MuxVideoPlayer {...videoProps} />
            </div>

            <button
              type="button"
              className="absolute inset-0 w-full opacity-80 hover:opacity-100 transition-opacity duration-200"
              title="Play fullscreen video"
            >
              {/* 大屏显示大按钮 */}
              <PlayIcon className="m-auto hidden lg:block" size="medium" />

              {/* 1024以下显示小按钮 */}
              <PlayIcon className="m-auto lg:hidden" size="small" />
            </button>
          </div>
        </div>
      </VideoInlinePlayer>
    </div>
  )
}

const EXAMPLE_HERO_SECTION_PROPS = { heroSection1Props }

export { HeroSection1, EXAMPLE_HERO_SECTION_PROPS }
export type { IHeroSection1Props }
