import { ICompareSectionProps } from 'ui'
import CompareSection from 'ui/src/compare-section/CompareSection'

const compareSectionProps: ICompareSectionProps = {
  title: "Let's Compare",
  description: 'Discover what makes GEME different.',
  compareList: [
    {
      imgUrl: '/assets/images/compare-section/compare-section-geme.png',
      devicename: 'GEME',
      compareItems: [
        {
          title: 'Real Compost',
          desc: 'High active microbe accelerate composting process',
        },
        {
          title: 'No need to change filter',
          desc: 'Zero cost, industrial grade filter, not carbon material',
        },
        {
          title: '19L super large volume',
          desc: 'Take months to fill up',
        },
        {
          title: 'Also pet poops & soup',
          desc: 'Support bio waste, including cat litter and liquid waste',
        },
        {
          title: 'No need to clean',
          desc: 'Just reduce when full, no need to empty and clean',
        },
        {
          title: 'No subscription',
          desc: 'Price is high, but no hidden subscription cost, free trail, free return',
        },
        {
          title: 'Continuously composting',
          desc: 'Add anytime, no need to wait cycle completed',
        },
      ],
    },
    {
      imgUrl: '/assets/images/compare-section/compare-section-lomi.png',
      devicename: 'Brand 1', // Lomi
      compareItems: [
        {
          title: 'Not real compost',
          desc: 'Dehydrate and cook, still dry waste',
        },
        {
          title: 'Change carbon filter regularly',
          desc: 'Up to $240/year for filter replacements',
        },
        {
          title: '3L small volume',
          desc: 'Limited size of food waste',
        },
        {
          title: 'Limited food scraps',
          desc: 'Can not handle meat and soup',
        },
        {
          title: 'Empty daily',
          desc: 'Clean up after each use',
        },
        {
          title: 'Subscription required',
          desc: 'High hidden cost subscription trap',
        },
        {
          title: 'Cycle based manual start',
          desc: 'Twist off lid, push button to start, wait until cycle ends',
        },
      ],
    },
    {
      imgUrl: '/assets/images/compare-section/compare-section-mill.png',
      devicename: 'Brand 2', // mill
      compareItems: [
        {
          title: 'Not real compost',
          desc: 'Dehydrate and grind, still dry waste',
        },
        {
          title: 'Carbon odor filter',
          desc: '$60+ for each filter replacements',
        },
        {
          title: '6.5L volume',
          desc: 'Tall and big, but limited capacity',
        },
        {
          title: 'Limited food scraps',
          desc: 'Can not handle meat and soup',
        },
        {
          title: 'Empty weekly',
          desc: 'Run and empty when get full',
        },
        {
          title: 'Subscription required',
          desc: 'Subscription by default, trouble for cancel and return, refund is not applicable',
        },
        {
          title: 'Continuously chopping',
          desc: 'Auto restart when you add waste, keep chopping',
        },
      ],
    },
    {
      imgUrl: '/assets/images/compare-section/compare-section-reencle.png',
      devicename: 'Brand 3', // Reencle
      compareItems: [
        {
          title: 'Real Compost',
          desc: 'Low maintenance microbes involved',
        },
        {
          title: 'Change carbon filter regularly',
          desc: 'Cost $35+ each replacement',
        },
        {
          title: '6L volume',
          desc: '14L outer space, 6L inner volume',
        },
        {
          title: 'Food waste only',
          desc: 'Can not handle pet poops',
        },
        {
          title: 'Clean up on demand',
          desc: 'Empty, clean up and reset compost starter when full',
        },
        {
          title: 'Subscription offered',
          desc: 'Looks affordable, but trouble when cancel or refund',
        },
        {
          title: 'Continuously composting',
          desc: 'Add anytime, no need to wait cycle completed',
        },
      ],
    },
  ],
  buttonText: 'Buy Now',
}

export default function Compare() {
  return <CompareSection locale="en" {...compareSectionProps} />
}
