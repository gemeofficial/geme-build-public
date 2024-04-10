import Intro from './Intro'
import Spec from './Spec'
import Warranty from './Warranty'
import UserStory from './UserStory'
import { ScrollablePdpTabsWithAnchorOffset } from '../../../components/scrollable-pdp-tabs-with-anchor-offset'

import { FC, useMemo } from 'react'

interface IPdpIntroProps {
  ReviewsComponent: FC<{}>
}

function PdpIntroFr({ ReviewsComponent }: IPdpIntroProps) {
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
          tabPanel: <Warranty />,
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
          tabLabel: 'Commentaires',
          tabPanel: <ReviewsComponent />,
        },
      ],
    }),
    [ReviewsComponent],
  )

  return <ScrollablePdpTabsWithAnchorOffset {...props} />
}

export default PdpIntroFr
