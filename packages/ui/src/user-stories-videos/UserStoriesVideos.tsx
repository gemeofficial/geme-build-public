'use client'

import { SectionContainer, SectionTitle } from '../ui-components'
import VideosItem, { IVideosItemProps } from './VideosItem'
import ModalContainer from './ModalContainer'

export interface IUserStoriesVideoProps {
  title: string
  videos: IVideosItemProps[]
  onPlayCallback?: (payload: {
    src: string
    type: string
    name: string
  }) => void
}

export function UserStoriesVideos({
  title,
  videos,
  onPlayCallback,
}: IUserStoriesVideoProps) {
  return (
    <SectionContainer className="!pt-10 xl:!pt-14 !pb-10">
      <SectionTitle>{title}</SectionTitle>
      <div className="mt-4 md:mt-8 flex items-center gap-4 xl:gap-8 overflow-auto snap-x snap-mandatory no-scrollbar">
        {videos.map((item) => (
          <ModalContainer
            key={item.src}
            src={item.src}
            name={item.buttonText}
            coverImageUrl={item.coverImageUrl}
            type={item.type}
            onPlayCallback={onPlayCallback}
            className="flex-shrink-0 md:flex-1 scroll-mx-4 md:scroll-mx-0 snap-center"
          >
            <VideosItem item={item} />
          </ModalContainer>
        ))}
      </div>
    </SectionContainer>
  )
}
