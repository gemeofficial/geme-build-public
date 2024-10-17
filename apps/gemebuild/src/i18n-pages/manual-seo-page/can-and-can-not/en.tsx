import { IInlinePlayerType } from 'ui'
import ManualSeoPageContent from '../components/ManualSeoPageContent'

const propsEn: IInlinePlayerType = {
  title: 'GEME Manual - Can & Can Not',
  description:
    'Up to 90% bio-waste can be put into GEME. However, there are some waste GEME is not good at handling them.',
  type: 'youtube',
  videoPosterUrl: '/assets/images/manual/video-cover-can-and-can-not.png',
  videoSrcUrlOrVideoId: '2DSFcxFRSos',
  mixpanelFrom: 'Manual SEO Page - Can & Can Not',
}

export function CanAndCanNotPageEn() {
  return <ManualSeoPageContent {...propsEn} />
}
