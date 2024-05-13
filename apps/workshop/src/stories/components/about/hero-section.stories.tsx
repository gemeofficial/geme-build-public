import type { Meta, StoryObj } from '@storybook/react'
import HeroSection from './HeroSection'

const meta: Meta = {
  title: 'components/about',
  argTypes: {},
}

export default meta

export const AboutHeroSection: StoryObj<typeof HeroSection> = {
  render: (props) => (
    <HeroSection />
  ),
  name: 'AboutHeroSection',
  args: {},
}
