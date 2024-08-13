import { ReactNode } from 'react'

export interface ISubscribeGemeV2Props {
  title?: ReactNode
  description?: ReactNode
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void
  emailInputName?: string
  emailLabel?: string
  emailPlaceholder?: string
  submitButtonLabel?: string
}

export function SubscribeGemeV2({
  title,
  description,
  onSubmit,
  emailInputName = 'email-address',
  emailLabel,
  emailPlaceholder,
  submitButtonLabel,
}: ISubscribeGemeV2Props) {
  return (
    <div className="bg-v2311-bg-dark-green ">
      <section className=" px-4 md:px-8 py-8 mx-auto md:py-16 xl:py-[80px] xl:max-w-7xl flex flex-col items-center text-center">
        {title && <h2 className="v2311-font-h1 text-white"> {title} </h2>}
        {description && (
          <p className="v2311-font-body text-white mt-4 md:mt-8">
            {description}
          </p>
        )}

        <form
          onSubmit={onSubmit}
          className="w-full max-w-sm md:max-w-lg lg:max-w-2xl flex items-center justify-center gap-x-2 md:gap-x-4 mt-4 md:mt-8 py-1 md:py-2 xl:px-4"
        >
          <label className="sr-only" htmlFor="email-address">
            {emailLabel}
          </label>
          <input
            className="w-full flex-auto v2311-font-body xl:v2311-font-h3 xl:font-normal text-v2311-fg-dark-black border-solid border-2 border-white rounded-xl py-1 md:py-2 xl:px-4  focus:border-v2311-bg-light-green focus:ring-v2311-bg-light-green"
            id="email-address"
            name={emailInputName}
            type="email"
            placeholder={emailPlaceholder}
            autoComplete="email"
            required
          />
          <button
            className=" v2311-font-body font-bold xl:v2311-font-h3 text-white border-solid border-2 border-white rounded-xl px-4 py-1 md:py-2  focus:border-v2311-bg-light-green focus:ring-v2311-bg-light-green"
            type="submit"
          >
            {submitButtonLabel}
          </button>
        </form>
      </section>
    </div>
  )
}
