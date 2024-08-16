import type { Meta, StoryObj } from '@storybook/react'

import {
  ReviewsPageDe,
  ReviewsPageEn,
  ReviewsPageFr,
} from '.'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Pages/reviews',
} satisfies Meta<typeof ReviewsPageEn>

export default meta
type Story = StoryObj<typeof meta>

export const En: Story = {
  name: 'en',
  render: () => <ReviewsPageEn />,
}

export const Fr: Story = {
  name: 'fr',
  render: () => <ReviewsPageFr />,
}

export const De: Story = {
  name: 'de',
  render: () => <ReviewsPageDe />,
}
