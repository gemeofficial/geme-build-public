import clsx from 'clsx'
import { PropsWithChildren } from 'react'

interface ISectionContainerProps {
  className?: string
  noTopPadding?: boolean
  noBottomPadding?: boolean
}
export function SectionContainer({
  children,
  className,
  noTopPadding,
  noBottomPadding,
}: PropsWithChildren<ISectionContainerProps>) {
  return (
    <div
      className={clsx(
        'mx-auto px-4 md:px-10 py-8 xl:max-w-7xl',
        'md:py-9 xl:py-12',
        noTopPadding && 'pt-0 md:pt-0 xl:pt-0',
        noBottomPadding && 'pb-0 md:pb-0 xl:pb-0',
        className,
      )}
    >
      {children}
    </div>
  )
}
