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

function PdpIntroDe({
  ReviewsComponent,
  PrefetchLink,
  reviewsListConfig,
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
          tabPanel: <UserStory />,
        },
        {
          id: 5,
          tabLabel: 'Bewertungen',
          tabPanel: (
            <>
              <div className="bg-gray-100/80 py-10">
                <div className="text-center lg:mt-10">
                  <h2 className="v2311-font-h1 text-v2311-primary text-center ">
                    Was echte Nutzer sagen
                  </h2>
                  <p className="v2311-font-body text-gray-600 text-center mt-4">
                    Verzichten Sie auf die falschen Lächeln und einstudierten
                    Sätze bezahlter Influencer. Hören Sie stattdessen echten
                    Menschen zu, die ihre ehrlichen Gedanken und Frustrationen
                    teilen. Erhalten Sie die ungefilterte Wahrheit, sowohl das
                    Gute als auch das Schlechte.
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

export default PdpIntroDe
