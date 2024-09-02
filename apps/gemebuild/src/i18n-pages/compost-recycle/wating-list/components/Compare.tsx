import clsx from 'clsx'
import Image from 'next/image'
import { SectionContainer, SectionDescription, SectionTitle } from 'ui'

export interface ICompareProps {
  title: string
  description: string
  items: {
    imageUrl: string
    title: string
    features: string[]
    type: 'good' | 'bad'
  }[]
}

export default function Compare({ title, description, items }: ICompareProps) {
  return (
    <SectionContainer compact>
      <SectionTitle className="!text-[#333]">{title}</SectionTitle>
      <SectionDescription className="mt-4 md:mt-6">
        {description}
      </SectionDescription>

      <div className="flex items-stretch max-w-[800px] mx-auto mt-8 md:mt-12">
        {items.map((item, index) => (
          <div
            className={clsx(
              'max-w-[400px] w-[50%] flex items-center justify-center border-black',
              index === 0
                ? 'rounded-l-xl border'
                : 'rounded-r-xl border border-l-0',
            )}
            key={index}
          >
            <Image
              width={500}
              height={500}
              src={item.imageUrl}
              alt={item.title}
              className="object-cover w-[320px] h-[360px]"
            />
          </div>
        ))}
      </div>
    </SectionContainer>
  )
}
