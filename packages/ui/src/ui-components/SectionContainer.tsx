import clsx from 'clsx'
import { PropsWithChildren } from 'react'

export function SectionContainer({
  children,
  className,
  compact,
}: PropsWithChildren<{
  className?: string
  compact?: boolean // 紧凑型布局 间距更小
}>) {
  return (
    <div
      className={clsx(
        'mx-auto px-4 md:px-8 py-8 xl:max-w-7xl',
        compact !== undefined ? 'md:py-11 xl:py-14' : 'md:py-16 xl:py-20',
        className,
      )}
    >
      {children}
    </div>
  )
}
