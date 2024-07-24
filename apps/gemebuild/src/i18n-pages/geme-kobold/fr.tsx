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

export function GemeKoboldPageFr() {
  return (
    <>
      <HeroSection {...heroSectionProps} />
    </>
  )
}
