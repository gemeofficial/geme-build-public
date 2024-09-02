import { FC } from 'react'
import { SectionContainer, SectionDescription, SectionTitle } from 'ui'

export interface IWatingListSectionProps {
  title: string
  description: string
  WatingListFC?: FC
}

export default function WatingListSection({
  title,
  description,
  WatingListFC,
}: IWatingListSectionProps) {
  return (
    <SectionContainer compact>
      <SectionTitle className="!text-[#333] mt-6 md:mt-8">{title}</SectionTitle>
      <SectionDescription className="mt-4 md:mt-6">
        {description}
      </SectionDescription>
      {WatingListFC && (
        <div className="mt-4 md:mt-6">
          <WatingListFC />
        </div>
      )}
    </SectionContainer>
  )
}
