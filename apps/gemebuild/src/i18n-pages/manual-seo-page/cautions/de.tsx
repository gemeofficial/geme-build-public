import { IInlinePlayerType } from 'ui'
import ManualSeoPageContent from '../components/ManualSeoPageContent'

const propsDe: IInlinePlayerType = {
  title: 'GEME Handbuch - Vorsichtsmaßnahmen',
  description:
    'GEME Komposter Vorsichtsmaßnahmen, es muss nur ein wenig Aufmerksamkeit geschenkt werden.',
  type: 'youtube',
  videoPosterUrl: '/assets/images/manual/video-cover-cautions.png',
  videoSrcUrlOrVideoId: 'f09NNpAnyTQ',
  mixpanelFrom: 'Manual SEO Page - Cautions',
}

export function CautionsPageDe() {
  return <ManualSeoPageContent {...propsDe} />
}
