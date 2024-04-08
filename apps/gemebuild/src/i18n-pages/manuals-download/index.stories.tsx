import type { Meta, StoryObj } from '@storybook/react'

import { ManualsDownloadPageDe, ManualsDownloadPageEn,ManualsDownloadPageFr } from '.'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Pages/maunals-download',
} satisfies Meta<typeof ManualsDownloadPageEn>

export default meta
type Story = StoryObj<typeof meta>

export const En: Story = {
  name: 'en',
  render: () => <ManualsDownloadPageEn />,
}

export const Fr: Story = {
  name: 'fr',
  render: () => <ManualsDownloadPageFr />,
}

export const De: Story = {
  name: 'de',
  render: () => <ManualsDownloadPageDe />,
}
