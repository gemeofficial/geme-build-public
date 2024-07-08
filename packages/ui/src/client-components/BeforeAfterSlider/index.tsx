'use client'
import 'react-before-after-slider-component/dist/build.css'
import ReactBeforeSliderComponent from 'react-before-after-slider-component'
import './reset-styles.css'

export interface Image {
  imageUrl: string
  alt?: string
}

enum MODE {
  MOVE = 'move',
  DEFAULT = 'default',
}

export interface IBeforeAfterSliderProps {
  beforeImage: Image
  afterImage: Image
  currentPercentPosition?: number
  className?: string
  withResizeFeel?: boolean
  onReady?: () => void
  onVisible?: () => void
  onChangePercentPosition?: (newPosition: number) => void
  feelsOnlyTheDelimiter?: boolean
  delimiterIconStyles?: React.CSSProperties
  delimiterColor?: string
  onChangeMode?: (newMode: MODE) => void
}

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  ...props
}: IBeforeAfterSliderProps) {
  // 动态添加一个div父元素，解决鼠标多次拖拽会出现图片虚影的不良体验
  function addSliderBarParentDivBg() {
    const sliderBar = document.querySelector('.before-after-slider__delimiter')
    if (sliderBar) {
      // 创建新的父元素
      const newParent = document.createElement('div')
      newParent.setAttribute(
        'style',
        `position: absolute;top: 0;left: 0;right: 0;bottom: 0;background: transparent;`,
      )

      // 禁用图像可以被拖拽
      newParent.ondragstart = () => false

      const originalParent = sliderBar.parentElement
      originalParent?.appendChild(newParent)
      newParent.appendChild(sliderBar)
    }
  }

  return (
    <ReactBeforeSliderComponent
      onReady={addSliderBarParentDivBg}
      // 由于组件本身对于before after图片的左右顺序搞反了 所以这里需要传递反的数据进去
      firstImage={afterImage}
      secondImage={beforeImage}
      {...props}
    />
  )
}
