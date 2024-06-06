'use client'

import ReviewsItem, { IReviewsItem } from './ReviewsItem'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './styles.css'
import { NextButton, PrevButton } from './ControlButton'
import { Swiper as SwiperType } from 'swiper/types'
import { useEffect, useRef } from 'react'

export function ReviewsSection({
  reviewsListConfig,
}: {
  reviewsListConfig: IReviewsItem[]
}) {
  const swiperRef = useRef<SwiperType | null>(null)
  const isFirstLoad = useRef(true)

  // 监听swiper加载，动态根据slide数量设置wrapper的宽度。让他可以触控所有地方滚动
  function onSwiperHandle(swiper: SwiperType) {
    if (!window || !window.innerWidth) return

    swiperRef.current = swiper

    const slideCount = swiper.slides.length
    const slideWidth = swiper.slides[0].offsetWidth

    // 默认是PC 大屏默认在总宽度上减掉一个slide的宽度
    let dependentVariable = 1

    window.innerWidth >= 768 ? 1 : -1

    // mobile情况下要多加一些宽度
    if (window.innerWidth < 768) {
      dependentVariable = -1
    }
    // 平板不需要变化宽度。
    else if (window.innerWidth >= 768) {
      dependentVariable = 0
    }

    const wrapperWidth = (slideCount - dependentVariable) * slideWidth

    swiper.wrapperEl.style.width = `${wrapperWidth}px`

    isFirstLoad.current = false
  }

  // 这个useEffect是防止onSwiper时没获取window的情况，可以在执行一遍
  useEffect(() => {
    if (swiperRef.current && isFirstLoad.current) {
      onSwiperHandle(swiperRef.current)
    }
  }, [])

  return (
    <Swiper
      className={`reviewsSwiper select-none !bg-v2311-bg-light-green !w-full`}
      onSwiper={onSwiperHandle}
      modules={[Navigation, Pagination, Autoplay]}
      pagination={{
        type: 'bullets',
        renderBullet: (i, className) =>
          `<span class="${className} !h-1 !w-8 !rounded-sm transition-all duration-500"></span>`,
        bulletActiveClass: '!bg-v2311-primary !opacity-100',
        clickable: true,
      }}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }}
      speed={600}
      grabCursor
      breakpoints={{
        1: {
          slidesPerView: 1.3,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 1.5,
          spaceBetween: 28,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 28,
        },
        1520: {
          slidesPerView: 3,
          spaceBetween: 32,
        },
        1920: {
          slidesPerView: 3.5,
          spaceBetween: 32,
        },
        2500: {
          slidesPerView: 4,
          spaceBetween: 36,
        },
      }}
      loop
      // autoplay={{
      //   delay:5000,
      //   disableOnInteraction:false
      // }}
    >
      {/* Parallax效果的背景图。目前需求度不高，先不启用 */}
      {/* <div
        className="parallaxBg"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80)',
        }}
        data-swiper-parallax="-10%"
      ></div> */}

      <PrevButton />
      <NextButton />

      {reviewsListConfig.map((item, idx) => (
        <SwiperSlide key={item.content}>
          <ReviewsItem item={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
