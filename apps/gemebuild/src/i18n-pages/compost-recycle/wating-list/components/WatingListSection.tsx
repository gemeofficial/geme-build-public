import { ReactNode } from 'react'
import { SectionContainer, SectionDescription, SectionTitle } from 'ui'

export interface IWatingListSectionProps {
  introText: ReactNode
  city: string
  title: string
  description: string
  WatingListFC?: JSX.Element
}
const headingId = 'wating-list-heading'

export function scrollToWatingListHeading() {
  const headingEl = document.getElementById(headingId)
  if (headingEl) {
    headingEl.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }
}

export default function WatingListSection({
  introText,
  city,
  title,
  description,
  WatingListFC,
}: IWatingListSectionProps) {
  description = description.replace('{city}', city)

  return (
    <SectionContainer compact>
      <div className="text-lg md:text-xl xl:text-[22px] md:text-center font-mono">
        {introText}
      </div>
      <SectionTitle
        id={headingId}
        className="!text-[#333] mt-12 md:mt-20 xl:mt-24 md:!text-center"
      >
        {title}
      </SectionTitle>
      <SectionDescription className="mt-4 md:mt-6 md:!text-center">
        {description}
      </SectionDescription>
      {WatingListFC && <div className="mt-4 md:mt-6">{WatingListFC}</div>}
    </SectionContainer>
  )
}
