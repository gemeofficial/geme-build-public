import type { Meta, StoryObj } from '@storybook/react'
import HeroSection from 'ui/src/about/HeroSection'
import ContentSection1 from 'ui/src/about/ContentSection1'
import ContentSection2 from 'ui/src/about/ContentSection2'
import ContentSection3 from 'ui/src/about/ContentSection3'
import ContentSection4 from 'ui/src/about/ContentSection4'
import ContentSection5 from 'ui/src/about/ContentSection5'

const meta: Meta = {
  title: 'components/about',
  argTypes: {},
}

export default meta

export const HeroSectionComponent: StoryObj<typeof HeroSection> = {
  render: () => <HeroSection />,
  name: 'HeroSection',
  args: {},
}

export const ContentSection1Component: StoryObj<typeof ContentSection1> = {
  render: () => <ContentSection1 />,
  name: 'ContentSection1',
  args: {},
}

export const ContentSection2Component: StoryObj<typeof ContentSection2> = {
  render: () => <ContentSection2 />,
  name: 'ContentSection2',
  args: {},
}

export const ContentSection3Component: StoryObj<typeof ContentSection3> = {
  render: () => <ContentSection3 />,
  name: 'ContentSection3',
  args: {},
}

export const ContentSection4Component: StoryObj<typeof ContentSection4> = {
  render: () => <ContentSection4 />,
  name: 'ContentSection4',
  args: {},
}

export const ContentSection5Component: StoryObj<typeof ContentSection5> = {
  render: () => <ContentSection5 />,
  name: 'ContentSection5',
  args: {},
}




