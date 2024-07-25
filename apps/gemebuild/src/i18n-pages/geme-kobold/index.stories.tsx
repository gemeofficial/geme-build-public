import type { Meta, StoryObj } from '@storybook/react'

import { GemeKoboldPageEn, GemeKoboldPageDe, GemeKoboldPageFr } from '.'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Pages/geme-kobold',
} satisfies Meta<typeof GemeKoboldPageDe>

export default meta
type Story = StoryObj<typeof meta>

export const En: Story = {
  name: 'en',
  render: () => <GemeKoboldPageEn />,
}

export const De: Story = {
  name: 'de',
  render: () => <GemeKoboldPageDe />,
}

export const Fr: Story = {
  name: 'fr',
  render: () => <GemeKoboldPageFr />,
}
