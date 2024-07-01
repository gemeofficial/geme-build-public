import clsx from 'clsx'
import { PropsWithChildren } from 'react'

export function SectionContainer({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  return (
    <div
      className={clsx(
        'mx-auto px-4 md:px-8 py-8 md:py-16 xl:py-20 xl:max-w-7xl',
        className,
      )}
    >
      {children}
    </div>
  )
}