import Image from 'next/image'
import { ReactNode } from 'react'

export interface IThreeColumnWithDescriptionProps {
  greyBackground?: boolean
  title: string
  description?: ReactNode
  imageAspectClassName?: string
  categories: {
    name?: string
    imageSrc: string
    imageAlt: string
    description?: ReactNode
    imageClassName?: string
  }[]
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

function ThreeColumnWithDescription({
  title,
  description,
  imageAspectClassName,
  categories,
  greyBackground,
}: IThreeColumnWithDescriptionProps) {
  return (
    <div className={classNames(greyBackground ? 'bg-gray-50' : 'bg-white')}>
      <div className="mx-auto max-w-xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            {title}
          </h2>
          {description && (
            <div className="mt-4 text-lg text-gray-500">{description}</div>
          )}
        </div>

        <div className="mt-10 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
          {categories.map((category, idx) => {
            return (
              <div key={`${category.name}_${idx}`} className="block">
                <div
                  aria-hidden="true"
                  className={classNames(
                    'overflow-hidden rounded-lg',
                    imageAspectClassName
                      ? imageAspectClassName
                      : 'aspect-w-3 aspect-h-2 lg:aspect-w-5 lg:aspect-h-6',
                  )}
                >
                  <Image
                    width={500}
                    height={300}
                    src={category.imageSrc}
                    alt={category.imageAlt}
                    className={classNames(
                      'h-full w-full object-cover object-center',
                      category.imageClassName ? category.imageClassName : '',
                    )}
                  />
                </div>
                {category.name && (
                  <h3 className="mt-4 text-base font-semibold text-gray-900 md:text-lg">
                    {category.name}
                  </h3>
                )}
                {category.description && (
                  <p className="mt-2 text-sm text-gray-500 md:text-base">
                    {category.description}
                  </p>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ThreeColumnWithDescription
