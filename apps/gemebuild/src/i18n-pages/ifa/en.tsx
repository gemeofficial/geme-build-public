import {
  IFAHeroSection,
  IIFAHeroSectionProps,
  IWinnersNamesTickerProps,
  WinnersNamesTicker,
} from 'ui'

import { ILinkComponent } from '../../contexts/link-context'
import { winnersNames } from './winnersNames'
import VideoList, { IVideoListProps } from 'ui/src/ifa/VideoList'

export interface IIFAPageProps {
  PrefetchLink?: ILinkComponent
}

const videoListProps: IVideoListProps = {
  title: 'Video List',
  videoList: [
    {
      poster: '/assets/images/home-v2311/hero-blurred.webp',
      src: 'https://www-geme-bio-us.s3.us-west-1.amazonaws.com/hero-banner-window-video-19s-480p.mp4',
    },
    {
      poster: '/assets/images/home-v2311/hero-blurred.webp',
      src: 'https://www-geme-bio-us.s3.us-west-1.amazonaws.com/hero-banner-window-video-19s-480p.mp4',
    },
    {
      poster: '/assets/images/home-v2311/hero-blurred.webp',
      src: 'https://www-geme-bio-us.s3.us-west-1.amazonaws.com/hero-banner-window-video-19s-480p.mp4',
    },
  ],
}

// 中奖名单
const winnersNamesTickerProps: IWinnersNamesTickerProps = {
  title: 'The winners are',
  winnersNames,
}

const IFAHeroSectionProps: IIFAHeroSectionProps = {
  bgImageUrl: '/assets/images/ifa/hero-bg.png',
  prizeImage: '/assets/images/geme-kobold/product-image-24.jpg',
  noticeTitle: 'Notice Of Exhibition',
  exhibitionTitle: (
    <>
      <div className="hidden 2xl:block font-semibold">
        <div className="text-xl md:text-2xl 3xl:text-5xl pt-10 text-[#45b83d]">
          GEME
        </div>
        <div className="text-xl md:text-2xl 3xl:text-5xl ml-[30%] text-v2311-text-yellow">
          In
        </div>
        <div className="text-xl md:text-2xl 3xl:text-5xl ml-[50%] text-[#eda152]">
          <span>IFA</span>
          <span className="text-lg block">Exhibition</span>
        </div>
      </div>
      <div className="2xl:hidden jtext-xl md:text-2xl 3xl:text-5xl mt-3 md:pt-5 lg:pt-10 text-[#F89B3F]">
        GEME In IFA Exhibition
      </div>
    </>
  ),
  ifaExhibitionDate: 'IFA Berlin 6-10 September 2024',
  location: 'Location: Messe Berlin',
  activityTitle: 'Activity',
  activityDescription:
    'In the run-up to IFA, GEME is hosting one Lucky draw, click the link to participate!',
  activitySteps:
    'The specific steps are: upload a video of you using the GEME compost machine in your daily life to us, and you will have the opportunity to receive a 180-day dose of Kobold provided by GEME.',
  immediateParticipationButton: 'Immediate participation',
  countdownTitle: 'Countdown to the lottery',
  winningProbabilityTitle: 'Your current probability of winning is:',
  sampleVideoTitle: 'Sample video',
  descriptionText:
    'Description: 1/N, N means there are currently N people participating in the activity, the earlier you participate, the greater your chance of winning!',
  winners: 'The winners are',
  locale: 'en',
}

function IFAPageEn({ PrefetchLink }: IIFAPageProps) {
  return (
    <>
      <IFAHeroSection {...IFAHeroSectionProps} PrefetchLink={PrefetchLink} />
      <VideoList
        videoListProps={videoListProps}
        winnersNamesTickerProps={winnersNamesTickerProps}
      />
    </>
  )
}

export { IFAPageEn }
