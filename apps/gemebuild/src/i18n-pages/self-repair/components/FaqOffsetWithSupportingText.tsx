import { FC, PropsWithChildren, ReactNode } from 'react'

interface IFaqOffsetWithSupportingTextProps {
  title: string
  description?: ReactNode
  faqs: { question: string; answer: ReactNode }[]
  Container?: FC<PropsWithChildren>
}

function FaqOffsetWithSupportingText({
  title,
  description,
  faqs,
  Container = DefaultContainer,
}: IFaqOffsetWithSupportingTextProps) {
  return (
    <Container>
      <div className="lg:grid lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
            {title}
          </h2>
          {description && (
            <p className="mt-4 text-base leading-7 text-gray-600">
              {description}
            </p>
          )}
        </div>
        <div className="mt-10 lg:col-span-7 lg:mt-0">
          <dl className="space-y-10">
            {faqs.map((faq,index) => (
              <div key={faq.question + index}>
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  {faq.question}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {faq.answer}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Container>
  )
}

function NoopContainer({ children }: PropsWithChildren<{}>) {
  return <>{children}</>
}

function DefaultContainer({ children }: PropsWithChildren<{}>) {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:pt-32 lg:py-40 lg:px-8">
        {children}
      </div>
    </div>
  )
}

export type { IFaqOffsetWithSupportingTextProps }
export { FaqOffsetWithSupportingText }
export { NoopContainer as FaqOffsetWithSupportingTextNoopContainer }
