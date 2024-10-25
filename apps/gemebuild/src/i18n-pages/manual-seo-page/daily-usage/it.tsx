import { IInlinePlayerType } from 'ui'
import ManualSeoPageContent from '../components/ManualSeoPageContent'

const propsIt: IInlinePlayerType = {
  title: 'Manuale GEME - Uso Quotidiano',
  description:
    'Usare GEME quotidianamente è semplice come usare i normali bidoni della spazzatura, niente da spiegare.',
  type: 'youtube',
  videoPosterUrl: '/assets/images/manual/video-cover-daily-usage.png',
  videoSrcUrlOrVideoId: 'mi8fwlJdt68',
  mixpanelFrom: 'Manual SEO Page - Daily Usage',
}

export function DailyUsagePageIt() {
  return <ManualSeoPageContent {...propsIt} />
}
