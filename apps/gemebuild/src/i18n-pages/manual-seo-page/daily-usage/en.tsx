import { IInlinePlayerType } from 'ui'
import ManualSeoPageContent from '../components/ManualSeoPageContent'

const propsEn: IInlinePlayerType = {
  title: 'GEME Manual - Daily Usage',
  description:
    'Using GEME daily is as simple as regular trash bins, nothing to explain.',
  type: 'youtube',
  videoPosterUrl: '/assets/images/manual/video-cover-daily-usage.png',
  videoSrcUrlOrVideoId: 'mi8fwlJdt68',
  mixpanelFrom: 'Manual SEO Page - Daily Usage',
}

export function DailyUsagePageEn() {
  return <ManualSeoPageContent {...propsEn} />
}
