import type { Meta, StoryObj } from '@storybook/react'
import { HeroSection1, EXAMPLE_HERO_SECTION_PROPS } from 'ui'

const meta: Meta = {
  title: 'components/hero-sections',
  argTypes: {},
}

export default meta

export const StoryHeroSection1: StoryObj<typeof HeroSection1> = {
  render: (props) => (
    <HeroSection1
      {...EXAMPLE_HERO_SECTION_PROPS.heroSection1Props}
      {...props}
    />
  ),
  name: 'HeroSection1',
  args: {},
}
