import { IInlinePlayerType } from 'ui'
import ManualSeoPageContent from '../components/ManualSeoPageContent'

const propsIt: IInlinePlayerType = {
  title: 'Manuale GEME - Uso del sottoprodotto (Compost)',
  description:
    'Togli il sottoprodotto e mescolalo con il terreno, poi vai avanti e nutri le tue piante',
  type: 'youtube',
  videoPosterUrl: '/assets/images/manual/video-cover-by-product-usage.png',
  videoSrcUrlOrVideoId: 'qHo9WgCKUsw',
  mixpanelFrom: 'Manual SEO Page - By-Product(Compost) Usage',
}

export function CompostUsagePageIt() {
  return <ManualSeoPageContent {...propsIt} />
}
