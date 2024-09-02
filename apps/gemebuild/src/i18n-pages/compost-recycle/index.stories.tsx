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
import { ILocationsCardSectionProps } from './locations-page/components/LocationsCardSection'

const compostRecycleCitysExample: ILocationsCardSectionProps[] = [
  // 美国地区
  {
    title: 'US Cities',
    cardList: [
      {
        title: 'Austin, Texas',
        imageUrl: '/assets/images/compost-recycle/citys/Austin_Texas.jpg',
        id: 'austin',
      },
      {
        title: 'Cape Cod, Massachusetts',
        imageUrl:
          '/assets/images/compost-recycle/citys/Cape_Cod_Massachusetts.jpg',
        id: 'cape-cod',
      },
      {
        title: 'Maine',
        imageUrl: '/assets/images/compost-recycle/citys/Maine.jpg',
        id: 'maine',
      },
      {
        title: 'Washington, D.C.',
        imageUrl: '/assets/images/compost-recycle/citys/Washington.jpg',
        id: 'washington',
      },
      {
        title: 'Renton, Washington',
        imageUrl: '/assets/images/compost-recycle/citys/Renton_Washington.jpg',
        id: 'renton',
      },
      {
        title: 'Spokane, Washington',
        imageUrl: '/assets/images/compost-recycle/citys/Spokane_Washington.jpg',
        id: 'spokane',
      },
    ],
  },
]

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
  render: () => (
    <CompostRecycleLocationsPageEn
      compostRecycleCitys={compostRecycleCitysExample}
    />
  ),
}

export const LocationsFr: Story = {
  name: 'locations-fr',
  render: () => (
    <CompostRecycleLocationsPageFr
      compostRecycleCitys={compostRecycleCitysExample}
    />
  ),
}

export const LocationsDe: Story = {
  name: 'locations-de',
  render: () => (
    <CompostRecycleLocationsPageDe
      compostRecycleCitys={compostRecycleCitysExample}
    />
  ),
}

export const WatingListEn: Story = {
  name: 'watiung-list-en',
  render: () => <CompostRecycleWatingListPageEn currentCity="Washington" />,
}

export const WatingListFr: Story = {
  name: 'watiung-list-fr',
  render: () => <CompostRecycleWatingListPageFr currentCity="Washington" />,
}

export const WatingListDe: Story = {
  name: 'watiung-list-de',
  render: () => <CompostRecycleWatingListPageDe currentCity="Washington" />,
}
