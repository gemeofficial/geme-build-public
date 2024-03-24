import type { Meta, StoryObj } from '@storybook/react'

import { PrivacyPolicyPageEn,PrivacyPolicyPageFr } from '.'

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
