import type { Meta, StoryObj } from '@storybook/react'
import { IInlinePalyerType, InlinePlayer } from 'ui'

const meta: Meta = {
  title: 'components/inline-player',
  argTypes: {},
}

export default meta

const exampleData: IInlinePalyerType = {
  title: 'Seeing is Believing',
  description:
    "See the incredible speed for yourself! This unedited 7-hour video showcases how quickly our machine works. Witness the breakdown of nearly 2kg of food waste – a feat none of our competitors dare to demonstrate publicly. We believe customers deserve transparency, even if it's not good looking and tedious.",
  type: 'youtube',
  videoSrcUrlOrVidioId: 'nlsTg4l_3zE',
}

// const exampleData: IInlinePalyerType = {
//   title: 'Seeing is Believing',
//   description: 'Watch our video to learn more',
//   type: 'mp4',
//   videoSrcUrlOrVidioId: 'https://www-geme-bio-us.s3.us-west-1.amazonaws.com/hero-banner-window-video-19s-480p.mp4',
// }

export const StoryHeroSection1: StoryObj<typeof InlinePlayer> = {
  render: () => <InlinePlayer {...exampleData} />,
  name: 'InlinePlayer',
  args: {},
}
