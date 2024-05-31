/* eslint-disable react/no-unescaped-entities */
import {
  PdpIntroSection1,
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
  ScrollTriggeredAnimatedOxygenCycle,
  SvgOxygen,
  SvgFoodWaste,
  SvgWood,
  SvgWaterDrop,
  SvgTemperature,
  SvgMicrobe,
} from 'ui'
import type {
  IPdpIntroSection1Props,
  IPdpIntroSection3Props,
  IContentSection7Props,
  IContentSection2Props,
  IPdpIntroSection5Props,
  IPdpIntroSection6Props,
  IPdpIntroSection7Props,
  IContentSection8Props,
  IPdpIntroSection8Props,
  IOxygenCycleProps,
} from 'ui'

const pdpIntroSection1Props: IPdpIntroSection1Props = {
  title: "World's First Bio Waste Composter",
  description:
    'Use microbiota to breakdown food waste quickly, 100x faster than traditional composting, completely different than countertop dehydrating electric "composters".',
  bgImageSrc:
    '/assets/images/pdp-v2311/dividers/geme-with-compost-background-min.jpg',
  comparisonText: {
    brfore: 'Brfore',
    after: 'After',
  },
  bottomItems: [
    { id: 1, description: 'Breakdown by Microbes' },
    { id: 2, description: 'Not by Dehydration' },
    { id: 3, description: 'Compost Pile in Box' },
  ],
}

const oxygenCycleProps: IOxygenCycleProps = {
  title: 'Necessary Steps for Real Composting Process',
  progresses: [
    {
      minProgress: 12.5,
      content: (
        <>
          <SvgFoodWaste className=" w-8 h-8 md:w-16 md:h-16 " />
          <h3 className=" v2311-font-body md:v2311-font-h3 text-v2311-primary font-bold text-center mt-2 md:mt-4 ">
            Nutrients(Food Waste)
          </h3>
          <p className="hidden lg:block v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2">
            Micro-organisms require C, N, phosphorus (P) and potassium (K) as
            the primary nutrients. C:N ratio of raw materials is important. The
            optimal C:N ratio of raw materials is between 25:1 and 30:1.
          </p>
          <p className="hidden xl:block v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2">
            Where the ratio is too high, the growth of micro-organisms is
            limited, resulting in a longer composting time. A less C:N ratio
            leads to underutilization of N and odour can be a problem.
          </p>
          <p className=" v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 ">
            GEME Composter and GEME Kobold will take care of the C:N ratio
            automatically for you.
          </p>
        </>
      ),
    },
    {
      minProgress: 25,
      content: (
        <>
          <SvgOxygen className=" w-8 h-8 md:w-16 md:h-16 " />
          <h3 className=" v2311-font-body md:v2311-font-h3 text-v2311-primary font-bold text-center mt-2 md:mt-4 ">
            Aeration(Oxygen)
          </h3>
          <p className="hidden lg:block v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 ">
            Aerobic composting takes place in the presence of ample O2. In this
            process, aerobic microorganisms break down organic matter and
            produce ammonia, water, heat and humus, the relatively stable
            organic end product.
          </p>
          <p className=" v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 ">
            GEME Composter provide an air exchange system to make this happen
            inside a box.
          </p>
        </>
      ),
    },
    {
      minProgress: 40,
      content: (
        <>
          <SvgWood className=" w-8 h-8 md:w-16 md:h-16 " />
          <h3 className=" v2311-font-body md:v2311-font-h3 text-v2311-primary font-bold text-center mt-2 md:mt-4 ">
            Lignin Content(Brown Stuff)
          </h3>
          <p className="hidden lg:block  v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 ">
            Lignin is one of the main constituents of plant cell walls, and its
            complex chemical structure makes it highly resistant to microbial
            degradation.
          </p>
          <p className="hidden xl:block  v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 ">
            This nature of lignin has two implications. One is that lignin
            reduces the bioavailability of the other cell-wall constituents,
            making the actual C:N ratio (viz. ratio of biodegradable C to N)
            lower than the one normally cited. The other is that lignin serves
            as a porosity enhancer, which creates favourable conditions for
            aerobic composting.
          </p>
          <p className=" v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 ">
            GEME Kobold starter contains such material and well configured for
            you.
          </p>
        </>
      ),
    },
    {
      minProgress: 60,
      content: (
        <>
          <SvgWaterDrop className=" w-8 h-8 md:w-16 md:h-16 " />
          <h3 className=" v2311-font-body md:v2311-font-h3 text-v2311-primary font-bold text-center mt-2 md:mt-4 ">
            Moisture
          </h3>
          <p className="hidden lg:block v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 ">
            Moisture is necessary to support the metabolic activity of the
            micro-organisms. Composting materials should maintain a moisture
            content of 40-65 percent.
          </p>
          <p className="hidden xl:block v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 ">
            Where the pile is too dry, composting occurs more slowly, while a
            moisture content in excess of 65 percent develops anaerobic
            conditions. In practice, it is advisable to start the pile with a
            moisture content of 50-60 percent, finishing at about 30 percent.
          </p>
          <p className=" v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 ">
            GEME Composter is water proof and it allows adding water and
            dehumidify when over wet.
          </p>
        </>
      ),
    },
    {
      minProgress: 78,
      content: (
        <>
          <SvgTemperature className=" w-8 h-8 md:w-16 md:h-16 " />
          <h3 className=" v2311-font-body md:v2311-font-h3 text-v2311-primary font-bold text-center mt-2 md:mt-4 ">
            Temperature
          </h3>
          <p className="hidden lg:block v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 ">
            The process of composting involves two temperature ranges:
            mesophilic and thermophilic.
          </p>
          <p className="hidden xl:block v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 ">
            While the ideal temperature for the initial composting stage is
            20-45 °C, at subsequent stages with the thermophilic organisms
            taking over, a temperature range of 50-70 °C may be ideal. High
            temperatures characterize the aerobic composting process and serve
            as signs of vigorous microbial activities.
          </p>
          <p className=" v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 ">
            GEME Composter gets a smart temperature controller, manage the
            temperature to fit the GEME Kobold in the best condition.
          </p>
        </>
      ),
    },
    {
      minProgress: 100,
      content: (
        <>
          <SvgMicrobe className=" w-8 h-8 md:w-16 md:h-16 " />
          <h3 className=" v2311-font-body md:v2311-font-h3 text-v2311-primary font-bold text-center mt-2 md:mt-4 ">
            Microbes(GEME Kobold)
          </h3>
          <p className="hidden lg:block v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 ">
            To improve the efficiency, inoculation of micro-organisms could be
            introduced.
          </p>
          <p className="hidden xl:block v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 ">
            Inoculum organisms utilized for composting are mainly fungi such as
            Trichoderma and Pleurotus. Some also features 'effective
            micro-organisms' (EMs).
          </p>
          <p className=" v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 ">
            GEME Kobold is a set of microbiota, which is the world's only
            previously discovered and validated high-temperature resistant
            composite microbiota. It works 100x faster than ordinary bacteria in
            natural.
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
    "Let's dive into the tiny superheroes that create a significant impact: microbes (GEME Kobold). Similar to the friendly microbes aiding digestion in your gut, with ideal conditions and regular rotation mixing, they quickly transform food scraps into organic compost.",
  // withImageOrVideo: {
  //   type: 'image',
  //   imageSrc: '/assets/images/pdp-v2311/how-geme-kobold-eat-food-waste.gif',
  // },
  withImageOrVideo: {
    type: 'video',
    videoProps: {
      // FIXME: @yeer to add a proper poster image
      // videoPosterUrl: 'https://placehold.co/358x202',
      sources: [
        // for pc
        // {
        //   minWidth: 1280,
        //   src: 'https://public-assest-434759801795.s3.us-west-1.amazonaws.com/how-microbes-works.mp4',
        // },
        // for mobile/tablet
        {
          minWidth: 0,
          src: 'https://www-geme-bio-us.s3.us-west-1.amazonaws.com/how-geme-kobold-eat-food-waste-480p.mp4',
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
    'GEME Sound level around 35-45 dB, the quietest composter on the marketing.',
  withImageOrVideo: {
    type: 'image',
    imageSrc: '/assets/images/pdp-v2311/introduction/geme-silent.jpg',
    imageAlt: 'food waste picture',
  },
  bottomContent: <PdpIntroSection4 />,
}

const contentSection21Props: IContentSection2Props = {
  title: 'Keep Throwing Garbage, GEME Take Care of the Rest',
  description: (
    <>
      🫳&nbsp;&nbsp;Add waste at anytime <br />
      🫷&nbsp;&nbsp;No need to push buttons <br />
      🕓&nbsp;&nbsp;No need to wait cycles <br />
      🤗&nbsp;&nbsp;Zero learning curve <br />
      🚮&nbsp;&nbsp;Just like regular trash bin
    </>
  ),
  imageSrc:
    '/assets/images/pdp-v2311/introduction/geme-take-care-of-the-rest.jpg',
  imageAlt: 'GEME take care of your food waste',
  isDisplayTextOnLeft: true,
}

const contentSection22Props: IContentSection2Props = {
  title: 'Innovative Microbes Based Garbage Disposal, Work Quickly & Safely',
  description: (
    <>
      🔥&nbsp;&nbsp;Not dehydrating, it's real composting <br />
      🚰&nbsp;&nbsp;Not shredding, no more clogged sink
      <br />
      🌿&nbsp;&nbsp;Not green washing, true eco-friendly solution
    </>
  ),
  imageSrc: '/assets/images/pdp-v2311/introduction/geme-garbage-disposal.jpg',
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
  description: 'Loved by 100k+ gardeners',
  items: [
    {
      id: 1,
      featured: true,
      title: 'GEME',
      imageSrc:
        '/assets/images/pdp-v2311/introduction/section-comparison-geme.jpeg',
      imageAlt: 'GEME compose',
      features: [
        'Real Compost',
        'Aerobic Fermentation',
        'Odorless & Quiet',
        'Energy Saving',
      ],
    },
    {
      id: 2,
      title: 'Dehydrator',
      imageSrc:
        '/assets/images/pdp-v2311/introduction/section-comparison-dehydrator.jpeg',
      imageAlt: 'Dehydrator',
      features: [
        'Fake Compost',
        'Cook & Dry',
        'Smelly & Noisy',
        'Energy Costly',
      ],
    },
    {
      id: 3,
      title: 'Compost Pile',
      imageSrc:
        '/assets/images/pdp-v2311/introduction/section-comparison-pile.jpeg',
      imageAlt: 'Compost Pile',
      features: [
        'Wait Long Time',
        'Dirty & Messy',
        'Often Turn Over',
        'Attract Animals',
      ],
    },
  ],
}

const pdpIntroSection7Props: IPdpIntroSection7Props = {
  title: 'Big, More & Long Term',
  description: 'Work 7x24 But Energy Saving',
  features: [
    '😄 10+ people family daily using',
    '📅 3 months no cleaning required',
    '💰 Worth the price',
  ],
}

const contentSection23Props: IContentSection2Props = {
  // title: '19L Size, 11£/5kg Daily Feed',
  title: 'Imaging A Life, No Need to Throw Food Waste Any More',
  description: (
    <>
      👪&nbsp;&nbsp;10+ people family daily using <br />
      📅&nbsp;&nbsp;3+ months no cleaning required <br />
      💰&nbsp;&nbsp;Worth the price for such a big guy <br />
      🐳&nbsp;&nbsp;19L volume, 11£/5kg daily feed capacity <br />
      🐘&nbsp;&nbsp;45.5x32x66.5(cm) 18x12.6x26.2 (inch)
    </>
  ),
  imageSrc: '/assets/images/pdp-v2311/introduction/geme-composter-size-v2.jpeg',
  imageAlt: 'Big Size for GEME Composter',
  isDisplayTextOnLeft: true,
}

const contentSection24Props: IContentSection2Props = {
  title: 'No Need to Change Filter',
  description: (
    <>
      The world&apos;s only model that uses the most advanced industrial filter,
      with <b>metal ion catalytic oxidation</b> purification.
      <br />
      This technology is powerful and requires no replacement at all.
      <br />
      Other "composter" needs to replace filter every 3 months, large hidden
      cost!
      <br />
      <br />
      👃🏻&nbsp;&nbsp;No smell <br />
      💰&nbsp;&nbsp;No additional hidden cost
      <br />
      🔨&nbsp;&nbsp;No replace errands
    </>
  ),
  imageSrc: '/assets/images/pdp-v2311/introduction/no-filters.jpg',
  imageAlt: 'GEME requires no filter replacing',
}

const contentSection8Props: IContentSection8Props = {
  title: 'No Smell Composting At Home',
  description:
    'GEME uses industrial filters with the most advanced deodorization technology. Enjoy the high tech clean modern composting, enjoy the zero waste life style.',
  items: [
    {
      id: 1,
      imageSrc: '/assets/images/pdp-v2311/introduction/no-smell-before.jpg',
      imageAlt: 'Get Smell before using GEME Composter',
    },
    {
      id: 2,
      imageSrc: '/assets/images/pdp-v2311/introduction/no-smell-after.jpg',
      imageAlt: 'No Smell after using GEME Composter',
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
      imgSrc: '/assets/images/pdp-v2311/introduction/icon-plant-on-hand.svg',
      feature: 'indoor plan',
    },
    {
      id: 2,
      Icon: usingCompostIcons.SvgFlowerOnHandIcon,
      imgSrc: '/assets/images/pdp-v2311/introduction/icon-flower-on-hand.svg',
      feature: 'bonsai',
    },
    {
      id: 3,
      Icon: usingCompostIcons.SvgRiceOnHandIcon,
      imgSrc: '/assets/images/pdp-v2311/introduction/icon-rice-on-hand.svg',
      feature: 'vegetable bed',
    },
    {
      id: 4,
      Icon: usingCompostIcons.SvgGardenCareIcon,
      imgSrc: '/assets/images/pdp-v2311/introduction/icon-garden-care.svg',
      feature: 'garden care',
    },
    {
      id: 5,
      Icon: usingCompostIcons.SvgGiftIcon,
      imgSrc: '/assets/images/pdp-v2311/introduction/icon-gift.svg',
      feature: 'share it',
    },
    {
      id: 6,
      Icon: usingCompostIcons.SvgWaterIcon,
      imgSrc: '/assets/images/pdp-v2311/introduction/icon-water.svg',
      feature: 'purify water',
    },
  ],

  // bgImageSrc: '/assets/images/pdp-v2311/use-geme-compost-in-a-garden.jpeg',
  // Use cropped one without the white lines.
  bgImageSrc:
    '/assets/images/pdp-v2311/dividers/use-geme-compost-in-a-garden-cropped.jpg',
  bgDesktopImageSrc:
    '/assets/images/pdp-v2311/dividers/use-geme-compost-in-a-garden.jpeg',

  linkText: 'GET GEME',
  linkUrl: '/product/geme',
}

function Intro(): JSX.Element {
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

      <ContentSection8 {...contentSection8Props} />

      <PdpIntroSection8 {...pdpIntroSection8Props} />
    </div>
  )
}

export default Intro
