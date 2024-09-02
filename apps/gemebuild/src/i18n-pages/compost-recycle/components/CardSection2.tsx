import { SectionContainer, SectionTitle } from 'ui'
import Image from 'next/image'

export interface ICardSectionProps2 {
  title: string
  cardList: CardItemType[]
  priority?: boolean
}

export default function CardSection2({
  title,
  cardList,
  priority = false,
}: ICardSectionProps2) {
  return (
    <SectionContainer compact>
      <SectionTitle className="!text-[#333]">{title}</SectionTitle>
      <ul className="mt-4 md:mt-8 flex gap-4 md:gap-6 overflow-auto no-scrollbar snap-x snap-mandatory">
        {cardList.map((item, index) => (
          <CardItem key={index} {...item} priority={priority} />
        ))}
      </ul>
    </SectionContainer>
  )
}

type CardItemType = {
  title: string
  description: string
  imageUrl: string
  alt?: string
  priority?: boolean
}

function CardItem({
  description,
  imageUrl,
  alt,
  title,
  priority,
}: CardItemType) {
  return (
    <li className="max-w-[85%] md:max-w-xs lg:max-w-none flex flex-col gap-4 flex-shrink-0 lg:flex-shrink lg:flex-1 scroll-mx-4 md:scroll-mx-0 snap-center">
      <Image
        priority={priority}
        width={660}
        height={440}
        className="object-cover min-h-36 md:min-h-[240px] w-full max-h-[400px] rounded-xl"
        src={imageUrl}
        alt={alt || title}
      />
      <h5 className="text-xl md:text-2xl tracking-wider mt-2 text-[#333]">
        {title}
      </h5>
      <p className="text-[#444] font-mono">{description}</p>
    </li>
  )
}
