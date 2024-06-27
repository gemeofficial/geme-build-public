// about page静态页面的内容 配置文件 En版

import {
  CertificateSection,
  ExaminingReport,
  ICertificateSectionProps,
  IExaminingReportProps,
  IInlinePalyerType,
  InlinePlayer,
  ReviewsScoreHeader,
  UseCompostContrast,
} from 'ui'
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

const certificateSectionProps: ICertificateSectionProps = {
  title: `Here's our certificate`,
  description: `Here's our certificate`,
  imgUrls: [
    'https://cdn.shopify.com/s/files/1/0602/9390/6640/files/certificate_1.jpg?v=1695770281',
    'https://cdn.shopify.com/s/files/1/0602/9390/6640/files/KakaoTalk_20221209_103729502-e4965f79-83ea-4ec3-8f91-2fcfae1530e7_452x.png?v=1695769669',
  ],
  subDescription: `We thank all of our GEME and we couldn't have continue supporting our ENCORE Initiative if it wasn't for all of you. We would like to take a step forward so that we can start practicing our love for the mother nature.`,
}

const examiningReportProps: IExaminingReportProps = {
  title: `GEME Fertilizer Has Been Tested And Surpassed Quality Standard.`,
  description: `The test results are as follow The test results are as follow The test results are as follow`,
  imgUrl:
    'https://cdn.shopify.com/s/files/1/0602/9390/6640/t/3/assets/remarkchart-1667521654065.jpg?v=1667521740',
  downloadHref: (
    <>
      Download Salt Level Breakdown Report Test{' '}
      <a
        href="https://cdn.shopify.com/s/files/1/0602/9390/6640/files/Salt_Breakdown_Report_Reencle.pdf?v=1674090924"
        target="_blank"
      >
        HERE
      </a>
    </>
  ),
}

const theoryImageProps: IExaminingReportProps = {
  title: `How the GEME composter works`,
  description: `How the GEME composter works How the GEME composter works How the GEME composter works`,
  imgUrl:
    'https://cdn.shopify.com/s/files/1/0602/9390/6640/t/3/assets/remarkchart-1667521654065.jpg?v=1667521740',
  downloadHref: (
    <>
      To Download Click{' '}
      <a
        href="https://cdn.shopify.com/s/files/1/0602/9390/6640/files/Salt_Breakdown_Report_Reencle.pdf?v=1674090924"
        target="_blank"
      >
        HERE
      </a>
    </>
  ),
}

function HowItWorkEn({ ReviewsComponent }: IPdpIntroProps) {
  return (
    <>
      <div className="py-8 lg:pt-6 lg:pb-16">
        <ShortVideo {...shortVideoProps} />
        <ShortVideo {...shortVideoProps2} />
        <InlinePlayer {...inlinePlayerProps} />
        <CertificateSection {...certificateSectionProps} />
        <ExaminingReport {...examiningReportProps} />
        <ExaminingReport {...theoryImageProps} />
        <UseCompostContrast />

        <div className="my-4">
          <ReviewsScoreHeader locale="en" />
        </div>
        <ReviewsComponent />
      </div>
    </>
  )
}

export { HowItWorkEn }
