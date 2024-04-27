import type { Meta, StoryObj } from '@storybook/react'
import { SvgOxygenCycleProgress } from 'ui'

const meta: Meta = {
  title: 'components/animition-sections',
  argTypes: {},
}

export default meta

export const StorySvgOxygenCycleProgress: StoryObj<
  typeof SvgOxygenCycleProgress
> = {
  render: (props) => <SvgOxygenCycleProgress {...props} />,
  name: 'SvgOxygenCycleProgress',
  args: {
    progress: 20,
  },
}
