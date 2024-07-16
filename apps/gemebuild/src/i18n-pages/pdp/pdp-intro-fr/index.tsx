import Intro from './Intro'
import Spec from './Spec'
import Warranty from './Warranty'
import UserStory from './UserStory'
import { ScrollablePdpTabsWithAnchorOffset } from '../../../components/scrollable-pdp-tabs-with-anchor-offset'

import { useMemo } from 'react'
import { ReviewsScoreHeader } from 'ui'
import { ReviewsSectionModule } from '../../../components/reviews-section-module'
import Compare from './Compare'
import { IPdpIntroProps } from '../pdp-intro-en'

function PdpIntroFr({
  ReviewsComponent,
  PrefetchLink,
  reviewsSectionConfig,
  GemeModelViewer,
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
          tabLabel: 'Comparer',
          tabPanel: <Compare />,
        },
        {
          id: 3,
          tabLabel: 'Spécification',
          tabPanel: <Spec GemeModelViewer={GemeModelViewer} />,
        },
        {
          id: 4,
          tabLabel: 'garantie',
          tabPanel: <Warranty Link={PrefetchLink} />,
        },
        {
          id: 5,
          tabLabel: (
            <>
              <span className="hidden lg:inline">Utilisateur </span>Histoires
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
          tabLabel: 'Avis',
          tabPanel: (
            <>
              <ReviewsSectionModule
                locale="fr"
                reviewsSectionConfig={reviewsSectionConfig}
              />
              <div className="my-4">
                <ReviewsScoreHeader locale="fr" />
              </div>
              <ReviewsComponent />
            </>
          ),
        },
      ],
    }),
    [ReviewsComponent, PrefetchLink, reviewsSectionConfig, GemeModelViewer],
  )

  return <ScrollablePdpTabsWithAnchorOffset {...props} />
}

export default PdpIntroFr
