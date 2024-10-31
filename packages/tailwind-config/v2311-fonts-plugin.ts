import { PluginCreator } from 'tailwindcss/types/config'

const v2311FontsPlugin: PluginCreator = ({ addComponents }) => {
  addComponents({
    '.v2311-title-h1': {
      '@apply font-poppins font-semibold text-[58px] leading-[1.15]': {}, // 页面主标题、大型展示标题
    },
    '.v2311-title-h2': {
      '@apply font-poppins font-semibold text-[48px] leading-[1.2]': {}, // 主要章节标题、次级展示标题
    },
    '.v2311-title-h3': {
      '@apply font-poppins font-semibold text-[36px] leading-[1.25]': {}, // 次级标题、重要分标题
    },
    '.v2311-title-h4': {
      '@apply font-poppins font-semibold text-[30px] leading-[1.3]': {}, // 内容分段标题、子标题
    },
    '.v2311-title-h5': {
      '@apply font-poppins font-semibold text-[24px] leading-[1.3]': {}, // 小节标题或辅助标题
    },
    '.v2311-title-h6': {
      '@apply font-poppins font-semibold text-[20px] leading-[1.4]': {}, // 细分标题或列表标题
    },
    '.v2311-subtitle-large': {
      '@apply font-poppins font-medium text-[18px] leading-[1.4]': {}, // 次级标题，细分内容的开篇标题
    },
    '.v2311-subtitle-medium': {
      '@apply font-poppins font-medium text-[16px] leading-[1.5]': {}, // 一般子标题
    },
    '.v2311-subtitle-small': {
      '@apply font-poppins font-medium text-[14px] leading-[1.5]': {}, // 辅助性小标题
    },
    '.v2311-body-large': {
      '@apply font-poppins font-regular text-[16px] leading-[1.5]': {}, // 正文内容，主要用于段落
    },
    '.v2311-body-medium': {
      '@apply font-poppins font-regular text-[14px] leading-[1.5]': {}, // 次要正文内容
    },
    '.v2311-body-small': {
      '@apply font-poppins font-regular text-[12px] leading-[1.5]': {}, // 辅助信息、小段文字
    },
    '.v2311-caption': {
      '@apply font-poppins font-regular text-[10px] leading-[1.3]': {}, // 图注、图片说明、辅助性信息
    },
    '.v2311-button-large': {
      '@apply font-poppins font-semibold text-[16px] leading-[1.25]': {}, // 主要按钮文字
    },
    '.v2311-button-medium': {
      '@apply font-poppins font-medium text-[14px] leading-[1.25]': {}, // 次要按钮文字
    },
    '.v2311-button-small': {
      '@apply font-poppins font-medium text-[12px] leading-[1.25]': {}, // 辅助按钮或小标签
    },
    '.v2311-label': {
      '@apply font-poppins font-medium text-[12px] leading-[1.25]': {}, // 标签、表单标题
    },
  })
}

export default v2311FontsPlugin
