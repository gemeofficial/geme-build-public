import { IInlinePlayerType } from 'ui'
import ManualSeoPageContent from '../components/ManualSeoPageContent'

const propsIt: IInlinePlayerType = {
  title: 'Manuale GEME - Come cambiare la lampada UV',
  description:
    'GEME utilizza una lampada UV per sanificare, può funzionare per oltre 15.000 ore. Tuttavia, puoi cambiarla se è rotta.',
  type: 'youtube',
  videoPosterUrl: '/assets/images/manual/video-cover-change-uv-lamp.png',
  videoSrcUrlOrVideoId: 'VdAtQfpSQ_E',
  mixpanelFrom: 'Manual SEO Page - How to Change UV Lamp',
}

export function HowToChangeUvLampPageIt() {
  return <ManualSeoPageContent {...propsIt} />
}
