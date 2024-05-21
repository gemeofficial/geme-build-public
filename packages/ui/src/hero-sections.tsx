import { ReactNode } from 'react'
import { IconLogoGeme } from './icons'
import { ILinkComponent } from '../../../apps/gemebuild/src/contexts/link-context'
import Image from 'next/image'
import VideoInlinePlayer, { PlayIcon } from './video-inline-player'
import HeroSectionsButton from './client-components/HeroSectionsButton'

interface IHeroSection1Props {
  title?: ReactNode
  description?: ReactNode
  linkText?: string
  linkUrl?: string
  videoProps: {
    src: string // 视频源的URL
    posterUrl: string // 视频源封面
  }
  LinkComponent?: ILinkComponent
  fullScreenVideoUrl?: string
  heroImageUrlPc: string // 首屏大图URL
  heroImageUrlMobile: string // 首屏大图URL
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
  videoProps: {
    src: 'https://public-assest-434759801795.s3.us-west-1.amazonaws.com/hero-banner-window-video-19s-480p.mp4',
    posterUrl: '/assets/images/home-v2311/hero-blurred.webp',
  },
  heroImageUrlPc: '/assets/images/home-v2311/cover-v3.jpg',
  heroImageUrlMobile: '/assets/images/home-v2311/cover-v3-mobile.jpg',
}

function HeroSection1({
  title,
  description,
  linkText,
  linkUrl,
  videoProps,
  LinkComponent,
  fullScreenVideoUrl,
  heroImageUrlPc,
  heroImageUrlMobile,
}: IHeroSection1Props) {
  return (
    <div className="h-screen ">
      {/* 大屏图片层 */}
      <div className="overflow-hidden h-full relative">
        <div className="z-10 absolute inset-0 bg-opacity-30 md:bg-opacity-40 bg-black "></div>
        {/* <Image
            src={heroImageUrlPc}
            alt="hero background picture"
            priority
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
            sizes='(max-width: 1280px) 50vw, (min-width: 1281px) 100vw'
          /> */}
        {/* <picture>
          <source media="(max-width: 1280px)" srcSet={heroImageUrlMobile} />
          <source media="(min-width: 1281px)" srcSet={heroImageUrlPc} />
          <Image
            src={heroImageUrlPc}
            alt="hero background picture"
            priority
            className="w-full h-full object-cover"
            sizes="(max-width: 1280px) 50vw, (min-width: 1281px) 100vw"
            width={1920}
            height={1080}
          />
        </picture> */}
        <Image
          src={heroImageUrlPc}
          alt="hero background picture"
          priority
          className="hidden xl:block w-full h-full object-cover"
          fill
          // width={1920}
          // height={1080}
          sizes="(max-width: 1280px) 1vw, (min-width: 1281px) 100vw, 1vw"
        />
        <Image
          src={heroImageUrlMobile}
          alt="hero background picture"
          priority
          className="xl:hidden w-full h-full object-cover"
          // width={375}
          // height={750}
          fill
          sizes="(max-width: 1280px) 100vw, (min-width: 1281px) 1vw, 1vw"
        />
        {/* <picture>
          <source media="(max-width: 1280px)" srcSet={heroImageUrlMobile} />
          <source media="(min-width: 1281px)" srcSet={heroImageUrlPc} />
          <img
            src={heroImageUrlPc}
            alt="hero background picture"
            className="w-full h-full object-cover"
          />
        </picture> */}
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
        <HeroSectionsButton
          LinkComponent={LinkComponent}
          linkText={linkText}
          linkUrl={linkUrl}
        />
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
              <video
                className="w-full h-full object-cover"
                controls={false}
                autoPlay
                playsInline
                muted
                loop
                poster={videoProps.posterUrl}
                src={videoProps.src}
              >
                Your browser does not support HTML5 video.
              </video>
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
