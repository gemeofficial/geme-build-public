import 'ui/src/styles.css'
import type { Preview } from '@storybook/react'

const preview: Preview = {
  parameters: {
    // Cf: https://storybook.js.org/docs/essentials/actions#via-storybooktest-fn-spy-function
    // actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
