'use client'
import React, { useEffect } from 'react'
// core version + navigation, pagination modules:
import Swiper from 'swiper'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
// import Swiper and modules styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Image from 'next/image'

const SwiperGallery = (props: {
  galleryID: string
  images: Array<{
    thumbnailURL: string
    width: number
    height: number
  }>
}) => {
  useEffect(() => {
    const swiper = new Swiper('.swiper', {
      loop: true,
      autoplay: {
        delay: 1000,
        disableOnInteraction: false,
      },
      speed: 3000,
      spaceBetween: 32,
      breakpoints: {
        // when window width is >= 480px
        480: {
          slidesPerView: 1,
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
      // configure Swiper to use modules
      modules: [Autoplay, Navigation, Pagination],
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    })

    return () => {
      if (swiper != null && 'destroy' in swiper) {
        swiper.destroy()
      }
    }
  }, [])

  return (
    <div className="pswp-gallery swiper" id={props.galleryID}>
      <div className="swiper-wrapper">
        {props.images.map((image, index) => (
          <div className="swiper-slide" key={index}>
            <Image
              className="w-full rounded-lg object-cover"
              src={image.thumbnailURL}
              width={image.width}
              height={image.height}
              alt="swiper-slide"
            />
          </div>
        ))}
      </div>
      {/* <div className="swiper-pagination"></div>
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
      <div className="swiper-scrollbar"></div> */}
    </div>
  )
}

export default SwiperGallery
