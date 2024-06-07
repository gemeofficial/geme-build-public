import Viewer from 'viewerjs'

// 更多配置见:https://github.com/fengyuanchen/viewerjs?tab=readme-ov-file#options

export const defaultConfig: Viewer.Options = {
  // 定义zoom组件要读取的img上的哪个属性作为URL
  url: 'src',

  // 决定了查看器是否应该是内联的。如果设置为true，它会被插入到当前的元素中。
  inline: false,

  // 是否显示右上角关闭按钮
  button: true,

  // 是否显示底部图片缩略图导航栏
  navbar: true,

  // 是否显示图片标题
  title: true,

  // 工具栏配置
  toolbar: {
    zoomIn: 'large',
    zoomOut: 'large',
    oneToOne: false,
    reset: false,
    prev: 'large',
    play: false,
    next: 'large',
    rotateLeft: false,
    rotateRight: false,
    flipHorizontal: false,
    flipVertical: false,
  },

  // 循环滚动切换
  loop: true,

  // 是否显示提示信息
  tooltip: true,

  // 是否允许拖动
  movable: true,

  // 是否允许缩放
  zoomable: true,

  // 是否允许旋转
  rotatable: true,

  // 是否允许放大
  scalable: true,

  // 是否启用过渡动画
  transition: true,

  // 是否允许全屏
  fullscreen: true,

  // 是否允许键盘操作
  keyboard: true,

  // 最小缩放比例
  minZoomRatio: 0.3,

  inheritedAttributes: ['crossOrigin', 'decoding', 'isMap', 'loading', 'referrerPolicy', 'sizes', 'srcset', 'useMap', 'data-original-width', 'data-original-height'],

  // 定义鼠标滚轮滚动一次缩放多少比例
  // zoomRatio: 0.2,

  // 查看时的默认缩放比例
  // initialCoverage: 1,

  /**
   * 修改默认样式
   * 1.设置viewer-container完全覆盖整个屏幕 并设置层级。
   * 2.调整toolbar的左右间距
   */
  show() {
    const SPACE = 15
    const BACKDROP_TOP = 0
    const Z_INDEX = 99

    const viewerEls = document.querySelectorAll('body .viewer-container')
    viewerEls.forEach((el) => {
      el.setAttribute('style', `margin-top: ${BACKDROP_TOP}px;z-index: ${Z_INDEX};`)

      const toolItems = el.querySelectorAll('.viewer-large')
      toolItems.forEach((item) =>
        item.setAttribute('style', `margin-left: ${SPACE}px;margin-right: ${SPACE}px;`),
      )
    })
  },

  // 手机端下图片初始显示过小 强制放大的处理方法  ## 先保留
  // viewed() {
  //   if (window.innerWidth <= 625) {
  //     const viewerEls = document.querySelectorAll('body .viewer-container')
  //     viewerEls.forEach((el) => {
  //       const imgContentEl = el.querySelector('.viewer-canvas img')
  //       const currentStyle = imgContentEl?.getAttribute('style')
  //       imgContentEl?.setAttribute('style', `${currentStyle};width: 100%;height: auto;margin-left: 0;`)
  //     })
  //   }
  // },
}
