import { SectionContainer } from 'ui'
import Button from './Button'

export default function HignLightBar() {
  return (
    <>
      <div className="bg-v2311-bg-dark-green">
        <SectionContainer className="flex items-center justify-between md:!py-10 xl:!py-16">
          <div className="text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl text-white font-bold font-v2311">
            Press Images on flickr
          </div>
          <Button
            text="Find our IFA 2024 Press Images here"
            href="#"
            className="bg-white !text-v2311-fg-dark-black hover:!bg-white hover:underline focus:!ring-white transition-all  "
          />
        </SectionContainer>
      </div>

      <div className="bg-v2311-text-yellow mt-8 md:mt-12 lg:mt-20">
        <SectionContainer className="flex flex-col items-center justify-between gap-8 md:!py-10 xl:!py-12">
          <div className="italic text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl text-white font-bold font-v2311">
            Press Images on flickr
          </div>
          <Button
            text="Find our IFA 2024 Press Images here"
            href="#"
            className="bg-white !text-v2311-fg-dark-black hover:!bg-white hover:underline focus:!ring-white transition-all  "
          />
        </SectionContainer>
      </div>
    </>
  )
}
