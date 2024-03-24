'use client'
import NextIntlLink from 'next-intl/link'
import { LinkContext, ILinkComponent } from '../../contexts/link-context'
import { PropsWithChildren } from 'react'

// Link is a thin wrapper to customized the next/link with:
// - use next-intl/link to support i18n router
// - disable prefetch by default to reduce the Vercel Monthly cost.
//   - Cf: https://applink.feishu.cn/client/todo/detail?guid=b56696ca-5772-4ed8-86db-e2b538e6f61b&suite_entity_num=t103402
const Link: ILinkComponent = (linkProps) => {
  return <NextIntlLink prefetch={false} {...linkProps} />
}

function NextIntlLinkProvider({ children }: PropsWithChildren) {
  return (
    <LinkContext.Provider value={{ Link }}>{children}</LinkContext.Provider>
  )
}

export default Link
export { NextIntlLinkProvider }
