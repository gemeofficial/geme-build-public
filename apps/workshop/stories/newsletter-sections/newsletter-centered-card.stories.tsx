import type { Meta, StoryObj } from '@storybook/react'
import {
  NewsletterCenteredCard,
  EXAMPLE_NEWSLETTER_CENTERED_CARD_PROPS,
} from 'ui'

const meta: Meta = {
  title: 'newsletter-sections',
  argTypes: {},
}

export default meta

export const StoryNewsletterCenteredCard: StoryObj<
  typeof NewsletterCenteredCard
> = {
  render: (props) => (
    <NewsletterCenteredCard
      {...EXAMPLE_NEWSLETTER_CENTERED_CARD_PROPS.newsletterCenteredCardProps}
      {...props}
    />
  ),
  name: 'NewsletterCenteredCard',
  args: {
    title: 'Join the Movement',
    description:
      "A new approach to the world's waste problem begins with each of us, effortless in daily life",
    onSubmit: (evt) => {
      evt.preventDefault()
      console.log(
        'Form submitted:',
        new FormData(evt.currentTarget).get('email-address'),
      )
    },
    emailInputName: 'email-address',
    emailLabel: 'Email address',
    emailPlaceholder: 'Enter your email',
    submitButtonLabel: 'Subscribe',
  },
}
