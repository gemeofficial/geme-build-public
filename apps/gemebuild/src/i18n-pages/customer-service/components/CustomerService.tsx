import React, { ReactNode } from 'react'
import { Items, Button, ImageAndTextBlock } from './Items'
import Image from 'next/image'
import { ILinkComponent } from '../../../contexts/link-context'
import HeroSection from './HeroSection'

interface Link {
  name: string
  type: 'link' | 'button'
  link: string
}

interface VideoLink {
  name: string
  description: string
  link: string
  buttonName: string
  image: string
}

interface Item {
  name: string
  description: string
  link: string
  buttonName: string
  icon?: ReactNode
  roundBorderTop?: boolean
  commingSoon?: boolean
  image: string
}

export interface ICustomerServiceProps {
  title: string
  coverImage: string
  description: string
  links: Link[]
  videoLink: VideoLink
  item1: Item[]
  item2: Item
  item3: Item[]
  PrefetchLink: ILinkComponent
}

function CustomerService({
  PrefetchLink,
  coverImage,
  description,
  item1,
  item2,
  item3,
  links,
  title,
  videoLink,
}: ICustomerServiceProps) {
  const heroSectionProps = {
    PrefetchLink,
    coverImage,
    description,
    links,
    title,
  }

  return (
    <div className="bg-gray-50">
      <HeroSection {...heroSectionProps} />
      <div className="mx-auto max-w-7xl sm:px-2 sm:py-8 lg:px-4">
        <div className="mx-auto max-w-2xl px-4 sm:max-w-none">
          <div className="mt-5 grid gap-y-10 gap-x-8">
            <ImageAndTextBlock
              PrefetchLink={PrefetchLink}
              {...videoLink}
              leftImage
            />
            <Items PrefetchLink={PrefetchLink} items={item1} />
            <ImageAndTextBlock PrefetchLink={PrefetchLink} {...item2} />
            <Items PrefetchLink={PrefetchLink} items={item3} keepCol />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomerService
