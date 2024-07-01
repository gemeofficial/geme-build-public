import { BeforeAfterSlider } from '../client-components/BeforeAfterSlider'
import {
  SectionContainer,
  SectionDescription,
  SectionTitle,
} from '../ui-components'

export function UseCompostContrast() {
  const before =
    'https://images.unsplash.com/photo-1429593886847-3cc52983f919?ixlib=rb-0.3.5&s=24b2827bd767197c78641f9993e51a58&auto=format&fit=crop&w=3789&q=80'
  const after =
    'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-0.3.5&s=9a6ae0224c196441b4b78931c0bf78ba&auto=format&fit=crop&w=3900&q=80'

  return (
    <SectionContainer>
      <SectionTitle>
        The remaining residue is recycled as natural compost
      </SectionTitle>
      <SectionDescription className="mt-4 md:mt-8">
        Decomposing food waste back into nature!
        <br />
        The remaining residue is recycled as natural compost
        <br />
        Before compost utilization vs After compost utilization
        <br />
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
