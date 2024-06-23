import type { Meta, StoryObj } from '@storybook/react'

import { AboutPageDe, AboutPageEn, AboutPageFr } from '.'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Pages/about',
} satisfies Meta<typeof AboutPageEn>

export default meta
type Story = StoryObj<typeof meta>

export const En: Story = {
  name: 'en',
  render: () => <AboutPageEn />,
}

export const Fr: Story = {
  name: 'fr',
  render: () => <AboutPageFr />,
}

export const De: Story = {
  name: 'de',
  render: () => <AboutPageDe />,
}
