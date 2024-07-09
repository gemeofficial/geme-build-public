import { ReactNode } from 'react'
import {
  BeforeAfterSlider,
  Image,
} from '../client-components/BeforeAfterSlider'
import {
  SectionContainer,
  SectionDescription,
  SectionTitle,
} from '../ui-components'

export interface IUseCompostContrastProps {
  title: ReactNode
  description: ReactNode
  beforeImage: Image
  afterImage: Image
}

export function UseCompostContrast({
  afterImage,
  beforeImage,
  description,
  title,
}: IUseCompostContrastProps) {
  return (
    <SectionContainer>
      <SectionTitle>{title}</SectionTitle>
      <SectionDescription className="mt-4 md:mt-8">
        {description}
      </SectionDescription>

      <BeforeAfterSlider
        className="w-full h-60 md:h-96 xl:h-[475px] mt-4 md:mt-8"
        beforeImage={beforeImage}
        afterImage={afterImage}
      />
    </SectionContainer>
  )
}
