'use client'

import classNames from '../lib/classNames'
import { type ReactNode } from 'react'
import { Link, Element } from 'react-scroll'

interface IScrollablePdpTabsProps {
  anchorOffset?: number
  tabs: {
    id: number
    tabLabel: ReactNode
    tabPanel: JSX.Element
  }[]
}

const scrollablePdpTabsProps: IScrollablePdpTabsProps = {
  anchorOffset: -50,
  tabs: [
    {
      id: 1,
      tabLabel: 'Overview',
      tabPanel: (
        <Element name="1-overview">
          <div className="p-2 h-96 bg-orange-300">
            <p>Overview content</p>
          </div>
        </Element>
      ),
    },
    {
      id: 2,
      tabLabel: 'Features',
      tabPanel: (
        <div className="p-2 h-96 bg-amber-300">
          <p>Features content</p>
        </div>
      ),
    },
    {
      id: 3,
      tabLabel: 'Tech Specs',
      tabPanel: (
        <div className="p-2 h-96 bg-emerald-300">
          <p>Tech Specs content</p>
        </div>
      ),
    },
    {
      id: 4,
      tabLabel: 'Overview 4',
      tabPanel: (
        <div className="p-2 h-96 bg-orange-300">
          <p>Overview 4 content</p>
        </div>
      ),
    },
  ],
}

function ScrollablePdpTabs({ tabs, anchorOffset }: IScrollablePdpTabsProps) {
  return (
    <>
      <div
        id="product-tabs-container"
        className="sticky top-0 bg-[#047857] z-[49] transition-all duration-300"
      >
        <ul className="overflow-auto v2311-font-h3 md:v2311-font-link-selected xl:v2311-font-body text-white py-2 px-1 md:py-6 md:px-8 flex flex-row space-x-4 md:space-x-6 xl:space-x-12 xl:max-w-7xl xl:mx-auto">
          {tabs.map((tab) => (
            <li key={tab.id}>
              <Link
                activeClass="bg-white text-[#047857] rounded-lg !font-bold"
                spy={true}
                smooth={true}
                duration={500}
                to={String(tab.id)}
                offset={anchorOffset}
                className={classNames(
                  'inline-block px-1 pt-0.5 pb-px md:px-4 xl:px-6 xl:py-2 font-normal cursor-pointer',
                  'hover:bg-white hover:text-[#047857] hover:rounded-t-lg hover:xl:rounded-lg',
                )}
              >
                {tab.tabLabel}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {tabs.map((tab) => (
        <Element name={String(tab.id)} key={tab.id}>
          {tab.tabPanel}
        </Element>
      ))}
    </>
  )
}

export { ScrollablePdpTabs, scrollablePdpTabsProps }
export type { IScrollablePdpTabsProps }
