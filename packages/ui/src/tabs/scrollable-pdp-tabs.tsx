'use client'

import classNames from '../lib/classNames'
import { useEffect, useState, type ReactNode } from 'react'
import { Link, Element } from 'react-scroll'
import { getDomInfo, useGetRootHeaderInfo } from '../index'
import Headroom from 'react-headroom'

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
  // ----------------------- 下滑隐藏tabs 上拉显示tabs start --------------------------
  /**
   * 逻辑说明：由于product page有HeroSectionV2组件存在，该tab不是一开始就悬浮在页面中的。而是需要滚动到介绍模块 才开始进行吸顶
   * 所以这里需要额外补充一段逻辑：
   * 1. 分别获取Headerd、HeroSectionV2、ProductTabs的组件高度，从而获得ProductTabs组件距离页面顶部的距离
   * 2. 监听滚动，保存当前滚动位置
   * 3. 判断条件：
   *      1. 当未滚动到ProductTabs时(scrollY < productTabsWrapperOffsetTop)，关闭Header吸顶，top=0
   *      2. 当滚动滚动到ProductTabs时(scrollY > productTabsWrapperOffsetTop)，开启Header吸顶，top=rootHeaderHeight
   */
  const { rootHeaderHeight } = useGetRootHeaderInfo()
  const { elHeight: heroSectionHeight } = getDomInfo('#product-hero-section-v2')
  const { elHeight: productTabsHeight } = getDomInfo('#product-tabs-wrapper')

  const productTabsWrapperOffsetTop =
    heroSectionHeight + productTabsHeight + rootHeaderHeight

  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrollY(() => currentScrollY)
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // ----------------------- 下滑隐藏tabs 上拉显示tabs end --------------------------

  return (
    <>
      <div id="product-tabs-wrapper">
        <Headroom
          disable={scrollY < productTabsWrapperOffsetTop}
          pinStart={rootHeaderHeight}
          style={{
            top: `${
              scrollY > productTabsWrapperOffsetTop ? rootHeaderHeight : 0
            }px`,
            zIndex: 20,
          }}
        >
          <div id="product-tabs-container" className="bg-[#047857]">
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
        </Headroom>
      </div>

      <>
        {tabs.map((tab) => (
          <Element name={String(tab.id)} key={tab.id}>
            {tab.tabPanel}
          </Element>
        ))}
      </>
    </>
  )
}

export { ScrollablePdpTabs, scrollablePdpTabsProps }
export type { IScrollablePdpTabsProps }
