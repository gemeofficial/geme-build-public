import { IInlinePlayerType } from 'ui'
import ManualSeoPageContent from '../components/ManualSeoPageContent'

const propsDe: IInlinePlayerType = {
  title: 'GEME Handbuch - Bedienfeldnutzung & Fehlerbehebung',
  description:
    'Normalerweise müssen Sie sich nicht um die Anzeigen und Tasten kümmern, aber für den Fall, dass etwas passiert, kann dieses Video helfen',
  type: 'youtube',
  videoPosterUrl: '/assets/images/manual/video-cover-control-panel-usage.png',
  videoSrcUrlOrVideoId: 'jc5_ferVOa8',
  mixpanelFrom: 'Manual SEO Page - Control Panel Usage',
}

export function ControlPanelUsagePageDe() {
  return <ManualSeoPageContent {...propsDe} />
}
