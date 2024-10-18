import { IInlinePlayerType } from 'ui'
import ManualSeoPageContent from '../components/ManualSeoPageContent'

const propsFr: IInlinePlayerType = {
  title: 'Manuel GEME - Utilisation des sous-produits (Compost)',
  description:
    'Sortez le sous-produit et mélangez-le avec de la terre, puis allez-y et nourrissez vos plantes',
  type: 'youtube',
  videoPosterUrl: '/assets/images/manual/video-cover-by-product-usage.png',
  videoSrcUrlOrVideoId: 'qHo9WgCKUsw',
  mixpanelFrom: 'Manual SEO Page - By-Product(Compost) Usage',
}

export function CompostUsagePageFr() {
  return <ManualSeoPageContent {...propsFr} />
}
