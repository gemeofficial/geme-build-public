import type { Meta, StoryObj } from '@storybook/react'

import {
  PrivacyPolicyPageDe,
  PrivacyPolicyPageEn,
  PrivacyPolicyPageFr,
  PrivacyPolicyPageIt,
} from '.'

const meta = {
  title: 'Pages/privacy-policy',
} satisfies Meta<typeof PrivacyPolicyPageEn>

export default meta
type Story = StoryObj<typeof meta>

export const En: Story = {
  name: 'en',
  render: () => <PrivacyPolicyPageEn />,
}

export const Fr: Story = {
  name: 'fr',
  render: () => <PrivacyPolicyPageFr />,
}

export const De: Story = {
  name: 'de',
  render: () => <PrivacyPolicyPageDe />,
}

export const It: Story = {
  name: 'it',
  render: () => <PrivacyPolicyPageIt />,
}
