import type { Meta, StoryObj } from '@storybook/react'

import {
  CompostRecycleLocationsPageEn,
  CompostRecycleLocationsPageDe,
  CompostRecycleLocationsPageFr,
} from './index'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Pages/compost-recycle-locations',
} satisfies Meta<typeof CompostRecycleLocationsPageEn>

export default meta
type Story = StoryObj<typeof meta>

export const En: Story = {
  name: 'en',
  render: () => <CompostRecycleLocationsPageEn />,
}

export const Fr: Story = {
  name: 'fr',
  render: () => <CompostRecycleLocationsPageFr />,
}

export const De: Story = {
  name: 'de',
  render: () => <CompostRecycleLocationsPageDe />,
}
