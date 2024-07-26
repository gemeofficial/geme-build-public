// https://tailwindui.com/components/marketing/sections/feature-sections#component-cdca7eda27bdaceb45026dca4c17efe7
import { ReactNode } from 'react'

export interface IGridWithOffsetIconsProps {
  heading?: string
  title?: string
  description?: ReactNode
  features: {
    name: string
    description: ReactNode
    icon:
      | React.ComponentType<React.ComponentPropsWithRef<'svg'>>
      | React.ComponentType<React.ComponentProps<'img'>>
  }[]
}

function GridWithOffsetIcons({
  heading,
  title,
  description,
  features,
}: IGridWithOffsetIconsProps) {
  return (
    <div className="relative bg-white py-16 pb-8 sm:py-24 sm:pb-12 lg:py-32 lg:pb-16">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
        {heading && (
          <h2 className="text-lg font-semibold text-emerald-600">{heading}</h2>
        )}
        {title && (
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {title}
          </p>
        )}
        {description && (
          <p className="mx-auto mt-5 max-w-prose text-xl text-gray-500">
            {description}
          </p>
        )}
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6 flex">
                <div className=" flex-1 flow-root rounded-lg bg-gray-50 px-6 pb-8">
                  <div className="-mt-12">
                    <div>
                      <span className="inline-flex items-center justify-center rounded-md bg-white p-3 shadow-lg">
                        <feature.icon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">
                      {feature.name}
                    </h3>
                    <div className="mt-5 text-base text-gray-500 prose prose-ul:text-left ">
                      {feature.description}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default GridWithOffsetIcons
