'use client'

import clsx from 'clsx'
import { ILinkComponent } from '../../../../apps/gemebuild/src/contexts/link-context'
import DefaultLink from 'next/link'
import { ComponentProps, PropsWithChildren } from 'react'

export interface IButtonProps extends ComponentProps<typeof DefaultLink> {
  href: string
  PrefetchLink?: ILinkComponent
  className?: string
  onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void
}

export function PrimaryButton({
  href,
  children,
  PrefetchLink,
  className,
  onClick,
}: PropsWithChildren<IButtonProps>) {
  const Link = PrefetchLink ? PrefetchLink : DefaultLink

  return (
    <Link
      href={href}
      onClick={(e) => {
        onClick && onClick(e)
      }}
      className={clsx(
        'relative inline-flex items-center rounded-md border border-transparent bg-v2311-bg-dark-green hover:bg-v2311-primary ',
        'px-2 py-1 md:px-4 md:py-2 text-xs font-medium text-white shadow-sm md:text-base ',
        'focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-1 md:focus:ring-offset-2',
        className,
      )}
    >
      {children}
    </Link>
  )
}

export function LinkButton(props: PropsWithChildren<IButtonProps>) {
  return (
    <PrimaryButton
      {...props}
      className={clsx(
        '!p-0 underline underline-offset-[6px] !text-[#333] !bg-transparent focus:!ring-transparent !shadow-none !border-none focus:!ring-offset-0',
        props.className,
      )}
    >
      {props.children}
    </PrimaryButton>
  )
}
