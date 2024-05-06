import Intro from './Intro'
import Spec from './Spec'
import Warranty from './Warranty'
import UserStory from './UserStory'
import { ScrollablePdpTabsWithAnchorOffset } from '../../../components/scrollable-pdp-tabs-with-anchor-offset'

import { FC, useMemo } from 'react'
import { ILinkComponent } from '../../../contexts/link-context'

interface IPdpIntroProps {
  ReviewsComponent: FC<{}>
  PrefetchLink?: ILinkComponent
}

function PdpIntroEn({ ReviewsComponent, PrefetchLink }: IPdpIntroProps) {
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
          tabPanel: <Spec />,
        },
        {
          id: 3,
          tabLabel: 'Warranty',
          tabPanel: <Warranty Link={PrefetchLink} />,
        },
        {
          id: 4,
          tabLabel: (
            <>
              <span className="hidden lg:inline">User </span>Stories
            </>
          ),
          tabPanel: <UserStory />,
        },
        {
          id: 5,
          tabLabel: 'Reviews',
          tabPanel: <ReviewsComponent />,
        },
      ],
    }),
    [ReviewsComponent],
  )

  return <ScrollablePdpTabsWithAnchorOffset {...props} />
}

export default PdpIntroEn
