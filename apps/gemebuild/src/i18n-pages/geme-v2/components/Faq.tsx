'use client'

import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'
import { SectionContainer, SectionDescription, SectionTitle } from 'ui'

export interface IFaqProps {
  title: string
  description?: string
  faqs: {
    slug: string
    question: string
    answer: React.ReactNode
  }[]
}

export default function Faq({ faqs, title, description }: IFaqProps) {
  return (
    <SectionContainer compact>
      <SectionTitle>{title}</SectionTitle>
      {description && <SectionDescription>{description}</SectionDescription>}
      <dl className="mt-10 space-y-6 divide-y divide-gray-900/10 max-w-4xl mx-auto">
        {faqs.map((faq) => (
          <Disclosure as="div" key={faq.question} className="pt-6">
            {({ open }) => (
              <>
                <dt>
                  <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                    <span className="text-base font-semibold leading-7">
                      {faq.question}
                    </span>
                    <span className="ml-6 flex h-7 items-center">
                      {open ? (
                        <MinusSmallIcon
                          className="h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                      )}
                    </span>
                  </Disclosure.Button>
                </dt>
                <Disclosure.Panel as="dd" className="mt-2 pr-12">
                  {typeof faq.answer === 'string' && (
                    <p
                      className="text-base leading-7 text-gray-600"
                      dangerouslySetInnerHTML={{
                        __html: faq.answer,
                      }}
                    ></p>
                  )}
                  {typeof faq.answer !== 'string' && (
                    <p className="text-base leading-7 text-gray-600">
                      {faq.answer}
                    </p>
                  )}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
      </dl>
    </SectionContainer>
  )
}
