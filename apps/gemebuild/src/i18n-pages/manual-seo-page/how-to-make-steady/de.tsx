import { IInlinePlayerType } from 'ui'
import ManualSeoPageContent from '../components/ManualSeoPageContent'

const propsDe: IInlinePlayerType = {
  title: 'GEME Handbuch - Wie man es stabil macht',
  description:
    'Heben Sie GEME ein wenig an und schrauben Sie einen der Füße fest, um es stabil zu machen',
  type: 'youtube',
  videoPosterUrl: '/assets/images/manual/video-cover-make-steady.png',
  videoSrcUrlOrVideoId: 'rthDSasoOrY',
  mixpanelFrom: 'Manual SEO Page - How to Make Steady',
}

export function HowToMakeSteadyPageDe() {
  return <ManualSeoPageContent {...propsDe} />
}
