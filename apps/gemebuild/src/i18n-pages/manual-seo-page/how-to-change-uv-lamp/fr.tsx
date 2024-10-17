import { IInlinePlayerType } from 'ui'
import ManualSeoPageContent from '../components/ManualSeoPageContent'

const propsFr: IInlinePlayerType = {
  title: 'Manuel GEME - Comment changer la lampe UV',
  description:
    'GEME utilise une lampe UV pour désinfecter, elle peut fonctionner pendant plus de 15 000 heures. Cependant, vous pouvez la changer si elle est cassée.',
  type: 'youtube',
  videoPosterUrl: '/assets/images/manual/video-cover-change-uv-lamp.png',
  videoSrcUrlOrVideoId: 'VdAtQfpSQ_E',
  mixpanelFrom: 'Manual SEO Page - How to Change UV Lamp',
}

export function HowToChangeUvLampPageFr() {
  return <ManualSeoPageContent {...propsFr} />
}
