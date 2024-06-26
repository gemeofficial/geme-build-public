// tailwind config is required for editor support
import type { Config } from 'tailwindcss'
import { tailwindPreset } from 'tailwind-config'

const config: Pick<Config, 'presets' | 'content' | 'theme'> = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  presets: [tailwindPreset],
  
}

// eslint-disable-next-line import/no-default-export -- tailwind config should use default exports
export default config
