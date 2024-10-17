import { IInlinePlayerType } from 'ui'
import ManualSeoPageContent from '../components/ManualSeoPageContent'

const propsIt: IInlinePlayerType = {
  title: 'Manuale GEME - Precauzioni',
  description:
    "Utilizzo del compostatore GEME con cautela, basta prestare un po' di attenzione.",
  type: 'youtube',
  videoPosterUrl: '/assets/images/manual/video-cover-cautions.png',
  videoSrcUrlOrVideoId: 'f09NNpAnyTQ',
  mixpanelFrom: 'Manual SEO Page - Cautions',
}

export function CautionsPageIt() {
  return <ManualSeoPageContent {...propsIt} />
}
