// components/Section2.tsx
import Image from 'next/image'
import { ReactNode } from 'react'
import { SectionContainer, SectionDescription, SectionTitle } from 'ui'

interface IImage {
  src: string
  alt: string
  title: string
}

export interface ISection2Props {
  title: string
  description?: ReactNode
  imageList: IImage[]
}

export default function Section2({
  description,
  title,
  imageList,
}: ISection2Props) {
  return (
    <SectionContainer className="relative py-16 bg-white" compact>
      {/* 标题 */}
      <SectionTitle>{title}</SectionTitle>
      {description && (
        <SectionDescription className="mt-4 md:mt-6">
          {description}
        </SectionDescription>
      )}

      <ul className="flex items-center gap-5 lg:gap-8 mt-6 md:mt-8 overflow-auto snap-x snap-mandatory no-scrollbar">
        {imageList.map((item, index) => (
          <li
            key={index}
            className="relative rounded-lg overflow-hidden flex-shrink-0 md:flex-1 scroll-mx-4 md:scroll-mx-0 snap-center"
          >
            <Image
              width={500}
              height={500}
              src={item.src}
              alt={item.alt}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-x-0 bottom-0 bg-black bg-opacity-60 flex items-center justify-center">
              <h3 className="text-white text-sm lg:text-lg font-semibold py-2">
                {item.title}
              </h3>
            </div>
          </li>
        ))}
      </ul>
    </SectionContainer>
  )
}
