'use client'
import { FC, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { IFeaturesProps } from './Features'

export interface IFeatureSlideProps {
  messages: IFeaturesProps
}

const mediaPath = {
  section1Media: '/assets/images/geme-kobold/feature-1.mp4',
  section2Media: '/assets/images/geme-kobold/feature-2.png',
  section2MediaBlur: '/assets/images/geme-kobold/feature-2-blur.png',
  section3Media: '/assets/images/geme-kobold/feature-3.png',
  section3MediaBlur: '/assets/images/geme-kobold/feature-3-blur.png',
}

function Section1Media() {
  return (
    <video
      src={mediaPath.section1Media}
      width="600"
      height="600"
      className="h-full w-full object-cover object-center"
      muted // 静音播放
      autoPlay // 自动播放
      loop // 循环播放
      controls={false} // 不显示视频控件
      playsInline
      webkit-playsinline="true"
    />
  )
}

function Section2Media({ isMobileView }: { isMobileView: boolean }) {
  return isMobileView ? (
    <Image
      src={mediaPath.section2Media}
      alt=""
      width={1400}
      height={1000}
      className="h-full w-full object-cover object-center"
    />
  ) : (
    <Image
      src={mediaPath.section2Media}
      blurDataURL={mediaPath.section2MediaBlur}
      alt=""
      width={600}
      height={600}
      className="h-full w-full object-cover object-center"
      placeholder="blur"
    />
  )
}
function Section3Media({ isMobileView }: { isMobileView: boolean }) {
  return isMobileView ? (
    <Image
      src={mediaPath.section3Media}
      alt=""
      width={1400}
      height={1000}
      className="h-full w-full object-cover object-center"
    />
  ) : (
    <Image
      src={mediaPath.section3Media}
      blurDataURL={mediaPath.section3MediaBlur}
      alt=""
      width={600}
      height={600}
      className="h-full w-full object-cover object-center"
      placeholder="blur"
    />
  )
}

const FeatureSlide: FC<IFeatureSlideProps> = ({ messages }) => {
  const [isMobileView, setIsMobileView] = useState<boolean>(false)
  // 移动端 Slider 效果

  useEffect(() => {
    // 由于此处是在客户端执行，可以安全地访问 window 对象
    const checkIfMobileView = () => window.innerWidth <= 1024

    // 初始检查，因为 useEffect 在客户端渲染后才执行
    setIsMobileView(checkIfMobileView())

    // 定义处理屏幕尺寸变化的函数
    const handleResize = () => {
      setIsMobileView(checkIfMobileView())
    }

    // 添加事件监听器来监听窗口大小变化
    window.addEventListener('resize', handleResize)

    // 组件卸载时移除事件监听器
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // PC 端 Slide 效果
  const [activeComponent, setActiveComponent] = useState<JSX.Element>(
    <Section1Media />,
  )
  const elementBRef = useRef<HTMLDivElement>(null)
  const elementCRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isMobileView) return
    const handleScroll = () => {
      const elementBTop = elementBRef.current?.getBoundingClientRect().top ?? 0
      const elementCTop = elementCRef.current?.getBoundingClientRect().top ?? 0

      if (elementCTop < 440) {
        // 当elementCTop小于350px时，无论elementBTop的值如何，都加载Section3Media组件
        setActiveComponent(<Section3Media isMobileView={isMobileView} />)
      } else if (elementBTop < 350) {
        // 仅当elementCTop不满足条件（即不小于350px），且elementBTop小于350px时，加载Section2Media组件
        setActiveComponent(<Section2Media isMobileView={isMobileView} />)
      } else {
        // 如果以上条件都不满足，则回退到默认的Section1Media组件
        setActiveComponent(<Section1Media />)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isMobileView])

  return (
    // scroll-px-[calc((100vw_-_736px)/2)]
    isMobileView ? (
      <section className="overflow-scroll grid grid-cols-[repeat(3,_75vw)] md:grid-cols-[repeat(3,_600px)] gap-3 md:gap-8 px-4 snap-x snap-mandatory no-scrollbar">
        <div className="bg-gray-50 scroll-mx-4 snap-center flex gap-6 flex-col items-start p-4 md:p-10 rounded-lg">
          <div
            style={{ aspectRatio: '4 / 3' }}
            className="w-full rounded-md overflow-hidden leading-[0] relative"
          >
            <Section1Media />
          </div>
          <div className="flex gap-1 md:gap-2 flex-col items-start">
            {messages.section1Title}
            {messages.section1Description}
          </div>
        </div>
        <div className="bg-gray-50 scroll-mx-4 snap-center flex gap-6 flex-col items-start p-4 md:p-10 rounded-lg">
          <div
            style={{ aspectRatio: '4 / 3' }}
            className="w-full rounded-md overflow-hidden leading-[0] relative"
          >
            <Section2Media isMobileView={isMobileView} />
          </div>
          <div className="flex gap-1 md:gap-2 flex-col items-start">
            {messages.section2Title}
            {messages.section2Description}
          </div>
        </div>
        <div className="bg-gray-50 scroll-mx-4 snap-center flex gap-6 flex-col items-start p-4 md:p-10 rounded-lg">
          <div
            style={{ aspectRatio: '4 / 3' }}
            className="w-full rounded-md overflow-hidden leading-[0] relative"
          >
            <Section3Media isMobileView={isMobileView} />
          </div>
          <div className="flex gap-1 md:gap-2 flex-col items-start">
            {messages.section3Title}
            {messages.section3Description}
          </div>
        </div>
      </section>
    ) : (
      <section className="mx-auto max-w-md px-8 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
        {/* h-[calc(100vh_-_160px)] max-h-[600px] */}
        <div className="bg-gray-50 grid grid-cols-2 items-center p-[50px] gap-x-[50px] gap-y-[0px] rounded-lg">
          {/* 1. Natural Microbiota */}
          <div className="flex flex-col gap-4 pr-0 lg:pr-14">
            {messages.section1Title}
            {messages.section1Description}
          </div>
          <div
            style={{ aspectRatio: '1' }}
            className="w-full aspect-square sticky top-[146px] rounded-lg overflow-hidden leading-[0]"
          >
            {activeComponent}
          </div>

          {/* 2. Unique in the world */}
          <div ref={elementBRef} className="flex flex-col gap-4 pr-16">
            {messages.section2Title}
            {messages.section2Description}
          </div>
          <div className="h-[540px] aspect-square"></div>

          {/* 3. Complex microbiota */}
          <div ref={elementCRef} className="flex flex-col gap-4 pr-16">
            {messages.section3Title}
            {messages.section3Description}
          </div>
          <div className="h-[540px] aspect-square"></div>
        </div>
      </section>
    )
  )
}

export default FeatureSlide
