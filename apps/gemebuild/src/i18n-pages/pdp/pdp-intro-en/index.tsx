import Intro from './Intro'
import Spec from './Spec'
import Warranty from './Warranty'
import UserStory from './UserStory'
import { ScrollablePdpTabsWithAnchorOffset } from '../../../components/scrollable-pdp-tabs-with-anchor-offset'

import { FC, useMemo } from 'react'
import { ILinkComponent } from '../../../contexts/link-context'
import { IReviewsItem, ReviewsSection } from 'ui'

interface IPdpIntroProps {
  ReviewsComponent: FC<{}>
  PrefetchLink?: ILinkComponent
  reviewsListConfig: IReviewsItem[]
}

function PdpIntroEn({
  ReviewsComponent,
  PrefetchLink,
  reviewsListConfig,
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
          tabLabel: 'Spec',
          tabPanel: <Spec />,
        },
        {
          id: 3,
          tabLabel: 'Warranty',
          tabPanel: <Warranty Link={PrefetchLink} />,
        },
        {
          id: 4,
          tabLabel: (
            <>
              <span className="hidden lg:inline">User </span>Stories
            </>
          ),
          tabPanel: <UserStory />,
        },
        {
          id: 5,
          tabLabel: 'Good Reviews',
          tabPanel: (
            <div className="bg-gray-100/80">
              <ReviewsSection reviewsListConfig={reviewsListConfig} />
            </div>
          ),
        },
        {
          id: 6,
          tabLabel: 'Reviews',
          tabPanel: <ReviewsComponent />,
        },
      ],
    }),
    [ReviewsComponent, PrefetchLink,reviewsListConfig],
  )

  return <ScrollablePdpTabsWithAnchorOffset {...props} />
}

export default PdpIntroEn
