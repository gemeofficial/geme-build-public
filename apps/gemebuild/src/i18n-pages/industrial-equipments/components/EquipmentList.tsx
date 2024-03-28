'use client'
import clsx from 'clsx'
import Image from 'next/legacy/image'
import { useLink } from '../../../contexts/link-context'

export interface IProductListsWithTallImagesProps {
  title: string
  description?: string

  products: {
    id: string
    name: string
    href: string
    price?: string
    description?: string
    imageSrc: string
    imageAlt?: string
    imageWidth?: number
    imageHeight?: number
  }[]

  productImageAspectRadioClassName?: string
  productsContainerClassName?: string
}

function EquipmentList({
  title,
  description,
  products,
  productImageAspectRadioClassName,
  productsContainerClassName,
}: IProductListsWithTallImagesProps) {
  const Link = useLink()

  return (
    <div className="bg-white">
      <div className="py-24 sm:py-32 xl:mx-auto xl:max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            {title}
          </h2>
        </div>
        <div className="sm:flex sm:items-center sm:justify-between">
          {description && (
            <p className="mt-4 text-base text-gray-500">{description}</p>
          )}
        </div>

        <div
          className={clsx(
            'mt-10 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8',
            productsContainerClassName || '',
          )}
        >
          {products.map((product) => (
            <Link
              key={product.id}
              href={product.href}
              passHref
              className="group"
            >
              <div
                className={clsx(
                  'w-full overflow-hidden rounded-lg',
                  productImageAspectRadioClassName ||
                    'aspect-w-1! aspect-h-1! sm:aspect-w-2! sm:aspect-h-3!',
                )}
              >
                <Image
                  src={product.imageSrc}
                  alt={product.imageAlt || ''}
                  layout="responsive"
                  width={product.imageWidth || 200}
                  height={product.imageHeight || 300}
                  objectFit="cover"
                  objectPosition="center"
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
                <h3>{product.name}</h3>
                {product.price && <p>{product.price}</p>}
              </div>
              {product.description && (
                <p className="mt-1 text-sm italic text-gray-500">
                  {product.description}
                </p>
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default EquipmentList
