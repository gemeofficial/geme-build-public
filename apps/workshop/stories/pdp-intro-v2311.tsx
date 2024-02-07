import {
  PdpIntroSection1,
  ScrollTriggeredAnimatedOxygenCycle,
  PdpIntroSection3,
  PdpIntroSection4,
  ContentSection7,
  ContentSection2,
  PdpIntroSection5,
  PdpIntroSection6,
  PdpIntroSection7,
  ContentSection8,
  PdpIntroSection8,
  usingCompostIcons,
  SvgOxygen,
} from 'ui'
import type {
  IPdpIntroSection1Props,
  IOxygenCycleProps,
  IPdpIntroSection3Props,
  IContentSection7Props,
  IContentSection2Props,
  IPdpIntroSection5Props,
  IPdpIntroSection6Props,
  IPdpIntroSection7Props,
  IContentSection8Props,
  IPdpIntroSection8Props,
} from 'ui'

const pdpIntroSection1Props: IPdpIntroSection1Props = {
  title: "World's First Bio Waste Composter",
  description: 'Use microbiota to breakdown food waste quickly',
  // bgImageSrc: 'https://placehold.co/1920x850',
  bgImageSrc:
    '/assets/images/pdp-v2311/dividers/geme-with-compost-background.jpg',
  bottomItems: [
    { id: 1, description: 'Breakdown by Microbes' },
    { id: 2, description: 'Not by Dehydration' },
    { id: 3, description: 'Compost Pile in Box' },
  ],
}

const oxygenCycleProps: IOxygenCycleProps = {
  title: 'At the compost plant, everything is ready to convert the organic',
  progresses: [
    {
      minProgress: 100,
      content: (
        <>
          <SvgOxygen className=" w-8 h-8 md:w-16 md:h-16 " />
          <h3 className=" v2311-font-body md:v2311-font-h3 text-v2311-primary font-bold text-center mt-2 md:mt-4 ">
            Plenty of oxygen
          </h3>
          <p className=" v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 ">
            How to get the right recipe? By giving air to microbes! First, mix
            the organic material with a carbon source, such as wood chips. Then
            they are arranged and worked mechanically, allowing air to circulate
            and nature to work.
          </p>
        </>
      ),
    },
  ],
}

const pdpIntroSection3Props: IPdpIntroSection3Props = {
  title: '6-8 Hours',
}

const contentSection71Props: IContentSection7Props = {
  title: 'From Waste To Wonder',
  description:
    "Let's talk about the little guys that make a big difference microbesJust like the friendly microbes in your gut aid digestion, along with optimal conditions and bin rotation swiftly convert food scraps into organic compost",
  withImageOrVideo: {
    type: 'video',
    videoProps: {
      videoPosterUrl: 'https://placehold.co/358x202',
      sources: [
        // for pc
        {
          minWidth: 1280,
          src: 'https://public-assest-434759801795.s3.us-west-1.amazonaws.com/geme-banner.mp4',
        },
        // for mobile/tablet
        {
          minWidth: 0,
          src: 'https://public-assest-434759801795.s3.us-west-1.amazonaws.com/geme-banner.mp4',
        },
      ],
    },
  },
  bottomContent: <PdpIntroSection3 {...pdpIntroSection3Props} />,
  isDisplayTextOnLeft: true,
}

const contentSection72Props: IContentSection7Props = {
  title: 'Silent Operation',
  description:
    'GEME Sound level around 35-45 dB, the quietest composter on the marketing',
  withImageOrVideo: {
    type: 'image',
    imageSrc: 'https://placehold.co/358x202',
    imageAlt: 'food waste picture',
  },
  bottomContent: <PdpIntroSection4 />,
}

const contentSection21Props: IContentSection2Props = {
  title: 'Just keep throwing your garbage GEME take care of the rest',
  description: (
    <>
      ·&nbsp;&nbsp;Add waste at anytime <br />
      ·&nbsp;&nbsp;No need to push buttons <br />
      ·&nbsp;&nbsp;No need to wait cycles
    </>
  ),
  imageSrc: 'https://placehold.co/358x202',
  imageAlt: 'food waste picture',
  isDisplayTextOnLeft: true,
}

const contentSection22Props: IContentSection2Props = {
  title:
    "World's first bio garbage disposal that uses microbiota to breakdown food waste quickly",
  description: (
    <>
      ·&nbsp;&nbsp;Add waste at anytime <br />
      ·&nbsp;&nbsp;No need to push buttons <br />
      ·&nbsp;&nbsp;No need to wait cycles
    </>
  ),
  imageSrc: 'https://placehold.co/358x202',
  imageAlt: 'food waste picture',
}

const pdpIntroSection5Props: IPdpIntroSection5Props = {
  title: 'Almost All Of Waste Can Go into GEME',
  leftNotes: (
    <>
      <strong>400+</strong>
      <br />
      kinds of waste
    </>
  ),
}

const pdpIntroSection6Props: IPdpIntroSection6Props = {
  title: 'Composting Made Easy',
  description: 'Loved by 100k+gardeners',
  items: [
    {
      id: 1,
      featured: true,
      title: 'GEME',
      imageSrc: 'https://placehold.co/156x99',
      imageAlt: 'GEME compose',
      features: [
        'Not dehydrating',
        'Not dehydrating',
        'Not dehydrating',
        'Not dehydrating',
      ],
    },
    {
      id: 2,
      title: 'Dehydrator',
      imageSrc: 'https://placehold.co/89x89',
      imageAlt: 'Dehydrator',
      features: [
        'Not dehydrating',
        'Not dehydrating',
        'Not dehydrating',
        'Not dehydrating',
      ],
    },
    {
      id: 3,
      title: 'Compost Pile',
      imageSrc: 'https://placehold.co/89x89',
      imageAlt: 'Compost Pile',
      features: [
        'Not dehydrating',
        'Not dehydrating',
        'Not dehydrating',
        'Not dehydrating',
      ],
    },
  ],
}

const pdpIntroSection7Props: IPdpIntroSection7Props = {
  title: 'Big, More & Long Term',
  description: 'Work 7x24 But Energy Saving',
  features: [
    '·  10+ people family daily using',
    '·  3 months no cleaning required',
    '·  Worth the price',
  ],
}

const contentSection23Props: IContentSection2Props = {
  title: 'Up to 19L volume and 4.4lbs/2kg daily processing capacity ',
  description: (
    <>
      ·&nbsp;&nbsp;10+ people family daily using <br />
      ·&nbsp;&nbsp;3 months no cleaning required <br />
      ·&nbsp;&nbsp;Worth the price
    </>
  ),
  imageSrc: 'https://placehold.co/358x202',
  imageAlt: 'food waste picture',
  isDisplayTextOnLeft: true,
}

const contentSection24Props: IContentSection2Props = {
  title: 'No Need to Change Filter',
  description: (
    <>
      The world&apos;s only model that uses the most advanced industrial filter
      <br />
      <br />
      ·&nbsp;&nbsp;Not dehydrating <br />
      ·&nbsp;&nbsp;Not chopping <br />
      ·&nbsp;&nbsp;Not greenwashing
    </>
  ),
  imageSrc: 'https://placehold.co/358x202',
  imageAlt: 'food waste picture',
}

const contentSection3Props: IContentSection8Props = {
  title: 'Odorless',
  description:
    'GEME uses industrial filters with the most advanced deodorization technology.',
  items: [
    {
      id: 1,
      imageSrc: 'https://placehold.co/300x400',
      imageAlt: 'item 1',
    },
    {
      id: 2,
      imageSrc: 'https://placehold.co/300x400',
      imageAlt: 'item 2',
    },
  ],
}

const pdpIntroSection8Props: IPdpIntroSection8Props = {
  title: 'Using Compost',
  description: (
    <>
      Food waste is breakdown by microbita, not by the electricity power, the
      power is just for mantaining the best environment for the microbiota to
      work efficiently.
    </>
  ),
  features: [
    {
      id: 1,
      Icon: usingCompostIcons.SvgPlantOnHandIcon,
      feature: 'indoor plan',
    },
    {
      id: 2,
      Icon: usingCompostIcons.SvgFlowerOnHandIcon,
      feature: 'bonsai',
    },
    {
      id: 3,
      Icon: usingCompostIcons.SvgRiceOnHandIcon,
      feature: 'vegetable bed',
    },
    {
      id: 4,
      Icon: usingCompostIcons.SvgGardenCareIcon,
      feature: 'garden care',
    },
    {
      id: 5,
      Icon: usingCompostIcons.SvgGiftIcon,
      feature: 'share it',
    },
    {
      id: 6,
      Icon: usingCompostIcons.SvgWaterIcon,
      feature: 'purify water',
    },
  ],

  bgImageSrc: 'https://placehold.co/834x607',
  bgDesktopImageSrc: 'https://placehold.co/1920x850',

  linkText: 'GET GEMEM',
  linkUrl: '/product/geme',
}

function PdpIntroV2311(): JSX.Element {
  return (
    <div>
      <PdpIntroSection1 {...pdpIntroSection1Props} />

      <ScrollTriggeredAnimatedOxygenCycle {...oxygenCycleProps} />

      <ContentSection7 {...contentSection71Props} />

      <ContentSection7 {...contentSection72Props} />

      <PdpIntroSection5 {...pdpIntroSection5Props} />

      <ContentSection2 {...contentSection21Props} />

      <ContentSection2 {...contentSection22Props} />

      <PdpIntroSection6 {...pdpIntroSection6Props} />

      <PdpIntroSection7 {...pdpIntroSection7Props} />

      <ContentSection2 {...contentSection23Props} />

      <ContentSection2 {...contentSection24Props} />

      <ContentSection8 {...contentSection3Props} />

      <PdpIntroSection8 {...pdpIntroSection8Props} />
    </div>
  )
}

export default PdpIntroV2311
