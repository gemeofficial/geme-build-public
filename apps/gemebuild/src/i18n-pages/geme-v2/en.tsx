import { FC } from 'react'
import { ILinkComponent } from '../../contexts/link-context'
import { IHeroSectionVideo } from 'ui/src/hero-section-video'
import HeroSection, { IHeroSectionProps } from './components/HeroSection'
import LogoCloud, { ILogoCloudProps } from './components/LogoCloud'
import { IShortVideoProps, ShortVideo } from 'ui'
import Reviews, { IReviewsProps } from './components/Reviews'

export interface IGemeV2PageProps {
  PrefetchLink?: ILinkComponent
  SubscribeComponent?: FC<{}>
}

const heroSectionProps: IHeroSectionProps = {
  title: 'GEME V2 Product Upcoming release',
  description:
    'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.',
  fullScreenVideoUrl: 'https://www.youtube.com/embed/ROJYZBp0jcM',
  videoProps: {
    src: 'https://www-geme-bio-us.s3.us-west-1.amazonaws.com/hero-banner-window-video-19s-480p.mp4',
    posterUrl: '/assets/images/home-v2311/hero-blurred.webp',
  },
}

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

export function GemeV2PageEn({
  PrefetchLink,
  SubscribeComponent,
}: IGemeV2PageProps) {
  return (
    <>
      <HeroSection {...heroSectionProps} />
      <LogoCloud {...logoCloudProps} />

      <ShortVideo {...shortVideoProps} compact />
      <ShortVideo {...imageTextProps} compact />
      <ShortVideo {...imageTextProps2} compact />
      <Reviews {...reviewsProps} />
    </>
  )
}
