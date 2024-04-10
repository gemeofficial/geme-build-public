import Intro from './Intro'
import Spec from './Spec'
import Warranty from './Warranty'
import UserStory from './UserStory'
import { ScrollablePdpTabsWithAnchorOffset } from '../../../components/scrollable-pdp-tabs-with-anchor-offset'

import { FC, useMemo } from 'react'

interface IPdpIntroProps {
  ReviewsComponent: FC<{}>
}

function PdpIntroDe({ ReviewsComponent }: IPdpIntroProps) {
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
          tabLabel: 'Spez',
          tabPanel: <Spec />,
        },
        {
          id: 3,
          tabLabel: 'Garantie',
          tabPanel: <Warranty />,
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
          tabLabel: 'Rezensionen',
          tabPanel: <ReviewsComponent />,
        },
      ],
    }),
    [ReviewsComponent],
  )

  return <ScrollablePdpTabsWithAnchorOffset {...props} />
}

export default PdpIntroDe
