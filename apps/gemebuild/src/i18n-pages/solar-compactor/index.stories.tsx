import type { Meta, StoryObj } from '@storybook/react'

import {
  SolarCompactorPageEn,
  SolarCompactorPageDe,
  SolarCompactorPageFr,
} from './index'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Pages/solar-compactor',
} satisfies Meta<typeof SolarCompactorPageEn>

export default meta
type Story = StoryObj<typeof meta>

export const En: Story = {
  name: 'en',
  render: () => <SolarCompactorPageEn />,
}

export const Fr: Story = {
  name: 'fr',
  render: () => <SolarCompactorPageFr />,
}

export const De: Story = {
  name: 'de',
  render: () => <SolarCompactorPageDe />,
}
