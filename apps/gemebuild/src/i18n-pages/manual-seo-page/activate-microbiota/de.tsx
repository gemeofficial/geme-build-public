import { IInlinePlayerType } from 'ui'
import ManualSeoPageContent from '../components/ManualSeoPageContent'

const propsDe: IInlinePlayerType = {
  title: 'GEME Handbuch - Mikrobiota aktivieren',
  description:
    '1. GEME-Kobold in den Behälter legen; 2. 800ml Wasser einfüllen; 3. Mindestens 6 Stunden warten',
  type: 'youtube',
  videoPosterUrl: '/assets/images/manual/video-cover-activate-microbiota.png',
  videoSrcUrlOrVideoId: 'hSpq48ymKrA',
  mixpanelFrom: 'Manual SEO Page - Activate Microbiota',
}

export function ActivateMicrobiotaPageDe() {
  return <ManualSeoPageContent {...propsDe} />
}
