/* eslint-disable react/no-unescaped-entities */
import { IGridWithOffsetIconsLiteProps } from '../../components/feature-sections'
import EnjoyYourLife, { IEnjoyYourLifeProps } from './components/EnjoyYourLife'
import Features from './components/Features'
import FeaturesWithIcons, { FeatureIcon } from './components/FeaturesWithIcons'
import HeroSection, { IHeroSectionProps } from './components/HeroSection'

// kobold页第一部分配置项 En
const heroSectionProps: IHeroSectionProps = {
  title: 'GEME KOBOLD',
  description:
    'The Magic Power To Turn Bio-Waste Into A Highly Active Organic compost.',
  highlights: [
    {
      id: 1,
      title: 'Pest Defense',
      description: 'Keep plants free from disease and pests.',
      iconPath: '/assets/images/geme-kobold/highlight-icon-1.svg',
    },
    {
      id: 2,
      title: 'Bloom & Fruit Boost',
      description: 'Make flowers smell better, fruit sweeter and harvest more.',
      iconPath: '/assets/images/geme-kobold/highlight-icon-2.svg',
    },
    {
      id: 3,
      title: 'Land & River Revive',
      description:
        'Make the land more fertile, the rivers clearer and the environment better.',
      iconPath: '/assets/images/geme-kobold/highlight-icon-3.svg',
    },
  ],
}

// kobold页第二部分配置项 En
const featuresProps = {
  section1Title: 'Natural Microbiota',
  section1Description: (
    <>
      GEME-Kobold is the world's sole known high-temperature resistant composite
      microbiota, an ancient community with decades of evolutionary success. It
      is not an artificially developed microbe but a practitioner of natural
      circulation law.
    </>
  ),
  section2Title: 'Unique In The World',
  section2Description: (
    <>
      In the high-efficiency biological waste processor's circulation system,
      bio-waste undergoes rapid heating to 75℃, fermenting and drying with
      GEME-Kobold's action.
      <br />
      <br />
      This aerobic high-temperature exposure kills potential pathogens and
      neutralizes the harmfulness of fermenting products.
    </>
  ),
  section3Title: 'Complex Microbiota',
  section3Description: (
    <>
      GEME-Kobold significantly contributes to organic matter recycling. It
      comprises 46 complex, heat-tolerant aerobic bacillus bacteria.
      <br />
      <br />
      Within 6-8 hours, it can decompose various bio-wastes, producing
      high-activity organic fertilizer. It also activates soil and water
      microorganisms, rejuvenating them.
    </>
  ),
}

// kobold页第三部分配置项 En
const featuresWithIconsProps: IGridWithOffsetIconsLiteProps = {
  title: 'Nutritional Superiority',
  description: 'Rich in the beneficial microbiota of GEME-Kobold',
  features: [
    {
      icon: FeatureIcon(1, 'Pollution-Free'),
      name: 'Pollution-Free',
      description:
        'Agricultural methods derived from the natural circulation system.',
    },
    {
      icon: FeatureIcon(2, 'Highly Secure'),
      name: 'Highly Secure',
      description:
        'Using the original microorganisms in the soil, the ecosystem will not be destroyed. No need for pesticides.',
    },
    {
      icon: FeatureIcon(3, 'Strong Disease Resistance'),
      name: 'Strong Disease Resistance',
      description:
        'Soils rich in beneficial microorganisms make it difficult for pathogens to enter.',
    },
    {
      icon: FeatureIcon(4, 'Crop Quality Improvement'),
      name: 'Crop Quality Improvement',
      description:
        'Practice has proven that the yield is 20%-30% higher than that of chemical crops.',
    },
    {
      icon: FeatureIcon(5, 'Heat And Cold Resilient'),
      name: 'Heat And Cold Resilient',
      description:
        'Microbes produce organic ingredients that activate the roots, and crops are healthy even in cold or hot weather.',
    },
    {
      icon: FeatureIcon(6, 'Higher Yields'),
      name: 'Higher Yields',
      description:
        'It tastes and has better nutritional value than chemical crops.',
    },
    {
      icon: FeatureIcon(7, 'Crop Disorder Resistance'),
      name: 'Crop Disorder Resistance',
      description:
        'Even with continuous planting, as the soil becomes healthy, it is easy to overcome disease and yield decline. Nematode bacteria (root knots) disappear.',
    },
    {
      icon: FeatureIcon(8, 'Hygiene'),
      name: 'Hygiene',
      description:
        'GEME-Kobold is a high temperature of 80°C activated bacteria, the high-temperature environment prevents pathogens from entering, thus creating a highly safe microbial soil.',
    },
    {
      icon: FeatureIcon(9, 'Soil Fungi Balance'),
      name: 'Soil Fungi Balance',
      description:
        'GEME-Kobold contains more than 46 soil bacteria that have been identified, which put the soil in good condition faster than a single soil bacterium.',
    },
  ],
}

// kobold页第四部分配置项 En
const enjoyYourLifeProps: IEnjoyYourLifeProps = {
  title: 'Try Kobold Out',
  description: (
    <>
      Stop paying extra cost for fertilizer, stop worrying about turning over
      the pile, stop wasting your food waste. Start harvesting fruits,
      vegetables and flowers on the balcony and backyard!
    </>
  ),
}

export function GemeKoboldPageEn() {
  return (
    <>
      <HeroSection {...heroSectionProps} />
      <Features {...featuresProps} />
      <FeaturesWithIcons {...featuresWithIconsProps} />
      <EnjoyYourLife {...enjoyYourLifeProps} />
    </>
  )
}
