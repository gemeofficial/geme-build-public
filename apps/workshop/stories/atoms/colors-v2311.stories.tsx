import type { Meta, StoryObj } from '@storybook/react'
import { ColorsV2311 } from 'ui'

const meta: Meta<typeof ColorsV2311> = {
  title: 'atoms',
  component: ColorsV2311,
  argTypes: {},
}

export default meta

type Story = StoryObj<typeof ColorsV2311>

export const ColorsStory: Story = {
  render: () => <ColorsV2311 />,
  name: 'colors',
  args: {},
}
