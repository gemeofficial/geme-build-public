import type { Meta, StoryObj } from '@storybook/react'
import { ReviewsSection, exampleReviewsSectionData } from 'ui'

const meta: Meta = {
  title: 'components/reviews-section',
  argTypes: {},
}

export default meta

export const StoryActionSection1: StoryObj<typeof ReviewsSection> = {
  render: (props) => (
    <div className="bg-gray-100">
      <ReviewsSection
        locale="en"
        reviewsSectionConfig={exampleReviewsSectionData}
      />
    </div>
  ),
  name: 'ReviewsSection',
}
