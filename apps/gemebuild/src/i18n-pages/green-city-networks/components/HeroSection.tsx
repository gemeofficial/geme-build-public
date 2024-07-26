import Image from 'next/image'
import { ReactNode } from 'react'

export interface IGCNHeroSectionProps {
  title: string
  description: string
  subDescription1: ReactNode
  subDescription2: ReactNode
}

export default function HeroSection({
  description,
  subDescription1,
  subDescription2,
  title,
}: IGCNHeroSectionProps) {
  return (
    <div className="mx-auto max-w-2xl pb-16 pt-4 px-4 sm:pb-24 sm:pt-6 sm:px-6 lg:max-w-7xl lg:px-8">
      <h1 className="sr-only">{title}</h1>
      <p className="sr-only">{description}</p>
      <Image
        src="/assets/images/green-city-networks/hero-bg.png"
        alt="Green City Networks"
        className="object-contain"
        width={1760}
        height={882}
      />
      <p className=" py-4 text-xl text-gray-900 flex flex-col lg:flex-row   ">
        {subDescription1}
      </p>

      {subDescription2}
    </div>
  )
}
