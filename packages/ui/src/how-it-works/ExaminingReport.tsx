import React, { memo, ReactNode } from 'react'
import {
  SectionContainer,
  SectionDescription,
  SectionTitle,
} from '../ui-components'
import Image from 'next/image'

export interface IExaminingReportProps {
  title: string
  description: string
  imgUrl: string
  downloadHref: ReactNode
}

export function ExaminingReport({
  description,
  imgUrl,
  title,
  downloadHref,
}: IExaminingReportProps) {
  return (
    <SectionContainer className="flex flex-col gap-4 md:gap-6">
      <SectionTitle>{title}</SectionTitle>
      <SectionDescription>{description}</SectionDescription>
      <Image
        className="w-full h-full object-contain"
        src={imgUrl}
        alt="examiningReport"
        width={900}
        height={720}
      />
      <div className="text-[#d67b38] font-bold">{downloadHref}</div>
    </SectionContainer>
  )
}
