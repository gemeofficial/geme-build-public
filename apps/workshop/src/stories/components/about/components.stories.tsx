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

const meta: Meta = {
  title: 'components/about',
  argTypes: {},
}

export default meta

export const HeroSectionComponent: StoryObj<typeof AboutHeroSection> = {
  render: () => <AboutHeroSection />,
  name: 'AboutHeroSection',
  args: {},
}

export const AboutContentSection1Component: StoryObj<
  typeof AboutContentSection1
> = {
  render: () => <AboutContentSection1 />,
  name: 'AboutContentSection1',
  args: {},
}

export const AboutContentSection2Component: StoryObj<
  typeof AboutContentSection2
> = {
  render: () => <AboutContentSection2 />,
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
  render: () => <AboutContentSection4 />,
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
  render: () => <AboutContentSection6 />,
  name: 'AboutContentSection5',
  args: {},
}

export const AboutContentSection15Component: StoryObj<
  typeof AboutContentSection15
> = {
  render: () => <AboutContentSection15 />,
  name: 'AboutContentSection5',
  args: {},
}
