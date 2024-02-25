import type { Meta, StoryObj } from '@storybook/react'

import GemeSpecs from '.'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/GemeSpecs',
  component: GemeSpecs,
} satisfies Meta<typeof GemeSpecs>

export default meta
type Story = StoryObj<typeof meta>

export const En: Story = {
  args: {
    title: 'Tech spec',
    specs: [
      {
        id: 1,
        name: 'Size',
        description: 'W320*D455*H665mm  (18" x 12.6" x 26.2")',
      },
      {
        id: 2,
        name: 'Weight',
        description: '19.5kg',
      },
      {
        id: 3,
        name: 'Power',
        description: 'AC110V-60Hz/220V-50Hz',
      },
      {
        id: 4,
        name: 'Decibel',
        description: '≈40db (23db-55db)',
      },
      {
        id: 5,
        name: 'Capacity',
        description: '5kg/day',
      },
      {
        id: 6,
        name: 'Certifications',
        description: 'CE/FCC/ISO9001/ISO14001/ISO45001',
      },
      {
        id: 7,
        name: 'Function',
        description:
          'Fully automatic quick-acting bio-composting; Safe and energy-saving; Automatic deodorization; Automatic dehumidification',
      },
    ],
  },
}
