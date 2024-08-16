import {
  IFAHeroSection,
  IIFAHeroSectionProps,
  ISubscribeGemeV2Props,
  IWinnersNamesTickerProps,
  SubscribeGemeV2,
} from 'ui'

import { ILinkComponent } from '../../contexts/link-context'
import { winnersNames } from './winnersNames'
import VideoList, { IVideoList } from 'ui/src/ifa/VideoList'
import { FC } from 'react'

// Hero Section  En
const IFAHeroSectionProps: IIFAHeroSectionProps = {
  bgImageUrl: '/assets/images/ifa/hero-bg.png',
  prizeImage: '/assets/images/geme-kobold/product-image-24.jpg',
  gemeLogo: '/assets/images/ifa/white-logo.png',
  ifaLogo: '/assets/images/ifa/ifa-berlin-seeklogo.png',
  noticeTitle: (
    <>
      Shining with GEME in IFA Berlin2024
      <br /> <br />
      Share your GEME story,
      <br />
      Win a GEME conposter!
    </>
  ),
  ifaExhibitionDate: 'GEME at IFA Berlin, September 6-10, 2024',
  prizeDesc: `2 grand giveaways are underway to mark GEME's appearance at IFA Berlin!`,
  activityTitle: 'Activity',
  activityDescription: (
    <>
      <strong>Weekly Wins: </strong>
      From Aug 19th to Sep 6th, win a $59.9 Kobold refill pack every Monday,
      Wednesday, and Friday.
      <br />
      <strong>Grand Prize: </strong>
      One lucky winner from all the participant will win a GEME composter on Sep
      14th.
    </>
  ),
  buttonText: 'Submit Your Video!',
  countdownTitle: 'Countdown to the next draw :',
  winningProbabilityTitle: 'Current probability of winning:',
  prizeImageTitle: 'What You could win',
  sampleVideoTitle: 'Vidoo Submission ldeas',
  descriptionText: (
    <>
      <ul>
        <li className="list-disc">
          1/N represents your probability of winning in each draw.
        </li>
        <li className="list-disc">
          We will draw winners every Monday, Wednesday, and Friday.
        </li>
        <li className="list-disc">
          The winning probability will be refreshed after each draw.
        </li>
      </ul>
    </>
  ),
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
      useTime: '9 months',
    },
    {
      // poster: '/assets/images/home-v2311/hero-blurred.webp',
      src: 'https://www-geme-bio-us.s3.us-west-1.amazonaws.com/user-videos/ifa-page-user-video-2.mp4',
      from: 'OH',
      useTime: '10 months',
    },
  ],
}

// 中奖名单  En
const winnersNamesTickerProps: IWinnersNamesTickerProps = {
  title: 'History Winners',
  linkText: 'view more',
  winnersNames,
}

// 订阅模块 En
const subscribeGemeV2Props: ISubscribeGemeV2Props = {
  title: 'Meet GEME II',
  description: <>Get interested? Join the wasting list!</>,
  emailPlaceholder: 'Enter your email',
  submitButtonLabel: 'Notify Me',
  productSectionTitle: 'Preview',
  imageList: [
    {
      src: '/assets/images/geme-v2-product/geme-v2-1-color.png',
      alt: 'Geme II Product Picture 1',
      title: 'Affordable',
      desc: 'Neat and slim, but yet powerful',
    },
    {
      src: '/assets/images/geme-v2-product/geme-v2-2.png',
      alt: 'Geme II Product Picture 2',
      title: 'Intelligent',
      desc: 'The best experience for food trash you have never thought',
    },
    {
      src: '/assets/images/geme-v2-product/geme-4r.jpeg',
      alt: 'Geme II Product Picture 3',
      title: 'Care & Love',
      desc: 'Not only a product, but a connected sustainable community',
    },
  ],
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
