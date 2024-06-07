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

function PdpIntroFr({
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
                    Ce que disent les vrais utilisateurs
                  </h2>
                  <p className="v2311-font-body text-gray-600 text-center mt-4">
                    Oubliez les sourires faux et les discours préparés des
                    influenceurs payés. Écoutez plutôt de vraies personnes
                    partager leurs pensées et frustrations honnêtes. Obtenez la
                    vérité non filtrée, à la fois le bon et le mauvais.
                  </p>
                </div>
                <ReviewsSection locale='fr' reviewsListConfig={reviewsListConfig} />
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

export default PdpIntroFr
