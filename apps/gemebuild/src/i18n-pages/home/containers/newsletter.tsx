'use client'

import { createContext, useCallback, useContext, useState } from 'react'
import { NewsletterCenteredCard, SuccessNotice } from 'ui'
import type { INewsletterCenteredCardProps, ISuccessNoticeProps } from 'ui'

interface INewsletterContext {
  subscribe: (email: string) => Promise<void>
}

const NewsletterContext = createContext<INewsletterContext>({
  subscribe: async (email: string) => {
    console.log('Subscribing', email)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    return
  },
})

interface INewsletterProps {
  newsletterCenteredCardProps?: INewsletterCenteredCardProps
  successNoticeProps?: ISuccessNoticeProps
}

function Newsletter({
  newsletterCenteredCardProps,
  successNoticeProps,
}: INewsletterProps) {
  const { subscribe } = useContext(NewsletterContext)
  const [openSuccessNotice, setOpenSuccessNotice] = useState<boolean>(false)

  const onSubmit = useCallback(
    async (evt: React.FormEvent<HTMLFormElement>) => {
      evt.preventDefault()

      const formData = new FormData(evt.currentTarget)
      const email = formData.get(
        newsletterCenteredCardProps?.emailInputName || 'email-address',
      )

      if (typeof email !== 'string') {
        return
      }

      try {
        await subscribe(email)
        setOpenSuccessNotice(true)
        // sleep 3 seconds
        await new Promise((resolve) => setTimeout(resolve, 2500))
        setOpenSuccessNotice(false)
      } catch {
        // something is wrong. Do nothing
      }
    },
    [
      setOpenSuccessNotice,
      subscribe,
      newsletterCenteredCardProps?.emailInputName,
    ],
  )

  return (
    <>
      <NewsletterCenteredCard
        {...newsletterCenteredCardProps}
        onSubmit={onSubmit}
      />
      <SuccessNotice {...successNoticeProps} open={openSuccessNotice} />
    </>
  )
}

export { Newsletter, NewsletterContext }
export type { INewsletterProps, INewsletterContext }
