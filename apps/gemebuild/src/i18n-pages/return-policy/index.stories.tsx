import type { Meta, StoryObj } from '@storybook/react'

import { ReturnPolicyPageDe, ReturnPolicyPageEn, ReturnPolicyPageFr } from '.'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Pages/return-policy',
} satisfies Meta<typeof ReturnPolicyPageEn>

export default meta
type Story = StoryObj<typeof meta>

export const En: Story = {
  name: 'en',
  render: () => <ReturnPolicyPageEn />,
}

export const Fr: Story = {
  name: 'fr',
  render: () => <ReturnPolicyPageFr />,
}

export const De: Story = {
  name: 'de',
  render: () => <ReturnPolicyPageDe />,
}
