'use client'

import Image from 'next/image'
import { SectionContainer, SectionTitle } from '../ui-components'
import VideosItem, { IVideosItemProps } from './VideosItem'
import ModalContainer from './ModalContainer'

export interface IUserStoriesVideoProps {
  title: string
  videos: IVideosItemProps[]
}

export function UserStoriesVideos({ title, videos }: IUserStoriesVideoProps) {
  return (
    <SectionContainer className="!pt-10 xl:!pt-14 !pb-10">
      <SectionTitle>{title}</SectionTitle>
      <div className="mt-4 md:mt-8 flex items-center gap-4 xl:gap-8 overflow-auto snap-x snap-mandatory no-scrollbar">
        {videos.map((item) => (
          <ModalContainer
            key={item.src}
            src={item.src}
            coverImageUrl={item.coverImageUrl}
            type={item.type}
            mixpanelFrom="Real customer stories"
            className="flex-shrink-0 md:flex-1 scroll-mx-4 md:scroll-mx-0 snap-center"
          >
            <VideosItem item={item} />
          </ModalContainer>
        ))}
      </div>
    </SectionContainer>
  )
}
