/* eslint-disable react/no-unescaped-entities */
import {
  HeroSection1,
  ContentSection1,
  ContentSection2,
  ContentSection3,
  ContentSection4,
  ContentSection5,
  ContentSection6Fixed,
  CompostStep1,
  CompostStep2,
  CompostStep3,
  SecondLife,
} from 'ui'
import type {
  IHeroSection1Props,
  IContentSection1Props,
  IContentSection2Props,
  IContentSection3Props,
  IContentSection4Props,
  IContentSection5Props,
  IContentSection6FixedProps,
  ISecondLifeProps,
  IReviewsSectionConfig,
} from 'ui'
import { Footprints, type IFootprintsProps } from '../../components/footprints'
import { Newsletter, INewsletterProps } from './containers/newsletter'
import { ILinkComponent } from '../../contexts/link-context'
import { ReviewsSectionModule } from '../../components/reviews-section-module'

// 首页video部分的内容数据配置 En
const heroSection1Props: IHeroSection1Props = {
  title: `World's First Bio Waste Composter`,
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
  videoProps: {
    src: 'https://www-geme-bio-us.s3.us-west-1.amazonaws.com/hero-banner-window-video-19s-480p.mp4',
    posterUrl: '/assets/images/home-v2311/hero-blurred.webp',
  },
  fullScreenVideoUrl: 'https://www.youtube.com/embed/ROJYZBp0jcM',
  heroImageUrlPc: '/assets/images/home-v2311/cover-v3.jpg',
  heroImageUrlMobile: '/assets/images/home-v2311/cover-v3-mobile.jpg',
}

// 首页第二部分的内容数据配置 En
const contentSection2Props: IContentSection2Props = {
  title: 'Still Get Terrible Experience of Food Waste?',
  description: (
    <>
      Food scraps can be messy and nasty. <br />
      It creates smell, attracts noisy flies, annoying raccoons. <br />
      Your garbage disposal is clogged, kitchen gets wet and dirty? <br />
      60% food waste goes to landfill eventually. <br />
      You can stop it.
    </>
  ),
  // imageSrc: '/assets/images/home-v2311/waste-food.jpeg',
  imageSrc: '/assets/images/home-v2311/food-waste-experience.jpg',
  imageAlt: 'food waste picture',
}

// 首页第三部分的内容数据配置 En
const contentSection3Props: IContentSection3Props = {
  title: 'Food Waste to Plant Feed Home Composter',
  items: [
    {
      id: 1,
      description: (
        <>
          Throw all kinds of waste
          <br />
          Add food waste anytime
        </>
      ),
      imageSrc: '/assets/images/home-v2311/put-food-in-geme.jpg',
      imageAlt: 'put food waste in GEME composter',
    },
    {
      id: 2,
      description: (
        <>
          Composting continuously
          <br />
          Waste is reduced in the GEME composter
        </>
      ),
      imageSrc: '/assets/images/home-v2311/geme-is-running.jpg',
      imageAlt: 'wait food waste composting when GEME is running',
    },
    {
      id: 3,
      description: (
        <>
          Turn waste into compost
          <br />
          Just take out easily and use
        </>
      ),
      imageSrc: '/assets/images/home-v2311/get-compost-from-geme.jpg',
      imageAlt: 'item 3',
    },
    {
      id: 4,
      description: (
        <>
          Enrich your garden with nutrient-dense soil
          <br />
          Nurture your plants and watch them flourish
        </>
      ),
      imageSrc: '/assets/images/home-v2311/planting.jpg',
      imageAlt: 'item 4',
    },
  ],
}

// 首页第四部分（youtube视频）的内容数据配置 En
const contentSection4Props: IContentSection4Props = {
  title: (
    <>
      Stop Landfilling
      <br />
      Start Composting
    </>
  ),
  description:
    'GEME empowers families to turn their everyday food scraps into thriving gardens, nourishing soil, and a smaller carbon footprint, all while keeping waste out of landfills and incinerators.',
  withMp4VideoOrYoutubeVideo: {
    type: 'youtube',
    videoPosterImage: {
      src: '/assets/images/home-v2311/cover-v4.jpg',
      alt: 'GEME in your home',
      width: 1600,
      height: 900,
      srcSetData: {
        '100w': '/assets/images/home-v2311/cover-v4.jpg',
      },
    },
    // videoSrcUrl:
    videoSrcUrl: 'https://www.youtube.com/embed/nlsTg4l_3zE',
  },
}

// 首页第五部分（滚动动画部分）的内容数据配置 En
const secondLifeProps: ISecondLifeProps = {
  titleLeftPart: 'Compost',
  titleRightPart: 'New Life for Waste',
  description:
    'You can reduce 100kg to 300kg CO2 emissions. If you recycle all your food waste via composting.',

  articles: [
    {
      id: 1,
      title: 'Make Good Soil',
      description: 'Compost can nourish garden soil, let plants grow bigger.',
      image: {
        width: 1200,
        height: 800,
        alt: 'Make Good Soil',
        src: 'https://www.datocms-assets.com/79468/1666986512-moins_eau.jpg?w=10',
        srcSetData: {
          '100w':
            'https://www.datocms-assets.com/79468/1666986512-moins_eau.jpg?ixlib=js-2.3.2&auto=format&w=100',
          '300w':
            'https://www.datocms-assets.com/79468/1666986512-moins_eau.jpg?ixlib=js-2.3.2&auto=format&w=300',
          '600w':
            'https://www.datocms-assets.com/79468/1666986512-moins_eau.jpg?ixlib=js-2.3.2&auto=format&w=600',
          '900w':
            'https://www.datocms-assets.com/79468/1666986512-moins_eau.jpg?ixlib=js-2.3.2&auto=format&w=900',
          '1200w':
            'https://www.datocms-assets.com/79468/1666986512-moins_eau.jpg?ixlib=js-2.3.2&auto=format&w=1200',
        },
      },
    },
    {
      id: 2,
      title: 'Prevent Water Lost',
      description: 'Compost can absorb water, let your seeds grow better.',
      image: {
        width: 1200,
        height: 800,
        alt: 'Prevent Water Lost',
        src: 'https://www.datocms-assets.com/79468/1666986527-sols_riches.jpg?w=10',
        srcSetData: {
          '100w':
            'https://www.datocms-assets.com/79468/1666986527-sols_riches.jpg?ixlib=js-2.3.2&auto=format&w=100',
          '300w':
            'https://www.datocms-assets.com/79468/1666986527-sols_riches.jpg?ixlib=js-2.3.2&auto=format&w=300',
          '600w':
            'https://www.datocms-assets.com/79468/1666986527-sols_riches.jpg?ixlib=js-2.3.2&auto=format&w=600',
          '900w':
            'https://www.datocms-assets.com/79468/1666986527-sols_riches.jpg?ixlib=js-2.3.2&auto=format&w=900',
          '1200w':
            'https://www.datocms-assets.com/79468/1666986527-sols_riches.jpg?ixlib=js-2.3.2&auto=format&w=1200',
        },
      },
    },
    {
      id: 3,
      title: 'Fight Climate Change',
      description: 'Compost can reduce landfill, let our plannet turn greener.',
      image: {
        width: 1200,
        height: 800,
        alt: 'Fight Climate Change',
        src: 'https://www.datocms-assets.com/79468/1666986537-changements_climatiques.jpg?w=10',
        srcSetData: {
          '100w':
            'https://www.datocms-assets.com/79468/1666986537-changements_climatiques.jpg?ixlib=js-2.3.2&auto=format&w=100',
          '300w':
            'https://www.datocms-assets.com/79468/1666986537-changements_climatiques.jpg?ixlib=js-2.3.2&auto=format&w=300',
          '600w':
            'https://www.datocms-assets.com/79468/1666986537-changements_climatiques.jpg?ixlib=js-2.3.2&auto=format&w=600',
          '900w':
            'https://www.datocms-assets.com/79468/1666986537-changements_climatiques.jpg?ixlib=js-2.3.2&auto=format&w=900',
          '1200w':
            'https://www.datocms-assets.com/79468/1666986537-changements_climatiques.jpg?ixlib=js-2.3.2&auto=format&w=1200',
        },
      },
    },
  ],

  endTitleLeftPart: 'Waste Reborn',
  endTitleRightPart: 'Life Continue!',
}

// 首页第六部分的内容数据配置 En
const contentSection6FixedProps: IContentSection6FixedProps = {
  title: 'The Easiest Way to Get Compost',
  videoPosterUrl: '/assets/images/home-v2311/use-compost-cover.jpg',
  videoSrcUrl:
    'https://www-geme-bio-us.s3.us-west-1.amazonaws.com/geme-genereate-compost-12s-480p.mp4',
  steps: [
    {
      id: 1,
      Icon: CompostStep1,
      description: (
        <>
          no slow waiting time
          <br />
          easy maintenance
        </>
      ),
    },
    {
      id: 2,
      Icon: CompostStep2,
      description: (
        <>
          no mess and smell <br />
          clean and odorless
        </>
      ),
    },
    {
      id: 3,
      Icon: CompostStep3,
      description: (
        <>
          no need to turn over <br />
          work in any weather
        </>
      ),
    },
  ],
}

// 首页第七部分的内容数据配置 En
const contentSection1Props2: IContentSection1Props = {
  title: (
    <>
      Real Compost <br />
      Not Dehydrated Waste
    </>
  ),
  description: (
    <>
      Keep in mind that most other &quot;composters&quot; are actually
      dehydrators;
      <br />
      they simply cook and dry the food into pieces that look like soil.
      <br />
      In contrast, GEME uses microbe bio-technology to enhance natural aerobic
      fermentation, making it a genuine composting process.
    </>
  ),
  imageSrc: '/assets/images/home-v2311/the-man-get-compost-from-geme.jpg',
  imageAlt: 'the man get compost from GEME',
}

// 首页第八部分的内容数据配置 En
const contentSection1Props3: IContentSection1Props = {
  title: (
    <>
      Powered by BioTech
      <br />
      and Modern Manufacture
    </>
  ),
  description: (
    <>
      Our science team has tested this technology extensively over the past 50
      years in treating biowaste, soil, and polluted water. They have refined
      the core technology, leading to the creation of GEME Kobold.
      <br />
      <br />
      Our engineering team possesses extensive experience in designing and
      manufacturing trash compactors. They have recently developed the GEME
      Composter.
      <br />
      <br />
      GEME Kobold and GEME Composter ignite a revolution.
    </>
  ),
  imageSrc: '/assets/images/home-v2311/observe-the-plants.jpg',
  imageAlt: 'observe the plants',
}

// 首页第九部分（三动图）的内容数据配置 En
const contentSection5Props: IContentSection5Props = {
  title: 'Turn Food Scraps into Organic Compost',
  description: (
    <>
      GEME Kobold is a microorganism reproducing when well fed.
      <br />
      It breaks down your food waste, no matter how salty or acidic.
      <br />
      The result? Ready-to-use, homemade organic compost for plants.
    </>
  ),
  images: [
    {
      id: 1,
      stepText: 'Put Waste In',
      imageSrc: '/assets/images/home-v2311/compost-step-1.gif',
      imageAlt: 'food waste picture',
    },
    {
      id: 2,
      stepText: 'Wait Few Days',
      imageSrc: '/assets/images/home-v2311/compost-step-2.gif',
      imageAlt: 'food waste picture',
    },
    {
      id: 3,
      stepText: 'Take Compost Out',
      imageSrc: '/assets/images/home-v2311/compost-step-3.gif',
      imageAlt: 'food waste picture',
    },
  ],
  bottomDescription: (
    <>Only 3 steps make it the easiest way to fight with climate changing.</>
  ),
}

// 首页第十部分（好评卡片）的内容数据配置 En
const reviewsSectionProps = {
  title: 'What Real Users Say',
  description:
    'Click below to see real people dish the dirt, good and bad - the unfiltered truth you need.',
}

// 首页第十一部分（地图）的内容数据配置 En
const footprintsProps: IFootprintsProps = {
  grayBackground: true,
  title: "GEME's Green Footprints in the World",
  description:
    'Thanks for backing GEME and bring more green to the world. Be the first one to spread to your place!',
  proportionalSymbolMapProps: {
    recentOrderedFrom: 'People from {city} back GEME with their love.',
  },
}

// 首页最后一个部分（加入我们）的内容数据配置 En
const newsltterProps: INewsletterProps = {
  newsletterCenteredCardProps: {
    title: 'Join the Movement',
    description: (
      <>
        A new approach to the world&apos;s waste problem begins with each of us,
        effortless in daily life
      </>
    ),
    emailInputName: 'email-address',
    emailLabel: 'Email address',
    emailPlaceholder: 'Enter your email',
    submitButtonLabel: 'Subscribe',
  },
  successNoticeProps: {
    title: 'Thank you for subscribing!',
    description: 'We will keep you updated with the latest news.',
  },
}

export interface IHomePageProps {
  PrefetchLink?: ILinkComponent
  subscribeHandler?: (email: string) => Promise<void>
  reviewsSectionConfig: IReviewsSectionConfig
}

function HomePageEn({
  PrefetchLink,
  reviewsSectionConfig,
  subscribeHandler,
}: IHomePageProps) {
  heroSection1Props.LinkComponent = PrefetchLink

  return (
    <>
      <HeroSection1 {...heroSection1Props} />

      {/*<ContentSection2 {...contentSection2Props} />*/}
      <ContentSection3 {...contentSection3Props} />
      <ContentSection4 {...contentSection4Props} />

      <SecondLife {...secondLifeProps} />

      <div>
        <ContentSection6Fixed {...contentSection6FixedProps} />
        <ContentSection1 {...contentSection1Props2} isDisplayTextOnLeft />
        <ContentSection1 {...contentSection1Props3} />
      </div>

      <div className=" bg-v2311-bg-light-green">
        <ContentSection5 {...contentSection5Props} />
      </div>

      <ReviewsSectionModule
        locale="en"
        reviewsSectionConfig={reviewsSectionConfig}
        {...reviewsSectionProps}
      />

      <Footprints {...footprintsProps} />

      <Newsletter {...newsltterProps}  subscribeHandler={subscribeHandler}/>
    </>
  )
}

export { HomePageEn }
