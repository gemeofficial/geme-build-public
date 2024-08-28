import { IShortVideoProps, ShortVideo } from 'ui'
import HeroSection from './components/HeroSection'
import DownLoadMediaKit from './components/DownLoadMediaKit'
import HignLightBar from './components/HignLightBar'

// Section2
const imageTextProps: IShortVideoProps = {
  title: 'IFA Berlin',
  description: (
    <>
      <p>
        Leif Lindner is the appointed new CEO of IFA Management GmbH since 1
        October 2023. This move highlights the company’s focus on long-term
        planning and innovation in the trade show industry. Leif Lindner’s
        extensive industry knowledge, sales experience, and leadership skills
        will strengthen IFA’s position as the leading global trade show.
      </p>
      <p className="mt-4">
        Leif Lindner brings more than 25 years of industry expertise, including
        a significant tenure at Samsung Electronics Germany. His experience in
        multicultural settings and his wide industry network is a valuable
        assets in his role as Managing Director.
      </p>
    </>
  ),
  imageUrl: '/assets/images/ifa/hero-bg.png',
  imageAlt: '',
  isReverse: true,
}

export function MediaKitPageEn() {
  return (
    <>
      <div className="bg-[#F4EDE4] mb-14">
        <HeroSection />
      </div>
      {/* <ShortVideo {...imageTextProps} compact /> */}
      <DownLoadMediaKit />
      {/* <HignLightBar /> */}
    </>
  )
}
