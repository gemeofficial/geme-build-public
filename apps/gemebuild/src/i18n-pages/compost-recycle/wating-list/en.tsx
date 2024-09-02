import { ILinkComponent } from '../../../contexts/link-context'
import CardSection2, { ICardSectionProps2 } from '../components/CardSection2'
import RecycleSection, {
  IRecycleSectionProps,
} from '../components/RecycleSection'
import Compare, { ICompareProps } from './components/Compare'
import HeroSection, { IHeroSectionProps } from './components/HeroSection'
import Reviews, { IReviewsProps } from './components/Reviews'

const heroSectionprops: IHeroSectionProps = {
  city: 'Whistler',
  bgImageUrl: '/assets/images/compost-recycle/citys/Whistler.jpg',
  title: 'Finally Phoenix! A local food waste recycling program',
  description: 'Easy, clean, convenient. A local service with local impact.',
  buttonText: 'Sign Up Now',
}

// How It Works卡片Section
const cardSectionProps2: ICardSectionProps2 = {
  title: 'How It Works',
  cardList: [
    {
      title: 'Use GEME to Transform Food Scraps',
      description:
        'We send you a GEME and you use it to transform your food scraps into nutrient-rich GEME Earth.',
      imageUrl:
        '/assets/images/pdp-v2311/introduction/geme-take-care-of-the-rest.jpg',
    },
    {
      title: 'Fill Your GEME Earth Bin',
      description: `Add all your GEME Earth into the reusable bin we provide and, once it's full, you can schedule your pickup with us. We’ll take it and leave a new bin to fill up.`,
      imageUrl: '/assets/images/how-it-works/how-geme-kobold-works.png',
    },
    {
      title: 'Use the App to Schedule Pickup',
      description:
        'GEME Earth pickup is scheduled right in our app. Leave your bin outside your door and we’ll take and donate it to local farms and partners to regenerate the soil. ',
      imageUrl:
        '/assets/images/pdp-v2311/introduction/geme-garbage-disposal.jpg',
    },
  ],
}

// 堆肥回收Section
const recycleSectionProps: IRecycleSectionProps = {
  title: 'Agricultural Circularity: From Farm to Food to Farm Again',
  description: `Your food doesn't need to become trash. Together we can divert food scraps from our overflowing landfills, turn it into natural fertilizer, and get it into the hands of local farmers to help revitalize and promote regenerative agriculture while reducing waste.`,
  imageUrl: '/assets/images/geme-v2-product/geme-4r.jpeg',
  alt: 'Geme Compost Recycle Process',
}

// Compare Section
const compareProps: ICompareProps = {
  title: 'No more bugs, pests, or mess',
  description:
    'Traditional organics programs rely on you dealing with rotting food waste in your kitchen and garage. With GEME, all of that goes away.',
  items: [
    {
      title: 'GEME',
      imageUrl: '/assets/images/compare-section/compare-section-geme.png',
      features: [
        `Won't attract pests`,
        'Free of smells, and leaks',
        'Beautiful design',
        'Empty 1-2 times per week',
        'Food nutrients back in soil',
      ],
      type: 'good',
    },
    {
      title: 'Kitchen Garbage',
      imageUrl: '/assets/images/compost-recycle/garbage2.webp',
      features: [
        `Fruit flies love these`,
        'Messy, smelly, leaky ',
        'Best hidden under the sink',
        'Needs regular emptying',
        'Food in landfills',
      ],
      type: 'bad',
    },
  ],
}

const reviewsProps: IReviewsProps = {
  title: 'What People Are Saying About GEME',
  buttonText: 'Join the waitlist',
  cardButtonText: 'View Details',
  reviews: [
    {
      name: 'Michael R.',
      content:
        'I REALLY love this product. We have used it a lot and look forward to seeing the garden this year, which we have supplemented with Geme compost!',
      imageUrl:
        'https://www-geme-bio-us.s3.us-west-1.amazonaws.com/images/users-feedback/3-michale.png',
    },
    {
      name: 'Robert G.',
      content:
        'We have order a second one. Our family cannot live without this machine',
      imageUrl:
        'https://www-geme-bio-us.s3.us-west-1.amazonaws.com/images/users-feedback/1-robert.png',
    },
    {
      name: 'Sotoko',
      content:
        'This method is amazing. I used to have an outdoor compost. This is such a great upgrade.',
      imageUrl:
        'https://www-geme-bio-us.s3.us-west-1.amazonaws.com/images/users-feedback/2-satoko.png',
    },
  ],
}

export interface ICompostRecycleWatingListPageProps {
  PrefetchLink?: ILinkComponent
}

export function CompostRecycleWatingListPageEn({
  PrefetchLink,
}: ICompostRecycleWatingListPageProps) {
  return (
    <>
      <HeroSection {...heroSectionprops} PrefetchLink={PrefetchLink} />
      <CardSection2 {...cardSectionProps2} />
      <RecycleSection {...recycleSectionProps} />
      <Compare {...compareProps} />
      <div className="bg-[#FCFCFC]">
        <Reviews {...reviewsProps} PrefetchLink={PrefetchLink} />
      </div>
    </>
  )
}
