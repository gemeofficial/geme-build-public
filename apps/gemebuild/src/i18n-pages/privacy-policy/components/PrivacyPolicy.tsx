import cn from 'clsx'
import s from './PrivacyPolicy.module.css'

interface IPrivacyPolicyProps {
  title: string
  description: string
  items: {
    name: string
    description: string
    id?:string
  }[]
}

function PrivacyPolicy(props:IPrivacyPolicyProps) {
  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-7xl py-8 px-4">
        <div className="mx-auto max-w-none">
          <div>
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-10">
              {props.title}
            </h2>
            <div
              className="mt-4 text-gray-500"
              dangerouslySetInnerHTML={{
                __html: props.description,
              }}
            />
          </div>
          <div className="mt-10 prose-a:break-all">
            {props.items.map((incentive) => (
              <div key={incentive.name} className="mt-10 relative">
                <div className={cn(s.target)} id={incentive.id} />
                <h3 className="text-2xl font-medium text-gray-900 mb-4">
                  {incentive.name}
                </h3>
                <div
                  className="mt-2 text-gray-500"
                  dangerouslySetInnerHTML={{
                    __html: incentive.description,
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export type { IPrivacyPolicyProps }
export { PrivacyPolicy }
