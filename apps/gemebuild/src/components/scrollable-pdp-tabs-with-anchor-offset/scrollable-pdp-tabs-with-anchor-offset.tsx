'use client'

import { ScrollablePdpTabs, useMediaQuery } from 'ui'
import type { IScrollablePdpTabsProps } from 'ui'

function useAnchorOffset() {
  // width >= 768px
  const isMd = useMediaQuery('(min-width: 768px)')

  return isMd ? -96 : -88
}

interface IScrollablePdpTabsWithAnchorOffsetProps
  extends Omit<IScrollablePdpTabsProps, 'anchorOffset'> {}

function ScrollablePdpTabsWithAnchorOffset(
  props: IScrollablePdpTabsWithAnchorOffsetProps,
) {
  const anchorOffset = useAnchorOffset()

  return <ScrollablePdpTabs {...props} anchorOffset={anchorOffset} />
}

export { ScrollablePdpTabsWithAnchorOffset }
export type { IScrollablePdpTabsWithAnchorOffsetProps }
