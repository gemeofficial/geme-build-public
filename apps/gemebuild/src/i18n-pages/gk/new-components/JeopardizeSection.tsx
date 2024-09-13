import Image from 'next/image'
import { ReactNode } from 'react'
import { SectionContainer, SectionDescription, SectionTitle } from 'ui'
import ImageZoomViewer from 'ui/src/client-components/ImageZoomViewer'

interface IImage {
  src: string
  alt: string
  title: string
}

export interface IJeopardizeSectionProps {
  title: string
  description?: ReactNode
  imageList: IImage[]
}

export default function JeopardizeSection({
  description,
  title,
  imageList,
}: IJeopardizeSectionProps) {
  return (
    <SectionContainer className="relative py-16 bg-white" compact>
      {/* 标题 */}
      <SectionTitle>{title}</SectionTitle>
      {description && (
        <SectionDescription className="mt-4 md:mt-6">
          {description}
        </SectionDescription>
      )}

      <ImageZoomViewer>
        <ul className="flex items-center gap-5 lg:gap-8 mt-6 md:mt-8 overflow-auto snap-x snap-mandatory no-scrollbar">
          {imageList.map((item, index) => (
            <li
              key={index}
              className="relative rounded-lg overflow-hidden flex-shrink-0 md:flex-1 scroll-mx-4 md:scroll-mx-0 snap-center"
            >
              <Image
                width={900}
                height={900}
                src={item.src}
                alt={item.alt}
                className="object-cover w-64 h-64 md:w-full md:h-56 xl:h-72"
              />
              <div className="absolute inset-x-0 bottom-0 bg-black bg-opacity-60 flex items-center justify-center">
                <h3 className="text-white text-sm lg:text-lg font-semibold py-2">
                  {item.title}
                </h3>
              </div>
            </li>
          ))}
        </ul>
      </ImageZoomViewer>
    </SectionContainer>
  )
}
