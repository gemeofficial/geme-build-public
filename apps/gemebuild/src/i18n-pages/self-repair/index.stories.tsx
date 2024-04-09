import type { Meta, StoryObj } from '@storybook/react'

import { SelfRepairPageDe, SelfRepairPageEn, SelfRepairPageFr } from '.'

const meta = {
  title: 'Pages/self-repair',
} satisfies Meta<typeof SelfRepairPageEn>

export default meta
type Story = StoryObj<typeof meta>

export const En: Story = {
  name: 'en',
  render: () => <SelfRepairPageEn />,
}

export const Fr: Story = {
  name: 'fr',
  render: () => <SelfRepairPageFr />,
}

export const De: Story = {
  name: 'de',
  render: () => <SelfRepairPageDe />,
}
