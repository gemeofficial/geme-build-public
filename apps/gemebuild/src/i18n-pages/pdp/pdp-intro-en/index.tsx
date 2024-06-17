import Intro from './Intro'
import Spec from './Spec'
import Warranty from './Warranty'
import UserStory from './UserStory'
import { ScrollablePdpTabsWithAnchorOffset } from '../../../components/scrollable-pdp-tabs-with-anchor-offset'

import { FC, useMemo } from 'react'
import { ILinkComponent } from '../../../contexts/link-context'
import {
  IInlinePalyer,
  InlinePlayer,
  IReviewsSectionConfig,
  ReviewsSection,
} from 'ui'

interface IPdpIntroProps {
  ReviewsComponent: FC<{}>
  PrefetchLink?: ILinkComponent
  reviewsSectionConfig: IReviewsSectionConfig
}

const inlinePlayerProps: IInlinePalyer = {
  title: 'User evaluatio',
  description: 'Watch our video to learn more',
  type: 'youtube',
  videoPosterUrl: '/assets/images/home-v2311/cover-v3.jpg',
  videoSrcUrl: 'https://www.youtube.com/embed/nlsTg4l_3zE?si=EHWjPO41orbC75sk',
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
              <div className="bg-white py-10">
                <div className="text-center lg:mt-10">
                  <h2 className="v2311-font-h1 text-v2311-primary text-center ">
                    What Real Users Say
                  </h2>
                  <p className="v2311-font-body text-gray-600 text-center mt-4">
                    Ditch the fake smiles and scripted lines of paid
                    influencers. Instead, listen to real people share their
                    honest thoughts and frustrations. Get the unfiltered truth,
                    both the good and the bad.
                  </p>
                </div>
                <ReviewsSection
                  locale="en"
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

export default PdpIntroEn
