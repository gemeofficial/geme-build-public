import Image from 'next/image'
import { FC, ReactNode } from 'react'
import HeroSectionVideo, { IHeroSectionVideo } from 'ui/src/hero-section-video'
import { ISubscribeComponent } from './Subscribe'

export interface IHeroSectionProps
  extends IHeroSectionVideo,
    ISubscribeComponent {
  title: ReactNode
  description: ReactNode
  heroBgImagePc: string
  heroBgImageMobile: string
  SubscribeComponent?: FC<ISubscribeComponent>
}

export default function HeroSection({
  fullScreenVideoUrl,
  videoProps,
  title,
  description,
  heroBgImagePc,
  heroBgImageMobile,
  inputPlaceholder,
  submitButtonLabel,
  SubscribeComponent,
}: IHeroSectionProps) {
  return (
    <div className="bg-black min-h-[85vh] xl:min-h-screen relative">
      <Image
        width={1920}
        height={1080}
        src={heroBgImagePc}
        alt="hero background picture pc"
        priority
        className="hidden md:block absolute inset-0 h-full w-full object-cover max-h-screen"
        fill
        sizes="(min-width: 768px) 60vw,(min-width: 1920px) 80vw,(min-width: 2420px) 100vw, 1vw"
      />
      <Image
        width={375}
        height={750}
        src={heroBgImageMobile}
        alt="hero background picture mobile"
        priority
        className="md:hidden absolute inset-0 h-full w-full object-cover max-h-screen"
        fill
        sizes="(max-width: 768px) 100vw, 1vw"
      />
      <div className="absolute inset-0 h-full w-full bg-black/50"></div>

      <div className="relative isolate overflow-hidden">
        <div className="w-full h-[85vh] xl:h-screen p-10 pt-24 md:p-28 xl:p-36 relative">
          <div className="max-w-5xl flex flex-col gap-4 md:gap-8 xl:gap-10 3xl:ml-[10%] 3xl:pt-[10%]">
            <h1 className="text-3xl md:text-4xl xl:text-5xl 3xl:text-6xl font-bold tracking-tight text-white max-w-3xl">
              {title}
            </h1>
            <p className="text-lg leading-8 text-gray-300 max-w-3xl">
              {description}
            </p>

            {SubscribeComponent && (
              <SubscribeComponent
                inputPlaceholder={inputPlaceholder}
                submitButtonLabel={submitButtonLabel}
                formClassName="flex-col md:flex-row gap-y-4 !mx-0"
                inputClassName="!min-w-0 !flex-auto !rounded-lg !border-2 !border-white placeholder:!text-white !bg-white/5 !px-3.5 !py-2.5 md:!py-3 !text-white !shadow-sm !ring-1 !ring-inset !ring-white/10 focus:!ring-2 focus:!ring-inset focus:!ring-white sm:!leading-6 !text-sm md:!text-base lg:!text-lg xl:!text-xl"
                buttonClassName="!rounded-md !bg-white !border-2 !border-white !px-3.5 !py-2.5 md:!px-6 md:!py-3 !text-sm md:!text-base lg:!text-lg xl:!text-xl !font-semibold !text-gray-900 !shadow-sm hover:!bg-gray-100 focus-visible:!outline focus-visible:!outline-2 focus-visible:!outline-offset-2 focus-visible:!outline-white md:max-w-max"
              />
            )}
          </div>

          <HeroSectionVideo
            fullScreenVideoUrl={fullScreenVideoUrl}
            videoProps={videoProps}
            mixpanelStatPayload={{
              title: 'Watch video',
              payload: { From: 'Geme Terra 2 hero video' },
            }}
          />
        </div>
      </div>
    </div>
  )
}
