import { PluginCreator } from 'tailwindcss/types/config'

const v2311FontsPlugin: PluginCreator = ({ addComponents }) => {
  addComponents({
    '.v2311-font-h0': {
      '@apply font-poppins font-black not-italic text-[48px] leading-[1.2] md:text-[80px] xl:text-[70px]':
        {},
    },

    '.v2311-font-h1': {
      '@apply font-poppins font-bold not-italic text-[22px] leading-[1.2] md:text-[32px] xl:text-[40px]':
        {},
    },

    '.v2311-font-h2': {
      '@apply font-poppins font-bold not-italic text-[16px] leading-[1.2] md:text-[28px] xl:text-[32px]':
        {},
    },

    '.v2311-font-h3': {
      '@apply font-poppins font-bold not-italic text-[16px] md:text-[18px] leading-normal xl:text-[24px]':
        {},
    },

    '.v2311-font-btn': {
      '@apply font-poppins font-bold not-italic text-[16px] leading-normal xl:text-[18px]':
        {},
    },

    '.v2311-font-link-selected': {
      '@apply font-poppins font-bold not-italic text-[16px] leading-normal xl:text-[18px]':
        {},
    },

    '.v2311-font-body': {
      '@apply font-poppins font-normal not-italic text-[16px] leading-normal xl:text-[18px]':
        {},
    },

    '.v2311-font-link': {
      '@apply font-poppins font-normal not-italic text-[16px] leading-normal xl:text-[18px]':
        {},
    },
    '.v2311-font-img-desc': {
      '@apply font-poppins font-normal not-italic text-[12px] md:text-[14px] leading-normal xl:text-[16px]':
        {},
    },
  })
}

export default v2311FontsPlugin
