import clsx from 'clsx'
import { SectionDescription, SectionTitle } from '../ui-components'
import { getImageProps } from 'next/image'
import { ReactNode } from 'react'

export interface IShortVideoProps {
  title: ReactNode
  description: ReactNode
  videoPosterUrl: string
  videoSrcUrl: string
  isReverse?: boolean
}

export function ShortVideo({
  title,
  description,
  videoPosterUrl,
  videoSrcUrl,
  isReverse,
}: IShortVideoProps) {
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
    <section className="px-4 py-8 mx-auto md:px-8 md:py-16 xl:py-[80px] xl:max-w-7xl flex flex-col lg:flex-row">
      {/* mobile title-desc */}
      <div className="lg:hidden">
        <SectionTitle>{title}</SectionTitle>
        <SectionDescription>
          {description}
        </SectionDescription>
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
        </div>

        {/* pc title-desc */}
        <div className="lg:flex-1 w-full hidden lg:block">
          <SectionTitle className="!text-left">{title}</SectionTitle>
          <SectionDescription className="!text-left">
            {description}
          </SectionDescription>
        </div>
      </div>
    </section>
  )
}
