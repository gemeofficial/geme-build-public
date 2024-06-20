// 获取bio中的Root Header的高度
export function getRootHeaderInfo() {
  const rootHeaderEl = document.querySelector('#root-header')
  const rootHeaderHeight = rootHeaderEl?.getBoundingClientRect().height || 0
  return { rootHeaderEl, rootHeaderHeight }
}

// 获取pdp页中的吸顶tabs的高度
export function getProductTabsInfo() {
  const productTabsEl = document.querySelector('#product-tabs-container')
  const productTabsHeight = productTabsEl?.getBoundingClientRect().height || 0
  return { productTabsEl, productTabsHeight }
}