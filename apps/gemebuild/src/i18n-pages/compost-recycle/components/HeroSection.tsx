import Image from 'next/image'
import { ReactNode } from 'react'
import { SectionContainer, SectionDescription, SectionTitle } from 'ui'
import { ILinkComponent } from '../../../contexts/link-context'
import PrimaryButton from 'ui/src/ui-components/PrimaryButton'

export interface IHeroSection {
  title: ReactNode
  description: ReactNode
  PrefetchLink?: ILinkComponent
}
export default function HeroSection({
  description,
  title,
  PrefetchLink,
}: IHeroSection) {
  return (
    <SectionContainer className="!pt-0" compact>
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20 pb-10 lg:py-28">
        <div
          aria-hidden="true"
          className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96"
        />
        <div className="mx-auto max-w-2xl lg:mx-0 flex flex-col gap-10 lg:flex-row md:max-w-max lg:max-w-none">
          <Image
            width={400}
            height={300}
            alt=""
            // src="/assets/images/compost-recycle/hero-image.webp"
            src="https://images.unsplash.com/photo-1567532900872-f4e906cbf06a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1280&q=80"
            className="lg:hidden w-full rounded-2xl object-cover"
          />
          <div className="flex-1 flex flex-col gap-6 lg:min-w-[40%]">
            <SectionTitle className="!text-left">{title}</SectionTitle>
            <div className="max-w-xl">
              <SectionDescription className="!text-left">
                {description}
              </SectionDescription>
              <div className="mt-10 flex items-center gap-x-10">
                <PrimaryButton
                  href="#"
                  PrefetchLink={PrefetchLink}
                  className="!px-6 !py-3"
                >
                  Join Kelowna , BC
                </PrimaryButton>

                <PrimaryButton
                  href="#"
                  PrefetchLink={PrefetchLink}
                  className="!p-0 underline underline-offset-[6px] !text-[#333] !bg-transparent focus:!ring-transparent"
                >
                  See Future Locations
                </PrimaryButton>
              </div>
            </div>
          </div>
          <Image
            width={400}
            height={300}
            alt=""
            // src="/assets/images/compost-recycle/hero-image.webp"
            src="https://images.unsplash.com/photo-1567532900872-f4e906cbf06a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1280&q=80"
            className="hidden lg:block flex-1 aspect-[6/5] rounded-2xl object-cover"
          />
        </div>
      </div>
    </SectionContainer>
  )
}
