import {
  IFAHeroSection,
  IIFAHeroSectionProps,
  ISubscribeGemeV2Props,
  IWinnersNamesTickerProps,
  SubscribeGemeV2,
  WinnersNamesTicker,
} from 'ui'

import { ILinkComponent } from '../../contexts/link-context'
import { winnersNames } from './winnersNames'
import VideoList, { IVideoList, IVideoListProps } from 'ui/src/ifa/VideoList'
import { FC } from 'react'

// Hero Section  En
const IFAHeroSectionProps: IIFAHeroSectionProps = {
  bgImageUrl: '/assets/images/ifa/hero-bg.png',
  prizeImage: '/assets/images/geme-kobold/product-image-24.jpg',
  gemeLogo: '/assets/images/ifa/white-logo.png',
  ifaLogo: '/assets/images/ifa/ifa-berlin-seeklogo.png',
  noticeTitle: 'Notice Of Exhibition',
  ifaExhibitionDate: 'GEME at IFA Berlin, September 6-10, 2024',
  prizeDesc: 'Win a 180-day supply of Kobold Now!',
  activityTitle: 'Activity',
  activityDescription: `In the lead-up to IFA, EME is hosting a lucky draw. Simply click
the link and upload a video showing how you use the GEME
compost machine daily. The sooner you enter, the better
your chances of winning a 180-day supply of Kobold!`,
  buttonText: 'Submit Your Video!',
  countdownTitle: 'Countdown to the next draw :',
  winningProbabilityTitle: 'Current probability of winning:',
  prizeImageTitle: 'What You could win',
  sampleVideoTitle: 'Vidoo Submission ldeas',
  descriptionText:
    'Description: 1/N, N means there are currently N people participating in the activity, the earlier you participate, the greater your chance of winning!',
  locale: 'en',
}

// 视频列表   En
const videoListProps: IVideoList = {
  title: 'Video List',
  description:
    'Here are some of the videos uploaded by our award-winning users and how they interact with GEME in their daily lives.',
  linkText: 'load more',
  fromText: 'From',
  useTimeText: 'Duration of use',
  emptyTexy:
    'The video list data will be displayed after this drawing, please wait patiently.',
  videoList: [
    {
      // poster: '/assets/images/home-v2311/hero-blurred.webp',
      src: 'https://www-geme-bio-us.s3.us-west-1.amazonaws.com/user-videos/ifa-page-user-video-1.mp4',
      from: 'MN',
      useTime: 'Nine months',
    },
    {
      // poster: '/assets/images/home-v2311/hero-blurred.webp',
      src: 'https://www-geme-bio-us.s3.us-west-1.amazonaws.com/user-videos/ifa-page-user-video-2.mp4',
      from: 'OH',
      useTime: 'Ten months',
    },
  ],
}

// 中奖名单  En
const winnersNamesTickerProps: IWinnersNamesTickerProps = {
  title: 'The winners are',
  winnersNames,
  linkText: 'view more',
}

const subscribeGemeV2Props = {
  title: 'Join the GEME II waiting list',
  description: (
    <>
      A new approach to the world&apos;s waste problem begins with each of us,
      effortless in daily life
    </>
  ),
  emailPlaceholder: 'Enter your email',
  submitButtonLabel: 'Subscribe',
}

export interface IIFAPageProps {
  PrefetchLink?: ILinkComponent
  SubscribeComponent?: FC<{
    inputPlaceholder: string
    submitButtonLabel: string
  }>
}

function IFAPageEn({ PrefetchLink, SubscribeComponent }: IIFAPageProps) {
  return (
    <>
      <IFAHeroSection {...IFAHeroSectionProps} PrefetchLink={PrefetchLink} />
      <VideoList
        videoListProps={videoListProps}
        winnersNamesTickerProps={winnersNamesTickerProps}
        PrefetchLink={PrefetchLink}
      />
      <SubscribeGemeV2
        {...subscribeGemeV2Props}
        SubscribeComponent={SubscribeComponent}
      />
    </>
  )
}

export { IFAPageEn }
