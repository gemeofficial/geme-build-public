import type { Meta, StoryObj } from '@storybook/react'
import { IInlinePalyerType, InlinePlayer } from 'ui'

const meta: Meta = {
  title: 'components/inline-player',
  argTypes: {},
}

export default meta

const exampleData: IInlinePalyerType = {
  title: 'User evaluatio',
  description: 'Watch our video to learn more',
  type: 'youtube',
  videoPosterUrl: '/assets/images/home-v2311/cover-v3.jpg',
  videoSrcUrlOrVidioId: 'nlsTg4l_3zE',
}

// const exampleData: IInlinePalyerType = {
//   title: 'User evaluatio',
//   description: 'Watch our video to learn more',
//   type: 'mp4',
//   videoPosterUrl: '/assets/images/home-v2311/cover-v3.jpg',
//   videoSrcUrlOrVidioId: 'https://www-geme-bio-us.s3.us-west-1.amazonaws.com/hero-banner-window-video-19s-480p.mp4',
// }

export const StoryHeroSection1: StoryObj<typeof InlinePlayer> = {
  render: () => <InlinePlayer {...exampleData} />,
  name: 'InlinePlayer',
  args: {},
}
