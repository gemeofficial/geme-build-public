import { IInlinePlayerType } from 'ui'
import ManualSeoPageContent from '../components/ManualSeoPageContent'

const propsIt: IInlinePlayerType = {
  title: 'Disimballaggio',
  description:
    'Questo video ti guida su come disimballare il pacchetto GEME e la configurazione di base',
  type: 'youtube',
  videoPosterUrl: '/assets/images/manual/video-cover-unboxing.png',
  videoSrcUrlOrVideoId: 'izYVDd6KwO8',
  mixpanelFrom: 'Manual SEO Page - Unboxing',
}

export function UnboxingPageIt() {
  return <ManualSeoPageContent {...propsIt} />
}
