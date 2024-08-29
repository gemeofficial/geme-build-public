import type { Meta, StoryObj } from '@storybook/react'

import {
  CompostRecyclePageEn,
  CompostRecyclePageDe,
  CompostRecyclePageFr,
} from './index'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Pages/compost-recycle',
} satisfies Meta<typeof CompostRecyclePageEn>

export default meta
type Story = StoryObj<typeof meta>

export const En: Story = {
  name: 'en',
  render: () => <CompostRecyclePageEn />,
}

export const Fr: Story = {
  name: 'fr',
  render: () => <CompostRecyclePageFr />,
}

export const De: Story = {
  name: 'de',
  render: () => <CompostRecyclePageDe />,
}
