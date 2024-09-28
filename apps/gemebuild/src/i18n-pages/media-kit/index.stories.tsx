import type { Meta, StoryObj } from '@storybook/react'

import {
  MediaKitPageEn,
  MediaKitPageDe,
  MediaKitPageFr,
  MediaKitPageIt,
} from './index'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Pages/media-kit',
} satisfies Meta<typeof MediaKitPageEn>

export default meta
type Story = StoryObj<typeof meta>

export const En: Story = {
  name: 'en',
  render: () => <MediaKitPageEn />,
}

export const Fr: Story = {
  name: 'fr',
  render: () => <MediaKitPageFr />,
}

export const De: Story = {
  name: 'de',
  render: () => <MediaKitPageDe />,
}

export const It: Story = {
  name: 'it',
  render: () => <MediaKitPageIt />,
}
