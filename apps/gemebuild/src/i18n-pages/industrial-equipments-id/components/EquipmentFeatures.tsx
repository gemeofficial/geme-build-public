import { ReactNode } from 'react'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import type { TEquipment } from '../../../helpers/industrial-equipments/data/data-en'
import {
  equipmentToFeaturesProps,
  IProductFeaturesTabProps,
} from '../../../helpers/industrial-equipments/tool'

export type TTab = keyof Pick<
  TEquipment,
  'baiscParams' | 'EquipmentPower' | 'power' | 'MaterialOfMain'
>

const TABS: TTab[] = [
  'baiscParams',
  'power',
  'EquipmentPower',
  'MaterialOfMain',
]

export interface IEquipmentToFeaturesPropsFnPayload
  extends IEquipmentFeaturesProps {
  tabs: TTab[]
}

export interface IEquipmentFeaturesProps {
  equipment: TEquipment
  tabNames: Record<TTab, string>
  tabHeadingAndDescription: Record<
    TTab,
    { heading: string; description?: ReactNode }
  >
}

function EquipmentFeatures(props: IEquipmentFeaturesProps) {
  const payload: IEquipmentToFeaturesPropsFnPayload = {
    ...props,
    tabs: TABS,
  }

  const data: IProductFeaturesTabProps[] =
    equipmentToFeaturesProps(payload) || []

  return (
    <div className="bg-white">
      <section
        aria-labelledby="features-heading"
        className="mx-auto max-w-7xl py-16 sm:py-24 sm:px-2 lg:px-8"
      >
        {data.length > 0 && (
          <Tab.Group as="div">
            <div className="-mx-4 flex overflow-x-auto sm:mx-0">
              <div className="flex-auto border-b border-gray-200 px-4 sm:px-0">
                <Tab.List className="-mb-px flex space-x-10">
                  {data.map((tab) => (
                    <Tab
                      key={tab.name}
                      className={({ selected }) =>
                        clsx(
                          selected
                            ? 'border-emerald-500 text-emerald-600 text-base'
                            : 'border-transparent text-gray-500 text-sm',
                          'border-b-2 hover:border-gray-300 focus:outline-none',
                        )
                      }
                    >
                      <a
                        href={`#${tab.name}`}
                        className=" hover:text-gray-700 whitespace-nowrap inline-block py-6  font-medium focus:outline-none"
                      >
                        {tab.name}
                      </a>
                    </Tab>
                  ))}
                </Tab.List>
              </div>
            </div>
          </Tab.Group>
        )}

        {data.map((tab) => (
          <div key={tab.name} className="pt-16" id={tab.name}>
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
                  <dt className="font-medium text-gray-900">{feature.name}</dt>
                  <dd className="mt-2 text-sm text-gray-500">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </section>
    </div>
  )
}

export default EquipmentFeatures
