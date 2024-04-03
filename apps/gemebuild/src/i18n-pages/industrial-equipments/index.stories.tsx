import type { Meta, StoryObj } from '@storybook/react'

import { IndustrialEquipmentsPageDe, IndustrialEquipmentsPageEn,IndustrialEquipmentsPageFr } from '.'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Pages/industrial-equipments',
} satisfies Meta<typeof IndustrialEquipmentsPageEn>

export default meta
type Story = StoryObj<typeof meta>

export const En: Story = {
  name: 'en',
  render: () => <IndustrialEquipmentsPageEn />,
}

export const Fr: Story = {
  name: 'fr',
  render: () => <IndustrialEquipmentsPageFr />,
}

export const De: Story = {
  name: 'de',
  render: () => <IndustrialEquipmentsPageDe />,
}
