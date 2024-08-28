import { ReactNode } from 'react'
import { ILinkComponent } from '../../../contexts/link-context'
import PrimaryButton from 'ui/src/ui-components/PrimaryButton'

export interface IUnderConstructionProps {
  title: string
  description: ReactNode
  mediaKitButtonText: string
  aboutButtonText: string
  PrefetchLink?: ILinkComponent
}

export default function UnderConstruction({
  aboutButtonText,
  description,
  mediaKitButtonText,
  title,
  PrefetchLink,
}: IUnderConstructionProps) {
  return (
    <div className="h-screen overflow-hidden relative text-center flex items-center justify-center px-4">
      <div className="min-h-[1500px] bg-gradient-to-b from-white to-v2311-primary absolute inset-0 z-0"></div>
      <div className="flex items-center justify-center flex-col gap-4 md:gap-6 lg:gap-8 md:max-w-[800px] xl:max-w-[900px] mx-auto translate-y-[-50%]">
        <h1 className="text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-black">
          {title}
        </h1>
        <div className="text-[#333] md:text-lg lg:text-lg">{description}</div>

        <div className="flex items-center gap-8 w-full md:px-20 md:max-w-[800px] xl:max-w-[900px] mx-auto">
          <PrimaryButton
            href="/media-kit"
            PrefetchLink={PrefetchLink}
            className="flex-1 font-black !text-base md:!text-xl xl:!text-2xl !py-4 justify-center"
          >
            {mediaKitButtonText}
          </PrimaryButton>
          <PrimaryButton
            href="/about"
            PrefetchLink={PrefetchLink}
            className="flex-1 font-black !text-base md:!text-xl xl:!text-2xl !py-4 justify-center"
          >
            {aboutButtonText}
          </PrimaryButton>
        </div>
      </div>
    </div>
  )
}
