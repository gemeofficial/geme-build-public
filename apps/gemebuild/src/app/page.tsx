import { HeroSection1 } from 'ui'
import type { IHeroSection1Props } from 'ui'
import Link from 'next/link'

const heroSection1Props: IHeroSection1Props = {
  title: (
    <>
      <span className="hidden xl:inline">
        World&apos;s First Bio Waste Composter
      </span>
      <span className="xl:hidden">World&apos;s First Bio Waste Composter</span>
    </>
  ),
  description: (
    <>
      <span className=" hidden xl:inline ">
        Meet GEME, the modern electric composter for home
        <br />
        Turn your daily food waste into organic compost
        <br />
        Less landfill, more garden soil.
      </span>
      <span className=" xl:hidden ">
        Meet GEME, the modern electric home composter <br />
        Turn your daily food waste into organic compost
        <br />
        Less landfill, more gardening.
      </span>
    </>
  ),
  linkText: 'Shop Now',
  linkUrl: '/product/geme',
  LinkComponent: Link,
  videoProps: {
    sources: [
      // for pc
      {
        minWidth: 1280,
        src: 'https://public-assest-434759801795.s3.us-west-1.amazonaws.com/geme-bio-home-hero-backgruond-video-1080p.mp4',
        playbackId: 'PHDmho81odHhv3yvvm4WLQjqUFpKqwAR01gJwEVEUcXo',
        posterUrl: '/assets/images/home-v2311/hero-blurred.jpg',
      },
      // for mobile/tablet
      {
        minWidth: 0,
        src: 'https://public-assest-434759801795.s3.us-west-1.amazonaws.com/geme-bio-home-background-video-no-sound-480p.mp4',
        playbackId: 'WcYd7fIP97ciG1zR5Hkq9dEmqLeQpsoX5iIZdMQn8Lc',
        posterUrl: '/assets/images/home-v2311/hero-blurred.jpg',
      },
    ],
  },
}
export default function Home() {
  return <HeroSection1 {...heroSection1Props} />
}
