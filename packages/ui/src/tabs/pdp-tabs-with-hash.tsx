import classNames from '../lib/classNames'
import type { ReactNode } from 'react'

interface IPdpTabsWithHashProps {
  tabs: {
    id: number
    tabLabel: ReactNode
    tabPanel: JSX.Element
  }[]
}

const pdpTabsWithHashProps: IPdpTabsWithHashProps = {
  tabs: [
    {
      id: 1,
      tabLabel: <a href="#overview">Overview</a>,
      tabPanel: (
        <div className="p-2 h-[1200px] bg-orange-300">
          <h2 id="overview">Overview</h2>
          <p>Overview content</p>
        </div>
      ),
    },
    {
      id: 2,
      tabLabel: <a href="#feature">Features</a>,
      tabPanel: (
        <div className="p-2 h-[1200px] bg-amber-300">
          <h2 id="feature">Features</h2>
          <p>Features content</p>
        </div>
      ),
    },
    {
      id: 3,
      tabLabel: <a href="#tech-spec">Tech Specs</a>,
      tabPanel: (
        <div className="p-2 h-[1200px] bg-emerald-300">
          <h2 id="tech-spec">Tech Spec</h2>
          <p>Tech Specs content</p>
        </div>
      ),
    },
  ],
}

function PdpTabsWithHash({ tabs }: IPdpTabsWithHashProps) {
  return (
    <>
      <div className="bg-[#047857]">
        <ul className=" v2311-font-h3 md:v2311-font-link-selected xl:v2311-font-body text-white py-2 px-1 md:py-6 md:px-8 flex flex-row space-x-4 md:space-x-6 xl:space-x-12 xl:max-w-7xl xl:mx-auto">
          {tabs.map((tab) => (
            <li key={tab.id}>
              {/* {({ selected }) => ( */}
              <span
                className={classNames(
                  ' inline-block px-1 pt-0.5 pb-px md:px-4 xl:px-6 xl:py-2',
                  // selected
                  //   ? ' bg-white text-[#047857] rounded-t-lg xl:rounded-lg'
                  //   : 'font-normal ',
                )}
              >
                {tab.tabLabel}
              </span>
              {/* )} */}
            </li>
          ))}
        </ul>
      </div>
      <>
        {tabs.map((tab) => (
          <div key={tab.id}>{tab.tabPanel}</div>
        ))}
      </>
    </>
  )
}

export { PdpTabsWithHash, pdpTabsWithHashProps }
export type { IPdpTabsWithHashProps }
