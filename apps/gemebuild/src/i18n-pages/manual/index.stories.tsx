import type { Meta, StoryObj } from '@storybook/react'

import { ManualsPageEn, ManualsPageDe, ManualsPageFr } from './index'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Pages/maunals',
} satisfies Meta<typeof ManualsPageEn>

export default meta
type Story = StoryObj<typeof meta>

export const En: Story = {
  name: 'en',
  render: () => <ManualsPageEn />,
}

export const Fr: Story = {
  name: 'fr',
  render: () => <ManualsPageFr />,
}

export const De: Story = {
  name: 'de',
  render: () => <ManualsPageDe />,
}
