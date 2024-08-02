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
import { useLink } from '../../contexts/link-context'
import { ETabsId, ISiteHelpTabsProps, ITab, ITabsProps } from './type'

const Tabs = ({ tabs }: ITabsProps) => {
  const Link = useLink()

  return (
    <div className="p-4 bg-gray-50">
      <nav
        className="-mb-px flex xl:space-x-10 justify-center flex-col xl:flex-row"
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

const staticTabs: Pick<ITab, 'href' | 'icon' | 'id'>[] = [
  {
    id: ETabsId.TermsAndConditions,
    href: '/terms-and-conditions',
    icon: UserIcon,
  },
  {
    id: ETabsId.Warranty,
    href: '/warranty',
    icon: CheckCircleIcon,
  },
  {
    id: ETabsId.WarrantyExtend,
    href: '/warranty-extend',
    icon: PlusCircleIcon,
  },
  {
    id: ETabsId.ReturnPolicy,
    href: '/return-policy',
    icon: DocumentIcon,
  },
  {
    id: ETabsId.PrivacyPolicy,
    href: '/privacy-policy',
    icon: CubeIcon,
  },
  {
    id: ETabsId.GemeDotsLoyaltyProgram,
    href: '/geme-dots-loyalty-program',
    icon: DocumentTextIcon,
  },
]

function tabsToTabsProps({
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
  const tabsProps = tabsToTabsProps(props)
  return <Tabs {...tabsProps} />
}

export default Tabs
export { SiteHelpTabs }
export type { ISiteHelpTabsProps }
