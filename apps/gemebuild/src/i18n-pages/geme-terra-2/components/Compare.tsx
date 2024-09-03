import Image from 'next/image'
import { SectionContainer, SectionDescription, SectionTitle } from 'ui'

export interface ICompareProps {
  title: string
  description: React.ReactNode
  items: {
    title: string
    imageUrl: string
    alt: string
  }[]
}

export default function Compare({ description, title, items }: ICompareProps) {
  return (
    <SectionContainer compact>
      <SectionTitle>{title}</SectionTitle>
      <SectionDescription className="mt-4 md:mt-6">
        {description}
      </SectionDescription>

      <ul className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-8">
        {items.map((item, index) => (
          <li className="relative grayscale" key={index}>
            <Image
              alt={item.alt}
              src={item.imageUrl}
              width={300}
              height={300}
              className="object-contain w-full h-full"
            />
            <div className="text-center md:text-lg xl:text-xl">
              {item.title}
            </div>
          </li>
        ))}
      </ul>
    </SectionContainer>
  )
}
