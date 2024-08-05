'use client'

import Image from 'next/image'
import { SectionContainer, SectionTitle } from '../ui-components'
import VideosItem, { IVideosItemProps } from './VideosItem'
import VideoInlinePlayer from '../video-inline-player'
import ModalContainer from '../client-components/ModalContainer'

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
      buttonText: 'Jesse, Devon & Alex',
    },
    {
      type: 'youtube',
      src: 'https://www.youtube.com/embed/nlsTg4l_3zE',
      coverImageUrl:
        'https://a-us.storyblok.com/f/1019164/936x1248/596a0a6251/customer_02.png/m/780x0',
      coverAlt: 'img',
      buttonText: 'example',
    },
    {
      type: 'tiktok',
      src: 'https://www.tiktok.com/@kc_smithwrites/video/7312898892079697198',
      coverImageUrl:
        'https://a-us.storyblok.com/f/1019164/2048x3071/3564ef7ea9/customer_01.jpeg/m/780x0',
      coverAlt: 'img',
      buttonText: 'example',
    },
  ],
}

export function UserStoriesVideos() {
  const { title, videos } = data
  return (
    <SectionContainer>
      <SectionTitle>{title}</SectionTitle>
      <div className="mt-4 md:mt-8 grid grid-cols-3 gap-4 md:gap-8">
        {videos.map((item) => (
          <ModalContainer
            key={item.src}
            src={item.src}
            coverImageUrl={item.coverImageUrl}
            type={item.type}
          >
            <VideosItem item={item} />
          </ModalContainer>
        ))}
      </div>
    </SectionContainer>
  )
}
