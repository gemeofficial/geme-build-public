import type { Meta, StoryObj } from '@storybook/react'

import { Footprints } from '.'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Footprints',
  component: Footprints,
} satisfies Meta<typeof Footprints>

export default meta
type Story = StoryObj<typeof meta>

export const En: Story = {
  args: {
    grayBackground: true,
    title: "GEME's Green Footprints in the World",
    description:
      'Thanks for backing GEME and bring more green to the world. Be the first one to spread to your place!',
    proportionalSymbolMapProps: {
      recentOrderedFrom: 'People from {city} back GEME with their love.',
    },
  },
}
