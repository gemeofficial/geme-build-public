import { Faq, IFaqProps } from 'ui'
import CardSection, { ICardSectionProps } from './components/CardSection'
import HeroSection, { IHeroSection } from './components/HeroSection'
import RecycleSection, {
  IRecycleSectionProps,
} from './components/RecycleSection'
import CardSection2, { ICardSectionProps2 } from './components/CardSection2'
import { ICompostRecyclePageProps } from './en'

//  heroSection
const heroSectionProps: IHeroSection = {
  title: (
    <div className="max-w-lg text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-[80px] font-normal">
      Let us take care of the trash for you.
    </div>
  ),
  description: (
    <p className="md:text-xl">
      The GEME Food Recycling Program makes dealing with food waste easy with a
      local organics pickup program.
    </p>
  ),
  imageUrl: '/assets/images/compost-recycle/hero-image.jpg',
  primaryButtonText: 'Join Our',
  linkButtonText: 'See Future Locations',
}

// 卡片Section 1
const cardSectionProps: ICardSectionProps = {
  title:
    'Did you forget how gross your garbage can get because of rotting food waste?',
  buttonText: 'Join us now',
  cardList: [
    {
      title: 'No more smells',
      description:
        'GEME gets the stink out of your trash by totally transforming your food waste.',
      imageUrl: '/assets/images/compost-recycle/card1.webp',
    },
    {
      title: 'No more pests',
      description:
        'Transforming your waste in GEME allows you to avoid attracting pests',
      imageUrl: '/assets/images/compost-recycle/card2.webp',
    },
    {
      title: '80% less trash',
      description:
        'GEME reduces your food waste dramatically. Which means less trips to the curb.',
      imageUrl: '/assets/images/compost-recycle/card3.webp',
    },
  ],
}

// 卡片Section 2
const cardSectionProps2: ICardSectionProps2 = {
  title: 'How It Works',
  cardList: [
    {
      title: 'Use GEME to Transform Food Scraps',
      description:
        'We send you a GEME and you use it to transform your food scraps into nutrient-rich GEME Earth.',
      imageUrl:
        '/assets/images/pdp-v2311/introduction/geme-take-care-of-the-rest.jpg',
    },
    {
      title: 'Fill Your GEME Earth Bin',
      description: `Add all your GEME Earth into the reusable bin we provide and, once it's full, you can schedule your pickup with us. We’ll take it and leave a new bin to fill up.`,
      imageUrl:
        '/assets/images/pdp-v2311/introduction/geme-take-care-of-the-rest.jpg',
    },
    {
      title: 'Use the App to Schedule Pickup',
      description:
        'GEME Earth pickup is scheduled right in our app. Leave your bin outside your door and we’ll take and donate it to local farms and partners to regenerate the soil. ',
      imageUrl:
        '/assets/images/pdp-v2311/introduction/geme-take-care-of-the-rest.jpg',
    },
  ],
}

// 堆肥回收Section
const recycleSectionProps: IRecycleSectionProps = {
  title: 'Agricultural Circularity: From Farm to Food to Farm Again',
  description: `Your food doesn't need to become trash. Together we can divert food scraps from our overflowing landfills, turn it into natural fertilizer, and get it into the hands of local farmers to help revitalize and promote regenerative agriculture while reducing waste.`,
  imageUrl: '/assets/images/geme-v2-product/geme-4r.jpeg',
  alt: 'Geme Compost Recycle Process',
}

// Faqs
const faqListSectionProps: IFaqProps = {
  title: 'Frequently asked questions',
  description: '',
  faqs: [
    {
      slug: 'what-is-geme',
      question: 'What is GEME?',
      answer: `
        GEME is your little helper for an easy home!
        <br />
        No more smelly, leaking garbage, puffing fruit flies, yard full of
        mice, maggots in the yard waste bin or throwing away food scraps
        to rot in the landfill.
        <br />
        With GEME, you will be able to turn your waste into nutrient-rich
        organic compost.
        <br />
        Revolutionize the way you dispose of your waste while returning
        nutrient-rich soil to the earth.
    `,
    },
    {
      slug: 'what-s-bio-waste',
      question: 'What’s bio-waste?',
      answer: `Bio-waste is defined as biodegradable garden and park waste, food and kitchen waste from households, restaurants, caterers and retail premises, and comparable waste from food processing plants. Because GEME-Kobold is a microorganism from nature, it is capable of breaking down most biological waste. For GEME, you can simply understand that GEME can rapidly handle everything you can eat and your little pet's poop.`,
    },
    {
      slug: 'can-food-waste-be-composted',
      question: 'Can food waste be composted?',
      answer: `Yes, it is possible. Unlike traditional garden composting, GEME was designed for food waste! Food waste is rich in protein and is one of the best sources of input for composting. So let your little GEME help you eat the greasy leftovers and produce organic fertilizer! Tip: Remember to drain the vegetable broth, too wet environment is not conducive to composting, although the GEME can automatically sense dehumidification, but the effort to save a little energy consumption, is not a good thing!`,
    },
    {
      slug: 'is-it-possible-to-avoid-the-use-of-microbiome',
      question: 'Is it possible to avoid the use of microbiome?',
      answer: `
        The essence of composting is a dynamic process achieved by the
        interaction of multiple microbial communities with very rapid
        community structure succession. The initial heating and high
        temperature stage can play a role in killing harmful substances
        such as pathogenic pathogens, insect eggs, weed seeds, etc., but
        the main role of microorganisms in this process also includes
        metabolism and reproduction, while producing a small amount of
        metabolites, which are neither stable nor easy to be absorbed by
        plants; after the cooling and decomposition period in the late
        stage of composting, microorganisms will carry out the
        humification of organic matter, and in this process produce a
        large number of metabolites that are beneficial to plant growth
        and absorption. Therefore, traditional composting generally takes
        4-6 months.
        <br />
        No microorganism in nature can establish an effective and stable
        microbial population within 24 hours, and the minimum incubation
        time is generally 48-72 hours, which refers to the process of
        adapting microorganisms to the new environment at the beginning of
        composting, that is, the process of domestication. After the end
        of the domestication process, it enters the middle temperature
        growth stage and the high temperature stage, which represents the
        settlement of microorganisms in the reactor and the initiation of
        the degradation process. Therefore, if the microbiota is not
        added, then after drying and dehydrating through the equipment in
        24 hours or even less, only the charred and dehydrated garbage is
        obtained, not organic fertilizer. This is also the biggest
        difference between GEME and other short-term waste drying
        processors.
        <br />
        So the microbiome must be added.
      `,
    },
    {
      slug: 'can-geme-kobold-regenerate',
      question: 'Can GEME-Kobold regenerate?',
      answer: `GEME-Kobold is a highly regenerative microbiota. But don't forget
    that after rapid composting, the organic fertilizer produced is only
    5% of the volume of biological waste that was originally put in, and
    if a large amount of biological waste is continuously poured after
    this, the effect and speed of decomposition must be affected. So we
    recommend that you add GEME-Kobold in a very small amount every two
    weeks, and only 20g can keep your GEME-Kobold permanently active.`,
    },
    {
      slug: 'how-long-will-it-take-for-geme-to-turn-my-food-waste-into-compost',
      question:
        'How long will it take for GEME to turn my food waste into compost?',
      answer: `It has been experimentally determined that more than 380 kinds of
    biological waste can be rapidly decomposed in GEME within 6-8 hours.
    If you break up your waste as much as possible, the increased
    surface area will result in faster decomposition.`,
    },
  ],
}

export function CompostRecyclePageIt({
  PrefetchLink,
}: ICompostRecyclePageProps) {
  return (
    <>
      <div className="bg-[#FCFCFC]">
        <HeroSection {...heroSectionProps} PrefetchLink={PrefetchLink} />
        <CardSection PrefetchLink={PrefetchLink} {...cardSectionProps} />
      </div>
      <CardSection2 {...cardSectionProps2} />
      <RecycleSection {...recycleSectionProps} />
      <div className="bg-[#FCFCFC]">
        <Faq {...faqListSectionProps} />
      </div>
    </>
  )
}
