import { IInlinePlayerType } from 'ui'
import ManualSeoPageContent from '../components/ManualSeoPageContent'

const propsEn: IInlinePlayerType = {
  title: 'GEME Manual - How to Change UV Lamp',
  description:
    'GEME uses a UV lamp to sanitize, it can work for 15,000+ hours. However, you can change it if it is broken.',
  type: 'youtube',
  videoPosterUrl: '/assets/images/manual/video-cover-change-uv-lamp.png',
  videoSrcUrlOrVideoId: 'VdAtQfpSQ_E',
  mixpanelFrom: 'Manual SEO Page - How to Change UV Lamp',
}

export function HowToChangeUvLampPageEn() {
  return <ManualSeoPageContent {...propsEn} />
}
