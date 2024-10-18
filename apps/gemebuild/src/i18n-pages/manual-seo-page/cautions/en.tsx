import { IInlinePlayerType } from 'ui'
import ManualSeoPageContent from '../components/ManualSeoPageContent'

const propsEn: IInlinePlayerType = {
  title: 'GEME Manual - Cautions',
  description:
    'GEME composter using caution, just a little attention needs to be paid.',
  type: 'youtube',
  videoPosterUrl: '/assets/images/manual/video-cover-cautions.png',
  videoSrcUrlOrVideoId: 'f09NNpAnyTQ',
  mixpanelFrom: 'Manual SEO Page - Cautions',
}

export function CautionsPageEn() {
  return <ManualSeoPageContent {...propsEn} />
}
