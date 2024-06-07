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
          tabLabel: 'Reviews',
          tabPanel: (
            <>
              <div className="bg-gray-100/80 py-10">
                <div className="text-center lg:mt-10">
                  <h2 className="v2311-font-h1 text-v2311-primary text-center ">
                    What Real Users Say
                  </h2>
                  <p className="v2311-font-body text-gray-600 text-center mt-4">
                    Ditch the fake smiles and scripted lines of paid
                    influencers. Instead, listen to real people share their
                    honest thoughts and frustrations. Get the unfiltered truth,
                    both the good and the bad.
                  </p>
                </div>
                <ReviewsSection reviewsListConfig={reviewsListConfig} />
              </div>
              <ReviewsComponent />
            </>
          ),
        },
      ],
    }),
    [ReviewsComponent, PrefetchLink, reviewsListConfig],
  )

  return <ScrollablePdpTabsWithAnchorOffset {...props} />
}

export default PdpIntroEn
