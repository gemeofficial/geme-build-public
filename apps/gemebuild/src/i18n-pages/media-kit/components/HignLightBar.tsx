import { SectionContainer } from 'ui'
import Button from './Button'

const props = {
  bar1: {
    title: 'Press Images on flickr',
    buttonText: 'Find our IFA 2024 Press Images here',
    href: '#',
  },
  bar2: {
    title: `Celebrate 100 years of innovation with LG, Miele, Samsung & Siemens!
            Get your ticket!`,
    buttonText: 'Find our IFA 2024 Press Images here',
    href: '#',
  },
}

export default function HignLightBar() {
  const { bar1, bar2 } = props
  return (
    <>
      <div className="bg-v2311-bg-dark-green">
        <SectionContainer
          className="flex flex-col lg:flex-row gap-4 items-center justify-between"
          compact
        >
          <div className="text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl text-white font-bold font-v2311">
            {bar1.title}
          </div>
          <Button
            text={bar1.buttonText}
            href={bar1.href}
            className="bg-white !text-v2311-fg-dark-black hover:!bg-white hover:underline focus:!ring-white transition-all  "
          />
        </SectionContainer>
      </div>

      <div className="bg-v2311-text-yellow mt-8 md:mt-12 lg:mt-20">
        <SectionContainer className="flex flex-col items-center justify-between gap-4 lg:gap-8 md:!py-10 xl:!py-12">
          <div className="italic text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl text-white font-bold font-v2311 text-center">
            {bar2.title}
          </div>
          <Button
            text={bar2.buttonText}
            href={bar2.href}
            className="bg-white !text-v2311-fg-dark-black hover:!bg-white hover:underline focus:!ring-white transition-all  "
          />
        </SectionContainer>
      </div>
    </>
  )
}
