// https://tailwindui.com/components/marketing/sections/feature-sections#component-cdca7eda27bdaceb45026dca4c17efe7
import { ReactNode } from 'react'

export interface IGridWithOffsetIconsLiteProps {
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

function GridWithOffsetIconsLite({
  title,
  description,
  features,
}: IGridWithOffsetIconsLiteProps) {
  return (
    <div className="relative py-[48px] sm:py-[60px] my-[45px] bg-gray-50">
      <div className="mx-0 sm:mx-auto text-center w-[full] sm:max-w-3xl lg:max-w-7xl lg:px-8">
        {title && (
          <h2 className="text-xl mx-4 sm:mx-0 md:text-3xl text-gray-900 font-bold md:leading-none">
            {title}
          </h2>
        )}
        {description && (
          <p className="mx-4 sm:mx-0 mt-1 lg:mt-2 text-base md:text-lg leading-tight text-gray-500">
            {description}
          </p>
        )}
        <div className="mt-[30px] px-0 sm:px-4 md:px-0">
          <div className="overflow-scroll	grid grid-cols-[repeat(3,_75vw)] gap-3 px-4 sm:px-0 md:px-4 lg:px-0 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3 snap-x snap-mandatory no-scrollbar">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="scroll-mx-4 snap-center flex gap-1 flex-col items-start p-4 pt-3.5 sm:p-5 bg-white rounded-lg"
              >
                <div className="relative shrink-0 w-[36px] h-[36px] lg:w-[44px] lg:h-[44px]">
                  <feature.icon aria-hidden="true" />
                </div>
                <div>
                  <h3 className="mb-1 leading-tight font-semibold text-base lg:text-lg capitalize text-gray-900 text-left">
                    {feature.name}
                  </h3>
                  <div className="text-sm sm:font-medium text-gray-500 text-left leading-tight">
                    {feature.description}
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

export default GridWithOffsetIconsLite
