'use client'

import DefaultLink from 'next/link'
import { ILinkComponent } from '../../../../apps/gemebuild/src/contexts/link-context'
import { hasMixpanel } from '../lib'
import mixpanel from 'mixpanel-browser'
import clsx from 'clsx'

export function Button({
  className,
  PrefetchLink,
  text,
}: {
  text: string
  className?: string
  PrefetchLink?: ILinkComponent
}) {
  const Link = PrefetchLink ? PrefetchLink : DefaultLink

  return (
    <Link
      href="/ifa-active-form"
      onClick={() => {
        if (hasMixpanel()) {
          mixpanel.track('Click IFA Page Submit Video Button', {
            PageUrl: location.href,
          })
        }
      }}
      className={clsx(
        'flex items-center rounded-md  bg-v2311-bg-dark-green shadow-sm md:text-base',
        'hover:bg-v2311-primary px-6 py-3 md:px-8 md:py-3 text-sm font-medium ',
        'text-white max-w-max',
        className,
      )}
    >
      {text}
    </Link>
  )
}
