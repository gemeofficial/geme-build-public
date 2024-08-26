import { FC } from 'react'
import { ILinkComponent } from '../../contexts/link-context'
import { IHeroSectionVideo } from 'ui/src/hero-section-video'
import HeroSection, { IHeroSectionProps } from './components/HeroSection'

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

export function GemeV2PageEn({
  PrefetchLink,
  SubscribeComponent,
}: IGemeV2PageProps) {
  return (
    <>
      <HeroSection {...heroSectionProps} />
    </>
  )
}
