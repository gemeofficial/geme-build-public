import { FC } from 'react'
import HeroSection, { IHeroSectionProps } from './components/HeroSection'
import LogoCloud, { ILogoCloudProps } from './components/LogoCloud'
import { IShortVideoProps, ShortVideo } from 'ui'
import Reviews, { IReviewsProps } from './components/Reviews'
import Faq, { IFaqProps } from './components/Faq'
import Subscribe, {
  ISubscribeComponent,
  ISubscribeProps,
} from './components/Subscribe'
import Compare, { ICompareProps } from './components/Compare'

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
  heroBgImagePc: '/assets/images/geme-v2/hero-bg.jpg',
  heroBgImageMobile: '/assets/images/geme-v2/hero-bg-mobile.png',
}

// Logo cloud
const logoCloudProps: ILogoCloudProps = {
  title: 'Press Mentions',
  images: [
    {
      src: '/assets/images/geme-v2/press/europa-press.png',
      alt: 'Europa Press',
    },
    {
      src: '/assets/images/geme-v2/press/adnkronos.svg',
      alt: 'Adn Kronos',
    },
    {
      src: '/assets/images/geme-v2/press/bolsamania.png',
      alt: 'Bolsamania',
    },
    {
      src: '/assets/images/geme-v2/press/wallstreet-online-horizontal.svg',
      alt: 'Reform',
    },
    {
      src: '/assets/images/geme-v2/press/yahoo-finance.png',
      alt: 'Yahoo Finance',
    },
    {
      src: '/assets/images/geme-v2/press/advfn.png',
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
  videoPosterUrl: '/assets/images/home-v2311/use-compost-cover.jpg',
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
  imageUrl: '/assets/images/geme-v2/product-s2.jpg',
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
  imageUrl: '/assets/images/geme-v2/product-s3.png',
  imageAlt: '',
}

// Compare Section
const compareProps: ICompareProps = {
  title: 'You are Wrong if You Think We are Them',
  description:
    'Those products are not all food waste dehydrators, not real composters. GEME is not like them, GEME is for real composting. It is totally different.',
  items: [
    {
      title: 'Lomi',
      imageUrl: '/assets/images/geme-v2/compare/lomi.png',
      alt: '',
    },
    // {
    //   title: 'Vitamix Food Cycler',
    //   imageUrl: '/assets/images/geme-v2/compare/vitamix.png',
    //   alt: '',
    // },
    {
      title: 'Airthereal',
      imageUrl: '/assets/images/geme-v2/compare/airthereal.png',
      alt: 'Airthereal Electric Kitchen Composter',
    },
    {
      title: 'Fylecen',
      imageUrl: '/assets/images/geme-v2/compare/fylecen.png',
      alt: 'Fylecen 4L Electric Composter',
    },
    {
      title: 'Moreborn',
      imageUrl: '/assets/images/geme-v2/compare/moreborn.png',
      alt: 'Moreborn composter',
    },
    {
      title: 'Mill',
      imageUrl: '/assets/images/compare-section/compare-section-mill.png',
      alt: 'Mill Composter',
    },
    {
      title: 'Soilkind',
      imageUrl: '/assets/images/geme-v2/compare/soilkind.png',
      alt: 'soilkind Komposter',
    },
  ],
}

// Reviews
const reviewsProps: IReviewsProps = {
  subTitle: 'Testimonials',
  title: 'Satisfying 1000+ Customers',
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

// Faqs
const faqProps: IFaqProps = {
  title: 'Frequently Asked Questions',
  description: '',
  faqs: [
    {
      slug: 'how-it-works',
      question: 'How it works?',
      answer: (
        <>
          <h4>
            ✅ <strong>Simulate compost pile in a box</strong>, ❌
            <del>not dehydrate and heat</del>
          </h4>
          GEME Composters are all home appliances provide and maintain{' '}
          <strong>an ideal environment</strong> for {`GEME's`} special
          microbes(GEME Kobold) to break down the bio waste. Terra 2 works in
          the same principle.
          <br />
          <ul>
            <li>
              <strong>The machine</strong>: Simulates a compost pile in a
              container, make sure it will not smell.
              <br />
              <picture>
                <img
                  alt="How electric composter works"
                  src="/assets/images/how-it-works/how-geme-composter-works.jpg"
                />
              </picture>
            </li>
            <li>
              <strong>The Kobold</strong>: Microbes handle the majority of the
              workload. They reproduce quickly and absorb energy from the food
              waste. Just like worms eat food, microbes also consume food waste.
              Both produce compost.
              <picture>
                <img
                  alt="How microbes grow"
                  src="/assets/images/geme-v2/microbes-grow.png"
                />
              </picture>
              Bacteria reproduce primarily by binary fission, Under ideal
              conditions, some bacterial species may divide every 10–15
              minutes—a doubling of the population at these time intervals.
            </li>
          </ul>
        </>
      ),
    },
    {
      slug: 'what-is-the-difference-between-geme-one',
      question: 'What is the difference between GEME Terra 2 and GEME One?',
      answer: (
        <>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b border-gray-300 text-left text-sm font-semibold text-gray-700">
                    Features
                  </th>
                  <th className="py-2 px-4 border-b border-gray-300 text-left text-sm font-semibold text-gray-700">
                    GEME Terra 2
                  </th>
                  <th className="py-2 px-4 border-b border-gray-300 text-left text-sm font-semibold text-gray-700">
                    GEME Classic
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-50">
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Price
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    {`< $600`}
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    $899.99
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Size
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    14L
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    19L
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Weight
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    {`<= 13kg`}
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    20 kg
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Process Capacity
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    3kg/day
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    5kg/day
                  </td>
                </tr>

                <tr className="bg-gray-50">
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Days to Fill
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    45days+
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    60days+
                  </td>
                </tr>

                <tr className="bg-gray-50">
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Sound Level
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    25dB to 40dB
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    30dB to 45dB
                  </td>
                </tr>

                <tr className="bg-gray-50">
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Energy Saving
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Smart
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Simple
                  </td>
                </tr>

                <tr className="bg-gray-50">
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Space
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Floor, Countertop
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Floor
                  </td>
                </tr>

                <tr className="bg-gray-50">
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Permanent Filter
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Yes
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Yes
                  </td>
                </tr>

                <tr className="bg-gray-50">
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Intelligent Monitoring
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Yes
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    No
                  </td>
                </tr>

                <tr className="bg-gray-50">
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Harvest Indication
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Yes
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    No
                  </td>
                </tr>

                <tr className="bg-gray-50">
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Reactive Opening
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Yes
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    No
                  </td>
                </tr>

                <tr className="bg-gray-50">
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Overweight Reminder
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Yes
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    No
                  </td>
                </tr>

                <tr className="bg-gray-50">
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Visible Processing
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Yes
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    No
                  </td>
                </tr>

                <tr className="bg-gray-50">
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Child Lock
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Yes
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    No
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      ),
    },
    {
      slug: 'what-is-the-difference-between-other-electric-composters-like-lomi',
      question:
        'What is the difference between other electric composters like Lomi?',
      answer: (
        <>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b border-gray-300 text-left text-sm font-semibold text-gray-700">
                    Features
                  </th>
                  <th className="py-2 px-4 border-b border-gray-300 text-left text-sm font-semibold text-gray-700">
                    GEME Terra 2
                  </th>
                  <th className="py-2 px-4 border-b border-gray-300 text-left text-sm font-semibold text-gray-700">
                    Lomi-like Dehydrators
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-50">
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Price
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    {`< $600`}
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    {`$150 < x < $500`}
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Size
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    14L
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    3L - 4L
                  </td>
                </tr>

                <tr className="bg-gray-50">
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Working Mode
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Continues composting
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Periodically grind and dehydrate
                  </td>
                </tr>

                <tr className="bg-gray-50">
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    End Result
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Real compost
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Dry and cooked waste
                  </td>
                </tr>

                <tr className="bg-gray-50">
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Interaction
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Add waste anytime
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Wait cycle completed
                  </td>
                </tr>

                <tr className="bg-gray-50">
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Filter System
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Permanent filter,
                    <br />
                    No need to replace
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Carbon filter,
                    <br />
                    Replace every 3 months
                  </td>
                </tr>

                <tr className="bg-gray-50">
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Clean up
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    No need to clean
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Easily clogged
                  </td>
                </tr>

                <tr className="bg-gray-50">
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Days to Fill
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    45 days+
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    {`1 day`}
                  </td>
                </tr>

                <tr className="bg-gray-50">
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Sound Level
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    25dB to 40dB
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    60dB+
                  </td>
                </tr>

                <tr className="bg-gray-50">
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Energy Cost
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    1.2~1.7 kWh/day
                    <br />
                    similar to a MacBook Pro
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    500W+ Power
                    <br />
                    similar to an oven
                  </td>
                </tr>

                <tr className="bg-gray-50">
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Space
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Floor, Countertop
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Countertop only
                  </td>
                </tr>

                <tr className="bg-gray-50">
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    How to start
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Throw and close the lid
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Prepare tuning, carefully align lid
                  </td>
                </tr>

                <tr className="bg-gray-50">
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Liquid Waste
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Yes
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    No
                  </td>
                </tr>

                <tr className="bg-gray-50">
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Meat
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Yes
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    No
                  </td>
                </tr>

                <tr className="bg-gray-50">
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Support Pet Poop
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Yes
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    No
                  </td>
                </tr>

                <tr className="bg-gray-50">
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Up to 3kg
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Yes
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    No
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <iframe
            className="w-full aspect-[16/9] self-stretch md:min-h-[500px]"
            src="https://www.youtube.com/embed/-qkjLB3GcKo"
            frameBorder="0"
            title="Product Overview Video"
            aria-hidden="true"
          />
          {/*<YouTubeEmbed videoid="-qkjLB3GcKo" height={400} width={720}/>*/}
        </>
      ),
    },
    // {
    //   slug: 'can-I-add-food-waste-when-it-is-running',
    //   question: 'Can I add food waste when it is running?',
    //   answer: ``,
    // },
    {
      slug: 'what-kinds-of-food-waste-can-i-put',
      question: 'What kinds of food waste can I put?',
      answer: (
        <>
          <div className="max-w-3xl mx-auto p-6">
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Almost all food you eat can go into GEME.
            </p>
            <div className="flex flex-col md:flex-row items-start md:items-center mb-6">
              <picture>
                <img
                  src="https://www.geme.bio/help-center/assets/images/supported-foodwaste-guide-055cef03c7c375f24ce99e1625de5d6f.png"
                  alt="GEME Composter Supported Food Waste"
                />
              </picture>
            </div>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              It also support liquid waste like soup.
              <iframe
                className="w-full aspect-[16/9] self-stretch md:min-h-[500px]"
                src="https://www.youtube.com/embed/yGkcEaeXlQQ"
                frameBorder="0"
                title="Product Overview Video"
                aria-hidden="true"
              />
            </p>

            <p className="text-gray-700 text-lg leading-relaxed">
              It also can breakdown pet poop, like dog pop and cat litter.
            </p>
            <picture>
              <img
                src="/assets/images/geme-v2/cat-litter.png"
                alt="GEME Composter Supported Food Waste"
              />
            </picture>
          </div>
        </>
      ),
    },
    // {
    //   slug: 'what-is-the-electricity-cost',
    //   question:
    //     'Aside from food waste, can I put other waste like tissue, paper, or bioplastics?',
    //   answer: ``,
    // },
    {
      slug: 'how-long-will-it-take-for-geme-to-turn-my-food-waste-into-compost',
      question: 'How long will it take to turn my food waste into compost?',
      answer: (
        <>
          For most of the daily left over, it takes around 6 to 8 hours to
          breakdown the waste.
          <br />
          Check this uncut 7 hours video.(BTW,{' '}
          <b className="text-gray-500">
            none of our competitors dare share such live video to public
          </b>
          )
          <iframe
            className="w-full aspect-[16/9] self-stretch md:min-h-[500px]"
            src="https://www.youtube.com/embed/asNRoqkC_BA"
            frameBorder="0"
            title="GEME breakdown food wate in 7 hours uncut video"
            aria-hidden="true"
          />
          However, for some food waste like orange peels, it will take slightly
          longer. Because the fibers are hard to breakdown. Small bones take
          even longer.
          <picture>
            <img
              src="https://www.geme.bio/help-center/assets/images/supported-foodwaste-guide-055cef03c7c375f24ce99e1625de5d6f.png"
              alt="GEME Composter Supported Food Waste"
            />
          </picture>
          <strong>Note</strong>, it takes few hours or days to breakdown, it is
          turning into the state of compost. However, it still need more time to
          become finished compost. We recommend wait more than 45 days to take
          them our to use. Or you can mix the unfinished compost with soil in
          1:8 to grow your plant.
        </>
      ),
    },
    {
      slug: 'is-it-smell-how-often-should-i-replace-the-carbon-filter',
      question: 'Is it smell? How often should I replace the carbon filter?',
      answer: (
        <>
          <div>
            {`It won't smell`}, it uses the{' '}
            <strong>metal ion catalytic oxidation</strong> technology to process
            the odor. It does not use any carbon filters. Hence, you {`don't`}{' '}
            need to replace the filter. The filter can use for life time long.
          </div>
          <div className="container mx-auto p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-md">
                <picture>
                  <img
                    src="/assets/images/geme-v2/odor/1.jpg"
                    alt="Image 1"
                    className="w-full h-auto rounded-t-lg"
                  />
                </picture>
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2">Layer 1</h2>
                  <p className="text-gray-700">
                    Photocatalyst, UV light will kill most of the harmful
                    bacteria
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md">
                <picture>
                  <img
                    src="/assets/images/geme-v2/odor/2.jpg"
                    alt="Image 2"
                    className="w-full h-auto rounded-t-lg"
                  />
                </picture>
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2">Layer 2</h2>
                  <p className="text-gray-700">Metal ion catalytic oxidation</p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md">
                <picture>
                  <img
                    src="/assets/images/geme-v2/odor/3.jpg"
                    alt="Image 3"
                    className="w-full h-auto rounded-t-lg"
                  />
                </picture>
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2">Layer 3</h2>
                  <p className="text-gray-700">
                    Powerful aerobic air exchange system
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      ),
    },

    {
      slug: 'how-often-should-i-clean-the-bin',
      question: 'How often should I clean the bin?',
      answer: (
        <>
          Technically, there is no need to clean the bin. It does not look good
          and a little smell when you open the lid. But when you close the lid,
          it is clean and odorless. <br />
          The real question you want to ask might be, how often should I harvest
          the compost?
          <div className="container mx-auto p-6">
            <h5 className="text-1xl font-semibold text-gray-800 mb-4">
              {`Don't over pass the full limit line`}
            </h5>
            <p className="text-gray-700 mb-6">
              This is a hard limit, if it get full, remove the compost out ASAP.
            </p>

            <h5 className="text-1xl font-semibold text-gray-800 mb-4">
              Do not empty all of them out
            </h5>
            <p className="text-gray-700 mb-6">
              Every time you remove the compost, remain some of them in the
              base, so the bacteria in GEME Kobold can reproduce and accept new
              food waste again.
              <strong className="text-v2311-primary">
                Keep the compost the same level as the agitator shaft
              </strong>
            </p>

            <h5 className="text-1xl font-semibold text-gray-800 mb-4">
              Recommend: remove when the paddle get fully buried
            </h5>
            <p className="text-gray-700 mb-6">
              See the yellow line of the picture. This is a best practice, you
              can gain your compost quickly and reduce the workload of machine
              for longevity.
            </p>
          </div>
          <picture>
            <img
              src="/assets/images/geme-v2/harvest-compost/best-practice-removal.png"
              alt="Best practice to remove GEME Compost"
            />
          </picture>
        </>
      ),
    },

    {
      slug: 'what-is-the-maintenance-cost-for-keep-the-unit',
      question: 'What is the maintenance cost for keep the unit?',
      answer: (
        <>
          <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              GEME Composter Annual Costs: A Detailed Reasoning
            </h2>

            <div className="mb-4">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                1. Daily Energy Consumption
              </h3>
              <p className="text-gray-700">
                The GEME Composter consumes approximately{' '}
                <strong>1.44 kWh per day</strong>. This is comparable to the
                daily energy usage of a standard laptop running continuously.
              </p>
            </div>

            <div className="mb-4">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                2. Annual Energy Consumption
              </h3>
              <p className="text-gray-700">
                Given that the appliance operates 24 hours a day, the total
                energy consumption over a year can be calculated as:
              </p>
              <p className="text-gray-700 font-mono bg-gray-100 p-2 rounded-lg">
                1.44 kWh/day × 365 days/year = 525.6 kWh/year
              </p>
              <p className="text-gray-700">
                This means that over the course of a year, the GEME Composter
                uses a total of <strong>525.6 kWh</strong>.
              </p>
            </div>

            <div className="mb-4">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                3. Electricity Cost
              </h3>
              <p className="text-gray-700">
                The average electricity cost in the United States is around{' '}
                <strong>$0.13 per kWh</strong>. Therefore, the annual cost of
                running the GEME Composter can be calculated as:
              </p>
              <p className="text-gray-700 font-mono bg-gray-100 p-2 rounded-lg">
                525.6 kWh/year × $0.13/kWh = $68.33/year
              </p>
              <p className="text-gray-700">
                This calculation shows that the GEME Composter’s electricity
                cost amounts to approximately <strong>$68.33 per year</strong>.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                4. Conclusion
              </h3>
              <p className="text-gray-700">
                The annual operating cost of the GEME Composter, when
                considering only electricity usage, is relatively low at{' '}
                <strong>$68.33</strong>. This makes it an economical choice for
                those looking to reduce food waste and produce compost, all
                while maintaining low operating expenses.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Annual Electricity Cost Comparison
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr>
                    <th className="py-2 px-4 border-b border-gray-300 text-left text-sm font-semibold text-gray-700">
                      Device
                    </th>
                    <th className="py-2 px-4 border-b border-gray-300 text-left text-sm font-semibold text-gray-700">
                      Daily Energy Consumption (kWh)
                    </th>
                    <th className="py-2 px-4 border-b border-gray-300 text-left text-sm font-semibold text-gray-700">
                      Annual Energy Consumption (kWh)
                    </th>
                    <th className="py-2 px-4 border-b border-gray-300 text-left text-sm font-semibold text-gray-700">
                      Average Electricity Cost ($/kWh)
                    </th>
                    <th className="py-2 px-4 border-b border-gray-300 text-left text-sm font-semibold text-gray-700">
                      Annual Electricity Cost ($)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-gray-50">
                    <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                      GEME Composter
                    </td>
                    <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                      1.44
                    </td>
                    <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                      525.6
                    </td>
                    <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                      $0.13
                    </td>
                    <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                      $68.33
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                      Refrigerator
                    </td>
                    <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                      1.5
                    </td>
                    <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                      547.5
                    </td>
                    <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                      $0.13
                    </td>
                    <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                      $71.18
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                      Air Conditioner
                    </td>
                    <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                      5.0 (during summer)
                    </td>
                    <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                      600
                    </td>
                    <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                      $0.13
                    </td>
                    <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                      $78.00
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </>
      ),
    },

    {
      slug: 'when-will-it-be-on-sale? and-what-is-the-price',
      question: 'When will it be on sale? and what is the price?',
      answer: `The final testing is almost complete, and the estimated timeline for sale is early next year. The price less than $600.`,
    },
  ],
}

// subscribe
const subscribeProps: ISubscribeProps = {
  title: 'Subscribe to our newsletter.',
  description: `Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing velit quis. Duis tempor incididunt dolore.`,
  productImage: '/assets/images/geme-v2-product/geme-v2-1-color.png',
  inputPlaceholder: 'Enter your email',
  submitButtonLabel: 'Notify Me',
}

export interface IGemeV2PageProps {
  SubscribeComponent?: FC<ISubscribeComponent>
}

export function GemeV2PageEn({ SubscribeComponent }: IGemeV2PageProps) {
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
      <Faq {...faqProps} />
      <Subscribe {...subscribeProps} SubscribeComponent={SubscribeComponent} />
    </>
  )
}
