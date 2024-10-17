import { IInlinePlayerType } from 'ui'
import ManualSeoPageContent from '../components/ManualSeoPageContent'

const propsFr: IInlinePlayerType = {
  title: 'Manuel GEME - Activer le Microbiote',
  description: `1. Mettez le GEME-kobold dans le récipient; 2. Versez 800ml d'eau; 3. Attendez plus de 6 heures`,
  type: 'youtube',
  videoPosterUrl: '/assets/images/manual/video-cover-activate-microbiota.png',
  videoSrcUrlOrVideoId: 'hSpq48ymKrA',
  mixpanelFrom: 'Manual SEO Page - Activate Microbiota',
}

export function ActivateMicrobiotaPageFr() {
  return <ManualSeoPageContent {...propsFr} />
}
