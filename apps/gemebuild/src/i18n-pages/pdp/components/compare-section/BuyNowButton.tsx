'use client'

import clsx from 'clsx'
import { PropsWithChildren } from 'react'
import { productGemeMixpanelEventHandles } from '../../../../lib/mixpanel-config/product-geme'

export default function BuyNowButton({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  return (
    <a
      className={clsx(
        'md:text-lg xl:text-xl bg-v2311-bg-dark-green hover:bg-v2311-primary transition-all duration-300 text-white flex items-center justify-center my-4 rounded-full py-2 md:py-3 xl:px-8',
        className,
      )}
      onClick={productGemeMixpanelEventHandles.clickBuyNowFromCompare}
      href="/product/geme"
    >
      {children}
    </a>
  )
}
