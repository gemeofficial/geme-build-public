import type { Meta, StoryObj } from '@storybook/react'

import { HomeEn } from '.'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Pages/Home',
} satisfies Meta<typeof HomeEn>

export default meta
type Story = StoryObj<typeof meta>

export const En: Story = {
  render: () => <HomeEn />,
}
