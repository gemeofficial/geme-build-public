import type { Meta, StoryObj } from '@storybook/react'

import {
  BrandHqPageEn,
  BrandHqPageDe,
  BrandHqPageFr,
  BrandHqPageIt,
} from './index'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Pages/brand-hq',
} satisfies Meta<typeof BrandHqPageEn>

export default meta
type Story = StoryObj<typeof meta>

export const En: Story = {
  name: 'en',
  render: () => <BrandHqPageEn />,
}

export const Fr: Story = {
  name: 'fr',
  render: () => <BrandHqPageFr />,
}

export const De: Story = {
  name: 'de',
  render: () => <BrandHqPageDe />,
}

export const It: Story = {
  name: 'it',
  render: () => <BrandHqPageIt />,
}
