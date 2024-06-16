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
  SvgFoodWaste,
  SvgWood,
  SvgWaterDrop,
  SvgTemperature,
  SvgMicrobe,
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
  title: 'Necessary Steps for Real Composting Process',
  progresses: [
    {
      minProgress: 12.5,
      content: (
        <>
          <SvgFoodWaste className="w-8 h-8 md:w-16 md:h-16" />
          <h3 className=" v2311-font-body md:v2311-font-h3 text-v2311-primary font-bold text-center mt-2 md:mt-4 ">
            Nutrients(Food Waste)
          </h3>
          <p className=" v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2">
            Micro-organisms require C, N, phosphorus (P) and potassium (K) as
            the primary nutrients. Of particular importance is the C:N ratio of
            raw materials. The optimal C:N ratio of raw materials is between
            25:1 and 30:1 although ratios between 20:1 and 40:1 are also
            acceptable. Where the ratio is too high, the growth of
            micro-organisms is limited, resulting in a longer composting time. A
            C:N ratio of less than 20:1 leads to underutilization of N and odour
            can be a problem.
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
          <SvgOxygen className="w-8 h-8 md:w-16 md:h-16" />
          <h3 className=" v2311-font-body md:v2311-font-h3 text-v2311-primary font-bold text-center mt-2 md:mt-4 ">
            Aeration(Oxygen)
          </h3>
          <p className=" v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 ">
            Aerobic composting takes place in the presence of ample O. In this
            process, aerobic microorganisms break down organic matter and
            produce carbon dioxide (CO2), ammonia, water, heat and humus, the
            relatively stable organic end product.
          </p>
          <p className=" v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 ">
            GEME Composter provide an airflow exchange system to make this
            happen inside a box placed indoor.
          </p>
        </>
      ),
    },
    {
      minProgress: 40,
      content: (
        <>
          <SvgWood className="w-8 h-8 md:w-16 md:h-16" />
          <h3 className=" v2311-font-body md:v2311-font-h3 text-v2311-primary font-bold text-center mt-2 md:mt-4 ">
            Lignin Content(Brown Stuff)
          </h3>
          <p className=" v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 ">
            Lignin is one of the main constituents of plant cell walls, and its
            complex chemical structure makes it highly resistant to microbial
            degradation (Richard, 1996). This nature of lignin has two
            implications. One is that lignin reduces the bioavailability of the
            other cell-wall constituents, making the actual C:N ratio (viz.
            ratio of biodegradable C to N) lower than the one normally cited.
            The other is that lignin serves as a porosity enhancer, which
            creates favourable conditions for aerobic composting.
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
          <SvgWaterDrop className="w-8 h-8 md:w-16 md:h-16" />
          <h3 className=" v2311-font-body md:v2311-font-h3 text-v2311-primary font-bold text-center mt-2 md:mt-4 ">
            Moisture
          </h3>
          <p className=" v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 ">
            Moisture is necessary to support the metabolic activity of the
            micro-organisms. Composting materials should maintain a moisture
            content of 40-65 percent. Where the pile is too dry, composting
            occurs more slowly, while a moisture content in excess of 65 percent
            develops anaerobic conditions. In practice, it is advisable to start
            the pile with a moisture content of 50-60 percent, finishing at
            about 30 percent.
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
          <SvgTemperature className="w-8 h-8 md:w-16 md:h-16" />
          <h3 className=" v2311-font-body md:v2311-font-h3 text-v2311-primary font-bold text-center mt-2 md:mt-4 ">
            Temperature
          </h3>
          <p className=" v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 ">
            The process of composting involves two temperature ranges:
            mesophilic and thermophilic. While the ideal temperature for the
            initial composting stage is 20-45 °C, at subsequent stages with the
            thermophilic organisms taking over, a temperature range of 50-70 °C
            may be ideal. High temperatures characterize the aerobic composting
            process and serve as signs of vigorous microbial activities.
            Pathogens are normally destroyed at 55 °C and above, while the
            critical point for elimination of weed seeds is 62 °C. Turnings and
            aeration can be used to regulate temperature.
          </p>
        </>
      ),
    },
    {
      minProgress: 100,
      content: (
        <>
          <SvgMicrobe className="w-8 h-8 md:w-16 md:h-16" />
          <h3 className=" v2311-font-body md:v2311-font-h3 text-v2311-primary font-bold text-center mt-2 md:mt-4 ">
            Microbes(GEME Kobold)
          </h3>
          <p className=" v2311-font-img-desc md:v2311-font-body text-v2311-primary mt-1 md:mt-2 ">
            While some composters find improved aeration enough for enhanced
            microbial activities, others may need inoculation of
            micro-organisms. Inoculum organisms utilized for composting are
            mainly fungi such as Trichoderma and Pleurotus. This publication
            also features 'effective micro-organisms' (EMs).
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
    "Let's talk about the little guys that make a big difference microbesJust like the friendly microbes in your gut aid digestion, along with optimal conditions and bin rotation swiftly convert food scraps into organic compost",
  withImageOrVideo: {
    type: 'video',
    videoProps: {
      videoPosterUrl: 'https://placehold.co/358x202',
      sources: [
        // for pc
        {
          minWidth: 1280,
          src: 'https://www-geme-bio-us.s3.us-west-1.amazonaws.com/geme-genereate-compost-12s-480p.mp4',
        },
        // for mobile/tablet
        {
          minWidth: 0,
          src: 'https://www-geme-bio-us.s3.us-west-1.amazonaws.com/geme-genereate-compost-12s-480p.mp4',
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
  title: 'Up to 19L volume and 11lbs/5kg daily processing capacity ',
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
