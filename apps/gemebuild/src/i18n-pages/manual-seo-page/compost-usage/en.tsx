import { IInlinePlayerType } from 'ui'
import ManualSeoPageContent from '../components/ManualSeoPageContent'

const propsEn: IInlinePlayerType = {
  title: 'GEME Manual - By-Product(Compost) Usage',
  description:
    'Take out the by-product and mix with soil, then go ahead and nourish your plants',
  type: 'youtube',
  videoPosterUrl: '/assets/images/manual/video-cover-by-product-usage.png',
  videoSrcUrlOrVideoId: 'qHo9WgCKUsw',
  mixpanelFrom: 'Manual SEO Page - By-Product(Compost) Usage',
}

export function CompostUsagePageEn() {
  return <ManualSeoPageContent {...propsEn} />
}
