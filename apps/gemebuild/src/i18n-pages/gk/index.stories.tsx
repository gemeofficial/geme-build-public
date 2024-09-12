import type { Meta, StoryObj } from '@storybook/react'

import { GKPageEn, GKPageDe, GKPageFr, GKPageNew } from './index'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Pages/gk',
} satisfies Meta<typeof GKPageEn>

export default meta
type Story = StoryObj<typeof meta>

export const En: Story = {
  name: 'en',
  render: () => <GKPageEn />,
}

export const Fr: Story = {
  name: 'fr',
  render: () => <GKPageFr />,
}

export const De: Story = {
  name: 'de',
  render: () => <GKPageDe />,
}

export const New: Story = {
  name: 'new',
  render: () => <GKPageNew />,
}
