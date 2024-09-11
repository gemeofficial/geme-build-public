import clsx from 'clsx'
import { SectionContainer, SectionDescription, SectionTitle } from '../index'
import Image from 'next/image'
import { getImageProps } from 'next/image'
import { ReactNode } from 'react'

export interface IImgAndTextSectionProps {
  title: ReactNode
  description: ReactNode
  imageUrl?: string
  imageAlt?: string
  videoPosterUrl?: string
  videoSrcUrl?: string
  isReverse?: boolean
  compact?: boolean
}

export function ImgAndTextSection({
  title,
  description,
  imageUrl,
  imageAlt,
  videoPosterUrl,
  videoSrcUrl,
  isReverse,
  compact,
}: IImgAndTextSectionProps) {
  let videoPosterSrc: undefined | string
  if (videoPosterUrl != null) {
    videoPosterSrc = getImageProps({
      src: videoPosterUrl,
      width: 1280, // 16:9 ratio
      height: 720,
      alt: 'video poster',
    }).props.src
  }

  return (
    <SectionContainer className="flex flex-col lg:flex-row" compact={compact}>
      {/* mobile title-desc */}
      <div className="lg:hidden">
        <SectionTitle>{title}</SectionTitle>
        <SectionDescription className="mt-4">{description}</SectionDescription>
      </div>

      <div
        className={clsx(
          'flex lg:gap-16',
          isReverse ? 'flex-row-reverse' : 'flex-row',
        )}
      >
        {/* video */}
        <div className="mt-4 w-full md:mt-8 lg:mt-0 lg:flex-1">
          {videoSrcUrl && videoPosterSrc && (
            <video
              preload="none"
              autoPlay
              playsInline
              muted
              loop
              className="max-w-full w-full rounded-2xl overflow-hidden object-cover"
              poster={videoPosterSrc}
            >
              <source src={videoSrcUrl} type="video/mp4" />
              Your browser does not support HTML5 video.
            </video>
          )}
          {imageUrl && (
            <Image
              className="max-w-full w-full rounded-2xl overflow-hidden object-cover"
              width={1600}
              height={900}
              src={imageUrl}
              alt={imageAlt || 'GEME composter vs food dehydrators'}
            />
          )}
        </div>

        {/* pc title-desc */}
        <div className="lg:flex-1 w-full hidden lg:block">
          <SectionTitle className="!text-left">{title}</SectionTitle>
          <SectionDescription className="!text-left mt-4">
            {description}
          </SectionDescription>
        </div>
      </div>
    </SectionContainer>
  )
}
