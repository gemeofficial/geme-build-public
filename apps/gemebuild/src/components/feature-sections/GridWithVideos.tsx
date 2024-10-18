// Modified the Grid with offset icons to
// - display a image for each feature
// - allow play video for each feature
// cf: https://tailwindui.com/components/marketing/sections/feature-sections#component-cdca7eda27bdaceb45026dca4c17efe7
import React, { ReactNode } from 'react'
import Image from 'next/image'
import { VideoInlinePlayer } from 'ui'
import { ILinkComponent } from '../../i18n-pages'

export interface IGridWithVideosProps {
  heading?: string
  title?: string
  description?: string
  features: {
    name: string
    description: string
    videoUrl: string
    videoImageSrc: string
    videoImageAlt: string
    icon:
      | React.ComponentType<React.ComponentPropsWithRef<'svg'>>
      | React.ComponentType<React.ComponentProps<'img'>>
      | ReactNode
    link?: string
  }[]
  LinkComponent?: ILinkComponent
}

export default function GridWithVideos({
  heading,
  title,
  description,
  features,
  LinkComponent,
}: IGridWithVideosProps) {
  return (
    <div className="relative bg-white py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
        {heading && (
          <h2 className="text-lg font-semibold text-emerald-600">{heading}</h2>
        )}
        {title && (
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {title}
          </p>
        )}
        {description && (
          <p className="mx-auto mt-5 max-w-prose text-xl text-gray-500">
            {description}
          </p>
        )}
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6 flex">
                <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8">
                  <div className="mt-4">
                    {LinkComponent && feature.link ? (
                      <>
                        <LinkComponent href={feature.link}>
                          <FeatureItemName name={feature.name} />
                        </LinkComponent>
                        <LinkComponent href={feature.link}>
                          <FeatureItemName name={feature.description} />
                        </LinkComponent>
                      </>
                    ) : (
                      <>
                        <FeatureItemName name={feature.name} />
                        <FeatureItemDescription
                          description={feature.description}
                        />
                      </>
                    )}
                  </div>
                  <div className="mt-5 relative w-[300px] h-[200px]">
                    {feature.videoUrl != null && (
                      <VideoInlinePlayer
                        playButtonSize="small"
                        videoUrl={feature.videoUrl}
                        description="Watch our video to learn more"
                      >
                        <Image
                          className="absolute inset-0 h-full w-full object-cover"
                          priority
                          src={feature.videoImageSrc}
                          width={300}
                          height={200}
                          alt={feature.videoImageAlt || 'User Manual'}
                        />
                      </VideoInlinePlayer>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function FeatureItemName({ name }: { name: string }) {
  return (
    <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">
      {name}
    </h3>
  )
}

function FeatureItemDescription({ description }: { description: string }) {
  return <p className="mt-5 text-base text-gray-500">{description}</p>
}
