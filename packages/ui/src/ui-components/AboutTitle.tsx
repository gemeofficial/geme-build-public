import clsx from 'clsx'
import { PropsWithChildren } from 'react'

/**
 *  TODO：如传入的className与原有的冲突，请添加important权重 如text-color !text-red-600
 */

export function AboutTitle({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  return (
    <h2
      className={clsx(
        'tracking-tight text-emerald-600 v2311-font-h1',
        className,
      )}
    >
      {children}
    </h2>
  )
}

export function AboutMTitle({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  return (
    <h3
      className={clsx(
        'font-bold text-v2311-text-yellow text-xl sm:text-2xl mb-2',
        className,
      )}
    >
      {children}
    </h3>
  )
}
