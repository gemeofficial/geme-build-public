'use client'

import { Tab } from '@headlessui/react'

import { Link, Element } from 'react-scroll'
import classNames from '../lib/classNames'
import { ReactNode, useEffect, useState } from 'react'

interface IProductFeaturesTabProps {
  name: string
  heading: string
  description?: ReactNode
  features: {
    name: string
    description: string
  }[]
}

export function EquipmentFeaturesView({
  tabs,
}: {
  tabs: IProductFeaturesTabProps[]
}) {
  const [offset, setOffset] = useState(0)
  useEffect(() => {
    const rootHeader = document.querySelector('#root-header')
    if (rootHeader) {
      const rootHeaderheight = rootHeader.getBoundingClientRect().height
      setOffset(-rootHeaderheight)
    }
  }, [])

  return (
    <div className="bg-white">
      <section
        aria-labelledby="features-heading"
        className="mx-auto max-w-7xl py-16 sm:py-24 sm:px-2 lg:px-8"
      >
        {tabs.length > 0 && (
          <Tab.Group as="div">
            <div className="-mx-4 flex overflow-x-auto sm:mx-0">
              <div className="flex-auto border-b border-gray-200 px-4 sm:px-0">
                <Tab.List className="-mb-px flex space-x-10">
                  {tabs.map((tab) => (
                    <Tab
                      key={tab.name}
                      className={({ selected }) =>
                        classNames(
                          selected
                            ? 'border-emerald-500 text-emerald-600 text-base'
                            : 'border-transparent text-gray-500 text-sm',
                          'border-b-2 hover:border-gray-300 focus:outline-none',
                        )
                      }
                    >
                      <Link
                        activeClass="bg-white text-[#047857] rounded-t-lg xl:rounded-lg !font-bold"
                        spy={true}
                        smooth={true}
                        duration={250}
                        to={String(tab.name)}
                        offset={offset}
                        className=" hover:text-gray-700 whitespace-nowrap inline-block py-6  font-medium focus:outline-none"
                      >
                        {tab.name}
                      </Link>
                    </Tab>
                  ))}
                </Tab.List>
              </div>
            </div>
          </Tab.Group>
        )}

        {tabs.map((tab) => (
          <Element name={String(tab.name)} key={tab.name}>
            <div className="pt-16">
              <div className="max-w-3xl">
                <h2
                  id="features-heading"
                  className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl"
                >
                  {tab.heading}
                </h2>
                {tab.description && (
                  <p className="mt-4 text-gray-500">{tab.description}</p>
                )}
              </div>

              <dl className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:max-w-none lg:grid-cols-3 lg:gap-x-8">
                {tab.features.map((feature) => (
                  <div
                    key={feature.name}
                    className="border-t border-gray-200 pt-4"
                  >
                    <dt className="font-medium text-gray-900">
                      {feature.name}
                    </dt>
                    <dd className="mt-2 text-sm text-gray-500">
                      {feature.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Element>
        ))}
      </section>
    </div>
  )
}
