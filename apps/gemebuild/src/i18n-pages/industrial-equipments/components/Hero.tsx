'use client'
import clsx from 'clsx'
import type { LinkProps } from 'next/link'

import { ReactNode } from 'react'
import Image from 'next/legacy/image'
import { useLink } from '../../../contexts/link-context'

export interface IHeroWithImageTilesProps {
  title: string
  description?: ReactNode
  primaryButtonLabel?: string
  primaryButtonProps?: LinkProps
  decorativeImageGroups?: {
    imageContainerClassName?: string
    width?: number
    height?: number
    imageSrc?: string
  }[][]
}

export default function Hero({
  title,
  description,
  primaryButtonLabel,
  primaryButtonProps,
  decorativeImageGroups,
}: IHeroWithImageTilesProps) {
  const Link = useLink()

  return (
    <div className="relative overflow-hidden">
      <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              {title}
            </h1>
            {description && (
              <p className="mt-4 text-xl text-gray-500">{description}</p>
            )}
          </div>
          <div>
            <div className="mt-10">
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    {decorativeImageGroups?.map((imageGroups, idx) => {
                      if (imageGroups.length === 0) {
                        return null
                      }

                      return (
                        <div
                          key={`image-group-${idx}`}
                          className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8"
                        >
                          {imageGroups.map((image, imageIdx) => {
                            return image.imageSrc != null ? (
                              <div
                                key={`image-group-${idx}-${imageIdx}`}
                                className={clsx(
                                  'overflow-hidden rounded-lg',
                                  image.imageContainerClassName || '',
                                )}
                              >
                                <Image
                                  src={image.imageSrc}
                                  layout="intrinsic"
                                  width={image.width}
                                  height={image.height}
                                  objectFit="cover"
                                  objectPosition="center"
                                  alt=""
                                  className="h-full w-full object-cover object-center"
                                />
                              </div>
                            ) : null
                          })}
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>

              {primaryButtonProps != null && primaryButtonLabel != null && (
                <Link
                  {...primaryButtonProps}
                  locale={
                    primaryButtonProps?.locale === false
                      ? undefined
                      : primaryButtonProps.locale
                  }
                  passHref
                  className="inline-block rounded-md border border-transparent bg-v2311-bg-dark-green hover:bg-v2311-primary py-3 px-8 text-center font-medium text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                >
                  {primaryButtonLabel}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
