import type { Meta, StoryObj } from '@storybook/react'

import { HowItWorksDe, HowItWorksEn, HowItWorksFr } from '.'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Pages/how-it-works',
} satisfies Meta<typeof HowItWorksEn>

const ReviewsComponent = () => (
  <div className=" h-96 bg-v2311-bg-light-green  flex justify-center items-center ">
    <h2 className=" v2311-font-h2 text-v2311-primary ">Reviews Placeholder</h2>
  </div>
)

export default meta
type Story = StoryObj<typeof meta>

export const En: Story = {
  name: 'en',
  render: () => <HowItWorksEn ReviewsComponent={ReviewsComponent} />,
}

export const Fr: Story = {
  name: 'fr',
  render: () => <HowItWorksFr ReviewsComponent={ReviewsComponent} />,
}

export const De: Story = {
  name: 'de',
  render: () => <HowItWorksDe ReviewsComponent={ReviewsComponent} />,
}
