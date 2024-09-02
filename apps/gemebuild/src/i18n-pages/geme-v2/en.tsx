import { FC } from 'react'
import { ILinkComponent } from '../../contexts/link-context'
import HeroSection, { IHeroSectionProps } from './components/HeroSection'
import LogoCloud, { ILogoCloudProps } from './components/LogoCloud'
import { IShortVideoProps, ShortVideo } from 'ui'
import Reviews, { IReviewsProps } from './components/Reviews'
import Faq, { IFaqProps } from './components/Faq'
import Subscribe, {
  ISubscribeComponent,
  ISubscribeProps,
} from './components/Subscribe'

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
    'https://www-geme-bio-us.s3.us-west-1.amazonaws.com/geme-genereate-compost-12s-480p.mp4',
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
  imageUrl: '/assets/images/pdp-v2311/introduction/geme-composter-size-v2.jpeg',
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
  imageUrl: '/assets/images/pdp-v2311/introduction/no-filters.jpg',
  imageAlt: '',
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
      slug: 'what-is-geme',
      question: 'How it works?',
      answer: (
        <>
          <h4>
            ✅ <strong>Simulate compost pile in a box</strong>, ❌
            <del>not dehydrate and heat</del>
          </h4>
          GEME Composters are all home appliances provide and maintain{' '}
          <strong>an ideal environment</strong> for GEME's special microbes(GEME
          Kobold) to break down the bio waste. Terra 2 works in the same
          principle.
          <br />
          <ul>
            <li>
              <strong>The machine</strong>: Simulates a compost pile in a
              container, make sure it will not smell.
              <br />
              <img src="/assets/images/how-it-works/how-geme-composter-works.jpg" />
            </li>
            <li>
              <strong>The Kobold</strong>: Microbes handle the majority of the
              workload. They reproduce quickly and absorb energy from the food
              waste. Just like worms eat food, microbes also consume food waste.
              Both produce compost.
              <img src="/assets/images/geme-v2/microbes-grow.png" />
              Bacteria reproduce primarily by binary fission, Under ideal
              conditions, some bacterial species may divide every 10–15
              minutes—a doubling of the population at these time intervals.
            </li>
          </ul>
        </>
      ),
    },
    {
      slug: 'what-s-bio-waste',
      question: 'What is the difference between GEME One?',
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
                    {`$300 < x < $600`}
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
                    Days to Fill up
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
      slug: 'what-s-bio-waste',
      question:
        'What is the difference between other electric composters like Lomi?',
      answer: ``,
    },
    // {
    //   slug: 'can-I-add-food-waste-when-it-is-running',
    //   question: 'Can I add food waste when it is running?',
    //   answer: ``,
    // },
    {
      slug: 'what-s-bio-waste',
      question: 'What kinds of food waste can I put?',
      answer: ``,
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
      answer: ``,
    },
    {
      slug: 'what-is-the-electricity-cost',
      question: 'Is it smell? How often should I replace the carbon filter?',
      answer: ``,
    },

    {
      slug: 'what-is-the-electricity-cost',
      question: 'How often should I clean the bin?',
      answer: ``,
    },

    {
      slug: 'what-is-the-price',
      question: 'What is the maintenance cost for keep the unit?',
      answer: ``,
    },

    {
      slug: 'what-is-the-price',
      question: 'When will it be on sale? and what is the price?',
      answer: ``,
    },

    //--
    // {
    //   slug: 'why-is-short-time-composting-possible',
    //   question: 'What kinds of food waste can not put',
    //   answer: `
    //     <img
    //       src="/assets/images/faq/why-is-short-time-composting-possible.png"
    //       alt="short-time composting is possible"
    //     />
    //     Unlike previous facilities that call themselves fast composters,
    //     GEME replicates the entire process of natural composting,
    //     accelerating the decomposition of bio-waste by providing a more
    //     suitable environment for the microbiota to multiply and decompose.
    //     <br />
    //     GEME-Kobold is the world's only proven high-temperature resistant
    //     microbial complex from nature, and it is this microbial complex
    //     that plays a key role in composting.
    //     <br />
    //     Therefore, GEME not only achieves short composting times, but
    //     because of GEME-Kobold, the compost has high activity and high
    //     nutritional value.
    //   `,
    // },
    // {
    //   slug: 'can-food-waste-be-composted',
    //   question: 'Can food waste be composted?',
    //   answer: `Yes, it is possible. Unlike traditional garden composting, GEME was designed for food waste! Food waste is rich in protein and is one of the best sources of input for composting. So let your little GEME help you eat the greasy leftovers and produce organic fertilizer! Tip: Remember to drain the vegetable broth, too wet environment is not conducive to composting, although the GEME can automatically sense dehumidification, but the effort to save a little energy consumption, is not a good thing!`,
    // },
    // {
    //   slug: 'is-it-possible-to-avoid-the-use-of-microbiome',
    //   question: 'Is it possible to avoid the use of microbiome?',
    //   answer: `
    //     The essence of composting is a dynamic process achieved by the
    //     interaction of multiple microbial communities with very rapid
    //     community structure succession. The initial heating and high
    //     temperature stage can play a role in killing harmful substances
    //     such as pathogenic pathogens, insect eggs, weed seeds, etc., but
    //     the main role of microorganisms in this process also includes
    //     metabolism and reproduction, while producing a small amount of
    //     metabolites, which are neither stable nor easy to be absorbed by
    //     plants; after the cooling and decomposition period in the late
    //     stage of composting, microorganisms will carry out the
    //     humification of organic matter, and in this process produce a
    //     large number of metabolites that are beneficial to plant growth
    //     and absorption. Therefore, traditional composting generally takes
    //     4-6 months.
    //     <br />
    //     No microorganism in nature can establish an effective and stable
    //     microbial population within 24 hours, and the minimum incubation
    //     time is generally 48-72 hours, which refers to the process of
    //     adapting microorganisms to the new environment at the beginning of
    //     composting, that is, the process of domestication. After the end
    //     of the domestication process, it enters the middle temperature
    //     growth stage and the high temperature stage, which represents the
    //     settlement of microorganisms in the reactor and the initiation of
    //     the degradation process. Therefore, if the microbiota is not
    //     added, then after drying and dehydrating through the equipment in
    //     24 hours or even less, only the charred and dehydrated garbage is
    //     obtained, not organic fertilizer. This is also the biggest
    //     difference between GEME and other short-term waste drying
    //     processors.
    //     <br />
    //     So the microbiome must be added.
    //   `,
    // },
    // {
    //   slug: 'can-geme-kobold-regenerate',
    //   question: 'Can GEME-Kobold regenerate?',
    //   answer: `GEME-Kobold is a highly regenerative microbiota. But don't forget
    // that after rapid composting, the organic fertilizer produced is only
    // 5% of the volume of biological waste that was originally put in, and
    // if a large amount of biological waste is continuously poured after
    // this, the effect and speed of decomposition must be affected. So we
    // recommend that you add GEME-Kobold in a very small amount every two
    // weeks, and only 20g can keep your GEME-Kobold permanently active.`,
    // },
    // {
    //   slug: 'how-long-will-it-take-for-geme-to-turn-my-food-waste-into-compost',
    //   question:
    //     'How long will it take for GEME to turn my food waste into compost?',
    //   answer: `It has been experimentally determined that more than 380 kinds of
    // biological waste can be rapidly decomposed in GEME within 6-8 hours.
    // If you break up your waste as much as possible, the increased
    // surface area will result in faster decomposition.`,
    // },
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
  PrefetchLink?: ILinkComponent
  SubscribeComponent?: FC<ISubscribeComponent>
}

export function GemeV2PageEn({
  PrefetchLink,
  SubscribeComponent,
}: IGemeV2PageProps) {
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

      <Reviews {...reviewsProps} />
      <Faq {...faqProps} />
      <Subscribe {...subscribeProps} SubscribeComponent={SubscribeComponent} />
    </>
  )
}
