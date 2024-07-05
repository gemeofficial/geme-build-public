import { BeforeAfterSlider } from '../client-components/BeforeAfterSlider'
import {
  SectionContainer,
  SectionDescription,
  SectionTitle,
} from '../ui-components'

export function UseCompostContrast() {
  const before = '/assets/images/how-it-works/used-geme-compost-before.png'
  const after = '/assets/images/how-it-works/used-geme-compost-after.png'

  return (
    <SectionContainer>
      <SectionTitle>Before and After Applying GEME Compost</SectionTitle>
      <SectionDescription className="mt-4 md:mt-8">
        See how GEME compost can help make the earth greener by reducing
        landfill waste, improving soil health, and promoting plant growth.
      </SectionDescription>

      <BeforeAfterSlider
        className="w-full h-60 md:h-96 xl:h-[475px] mt-4 md:mt-8"
        beforeImage={{
          imageUrl: before,
          alt: 'Before compost utilization',
        }}
        afterImage={{
          imageUrl: after,
          alt: 'After compost utilization',
        }}
      />
    </SectionContainer>
  )
}
