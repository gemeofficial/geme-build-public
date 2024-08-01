import { ComponentType, ComponentPropsWithRef } from 'react'

export enum ETabsId {
  TermsAndConditions = 'terms-and-conditions',
  Warranty = 'warranty',
  WarrantyExtend = 'warranty-extend',
  ReturnPolicy = 'return-policy',
  PrivacyPolicy = 'privacy-policy',
  GemeDotsLoyaltyProgram = 'geme-dots-loyalty-program',
}

export interface ITab {
  id: string
  title: string
  href: string
  icon: ComponentType<ComponentPropsWithRef<'svg'>>
  current: boolean
}

export interface ITabsProps {
  tabs: ITab[]
}

export interface ISiteHelpTabsProps {
  tabs: {
    id: string // unique id
    title: string // title of the tab
  }[]
  currentTabId: string // id of the current tab
}