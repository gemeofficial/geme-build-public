'use client'

import { ReactNode } from 'react'
import { RadioGroup } from '@headlessui/react'
import classNames from '../lib/classNames'

interface IProductOptionsProps {
  productOptions?: {
    code?: string
    title?: ReactNode
    description?: ReactNode
    price?: string
  }[]
  selectedProductOptionCode?: string
  onProductOptionChanged?: (code: string) => void
}

function ProductOptions({
  selectedProductOptionCode,
  productOptions,
  onProductOptionChanged,
}: IProductOptionsProps) {
  const productOption = productOptions?.find(
    (p) => p.code === selectedProductOptionCode,
  )

  return (
    <RadioGroup
      as="div"
      className="grid grid-cols-2 gap-2 md:gap-4"
      value={productOption?.code}
      onChange={onProductOptionChanged}
    >
      {productOptions?.map((productOpt) => (
        <RadioGroup.Option
          as="div"
          className={({ active }) =>
            classNames(
              active ? 'ring-2 ring-[#047857]' : '',
              'relative block cursor-pointer rounded-lg border border-[#999] p-4 focus:outline-none',
            )
          }
          key={productOpt.code}
          value={productOpt.code}
        >
          {({ checked, active }) => (
            <>
              <RadioGroup.Label
                as="h3"
                className=" v2311-font-body font-bold text-v2311-fg-dark-black"
              >
                {productOpt.title}
              </RadioGroup.Label>
              <RadioGroup.Description
                as="div"
                className="mt-1 v2311-font-img-desc text-[#999] "
              >
                {productOpt.description}
              </RadioGroup.Description>
              <div
                className={classNames(
                  active ? 'border' : 'border-2',
                  checked ? 'border-[#047857]' : 'border-transparent',
                  'pointer-events-none absolute -inset-px rounded-lg',
                )}
                aria-hidden="true"
              />
            </>
          )}
        </RadioGroup.Option>
      ))}
    </RadioGroup>
  )
}

export default ProductOptions
export type { IProductOptionsProps }
