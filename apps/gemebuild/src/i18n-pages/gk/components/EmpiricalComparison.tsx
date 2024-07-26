import Image from 'next/image'
import { ReactNode } from 'react'
import classNames from 'ui/src/lib/classNames'

export interface IEmpiricalComparisonProps {
  title: ReactNode
  features: {
    name: string
    imageSrc: string
    imageAlt: string
    title?: string
    description?: string
  }[]
  featuresImage: {
    width: number
    height: number
  }
  description1?: ReactNode
  description2?: ReactNode
  pictureDescription1?: string
  pictureSubDescription2?: string
  grayBackground?: boolean
  gridClassName?: string
}

export default function EmpiricalComparison({
  grayBackground,
  description1,
  description2,
  features,
  featuresImage,
  pictureDescription1,
  pictureSubDescription2,
  title,
  gridClassName,
}: IEmpiricalComparisonProps) {
  return (
    <div className={classNames(grayBackground ? 'bg-gray-50' : 'bg-white')}>
      <div className="mx-auto max-w-2xl py-16 lg:py-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {title}
          </h2>
          {description1 && (
            <p className="mt-4 text-lg text-gray-500">{description1}</p>
          )}
          {description2 && (
            <p className="mt-4 text-lg text-gray-500">{description2}</p>
          )}
        </div>

        <div
          className={classNames(
            'mt-11 grid items-start gap-y-16 gap-x-6 sm:mt-16 lg:gap-x-8',
            gridClassName
              ? gridClassName
              : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
          )}
        >
          {features.map((feature, index) => (
            <div key={feature.name + index} className="flex flex-col-reverse">
              <div className="mt-6">
                <h3 className="font-medium text-gray-900">{feature.name}</h3>
                {feature.description && (
                  <p className="mt-2 text-sm text-gray-500">
                    {feature.description}
                  </p>
                )}
              </div>
              <div className="overflow-hidden bg-gray-100">
                <Image
                  width={featuresImage.width}
                  height={featuresImage.height}
                  src={feature.imageSrc}
                  alt={feature.imageAlt}
                  className={classNames('object-cover object-center')}
                  style={{
                    width: `${featuresImage.width}px`,
                    height: `${featuresImage.height}px`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 text-gray-500">
          {pictureDescription1 && (
            <p>
              <em>{pictureDescription1}</em>
            </p>
          )}
          {pictureSubDescription2 && (
            <p>
              <em>{pictureSubDescription2}</em>
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
