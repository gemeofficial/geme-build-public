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
  ReviewsSection,
} from 'ui'

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
  videoPosterUrl: '/assets/images/home-v2311/cover-v3.jpg',
  videoSrcUrlOrVidioId: 'asNRoqkC_BA',
  videoIsAutoPlay: true,
  mixpanelFrom: 'Product page inline player',
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
              <InlinePlayer {...inlinePlayerProps} />
            </>
          ),
        },
        {
          id: 5,
          tabLabel: 'Bewertungen',
          tabPanel: (
            <>
              <div className="bg-white py-10">
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
                <ReviewsSection
                  locale="fr"
                  reviewsSectionConfig={reviewsSectionConfig}
                />
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
