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

const examiningReportProps: IExaminingReportProps = {
  title: `GEME Fertilizer Has Been Tested And Surpassed Quality Standard.`,
  description: `The test results are as follow The test results are as follow The test results are as follow`,
  imgUrl:
    'https://cdn.shopify.com/s/files/1/0602/9390/6640/t/3/assets/remarkchart-1667521654065.jpg?v=1667521740',
  downloadHref: (
    <>
      Download Salt Level Breakdown Report Test{' '}
      <a
        href="https://cdn.shopify.com/s/files/1/0602/9390/6640/files/Salt_Breakdown_Report_Reencle.pdf?v=1674090924"
        target="_blank"
      >
        HERE
      </a>
    </>
  ),
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
