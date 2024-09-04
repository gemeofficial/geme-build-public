'use client'

import Image from 'next/image'
import { PrimaryButton, SectionDescription, SectionTitle } from 'ui'
import { ILinkComponent } from '../../../../contexts/link-context'

export interface IHeroSectionProps {
  city: string
  bgImageUrl: string
  title: string
  description: string
  buttonText: string
  PrefetchLink?: ILinkComponent
}

export default function HeroSection({
  city,
  bgImageUrl,
  buttonText,
  description,
  title,
  PrefetchLink,
}: IHeroSectionProps) {
  title = title.replace('{city}', city)
  
  const clickHandler = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault()
  }

  return (
    <div className="relative md:py-32 xl:py-40 overflow-hidden">
      <Image
        priority
        width={1080}
        height={500}
        src={bgImageUrl}
        alt=""
        className="object-cover w-full h-full min-h-[30vh] md:min-h-full md:absolute md:inset-0 z-0"
      />
      <div className="w-full h-full flex items-center justify-center relative z-[1]">
        <div className="bg-[#FCFCFC] md:bg-white shadow-sm p-10 max-w-2xl lg:max-w-4xl">
          <SectionTitle className="!font-medium !text-black !text-center">
            <span className="text-3xl md:text-5xl leading-relaxed">
              {title}
            </span>
          </SectionTitle>
          <SectionDescription className="mt-4 md:mt-6 !text-center">
            <span className="text-lg md:text-xl">{description}</span>
          </SectionDescription>
          <div className="flex justify-center mt-4 md:mt-6">
            <PrimaryButton
              href="#"
              onClick={clickHandler}
              className="!rounded-3xl !py-3 !px-8 w-max"
              PrefetchLink={PrefetchLink}
            >
              {buttonText}
            </PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  )
}
