import type { Meta, StoryObj } from '@storybook/react'
import { ProductOverviewV2311, EXAMPLE_PRODUCT_OVERVIEW_PROPS } from 'ui'

const meta: Meta = {
  title: 'product-overview',
  argTypes: {},
}

export default meta

export const StoryProductOverviewV2311: StoryObj<typeof ProductOverviewV2311> =
  {
    render: (props) => (
      <ProductOverviewV2311
        {...EXAMPLE_PRODUCT_OVERVIEW_PROPS.productOverviewV2311Props}
        {...props}
      />
    ),
    name: 'ProductOverviewV2311',
    args: {},
  }
