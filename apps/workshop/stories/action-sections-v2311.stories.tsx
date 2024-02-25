import type { Meta, StoryObj } from '@storybook/react'
import { ActionSection1, EXAMPLE_ACTION_SECTION_PROPS } from 'ui'

const meta: Meta = {
  title: 'action-sections',
  argTypes: {},
}

export default meta

export const StoryActionSection1: StoryObj<typeof ActionSection1> = {
  render: (props) => (
    <ActionSection1
      {...EXAMPLE_ACTION_SECTION_PROPS.actionSection1Props}
      {...props}
    />
  ),
  name: 'ActionSection1',
  args: {
    title: 'Join the Movement',
    description:
      "A new approach to the world's waste problem begins with each of us, effortless in daily life",
    linkText: 'GET GEME',
    linkUrl: '/product/geme',
  },
}
