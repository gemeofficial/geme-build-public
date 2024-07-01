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
import CompareSection from 'ui/src/compare-section/CompareSection'

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
          <SvgFoodWaste className="w-8 h-8 md:w-16 md:h-16" />
          <h3 className=" v2311-font-body !text-[11px] md:!text-[24px] md:!v2311-font-h3 text-v2311-primary font-bold text-center mt-2 md:mt-4 ">
            Nutrients(Food Waste)
          </h3>
          <p className="hidden md:block v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 text-xs !text-[10px] md:!text-base">
            Micro-organisms require C, N, phosphorus (P) and potassium (K) as
            the primary nutrients. C:N ratio of raw materials is important. The
            optimal C:N ratio of raw materials is between 25:1 and 30:1.
          </p>
          <p className="hidden lg:block v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 text-xs !text-[10px] md:!text-base">
            Where the ratio is too high, the growth of micro-organisms is
            limited, resulting in a longer composting time. A less C:N ratio
            leads to underutilization of N and odour can be a problem.
          </p>
          <p className=" v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 text-xs !text-[10px] md:!text-base ">
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
          <SvgOxygen className="w-8 h-8 md:w-16 md:h-16" />
          <h3 className=" v2311-font-body !text-[11px] md:!text-[24px] md:!v2311-font-h3 text-v2311-primary font-bold text-center mt-2 md:mt-4 ">
            Aerobic Composting:
            <br />
            Nature's Nutrient Cycle
          </h3>
          <p className="hidden lg:block v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 text-xs !text-[10px] md:!text-base ">
            Aerobic composting breaks down organic matter using oxygen ( O
            <sub>2</sub> ), requiring aerobic microbes to decompose materials
            into water vapor, heat, and nutrient-rich humus. The GEME composter
            simplifies this process with an efficient aeration system,
            optimizing oxygen flow for effective decomposition.
          </p>
          <p className="lg:hidden v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 text-xs !text-[10px] md:!text-base ">
            Breaks down biowaste with oxygen ( O<sub>2</sub> ) for valuable
            nutrients. GEME composter simplifies this with an efficient air
            system for faster decomposition.
          </p>
        </>
      ),
    },
    {
      minProgress: 40,
      content: (
        <>
          <SvgWood className="w-8 h-8 md:w-16 md:h-16" />
          <h3 className=" v2311-font-body !text-[11px] md:!text-[24px] md:!v2311-font-h3 text-v2311-primary font-bold text-center mt-2 md:mt-4 ">
            Brown Materials in Composting: Ensuring Optimal Conditions
          </h3>
          <p className="hidden lg:block  v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 text-xs !text-[10px] md:!text-base ">
            Brown materials, rich in carbon, play a crucial role in composting
            by balancing the carbon-to-nitrogen (C:N) ratio, essential for
            microbial activity. Their structure enhances porosity, promoting
            aerobic decomposition. GEME Kobold starter, containing carefully
            curated brown materials, ensures a balanced C:N ratio and optimal
            composting conditions.
          </p>
          <p className="lg:hidden  v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 text-xs !text-[10px] md:!text-base ">
            Brown materials, rich in carbon, balance the C:N ratio for microbes.
            Their structure promotes air flow. GEME Kobold starter provides
            these brown materials for perfect conditions
          </p>
        </>
      ),
    },
    {
      minProgress: 60,
      content: (
        <>
          <SvgWaterDrop className="w-8 h-8 md:w-16 md:h-16" />
          <h3 className=" v2311-font-body !text-[11px] md:!text-[24px] md:!v2311-font-h3 text-v2311-primary font-bold text-center mt-2 md:mt-4 ">
            Moisture: The Secret to
            <br />
            Fast Composting
          </h3>
          <p className="hidden lg:block v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 text-xs !text-[10px] md:!text-base ">
            Moisture is king in composting, impacting how microbes break down
            materials. The sweet spot? 40-60%. This fuels microbial growth,
            speeding up decomposition. Too much (&gt;70%) creates odors and
            slows breakdown. Dryness (&lt;30%) hinders microbes, stalling the
            process.
          </p>
          <p className="hidden lg:block v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 text-xs !text-[10px] md:!text-base ">
            The GEME composter simplifies moisture management. Its one-touch
            smart control automatically adjusts, ensuring the perfect 40-60%
            range for efficient, high-quality compost.
          </p>
          <p className="lg:hidden v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 text-xs !text-[10px] md:!text-base ">
            Right moisture (40-60%) fuels microbes that break down waste. Too
            wet (over 70%) creates odors and slows things down. Too dry (under
            30%) makes microbes sluggish. GEME manages moisture for perfect
            composting
          </p>
        </>
      ),
    },
    {
      minProgress: 78,
      content: (
        <>
          <SvgTemperature className="w-8 h-8 md:w-16 md:h-16" />
          <h3 className=" v2311-font-body !text-[11px] md:!text-[24px] md:!v2311-font-h3 text-v2311-primary font-bold text-center mt-2 md:mt-4 ">
            Composting:
            <br />A Temperature Dance
          </h3>
          <p className="hidden lg:block v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 text-xs !text-[10px] md:!text-base ">
            Composting transforms waste into nutrient-rich soil through
            temperature changes driven by microbial activity. Initially,
            microbes heat the compost to 40-50°C. During peak decomposition,
            temperatures rise to 50-65°C for rapid breakdown. As the compost
            matures, it cools to 30-40°C.
          </p>
          <p className="hidden lg:block v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 text-xs !text-[10px] md:!text-base ">
            The GEME composter optimizes this process by regulating temperature
            at each stage, ensuring efficient composting and high-quality
            compost.
          </p>
          <p className="lg:hidden v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 text-xs !text-[10px] md:!text-base ">
            Composting turns waste into nutrient-rich soil through temperature
            shifts caused by microbial activity. The GEME composter enhances
            this by controlling temperatures throughout, ensuring efficient and
            high-quality compost.
          </p>
        </>
      ),
    },
    {
      minProgress: 100,
      content: (
        <>
          <SvgMicrobe className="w-8 h-8 md:w-16 md:h-16" />
          <h3 className=" v2311-font-body !text-[11px] md:!text-[24px] md:!v2311-font-h3 text-v2311-primary font-bold text-center mt-2 md:mt-4 ">
            Microbes
            <br />
            (GEME Kobold)
          </h3>
          <p className="hidden lg:block v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 text-xs !text-[10px] md:!text-base ">
            Composting is a natural process driven by microbes that break down
            organic waste into nutrient-rich soil amendments. Fungi tackle tough
            materials like cellulose, while other microbes decompose other
            organics. GEME Kobold, a unique heat-resistant microbial team,
            accelerates composting.
          </p>
          <p className="lg:hidden v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 text-xs !text-[10px] md:!text-base ">
            Nature's recyclers: Microbes break down waste into nutrient-rich
            soil improvers. Fungi tackle tough materials, while others handle
            the rest. GEME Kobold, a heat-resistant microbial team, speeds up
            composting.
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
      <CompareSection />

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
