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

function PdpIntroDe({
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
          tabLabel: 'Einführung',
          tabPanel: <Intro />,
        },
        {
          id: 2,
          tabLabel: 'Vergleichen',
          tabPanel: <Compare />,
        },
        {
          id: 3,
          tabLabel: 'Spec',
          tabPanel: <Spec GemeModelViewer={GemeModelViewer} />,
        },
        {
          id: 4,
          tabLabel: 'Garantie',
          tabPanel: <Warranty Link={PrefetchLink} />,
        },
        {
          id: 5,
          tabLabel: (
            <>
              <span className="hidden lg:inline">Benutzer </span>Geschichten
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
          tabLabel: 'Bewertungen',
          tabPanel: (
            <>
              <ReviewsSectionModule
                locale="de"
                reviewsSectionConfig={reviewsSectionConfig}
              />
              <div className="my-4">
                <ReviewsScoreHeader locale="de" />
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

export default PdpIntroDe
