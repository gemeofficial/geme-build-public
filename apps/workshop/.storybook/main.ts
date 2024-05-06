import type { StorybookConfig } from '@storybook/nextjs'

import { join, dirname } from 'path'
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin'

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')))
}
const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@storybook/addon-onboarding'),
    getAbsolutePath('@storybook/addon-interactions'),
    '@chromatic-com/storybook'
  ],
  framework: {
    name: getAbsolutePath('@storybook/nextjs'),
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  staticDirs: ['../../gemebuild/public'], //👈 Configures the static asset folder in Storybook
  webpackFinal: async (config) => {
    if (config.resolve != null) {
      config.resolve.plugins = [new TsconfigPathsPlugin()]
    }
    return config
  },
}
export default config
