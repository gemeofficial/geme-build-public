import { IInlinePlayerType } from 'ui'
import ManualSeoPageContent from '../components/ManualSeoPageContent'

const propsEn: IInlinePlayerType = {
  title: 'GEME Manual - Unboxing',
  description:
    'This video guides you how to unbox GEME package and basic setup',
  type: 'youtube',
  videoPosterUrl: '/assets/images/manual/video-cover-unboxing.png',
  videoSrcUrlOrVideoId: 'izYVDd6KwO8',
  mixpanelFrom: 'Manual SEO Page - Unboxing',
}

export function UnboxingPageEn() {
  return <ManualSeoPageContent {...propsEn} />
}
