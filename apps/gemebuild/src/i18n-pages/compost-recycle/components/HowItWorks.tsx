import { SectionContainer, SectionTitle } from 'ui'

export interface IHowItWorksProps {
  title: string
}
export default function HowItWorks({ title }: IHowItWorksProps) {
  return (
    <SectionContainer compact>
      <SectionTitle>{title}</SectionTitle>
    </SectionContainer>
  )
}
