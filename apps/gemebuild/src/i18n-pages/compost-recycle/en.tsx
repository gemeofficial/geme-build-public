import { ILinkComponent } from '../../contexts/link-context'
import CardSection, { ICardSectionProps } from './components/CardSection'
import HeroSection, { IHeroSection } from './components/HeroSection'
import RecycleSection, {
  IRecycleSectionProps,
} from './components/RecycleSection'

const heroSectionProps: IHeroSection = {
  title: (
    <div className="max-w-lg text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-[80px] font-normal">
      Let us take care of the trash for you.
    </div>
  ),
  description: (
    <p className="md:text-xl">
      The GEME Food Recycling Program makes dealing with food waste easy with a
      local organics pickup program.
    </p>
  ),
}

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
  type: 'bg',
}

const cardSectionProps2: ICardSectionProps = {
  title: 'How It Works',
  cardList: [
    {
      title: 'Use Lomi to Transform Food Scraps',
      description:
        'We send you a Lomi and you use it to transform your food scraps into nutrient-rich Lomi Earth.',
      imageUrl:
        '/assets/images/pdp-v2311/introduction/geme-take-care-of-the-rest.jpg',
    },
    {
      title: 'Fill Your Lomi Earth Bin',
      description: `Add all your Lomi Earth into the reusable bin we provide and, once it's full, you can schedule your pickup with us. We’ll take it and leave a new bin to fill up.`,
      imageUrl:
        '/assets/images/pdp-v2311/introduction/geme-take-care-of-the-rest.jpg',
    },
    {
      title: 'Use the App to Schedule Pickup',
      description:
        'Lomi Earth pickup is scheduled right in our app. Leave your bin outside your door and we’ll take and donate it to local farms and partners to regenerate the soil. ',
      imageUrl:
        '/assets/images/pdp-v2311/introduction/geme-take-care-of-the-rest.jpg',
    },
  ],
  hiddenButton: true,
}

const recycleSectionProps: IRecycleSectionProps = {
  title: 'Agricultural Circularity: From Farm to Food to Farm Again',
  description: `Your food doesn't need to become trash. Together we can divert food scraps from our overflowing landfills, turn it into natural fertilizer, and get it into the hands of local farmers to help revitalize and promote regenerative agriculture while reducing waste.`,
  imageUrl: '/assets/images/geme-v2-product/geme-4r.jpeg',
  alt: 'Geme Compost Recycle Process',
}

export interface ICompostRecyclePageProps {
  PrefetchLink?: ILinkComponent
}

export function CompostRecyclePageEn({
  PrefetchLink,
}: ICompostRecyclePageProps) {
  return (
    <>
      <div className="bg-[#FCFCFC]">
        <HeroSection {...heroSectionProps} PrefetchLink={PrefetchLink} />
        <CardSection
          PrefetchLink={PrefetchLink}
          {...cardSectionProps}
          className="!pt-0"
        />
      </div>
      <CardSection PrefetchLink={PrefetchLink} {...cardSectionProps2} />
      <RecycleSection {...recycleSectionProps} />
    </>
  )
}
