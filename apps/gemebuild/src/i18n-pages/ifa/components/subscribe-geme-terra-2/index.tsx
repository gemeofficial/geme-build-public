import { FC, ReactNode } from 'react'
import { SectionContainer, SectionDescription, SectionTitle } from 'ui'
import ProductSection, { IGemeTerra2ProductSection } from './ProductSection'

export interface ISubscribeGemeTerra2Props extends IGemeTerra2ProductSection {
  title: ReactNode
  description: ReactNode
  emailPlaceholder: string
  submitButtonLabel: string

  SubscribeComponent?: FC<{
    inputPlaceholder: string
    submitButtonLabel: string
  }>
}

export function SubscribeGemeTerra2({
  title,
  description,
  emailPlaceholder,
  submitButtonLabel,
  SubscribeComponent,
  imageList,
  productSectionTitle,
}: ISubscribeGemeTerra2Props) {
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
