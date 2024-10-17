import { IInlinePlayerType } from 'ui'
import ManualSeoPageContent from '../components/ManualSeoPageContent'

const propsDe: IInlinePlayerType = {
  title: 'GEME Handbuch - Täglicher Gebrauch',
  description:
    'Die tägliche Nutzung von GEME ist so einfach wie bei normalen Mülleimern, nichts zu erklären.',
  type: 'youtube',
  videoPosterUrl: '/assets/images/manual/video-cover-daily-usage.png',
  videoSrcUrlOrVideoId: 'mi8fwlJdt68',
  mixpanelFrom: 'Manual SEO Page - Daily Usage',
}

export function DailyUsagePageDe() {
  return <ManualSeoPageContent {...propsDe} />
}
