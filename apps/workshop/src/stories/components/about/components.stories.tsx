import type { Meta, StoryObj } from '@storybook/react'
import {
  AboutContentSection1,
  AboutContentSection15,
  AboutContentSection2,
  AboutContentSection3,
  AboutContentSection4,
  AboutContentSection5,
  AboutContentSection6,
  AboutHeroSection,
} from 'ui'

import {
  aboutContentSection15ExampleData,
  aboutContentSection1ExampleData,
  aboutHeroSectionExampleData,
  aboutContentSection6ExampleData,
  aboutContentSection4ExampleData,
  aboutContentSection2ExampleData,
} from 'ui'

const meta: Meta = {
  title: 'components/about',
  argTypes: {},
}

export default meta

export const HeroSectionComponent: StoryObj<typeof AboutHeroSection> = {
  render: () => <AboutHeroSection {...aboutHeroSectionExampleData} />,
  name: 'AboutHeroSection',
  args: {},
}

export const AboutContentSection1Component: StoryObj<
  typeof AboutContentSection1
> = {
  render: () => <AboutContentSection1 {...aboutContentSection1ExampleData} />,
  name: 'AboutContentSection1',
  args: {},
}

export const AboutContentSection2Component: StoryObj<
  typeof AboutContentSection2
> = {
  render: () => <AboutContentSection2 {...aboutContentSection2ExampleData} />,
  name: 'AboutContentSection2',
  args: {},
}

export const AboutContentSection3Component: StoryObj<
  typeof AboutContentSection3
> = {
  render: () => <AboutContentSection3 />,
  name: 'AboutContentSection3',
  args: {},
}

export const AboutContentSection4Component: StoryObj<
  typeof AboutContentSection4
> = {
  render: () => <AboutContentSection4 {...aboutContentSection4ExampleData} />,
  name: 'AboutContentSection4',
  args: {},
}

export const AboutContentSection5Component: StoryObj<
  typeof AboutContentSection5
> = {
  render: () => <AboutContentSection5 />,
  name: 'AboutContentSection5',
  args: {},
}

export const AboutContentSection6Component: StoryObj<
  typeof AboutContentSection6
> = {
  render: () => <AboutContentSection6 {...aboutContentSection6ExampleData} />,
  name: 'AboutContentSection5',
  args: {},
}

export const AboutContentSection15Component: StoryObj<
  typeof AboutContentSection15
> = {
  render: () => <AboutContentSection15 {...aboutContentSection15ExampleData} />,
  name: 'AboutContentSection5',
  args: {},
}
