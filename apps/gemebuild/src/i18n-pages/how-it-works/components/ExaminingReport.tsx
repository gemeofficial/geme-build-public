import { ReactNode } from 'react'
import { SectionContainer, SectionDescription, SectionTitle } from 'ui'
import Image from 'next/image'
import { Image as IImageType } from 'ui/src/client-components/BeforeAfterSlider'

export interface IExaminingReportProps {
  title: string
  description: string
  imageInfo: IImageType
  downloadHref?: ReactNode
}

export function ExaminingReport({
  description,
  imageInfo,
  title,
  downloadHref,
}: IExaminingReportProps) {
  return (
    <SectionContainer className="flex flex-col gap-4 md:gap-6">
      <SectionTitle>{title}</SectionTitle>
      <SectionDescription>{description}</SectionDescription>
      <Image
        className="w-full h-full object-contain"
        src={imageInfo.imageUrl}
        alt={imageInfo.alt || 'examiningReport'}
        width={900}
        height={720}
      />
      {/*<div className="text-[#d67b38] font-bold">{downloadHref}</div>*/}
    </SectionContainer>
  )
}
