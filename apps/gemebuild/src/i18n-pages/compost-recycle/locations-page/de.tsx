import CardSection, { ICardSectionProps } from '../components/CardSection'
import { ICompostRecycleLocationsPageProps } from './en'

// 卡片Section 1
const cardSectionProps: ICardSectionProps = {
  title:
    'Did you forget how gross your garbage can get because of rotting food waste?',
  buttonText: 'Join us now',
  cardList: [
    {
      title: 'No more smells',
      description:
        'Lomi gets the stink out of your trash by totally transforming your food waste.',
      imageUrl: '/assets/images/compost-recycle/card1.webp',
    },
    {
      title: 'No more pests',
      description:
        'Transforming your waste in Lomi allows you to avoid attracting pests',
      imageUrl: '/assets/images/compost-recycle/card2.webp',
    },
    {
      title: '80% less trash',
      description:
        'Lomi reduces your food waste dramatically. Which means less trips to the curb.',
      imageUrl: '/assets/images/compost-recycle/card3.webp',
    },
  ],
}

export function CompostRecycleLocationsPageDe({
  PrefetchLink,
}: ICompostRecycleLocationsPageProps) {
  return (
    <>
      <CardSection PrefetchLink={PrefetchLink} {...cardSectionProps} />
    </>
  )
}
