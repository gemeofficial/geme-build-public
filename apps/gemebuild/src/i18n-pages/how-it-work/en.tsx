// about page静态页面的内容 配置文件 En版

import { CertificateSection, ExaminingReport, IInlinePalyerType, InlinePlayer, ReviewsScoreHeader, UseCompostContrast } from 'ui'
import { ShortVideo, IShortVideoProps } from 'ui/src/how-it-work/ShortVideo'
import { ILinkComponent } from '../../contexts/link-context'
import { FC } from 'react'

export interface IPdpIntroProps {
  ReviewsComponent: FC<{}>
  PrefetchLink?: ILinkComponent
}

const shortVideoProps: IShortVideoProps = {
  title: 'Der einfachste Weg, Kompost zu erhalten',
  description: (
    <>
      <p>no slow waiting time easy maintenance</p>
      <p>no mess and smell clean and odorless</p>
      <p>no need to turn over work in any weather</p>
    </>
  ),
  videoPosterUrl: '/assets/images/home-v2311/use-compost-cover.jpg',
  videoSrcUrl:
    'https://www-geme-bio-us.s3.us-west-1.amazonaws.com/geme-genereate-compost-12s-480p.mp4',
}

const shortVideoProps2: IShortVideoProps = {
  title: 'Der einfachste Weg, Kompost zu erhalten',
  description: (
    <>
      <p>no slow waiting time easy maintenance</p>
      <p>no mess and smell clean and odorless</p>
      <p>no need to turn over work in any weather</p>
    </>
  ),
  videoPosterUrl: '/assets/images/home-v2311/use-compost-cover.jpg',
  videoSrcUrl:
    'https://www-geme-bio-us.s3.us-west-1.amazonaws.com/geme-genereate-compost-12s-480p.mp4',
  isReverse: true,
}

const inlinePlayerProps: IInlinePalyerType = {
  title: 'Seeing is Believing',
  description:
    "See the incredible speed for yourself! This unedited 7-hour video showcases how quickly our machine works. Witness the breakdown of nearly 2kg of food waste – a feat none of our competitors dare to demonstrate publicly. We believe customers deserve transparency, even if it's not good looking and tedious.",
  type: 'youtube',
  videoSrcUrlOrVidioId: 'asNRoqkC_BA',
  mixpanelFrom: 'Product page inline player',
}

function HowItWorkEn({
  ReviewsComponent,
  PrefetchLink,
}: IPdpIntroProps) {
  return (
    <>
      <div className="py-8 lg:pt-6 lg:pb-16">
        <ShortVideo {...shortVideoProps} />
        <ShortVideo {...shortVideoProps2} />
        <CertificateSection />
        <ExaminingReport />
        <InlinePlayer {...inlinePlayerProps} />
        <div className="my-4">
          <ReviewsScoreHeader locale="en" />
        </div>
        <ReviewsComponent />
        <UseCompostContrast />
      </div>
    </>
  )
}

export { HowItWorkEn }
