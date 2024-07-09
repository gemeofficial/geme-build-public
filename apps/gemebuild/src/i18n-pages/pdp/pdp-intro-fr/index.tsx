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

interface IPdpIntroProps {
  ReviewsComponent: FC<{}>
  PrefetchLink?: ILinkComponent
  reviewsSectionConfig: IReviewsSectionConfig
}

function PdpIntroFr({
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
          tabLabel: 'Spécification',
          tabPanel: <Spec />,
        },
        {
          id: 3,
          tabLabel: 'garantie',
          tabPanel: <Warranty Link={PrefetchLink} />,
        },
        {
          id: 4,
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
          id: 5,
          tabLabel: 'Bewertungen',
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
    [ReviewsComponent, PrefetchLink, reviewsSectionConfig],
  )

  return <ScrollablePdpTabsWithAnchorOffset {...props} />
}

export default PdpIntroFr
