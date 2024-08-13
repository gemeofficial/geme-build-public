'use client'

import { useCallback, useState } from 'react'
import { NewsletterCenteredCard, SuccessNotice } from 'ui'
import type { INewsletterCenteredCardProps, ISuccessNoticeProps } from 'ui'

interface INewsletterProps {
  subscribeHandler?: ({ email }: { email: string }) => Promise<void>
  newsletterCenteredCardProps?: INewsletterCenteredCardProps
  successNoticeProps?: ISuccessNoticeProps
}

function Newsletter({
  subscribeHandler,
  newsletterCenteredCardProps,
  successNoticeProps,
}: INewsletterProps) {
  // 之前的是假订阅 现在修正过来
  // const { subscribe } = useContext(NewsletterContext)
  const [openSuccessNotice, setOpenSuccessNotice] = useState<boolean>(false)

  const onSubmit = useCallback(
    async (evt: React.FormEvent<HTMLFormElement>) => {
      evt.preventDefault()

      const formData = new FormData(evt.currentTarget)
      const email = formData.get(
        newsletterCenteredCardProps?.emailInputName || 'email-address',
      )

      if (typeof email !== 'string' || !subscribeHandler) {
        return
      }

      try {
        await subscribeHandler({ email })

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
      newsletterCenteredCardProps?.emailInputName,
      subscribeHandler,
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

export { Newsletter }
export type { INewsletterProps }
