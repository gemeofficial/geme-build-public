import type { Meta, StoryObj } from '@storybook/react'

import { HomePageDe, HomePageEn, HomePageFr, HomePageIt } from '.'
import { exampleReviewsSectionData } from 'ui'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Pages/home',
} satisfies Meta<typeof HomePageEn>

export default meta
type Story = StoryObj<typeof meta>

export const En: Story = {
  name: 'en',
  render: () => <HomePageEn reviewsSectionConfig={exampleReviewsSectionData} />,
}

export const De: Story = {
  name: 'de',
  render: () => <HomePageDe reviewsSectionConfig={exampleReviewsSectionData} />,
}

export const Fr: Story = {
  name: 'fr',
  render: () => <HomePageFr reviewsSectionConfig={exampleReviewsSectionData} />,
}

export const It: Story = {
  name: 'it',
  render: () => <HomePageIt reviewsSectionConfig={exampleReviewsSectionData} />,
}
