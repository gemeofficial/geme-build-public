import clsx from 'clsx'
import { PropsWithChildren } from 'react'

/**
 *  TODO：如传入的className与原有的冲突，请添加important权重 如text-color !text-red-600
 */

export function SectionTitle({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  return (
    <h2
      className={clsx(
        'v2311-font-h1 text-v2311-primary text-left xl:text-center',
        className,
      )}
    >
      {children}
    </h2>
  )
}
