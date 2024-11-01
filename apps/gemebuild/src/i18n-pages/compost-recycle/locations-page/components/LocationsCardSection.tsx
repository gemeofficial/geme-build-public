import { LinkButton, LocaleType, SectionContainer, SectionTitle } from 'ui'
import { ILinkComponent } from '../../../../contexts/link-context'
import Image from 'next/image'

export interface ILocationsCardSectionProps {
  title: string
  cardList: CardItemType[]
  locale?: LocaleType
  PrefetchLink?: ILinkComponent
}

export default function LocationsCardSection({
  title,
  cardList,
  locale,
  PrefetchLink,
}: ILocationsCardSectionProps) {
  return (
    <SectionContainer compact>
      <SectionTitle className="!text-[#333] !text-left">{title}</SectionTitle>
      <ul className="mt-4 md:mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
        {cardList.map((item, index) => (
          <CardItem
            key={index}
            {...item}
            PrefetchLink={PrefetchLink}
            locale={locale!}
          />
        ))}
      </ul>
    </SectionContainer>
  )
}

type CardItemType = {
  id: string
  title: string
  imageUrl: string
  isOpen?: boolean
  alt?: string
  PrefetchLink?: ILinkComponent
}

const signUpTranslations = {
  en: 'Sign Up',
  de: 'Anmelden',
  fr: "S'inscrire",
}

const joinWaitlistTranslations = {
  en: 'Join the waitlist',
  de: 'Der Warteliste beitreten',
  fr: "Rejoindre la liste d'attente",
}

function CardItem({
  id,
  isOpen,
  imageUrl,
  alt,
  title,
  PrefetchLink,
  locale,
}: CardItemType & { locale: LocaleType }) {
  const signUp = signUpTranslations[locale]
  const watingList = joinWaitlistTranslations[locale]
  const buttonText = isOpen ? signUp : watingList

  const href = isOpen ? '#' : `/compost-recycle/${id}`

  return (
    <li className="bg-gray-100 shadow p-6 flex flex-col gap-4">
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
      <LinkButton
        PrefetchLink={PrefetchLink}
        href={href}
        className="!text-[#666] !font-mono flex items-center gap-4 !no-underline hover:!underline group"
      >
        <span>{buttonText}</span>
        <span className="text-[#333] transition-all group-hover:translate-x-1">
          <svg
            viewBox="0 0 14 10"
            fill="currentColor"
            aria-hidden="true"
            focusable="false"
            className="w-4 h-3"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.537.808a.5.5 0 01.817-.162l4 4a.5.5 0 010 .708l-4 4a.5.5 0 11-.708-.708L11.793 5.5H1a.5.5 0 010-1h10.793L8.646 1.354a.5.5 0 01-.109-.546z"
              fill="currentColor"
            ></path>
          </svg>
        </span>
      </LinkButton>
    </li>
  )
}
