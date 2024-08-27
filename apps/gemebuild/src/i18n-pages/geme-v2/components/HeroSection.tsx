import Image from 'next/image'
import { FC, ReactNode } from 'react'
import HeroSectionVideo, { IHeroSectionVideo } from 'ui/src/hero-section-video'
import { ISubscribeComponent } from './Subscribe'

export interface IHeroSectionProps
  extends IHeroSectionVideo,
    ISubscribeComponent {
  title: ReactNode
  description: ReactNode
  SubscribeComponent?: FC<ISubscribeComponent>
}

export default function HeroSection({
  fullScreenVideoUrl,
  videoProps,
  title,
  description,
  inputPlaceholder,
  submitButtonLabel,
  SubscribeComponent,
}: IHeroSectionProps) {
  return (
    <div className="bg-gray-900 min-h-screen">
      <div className="relative isolate overflow-hidden pt-14 min-h-screen">
        <Image
          priority
          width={1920}
          height={1080}
          alt="hero image"
          src="https://images.unsplash.com/photo-1531971589569-0d9370cbe1e5?q=80&w=3881&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 h-full w-full bg-black/50"></div>

        <div className="absolute inset-0 p-10 md:p-28 xl:p-36">
          <div className="max-w-5xl flex flex-col gap-4 md:gap-8 xl:gap-10">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white sm:text-6xl max-w-2xl">
              {title}
            </h1>
            <p className="text-lg leading-8 text-gray-300">{description}</p>

            <form className="flex flex-col md:flex-row max-w-md gap-4">
              {SubscribeComponent && (
                <SubscribeComponent
                  inputPlaceholder={inputPlaceholder}
                  submitButtonLabel={submitButtonLabel}
                />
              )}
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                required
                placeholder="Enter your email"
                autoComplete="email"
                className="min-w-0 flex-auto rounded-md border-2 border-white placeholder:text-white bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:leading-6"
              />
              <button
                type="submit"
                className="rounded-md bg-white px-3.5 py-2.5 md:px-6 md:py-3 text-sm md:text-base lg:text-lg xl:text-xl font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Notify me
              </button>
            </form>
          </div>

          <HeroSectionVideo
            fullScreenVideoUrl={fullScreenVideoUrl}
            videoProps={videoProps}
            mixpanelStatPayload={{
              title: 'Watch video',
              payload: { From: 'Geme-v2 hero video' },
            }}
          />
        </div>
      </div>
    </div>
  )
}
