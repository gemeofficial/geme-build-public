'use client'
import React, { ReactNode } from 'react'
import {
  Button,
  ImageAndTextBlock,
  Items,
} from '../../customer-service/components/Items'
import Image from 'next/image'
import { ILinkComponent } from '../../../contexts/link-context'
interface Link {
  name: string
  type?: 'link' | 'button'
  link?: string
}

interface Item {
  name: string
  subTitle?: string
  description: string
  link?: string
  buttonName?: string
  icon?: ReactNode
  image: string
  price?: string
  onClick?: () => void
  plainButton?: boolean
  noArrow?: boolean
}

export interface IGemeCareProps {
  title: string
  coverImage: string
  description: string
  links: Link[]

  item1: Item
  item2: Item
  item3Title: string
  item3: Item[]

  item4Title: string
  item4: Item[]
  item5: Item
  item6Title: string
  item6: Item[]
  PrefetchLink: ILinkComponent
}

export interface IGemeCarePropsSection1 {
  title: string
  coverImage: string
  description: string
  links: Link[]
}

export interface IGemeCarePropsSection2 {
  item1: Item
  item2: Item
  item3Title: string
  item3: Item[]
}

export interface IGemeCarePropsSection3 {
  item4Title: string
  item4: Item[]
  item5: Item
  item6Title: string
  item6: Item[]
  PrefetchLink: ILinkComponent
}

function GemeCare({
  PrefetchLink,
  coverImage,
  description,
  item1,
  item2,
  item3,
  links,
  title,
  item3Title,
  item4,
  item4Title,
  item5,
  item6,
  item6Title,
}: IGemeCareProps) {
  return (
    <div className="bg-gray-50">
      <div className="overflow-hidden bg-[#01121C] prose-a:break-all relative">
        <Image
          width={1920}
          height={1080}
          priority
          src={coverImage}
          alt="customer service cover"
          className="w-full h-full object-cover"
        />
        <div className="w-full lg:absolute lg:top-[50%] lg:left-[50%] lg:-translate-x-[50%] grid grid-cols-1 items-center gap-y-10 gap-x-16 -mt-20 md:-mt-32 mb-4 md:mb-8">
          <div>
            <h2 className="text-2xl lg:text-4xl font-bold text-center tracking-tight text-white mb-5">
              {title}
            </h2>
            <p className="text-xl lg:text-2xl mt-4 mb-4 text-white text-center max-w-2xl mx-auto px-4">
              {description}
            </p>
            <div className="flex flex-col lg:flex-row items-center justify-center px-4 pb-8">
              {links.map((link) => (
                <Button
                  plainButton
                  PrefetchLink={PrefetchLink}
                  key={link.name}
                  href={link.link}
                  className="lg:mx-2"
                >
                  {link.name}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl sm:px-2 sm:py-8 lg:px-4">
        <div className="mx-auto max-w-2xl px-4 sm:max-w-none">
          <div className="mt-5 grid gap-y-10 gap-x-8">
            <ImageAndTextBlock
              PrefetchLink={PrefetchLink}
              {...item1}
              leftImage
            />
            <ImageAndTextBlock PrefetchLink={PrefetchLink} {...item2} />
            <h3 className="text-3xl text-gray-900 -mb-10">{item3Title}</h3>
            <Items
              PrefetchLink={PrefetchLink}
              items={item3}
              specificLength={3}
            />
            <h3 className="text-3xl text-gray-900 -mb-10">{item4Title}</h3>
            <Items PrefetchLink={PrefetchLink} items={item4} />
            <ImageAndTextBlock
              PrefetchLink={PrefetchLink}
              {...item5}
              leftImage
            />
            <h3 className="text-3xl text-gray-900 -mb-10">{item6Title}</h3>
            <Items PrefetchLink={PrefetchLink} items={item6} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default GemeCare
