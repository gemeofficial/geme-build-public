import type { Meta, StoryObj } from '@storybook/react'

import { WarrantyPageDe, WarrantyPageEn,WarrantyPageFr } from '.'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Pages/warranty',
} satisfies Meta<typeof WarrantyPageEn>

export default meta
type Story = StoryObj<typeof meta>

export const En: Story = {
  name: 'en',
  render: () => <WarrantyPageEn />,
}

export const Fr: Story = {
  name: 'fr',
  render: () => <WarrantyPageFr />,
}

export const De: Story = {
  name: 'de',
  render: () => <WarrantyPageDe />,
}
