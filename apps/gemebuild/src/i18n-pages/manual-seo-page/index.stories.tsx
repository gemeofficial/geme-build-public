import type { Meta, StoryObj } from '@storybook/react'

import { UnboxingPageEn } from './index'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'pages/manual-seo-page',
} satisfies Meta<typeof UnboxingPageEn>

export default meta
type Story = StoryObj<typeof meta>

export const Unboxing: Story = {
  name: 'unboxing',
  render: () => <UnboxingPageEn />,
}
