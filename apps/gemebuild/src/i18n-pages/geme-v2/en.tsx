import { FC } from 'react'
import { ILinkComponent } from '../../contexts/link-context'
import { IHeroSectionVideo } from 'ui/src/hero-section-video'
import HeroSection, { IHeroSectionProps } from './components/HeroSection'
import LogoCloud, { ILogoCloudProps } from './components/LogoCloud'
import { IShortVideoProps, ShortVideo } from 'ui'

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
    </>
  )
}
