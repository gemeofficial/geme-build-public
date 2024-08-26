import type { Meta, StoryObj } from '@storybook/react'

import { GemeV2PageDe, GemeV2PageEn, GemeV2PageFr } from '.'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Pages/geme-v2',
} satisfies Meta<typeof GemeV2PageEn>

export default meta
type Story = StoryObj<typeof meta>

export const En: Story = {
  name: 'en',
  render: () => <GemeV2PageEn />,
}

export const Fr: Story = {
  name: 'fr',
  render: () => <GemeV2PageFr />,
}

export const De: Story = {
  name: 'de',
  render: () => <GemeV2PageDe />,
}
