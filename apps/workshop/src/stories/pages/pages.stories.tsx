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

import {
  aboutContentSection15ExampleData,
  aboutContentSection1ExampleData,
  aboutHeroSectionExampleData,
  aboutContentSection6ExampleData,
  aboutContentSection4ExampleData,
  aboutContentSection2ExampleData,
} from 'ui'
import IFAPage from './ifa'

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
      <AboutHeroSection {...aboutHeroSectionExampleData} />
      <AboutContentSection1 {...aboutContentSection1ExampleData} />
      <AboutContentSection15 {...aboutContentSection15ExampleData} />
      <AboutContentSection2 {...aboutContentSection2ExampleData} />
      <AboutContentSection4 {...aboutContentSection4ExampleData} />
      <AboutContentSection6 {...aboutContentSection6ExampleData} />
    </div>
  ),
  name: '/about',
  args: {},
}

export const IFAPagetory: StoryObj<typeof AboutHeroSection> = {
  render: () => <IFAPage />,
  name: '/ifa',
  args: {},
}
