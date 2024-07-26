import type { Meta, StoryObj } from '@storybook/react'

import {
  CustomerServicePageEn,
  CustomerServicePageDe,
  CustomerServicePageFr,
} from './index'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Pages/customer-service',
} satisfies Meta<typeof CustomerServicePageEn>

export default meta
type Story = StoryObj<typeof meta>

export const En: Story = {
  name: 'en',
  render: () => <CustomerServicePageEn />,
}

export const Fr: Story = {
  name: 'fr',
  render: () => <CustomerServicePageFr />,
}

export const De: Story = {
  name: 'de',
  render: () => <CustomerServicePageDe />,
}
