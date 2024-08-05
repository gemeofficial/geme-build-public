'use client'

import Image from 'next/image'
import { SectionContainer, SectionTitle } from '../ui-components'
import VideosItem, { IVideosItemProps } from './VideosItem'
import ModalContainer from './ModalContainer'

export interface IUserStoriesVideoProps {
  title: string
  videos: IVideosItemProps[]
}

const data: IUserStoriesVideoProps = {
  title: 'Real customer stories',
  videos: [
    {
      type: 'mp4',
      src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
      coverImageUrl:
        'https://a-us.storyblok.com/f/1019164/936x1248/6c44fa2f84/customer_03.png/m/780x0',
      coverAlt: 'img',
      buttonText: 'Mp4',
    },
    {
      type: 'youtube',
      src: 'https://www.youtube.com/embed/nlsTg4l_3zE',
      coverImageUrl:
        'https://a-us.storyblok.com/f/1019164/936x1248/596a0a6251/customer_02.png/m/780x0',
      coverAlt: 'img',
      buttonText: 'Youtube',
    },
    {
      type: 'tiktok',
      src: 'https://www.tiktok.com/@kc_smithwrites/video/7312898892079697198',
      coverImageUrl:
        'https://a-us.storyblok.com/f/1019164/2048x3071/3564ef7ea9/customer_01.jpeg/m/780x0',
      coverAlt: 'img',
      buttonText: 'Tiktok',
    },
    {
      type: 'facebook',
      src: 'https://www.facebook.com/facebook/videos/10153231379946729',
      coverImageUrl:
        'https://a-us.storyblok.com/f/1019164/936x1248/6c44fa2f84/customer_03.png/m/780x0',
      coverAlt: 'img',
      buttonText: 'FaceBook',
    },
    
  ],
}

export function UserStoriesVideos() {
  const { title, videos } = data
  return (
    <SectionContainer>
      <SectionTitle>{title}</SectionTitle>
      <div className="mt-4 md:mt-8 flex items-center gap-4 xl:gap-8 overflow-auto snap-x snap-mandatory no-scrollbar">
        {videos.map((item) => (
          <ModalContainer
            key={item.src}
            src={item.src}
            coverImageUrl={item.coverImageUrl}
            type={item.type}
            mixpanelFrom='Real customer stories'
            className='flex-shrink-0 md:flex-1 scroll-mx-4 md:scroll-mx-0 snap-center'
          >
            <VideosItem item={item} />
          </ModalContainer>
        ))}
      </div>
    </SectionContainer>
  )
}
