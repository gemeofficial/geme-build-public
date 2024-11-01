import Image from 'next/image'
import { ReactNode } from 'react'
import { SectionContainer, SectionDescription, SectionTitle } from 'ui'

export interface ICompareSectionProps {
  title: ReactNode
  description: ReactNode
  features: {
    title: string
    desc?: string
    imageSrc: string
    imageAlt: string
  }[]
  pictureDescription1?: string
  pictureSubDescription2?: string
}
export default function CompareSection({
  description,
  title,
  features,
  pictureDescription1,
  pictureSubDescription2,
}: ICompareSectionProps) {
  return (
    <SectionContainer compact>
      <SectionTitle>{title}</SectionTitle>
      <SectionDescription className="mt-4 md:mt-6">
        {description}
      </SectionDescription>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mt-6 md:mt-8">
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden text-center p-4 hover:shadow-lg transition-shadow text-v2311-primary"
          >
            <h3 className="text-lg font-semibold mb-4">{item.title}</h3>

            <Image
              width={800}
              height={800}
              src={item.imageSrc}
              alt={item.imageAlt}
              className="object-cover w-[235px] h-[150px] rounded-lg mx-auto"
            />
            {item.desc && (
              <h3 className="py-2 text-center text-v2311-text-gary text-sm">
                {item.desc}
              </h3>
            )}
          </div>
        ))}
      </div>
      <div className="mt-6 text-gray-500 text-sm">
        {pictureDescription1 && (
          <p>
            <em>{pictureDescription1}</em>
          </p>
        )}
        {pictureSubDescription2 && (
          <p>
            <em>{pictureSubDescription2}</em>
          </p>
        )}
      </div>
    </SectionContainer>
  )
}
