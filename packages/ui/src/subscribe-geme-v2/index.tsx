import { FC, ReactNode } from 'react'
import {
  SectionContainer,
  SectionDescription,
  SectionTitle,
} from '../ui-components'
import ProductSection, { IGemeV2ProductSection } from './ProductSection'

export interface ISubscribeGemeV2Props extends IGemeV2ProductSection {
  title: ReactNode
  description: ReactNode
  emailPlaceholder: string
  submitButtonLabel: string

  SubscribeComponent?: FC<{
    inputPlaceholder: string
    submitButtonLabel: string
  }>
}

export function SubscribeGemeV2({
  title,
  description,
  emailPlaceholder,
  submitButtonLabel,
  SubscribeComponent,
  imageList,
  productSectionTitle,
}: ISubscribeGemeV2Props) {
  return (
    <div className="bg-v2311-bg-dark-green">
      <SectionContainer>
        <SectionTitle className="!text-white"> {title} </SectionTitle>
        <SectionDescription className=" !text-white mt-4 md:mt-6">
          {description}
        </SectionDescription>

        {SubscribeComponent && (
          <SubscribeComponent
            inputPlaceholder={emailPlaceholder}
            submitButtonLabel={submitButtonLabel}
          />
        )}

        <ProductSection
          imageList={imageList}
          productSectionTitle={productSectionTitle}
        />
      </SectionContainer>
    </div>
  )
}
