import type { Meta, StoryObj } from '@storybook/react'

import {
  UnboxingPageEn,
  ActivateMicrobiotaPageEn,
  HowToChangeUvLampPageEn,
  CanAndCanNotPageEn,
  CautionsPageEn,
  CompostUsagePageEn,
  ControlPanelUsagePageEn,
  DailyUsagePageEn,
  HowToMakeSteadyPageEn,
} from './index'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'pages/manual-seo-page',
} satisfies Meta<typeof UnboxingPageEn>

export default meta
type Story = StoryObj<typeof meta>

export const Unboxing: Story = {
  name: 'unboxing',
  render: () => <UnboxingPageEn />,
}

export const ActivateMicrobiota: Story = {
  name: 'activate-microbiota',
  render: () => <ActivateMicrobiotaPageEn />,
}

export const HowToChangeUvLamp: Story = {
  name: 'how-to-change-uv-lamp',
  render: () => <HowToChangeUvLampPageEn />,
}

export const CanAndCanNot: Story = {
  name: 'can-and-can-not',
  render: () => <CanAndCanNotPageEn />,
}

export const Cautions: Story = {
  name: 'cautions',
  render: () => <CautionsPageEn />,
}

export const CompostUsage: Story = {
  name: 'compost-usage',
  render: () => <CompostUsagePageEn />,
}

export const ControlPanelUsage: Story = {
  name: 'control-panel-usage',
  render: () => <ControlPanelUsagePageEn />,
}

export const DailyUsage: Story = {
  name: 'daily-usage',
  render: () => <DailyUsagePageEn />,
}

export const HowToMakeSteady: Story = {
  name: 'how-to-make-steady',
  render: () => <HowToMakeSteadyPageEn />,
}
