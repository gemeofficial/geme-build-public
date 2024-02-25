import type { Meta, StoryObj } from '@storybook/react'
import { FontsV2311 } from 'ui'

const meta: Meta<typeof FontsV2311> = {
  component: FontsV2311,
  argTypes: {},
}

export default meta

type Story = StoryObj<typeof FontsV2311>

export const Primary: Story = {
  render: () => <FontsV2311 />,
  name: 'FontsV2311',
  args: {},
}
