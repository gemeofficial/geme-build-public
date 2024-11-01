import type { Meta, StoryObj } from '@storybook/react'
import { ColorsV2311, FontsV2311 } from 'ui'
import { PrimaryButton, LinkButton, TransparentButton, WhiteButton } from 'ui'

const meta: Meta = {
  title: 'atoms/atoms',
  argTypes: {},
}

export default meta

export const ColorsStory: StoryObj<typeof ColorsV2311> = {
  render: () => <ColorsV2311 />,
  name: 'colors',
  args: {},
}

export const FontsStory: StoryObj<typeof FontsV2311> = {
  render: () => <FontsV2311 />,
  name: 'fonts',
  args: {},
}

export const StoryPrimaryButton: StoryObj<typeof PrimaryButton> = {
  render: (props) => (
    <div className="w-[300px] flex flex-col gap-10">
      <PrimaryButton {...props}>PrimaryButton</PrimaryButton>
      <LinkButton {...props}>LinkButton</LinkButton>
      <TransparentButton {...props}>TransparentButton</TransparentButton>
      <div className="bg-gray-500 w-[500px] h-[200px] flex items-center justify-center">
        <WhiteButton {...props}>WhiteButton</WhiteButton>
      </div>
    </div>
  ),
  name: 'buttons',
}
