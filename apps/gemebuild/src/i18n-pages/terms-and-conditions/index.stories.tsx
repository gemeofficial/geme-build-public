import type { Meta, StoryObj } from '@storybook/react'

import {
  TermsAndConditionsPageDe,
  TermsAndConditionsPageEn,
  TermsAndConditionsPageFr,
  TermsAndConditionsPageIt,
} from '.'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Pages/terms-and-conditions',
} satisfies Meta<typeof TermsAndConditionsPageEn>

export default meta
type Story = StoryObj<typeof meta>

export const En: Story = {
  name: 'en',
  render: () => <TermsAndConditionsPageEn />,
}

export const Fr: Story = {
  name: 'fr',
  render: () => <TermsAndConditionsPageFr />,
}

export const De: Story = {
  name: 'de',
  render: () => <TermsAndConditionsPageDe />,
}

export const It: Story = {
  name: 'it',
  render: () => <TermsAndConditionsPageIt />,
}
