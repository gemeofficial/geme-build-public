import Image from 'next/image'
import { SectionContainer, SectionDescription, SectionTitle } from 'ui'

export interface ICompareProps {
  title: string
  description: React.ReactNode
  items: {
    title: string
    imageUrl: string
    alt: string
    hoverTitle: string
    description: string
  }[]
}

export default function Compare({ description, title, items }: ICompareProps) {
  return (
    <SectionContainer compact>
      <SectionTitle>{title}</SectionTitle>
      <SectionDescription className="mt-4 md:mt-6">
        {description}
      </SectionDescription>

      <ul className="mt-6 md:mt-8 grid grid-cols-3 md:grid-cols-6 gap-8">
        {items.map((item, index) => (
          <li className="relative grayscale" key={index}>
            <p className="sr-only">{item.description}</p>
            <Image
              alt={item.alt}
              src={item.imageUrl}
              width={300}
              height={300}
              className="object-contain w-full h-full"
              title={item.hoverTitle}
            />
            <div className="text-center md:text-lg lg:text-xl">
              {/* {item.title} */}
              {'Brand' + (index + 1)}
            </div>
          </li>
        ))}
      </ul>
    </SectionContainer>
  )
}
