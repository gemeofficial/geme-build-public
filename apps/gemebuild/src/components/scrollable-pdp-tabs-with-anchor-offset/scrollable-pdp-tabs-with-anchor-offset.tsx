'use client'

import {
  useGetProductTabsInfo,
  useGetRootHeaderInfo,
  ScrollablePdpTabs,
} from 'ui'
import type { IScrollablePdpTabsProps } from 'ui'

interface IScrollablePdpTabsWithAnchorOffsetProps
  extends Omit<IScrollablePdpTabsProps, 'anchorOffset'> {}

function ScrollablePdpTabsWithAnchorOffset(
  props: IScrollablePdpTabsWithAnchorOffsetProps,
) {
  const { rootHeaderHeight } = useGetRootHeaderInfo()
  const { productTabsHeight } = useGetProductTabsInfo()

  // 偏移量 = header高度 + 吸顶tabs高度
  const anchorOffset = -(rootHeaderHeight + productTabsHeight)

  return <ScrollablePdpTabs {...props} anchorOffset={anchorOffset} />
}

export { ScrollablePdpTabsWithAnchorOffset }
export type { IScrollablePdpTabsWithAnchorOffsetProps }
