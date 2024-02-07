import type { Meta, StoryObj } from '@storybook/react'
import {
  SecondLifeDemo,
  EXAMPLE_SECOND_LIFE_PROPS,
  SecondLife,
  UiCompost,
} from 'ui'

const meta: Meta = {
  title: 'second-life',
  argTypes: {},
}

export default meta

export const StorySecondLifeDemo: StoryObj<typeof SecondLifeDemo> = {
  render: () => <SecondLifeDemo />,
  name: 'SecondLifeDemo',
  args: {},
}

export const StorySecondLife: StoryObj<typeof SecondLife> = {
  render: () => (
    <div style={{ marginTop: '100vh', marginBottom: '100vh' }}>
      <SecondLife {...EXAMPLE_SECOND_LIFE_PROPS.secondLifeProps} />
    </div>
  ),
  name: 'SecondLife',
  args: {},
}

export const StoryUiCompost: StoryObj<typeof UiCompost> = {
  render: () => <UiCompost progress={0.5} />,
  name: 'UiCompost',
  args: {},
}
