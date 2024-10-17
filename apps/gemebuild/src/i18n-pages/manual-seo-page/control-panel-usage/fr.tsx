import { IInlinePlayerType } from 'ui'
import ManualSeoPageContent from '../components/ManualSeoPageContent'

const propsFr: IInlinePlayerType = {
  title: 'Manuel GEME - Utilisation et Dépannage du Panneau de Contrôle',
  description: `Il n'est généralement pas nécessaire de se soucier des indicateurs et des boutons, mais au cas où quelque chose se produirait, cette vidéo peut aider`,
  type: 'youtube',
  videoPosterUrl: '/assets/images/manual/video-cover-control-panel-usage.png',
  videoSrcUrlOrVideoId: 'jc5_ferVOa8',
  mixpanelFrom: 'Manual SEO Page - Control Panel Usage',
}

export function ControlPanelUsagePageFr() {
  return <ManualSeoPageContent {...propsFr} />
}
