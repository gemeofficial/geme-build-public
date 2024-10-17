import { IInlinePlayerType } from 'ui'
import ManualSeoPageContent from '../components/ManualSeoPageContent'

const propsDe: IInlinePlayerType = {
  title: 'GEME Handbuch - Verwendung von Nebenprodukten (Kompost)',
  description:
    'Nehmen Sie das Nebenprodukt heraus und mischen Sie es mit Erde, dann können Sie Ihre Pflanzen damit nähren',
  type: 'youtube',
  videoPosterUrl: '/assets/images/manual/video-cover-by-product-usage.png',
  videoSrcUrlOrVideoId: 'qHo9WgCKUsw',
  mixpanelFrom: 'Manual SEO Page - By-Product(Compost) Usage',
}

export function CompostUsagePageDe() {
  return <ManualSeoPageContent {...propsDe} />
}
