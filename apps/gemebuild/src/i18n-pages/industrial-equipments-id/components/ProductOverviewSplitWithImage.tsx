'use client'
import { ReactNode } from 'react'
import { StarIcon } from '@heroicons/react/20/solid'
import { RadioGroup } from '@headlessui/react'
import clsx from 'clsx'

import { useLink } from '../../../contexts/link-context'

const reviews = { average: 4, totalCount: 1624 }

// cf: https://tailwindui.com/components/ecommerce/components/product-overviews#component-7343b727d03bb437b9617fb26bf35021
function ProductOverviewSplitWithImage({
  product,
  breadcrumbs,
  productImageAspectRadioClassName,
  ctaSection,
}: IProductOverviewSplitWithImageProps) {
  const Link = useLink()

  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
        {/* Product details */}
        <div className="lg:max-w-lg lg:self-end">
          <nav aria-label="Breadcrumb">
            <ol role="list" className="flex items-center space-x-2">
              {breadcrumbs?.map((breadcrumb, breadcrumbIdx) => (
                <li key={breadcrumb.id}>
                  <div className="flex items-center text-sm">
                    <Link
                      href={breadcrumb.href}
                      passHref
                      className="font-medium text-gray-500 hover:text-gray-900"
                    >
                      {breadcrumb.name}
                    </Link>
                    {breadcrumbIdx !== breadcrumbs.length - 1 ? (
                      <svg
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        className="ml-2 h-5 w-5 flex-shrink-0 text-gray-300"
                      >
                        <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                      </svg>
                    ) : null}
                  </div>
                </li>
              ))}
            </ol>
          </nav>

          <div className="mt-4">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {product.name}
            </h1>
          </div>

          <section aria-labelledby="information-heading" className="mt-4">
            <h2 id="information-heading" className="sr-only">
              Product information
            </h2>

            {product.price != null && (
              <div className="flex items-center">
                <p className="text-lg text-gray-900 sm:text-xl">
                  {product.price}
                </p>

                <div className="ml-4 border-l border-gray-300 pl-4">
                  <h2 className="sr-only">Reviews</h2>
                  <div className="flex items-center">
                    <div>
                      <div className="flex items-center">
                        {[0, 1, 2, 3, 4].map((rating) => (
                          <StarIcon
                            key={rating}
                            className={clsx(
                              reviews.average > rating
                                ? 'text-yellow-400'
                                : 'text-gray-300',
                              'h-5 w-5 flex-shrink-0',
                            )}
                            aria-hidden="true"
                          />
                        ))}
                      </div>
                      <p className="sr-only">
                        {reviews.average} out of 5 stars
                      </p>
                    </div>
                    <p className="ml-2 text-sm text-gray-500">
                      {reviews.totalCount} reviews
                    </p>
                  </div>
                </div>
              </div>
            )}

            <div
              className={clsx('space-y-6', product.price != null ? 'mt-4' : '')}
            >
              {product.description && (
                <div className="text-base text-gray-500">
                  {product.description}
                </div>
              )}
            </div>

            {/* <div className="mt-6 flex items-center">
              <CheckIcon
                className="h-5 w-5 flex-shrink-0 text-green-500"
                aria-hidden="true"
              />
              <p className="ml-2 text-sm text-gray-500">
                In stock and ready to ship
              </p>
            </div> */}
          </section>
        </div>

        {/* Product image */}
        <div className="mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center">
          <div
            className={clsx(
              'overflow-hidden rounded-lg',
              productImageAspectRadioClassName || 'aspect-w-1 aspect-h-1 ',
            )}
          >
            <img
              src={product.imageSrc}
              alt={product.imageAlt}
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>

        {/* Product form */}
        <div className="mt-10 lg:col-start-1 lg:row-start-2 lg:max-w-lg lg:self-start">
          <section aria-labelledby="options-heading">
            <h2 id="options-heading" className="sr-only">
              Product options
            </h2>

            <form>
              {product.sizes != null && product.sizes.length > 0 && (
                <SizeOptions
                  selectedSize="placeholder"
                  setSelectedSize={() => null}
                  sizes={product.sizes}
                />
              )}

              {/* 渲染按钮组 */}
              {ctaSection}
            </form>
          </section>
        </div>
      </div>
    </div>
  )
}

function SizeOptions({
  selectedSize,
  setSelectedSize,
  sizes,
}: {
  selectedSize: string
  setSelectedSize: () => void
  sizes: { name: string; description: string }[]
}) {
  return (
    <div className="sm:flex sm:justify-between">
      {/* Size selector */}
      <RadioGroup value={selectedSize} onChange={setSelectedSize}>
        <RadioGroup.Label className="block text-sm font-medium text-gray-700">
          Size
        </RadioGroup.Label>
        <div className="mt-1 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {sizes.map((size) => (
            <RadioGroup.Option
              as="div"
              key={size.name}
              value={size}
              className={({ active }) =>
                clsx(
                  active ? 'ring-2 ring-emerald-500' : '',
                  'relative block cursor-pointer rounded-lg border border-gray-300 p-4 focus:outline-none',
                )
              }
            >
              {({ active, checked }) => (
                <>
                  <RadioGroup.Label
                    as="p"
                    className="text-base font-medium text-gray-900"
                  >
                    {size.name}
                  </RadioGroup.Label>
                  <RadioGroup.Description
                    as="p"
                    className="mt-1 text-sm text-gray-500"
                  >
                    {size.description}
                  </RadioGroup.Description>
                  <div
                    className={clsx(
                      active ? 'border' : 'border-2',
                      checked ? 'border-emerald-500' : 'border-transparent',
                      'pointer-events-none absolute -inset-px rounded-lg',
                    )}
                    aria-hidden="true"
                  />
                </>
              )}
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>
    </div>
  )
}

export interface IProductOverviewSplitWithImageProps {
  product: {
    name: string
    href?: string
    price?: string
    description?: ReactNode
    imageSrc: string
    imageAlt?: string

    sizes?: { name: string; description: string }[]
  }
  breadcrumbs?: { id: string; name: string; href: string }[]
  productImageAspectRadioClassName?: string

  // section for replacing the "Add to cart" CTA
  ctaSection?: ReactNode
}

export default ProductOverviewSplitWithImage
