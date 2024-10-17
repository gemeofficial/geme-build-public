import { IInlinePlayerType } from 'ui'
import ManualSeoPageContent from '../components/ManualSeoPageContent'

const propsDe: IInlinePlayerType = {
  title: 'GEME Handbuch - Wie man die UV-Lampe wechselt',
  description:
    'GEME verwendet eine UV-Lampe zur Desinfektion, die über 15.000 Stunden arbeiten kann. Sie können sie jedoch austauschen, wenn sie defekt ist.',
  type: 'youtube',
  videoPosterUrl: '/assets/images/manual/video-cover-change-uv-lamp.png',
  videoSrcUrlOrVideoId: 'VdAtQfpSQ_E',
  mixpanelFrom: 'Manual SEO Page - How to Change UV Lamp',
}

export function HowToChangeUvLampPageDe() {
  return <ManualSeoPageContent {...propsDe} />
}
