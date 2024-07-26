import { ReactNode } from 'react'

export interface IGcnCustomizedDevelopmentProps {
  title: ReactNode
  subTitle: string
  description: ReactNode
  imageAlt: string
}

export default function GcnCustomizedDevelopment({
  description,
  imageAlt,
  subTitle,
  title,
}: IGcnCustomizedDevelopmentProps) {
  return (
    <div className="bg-white py-16 lg:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:flex lg:items-center lg:px-0 lg:text-left lg:z-10 ">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                {title}
              </h2>
              <h3 className="mt-6 text-xl font-bold tracking-tight text-gray-900">
                {subTitle}
              </h3>
              {description}
            </div>
          </div>
          <div className="lg:relative lg:m-0">
            <picture>
              <img
                className="lg:max-w-3xl xl:max-w-4xl lg:absolute lg:bottom-0 lg:right-0"
                src="/assets/images/green-city-networks/s3-1.png"
                width={1111}
                height={674}
                loading="lazy"
                alt={imageAlt}
              />
            </picture>
          </div>
        </div>
      </div>
    </div>
  )
}
