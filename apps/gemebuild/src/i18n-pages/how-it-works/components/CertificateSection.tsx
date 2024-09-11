import Image from 'next/image'
import { SectionContainer, SectionDescription, SectionTitle } from 'ui'

export interface ICertificateSectionProps {
  title: string
  description: string
  imgUrls: string[]
  subDescription?: string
}

export function CertificateSection({
  description,
  imgUrls,
  title,
  subDescription,
}: ICertificateSectionProps) {
  return (
    <SectionContainer className="flex flex-col gap-4 md:gap-6">
      <SectionTitle>{title}</SectionTitle>
      <SectionDescription>{description}</SectionDescription>

      <div className="flex flex-col lg:flex-row gap-4 h-full lg:h-[460px]">
        {imgUrls.map((url, index) => (
          <Image
            key={url}
            className="w-full h-full object-contain lg:flex-1"
            src={url}
            alt={'certificate' + (index + 1)}
            width={1280}
            height={720}
          />
        ))}
      </div>

      {subDescription && (
        <div className="text-v2311-bg-dark-green mt-4">{subDescription}</div>
      )}
    </SectionContainer>
  )
}
