import clsx from 'clsx'
import { PropsWithChildren } from 'react'

/**
 *  TODO：如传入的className与原有的冲突，请添加important权重 如text-color !text-red-600
 */

export function SectionDescription({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  return (
    <p
      className={clsx(
        'v2311-font-body text-v2311-text-gary text-left xl:text-center',
        className,
      )}
    >
      {children}
    </p>
  )
}
