import type { Meta, StoryObj } from '@storybook/react'

import {
  CompostRecyclePageEn,
  CompostRecyclePageDe,
  CompostRecyclePageFr,
  CompostRecycleLocationsPageEn,
  CompostRecycleLocationsPageFr,
  CompostRecycleLocationsPageDe,
  CompostRecycleWatingListPageEn,
  CompostRecycleWatingListPageFr,
  CompostRecycleWatingListPageDe,
} from './index'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Pages/compost-recycle',
} satisfies Meta<typeof CompostRecyclePageEn>

export default meta
type Story = StoryObj<typeof meta>

export const En: Story = {
  name: 'en',
  render: () => <CompostRecyclePageEn />,
}

export const Fr: Story = {
  name: 'fr',
  render: () => <CompostRecyclePageFr />,
}

export const De: Story = {
  name: 'de',
  render: () => <CompostRecyclePageDe />,
}

export const LocationsEn: Story = {
  name: 'locations-en',
  render: () => <CompostRecycleLocationsPageEn />,
}

export const LocationsFr: Story = {
  name: 'locations-fr',
  render: () => <CompostRecycleLocationsPageFr />,
}

export const LocationsDe: Story = {
  name: 'locations-de',
  render: () => <CompostRecycleLocationsPageDe />,
}


export const WatingListEn: Story = {
  name: 'watiung-list-en',
  render: () => <CompostRecycleWatingListPageEn />,
}

export const WatingListFr: Story = {
  name: 'watiung-list-fr',
  render: () => <CompostRecycleWatingListPageFr />,
}

export const WatingListDe: Story = {
  name: 'watiung-list-de',
  render: () => <CompostRecycleWatingListPageDe />,
}