import type { Meta, StoryObj } from '@storybook/react'

import {
  GreenCityNetworksPageEn,
  GreenCityNetworksPageDe,
  GreenCityNetworksPageFr,
  GreenCityNetworksPageIt,
} from './index'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Pages/green-city-networks',
} satisfies Meta<typeof GreenCityNetworksPageEn>

export default meta
type Story = StoryObj<typeof meta>

export const En: Story = {
  name: 'en',
  render: () => <GreenCityNetworksPageEn />,
}

export const Fr: Story = {
  name: 'fr',
  render: () => <GreenCityNetworksPageFr />,
}

export const De: Story = {
  name: 'de',
  render: () => <GreenCityNetworksPageDe />,
}

export const It: Story = {
  name: 'it',
  render: () => <GreenCityNetworksPageIt />,
}
