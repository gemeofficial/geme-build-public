import { IInlinePlayerType } from 'ui'
import ManualSeoPageContent from '../components/ManualSeoPageContent'

const propsEn: IInlinePlayerType = {
  title: 'GEME Manual - Activate Microbiota',
  description:
    '1. Put GEME-kobold in the container; 2. Pour 800ml water; 3. Wait 6+ hours',
  type: 'youtube',
  videoPosterUrl: '/assets/images/manual/video-cover-activate-microbiota.png',
  videoSrcUrlOrVideoId: 'hSpq48ymKrA',
  mixpanelFrom: 'Manual SEO Page - Activate Microbiota',
}

export function ActivateMicrobiotaPageEn() {
  return <ManualSeoPageContent {...propsEn} />
}
