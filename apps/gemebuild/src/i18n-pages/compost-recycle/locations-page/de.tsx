import LocationsCardSection, {
  ILocationsCardSectionProps,
} from './components/LocationsCardSection'
import { ICompostRecycleLocationsPageProps } from './en'

// 卡片Section 1
const cardSectionProps: ILocationsCardSectionProps = {
  title: 'BC Locations',
  cardList: [
    {
      title: 'Kelowna - LIVE',
      isOpen: true,
      imageUrl: '/assets/images/compost-recycle/city1.webp',
    },
    {
      title: 'Osoyoos',
      imageUrl: '/assets/images/compost-recycle/city2.webp',
    },
    {
      title: 'Pentiction',
      imageUrl: '/assets/images/compost-recycle/city3.webp',
    },
    {
      title: 'Whistler',
      imageUrl: '/assets/images/compost-recycle/city4.webp',
    },
  ],
  locale: 'en',
}

// 卡片Section 2
const cardSectionProps2: ILocationsCardSectionProps = {
  title: 'US Cities',
  cardList: [
    {
      title: 'Austin, Texas',
      imageUrl: '/assets/images/compost-recycle/city5.webp',
    },
    {
      title: 'Cape Cod, Massachusetts',
      imageUrl: '/assets/images/compost-recycle/city6.webp',
    },
    {
      title: 'Pentiction',
      imageUrl: '/assets/images/compost-recycle/city3.webp',
    },
    {
      title: 'Maine',
      imageUrl: '/assets/images/compost-recycle/city1.webp',
    },
    {
      title: 'Washington, D.C.',
      imageUrl: '/assets/images/compost-recycle/city2.webp',
    },
    {
      title: 'Renton, Washington',
      imageUrl: '/assets/images/compost-recycle/city6.webp',
    },
    {
      title: 'Vancouver, Washington',
      imageUrl: '/assets/images/compost-recycle/city5.webp',
    },
    {
      title: 'Osoyoos',
      imageUrl: '/assets/images/compost-recycle/city6.webp',
    },
    {
      title: 'Pentiction',
      imageUrl: '/assets/images/compost-recycle/city3.webp',
    },
    {
      title: 'Whistler',
      imageUrl: '/assets/images/compost-recycle/city1.webp',
    },
    {
      title: 'Aurora, Colorado',
      imageUrl: '/assets/images/compost-recycle/city2.webp',
    },
    {
      title: 'Denver, Colorado',
      imageUrl: '/assets/images/compost-recycle/city6.webp',
    },
  ],
  locale: 'en',
}

export function CompostRecycleLocationsPageDe({
  PrefetchLink,
}: ICompostRecycleLocationsPageProps) {
  return (
    <>
      <LocationsCardSection PrefetchLink={PrefetchLink} {...cardSectionProps} />
      <LocationsCardSection
        PrefetchLink={PrefetchLink}
        {...cardSectionProps2}
      />
    </>
  )
}
