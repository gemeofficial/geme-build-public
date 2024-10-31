'use client'

import { Tab } from '@headlessui/react'
import classNames from '../lib/classNames'
import type { ReactNode } from 'react'

interface IPdpTabsProps {
  tabs: {
    id: number
    tabLabel: ReactNode
    tabPanel: JSX.Element
    tabOriginName?: string
  }[]
}

const pdpTabsProps: IPdpTabsProps = {
  tabs: [
    {
      id: 1,
      tabLabel: 'Overview',
      tabPanel: (
        <div className="p-6">
          <p>Overview content</p>
        </div>
      ),
    },
    {
      id: 2,
      tabLabel: 'Features',
      tabPanel: (
        <div className="p-6">
          <p>Features content</p>
        </div>
      ),
    },
    {
      id: 3,
      tabLabel: 'Tech Specs',
      tabPanel: (
        <div className="p-6">
          <p>Tech Specs content</p>
        </div>
      ),
    },
  ],
}

function PdpTabs({ tabs }: IPdpTabsProps) {
  return (
    <Tab.Group>
      <div className="bg-[#047857]">
        <Tab.List className=" v2311-title-h5 md:v2311-button-large-selected xl:v2311-body-large text-white py-2 px-1 md:py-6 md:px-8 flex flex-row space-x-4 md:space-x-6 xl:space-x-12 xl:max-w-7xl xl:mx-auto">
          {tabs.map((tab) => (
            <Tab key={tab.id}>
              {({ selected }) => (
                <span
                  className={classNames(
                    ' inline-block px-1 pt-0.5 pb-px md:px-4 xl:px-6 xl:py-2',
                    selected
                      ? ' bg-white text-[#047857] rounded-t-lg xl:rounded-lg'
                      : 'font-normal ',
                  )}
                >
                  {tab.tabLabel}
                </span>
              )}
            </Tab>
          ))}
        </Tab.List>
      </div>
      <Tab.Panels>
        {tabs.map((tab) => (
          <Tab.Panel key={tab.id}>{tab.tabPanel}</Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  )
}

export { PdpTabs, pdpTabsProps }
export type { IPdpTabsProps }
