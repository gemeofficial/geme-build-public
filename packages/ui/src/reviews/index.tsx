'use client'

import ReviewsItem, { IReviewsItem } from './ReviewsItem'
import { Navigation, Pagination, Parallax } from 'swiper/modules'
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import styles from './styles.module.css'
import { useRef } from 'react'

const exampleReviews: IReviewsItem[] = [
  {
    name: 'Jane Doe',
    content:
      'Great value for the price. Very happy with my purchase. It’s durable, functional, and looks great. The inner bucket is easy to remove and clean, and it’s a breeze to change the trash bags. ',
    imageUrl: '',
  },
  {
    name: 'Emily Davis',
    content:
      'The foot pedal is very convenient. Hands-free operation!I highly recommend this trash can to anyone looking for a reliable and stylish option.',
    imageUrl: '',
  },
  {
    name: 'Michael Johnson',
    content:
      'This trash can is amazing! It keeps all the odors inside and the build quality is top-notch. The stainless steel finish looks great in my kitchen and it’s super easy to clean. ',
    imageUrl: '',
  },
  {
    name: 'Michael Johnson',
    content: 'Very sturdy and well-built. Highly recommend!',
    imageUrl: '',
  },
  {
    name: 'Emily Davis',
    content:
      'The sensor works perfectly. Opens every time without fail and closes gently and quietly. It’s also very responsive and opens just as I approach it. The design is very modern and stylish, fitting in perfectly with my kitchen decor.',
    imageUrl: '',
  },
  {
    name: 'David Brown',
    content:
      'Very sturdy and well-built. I was skeptical at first because of the price, but it has exceeded my expectations.',
    imageUrl: '',
  },
  {
    name: 'Sarah Wilson',
    content:
      ' The step pedal is very convenient and makes it easy to dispose of garbage without touching the lid.',
    imageUrl: '',
  },
  {
    name: 'Jane Doe',
    content:
      'Perfect size for my kitchen. Love the sleek design and the fact that it fits perfectly under my counter.Stylish and functional. Matches my decor perfectly.',
    imageUrl: '',
  },
  {
    name: 'David Brown',
    content:
      'Excellent quality. Much better than my old trash can. The lid closes softly and there’s no more banging noise. The sensor works perfectly and opens every time!',
    imageUrl: '',
  },
  {
    name: 'Sarah Wilson',
    content: 'Great value for the price. Very happy with my purchase.',
    imageUrl: '',
  },
]

export function Reviews() {
  const swiperElRef = useRef<SwiperRef>(null)

  function onProgress(swiper: any, progress: number) {
    console.log('progress', progress)
  }

  return (
    <div className="">
      <Swiper
        className={`${styles.swiper} select-none !w-full !bg-v2311-bg-light-green !py-24 !px-8 !pl-96`}
        ref={swiperElRef}
        onProgress={onProgress}
        spaceBetween={30}
        modules={[Navigation, Pagination, Parallax]}
        navigation
        pagination={{
          type: 'bullets',
          renderBullet: (i, className) =>
            `<span class="${className} !h-1 !w-8 !rounded-sm transition-all duration-500"></span>`,
          bulletActiveClass: '!bg-v2311-primary !opacity-100',
          clickable: true,
        }}
        speed={600}
        parallax
        grabCursor
        slidesPerView={1}
        breakpoints={{
          1280: {
            slidesPerView: 5,
            slidesPerGroup: 3,
          },
        }}
      >
        <div
          className={styles.parallaxBg}
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80)',
          }}
          data-swiper-parallax="-23%"
        ></div>
        {exampleReviews.map((item, idx) => (
          <SwiperSlide key={item.name + idx}>
            <ReviewsItem item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
