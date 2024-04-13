import type { Meta, StoryObj } from '@storybook/react'
import {
  TabsDemo,
  PdpTabs,
  PdpTabsWithHash,
  ScrollablePdpTabs,
  EXAMPLE_TABS_PROPS,
} from 'ui'

const meta: Meta = {
  title: 'components/tabs',
  argTypes: {},
}

export default meta

export const StoryTabsDemo: StoryObj<typeof TabsDemo> = {
  render: () => <TabsDemo />,
  name: 'TabsDemo',
  args: {},
}

export const StoryPdpTabs: StoryObj<typeof PdpTabs> = {
  render: (props) => (
    <PdpTabs {...props} {...EXAMPLE_TABS_PROPS.pdpTabsProps} />
  ),
  name: 'PdpTabs',
  args: {},
}

export const StoryPdpTabsWithHash: StoryObj<typeof PdpTabsWithHash> = {
  render: (props) => (
    <PdpTabsWithHash {...props} {...EXAMPLE_TABS_PROPS.pdpTabsWithHashProps} />
  ),
  name: 'PdpTabsWithHash',
  args: {},
}

export const StoryScrollablePdpTabs: StoryObj<typeof ScrollablePdpTabs> = {
  render: (props) => (
    <ScrollablePdpTabs
      {...props}
      {...EXAMPLE_TABS_PROPS.scrollablePdpTabsProps}
    />
  ),
  name: 'ScrollablePdpTabs',
  args: {},
}
