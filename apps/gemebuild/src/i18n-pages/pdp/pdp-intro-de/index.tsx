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
  ReviewsScoreHeader
} from 'ui'
import { ReviewsSectionModule } from '../../../components/reviews-section-module'

interface IPdpIntroProps {
  ReviewsComponent: FC<{}>
  PrefetchLink?: ILinkComponent
  reviewsSectionConfig: IReviewsSectionConfig
}

const inlinePlayerProps: IInlinePalyerType = {
  title: 'Sehen heißt',
  description:
    'Überzeugen Sie sich selbst von der unglaublichen Geschwindigkeit! Dieses unbearbeitete 7-Stunden-Video zeigt, wie schnell unsere Maschine arbeitet. Seien Sie Zeuge des Abbaus von fast 2 kg Lebensmittelverschwendung – eine Leistung, die sich keiner unserer Wettbewerber öffentlich zu zeigen traut. Wir glauben, dass Kunden Transparenz verdienen, auch wenn es nicht schön anzusehen und langweilig ist.',
  type: 'youtube',
  videoSrcUrlOrVidioId: 'asNRoqkC_BA',
  mixpanelFrom: 'Product page inline player',
}

function PdpIntroDe({
  ReviewsComponent,
  PrefetchLink,
  reviewsSectionConfig,
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
          tabLabel: 'Spec',
          tabPanel: <Spec />,
        },
        {
          id: 3,
          tabLabel: 'Garantie',
          tabPanel: <Warranty Link={PrefetchLink} />,
        },
        {
          id: 4,
          tabLabel: (
            <>
              <span className="hidden lg:inline">Benutzer </span>Geschichten
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
          tabLabel: 'Bewertungen',
          tabPanel: (
            <>
              <ReviewsSectionModule
                locale="de"
                reviewsSectionConfig={reviewsSectionConfig}
              />
              <div className="my-4"><ReviewsScoreHeader locale='de'/></div>
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

export default PdpIntroDe
