import { IInlinePlayerType } from 'ui'
import ManualSeoPageContent from '../components/ManualSeoPageContent'

const propsIt: IInlinePlayerType = {
  title:
    'Manuale GEME - Uso del Pannello di Controllo e Risoluzione dei Problemi',
  description:
    'Di solito non è necessario preoccuparsi degli indicatori e dei pulsanti, ma nel caso succeda qualcosa, questo video può aiutare',
  type: 'youtube',
  videoPosterUrl: '/assets/images/manual/video-cover-control-panel-usage.png',
  videoSrcUrlOrVideoId: 'jc5_ferVOa8',
  mixpanelFrom: 'Manual SEO Page - Control Panel Usage',
}

export function ControlPanelUsagePageIt() {
  return <ManualSeoPageContent {...propsIt} />
}
