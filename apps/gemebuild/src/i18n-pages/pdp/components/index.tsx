import Intro, { IPdpIntroProps } from './Intro'
import Spec, { IPdpSpecProps } from './Spec'
import Warranty, { IPdpWarrantyProps } from './Warranty'
import UserStory from './UserStory'
import { ScrollablePdpTabsWithAnchorOffset } from '../../../components/scrollable-pdp-tabs-with-anchor-offset'

import { ReactNode, useMemo } from 'react'

import {
  IPdpTabsProps,
  IPdpUserStoryTeamSectionsProps,
  LocaleType,
  ReviewsScoreHeader,
} from 'ui'
import { ReviewsSectionModule } from '../../../components/reviews-section-module'
import Compare, { IPdpCompareProps } from './Compare'
import { IProductProps } from '../en'

export interface IPdpTabsText {
  intro: ReactNode
  compare: ReactNode
  spec: ReactNode
  warranty: ReactNode
  userStories: ReactNode
  reviews: ReactNode
}

export interface IPdpContentProps extends IProductProps {
  tabs: IPdpTabsText
  introProps: IPdpIntroProps
  compareProps: IPdpCompareProps
  specProps: IPdpSpecProps
  warrantyProps: IPdpWarrantyProps
  userStoryProps: IPdpUserStoryTeamSectionsProps
  locale: LocaleType
}

function PdpContent(props: IPdpContentProps) {
  const {
    ReviewsComponent,
    PrefetchLink,
    reviewsSectionConfig,
    tabs,
    introProps,
    compareProps,
    specProps,
    GemeModelViewer,
    warrantyProps,
    userStoryProps,
    locale,
  } = props

  const datas = useMemo(
    (): IPdpTabsProps => ({
      tabs: [
        {
          id: 1,
          tabLabel: tabs.intro,
          tabPanel: <Intro {...introProps} />,
        },
        {
          id: 2,
          tabLabel: tabs.compare,
          tabPanel: <Compare {...compareProps} />,
        },
        {
          id: 3,
          tabLabel: tabs.spec,
          tabPanel: (
            <div id="pdp-spec-section" className="h-0 overflow-hidden">
              <Spec {...specProps} GemeModelViewer={GemeModelViewer} />
            </div>
          ),
          tabOriginName: 'Spec',
        },
        {
          id: 4,
          tabLabel: tabs.warranty,
          tabPanel: (
            <div id="pdp-warranty-section" className="h-0 overflow-hidden">
              <Warranty {...warrantyProps} Link={PrefetchLink} />
            </div>
          ),
          tabOriginName: 'Warranty',
        },
        {
          id: 5,
          tabLabel: tabs.userStories,
          tabPanel: (
            <UserStory pdpUserStoryTeamSectionsProps={userStoryProps} />
          ),
        },
        {
          id: 6,
          tabLabel: tabs.reviews,
          tabPanel: (
            <>
              <ReviewsSectionModule
                reviewsSectionConfig={reviewsSectionConfig}
                locale={locale}
              />
              <div className="my-4">
                <ReviewsScoreHeader locale={locale} />
              </div>
              <ReviewsComponent />
            </>
          ),
        },
      ],
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  )

  return <ScrollablePdpTabsWithAnchorOffset {...datas} />
}

export default PdpContent
