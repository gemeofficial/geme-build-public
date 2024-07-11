import Intro from './Intro'
import Spec from './Spec'
import Warranty from './Warranty'
import UserStory from './UserStory'
import { ScrollablePdpTabsWithAnchorOffset } from '../../../components/scrollable-pdp-tabs-with-anchor-offset'

import { FC, useMemo } from 'react'
import { ILinkComponent } from '../../../contexts/link-context'
import {
  IInlinePalyerType,
  InlinePlayer,
  IReviewsSectionConfig,
  ReviewsScoreHeader,
} from 'ui'
import { ReviewsSectionModule } from '../../../components/reviews-section-module'
import Compare from './Compare'

interface IPdpIntroProps {
  ReviewsComponent: FC<{}>
  PrefetchLink?: ILinkComponent
  reviewsSectionConfig: IReviewsSectionConfig
}

function PdpIntroEn({
  ReviewsComponent,
  PrefetchLink,
  reviewsSectionConfig,
}: IPdpIntroProps) {
  const props = useMemo(
    () => ({
      tabs: [
        {
          id: 1,
          tabLabel: 'Introduction',
          tabPanel: <Intro />,
        },
        {
          id: 2,
          tabLabel: 'Compare',
          tabPanel: <Compare />,
        },
        {
          id: 3,
          tabLabel: 'Spec',
          tabPanel: (
            <div id="pdp-spec-section" className="h-0 overflow-hidden">
              <Spec />
            </div>
          ),
        },
        {
          id: 4,
          tabLabel: 'Warranty',
          tabPanel: (
            <div id="pdp-warranty-section" className="h-0 overflow-hidden">
              <Warranty Link={PrefetchLink} />
            </div>
          ),
        },
        {
          id: 5,
          tabLabel: (
            <>
              <span className="hidden lg:inline">User </span>Stories
            </>
          ),
          tabPanel: (
            <>
              <UserStory />
            </>
          ),
        },
        {
          id: 6,
          tabLabel: 'Reviews',
          tabPanel: (
            <>
              <ReviewsSectionModule
                reviewsSectionConfig={reviewsSectionConfig}
                locale="en"
              />
              <div className="my-4">
                <ReviewsScoreHeader locale="en" />
              </div>
              <ReviewsComponent />
            </>
          ),
        },
      ],
    }),
    [ReviewsComponent, PrefetchLink, reviewsSectionConfig],
  )

  return <ScrollablePdpTabsWithAnchorOffset {...props} />
}

export default PdpIntroEn
