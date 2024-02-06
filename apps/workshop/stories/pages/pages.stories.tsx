import type { Meta, StoryObj } from '@storybook/react'
import HomeV2311 from './home-v2311'
import PdpIntroV2311 from './pdp-intro-v2311'
import PdpUserStoryV2311 from './pdp-user-story-v2311'

const meta: Meta = {
  title: 'pages',
  argTypes: {},
}

export default meta

export const HomeV2311Story: StoryObj<typeof HomeV2311> = {
  render: () => <HomeV2311 />,
  name: 'home-v2311',
  args: {},
}

export const PdpIntroV2311Story: StoryObj<typeof PdpIntroV2311> = {
  render: () => <PdpIntroV2311 />,
  name: 'pdp-intro-v2311',
  args: {},
}

export const PdpUserStoryV2311Story: StoryObj<typeof PdpUserStoryV2311> = {
  render: () => <PdpUserStoryV2311 />,
  name: 'pdp-user-story-v2311',
  args: {},
}
