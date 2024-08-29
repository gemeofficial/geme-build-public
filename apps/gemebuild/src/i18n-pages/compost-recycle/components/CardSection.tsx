import { SectionContainer, SectionTitle } from 'ui'
import { ILinkComponent } from '../../../contexts/link-context'
import Image from 'next/image'
import PrimaryButton from 'ui/src/ui-components/PrimaryButton'

export interface ICardSectionProps {
  title: string
  cardList: CardItemType[]
  PrefetchLink?: ILinkComponent
  buttonText: string
}

export default function CardSection({
  title,
  cardList,
  buttonText,
  PrefetchLink,
}: ICardSectionProps) {
  return (
    <SectionContainer compact className="!pt-0">
      <SectionTitle className="!text-[#333]">{title}</SectionTitle>
      <ul className="mt-4 md:mt-8 flex flex-col lg:flex-row gap-4 md:gap-6">
        {cardList.map((item, index) => (
          <CardItem key={index} {...item} />
        ))}
      </ul>
      <div className="flex items-center justify-center mt-4">
        <PrimaryButton
          PrefetchLink={PrefetchLink}
          href="#"
          className="!px-6 !py-3 w-full justify-center md:w-max !text-base md:!text-lg"
        >
          {buttonText}
        </PrimaryButton>
      </div>
    </SectionContainer>
  )
}

type CardItemType = {
  title: string
  description: string
  imageUrl: string
  alt?: string
}

function CardItem({ description, imageUrl, alt, title }: CardItemType) {
  return (
    <li className="lg:max-w-sm bg-gray-100 shadow p-6 flex flex-col gap-4">
      <Image
        width={660}
        height={440}
        className="object-cover min-h-36 md:max-h-[300px] lg:max-h-[220px] w-full"
        src={imageUrl}
        alt={alt || title}
      />
      <h5 className="text-xl md:text-2xl tracking-wider mt-2 text-[#333]">
        {title}
      </h5>
      <p className="text-[#777] font-mono lg:mb-8">{description}</p>
    </li>
  )
}
