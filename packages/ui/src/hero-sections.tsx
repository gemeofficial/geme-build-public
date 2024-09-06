import { ReactNode } from 'react'
import { ILinkComponent } from '../../../apps/gemebuild/src/contexts/link-context'
import Image from 'next/image'
import HeroSectionsButton from './client-components/HeroSectionsButton'
import HeroSectionVideo from './hero-section-video'
import clsx from 'clsx'

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
  videoClassName?: string
  containerClassName?: string
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
    src: 'https://www-geme-bio-us.s3.us-west-1.amazonaws.com/hero-banner-window-video-19s-480p.mp4',
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
  videoClassName,
  containerClassName,
}: IHeroSection1Props) {
  return (
    <div className="h-screen ">
      {/* 大屏图片层 */}
      <div className="overflow-hidden h-full relative">
        <div className="z-10 absolute inset-0 bg-opacity-30 md:bg-opacity-40 bg-black "></div>
        <Image
          src={heroImageUrlPc}
          alt="hero background picture"
          priority
          className="hidden xl:block w-full h-full object-cover"
          fill
          // width={1920}
          // height={1080}
          sizes="(max-width: 1280px) 1vw,(min-width: 1281px) 60vw, (min-width: 1920px) 80vw,(min-width: 2420px) 100vw, 1vw"
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
      </div>

      {/* 文字定位层 */}
      <div
        className={clsx(
          'h-screen xl:mx-auto xl:max-w-7xl absolute z-40 inset-0 flex flex-col items-center xl:items-start justify-center text-center xl:text-left xl:pl-20 2xl:pl-0',
          containerClassName,
        )}
      >
        <Image
          src="/assets/images/home-v2311/hero-section-logo.svg"
          alt="hero section logo"
          priority
          className="hidden xl:block w-16 h-16"
          width={64}
          height={64}
          quality={100}
        />
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

      <iframe
        className="portrait:w-48 portrait:h-28 portrait:lg:w-72 portrait:lg:h-44 absolute right-[18px] bottom-[18px] z-40"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/Rw7isYdlCPo?si=a2aDoNNMWhjymtOt"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>

      {/*<HeroSectionVideo*/}
      {/*  mixpanelStatPayload={{*/}
      {/*    title: 'Watch video',*/}
      {/*    payload: { From: 'Home hero video' },*/}
      {/*  }}*/}
      {/*  videoProps={videoProps}*/}
      {/*  fullScreenVideoUrl={*/}
      {/*    fullScreenVideoUrl || 'https://www.youtube.com/embed/ROJYZBp0jcM'*/}
      {/*  }*/}
      {/*  className={videoClassName}*/}
      {/*/>*/}
    </div>
  )
}

const EXAMPLE_HERO_SECTION_PROPS = { heroSection1Props }

export { HeroSection1, EXAMPLE_HERO_SECTION_PROPS }
export type { IHeroSection1Props }
