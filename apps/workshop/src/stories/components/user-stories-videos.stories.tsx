import type { Meta, StoryObj } from '@storybook/react'
import { UserStoriesVideos } from 'ui'

const meta: Meta = {
  title: 'components/user-stories-videos',
  argTypes: {},
}

export default meta

export const StoryActionSection1: StoryObj<typeof UserStoriesVideos> = {
  render: (props) => <UserStoriesVideos />,
  name: 'UserStoriesVideos',
}
