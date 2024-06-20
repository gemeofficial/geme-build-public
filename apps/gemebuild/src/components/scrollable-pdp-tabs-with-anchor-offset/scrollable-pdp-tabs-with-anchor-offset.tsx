'use client'

import { getProductTabsInfo, getRootHeaderInfo, ScrollablePdpTabs } from 'ui'
import type { IScrollablePdpTabsProps } from 'ui'

interface IScrollablePdpTabsWithAnchorOffsetProps
  extends Omit<IScrollablePdpTabsProps, 'anchorOffset'> {}

function ScrollablePdpTabsWithAnchorOffset(
  props: IScrollablePdpTabsWithAnchorOffsetProps,
) {
  const { rootHeaderHeight } = getRootHeaderInfo()
  const { productTabsHeight } = getProductTabsInfo()

  // 偏移量 = header高度 + 吸顶tabs高度 
  // 为了观感体验，再向屏幕中间偏移100px（所以-100）
  const anchorOffset = rootHeaderHeight + productTabsHeight - 100

  return <ScrollablePdpTabs {...props} anchorOffset={anchorOffset} />
}

export { ScrollablePdpTabsWithAnchorOffset }
export type { IScrollablePdpTabsWithAnchorOffsetProps }
