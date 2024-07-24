/* eslint-disable react/no-unescaped-entities */
import Features from './components/Features'
import HeroSection, { IHeroSectionProps } from './components/HeroSection'

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

export function GemeKoboldPageEn() {
  return (
    <>
      <HeroSection {...heroSectionProps} />
      <Features {...featuresProps} />
    </>
  )
}
