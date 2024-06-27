import Image from 'next/image'
import {
  SectionContainer,
  SectionDescription,
  SectionTitle,
} from '../ui-components'

export function CertificateSection() {
  return (
    <SectionContainer className="flex flex-col gap-4 md:gap-6">
      <SectionTitle>Here's our certificate</SectionTitle>
      <SectionDescription>
        Here's our certificate Here's our certificate Here's our certificate
      </SectionDescription>

      <div className="flex flex-col lg:flex-row gap-4 h-full lg:h-[460px]">
        <Image
          className="w-full h-full object-contain"
          src={
            'https://cdn.shopify.com/s/files/1/0602/9390/6640/files/certificate_1.jpg?v=1695770281'
          }
          alt="certificate1"
          width={1280}
          height={720}
        />
        <Image
          className="w-full h-full object-contain"
          src={
            'https://cdn.shopify.com/s/files/1/0602/9390/6640/files/KakaoTalk_20221209_103729502-e4965f79-83ea-4ec3-8f91-2fcfae1530e7_452x.png?v=1695769669'
          }
          alt="certificate2"
          width={1280}
          height={720}
        />
      </div>
      <div className="text-v2311-bg-dark-green mt-4">
        We thank all of our peoples and we couldn't have continue supporting our
        ENCORE Initiative if it wasn't for all of you. We would like to take a
        step forward so that we can start practicing our love for the mother
        nature.
      </div>
    </SectionContainer>
  )
}
