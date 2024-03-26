import { Hero, IHeaderCenteredProps } from './Hero'
import { FaqGroups } from './FaqGroups'
import { IFaqOffsetWithSupportingTextProps } from './FaqOffsetWithSupportingText'

interface IrenderChildProps {
  faqGroups: IFaqOffsetWithSupportingTextProps[]
  heroProps: IHeaderCenteredProps
}

function SelfRepairView(props: IrenderChildProps) {
  return (
    <>
      <Hero {...props.heroProps} />
      <FaqGroups groups={props.faqGroups} />
    </>
  )
}

export default SelfRepairView
