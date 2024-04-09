import type { Meta, StoryObj } from '@storybook/react'

import { IndustrialEquipmentsIdPageDe, IndustrialEquipmentsIdPageEn, IndustrialEquipmentsIdPageFr } from '.'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Pages/industrial-equipments-id',
} satisfies Meta<typeof IndustrialEquipmentsIdPageEn>

export default meta
type Story = StoryObj<typeof meta>

export const En: Story = {
  name: 'en',
  render: () => (
    <IndustrialEquipmentsIdPageEn params={{ id: 'rs-bio-100', locale: 'en' }} />
  ),
}

export const Fr: Story = {
  name: 'fr',
  render: () => (
    <IndustrialEquipmentsIdPageFr params={{ id: 'rs-bio-100', locale: 'fr' }} />
  ),
}

export const De: Story = {
  name: 'de',
  render: () => (
    <IndustrialEquipmentsIdPageDe params={{ id: 'rs-bio-100', locale: 'de' }} />
  ),
}
