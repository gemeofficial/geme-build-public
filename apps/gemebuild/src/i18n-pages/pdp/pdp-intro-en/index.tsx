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

const inlinePlayerProps: IInlinePalyerType = {
  title: 'Seeing is Believing',
  description:
    "See the incredible speed for yourself! This unedited 7-hour video showcases how quickly our machine works. Witness the breakdown of nearly 2kg of food waste – a feat none of our competitors dare to demonstrate publicly. We believe customers deserve transparency, even if it's not good looking and tedious.",
  type: 'youtube',
  videoSrcUrlOrVidioId: 'asNRoqkC_BA',
  mixpanelFrom: 'Product page inline player',
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
          tabLabel: 'Spec',
          tabPanel: <div id='pdp-spec-section' className='h-0 overflow-hidden'><Spec /></div>,
        },
        {
          id: 3,
          tabLabel: 'Warranty',
          tabPanel: <div id='pdp-warranty-section' className='h-0 overflow-hidden'><Warranty Link={PrefetchLink} /></div>,
        },
        {
          id: 4,
          tabLabel: (
            <>
              <span className="hidden lg:inline">User </span>Stories
            </>
          ),
          tabPanel: (
            <>
              <UserStory />
              <InlinePlayer {...inlinePlayerProps} />
            </>
          ),
        },
        {
          id: 5,
          tabLabel: 'Reviews',
          tabPanel: (
            <>
              <ReviewsSectionModule reviewsSectionConfig={reviewsSectionConfig} locale='en'/>
              <div className="my-4"><ReviewsScoreHeader locale='en'/></div>
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
