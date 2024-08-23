/* eslint-disable react/no-unescaped-entities */
import {
  ContentSection2,
  ContentSection7,
  ContentSection8,
  type IContentSection2Props,
  type IContentSection7Props,
  type IContentSection8Props,
} from 'ui'

import {
  PdpIntroSection1,
  PdpIntroSection5,
  PdpIntroSection6,
  PdpIntroSection7,
} from './product-components'
import type {
  IPdpIntroSection1Props,
  IPdpIntroSection5Props,
  IPdpIntroSection6Props,
  IPdpIntroSection7Props,
} from './product-components'

export interface IPdpIntroProps {
  pdpIntroSection1Props: IPdpIntroSection1Props
  contentSection71Props: IContentSection7Props
  contentSection72Props: IContentSection7Props
  pdpIntroSection5Props: IPdpIntroSection5Props
  contentSection21Props: IContentSection2Props
  contentSection22Props: IContentSection2Props
  pdpIntroSection6Props: IPdpIntroSection6Props
  pdpIntroSection7Props: IPdpIntroSection7Props
  contentSection23Props: IContentSection2Props
  contentSection24Props: IContentSection2Props
  contentSection8Props: IContentSection8Props
}

function Intro({
  pdpIntroSection1Props,
  contentSection71Props,
  contentSection72Props,
  contentSection21Props,
  contentSection22Props,
  pdpIntroSection5Props,
  pdpIntroSection6Props,
  pdpIntroSection7Props,
  contentSection23Props,
  contentSection24Props,
  contentSection8Props,
}: IPdpIntroProps): JSX.Element {
  return (
    <div>
      <PdpIntroSection1 {...pdpIntroSection1Props} />

      <ContentSection7 {...contentSection71Props} />

      <ContentSection7 {...contentSection72Props} />

      <PdpIntroSection5 {...pdpIntroSection5Props} />

      <ContentSection2 {...contentSection21Props} />

      <ContentSection2 {...contentSection22Props} />

      <PdpIntroSection6 {...pdpIntroSection6Props} />

      <PdpIntroSection7 {...pdpIntroSection7Props} />

      <ContentSection2 {...contentSection23Props} />

      <ContentSection2 {...contentSection24Props} />

      <ContentSection8 {...contentSection8Props} />
    </div>
  )
}

export default Intro
