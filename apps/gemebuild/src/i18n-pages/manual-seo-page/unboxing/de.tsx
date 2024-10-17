import { IInlinePlayerType } from 'ui'
import ManualSeoPageContent from '../components/ManualSeoPageContent'

const propsEn: IInlinePlayerType = {
  title: 'Auspacken',
  description:
    'Dieses Video zeigt Ihnen, wie Sie das GEME-Paket auspacken und grundlegende Einstellungen vornehmen',
  type: 'youtube',
  videoPosterUrl: '/assets/images/manual/video-cover-unboxing.png',
  videoSrcUrlOrVideoId: 'izYVDd6KwO8',
  mixpanelFrom: 'Manual SEO Page - Unboxing',
}

export function UnboxingPageDe() {
  return <ManualSeoPageContent {...propsEn} />
}
