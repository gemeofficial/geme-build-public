import HeroSection, { IHeroSectionProps } from './components/HeroSection'
import LogoCloud, { ILogoCloudProps } from './components/LogoCloud'
import { IShortVideoProps, ShortVideo } from 'ui'
import Reviews, { IReviewsProps } from './components/Reviews'
import Faq, { IFaqProps } from './components/Faq'
import Subscribe, { ISubscribeProps } from './components/Subscribe'
import Compare, { ICompareProps } from './components/Compare'
import { IGemeTerra2PageProps } from './en'

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
      alt: '',
    },
    // {
    //   title: 'Vitamix Food Cycler',
    //   imageUrl: '/assets/images/geme-terra-2/compare/vitamix.png',
    //   alt: '',
    // },
    {
      title: 'Airthereal',
      imageUrl: '/assets/images/geme-terra-2/compare/airthereal.png',
      alt: 'Airthereal Electric Kitchen Composter',
    },
    {
      title: 'Fylecen',
      imageUrl: '/assets/images/geme-terra-2/compare/fylecen.png',
      alt: 'Fylecen 4L Electric Composter',
    },
    {
      title: 'Moreborn',
      imageUrl: '/assets/images/geme-terra-2/compare/moreborn.png',
      alt: 'Moreborn composter',
    },
    {
      title: 'Mill',
      imageUrl: '/assets/images/compare-section/compare-section-mill.png',
      alt: 'Mill Composter',
    },
    {
      title: 'Soilkind',
      imageUrl: '/assets/images/geme-terra-2/compare/soilkind.png',
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
      question: 'How does it work?',
      answer: (
        <>
          <h4>
            ✅ <strong>Simulates a compost pile in a box</strong>, ❌
            <del>not just dehydration and heat</del>
          </h4>
          GEME Composters are home appliances that provide and maintain{' '}
          <strong>an ideal environment</strong> for {`GEME's`} special microbes
          (GEME Kobold) to break down bio-waste. Terra 2 works on the same
          principle.
          <br />
          <ul>
            <li>
              <strong>The Machine</strong>: It simulates a compost pile in a
              contained environment, ensuring that it will not smell.
              <br />
              <picture>
                <img
                  alt="How electric composter works"
                  src="/assets/images/how-it-works/how-geme-composter-works.jpg"
                />
              </picture>
            </li>
            <li>
              <strong>The Kobold</strong>: Microbes perform most of the work.
              They reproduce quickly and absorb energy from the food waste. Just
              like worms consume food, microbes break down waste and produce
              compost.
              <picture>
                <img
                  alt="How microbes grow"
                  src="/assets/images/geme-terra-2/microbes-grow.png"
                />
              </picture>
              Under ideal conditions, some bacterial species can divide every
              10–15 minutes, doubling the population at these intervals.
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
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">{`< $600`}</td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">{`$150 < x < $500`}</td>
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
                    Continuous composting
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Periodic grinding and dehydrating
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    End Result
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Real compost
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Dried and cooked waste
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
                    Wait for cycle to complete
                  </td>
                </tr>
                <tr>
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
                    Clean-up
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    No need to clean
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Easily clogged
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Days to Fill
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    45 days+
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">{`1 day`}</td>
                </tr>
                <tr>
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
                    Similar to a MacBook Pro
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    500W+ Power
                    <br />
                    Similar to an oven
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Space
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Floor, countertop
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Countertop only
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    How to Start
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Throw in and close the lid
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Align lid carefully
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
                <tr>
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
                    Supports Pet Waste
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    Yes
                  </td>
                  <td className="py-3 px-4 border-b border-gray-300 text-sm text-gray-700">
                    No
                  </td>
                </tr>
                <tr>
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
              Almost all food you eat can go into the GEME composter.
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
              It also supports liquid waste, like soup.
              <iframe
                className="w-full aspect-[16/9] self-stretch md:min-h-[500px]"
                src="https://www.youtube.com/embed/yGkcEaeXlQQ"
                frameBorder="0"
                title="Product Overview Video"
                aria-hidden="true"
              />
            </p>

            <p className="text-gray-700 text-lg leading-relaxed">
              It can also break down pet waste, such as dog poop and cat litter.
            </p>
            <picture>
              <img
                src="/assets/images/geme-terra-2/cat-litter.png"
                alt="GEME Composter Supported Pet Waste"
              />
            </picture>
          </div>
        </>
      ),
    },
    {
      slug: 'how-long-will-it-take-for-geme-to-turn-my-food-waste-into-compost',
      question: 'How long will it take to turn my food waste into compost?',
      answer: (
        <>
          For most daily leftovers, it takes around 6 to 8 hours to break down
          the waste.
          <br />
          Check out this uncut 7-hour video. (
          <b className="text-gray-500">
            none of our competitors dare to share such live videos with the
            public
          </b>
          )
          <iframe
            className="w-full aspect-[16/9] self-stretch md:min-h-[500px]"
            src="https://www.youtube.com/embed/asNRoqkC_BA"
            frameBorder="0"
            title="GEME breaks down food waste in 7 hours - uncut video"
            aria-hidden="true"
          />
          However, for certain food waste, like orange peels, it will take
          slightly longer due to their tough fibers. Small bones take even more
          time.
          <picture>
            <img
              src="https://www.geme.bio/help-center/assets/images/supported-foodwaste-guide-055cef03c7c375f24ce99e1625de5d6f.png"
              alt="GEME Composter Supported Food Waste"
            />
          </picture>
          <strong>Note:</strong> While it takes a few hours or days to break
          down into compost, this is not yet finished compost. We recommend
          waiting at least 45 days before using it. Alternatively, you can mix
          the unfinished compost with soil at a 1:8 ratio to grow your plants.
        </>
      ),
    },
    {
      slug: 'is-it-smell-how-often-should-i-replace-the-carbon-filter',
      question: 'Does it smell? How often should I replace the carbon filter?',
      answer: (
        <>
          <div>
            {`It doesn't smell`} because it uses{' '}
            <strong>metal ion catalytic oxidation</strong> technology to
            neutralize odors. Unlike traditional composters,{' '}
            {`it doesn't use
            carbon filters, so there's no need to replace them. The filter is
            designed to last a lifetime.`}
          </div>
          <div className="container mx-auto p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-md">
                <picture>
                  <img
                    src="/assets/images/geme-terra-2/odor/1.jpg"
                    alt="Photocatalyst UV Layer"
                    className="w-full h-auto rounded-t-lg"
                  />
                </picture>
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2">Layer 1</h2>
                  <p className="text-gray-700">
                    Photocatalyst and UV light that eliminate harmful bacteria.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md">
                <picture>
                  <img
                    src="/assets/images/geme-terra-2/odor/2.jpg"
                    alt="Metal Ion Oxidation Layer"
                    className="w-full h-auto rounded-t-lg"
                  />
                </picture>
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2">Layer 2</h2>
                  <p className="text-gray-700">
                    Metal ion catalytic oxidation process.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md">
                <picture>
                  <img
                    src="/assets/images/geme-terra-2/odor/3.jpg"
                    alt="Aerobic Air Exchange Layer"
                    className="w-full h-auto rounded-t-lg"
                  />
                </picture>
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2">Layer 3</h2>
                  <p className="text-gray-700">
                    A powerful aerobic air exchange system for odor control.
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
          Technically, there is no need to clean the bin. It may not look great,
          and there might be a slight odor when you open the lid, but once the
          lid is closed, it remains clean and odorless. <br />
          The real question you might want to ask is: How often should I harvest
          the compost?
          <div className="container mx-auto p-6">
            <h5 className="text-xl font-semibold text-gray-800 mb-4">
              {`Don't exceed the full limit line`}
            </h5>
            <p className="text-gray-700 mb-6">
              This is a hard limit. If it gets full, remove the compost as soon
              as possible.
            </p>

            <h5 className="text-xl font-semibold text-gray-800 mb-4">
              Do not empty all of the compost
            </h5>
            <p className="text-gray-700 mb-6">
              Every time you remove compost, leave some at the base so that the
              bacteria in the GEME Kobold can reproduce and continue processing
              new food waste.
              <strong className="text-v2311-primary">
                Keep the compost level aligned with the agitator shaft.
              </strong>
            </p>

            <h5 className="text-xl font-semibold text-gray-800 mb-4">
              Recommended: Remove compost when the paddle is fully buried
            </h5>
            <p className="text-gray-700 mb-6">
              Look for the yellow line in the picture below. This is a best
              practice that allows you to collect compost more efficiently while
              reducing the machine’s workload, helping to extend its lifespan.
            </p>
          </div>
          <picture>
            <img
              src="/assets/images/geme-terra-2/harvest-compost/best-practice-removal.png"
              alt="Best practice to remove GEME compost"
            />
          </picture>
        </>
      ),
    },

    {
      slug: 'what-is-the-maintenance-cost-for-keep-the-unit',
      question: 'What is the maintenance cost to keep the unit?',
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
      question: 'When will it go on sale, and what will the price be?',
      answer: `he final testing is almost complete, and the estimated timeline for sales is early next year. The price will be less than $600.`,
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

export function GemeTerra2PageFr({ SubscribeComponent }: IGemeTerra2PageProps) {
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
