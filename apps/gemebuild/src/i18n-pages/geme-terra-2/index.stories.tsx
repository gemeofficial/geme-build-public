import type { Meta, StoryObj } from '@storybook/react'

import {
  GemeTerra2PageDe,
  GemeTerra2PageEn,
  GemeTerra2PageFr,
  GemeTerra2PageIt,
} from '.'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Pages/geme-terra-2',
} satisfies Meta<typeof GemeTerra2PageEn>

export default meta
type Story = StoryObj<typeof meta>

export const En: Story = {
  name: 'en',
  render: () => <GemeTerra2PageEn />,
}

export const Fr: Story = {
  name: 'fr',
  render: () => <GemeTerra2PageFr />,
}

export const De: Story = {
  name: 'de',
  render: () => <GemeTerra2PageDe />,
}

export const It: Story = {
  name: 'it',
  render: () => <GemeTerra2PageIt />,
}
