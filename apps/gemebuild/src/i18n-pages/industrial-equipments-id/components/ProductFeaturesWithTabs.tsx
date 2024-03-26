// cfs:
// - layout: https://tailwindui.com/components/ecommerce/components/product-features#component-1c59e9598a7ee96a39f2a1c1e6b270a7
// - tabs content: https://tailwindui.com/components/ecommerce/components/product-features#component-06554e4a18bf74da3a4d350601b3865d

'use client'
import { Fragment, ReactNode } from 'react'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

function ProductFeaturesWithTabs({ tabs }: IProductFeaturesWithTabsProps) {
  return (
    <div className="bg-white">
      <section
        aria-labelledby="features-heading"
        className="mx-auto max-w-7xl py-16 sm:py-24 sm:px-2 lg:px-8"
      >
        <div className="mx-auto max-w-2xl px-4 lg:max-w-none lg:px-0">
          {tabs != null && tabs.length > 0 && (
            <Tab.Group as="div">
              <div className="-mx-4 flex overflow-x-auto sm:mx-0">
                <div className="flex-auto border-b border-gray-200 px-4 sm:px-0">
                  <Tab.List className="-mb-px flex space-x-10">
                    {tabs.map((tab) => (
                      <Tab
                        key={tab.name}
                        className={({ selected }) =>
                          clsx(
                            selected
                              ? 'border-emerald-500 text-emerald-600'
                              : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                            'whitespace-nowrap border-b-2 py-6 text-sm font-medium',
                            'focus:outline-none',
                          )
                        }
                      >
                        {tab.name}
                      </Tab>
                    ))}
                  </Tab.List>
                </div>
              </div>

              <Tab.Panels as={Fragment}>
                {tabs.map((tab) => (
                  <Tab.Panel
                    key={tab.name}
                    className="space-y-16 pt-10 lg:pt-16"
                  >
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

                    <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:max-w-none lg:grid-cols-3 lg:gap-x-8">
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
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </Tab.Group>
          )}
        </div>
      </section>
    </div>
  )
}

export interface IProductFeaturesWithTabsProps {
  tabs?: {
    name: string
    heading: string
    description?: ReactNode
    features: {
      name: string
      description: string
    }[]
  }[]
}

export default ProductFeaturesWithTabs
