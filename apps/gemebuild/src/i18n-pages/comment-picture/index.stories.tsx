import type { Meta, StoryObj } from '@storybook/react'

import {
  CommentPicturePageDe,
  CommentPicturePageEn,
  CommentPicturePageFr,
} from '.'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Pages/comment-picture',
} satisfies Meta<typeof CommentPicturePageEn>

export default meta
type Story = StoryObj<typeof meta>

export const En: Story = {
  name: 'en',
  render: () => <CommentPicturePageEn />,
}

export const Fr: Story = {
  name: 'fr',
  render: () => <CommentPicturePageFr />,
}

export const De: Story = {
  name: 'de',
  render: () => <CommentPicturePageDe />,
}
