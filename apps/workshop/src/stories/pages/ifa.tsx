import { IFAHeroSection, IIFAHeroSectionProps } from 'ui'

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

export default function IFAPage() {
  return (
    <>
      <IFAHeroSection {...IFAHeroSectionProps} />
    </>
  )
}
