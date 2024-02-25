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
  ActionSection1,
  SecondLife,
} from 'ui'
import type {
  IHeroSection1Props,
  IActionSection1Props,
  IContentSection1Props,
  IContentSection2Props,
  IContentSection3Props,
  IContentSection4Props,
  IContentSection5Props,
  IContentSection6FixedProps,
  ISecondLifeProps,
} from 'ui'
import { Footprints, type IFootprintsProps } from '../../components/footprints'
import Link from 'next/link'
import mixpanel from 'mixpanel-browser'

const heroSection1Props: IHeroSection1Props = {
  title: (
    <>
      <span className="hidden xl:inline">
        Le premier composteur de biodéchets au monde
      </span>
      <span className="xl:hidden">
        Le premier composteur de biodéchets au monde
      </span>
    </>
  ),
  description: (
    <>
      <span className=" hidden xl:inline ">
        Découvrez GEME, le composteur électrique moderne pour la maison
        <br />
        Transformez vos déchets alimentaires quotidiens en compost organique
        <br />
        Moins de décharges, plus de terre de jardin.
      </span>
      <span className=" xl:hidden ">
        Découvrez GEME, le composteur électrique moderne pour la maison
        <br />
        Transformez vos déchets alimentaires quotidiens en compost organique
        <br />
        Moins de décharges, plus de terre de jardin.
      </span>
    </>
  ),
  linkText: 'Achetez maintenant',
  linkUrl: '/product/geme',
  linkClickedTrack: () => {
    mixpanel.track('Go Product Page', {
      From: 'Hero Primary Button',
    })
  },
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

const contentSection2Props: IContentSection2Props = {
  // title: 'Terrible Food Waste Experience?',
  title: 'Are You Still Get Terrible Food Waste Experience?',
  description: (
    <>
      Food scraps get messy. <br />
      Garbage disposal get clogged, sometimes house wet and dirty. <br />
      Create bad smell, attracting annoying noisy flies, animals? <br />
      Eventually go to landfill.
    </>
  ),
  // imageSrc: '/assets/images/home-v2311/waste-food.jpeg',
  imageSrc: '/assets/images/home-v2311/food-waste-experience.jpg',
  imageAlt: 'food waste picture',
}

const contentSection3Props: IContentSection3Props = {
  title: 'Time to Change Your Trash Bin',
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
          Waste get reduced in a box
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
          Free and good gardening soil
          <br />
          Feed and grow your plant
        </>
      ),
      imageSrc: '/assets/images/home-v2311/planting.jpg',
      imageAlt: 'item 4',
    },
  ],
}

const contentSection4Props: IContentSection4Props = {
  title: (
    <>
      Stop Landfilling
      <br />
      Start Composting
    </>
  ),
  description:
    'GEME helps every family eliminate daily food waste, create nourished soil, build a healthy garden, reduce carbon footprint, and avoid landfilling and incineration.',
  withMp4VideoOrYoutubeVideo: {
    type: 'youtube',
    videoPosterImage: {
      src: '/assets/images/home-v2311/cover-v3.jpg',
      alt: 'GEME in your home',
      width: 1600,
      height: 900,
      srcSetData: {
        '100w': '/assets/images/home-v2311/cover-v3.jpg',
      },
    },
    // videoSrcUrl:
    //   'https://public-assest-434759801795.s3.us-west-1.amazonaws.com/geme-banner.mp4',
    videoSrcUrl: 'https://www.youtube.com/embed/ROJYZBp0jcM',
  },
}

const secondLifeProps: ISecondLifeProps = {
  titleLeftPart: 'Compost',
  titleRightPart: 'New Life for Waste',
  description:
    'You can reduce 100kg to 300kg CO2 emissions. If you recycle all your food waste via composting.',

  articles: [
    {
      id: 1,
      title: 'Prevent Water Lost',
      description: 'Compost can absorb water, let your seeds grow better.',
      image: {
        width: 1200,
        height: 800,
        alt: 'Prevent Water Lost',
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
      title: 'Make Good Soil',
      description: 'Compost can nourish garden soil, let plants grow bigger.',
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
        alt: 'Prevent Water Lost',
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

const contentSection6FixedProps: IContentSection6FixedProps = {
  title: 'The Easiest Way to Get Compost',
  videoPosterUrl: '/assets/images/home-v2311/use-compost-cover.jpg',
  videoSrcUrl:
    'https://public-assest-434759801795.s3.us-west-1.amazonaws.com/geme-genereate-compost-12s-480p.mp4',
  steps: [
    {
      id: 1,
      Icon: CompostStep1,
      description: (
        <>
          no slow wait time
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
          no dirty and smelly <br />
          no rats and bugs
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

const contentSection5Props: IContentSection5Props = {
  title: 'Turn Food Scraps into Organic Compost',
  description: (
    <>
      GEME Kobold is a microorganism reproducing when well fed.
      <br />
      It breakdown your food waste, no matter how salty or acidic.
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

const footprintsProps: IFootprintsProps = {
  grayBackground: false,
  title: "GEME's Green Footprints in the World",
  description:
    'Thanks for backing GEME and bring more green to the world. Be the first one to spread to your place!',
  proportionalSymbolMapProps: {
    recentOrderedFrom: 'People from {city} back GEME with their love.',
  },
}

const actionSection1Props: IActionSection1Props = {
  title: 'Join the Movement',
  description: (
    <>
      A new approach to the world&apos;s waste problem begins with each of us,
      effortless in daily life
    </>
  ),
  linkText: 'GET GEME',
  linkUrl: '/product/geme',
}

export default function HomeEn() {
  return (
    <>
      <HeroSection1 {...heroSection1Props} />

      <ContentSection2 {...contentSection2Props} />
      <ContentSection3 {...contentSection3Props} />
      <ContentSection4 {...contentSection4Props} />

      <SecondLife {...secondLifeProps} />

      <div>
        <ContentSection6Fixed {...contentSection6FixedProps} />
        <ContentSection1 {...contentSection1Props2} isDisplayTextOnLeft />
        <ContentSection1 {...contentSection1Props3} />
      </div>

      <div className=" bg-v2311-bg-light-green ">
        <ContentSection5 {...contentSection5Props} />
      </div>

      <Footprints {...footprintsProps} />

      <ActionSection1 {...actionSection1Props} />
    </>
  )
}
