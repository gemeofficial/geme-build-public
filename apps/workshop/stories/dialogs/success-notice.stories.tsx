import type { Meta, StoryObj } from '@storybook/react'
import { SuccessNotice, EXAMPLE_SUCCESS_NOTICE_PROPS } from 'ui'

const meta: Meta = {
  title: 'dialogs',
  argTypes: {},
}

export default meta

export const StorySuccessNotice: StoryObj<typeof SuccessNotice> = {
  render: (props) => (
    <SuccessNotice
      {...EXAMPLE_SUCCESS_NOTICE_PROPS.successNoticeProps}
      {...props}
    />
  ),
  name: 'SuccessNotice',
  args: {
    title: 'Subscribe successful',
    description: 'Thanks for subscribing to our newsletter!',
    open: true,
    setOpen: () => {
      console.log('Close success notice')
    },
  },
}
