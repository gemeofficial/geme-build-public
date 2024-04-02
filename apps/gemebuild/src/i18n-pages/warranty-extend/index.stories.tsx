import type { Meta, StoryObj } from '@storybook/react'

import { WarrantyExtendPageDe, WarrantyExtendPageEn, WarrantyExtendPageFr } from '.'

const meta = {
  title: 'Pages/warranty-extend',
} satisfies Meta<typeof WarrantyExtendPageEn>

export default meta
type Story = StoryObj<typeof meta>

export const En: Story = {
  name: 'en',
  render: () => <WarrantyExtendPageEn />,
}

export const Fr: Story = {
  name: 'fr',
  render: () => <WarrantyExtendPageFr />,
}


export const De: Story = {
  name: 'de',
  render: () => <WarrantyExtendPageDe />,
}
