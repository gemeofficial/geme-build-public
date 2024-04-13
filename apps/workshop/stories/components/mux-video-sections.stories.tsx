import type { Meta, StoryObj } from '@storybook/react'
import { ExampleMuxVideoPlayer } from 'ui'

const meta: Meta = {
  title: 'components/mux-video-sections',
  argTypes: {},
}

export default meta

export const StoryExampleMuxVideoPlayer: StoryObj<
  typeof ExampleMuxVideoPlayer
> = {
  render: () => <ExampleMuxVideoPlayer />,
  name: 'ExampleMuxVideoPlayer',
  args: {},
}
