// https://tailwindui.com/components/marketing/sections/feature-sections#component-482ea288d556374012ca6eed5391c5f0
import { CheckIcon } from '@heroicons/react/24/outline'
import classNames from 'ui/src/lib/classNames'

export interface IWithFeatureGridListProps {
  title: string
  description?: string

  features: {
    name: string
    description?: string
    icon?:
      | React.ComponentType<React.ComponentPropsWithRef<'svg'>>
      | React.ComponentType<React.ComponentProps<'img'>>
  }[]
  grayBackground?: boolean
  featureNameWrapperClassName?: string
}

export default function WithFeatureGridList({
  title,
  description,
  features,
  grayBackground = true,
  featureNameWrapperClassName,
}: IWithFeatureGridListProps) {
  return (
    <div className={classNames(grayBackground ? 'bg-gray-50' : 'bg-white')}>
      <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            {title}
          </h2>
          {description && (
            <p className="mt-4 text-lg text-gray-500">{description}</p>
          )}
        </div>
        <dl className="mt-12 space-y-10 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-4 lg:gap-x-8">
          {features.map((feature) => (
            <div key={feature.name} className="relative">
              <dt>
                {feature.icon != null && (
                  <feature.icon
                    className="absolute h-6 w-6 text-emerald-500"
                    aria-hidden="true"
                  />
                )}
                {feature.icon == null && (
                  <CheckIcon
                    className="absolute h-6 w-6 text-emerald-500"
                    aria-hidden="true"
                  />
                )}
                <p
                  className={classNames(
                    'ml-9 text-lg font-medium leading-6 text-gray-900',
                    featureNameWrapperClassName
                      ? featureNameWrapperClassName
                      : '',
                  )}
                >
                  {feature.name}
                </p>
              </dt>
              {feature.description && (
                <dd className="mt-2 ml-9 text-base text-gray-500">
                  {feature.description}
                </dd>
              )}
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
