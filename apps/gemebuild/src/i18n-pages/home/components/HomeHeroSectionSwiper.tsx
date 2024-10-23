'use client'

import { ReactNode } from 'react'
import Image from 'next/image'
import { Autoplay, Keyboard, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import clsx from 'clsx'
import { ILinkComponent } from '../../../contexts/link-context'
import { HeroSection1, IHeroSection1Props } from 'ui'
import HeroSectionsButton from 'ui/src/client-components/HeroSectionsButton'
import DefaultLink from 'next/link'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export interface IVideoSectionProps {
  link: string
  linkText: string
  videoUrlPc: string
  videoUrlMobile: string
  LinkComponent?: ILinkComponent
}

export interface ISwiperSectionProps {
  title: ReactNode
  description: ReactNode
  linkText: string
  linkUrl: string
  heroImageUrlPc: string
  heroImageUrlMobile: string
  LinkComponent?: ILinkComponent
}

export interface IHomeHeroSectionSwiperProps {
  section1: IHeroSection1Props
  section2: ISwiperSectionProps
  section3: ISwiperSectionProps
  section4: IVideoSectionProps
  LinkComponent?: ILinkComponent
}

export default function HomeHeroSectionSwiper({
  section1,
  section2,
  section3,
  section4,
  LinkComponent,
}: IHomeHeroSectionSwiperProps) {
  return (
    <Swiper
      className="!w-full h-full"
      modules={[Autoplay, Pagination, Keyboard]}
      pagination={{
        enabled: true,
        clickable: true,
        type: 'bullets',
        renderBullet: (i, className) =>
          `<span class="${className} !h-1 !w-8 !rounded-sm transition-all duration-500"></span>`,
        bulletActiveClass: '!bg-white !opacity-100',
      }}
      speed={600}
      slidesPerView={1}
      loop
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      keyboard={{
        enabled: true,
        onlyInViewport: false,
      }}
    >
      <SwiperSlide className="w-full h-full">
        <HeroSection1
          {...section1}
          LinkComponent={LinkComponent}
          videoClassName={clsx('!bottom-36 xl:!bottom-24')}
          containerClassName="-translate-y-28"
        />
      </SwiperSlide>
      {/* <SwiperSlide className="w-full h-full">
        <SwiperItem2 {...section2} LinkComponent={LinkComponent} />
      </SwiperSlide> */}
      <SwiperSlide className="w-full h-full">
        <SwiperItem3 {...section3} LinkComponent={LinkComponent} />
      </SwiperSlide>
      <SwiperSlide className="w-full h-full">
        <SwiperItem4 {...section4} LinkComponent={LinkComponent} />
      </SwiperSlide>
    </Swiper>
  )
}

// IFA Swiper
function SwiperItem2({
  title,
  description,
  linkText,
  linkUrl,
  LinkComponent,
  heroImageUrlPc,
  heroImageUrlMobile,
}: ISwiperSectionProps) {
  return (
    <div className="h-screen ">
      {/* 大屏图片层 */}
      <div className="overflow-hidden h-full relative">
        <div className="z-10 absolute inset-0 bg-opacity-30 md:bg-opacity-40 bg-black "></div>
        <Image
          src={heroImageUrlPc}
          alt="hero background picture 2"
          className="hidden xl:block w-full h-full object-cover max-h-screen"
          fill
          priority
          // width={1920}
          // height={1080}
          sizes="(max-width: 1280px) 1vw,(min-width: 1281px) 60vw, (min-width: 1920px) 80vw,(min-width: 2420px) 100vw, 1vw"
        />
        <Image
          src={heroImageUrlMobile}
          alt="hero background mobile picture 2"
          priority
          // width={375}
          // height={750}
          className="xl:hidden w-full h-full object-cover max-h-screen"
          fill
          sizes="(max-width: 1280px) 100vw, (min-width: 1281px) 1vw, 1vw"
        />
      </div>

      {/* 文字定位层 */}
      <div
        className={clsx(
          'h-screen xl:mx-auto absolute z-40 inset-0 ',
          'flex xl:flex-row xl:items-center justify-center text-center',
          'flex-col-reverse md:px-[10%] xl:px-0',
          'xl:text-left xl:pl-20 2xl:pl-0 font-bold text-white',
        )}
      >
        <div className="mt-20 xl:mr-44 2xl:mr-64 3xl:mr-96">
          <div
            className={clsx(
              'text-2xl md:text-3xl lg:text-4xl ',
              'xl:text-5xl 2xl:text-6xl 3xl:text-7xl',
            )}
          >
            {title}
          </div>
          <div className="px-10 md:px-0">
            <HeroSectionsButton
              mixpanelTitle="Go IFA Page"
              mixpanelFrom="Home Hero Primary Button"
              LinkComponent={LinkComponent}
              linkText={linkText}
              linkUrl={linkUrl}
            />
          </div>
        </div>
        <div className="flex flex-col gap-8">{description}</div>
      </div>
    </div>
  )
}

// Terra 2 Swiper
function SwiperItem3({
  title,
  description,
  linkText,
  linkUrl,
  LinkComponent,
  heroImageUrlPc,
  heroImageUrlMobile,
}: ISwiperSectionProps) {
  return (
    <div className="h-screen ">
      {/* 大屏图片层 */}
      <div className="overflow-hidden h-full relative">
        <div className="z-10 absolute inset-0 bg-opacity-30 md:bg-opacity-40 bg-black "></div>
        <Image
          src={heroImageUrlPc}
          alt="hero background picture 3"
          className="hidden xl:block w-full h-full object-cover max-h-screen"
          fill
          // width={1920}
          // height={1080}
          priority
          sizes="(max-width: 1280px) 1vw,(min-width: 1281px) 60vw, (min-width: 1920px) 80vw,(min-width: 2420px) 100vw, 1vw"
        />
        <Image
          src={heroImageUrlMobile}
          alt="hero background mobile picture 3"
          priority
          // width={375}
          // height={750}
          className="xl:hidden w-full h-full object-cover max-h-screen"
          fill
          sizes="(max-width: 1280px) 100vw, (min-width: 1281px) 1vw, 1vw"
        />
      </div>

      {/* 文字定位层 */}
      <div
        className={clsx(
          'h-screen xl:mx-auto absolute z-40 inset-0 ',
          'flex flex-col items-center justify-center',
          'text-center xl:text-right px-8 md:px-20 xl:pr-32',
          'font-bold text-white',
        )}
      >
        <div className="flex flex-col gap-4 md:gap-12 xl:gap-4 w-full">
          <div className="xl:leading-[0.65] leading-none text-7xl md:text-[100px] lg:text-[150px] xl:text-[200px] 2xl:text-[300px] 3xl:text-[400px]">
            {title}
          </div>
          {description}
          <div className="flex justify-center xl:justify-end">
            <div className="max-w-max">
              <HeroSectionsButton
                mixpanelTitle="Go Geme V2 Page"
                mixpanelFrom="Home Hero Primary Button"
                LinkComponent={LinkComponent}
                linkText={linkText}
                linkUrl={linkUrl}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Terra 2 Swiper
function SwiperItem4({
  link,
  linkText,
  videoUrlPc,
  videoUrlMobile,
  LinkComponent,
}: IVideoSectionProps) {
  const Link = LinkComponent || DefaultLink
  return (
    <div className="h-screen">
      {/* 大屏视频层 */}
      <div className="overflow-hidden h-full relative">
        <video
          className="hidden xl:block w-full h-full object-cover max-h-screen"
          src={videoUrlPc}
          autoPlay
          loop
          muted
          playsInline
        />
        <video
          className="xl:hidden w-full h-full object-cover max-h-screen"
          src={videoUrlMobile}
          autoPlay
          loop
          muted
          playsInline
        />
        <Link
          href={link}
          className="block h-screen absolute inset-y-0 inset-x-0 xl:right-[40%] opacity-0"
        >
          {linkText}
        </Link>
      </div>
    </div>
  )
}
