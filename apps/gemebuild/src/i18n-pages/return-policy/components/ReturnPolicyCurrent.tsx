import Image from 'next/image'
import { IReturnPolicyCurrentProps } from './ReturnPolicy'

function ReturnPolicyCurrent(props: IReturnPolicyCurrentProps) {
  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-7xl py-8 sm:px-2 lg:px-4">
        <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
          <div className="grid grid-cols-1 items-center gap-y-10 gap-x-16 lg:grid-cols-2">
            <div>
              <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-5">
                {props.title}
              </h2>

              <time className="text-gray-500 text-xs">{props.updateTime}</time>
              <div className="mt-4 text-gray-500">
                <div
                  dangerouslySetInnerHTML={{
                    __html: props.forward.description,
                  }}
                />
              </div>
            </div>
            <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg bg-gray-100">
              <Image
                src={props.forward.imgSrc}
                alt="Returns Work Process"
                className="object-cover object-center"
                width={570}
                height={380}
              />
            </div>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-y-10 gap-x-8 lg:grid-cols-3">
            {props.items.map(
              (incentive) =>
                !incentive.hide && (
                  <div key={incentive.name} className="sm:flex lg:block">
                    <div className="sm:flex-shrink-0">{incentive.svgSrc}</div>
                    <div className="mt-4 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
                      <h3 className="text-lg font-medium text-gray-900">
                        {incentive.name}
                      </h3>
                      <div className="mt-2 text-sm text-gray-500">
                        <div
                          dangerouslySetInnerHTML={{
                            __html: incentive.description,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                )
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReturnPolicyCurrent
