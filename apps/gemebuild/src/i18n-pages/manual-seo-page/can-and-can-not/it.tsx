import { IInlinePlayerType } from 'ui'
import ManualSeoPageContent from '../components/ManualSeoPageContent'

const propsIt: IInlinePlayerType = {
  title: 'Manuale GEME - Cosa si può e cosa non si può',
  description:
    'Fino al 90% dei rifiuti organici possono essere messi nel GEME. Tuttavia, ci sono alcuni rifiuti che il GEME non è in grado di gestire bene.',
  type: 'youtube',
  videoPosterUrl: '/assets/images/manual/video-cover-can-and-can-not.png',
  videoSrcUrlOrVideoId: '2DSFcxFRSos',
  mixpanelFrom: 'Manual SEO Page - Can & Can Not',
}

export function CanAndCanNotPageIt() {
  return <ManualSeoPageContent {...propsIt} />
}
