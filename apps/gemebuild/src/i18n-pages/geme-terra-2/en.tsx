import { FC } from 'react'
import HeroSection, { IHeroSectionProps } from './components/HeroSection'
import LogoCloud, { ILogoCloudProps } from './components/LogoCloud'
import { Faq, IShortVideoProps, ShortVideo } from 'ui'
import Reviews, { IReviewsProps } from './components/Reviews'
import Subscribe, {
  ISubscribeComponent,
  ISubscribeProps,
} from './components/Subscribe'
import Compare, { ICompareProps } from './components/Compare'
import { gemeTerra2FaqProps } from './components/faq-data'

// Hero section
const heroSectionProps: IHeroSectionProps = {
  title: 'Waste Less, Grow More',
  description: (
    <>
      Meet <strong>GEME Terra 2</strong>, the smarter, more affordable electric
      kitchen composter for small home. Turn food waste into real compost the
      effortless way.
    </>
  ),

  fullScreenVideoUrl: 'https://www.youtube.com/embed/ROJYZBp0jcM',
  videoProps: {
    src: 'https://www-geme-bio-us.s3.us-west-1.amazonaws.com/hero-banner-window-video-19s-480p.mp4',
    posterUrl: '/assets/images/home-v2311/hero-blurred.webp',
  },
  inputPlaceholder: 'Enter your email',
  submitButtonLabel: 'Notify Me',
  heroBgImagePc: '/assets/images/geme-terra-2/hero-bg-desktop.png',
  heroBgImageMobile: '/assets/images/geme-terra-2/hero-bg-mobile.png',
}

// Logo cloud
const logoCloudProps: ILogoCloudProps = {
  title: 'Press Mentions',
  images: [
    {
      src: '/assets/images/geme-terra-2/press/europa-press.png',
      alt: 'Europa Press',
    },
    {
      src: '/assets/images/geme-terra-2/press/adnkronos.svg',
      alt: 'Adn Kronos',
    },
    {
      src: '/assets/images/geme-terra-2/press/bolsamania.png',
      alt: 'Bolsamania',
    },
    {
      src: '/assets/images/geme-terra-2/press/wallstreet-online-horizontal.svg',
      alt: 'Reform',
    },
    {
      src: '/assets/images/geme-terra-2/press/yahoo-finance.png',
      alt: 'Yahoo Finance',
    },
    {
      src: '/assets/images/geme-terra-2/press/advfn.png',
      alt: 'ADVFN',
    },
  ],
}

// 图文section1
const shortVideoProps: IShortVideoProps = {
  title: 'Real Composting',
  description: (
    <>
      <ul className="list-disc ml-4 mt-4">
        <li className="mt-4">Simulates a pile in a box</li>
        <li className="mt-4">
          Creates <strong>an ideal environment</strong> for microbes
        </li>
        <li className="mt-4">Aerobic composting method</li>
        <li className="mt-4">
          Uses microbiota(<a href="/geme-kobold">GEME Kobold</a>)
        </li>
        <li className="mt-4">Temperature control</li>
        <li className="mt-4">Auto turning</li>
      </ul>
    </>
  ),
  videoPosterUrl: '/assets/images/geme-terra-2/product-s2-jpg',
  videoSrcUrl:
    'https://www-geme-bio-us.s3.us-west-1.amazonaws.com/0902-geme-terra-2-8s-480p.mp4',
}

// 图文section2
const imageTextProps: IShortVideoProps = {
  title: 'Smaller but Stronger',
  description: (
    <>
      <ul className="list-disc ml-4 mt-4">
        <li className="mt-4">Affordable pricing</li>
        <li className="mt-4">Faster breakdown</li>
        <li className="mt-4">More efficient aerobic air exchange</li>
        <li className="mt-4">More powerful odor filter system</li>
        <li className="mt-4">No need to replace filter</li>
        <li className="mt-4">Fit on countertop and floor</li>
      </ul>
    </>
  ),
  imageUrl: '/assets/images/geme-terra-2/product-bright.png',
  imageAlt: '',
  isReverse: true,
}

// 图文section3
const imageTextProps2: IShortVideoProps = {
  title: 'Smarter than Ever',
  description: (
    <>
      <ul className="list-disc ml-4 mt-4">
        <li className="mt-4">Intelligent monitoring</li>
        <li className="mt-4">Visible processing</li>
        <li className="mt-4">Harvest indication</li>
        <li className="mt-4">Overweight reminder</li>
        <li className="mt-4">Reactive opening</li>
        <li className="mt-4">Child safety lock</li>
      </ul>
    </>
  ),
  imageUrl: '/assets/images/geme-terra-2/product-near-detail.png',
  imageAlt: '',
}

// Compare Section
const compareProps: ICompareProps = {
  title: "You're  Wrong if You Think We are Them",
  description: (
    <>
      Those products are just food waste dehydrators, not real composters.
      Unlike them, GEME is designed for true composting. It’s completely
      different.
      <br></br>
      You cannot use the output from those machines as fertilizer, yet those
      brands continue to mislead the market.
    </>
  ),
  items: [
    {
      title: 'Lomi',
      imageUrl: '/assets/images/geme-terra-2/compare/lomi.png',
      alt: 'Lomi composter',
      hoverTitle: 'Lomi composter',
    },
    // {
    //   title: 'Vitamix Food Cycler',
    //   imageUrl: '/assets/images/geme-terra-2/compare/vitamix.png',
    //   alt: 'Vitamix Food Cycler',
    // },
    {
      title: 'Airthereal',
      imageUrl: '/assets/images/geme-terra-2/compare/airthereal.png',
      alt: 'Airthereal Electric Kitchen Composter',
      hoverTitle: 'Airthereal composter',
    },
    {
      title: 'Fylecen',
      imageUrl: '/assets/images/geme-terra-2/compare/fylecen.png',
      alt: 'Fylecen 4L Electric Composter',
      hoverTitle: 'Fylecen composter',
    },
    {
      title: 'Moreborn',
      imageUrl: '/assets/images/geme-terra-2/compare/moreborn.png',
      alt: 'Moreborn composter',
      hoverTitle: 'Moreborn composter',
    },
    {
      title: 'Mill',
      imageUrl: '/assets/images/compare-section/compare-section-mill.png',
      alt: 'Mill Composter',
      hoverTitle: 'Mill composter',
    },
    {
      title: 'Soilkind',
      imageUrl: '/assets/images/geme-terra-2/compare/soilkind.png',
      alt: 'Soilkind Komposter',
      hoverTitle: 'Soilkind composter',
    },
  ],
}

// Reviews
const reviewsProps: IReviewsProps = {
  subTitle: 'Testimonials',
  title: 'Satisfying 10000+ Customers',
  featuredTestimonial: {
    body: 'I went to internet and looked more and found out yours and the adertising says that it is bio composter and saw videos and at last i found yours i loved it. I want to buy my composters !  I am ready for 2 more now. Maybe the three.',
    author: {
      name: 'LAE. Angeles Delgado',
      role: 'Finance CEO',
      avatar:
        '/assets/images/pdp-v2311/user-stories/user-stories-angelita.jpeg',
    },
  },

  testimonials: [
    [
      [
        {
          body: 'Looking for a clean easy composter that can be in the kitchen as our big compost bins are too far. It works very efficient.  Quiet and clean.',
          author: {
            name: 'Rainforest Inn',
            role: 'Bill, Boss',
            avatar:
              '/assets/images/pdp-v2311/user-stories/user-stories-rainforest.jpg',
          },
        },
        {
          body: 'I REALLY love this product. We have used it a lot and look forward to seeing the garden this year, which we have supplemented with Geme compost!',
          author: {
            name: 'Michael R.',
          },
          imageUrl:
            'https://www-geme-bio-us.s3.us-west-1.amazonaws.com/images/users-feedback/3-michale.png',
        },
        {
          body: 'We have order a second one. Our family cannot live without this machine',
          author: {
            name: 'Robert G.',
          },
          imageUrl:
            'https://www-geme-bio-us.s3.us-west-1.amazonaws.com/images/users-feedback/1-robert.png',
        },
        {
          body: 'I was very surprised to see the waste from dinner was almost completely composted by this morning.',
          author: {
            name: 'Canada Buyer',
          },
          imageUrl:
            'https://www-geme-bio-us.s3.us-west-1.amazonaws.com/images/users-feedback/9-canada.png',
        },

        // More testimonials...
      ],
      [
        {
          body: 'this composter has changed my kitchen habits for the better.',
          author: {
            name: 'Ethel M H.',
          },
          imageUrl:
            'https://www-geme-bio-us.s3.us-west-1.amazonaws.com/images/users-feedback/8-ethel.png',
        },
        {
          body: 'This method is amazing. I used to have an outdoor compost. This is such a great upgrade.',
          author: {
            name: 'Sotoko',
          },
          imageUrl:
            'https://www-geme-bio-us.s3.us-west-1.amazonaws.com/images/users-feedback/2-satoko.png',
        },
        {
          body: 'I am living in the US and really like my GEME. I would love to order another on for my sister in Australia.',
          author: {
            name: 'Willi S.',
          },
          imageUrl:
            'https://www-geme-bio-us.s3.us-west-1.amazonaws.com/images/users-feedback/12-willi.png',
        },
        // More testimonials...
      ],
    ],
    [
      [
        {
          body: 'I am very impressed with the efficiency of the composter and have been telling / showing it to many people.',
          author: {
            name: 'Paul',
          },
          imageUrl:
            'https://www-geme-bio-us.s3.us-west-1.amazonaws.com/images/users-feedback/7-paul.png',
        },
        {
          body: 'We have used the compost now to fertilize our fruit plants and trees earlier this season, and there was definitely an explosion of growth after that.',
          author: {
            name: 'Brian M.',
          },
          imageUrl:
            'https://www-geme-bio-us.s3.us-west-1.amazonaws.com/images/users-feedback/4-brian-m.png',
        },
        {
          body: 'En passant, je suis très satisfait du GEME.',
          author: {
            name: 'Louis T.',
          },
          imageUrl:
            'https://www-geme-bio-us.s3.us-west-1.amazonaws.com/images/users-feedback/11-louis.png',
        },
        // More testimonials...
      ],
      [
        {
          body: `I always wanted to get involved more & more in everything around me for one better sustainable life and this is why I really wanted to get so much GEME. It combines everything you need for an easier worry-stress free life. Totally recommend it to all my surroundings!`,
          author: {
            name: 'Vasil Borukov',
            role: 'Senior IT Support Engineer',
            avatar:
              '/assets/images/pdp-v2311/user-stories/user-stories-vasil.png',
          },
        },
        {
          body: 'I never imagined anything could break down the matter so quickly. And all of those conerns about "smelly"? I have no such problem',
          author: {
            name: 'Greer',
          },
          imageUrl:
            'https://www-geme-bio-us.s3.us-west-1.amazonaws.com/images/users-feedback/5-greer.png',
        },
        {
          body: 'Yesterday I put mozzarrella balls and shredded carrots and eggshells - gone like magic',
          author: {
            name: 'Elilyn',
          },
          imageUrl:
            'https://www-geme-bio-us.s3.us-west-1.amazonaws.com/images/users-feedback/6-elilyn.png',
        },
        // More testimonials...
      ],
    ],
  ],

  mobileTestimonials: [
    {
      body: 'I went to internet and looked more and found out yours and the adertising says that it is bio composter and saw videos and at last i found yours i loved it. I want to buy my composters !  I am ready for 2 more now. Maybe the three.',
      author: {
        name: 'LAE. Angeles Delgado',
        role: 'Finance CEO',
        avatar:
          '/assets/images/pdp-v2311/user-stories/user-stories-angelita.jpeg',
      },
    },
    {
      body: 'Looking for a clean easy composter that can be in the kitchen as our big compost bins are too far. It works very efficient.  Quiet and clean.',
      author: {
        name: 'Rainforest Inn',
        role: 'Bill, Boss',
        avatar:
          '/assets/images/pdp-v2311/user-stories/user-stories-rainforest.jpg',
      },
    },
    {
      body: `I always wanted to get involved more & more in everything around me for one better sustainable life and this is why I really wanted to get so much GEME. It combines everything you need for an easier worry-stress free life. Totally recommend it to all my surroundings!`,
      author: {
        name: 'Vasil Borukov',
        role: 'Senior IT Support Engineer',
        avatar: '/assets/images/pdp-v2311/user-stories/user-stories-vasil.png',
      },
    },
    {
      body: 'I REALLY love this product. We have used it a lot and look forward to seeing the garden this year, which we have supplemented with Geme compost!',
      author: {
        name: 'Michael R.',
      },
      imageUrl:
        'https://www-geme-bio-us.s3.us-west-1.amazonaws.com/images/users-feedback/3-michale.png',
    },
    {
      body: 'We have used the compost now to fertilize our fruit plants and trees earlier this season, and there was definitely an explosion of growth after that.',
      author: {
        name: 'Brian M.',
      },
      imageUrl:
        'https://www-geme-bio-us.s3.us-west-1.amazonaws.com/images/users-feedback/4-brian-m.png',
    },
    {
      body: 'I never imagined anything could break down the matter so quickly. And all of those conerns about "smelly"? I have no such problem',
      author: {
        name: 'Greer',
      },
      imageUrl:
        'https://www-geme-bio-us.s3.us-west-1.amazonaws.com/images/users-feedback/5-greer.png',
    },
  ],
}

// subscribe
const subscribeProps: ISubscribeProps = {
  title: 'Subscribe to our waiting list',
  description: `Be the first to use the GEME Terra 2. You will be notified in the priority queue and receive the early bird price.`,
  productImage: '/assets/images/geme-v2-product/geme-v2-1-color.png',
  inputPlaceholder: 'Enter your email',
  submitButtonLabel: 'Notify Me',
}

export interface IGemeTerra2PageProps {
  SubscribeComponent?: FC<ISubscribeComponent>
}

export function GemeTerra2PageEn({ SubscribeComponent }: IGemeTerra2PageProps) {
  return (
    <>
      <HeroSection
        {...heroSectionProps}
        SubscribeComponent={SubscribeComponent}
      />
      <LogoCloud {...logoCloudProps} />

      <ShortVideo {...shortVideoProps} compact />
      <ShortVideo {...imageTextProps} compact />
      <ShortVideo {...imageTextProps2} compact />

      <Compare {...compareProps} />
      <Reviews {...reviewsProps} />
      <Faq {...gemeTerra2FaqProps} />
      <Subscribe {...subscribeProps} SubscribeComponent={SubscribeComponent} />
    </>
  )
}
