
/**
 * 传入选择器 获取DOM与该DOM的高度 需要引用者自行控制执行时机
 * @param selector 选择器
 */
export function getDomInfo(selector: string) {
  const el = document.querySelector(selector)
  const elHeight =
    el?.getBoundingClientRect().height || 0

  return { el, elHeight }
}