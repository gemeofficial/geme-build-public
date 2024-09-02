'use client'
/* eslint-disable react/no-unescaped-entities */

import clsx from 'clsx'
import {
  PrimaryButton,
  SectionContainer,
  SectionDescription,
  SectionTitle,
} from 'ui'
import StarIcon from 'ui/src/reviews/StarIcon'
import { ILinkComponent } from '../../../../contexts/link-context'
import ImageZoomViewer from 'ui/src/client-components/ImageZoomViewer'

export interface IReviewsProps {
  title: string
  buttonText: string
  cardButtonText: string
  reviews: {
    content: string
    name: string
    imageUrl: string
    title?: string
  }[]
  description?: string
  PrefetchLink?: ILinkComponent
}

export default function Reviews({
  reviews,
  title,
  buttonText,
  cardButtonText,
  description,
  PrefetchLink,
}: IReviewsProps) {
  const clickHandler = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {}
  return (
    <SectionContainer compact>
      <div className="flex justify-center mt-4 md:mt-6">
        <PrimaryButton
          href="#"
          onClick={clickHandler}
          className="!rounded-3xl !py-3 !px-10 w-max"
        >
          {buttonText}
        </PrimaryButton>
      </div>
      <SectionTitle className="!text-[#333] mt-6 md:mt-8">{title}</SectionTitle>
      {description && (
        <SectionDescription className="mt-4 md:mt-6">
          {description}
        </SectionDescription>
      )}

      <ul className="flex md:gap-4 xl:gap-8 mt-6 md:mt-8">
        {reviews.map((item, index) => (
          <li
            key={index}
            className={clsx(
              'flex-shrink-0 md:flex-shrink flex-1 items-center justify-center',
              'shadow-lg bg-white p-4 md:p-6 xl:px-8 rounded-xl',
              'text-sm xl:text-base',
            )}
          >
            <div className="flex justify-center">
              <StarIcon score={5} className="!text-v2311-primary !mb-4" />
            </div>
            <div className="text-black/60">"{item.content}"</div>
            <div className="xl:text-lg font-bold text-[#333] text-center mt-4">
              {item.name}
            </div>

            <div className="text-v2311-primary text-center mt-4 cursor-pointer hover:underline relative">
              {cardButtonText}
              <ImageZoomViewer>
                <picture>
                  <img
                    className="absolute inset-0 object-cover rounded-2xl z-[2] w-full h-full opacity-0"
                    src={item.imageUrl}
                    width={1280}
                    height={720}
                    loading="lazy"
                    alt=""
                  />
                </picture>
              </ImageZoomViewer>
            </div>
          </li>
        ))}
      </ul>
    </SectionContainer>
  )
}
