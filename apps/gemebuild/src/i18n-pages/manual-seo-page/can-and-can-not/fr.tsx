import { IInlinePlayerType } from 'ui'
import ManualSeoPageContent from '../components/ManualSeoPageContent'

const propsFr: IInlinePlayerType = {
  title: "Manuel GEME - Ce qu'on peut et ne peut pas",
  description:
    "Jusqu'à 90% des déchets organiques peuvent être mis dans le GEME. Cependant, il y a certains déchets que le GEME ne peut pas bien traiter.",
  type: 'youtube',
  videoPosterUrl: '/assets/images/manual/video-cover-can-and-can-not.png',
  videoSrcUrlOrVideoId: '2DSFcxFRSos',
  mixpanelFrom: 'Manual SEO Page - Can & Can Not',
}

export function CanAndCanNotPageFr() {
  return <ManualSeoPageContent {...propsFr} />
}
