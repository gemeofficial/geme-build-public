import { FC, ReactNode } from 'react'

export interface ISubscribeGemeV2Props {
  title: ReactNode
  description: ReactNode
  emailPlaceholder: string
  submitButtonLabel: string

  SubscribeComponent?: FC<{
    inputPlaceholder: string
    submitButtonLabel: string
  }>
}

export function SubscribeGemeV2({
  title,
  description,
  emailPlaceholder,
  submitButtonLabel,
  SubscribeComponent,
}: ISubscribeGemeV2Props) {
  return (
    <div className="bg-v2311-bg-dark-green ">
      <section className=" px-4 md:px-8 py-8 mx-auto md:py-16 xl:py-[80px] xl:max-w-7xl flex flex-col items-center text-center">
        <h2 className="v2311-font-h1 text-white"> {title} </h2>
        <p className="v2311-font-body text-white mt-4 md:mt-8">{description}</p>

        {SubscribeComponent && (
          <SubscribeComponent
            inputPlaceholder={emailPlaceholder}
            submitButtonLabel={submitButtonLabel}
          />
        )}
      </section>
    </div>
  )
}
