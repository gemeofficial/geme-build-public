import Image from "next/image"

interface IWarrantyProps {
  title: string
  forward: {
    title:string
    description: string
    imgSrc: string
  }
  items: {
    name: string
    svgSrc: React.ReactNode
    description: string
  }[]
  additionalProvisions: {
    title:string
    description: string
  }
}


function Warranty(props: IWarrantyProps) {
  return (
    <div className="bg-gray-50 prose-a:break-all">
      <div className="mx-auto max-w-7xl py-8 sm:px-2  lg:px-4">
        <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
          <div className="grid grid-cols-1 items-center gap-y-10 gap-x-16 lg:grid-cols-2">
            <div>
              <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-5">
                {props.title}
              </h2>
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                {props.forward.title}
              </h3>
              <div
                className="mt-4 text-gray-500"
                dangerouslySetInnerHTML={{
                  __html: props.forward.description,
                }}
              />
            </div>
            <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg bg-gray-100">
              <Image
                width={570}
                height={380}
                src={props.forward.imgSrc}
                alt="GEME Warranty"
                className="object-cover object-center"
              />
            </div>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-y-10 gap-x-8 lg:grid-cols-3">
            {props.items.map((incentive) => (
              <div key={incentive.name} className="sm:flex lg:block">
                <div className="sm:flex-shrink-0">{incentive.svgSrc}</div>
                <div className="mt-4 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
                  <h3 className="text-lg font-medium text-gray-900">
                    {incentive.name}
                  </h3>
                  <div
                    className="mt-2 text-sm text-gray-500"
                    dangerouslySetInnerHTML={{
                      __html: incentive.description,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 grid grid-cols-1 gap-y-10 gap-x-8">
            <h4 className="text-2xl font-bold tracking-tight text-gray-900">
              {props.additionalProvisions.title}
            </h4>
            <div
              className="mt-4 text-gray-500"
              dangerouslySetInnerHTML={{
                __html: props.additionalProvisions.description,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export type { IWarrantyProps }
export { Warranty }
