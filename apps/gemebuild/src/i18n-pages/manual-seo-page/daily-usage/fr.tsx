import { IInlinePlayerType } from 'ui'
import ManualSeoPageContent from '../components/ManualSeoPageContent'

const propsFr: IInlinePlayerType = {
  title: 'Manuel GEME - Utilisation quotidienne',
  description:
    'Utiliser GEME quotidiennement est aussi simple que des poubelles ordinaires, rien à expliquer.',
  type: 'youtube',
  videoPosterUrl: '/assets/images/manual/video-cover-daily-usage.png',
  videoSrcUrlOrVideoId: 'mi8fwlJdt68',
  mixpanelFrom: 'Manual SEO Page - Daily Usage',
}

export function DailyUsagePageFr() {
  return <ManualSeoPageContent {...propsFr} />
}
