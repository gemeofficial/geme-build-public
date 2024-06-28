// page静态页面的内容 配置文件 En版

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
import { ShortVideo, IShortVideoProps } from 'ui/src/how-it-works/ShortVideo'
import { ILinkComponent } from '../../contexts/link-context'
import { FC } from 'react'

export interface IPdpIntroProps {
  ReviewsComponent: FC<{}>
  PrefetchLink?: ILinkComponent
}

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

const shortVideoProps2: IShortVideoProps = {
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
        <strong>simulate and maintain the optimal environment</strong>. for
        microbes to thrive, effectively breaking down organic waste.
      </p>
    </>
  ),
  imageUrl: '/assets/images/how-it-works/geme-vs-dehydrators.png',
  isReverse: true,
}

const inlinePlayerProps: IInlinePalyerType = {
  title: 'Seeing is Believing',
  description: (
    <>
      <strong>Breakdown 2kg waste in 7 hours</strong>! See the incredible speed
      for yourself. This unedited 7-hour video showcases the machines incredible
      speed in processing food waste. Witness the breakdown of nearly 2kg of
      food waste, a challenge no competitor has dared to publicly demonstrate.
      We believe customers deserve transparency, check the video at any
      timestamp if you doubt, although we will recommend you observe the first
      10 min and last 10 min will be good enough.
    </>
  ),

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

function HowItWorksEn({ ReviewsComponent }: IPdpIntroProps) {
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

export { HowItWorksEn }
