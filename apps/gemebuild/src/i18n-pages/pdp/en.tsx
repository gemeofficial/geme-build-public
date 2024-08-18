/* eslint-disable react/no-unescaped-entities */
import { FC } from 'react'
import { ILinkComponent } from '../../contexts/link-context'
import {
  IPdpUserStoryTeamSectionsProps,
  IReviewsSectionConfig,
  LocaleType,
  PdpIntroSection3,
  PdpIntroSection4,
} from 'ui'
import PdpIntroEnContent, { IPdpContentProps, IPdpTabsText } from './components'
import { IPdpIntroProps } from './components/Intro'
import { IPdpCompareProps } from './components/Compare'
import { IPdpSpecProps } from './components/Spec'
import {
  ShieldCheckIcon,
  TruckIcon,
  ChatBubbleLeftRightIcon,
} from '@heroicons/react/24/solid'

export interface IProductProps {
  ReviewsComponent: FC<{}>
  PrefetchLink?: ILinkComponent
  reviewsSectionConfig: IReviewsSectionConfig
  GemeModelViewer?: FC<{}>
}

const locale: LocaleType = 'en'

// 产品页Tabs吸顶栏的文本 En
const tabs: IPdpTabsText = {
  intro: 'Introduction',
  compare: 'Compare',
  spec: 'Spec',
  warranty: 'Warranty',
  userStories: 'User Stories',
  reviews: 'Reviews',
}

// ----------------  产品页 Introduction模块内容配置 En start  ----------------------

const introProps: IPdpIntroProps = {
  // Introduction 第1部分 En
  pdpIntroSection1Props: {
    title: "World's First Bio Waste Composter",
    description:
      'Use microbiota to breakdown food waste quickly, 100x faster than traditional composting, completely different than countertop dehydrating electric "composters".',
    bgImageSrc:
      '/assets/images/pdp-v2311/dividers/geme-with-compost-background-min.jpg',
    comparisonText: {
      brfore: 'Brfore',
      after: 'After',
    },
    bottomItems: [
      { id: 1, description: 'Breakdown by Microbes' },
      { id: 2, description: 'Not by Dehydration' },
      { id: 3, description: 'Compost Pile in Box' },
    ],
  },

  // Introduction 第2部分 En
  contentSection71Props: {
    title: 'From Waste To Wonder',
    description:
      "Let's dive into the tiny superheroes that create a significant impact: microbes (GEME Kobold). Similar to the friendly microbes aiding digestion in your gut, with ideal conditions and regular rotation mixing, they quickly transform food scraps into organic compost.",

    withImageOrVideo: {
      type: 'video',
      videoProps: {
        sources: [
          {
            minWidth: 0,
            src: 'https://www-geme-bio-us.s3.us-west-1.amazonaws.com/how-geme-kobold-eat-food-waste-480p.mp4',
          },
        ],
      },
    },
    bottomContent: <PdpIntroSection3 title="6-8 Hours" />,
    isDisplayTextOnLeft: true,
  },

  // Introduction 第3部分 En
  contentSection72Props: {
    title: 'Silent Operation',
    description:
      'GEME Sound level around 35-45 dB, the quietest composter on the marketing.',
    withImageOrVideo: {
      type: 'image',
      imageSrc: '/assets/images/pdp-v2311/introduction/geme-silent.jpg',
      imageAlt: 'food waste picture',
    },
    bottomContent: <PdpIntroSection4 />,
  },

  // Introduction 第4部分 En
  pdpIntroSection5Props: {
    title: 'Almost All Of Waste Can Go into GEME',
    leftNotes: (
      <>
        <strong>400+</strong>
        <br />
        kinds of waste
      </>
    ),
  },

  // Introduction 第5部分 En
  contentSection21Props: {
    title: 'No Cleaning Required, Take Months to Fill Up',
    description: (
      <>
        🫳&nbsp;&nbsp;Add waste at anytime <br />
        🫷&nbsp;&nbsp;No need to push buttons <br />
        🕓&nbsp;&nbsp;No need to wait cycles <br />
        🤗&nbsp;&nbsp;Zero learning curve <br />
        🚮&nbsp;&nbsp;Just like regular trash bin
      </>
    ),
    imageSrc:
      '/assets/images/pdp-v2311/introduction/geme-take-care-of-the-rest.jpg',
    imageAlt: 'GEME take care of your food waste',
    isDisplayTextOnLeft: true,
  },

  // Introduction 第6部分 En
  contentSection22Props: {
    title: 'Innovative Microbes Based Garbage Disposal, Work Quickly & Safely',
    description: (
      <>
        🔥&nbsp;&nbsp;Not dehydrating, it's real composting <br />
        🚰&nbsp;&nbsp;Not shredding, no more clogged sink
        <br />
        🌿&nbsp;&nbsp;Not green washing, true eco-friendly solution
      </>
    ),
    imageSrc: '/assets/images/pdp-v2311/introduction/geme-garbage-disposal.jpg',
    imageAlt: 'food waste picture',
  },

  // Introduction 第7部分 En
  pdpIntroSection6Props: {
    title: 'Composting Made Easy',
    description: 'Loved by 100k+ gardeners',
    items: [
      {
        id: 1,
        featured: true,
        title: 'GEME',
        imageSrc:
          '/assets/images/pdp-v2311/introduction/section-comparison-geme.jpeg',
        imageAlt: 'GEME compose',
        features: [
          'Real Compost',
          'Aerobic Fermentation',
          'Odorless & Quiet',
          'Energy Saving',
        ],
      },
      {
        id: 2,
        title: 'Dehydrator',
        imageSrc:
          '/assets/images/pdp-v2311/introduction/section-comparison-dehydrator.jpeg',
        imageAlt: 'Dehydrator',
        features: [
          'Fake Compost',
          'Cook & Dry',
          'Smelly & Noisy',
          'Energy Costly',
        ],
      },
      {
        id: 3,
        title: 'Compost Pile',
        imageSrc:
          '/assets/images/pdp-v2311/introduction/section-comparison-pile.jpeg',
        imageAlt: 'Compost Pile',
        features: [
          'Wait Long Time',
          'Dirty & Messy',
          'Often Turn Over',
          'Attract Animals',
        ],
      },
    ],
  },

  // Introduction 第8部分 En
  pdpIntroSection7Props: {
    title: 'Big, More & Long Term',
    description: 'Work 7x24 But Energy Saving',
    features: [
      '😄 10+ people family daily using',
      '📅 3 months no cleaning required',
      '💰 Worth the price',
    ],
  },

  // Introduction 第9部分 En
  contentSection23Props: {
    title: 'Imaging A Life, No Need to Throw Food Waste Any More',
    description: (
      <>
        👪&nbsp;&nbsp;10+ people family daily using <br />
        📅&nbsp;&nbsp;3+ months no cleaning required <br />
        💰&nbsp;&nbsp;Worth the price for such a big guy <br />
        🐳&nbsp;&nbsp;19L volume, 11£/5kg daily feed capacity <br />
        🐘&nbsp;&nbsp;45.5x32x66.5(cm) 18x12.6x26.2 (inch)
      </>
    ),
    imageSrc:
      '/assets/images/pdp-v2311/introduction/geme-composter-size-v2.jpeg',
    imageAlt: 'Big Size for GEME Composter',
    isDisplayTextOnLeft: true,
  },

  // Introduction 第10部分 En
  contentSection24Props: {
    title: 'No Need to Change Filter',
    description: (
      <>
        The world&apos;s only model that uses the most advanced industrial
        filter, with <b>metal ion catalytic oxidation</b> purification.
        <br />
        This technology is powerful and requires no replacement at all.
        <br />
        Other "composter" needs to replace filter every 3 months, large hidden
        cost!
        <br />
        <br />
        👃🏻&nbsp;&nbsp;No smell <br />
        💰&nbsp;&nbsp;No additional hidden cost
        <br />
        🔨&nbsp;&nbsp;No replace errands
      </>
    ),
    imageSrc: '/assets/images/pdp-v2311/introduction/no-filters.jpg',
    imageAlt: 'GEME requires no filter replacing',
  },

  // Introduction 第11部分 En
  contentSection8Props: {
    title: 'No Smell Composting At Home',
    description:
      'GEME uses industrial filters with the most advanced deodorization technology. Enjoy the high tech clean modern composting, enjoy the zero waste life style.',
    items: [
      {
        id: 1,
        imageSrc: '/assets/images/pdp-v2311/introduction/no-smell-before.jpg',
        imageAlt: 'Get Smell before using GEME Composter',
      },
      {
        id: 2,
        imageSrc: '/assets/images/pdp-v2311/introduction/no-smell-after.jpg',
        imageAlt: 'No Smell after using GEME Composter',
      },
    ],
  },
}
// ----------------  产品页 Introduction模块内容配置 En end  ----------------------

// 产品页 compareSection模块内容配置 En
const compareProps: IPdpCompareProps = {
  compareSectionProps: {
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
            desc: 'Low reduction rate',
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
  },
  locale: 'en',
}

// 产品页Spec模块配置内容 En
const specProps: IPdpSpecProps = {
  gemeSpecsProps: {
    title: 'Tech spec',
    specs: [
      {
        id: 1,
        name: 'Volume',
        description: '19L',
      },
      {
        id: 2,
        name: 'Capacity',
        description: '5kg/day',
      },
      {
        id: 3,
        name: 'Size',
        description: 'W320*D455*H665mm  (18" x 12.6" x 26.2")',
      },
      {
        id: 4,
        name: 'Weight',
        description: '19.5kg',
      },
      {
        id: 5,
        name: 'Power',
        description: (
          <>
            <p>AC110V-60Hz(Model G601N-2K for North America)</p>
            <p>AC220V-50Hz(Model G601U-2K for Europe)</p>
          </>
        ),
      },
      {
        id: 6,
        name: 'Decibel',
        description: '≈40db (23db-55db)',
      },
      {
        id: 7,
        name: 'Certifications',
        description: 'CE/FCC/ISO9001/ISO14001/ISO45001',
      },
      {
        id: 8,
        name: 'Function',
        description:
          'Fully automatic quick-acting bio-composting; Safe and energy-saving; Automatic deodorization; Automatic dehumidification',
      },
    ],
  },

  gemeWhatsInBoxProps: {
    title: `What's in the box`,
    features: [
      {
        name: '1',
        title: 'GEME composter',
        description: 'The bio-waste quick-acting machine',
        imageSrc: '/assets/images/geme-whats-in-box/q2.png',
        imageAlt: 'GEME bio-waste quick-acting composter',
      },
      {
        name: '2',
        title: 'GEME-Kobold',
        description: 'The natural microbiota for composting',
        imageSrc: '/assets/images/geme-whats-in-box/q1.png',
        imageAlt: 'GEME-Kobold natural microbiota',
      },
      {
        name: '3',
        title: 'Shovel',
        description: 'Used to take out organic fertilizer',
        imageSrc: '/assets/images/geme-whats-in-box/q3.png',
        imageAlt: 'Shovel',
      },
      {
        name: '4',
        title: 'Scraper',
        description: 'Used for cleaning the decomposition tub',
        imageSrc: '/assets/images/geme-whats-in-box/q4.png',
        imageAlt: 'Scraper',
      },
    ],
  },
}

// 产品页Warranty模块配置内容 En
const warrantyProps = {
  title: 'Buy with Confident',
  description: `We know you will feel expensive, but we make sure it worth.
Your money wont gone, it turns into the a better life style and good service around you.`,

  features: [
    {
      name: '30 Days Free Trial',
      description:
        'Free shipping(US mainland), Free trial, No return fee charged. Ask us any questions during your trial, innovative product lovers deserved encouraged!',
      href: '/return-policy',
      icon: TruckIcon,
    },
    {
      name: '1 Year Warranty',
      description:
        'We will undertakes to repair or replace defective parts free of charge if the initial defect occurs during the warranty period.',
      href: '/warranty',
      icon: ShieldCheckIcon,
    },
    {
      name: '100% Customer Reply Rate',
      description:
        'Experience worry-free composting with our comprehensive warranty. Your GEME Composter, our commitment.',
      href: '/contact',
      icon: ChatBubbleLeftRightIcon,
    },
  ],

  btnText: 'Learn more',
}

// 产品页 User Stories 模块配置内容 En
const userStoryProps: IPdpUserStoryTeamSectionsProps = {
  title: "Meet GEME's Customer Stories",
  description: <>How our customers get their life changed after using GEME</>,
  people: [
    {
      id: 1,
      name: 'Alex Egertson',
      role: 'Director of Sustainability',
      image: {
        src: '/assets/images/pdp-v2311/user-stories/user-stories-llc.jpg',
        alt: 'Alex Egertson',
      },
      bio: (
        <>
          Alex work in Lutheran Retreats, Camps & Conferences, aka{' '}
          <a
            className="text-emerald-600"
            href="https://lrcchome.com/"
            target="_blank"
          >
            LRCC
          </a>{' '}
          is a camp school that kids are learning and living a green life.
          <br />
          With GEME more children can learn composting by doing it easily in
          their daily lives.
        </>
      ),
      quote: 'Happy to help. Seems like a great product so far.',
    },
    {
      id: 2,
      name: 'Rainforest Inn',
      role: 'Bill, Boss',
      image: {
        src: '/assets/images/pdp-v2311/user-stories/user-stories-rainforest.jpg', // 'https://images.squarespace-cdn.com/content/v1/55390e7ee4b0a048151b9185/1549219762523-XL1GYVWNFYNJ44ZJXXMD/RFI-from-treehouse-suite-headerjpg.jpg',
        alt: 'Rainforest Inn',
      },
      bio: (
        <>
          Bill is the owner of{' '}
          <a
            className="text-emerald-600"
            href="https://www.rainforestinn.com/"
            target="_blank"
          >
            Rainforest Inn
          </a>{' '}
          located in Puerto Rico. He want GEME badly and even paid multiple
          times and extra shipping cost, just want to use GEME composter. Let's
          check his{' '}
          <a
            className="text-emerald-600"
            href="https://www.tiktok.com/@rainforestinn/video/7309861665711901998"
            target="_blank"
          >
            vlog
          </a>{' '}
          to see how's going on.
        </>
      ),
      quote:
        'Looking for a clean easy composter that can be in the kitchen as our big compost bins are too far. It works very efficient.  Quiet and clean.',
    },
    {
      id: 3,
      name: 'LAE. Angeles Delgado',
      role: 'Finance CEO',
      image: {
        src: '/assets/images/pdp-v2311/user-stories/user-stories-angelita.jpeg',
        alt: 'Leonard Krasner',
      },
      bio: (
        <>
          Mexican customer Angelita (contacted April) bought a unit despite our
          initial US-Mexico shipping hurdle. Her trucking company facilitated
          Texas pick-up. Loving the product, she purchased 3 more for her
          daughters' Christmas! Angelita even became a hero by helping us
          resolve a fulfillment issue for another Mexico Kickstarter campaign.
        </>
      ),
      quote:
        'I went to internet and looked more and found out yours and the adertising says that it is bio composter and saw videos and at last i found yours i loved it. I want to buy my composters !  I am ready for 2 more now. Maybe the three.',
      mobileQuote:
        'I want to buy my composters !  I am ready for 2 more now. Maybe the three.',
    },
    {
      id: 4,
      name: 'Vasil Borukov',
      role: 'Senior IT Support Engineer',
      image: {
        src: '/assets/images/pdp-v2311/user-stories/user-stories-vasil.png',
        alt: 'Vasil Software engineer',
      },
      bio: (
        <>
          Bulgarian zero-waste advocate Vasil loves GEME for tackling food waste
          and reducing carbon footprint. Following GEME since its July 2022
          crowdfunding campaign, he secured a €499 unit via installments and
          actively promoted GEME's product and vision to his network. A true
          sustainability champion!
        </>
      ),
      quote:
        'I always wanted to get involved more & more in everything around\n' +
        '          me for one better sustainable life and this is why I really wanted to\n' +
        '          get so much GEME. It combines everything you need for an easier\n' +
        '          worry-stress free life. Totally recommend it to all my surroundings!',
      mobileQuote:
        'It combines everything you need for an easier worry-stress free life.',
    },
  ],
  locale: 'en',
}

export function PdpIntroEn(props: IProductProps) {
  const allProps: IPdpContentProps = {
    ...props,
    tabs,
    introProps,
    compareProps,
    specProps,
    warrantyProps,
    userStoryProps,
    locale,
  }

  return <PdpIntroEnContent {...allProps} />
}
