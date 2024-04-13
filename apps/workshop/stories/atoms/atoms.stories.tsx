import type { Meta, StoryObj } from '@storybook/react'
import { ColorsV2311, FontsV2311 } from 'ui'

const meta: Meta = {
  title: 'atoms/atoms',
  argTypes: {},
}

export default meta

export const ColorsStory: StoryObj<typeof ColorsV2311> = {
  render: () => <ColorsV2311 />,
  name: 'colors',
  args: {},
}

export const FontsStory: StoryObj<typeof FontsV2311> = {
  render: () => <FontsV2311 />,
  name: 'fonts',
  args: {},
}
