import React, { ReactNode } from 'react'
import { Items, Button, ImageAndTextBlock } from './Items'
import Image from 'next/image'
import { ILinkComponent } from '../../../contexts/link-context'

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
  return (
    <div className="bg-gray-50">
      <div className="overflow-hidden bg-[#01121C] prose-a:break-all">
        <Image
          width={1920}
          height={1080}
          priority
          src={coverImage}
          alt="customer service cover"
          className="object-cover object-center"
        />
        <div className="grid grid-cols-1 items-center gap-y-10 gap-x-16 ">
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
