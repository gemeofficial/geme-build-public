import { IInlinePlayerType } from 'ui'
import ManualSeoPageContent from '../components/ManualSeoPageContent'

const propsEn: IInlinePlayerType = {
  title: 'GEME Manual - How to Make Steady',
  description:
    'Lift GEME a little bit and screw one of the feet to make it steady',
  type: 'youtube',
  videoPosterUrl: '/assets/images/manual/video-cover-make-steady.png',
  videoSrcUrlOrVideoId: 'rthDSasoOrY',
  mixpanelFrom: 'Manual SEO Page - How to Make Steady',
}

export function HowToMakeSteadyPageEn() {
  return <ManualSeoPageContent {...propsEn} />
}
