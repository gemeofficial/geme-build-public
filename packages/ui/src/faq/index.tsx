'use client'

import { Disclosure, Transition } from '@headlessui/react'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { SectionContainer, SectionDescription, SectionTitle } from '../index'

export interface IFaqProps {
  title: string
  description?: string
  faqs: {
    slug: string // 目前是没有用到的 可以找个时间干掉他
    question: string
    answer: React.ReactNode
  }[]
  titleClassName?: string
}

export function Faq({ faqs, title, description, titleClassName }: IFaqProps) {
  const [openIndex, setOpenIndex] = useState(-1)

  useEffect(() => {
    if (openIndex !== -1) {
      setTimeout(() => {
        const el = document.getElementById(`faq-${openIndex}`)
        el?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }, 100)
    }
  }, [openIndex])

  return (
    <SectionContainer compact>
      <SectionTitle className={clsx(titleClassName)}>{title}</SectionTitle>
      {description && <SectionDescription>{description}</SectionDescription>}
      <dl className="mt-10 space-y-6 divide-y divide-gray-900/10 max-w-4xl mx-auto">
        {faqs.map((faq, index) => (
          <Disclosure as="div" key={faq.question + index} className="pt-6">
            {({ open }) => (
              <>
                <dt>
                  <Disclosure.Button
                    id={`faq-${index}`}
                    onClick={() =>
                      setOpenIndex(openIndex === index ? -1 : index)
                    }
                    className="flex w-full items-start justify-between text-left text-gray-900"
                  >
                    <span className="text-base font-semibold leading-7">
                      {faq.question}
                    </span>
                    <span className="ml-6 flex h-7 items-center">
                      <ChevronRightIcon
                        className={clsx(
                          'h-4 lg:h-5 w-4 lg:w-5',
                          'transition-all duration-300',
                          openIndex === index ? 'rotate-90' : '',
                        )}
                        aria-hidden="true"
                      />
                    </span>
                  </Disclosure.Button>
                </dt>

                <Transition
                  show={openIndex === index}
                  enter={clsx(
                    openIndex === index
                      ? 'transition-all duration-300 ease-out'
                      : '',
                  )}
                  enterFrom="transform max-h-0 opacity-50"
                  enterTo="transform max-h-max opacity-100"
                  leave={clsx(
                    openIndex === index
                      ? 'transition-all duration-300 ease-out'
                      : '',
                  )}
                  leaveFrom="transform max-h-max opacity-100"
                  leaveTo="transform max-h-0 opacity-50"
                >
                  <Disclosure.Panel static as="dd" className="mt-2 pr-12">
                    {typeof faq.answer === 'string' && (
                      <div
                        className="text-base leading-7 text-gray-600"
                        dangerouslySetInnerHTML={{
                          __html: faq.answer,
                        }}
                      ></div>
                    )}
                    {typeof faq.answer !== 'string' && (
                      <div className="text-base leading-7 text-gray-600">
                        {faq.answer}
                      </div>
                    )}
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>
        ))}
      </dl>
    </SectionContainer>
  )
}
