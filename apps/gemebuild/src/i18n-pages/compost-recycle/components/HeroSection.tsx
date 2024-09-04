import Image from 'next/image'
import { ReactNode } from 'react'
import {
  LinkButton,
  PrimaryButton,
  SectionContainer,
  SectionDescription,
  SectionTitle,
} from 'ui'
import { ILinkComponent } from '../../../contexts/link-context'

export interface IHeroSection {
  title: ReactNode
  description: ReactNode
  imageUrl: string
  primaryButtonText: string
  linkButtonText: string
  alt?: string
  PrefetchLink?: ILinkComponent
}
export default function HeroSection({
  description,
  title,
  imageUrl,
  primaryButtonText,
  linkButtonText,
  alt,
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
            priority
            width={800}
            height={600}
            alt={alt || 'Hero Section Image'}
            src={imageUrl}
            className="lg:hidden w-full rounded-2xl object-cover"
          />
          <div className="flex-1 flex flex-col gap-6 lg:min-w-[40%]">
            <SectionTitle className="!text-left">{title}</SectionTitle>
            <div className="max-w-xl">
              <SectionDescription className="!text-left">
                {description}
              </SectionDescription>
              <div className="mt-10 flex items-center gap-x-10 pl-1">
                <PrimaryButton
                  href="#"
                  PrefetchLink={PrefetchLink}
                  className="!px-6 !py-3"
                >
                  {primaryButtonText}
                </PrimaryButton>

                <LinkButton
                  href="compost-recycle/locations"
                  PrefetchLink={PrefetchLink}
                >
                  {linkButtonText}
                </LinkButton>
              </div>
            </div>
          </div>
          <Image
            width={900}
            height={700}
            alt={alt || 'Hero Section Image'}
            src={imageUrl}
            className="hidden lg:block flex-1 max-w-[640px] aspect-[6/5] rounded-2xl object-cover"
          />
        </div>
      </div>
    </SectionContainer>
  )
}
