import type { Meta, StoryObj } from '@storybook/react'
import { ReviewsSection, exampleReviewsSectionData } from 'ui'

const meta: Meta = {
  title: 'components/reviews-section',
  argTypes: {},
}

export default meta


export const StoryActionSection1: StoryObj<typeof ReviewsSection> = {
  render: (props) => <ReviewsSection locale='en' reviewsListConfig={exampleReviewsSectionData} />,
  name: 'ReviewsSection',
}
