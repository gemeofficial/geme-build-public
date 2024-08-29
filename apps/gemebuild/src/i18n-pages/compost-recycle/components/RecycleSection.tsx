import Image from 'next/image'
import { SectionContainer, SectionDescription, SectionTitle } from 'ui'

export interface IRecycleSectionProps {
  title: string
  description: string
  imageUrl: string
  alt: string
}

export default function RecycleSection({
  title,
  description,
  alt,
  imageUrl,
}: IRecycleSectionProps) {
  return (
    <SectionContainer compact>
      <SectionTitle className="!text-[#333]">{title}</SectionTitle>
      <SectionDescription className="mt-4 md:mt-6">
        {description}
      </SectionDescription>

      <Image
        width={1080}
        height={720}
        className="mt-4 md:mt-8 object-cover w-full h-full min-h-80 lg:min-h-96 rounded-lg"
        src={imageUrl}
        alt={alt}
      />
    </SectionContainer>
  )
}
