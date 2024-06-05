import type { Meta, StoryObj } from '@storybook/react'
import { Reviews } from 'ui'

const meta: Meta = {
  title: 'components/reviews',
  argTypes: {},
}

export default meta

export const StoryActionSection1: StoryObj<typeof Reviews> = {
  render: (props) => <Reviews />,
  name: 'Reviews',
}
