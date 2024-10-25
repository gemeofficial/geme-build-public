import { IInlinePlayerType } from 'ui'
import ManualSeoPageContent from '../components/ManualSeoPageContent'

const propsIt: IInlinePlayerType = {
  title: 'Manuale GEME - Attivare il Microbiota',
  description:
    '1. Metti il GEME-kobold nel contenitore; 2. Versa 800ml di acqua; 3. Aspetta più di 6 ore',
  type: 'youtube',
  videoPosterUrl: '/assets/images/manual/video-cover-activate-microbiota.png',
  videoSrcUrlOrVideoId: 'hSpq48ymKrA',
  mixpanelFrom: 'Manual SEO Page - Activate Microbiota',
}

export function ActivateMicrobiotaPageIt() {
  return <ManualSeoPageContent {...propsIt} />
}
