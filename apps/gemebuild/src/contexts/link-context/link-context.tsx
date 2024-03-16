'use client'

import NextLink from 'next/link'
import { ComponentProps, FC, createContext, useContext } from 'react'

type TNextLinkProps = ComponentProps<typeof NextLink>

interface ILinkProps extends TNextLinkProps {
  locale?: string
}

interface ILinkComponent extends FC<ILinkProps> {}

interface ILinkContext {
  Link: ILinkComponent
}

// FakeNextIntlLink is a fake wrapper to customized the next/link to adpat the
// ILinkComponent interface - it accepts the same props as NextLink, but it does
// not use next-intl/link directly.
const FakeNextIntlLink: ILinkComponent = (linkProps) => {
  return <NextLink prefetch={false} {...linkProps} />
}

const LinkContext = createContext<ILinkContext>({ Link: FakeNextIntlLink })

function useLink(): ILinkComponent {
  return useContext(LinkContext).Link
}

export type { ILinkProps, ILinkComponent }
export { LinkContext, useLink }
