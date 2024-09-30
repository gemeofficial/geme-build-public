import type { Meta, StoryObj } from '@storybook/react'

import { IFAPageDe, IFAPageEn, IFAPageFr, IFAPageIt } from '.'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Pages/ifa',
} satisfies Meta<typeof IFAPageEn>

export default meta
type Story = StoryObj<typeof meta>

export const En: Story = {
  name: 'en',
  render: () => <IFAPageEn />,
}

export const Fr: Story = {
  name: 'fr',
  render: () => <IFAPageFr />,
}

export const De: Story = {
  name: 'de',
  render: () => <IFAPageDe />,
}

export const It: Story = {
  name: 'it',
  render: () => <IFAPageIt />,
}
