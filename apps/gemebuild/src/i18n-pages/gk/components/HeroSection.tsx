import { ReactNode } from 'react'
import SplitWithNavBar from '../../../components/split-with-nav-bar'

export interface IGKHeroSectionProps {
  title: string
  highlightTitle: string
  description: ReactNode
  imageAlt: string
}

export default function HeroSection({
  title,
  description,
  imageAlt,
  highlightTitle,
}: IGKHeroSectionProps) {
  return (
    <SplitWithNavBar
      imageSrc="/assets/images/gk/hero-bg.jpg"
      title={title}
      highlightTitle={highlightTitle}
      description={description}
      imageAlt={imageAlt}
    />
  )
}
