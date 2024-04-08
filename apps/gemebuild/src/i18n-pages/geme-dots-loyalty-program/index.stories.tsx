import type { Meta, StoryObj } from '@storybook/react'

import { GemeDotsLoyaltyProgramPageDe, GemeDotsLoyaltyProgramPageEn,GemeDotsLoyaltyProgramPageFr } from '.'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Pages/geme-dots-loyalty-program',
} satisfies Meta<typeof GemeDotsLoyaltyProgramPageEn>

export default meta
type Story = StoryObj<typeof meta>

export const En: Story = {
  name: 'en',
  render: () => <GemeDotsLoyaltyProgramPageEn />,
}

export const Fr: Story = {
  name: 'fr',
  render: () => <GemeDotsLoyaltyProgramPageFr />,
}

export const De: Story = {
  name: 'de',
  render: () => <GemeDotsLoyaltyProgramPageDe />,
}
