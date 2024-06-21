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
              <div className="bg-white py-10">
                <div className="text-center lg:mt-10 px-4 mx-auto md:px-8 xl:max-w-7xl">
                  <h2 className="v2311-font-h1 text-v2311-primary text-center ">
                    Was echte Nutzer sagen
                  </h2>
                  <p className="v2311-font-body text-gray-600 text-center mt-4">
                    Sie könnten sich Sorgen über die begrenzte Anzahl von
                    Bewertungen in den sozialen Medien machen. Es ist jedoch
                    wichtig zu beachten, dass ein erheblicher Teil der
                    Online-Bewertungen bezahlte Werbung ist. Die wahren
                    Verbraucher sind die stille Mehrheit. Anstatt sich nur auf
                    diese Bewertungen zu verlassen, sollten Sie den Stimmen von
                    normalen Verbrauchern wie Ihnen selbst Gehör schenken. Sie
                    sind zwar online vielleicht nicht so lautstark, aber sie
                    geben wahrscheinlich eher echte und unvoreingenommene
                    Rückmeldungen.
                  </p>
                </div>
                <ReviewsSection
                  locale="de"
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

export default PdpIntroDe
