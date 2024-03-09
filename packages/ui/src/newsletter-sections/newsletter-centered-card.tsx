import { ReactNode } from 'react'

interface INewsletterCenteredCardProps {
  title?: ReactNode
  description?: ReactNode
  linkText?: ReactNode
  linkUrl?: string
}

const newsletterCenteredCardProps: INewsletterCenteredCardProps = {
  title: 'Join the movement',
  description: (
    <>A new approach to the world&apos;s waste problem begins with each of us</>
  ),
  linkText: 'GET GEME',
  linkUrl: '/product/geme',
}

function NewsletterCenteredCard({
  title,
  description,
  linkText,
  linkUrl,
}: INewsletterCenteredCardProps) {
  return (
    <div className="bg-v2311-bg-dark-green ">
      <section className=" px-4 md:px-8 py-8 mx-auto md:py-16 xl:py-[80px] xl:max-w-7xl flex flex-col items-center text-center">
        {title && <h2 className="v2311-font-h1 text-white">{title}</h2>}
        {description && (
          <p className="v2311-font-body text-white mt-4 md:mt-8">
            {description}
          </p>
        )}
        {linkText && linkUrl && (
          <a
            className=" v2311-font-h2 text-white w-full xl:w-auto flex items-center justify-center mt-4 md:mt-8 border-solid border-2 border-white rounded-xl py-1 md:py-2 xl:px-4"
            href={linkUrl}
          >
            {linkText}
          </a>
        )}
      </section>
    </div>
  )
}

const EXAMPLE_NEWSLETTER_CENTERED_CARD_PROPS = { newsletterCenteredCardProps }

export { NewsletterCenteredCard, EXAMPLE_NEWSLETTER_CENTERED_CARD_PROPS }
export type { INewsletterCenteredCardProps }
