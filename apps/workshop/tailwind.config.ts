// tailwind config is required for editor support
import type { Config } from 'tailwindcss'
import { tailwindPreset } from 'tailwind-config'

const config: Pick<Config, 'presets' | 'content' | 'theme'> = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    '../../packages/ui/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  presets: [tailwindPreset],
}

export default config
