import type { Meta, StoryObj } from '@storybook/react'
import HomeV2311 from './home-v2311'
import PdpIntroV2311 from './pdp-intro-v2311'
import PdpUserStoryV2311 from './pdp-user-story-v2311'
import {
  AboutContentSection1,
  AboutContentSection15,
  AboutContentSection2,
  AboutContentSection4,
  AboutContentSection6,
  AboutHeroSection,
} from 'ui'

const meta: Meta = {
  title: 'pages/pathes',
  argTypes: {},
}

export default meta

export const HomeStory: StoryObj<typeof HomeV2311> = {
  render: () => <HomeV2311 />,
  name: '/',
  args: {},
}

export const PdpIntroStory: StoryObj<typeof PdpIntroV2311> = {
  render: () => <PdpIntroV2311 />,
  name: '/product/geme#intro',
  args: {},
}

export const PdpUserStoryStory: StoryObj<typeof PdpUserStoryV2311> = {
  render: () => <PdpUserStoryV2311 />,
  name: '/product/geme#user-story',
  args: {},
}

export const AboutStory: StoryObj<typeof AboutHeroSection> = {
  render: () => (
    <div className="py-8 lg:pt-6 lg:pb-16">
      <AboutHeroSection />
      <AboutContentSection1 />
      <AboutContentSection15 />
      <AboutContentSection2 />
      <AboutContentSection4 />
      <AboutContentSection6 />
    </div>
  ),
  name: '/about',
  args: {},
}
