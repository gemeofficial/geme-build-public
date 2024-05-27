'use client'

import { useEffect, useRef } from 'react'
import { ScrollablePdpTabs } from 'ui'
import type { IScrollablePdpTabsProps } from 'ui'

function useAnchorOffset() {
  // width >= 768px
  // const isMd = useMediaQuery('(min-width: 768px)')
  const isMd = useRef(false)
  useEffect(() => {
    isMd.current = window.innerWidth >= 768
  }, [])

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
