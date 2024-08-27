import HeroSection, { IHeroSectionProps } from './components/HeroSection'
import LogoCloud, { ILogoCloudProps } from './components/LogoCloud'
import { IShortVideoProps, ShortVideo } from 'ui'
import Reviews, { IReviewsProps } from './components/Reviews'
import Faq, { IFaqProps } from './components/Faq'
import Subscribe, { ISubscribeProps } from './components/Subscribe'
import { IGemeV2PageProps } from './en'

// Hero section
const heroSectionProps: IHeroSectionProps = {
  title: 'GEME V2 Product Upcoming release',
  description:
    'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.',
  fullScreenVideoUrl: 'https://www.youtube.com/embed/ROJYZBp0jcM',
  videoProps: {
    src: 'https://www-geme-bio-us.s3.us-west-1.amazonaws.com/hero-banner-window-video-19s-480p.mp4',
    posterUrl: '/assets/images/home-v2311/hero-blurred.webp',
  },
  inputPlaceholder: 'Enter your email',
  submitButtonLabel: 'Notify Me',
}

// Logo cloud
const logoCloudProps: ILogoCloudProps = {
  images: [
    {
      src: 'https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg',
      alt: 'Transistor',
    },
    {
      src: 'https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg',
      alt: 'Reform',
    },
    {
      src: 'https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg',
      alt: 'Tuple',
    },
    {
      src: 'https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg',
      alt: 'SavvyCal',
    },
    {
      src: 'https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg',
      alt: 'Statamic',
    },
  ],
}

// 图文section1
const shortVideoProps: IShortVideoProps = {
  title: 'Compost Pile in A Box',
  description: (
    <>
      <ul className="list-disc ml-4 mt-4">
        <li className="mt-4">
          <a href="product/geme">GEME Composter</a> quickly breaks down food
          scraps and pet waste using special microbes.
        </li>

        <li className="mt-4">
          The mixer increases the surface area of food waste for microbes to
          attach.
        </li>

        <li className="mt-4">
          It creates <strong>ideal environment for microbes</strong> to thrive
          and decompose waste.
        </li>

        <li className="mt-4">
          Similar to outdoor composting, but in a neat and convenient container.
        </li>
      </ul>
    </>
  ),
  videoPosterUrl: '/assets/images/home-v2311/use-compost-cover.jpg',
  videoSrcUrl:
    'https://www-geme-bio-us.s3.us-west-1.amazonaws.com/geme-genereate-compost-12s-480p.mp4',
}

// 图文section2
const imageTextProps: IShortVideoProps = {
  title: 'Microbes, Not Dehydrate',
  description: (
    <>
      <p>
        Many food dehydrator machines are marketed misleadingly as composters.
        However, they are simply bread makers that cook and dehydrate food, not
        actually composting it.
      </p>
      <p>These dehydrators use electricity to heat and dry food scraps.</p>
      <hr className="mt-4 mb-4" />
      <p>
        In contrast, the GEME Composter utilizes{' '}
        <a href="/geme-kobold">GEME Kobold</a> to accelerate the composting
        process.
      </p>
      <p>
        It uses electricity to{' '}
        <strong>simulate and maintain the optimal environment</strong>, for
        microbes to thrive, effectively breaking down organic waste.
      </p>
    </>
  ),
  imageUrl: '/assets/images/pdp-v2311/introduction/geme-composter-size-v2.jpeg',
  isReverse: true,
}

// 图文section3
const imageTextProps2: IShortVideoProps = {
  title: 'Microbes, Not Dehydrate',
  description: (
    <>
      <p>
        Many food dehydrator machines are marketed misleadingly as composters.
        However, they are simply bread makers that cook and dehydrate food, not
        actually composting it.
      </p>
      <p>These dehydrators use electricity to heat and dry food scraps.</p>
      <hr className="mt-4 mb-4" />
      <p>
        In contrast, the GEME Composter utilizes{' '}
        <a href="/geme-kobold">GEME Kobold</a> to accelerate the composting
        process.
      </p>
      <p>
        It uses electricity to{' '}
        <strong>simulate and maintain the optimal environment</strong>, for
        microbes to thrive, effectively breaking down organic waste.
      </p>
    </>
  ),
  imageUrl: '/assets/images/pdp-v2311/introduction/no-filters.jpg',
}

// Reviews
const reviewsProps: IReviewsProps = {
  featuredTestimonial: {
    body: 'I went to internet and looked more and found out yours and the adertising says that it is bio composter and saw videos and at last i found yours i loved it. I want to buy my composters !  I am ready for 2 more now. Maybe the three.',
    author: {
      name: 'LAE. Angeles Delgado',
      role: 'Finance CEO',
      imageUrl:
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
            imageUrl:
              '/assets/images/pdp-v2311/user-stories/user-stories-rainforest.jpg',
          },
        },
        {
          body: 'I REALLY love this product. We have used it a lot and look forward to seeing the garden this year, which we have supplemented with Geme compost!',
          author: {
            name: 'Michael R.',
          },
        },
        {
          body: 'We have order a second one. Our family cannot live without this machine',
          author: {
            name: 'Robert G.',
          },
        },
        {
          body: 'I was very surprised to see the waste from dinner was almost completely composted by this morning.',
          author: {
            name: 'Canada Buyer',
          },
        },

        // More testimonials...
      ],
      [
        {
          body: 'this composter has changed my kitchen habits for the better.',
          author: {
            name: 'Ethel M H.',
          },
        },
        {
          body: 'This method is amazing. I used to have an outdoor compost. This is such a great upgrade.',
          author: {
            name: 'Sotoko',
          },
        },
        {
          body: 'I am living in the US and really like my GEME. I would love to order another on for my sister in Australia.',
          author: {
            name: 'Willi S.',
          },
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
        },
        {
          body: 'We have used the compost now to fertilize our fruit plants and trees earlier this season, and there was definitely an explosion of growth after that.',
          author: {
            name: 'Brian M.',
          },
        },
        {
          body: 'En passant, je suis très satisfait du GEME.',
          author: {
            name: 'Louis T.',
          },
        },
        // More testimonials...
      ],
      [
        {
          body: `I always wanted to get involved more & more in everything around me for one better sustainable life and this is why I really wanted to get so much GEME. It combines everything you need for an easier worry-stress free life. Totally recommend it to all my surroundings!`,
          author: {
            name: 'Vasil Borukov',
            role: 'Senior IT Support Engineer',
            imageUrl:
              '/assets/images/pdp-v2311/user-stories/user-stories-vasil.png',
          },
        },
        {
          body: 'I never imagined anything could break down the matter so quickly. And all of those conerns about "smelly"? I have no such problem',
          author: {
            name: 'Greer',
          },
        },
        {
          body: 'Yesterday I put mozzarrella balls and shredded carrots and eggshells - gone like magic',
          author: {
            name: 'Elilyn',
          },
        },
        // More testimonials...
      ],
    ],
  ],
}

// Faqs
const faqProps: IFaqProps = {
  title: 'Frequently asked questions',
  description: '',
  faqs: [
    {
      slug: 'what-is-geme',
      question: 'What is GEME?',
      answer: `
        GEME is your little helper for an easy home!
        <br />
        No more smelly, leaking garbage, puffing fruit flies, yard full of
        mice, maggots in the yard waste bin or throwing away food scraps
        to rot in the landfill.
        <br />
        With GEME, you will be able to turn your waste into nutrient-rich
        organic compost.
        <br />
        Revolutionize the way you dispose of your waste while returning
        nutrient-rich soil to the earth.
    `,
    },
    {
      slug: 'what-s-bio-waste',
      question: 'What’s bio-waste?',
      answer: `Bio-waste is defined as biodegradable garden and park waste, food and kitchen waste from households, restaurants, caterers and retail premises, and comparable waste from food processing plants. Because GEME-Kobold is a microorganism from nature, it is capable of breaking down most biological waste. For GEME, you can simply understand that GEME can rapidly handle everything you can eat and your little pet's poop.`,
    },
    {
      slug: 'why-is-short-time-composting-possible',
      question: 'Why is short-time composting possible?',
      answer: `
        <img
          src="/assets/images/faq/why-is-short-time-composting-possible.png"
          alt="short-time composting is possible"
        />
        Unlike previous facilities that call themselves fast composters,
        GEME replicates the entire process of natural composting,
        accelerating the decomposition of bio-waste by providing a more
        suitable environment for the microbiota to multiply and decompose.
        <br />
        GEME-Kobold is the world's only proven high-temperature resistant
        microbial complex from nature, and it is this microbial complex
        that plays a key role in composting.
        <br />
        Therefore, GEME not only achieves short composting times, but
        because of GEME-Kobold, the compost has high activity and high
        nutritional value.
      `,
    },
    {
      slug: 'can-food-waste-be-composted',
      question: 'Can food waste be composted?',
      answer: `Yes, it is possible. Unlike traditional garden composting, GEME was designed for food waste! Food waste is rich in protein and is one of the best sources of input for composting. So let your little GEME help you eat the greasy leftovers and produce organic fertilizer! Tip: Remember to drain the vegetable broth, too wet environment is not conducive to composting, although the GEME can automatically sense dehumidification, but the effort to save a little energy consumption, is not a good thing!`,
    },
    {
      slug: 'is-it-possible-to-avoid-the-use-of-microbiome',
      question: 'Is it possible to avoid the use of microbiome?',
      answer: `
        The essence of composting is a dynamic process achieved by the
        interaction of multiple microbial communities with very rapid
        community structure succession. The initial heating and high
        temperature stage can play a role in killing harmful substances
        such as pathogenic pathogens, insect eggs, weed seeds, etc., but
        the main role of microorganisms in this process also includes
        metabolism and reproduction, while producing a small amount of
        metabolites, which are neither stable nor easy to be absorbed by
        plants; after the cooling and decomposition period in the late
        stage of composting, microorganisms will carry out the
        humification of organic matter, and in this process produce a
        large number of metabolites that are beneficial to plant growth
        and absorption. Therefore, traditional composting generally takes
        4-6 months.
        <br />
        No microorganism in nature can establish an effective and stable
        microbial population within 24 hours, and the minimum incubation
        time is generally 48-72 hours, which refers to the process of
        adapting microorganisms to the new environment at the beginning of
        composting, that is, the process of domestication. After the end
        of the domestication process, it enters the middle temperature
        growth stage and the high temperature stage, which represents the
        settlement of microorganisms in the reactor and the initiation of
        the degradation process. Therefore, if the microbiota is not
        added, then after drying and dehydrating through the equipment in
        24 hours or even less, only the charred and dehydrated garbage is
        obtained, not organic fertilizer. This is also the biggest
        difference between GEME and other short-term waste drying
        processors.
        <br />
        So the microbiome must be added.
      `,
    },
    {
      slug: 'can-geme-kobold-regenerate',
      question: 'Can GEME-Kobold regenerate?',
      answer: `GEME-Kobold is a highly regenerative microbiota. But don't forget
    that after rapid composting, the organic fertilizer produced is only
    5% of the volume of biological waste that was originally put in, and
    if a large amount of biological waste is continuously poured after
    this, the effect and speed of decomposition must be affected. So we
    recommend that you add GEME-Kobold in a very small amount every two
    weeks, and only 20g can keep your GEME-Kobold permanently active.`,
    },
    {
      slug: 'how-long-will-it-take-for-geme-to-turn-my-food-waste-into-compost',
      question:
        'How long will it take for GEME to turn my food waste into compost?',
      answer: `It has been experimentally determined that more than 380 kinds of
    biological waste can be rapidly decomposed in GEME within 6-8 hours.
    If you break up your waste as much as possible, the increased
    surface area will result in faster decomposition.`,
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

export function GemeV2PageFr({
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
