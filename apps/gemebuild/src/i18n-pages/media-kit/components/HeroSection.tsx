import { ReactNode } from 'react'
import { SectionContainer, SectionDescription, SectionTitle } from 'ui'

export interface IHeroSection {
  title: ReactNode
  description: ReactNode
}
export default function HeroSection({ description, title }: IHeroSection) {
  return (
    <SectionContainer className="flex flex-col gap-4 xl:gap-6" >
      <SectionTitle className="!text-black/90 text-3xl md:text-4xl xl:!text-6xl 2xl:!text-7xl !font-black md:!text-center">
        {title}
      </SectionTitle>
      <SectionDescription className="!text-black !text-left">
        {description}
      </SectionDescription>
    </SectionContainer>
  )
}
