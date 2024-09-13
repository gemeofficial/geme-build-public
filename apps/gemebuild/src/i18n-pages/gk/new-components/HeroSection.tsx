import Image from 'next/image'
import { ReactNode } from 'react'

export interface IHeroSectionProps {
  title: string
  highlightTitle: string
  description: ReactNode
  imageUrl: string
  imageAlt: string
}

export default function HeroSection({
  title,
  highlightTitle,
  description,
  imageUrl,
}: IHeroSectionProps) {
  return (
    <section className="relative w-full h-[85vh]">
      <Image
        priority
        width={1920}
        height={1080}
        src={imageUrl}
        alt="Hero Image"
        className="w-full object-cover absolute inset-0 h-[85vh] "
      />
      <div className="bg-black/50 absolute inset-0 h-[85vh] z-[1]"></div>

      <div className="text-center lg:text-left w-full h-full flex justify-center xl:justify-end items-center relative z-[1]">
        <div className="xl:mr-[10%] max-w-2xl p-4 md:p-0">
          <h1 className="text-3xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-white ">
            <span className="block xl:inline">{title}</span>{' '}
            <span className="block text-emerald-400 xl:inline">
              {highlightTitle}
            </span>
          </h1>
          <div className="mx-auto mt-3 text-white md:text-lg lg:text-xl md:mt-5">
            {description}
          </div>
        </div>
      </div>
    </section>
  )
}
