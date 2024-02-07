import type { Meta, StoryObj } from '@storybook/react'
import {
  OxygenCycle,
  exampleOxygenCycleProps,
  ScrollTriggeredAnimatedOxygenCycle,
} from 'ui'

const meta: Meta = {
  title: 'oxygen-cycle',
  argTypes: {},
}

export default meta

export const StoryOxygenCycle: StoryObj<typeof OxygenCycle> = {
  render: () => <OxygenCycle {...exampleOxygenCycleProps} progress={10} />,
  name: 'OxygenCycle',
  args: {},
}

export const StoryScrollTriggeredAnimatedOxygenCycle: StoryObj<
  typeof ScrollTriggeredAnimatedOxygenCycle
> = {
  render: () => (
    <div className="">
      <div className=" h-screen">spacer</div>
      <ScrollTriggeredAnimatedOxygenCycle {...exampleOxygenCycleProps} />
      <div className=" h-screen">spacer</div>
    </div>
  ),
  name: 'ScrollTriggeredAnimatedOxygenCycle',
  args: {},
}
