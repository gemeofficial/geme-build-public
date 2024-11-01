import { ReactNode } from 'react'
import { SectionContainer } from 'ui'

export interface ITermsOfServiceProps {
  textInfo: ReactNode
}
export default function TermsOfService({ textInfo }: ITermsOfServiceProps) {
  return <SectionContainer  className='md:!px-8 !px-0'>
    <div className="px-10 py-5 rounded-lg bg-gray-100 text-[#333]">{textInfo}</div>
  </SectionContainer>
}
