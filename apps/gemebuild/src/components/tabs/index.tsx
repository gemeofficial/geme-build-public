'use client'

import {
  DocumentIcon,
  UserIcon,
  CubeIcon,
  PlusCircleIcon,
  CheckCircleIcon,
  DocumentTextIcon,
} from '@heroicons/react/20/solid'
import classNames from '../../helpers/class-names'
import { ComponentType, ComponentPropsWithRef } from 'react'
import { useLink } from '../../contexts/link-context'

interface ITab {
  id: string
  title: string
  href: string
  icon: ComponentType<ComponentPropsWithRef<'svg'>>
  current: boolean
}

interface ITabsProps {
  tabs: ITab[]
}

const Tabs = ({ tabs }: ITabsProps) => {
  const Link = useLink()

  return (
    <div className="p-4 bg-gray-50">
      <nav
        className="-mb-px flex lg:space-x-10 justify-center flex-col lg:flex-row"
        aria-label="Tabs"
      >
        {tabs.map((tab) => (
          <Link
            href={tab.href}
            key={tab.id}
            className={classNames(
              tab.current
                ? 'border-emerald-500 text-emerald-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
              'group inline-flex items-center py-4 px-1 border-b-2 font-medium text-sm',
            )}
            aria-current={tab.current ? 'page' : undefined}
          >
            <tab.icon
              className={classNames(
                tab.current
                  ? 'text-emerald-500'
                  : 'text-gray-400 group-hover:text-gray-500',
                '-ml-0.5 mr-2 h-5 w-5',
              )}
              aria-hidden="true"
            />
            <span>{tab.title}</span>
          </Link>
        ))}
      </nav>
    </div>
  )
}

interface ISiteHelpTabsProps {
  tabs: {
    id: string // unique id
    title: string // title of the tab
  }[]
  currentTabId: string // id of the current tab
}

const staticTabs: Pick<ITab, 'href' | 'icon' | 'id'>[] = [
  {
    id: 'terms-and-conditions',
    href: '/terms-and-conditions',
    icon: UserIcon,
  },
  {
    id: 'warranty',
    href: '/warranty',
    icon: CheckCircleIcon,
  },
  {
    id: 'warranty-extend',
    href: '/warranty-extend',
    icon: PlusCircleIcon,
  },
  {
    id: 'return-policy',
    href: '/return-policy',
    icon: DocumentIcon,
  },
  {
    id: 'privacy-policy',
    href: '/privacy-policy',
    icon: CubeIcon,
  },
  {
    id: 'geme-dots-loyalty-program',
    href: '/geme-dots-loyalty-program',
    icon: DocumentTextIcon,
  },
]

function siteHelpTabsPropsToTabsProps({
  tabs,
  currentTabId,
}: ISiteHelpTabsProps): ITabsProps {
  return {
    tabs: staticTabs.map((tab) => ({
      ...tab,
      current: tab.id === currentTabId,
      title: tabs.find((t) => t.id === tab.id)?.title || '<no title>',
    })),
  }
}

const SiteHelpTabs = (props: ISiteHelpTabsProps) => {
  const tabsProps = siteHelpTabsPropsToTabsProps(props)
  return <Tabs {...tabsProps} />
}

export default Tabs
export { SiteHelpTabs }
export type { ISiteHelpTabsProps }
