import { IInlinePlayerType } from 'ui'
import ManualSeoPageContent from '../components/ManualSeoPageContent'

const propsEn: IInlinePlayerType = {
  title: 'GEME Manual - Control Panel Usage & Troubleshooting',
  description:
    'Usually no need to care about the indicator and buttons, just in case something happen, this video can help',
  type: 'youtube',
  videoPosterUrl: '/assets/images/manual/video-cover-control-panel-usage.png',
  videoSrcUrlOrVideoId: 'jc5_ferVOa8',
  mixpanelFrom: 'Manual SEO Page - Control Panel Usage',
}

export function ControlPanelUsagePageEn() {
  return <ManualSeoPageContent {...propsEn} />
}
