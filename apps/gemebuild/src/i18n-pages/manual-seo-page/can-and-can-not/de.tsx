import { IInlinePlayerType } from 'ui'
import ManualSeoPageContent from '../components/ManualSeoPageContent'

const propsDe: IInlinePlayerType = {
  title: 'GEME Handbuch - Was man darf und was nicht',
  description:
    'Bis zu 90% der Bioabfälle können in den GEME gegeben werden. Es gibt jedoch einige Abfälle, die der GEME nicht gut verarbeiten kann.',
  type: 'youtube',
  videoPosterUrl: '/assets/images/manual/video-cover-can-and-can-not.png',
  videoSrcUrlOrVideoId: '2DSFcxFRSos',
  mixpanelFrom: 'Manual SEO Page - Can & Can Not',
}

export function CanAndCanNotPageDe() {
  return <ManualSeoPageContent {...propsDe} />
}
