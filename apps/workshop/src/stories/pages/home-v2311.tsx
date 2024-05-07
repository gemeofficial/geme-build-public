import { useState } from 'react'
import {
  HeroSection1,
  ContentSection1,
  ContentSection3,
  SecondLife,
  ContentSection4,
  ContentSection5,
  CompostStep1,
  CompostStep2,
  CompostStep3,
  ContentSection6Fixed,
  NewsletterCenteredCard,
  SuccessNotice,
} from 'ui'
import type {
  IHeroSection1Props,
  IContentSection1Props,
  IContentSection3Props,
  IContentSection4Props,
  ISecondLifeProps,
  IContentSection5Props,
  IContentSection6FixedProps,
  INewsletterCenteredCardProps,
  ISuccessNoticeProps,
} from 'ui'

const heroSection1Props: IHeroSection1Props = {
  title: (
    <>
      <span className=" hidden xl:inline ">
        World&apos;s First Bio Waste Composter
      </span>
      <span className=" xl:hidden ">New Life for Waste</span>
    </>
  ),
  description: (
    <>
      <span className=" hidden xl:inline ">
        Meet GEME, the modern electric composter for home. <br />
        Turn your daily food waste into organic compost.
        <br />
        Less landfill, more garden soil.
      </span>
      <span className=" xl:hidden ">
        Does your food scrap garbage ever ... <br />
        Turn your floor wet and dirty.
      </span>
    </>
  ),
  linkText: 'Shop Now',
  linkUrl: '/product/geme',
  videoProps: {
    sources: [
      // for pc
      {
        minWidth: 1280,
        src: 'https://public-assest-434759801795.s3.us-west-1.amazonaws.com/geme-bio-home-hero-backgruond-video-1080p.mp4',
        playbackId: '4xlpgl6PcY6d8N3H5FowWDdP01kCupf3Pn8A101zaCnFo',
        posterUrl:
          'https://public-assest-434759801795.s3.us-west-1.amazonaws.com/cover-v2.jpg',
      },
      // for mobile/tablet
      {
        minWidth: 0,
        src: 'https://public-assest-434759801795.s3.us-west-1.amazonaws.com/geme-bio-home-background-video-no-sound-480p.mp4',
        playbackId: '4xlpgl6PcY6d8N3H5FowWDdP01kCupf3Pn8A101zaCnFo',
      },
    ],
  },
}

const contentSection1Props: IContentSection1Props = {
  title: 'Terrible Food Waste Experience?',
  description: (
    <>
      Does your food scrap garbage ever ... <br />
      Turn your floor wet and dirty. <br />
      Create some bad smell. <br />
      Attract annoying flies
    </>
  ),
  imageSrc: 'https://placehold.co/358x202',
  imageAlt: 'food waste picture',
}

const contentSection3Props: IContentSection3Props = {
  title: 'Time to Change Your Trash Bin',
  items: [
    {
      id: 1,
      description: (
        <>
          No more smelly
          <br />
          leaky garbage
        </>
      ),
      imageSrc: 'https://placehold.co/171x228',
      imageAlt: 'item 1',
    },
    {
      id: 2,
      description: (
        <>
          Feed your garden,
          <br />
          lawn, or plants
        </>
      ),
      imageSrc: 'https://placehold.co/171x228',
      imageAlt: 'item 2',
    },
    {
      id: 3,
      description: (
        <>
          Noise-free design
          <br />
          that can be
          <br />
          placed anywhere
        </>
      ),
      imageSrc: 'https://placehold.co/171x228',
      imageAlt: 'item 3',
    },
    {
      id: 4,
      description: (
        <>
          Noise-free design
          <br />
          that can be
          <br />
          placed anywhere
        </>
      ),
      imageSrc: 'https://placehold.co/171x228',
      imageAlt: 'item 4',
    },
  ],
}

const contentSection4Props: IContentSection4Props = {
  title: (
    <>
      Stop landfiling <br />
      Start composting
    </>
  ),
  description: 'Let GEME grow your seed with the food waste recycled.',
  withMp4VideoOrYoutubeVideo: {
    type: 'youtube',
    videoPosterImage: {
      src: 'https://placehold.co/160x900',
      alt: 'image alt',
      width: 1600,
      height: 900,
      srcSetData: {
        '160w': 'https://placehold.co/160x900',
        '1200w': 'https://placehold.co/1200x675',
        '1600w': 'https://placehold.co/1600x900',
      },
    },
    videoSrcUrl: 'https://www.youtube.com/embed/v1Z4fg6MmlI',
  },
}

const contentSection6FixedProps: IContentSection6FixedProps = {
  title: 'The Easiest Way to Get Compost',
  videoPosterUrl: 'https://placehold.co/358x202/3B806F/white?text=poster',
  videoSrcUrl:
    'https://public-assest-434759801795.s3.us-west-1.amazonaws.com/geme-banner.mp4',
  steps: [
    {
      id: 1,
      Icon: CompostStep1,
      description: (
        <>
          slow & trouble <br />
          maintenance
        </>
      ),
    },
    {
      id: 2,
      Icon: CompostStep2,
      description: (
        <>
          dehydrated & <br />
          cooked waste
        </>
      ),
    },
    {
      id: 3,
      Icon: CompostStep3,
      description: (
        <>
          dehydrators? <br />
          No! it&apos;s real composter
        </>
      ),
    },
  ],
}

const secondLifeProps: ISecondLifeProps = {
  titleLeftPart: 'Compost',
  titleRightPart: 'Compost New Life for Waste',
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

const contentSection5Props: IContentSection5Props = {
  title: 'Turn food scraps into organic compost',
  description: (
    <>
      GEME Kobold, the microorganisms that breakdown your food waste, no matter
      how salty or acidic. The result?
      <br />
      Ready-to-use, homemade orVkkganic compost for your plants.
    </>
  ),
  images: [
    {
      id: 1,
      imageSrc: 'https://placehold.co/358x202',
      imageAlt: 'food waste picture',
    },
    {
      id: 2,
      imageSrc: 'https://placehold.co/358x202',
      imageAlt: 'food waste picture',
    },
    {
      id: 3,
      imageSrc: 'https://placehold.co/358x202',
      imageAlt: 'food waste picture',
    },
  ],
  bottomDescription: (
    <>
      GEME Kobold is a microorganism that reproduces itself when cultivated and
      fed well.
    </>
  ),
}

const newsletterSuccessNoticeStateCreator = (
  initialState: boolean,
): {
  getState: () => boolean
  setState: (newState: boolean) => void
} => {
  let state: boolean = initialState

  return {
    getState: () => state,
    setState: (newState: boolean) => {
      state = newState
    },
  }
}

const newsletterSuccessNoticeState = newsletterSuccessNoticeStateCreator(false)

const newsletterCenteredCardProps: INewsletterCenteredCardProps = {
  title: 'Join the movement',
  description: (
    <>A new approach to the world&apos;s waste problem begins with each of us</>
  ),
  onSubmit: (evt) => {
    evt.preventDefault()
    newsletterSuccessNoticeState.setState(true)
    console.log(
      'Form submitted:',
      new FormData(evt.currentTarget).get('email-address'),
    )
  },
  emailInputName: 'email-address',
  emailLabel: 'Email address',
  emailPlaceholder: 'Enter your email',
  submitButtonLabel: 'Subscribe',
}

const newsletterSuccessNoticeProps: ISuccessNoticeProps = {
  title: 'Thank you for subscribing!',
  description: 'You will receive a confirmation email shortly.',
  open: newsletterSuccessNoticeState.getState(),
  setOpen: newsletterSuccessNoticeState.setState,
}

function HomeV2311(): JSX.Element {
  const [newsletterSuccessNoticeOpen, setNewsletterSuccessNoticeOpen] =
    useState<boolean>(false)

  return (
    <main>
      <HeroSection1 {...heroSection1Props} />

      <ContentSection1 {...contentSection1Props} />
      <ContentSection3 {...contentSection3Props} />
      <ContentSection4 {...contentSection4Props} />

      <SecondLife {...secondLifeProps} />

      <div>
        <ContentSection6Fixed {...contentSection6FixedProps} />
        <ContentSection1 {...contentSection1Props} isDisplayTextOnLeft />
        <ContentSection1 {...contentSection1Props} />
      </div>

      <div className=" bg-v2311-bg-dark-green ">
        <ContentSection5 {...contentSection5Props} />
      </div>

      {/* placeholder for Footprints */}

      <NewsletterCenteredCard
        {...newsletterCenteredCardProps}
        onSubmit={(evt) => {
          newsletterCenteredCardProps.onSubmit?.(evt)
          setNewsletterSuccessNoticeOpen(true)
        }}
      />
      <SuccessNotice
        {...newsletterSuccessNoticeProps}
        open={newsletterSuccessNoticeOpen}
        setOpen={setNewsletterSuccessNoticeOpen}
      />

      {/* placeholder for other sections */}
    </main>
  )
}

export default HomeV2311
