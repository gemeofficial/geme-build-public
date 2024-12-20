import Image from 'next/image'
import { FC, ReactNode } from 'react'

export interface ISubscribeComponent {
  inputPlaceholder: string
  submitButtonLabel: string
  subscribeOrigin: 'Geme V2 Page - Top' | 'Geme V2 Page - Bottom'
  inputClassName?: string
  buttonClassName?: string
  formClassName?: string
}

export interface ISubscribeProps extends ISubscribeComponent {
  title: ReactNode
  description: ReactNode
  productImage: string
  SubscribeComponent?: FC<ISubscribeComponent>
}

export default function Subscribe({
  title,
  description,
  productImage,
  inputPlaceholder,
  submitButtonLabel,
  SubscribeComponent,
  subscribeOrigin,
}: ISubscribeProps) {
  return (
    <div className="relative isolate overflow-hidden bg-v2311-bg-dark-green py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {title}
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              {description}
            </p>
            <div className="mt-6">
              {SubscribeComponent && (
                <SubscribeComponent
                  subscribeOrigin={subscribeOrigin}
                  inputPlaceholder={inputPlaceholder}
                  submitButtonLabel={submitButtonLabel}
                  inputClassName="text-v2311-fg-dark-black border-solid border-2 border-white rounded-xl !py-3 focus:border-v2311-bg-light-green focus:ring-v2311-bg-light-green"
                  buttonClassName="!text-white border-solid border-2 rounded-xl focus:border-v2311-bg-light-green focus:ring-v2311-bg-light-green !bg-transparent hover:scale-105 transition-all !border-white !max-w-max"
                />
              )}
            </div>
          </div>
          <Image
            width={1080}
            height={720}
            src={productImage}
            alt="Subscribe Product Image"
            className="object-cover w-full h-full max-h-[300px] rounded-xl"
          />
        </div>
      </div>
    </div>
  )
}
