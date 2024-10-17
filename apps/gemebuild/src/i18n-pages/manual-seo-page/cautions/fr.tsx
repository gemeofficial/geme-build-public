import { IInlinePlayerType } from 'ui'
import ManualSeoPageContent from '../components/ManualSeoPageContent'

const propsFr: IInlinePlayerType = {
  title: 'Manuel GEME - Précautions',
  description:
    'Utilisation du composteur GEME avec précaution, il suffit de faire un peu attention.',
  type: 'youtube',
  videoPosterUrl: '/assets/images/manual/video-cover-cautions.png',
  videoSrcUrlOrVideoId: 'f09NNpAnyTQ',
  mixpanelFrom: 'Manual SEO Page - Cautions',
}

export function CautionsPageFr() {
  return <ManualSeoPageContent {...propsFr} />
}
