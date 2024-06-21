/**
 * 传入选择器 获取DOM与该DOM的高度 需要引用者自行控制执行时机
 * @param selector 选择器
 */
export function getDomInfo(selector: string) {
  if (typeof window === 'undefined') {
    return { el: null, elHeight: 0 }
  }

  const el = window.document.querySelector(selector)
  const elHeight =
    el?.getBoundingClientRect().height || 0

  return { el, elHeight }
}