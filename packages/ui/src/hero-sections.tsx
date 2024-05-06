import { ReactNode, ComponentType, PropsWithChildren } from 'react'
import { IconCycleArrow, IconLogoGeme } from './icons'
// import { IVideoPlayerProps, VideoPlayer } from './video'
import { IMuxVideoPlayerProps, MuxVideoPlayer } from './mux-video'
import Image from 'next/image'
import { PlayIcon } from './video-inline-player'
// import mixpanel from 'mixpanel-browser'

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
  const playerVideoHandler = ()=>{
    // mixpanel.track('Watch video', {
    //   From: 'Home hero video',
    // })
  }
  return (
    <div className="h-screen ">
      {/* 大屏图片层 */}
      <div className="overflow-hidden h-full relative">
        <div className="z-10 absolute inset-0 bg-opacity-30 md:bg-opacity-40 bg-black "></div>
        {/* 停用Mux Player自动背景播放 */}
        {/* <MuxVideoPlayer {...videoProps} /> */}
        <Image
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

      {/* 右下角视频小窗 */}
      <div className="portrait:w-48 portrait:h-28 absolute right-[18px] bottom-[18px] z-50">
        <div className="relative h-full landscape:w-[180px] landscape:h-[111px] landscape:lg:w-[230px] landscape:lg:h-[132px] landscape:2xl:w-[270px] landscape:2xl:h-[152px] rounded-full landscape:rounded-xl overflow-hidden group">
          <div className="relative h-full w-full object-cover transform-gpu transition-transform group-hover:scale-125 duration-[0.25s] ease-[cubic-bezier(0.24, 0.8, 0.4, 1)]">
            <MuxVideoPlayer {...videoProps} />
          </div>
          <button
            type="button"
            className="absolute inset-0 w-full"
            title="Play fullscreen video"
            onClick={() => playerVideoHandler()}
          >
            {/* <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="landscape:hidden m-auto text-stone-5 h-6 w-6"
            >
              <path
                d="M16.6742 12.8437L8.53688 18.022C7.87115 18.4456 7 17.9674 7 17.1783V6.82169C7 6.0326 7.87115 5.55439 8.53688 5.97803L16.6742 11.1564C17.2917 11.5493 17.2917 12.4507 16.6742 12.8437Z"
                fill="currentColor"
              ></path>
            </svg>{' '}
            <svg
              viewBox="0 0 56 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="portrait:hidden m-auto text-stone-5 h-14 w-14"
            >
              <g clip-path="url(#clip0_2467_5775)">
                <path
                  d="M33.6742 28.8437L25.5369 34.022C24.8712 34.4456 24 33.9674 24 33.1783V22.8217C24 22.0326 24.8712 21.5544 25.5369 21.978L33.6742 27.1564C34.2917 27.5493 34.2917 28.4507 33.6742 28.8437Z"
                  fill="#FEFCF5"
                ></path>
              </g>
              <rect
                x="1"
                y="1"
                width="54"
                height="54"
                rx="27"
                stroke="#FEFCF5"
                stroke-width="2"
              ></rect>
              <defs>
                <clipPath id="clip0_2467_5775">
                  <rect width="56" height="56" rx="28" fill="white"></rect>
                </clipPath>
              </defs>
            </svg> */}
            {/* 手机显示小按钮 */}
            <PlayIcon className='m-auto landscape:hidden' size='small'/>
            {/* pc显示大按钮 */}
            <PlayIcon className='m-auto portrait:hidden' size='medium'/>
          </button>
        </div>
      </div>
    </div>
  )
}

const EXAMPLE_HERO_SECTION_PROPS = { heroSection1Props }

export { HeroSection1, EXAMPLE_HERO_SECTION_PROPS }
export type { IHeroSection1Props }
