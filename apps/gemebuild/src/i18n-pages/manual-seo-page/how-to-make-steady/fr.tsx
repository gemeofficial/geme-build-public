import { IInlinePlayerType } from 'ui'
import ManualSeoPageContent from '../components/ManualSeoPageContent'

const propsFr: IInlinePlayerType = {
  title: 'Manuel GEME - Comment le rendre stable',
  description:
    'Soulevez légèrement GEME et vissez un des pieds pour le rendre stable',
  type: 'youtube',
  videoPosterUrl: '/assets/images/manual/video-cover-make-steady.png',
  videoSrcUrlOrVideoId: 'rthDSasoOrY',
  mixpanelFrom: 'Manual SEO Page - How to Make Steady',
}

export function HowToMakeSteadyPageFr() {
  return <ManualSeoPageContent {...propsFr} />
}
