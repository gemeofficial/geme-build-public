import Image from 'next/image'
import { SectionContainer, SectionTitle } from 'ui'

export interface ILogoCloudProps {
  images: {
    alt: string
    src: string
  }[]
}

export default function LogoCloud({ images }: ILogoCloudProps) {
  return (
    <SectionContainer compact>
      <SectionTitle>Press Mentions</SectionTitle>
      <div className="mt-4 md:mt-6 mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-6">
        {images.map((item, index) => (
          <Image
            key={index}
            alt={item.alt}
            src={item.src}
            width={312}
            height={96}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          />
        ))}
      </div>
    </SectionContainer>
  )
}
