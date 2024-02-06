import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'
import typography from '@tailwindcss/typography'
import aspectRatio from '@tailwindcss/aspect-ratio'
import forms from '@tailwindcss/forms'

const tailwindPreset: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        v2311: ['SourceHanSansCN', ...defaultTheme.fontFamily?.sans],
      },
      colors: {
        v2311: {
          primary: '#058669',
          fg: {
            'light-black': '#999999',
            black: '#666666',
            'dark-black': '#333333',
          },
          bg: {
            'light-green': '#D2E7DB',
            'dark-green': '#3B806F',
          },
        },
      },
      maxWidth: {
        '8xl': '1920px',
      },
      screens: {
        '3xl': '1920px',
      },
    },
  },
  plugins: [typography, aspectRatio, forms],
}

export default tailwindPreset
