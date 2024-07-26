import type { Meta, StoryObj } from '@storybook/react'

import { GemeCarePageEn, GemeCarePageDe, GemeCarePageFr } from './index'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Pages/geme-care',
} satisfies Meta<typeof GemeCarePageEn>

export default meta
type Story = StoryObj<typeof meta>

export const En: Story = {
  name: 'en',
  render: () => <GemeCarePageEn />,
}

export const Fr: Story = {
  name: 'fr',
  render: () => <GemeCarePageFr />,
}

export const De: Story = {
  name: 'de',
  render: () => <GemeCarePageDe />,
}
