'use client'
import { ReactNode } from 'react'
import type { IImgProps } from '../image'
import { Img } from '../image'
import { IconCart, IconCycleArrow } from '../icons'
import ProductOptions from './product-options'
import type { IProductOptionsProps } from './product-options'

interface IProductOverviewV2311Props extends IProductOptionsProps {
  title?: ReactNode
  description?: ReactNode

  deliverySelectorLabel?: ReactNode
  deliveryOptions?: {
    code?: string
    label?: ReactNode
    estimateDeliveryTimeText?: ReactNode
  }[]
  selectedDeliveryOptionCode?: string
  onDeliveryOptionChanged?: (code: string) => void

  primaryButtonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>
  secondaryButtonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>

  productImage?: IImgProps
}

const productOverviewV2311Props: IProductOverviewV2311Props = {
  title: 'You will make the best investment For your kitchen and garden',
  description:
    'Within 6-8 hours, Geme turns almost all organic waste into a nutrient-rich plant-based food.',

  onDeliveryOptionChanged: (code) => {
    console.log('delivery option changed', code)
  },
  deliverySelectorLabel: 'Ship to',
  selectedDeliveryOptionCode: 'us',
  deliveryOptions: [
    {
      code: 'us',
      label: 'United States',
      estimateDeliveryTimeText: 'Estimate Delivery September 26 - 28',
    },
    {
      code: 'europe',
      label: 'Europe',
      estimateDeliveryTimeText: 'Estimate Delivery September 26 - 28',
    },
    {
      code: 'canada',
      label: 'Canada',
      estimateDeliveryTimeText: 'Estimate Delivery September 26 - 28',
    },
  ],

  onProductOptionChanged: (code) => {
    console.log('product option changed', code)
  },
  selectedProductOptionCode: 'geme',
  productOptions: [
    {
      code: 'geme',
      title: 'Geme',
      description: 'Geme is the modern electric composter for home.',
      price: '$499',
    },
    {
      code: 'geme-plus',
      title: 'Geme Plus',
      description: 'Geme Plus is the modern electric composter for home.',
      price: '$699',
    },
    {
      code: 'geme-plus-2',
      title: 'Geme Plus 2',
      description: 'Geme Plus 2 is the modern electric composter for home.',
      price: '$799',
    },
  ],

  primaryButtonProps: {
    onClick: () => {
      console.log('primary button clicked')
    },
    children: (
      <>
        BUY IT NOW{' '}
        <IconCycleArrow className="w-4 md:w-8 xl:w-10 h-4 md:h-8 xl:h-10 ml-2 md:ml-4" />
      </>
    ),
  },

  secondaryButtonProps: {
    onClick: () => {
      console.log('secondary button clicked')
    },
    children: (
      <>
        ADD TO CART{' '}
        <IconCart className="w-4 md:w-8 xl:w-10 h-4 md:h-8 xl:h-10 ml-2 md:ml-4" />
      </>
    ),
  },

  productImage: {
    src: 'https://placehold.co/570x684/047857/white?text=poster',
    alt: 'poster',
    width: 570,
    height: 684,
    srcSetData: {
      '358w': 'https://placehold.co/358x378/047857/white?text=poster',
      '570w': 'https://placehold.co/570x684/047857/white?text=poster',
    },
  },
}

function ProductOverviewV2311({
  title,
  description,
  deliverySelectorLabel,
  deliveryOptions,
  onDeliveryOptionChanged,
  selectedDeliveryOptionCode,
  productOptions,
  onProductOptionChanged,
  selectedProductOptionCode,
  primaryButtonProps,
  secondaryButtonProps,
  productImage,
}: IProductOverviewV2311Props) {
  const deliveryOption = deliveryOptions?.find(
    (d) => d.code === selectedDeliveryOptionCode,
  )
  const productOption = productOptions?.find(
    (p) => p.code === selectedProductOptionCode,
  )

  return (
    <div className=" bg-white">
      <div className="grid grid-cols-1 xl:grid-cols-2 xl:gap-20 xl:mx-auto xl:max-w-7xl xl:py-16">
        {/* Desktop Image */}
        <div className="hidden xl:block">
          <Img className="w-full object-cover rounded-2xl" {...productImage} />
          {/* TODO add thumbnail sliders */}
        </div>

        <div className=" px-4 md:px-8 xl:px-0 py-8 md:py-16 xl:py-0 flex flex-col">
          <div className="">
            <h2 className=" v2311-font-h1 text-v2311-fg-dark-black text-center xl:text-left ">
              {title}
            </h2>
          </div>

          <div className="mt-4 md:mt-8 xl:order-1">
            <p className="flex items-center justify-center xl:justify-start">
              <span className="font-poppins text-[28px] md:text-[48px] xl:text-[64px] font-bold leading-none text-white xl:text-v2311-primary bg-[#047857] xl:bg-white rounded-lg mx-auto xl:m-0 py-1 md:py-2 xl:py-0 px-8 md:px-16 xl:px-0 ">
                {productOption?.price}
              </span>
            </p>
          </div>

          {/* Mobile/Tablet Image */}
          <div className="mt-4 md:mt-8 xl:hidden">
            <Img
              className="w-full h-full object-cover rounded-2xl"
              {...productImage}
            />
          </div>

          <div className="mt-4 md:mt-8 xl:mt-4">
            <p className="v2311-font-body text-v2311-fg-dark-black text-center xl:text-left">
              {description}
            </p>
          </div>

          {/* CTAs */}
          <div className="mt-4 md:mt-8 xl:order-2">
            <div className="flex gap-2 md:gap-4 xl:gap-4 flex-col xl:flex-row">
              <button
                className=" v2311-font-btn xl:text-2xl bg-[#047857] text-white text-center rounded-lg py-2 md:py-4 xl:py-6 flex items-center justify-center xl:flex-1"
                {...primaryButtonProps}
              />
              {secondaryButtonProps && (
                <button
                  className=" v2311-font-btn xl:text-2xl bg-[#6E8780] text-white text-center rounded-lg py-2 md:py-4 xl:py-6 flex items-center justify-center xl:flex-1"
                  {...secondaryButtonProps}
                />
              )}
            </div>
          </div>

          {/* Ship to selector */}
          <div className="mt-4 md:mt-8 xl:order-1">
            <div className="flex gap-2 md:gap-4 flex-row items-center">
              <label
                className="v2311-font-body text-v2311-fg-dark-black"
                htmlFor="ship-to"
              >
                {deliverySelectorLabel}
              </label>
              <div className="flex-1">
                <select
                  className=" v2311-font-body color-[#666] w-full h-[26px] md:h-[41px] border border-[#666] rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent"
                  value={deliveryOption?.code}
                  onChange={(evt) =>
                    onDeliveryOptionChanged != null &&
                    onDeliveryOptionChanged(evt.target.value)
                  }
                >
                  {deliveryOptions?.map((deliveryOpt) => (
                    <option key={deliveryOpt.code} value={deliveryOpt.code}>
                      {deliveryOpt.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Estimate Delivery Time */}
          <div className="mt-4 md:mt-8 xl:mt-4 xl:order-1">
            <p className=" v2311-font-body text-v2311-fg-dark-black font-bold text-center xl:text-left">
              {deliveryOption?.estimateDeliveryTimeText}
            </p>
          </div>

          {/* Product Option */}
          <div className="mt-4 md:mt-8 xl:order-1">
            {productOptions && (
              <ProductOptions
                selectedProductOptionCode={selectedProductOptionCode}
                productOptions={productOptions}
                onProductOptionChanged={onProductOptionChanged}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

const EXAMPLE_PRODUCT_OVERVIEW_PROPS = { productOverviewV2311Props }

export { ProductOverviewV2311, EXAMPLE_PRODUCT_OVERVIEW_PROPS }
export type { IProductOverviewV2311Props }
