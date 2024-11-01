import { ReactNode } from 'react'

interface INewsletterCenteredCardProps {
  title?: ReactNode
  description?: ReactNode
  linkText?: ReactNode
  linkUrl?: string

  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void
  emailInputName?: string
  emailLabel?: string
  emailPlaceholder?: string
  submitButtonLabel?: string
}

const newsletterCenteredCardProps: INewsletterCenteredCardProps = {
  title: 'Join the movement',
  description: (
    <>A new approach to the world&apos;s waste problem begins with each of us</>
  ),
  onSubmit: (evt) => {
    console.log('Form submitted')
    evt.preventDefault()
  },
  emailInputName: 'email-address',
  emailLabel: 'Email address',
  emailPlaceholder: 'Enter your email',
  submitButtonLabel: 'Subscribe',
}

function NewsletterCenteredCard({
  title,
  description,
  onSubmit,
  emailInputName = 'email-address',
  emailLabel,
  emailPlaceholder,
  submitButtonLabel,
}: INewsletterCenteredCardProps) {
  return (
    <div className="bg-v2311-bg-dark-green ">
      <section className=" px-4 md:px-10 py-8 mx-auto md:py-16 xl:py-[80px] xl:max-w-7xl flex flex-col items-center text-center">
        {title && <h2 className="v2311-title-h2 text-white">{title}</h2>}
        {description && (
          <p className="v2311-body-large text-white mt-4 md:mt-6 xl:mt-8">
            {description}
          </p>
        )}

        <form
          onSubmit={onSubmit}
          className="w-full max-w-sm md:max-w-lg lg:max-w-2xl flex items-center justify-center gap-x-2 md:gap-x-4 mt-4 md:mt-6 xl:mt-8 py-1 md:py-2 xl:px-4"
        >
          <label className="sr-only" htmlFor="email-address">
            {emailLabel}
          </label>
          <input
            className="w-full flex-auto v2311-body-large text-v2311-fg-dark-black border-solid border-2 border-white rounded-v2311 py-1 md:py-3 xl:px-4  focus:border-v2311-bg-light-green focus:ring-v2311-bg-light-green"
            id="email-address"
            name={emailInputName}
            type="email"
            placeholder={emailPlaceholder}
            autoComplete="email"
            required
          />
          <button
            className="v2311-button-large text-v2311-text-primary bg-v2311-bg-button-white border-solid border-2 border-white hover:scale-105 transition-all duration-300 rounded-v2311 px-4 py-1 md:py-3"
            type="submit"
          >
            {submitButtonLabel}
          </button>
        </form>
      </section>
    </div>
  )
}

const EXAMPLE_NEWSLETTER_CENTERED_CARD_PROPS = { newsletterCenteredCardProps }

export { NewsletterCenteredCard, EXAMPLE_NEWSLETTER_CENTERED_CARD_PROPS }
export type { INewsletterCenteredCardProps }
