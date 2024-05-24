// FIXME: next/link not work with next-intl, should use components/link instead.
import Link from 'next/link'
import { QuestionMarkCircleIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'

interface IQAType {
  question: string
  answer: string
}

interface ILabelType {
  label: string
  description: string
}

interface IGemeDotsProps {
  title: string
  subTitle: string
  forward: {
    title: string
    description: string
    imgSrc: string
  }
  enrollment: {
    title: string
    questionsAndAnswers: IQAType[]
  }
  conditions: {
    title: string
    items: ILabelType[]
  }
}

function GemeDotsLoyaltyProgram(props: IGemeDotsProps) {
  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-7xl py-8 sm:px-2 lg:px-4">
        <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
          <div className="grid grid-cols-1 items-center gap-y-10 gap-x-16 lg:grid-cols-2">
            <div>
              <h2 className="text-4xl font-bold tracking-tight text-emerald-600 mb-5">
                {props.title}
              </h2>
              <div
                className="mt-4 text-gray-500"
                dangerouslySetInnerHTML={{
                  __html: props.forward.description,
                }}
              />
            </div>
            <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg ">
              <Image
                src={props.forward.imgSrc}
                alt="Geme Dots Loyalty Program"
                width={570}
                height={380}
                className="object-contain object-center"
              />
            </div>
          </div>

          <h3 className="mt-10 text-2xl font-medium text-emerald-600">
            {props.enrollment.title}
          </h3>
          <div className="mt-5 grid grid-cols-1 gap-y-2 gap-x-8">
            {props.enrollment.questionsAndAnswers.map((item) => (
              <div key={item.question} className="sm:flex lg:block">
                <div className="mt-2 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
                  <h4 className="text-lg font-medium text-gray-900">
                    {item.question}
                  </h4>
                  <div
                    className="mt-2 text-gray-500"
                    dangerouslySetInnerHTML={{
                      __html: item.answer,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
          <h3 className="mt-20 text-2xl font-medium text-emerald-600">
            {props.conditions.title}
          </h3>
          <div className="mt-5 grid grid-cols-1 gap-y-2 gap-x-8">
            {props.conditions.items.map((item) => (
              <div key={item.label} className="sm:flex lg:block">
                <div className="mt-2 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
                  <h4 className="text-lg font-medium text-gray-900">
                    {item.label}
                  </h4>
                  <div
                    className="mt-2 text-gray-500"
                    dangerouslySetInnerHTML={{
                      __html: item.description,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

const GemeDotsLoyaltyProgramLink = (props: IGemeDotsProps) => (
  <Link
    href="/geme-dots-loyalty-program"
    passHref
    title="GEME Dots Loyalty Program"
    className="ml-1"
  >
    <QuestionMarkCircleIcon className="w-5 h-5 fill-gray-900" />
  </Link>
)

export type { IGemeDotsProps }
export { GemeDotsLoyaltyProgram, GemeDotsLoyaltyProgramLink }
