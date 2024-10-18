import { IInlinePlayerType } from 'ui'
import ManualSeoPageContent from '../components/ManualSeoPageContent'

const propsIt: IInlinePlayerType = {
  title: 'Manuale GEME - Come renderlo stabile',
  description:
    'Sollevare leggermente GEME e avvitare uno dei piedi per renderlo stabile',
  type: 'youtube',
  videoPosterUrl: '/assets/images/manual/video-cover-make-steady.png',
  videoSrcUrlOrVideoId: 'rthDSasoOrY',
  mixpanelFrom: 'Manual SEO Page - How to Make Steady',
}

export function HowToMakeSteadyPageIt() {
  return <ManualSeoPageContent {...propsIt} />
}
