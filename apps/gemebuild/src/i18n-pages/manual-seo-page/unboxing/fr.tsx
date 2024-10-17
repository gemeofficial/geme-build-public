import { IInlinePlayerType } from 'ui'
import ManualSeoPageContent from '../components/ManualSeoPageContent'

const propsFr: IInlinePlayerType = {
  title: 'Déballage et installation',
  description:
    'Cette vidéo vous guide étape par étape pour déballer et configurer votre bac à compost GEME, prêt à décomposer vos déchets organiques en 6 à 8 heures et à produire du compost mûr en 45 jours.',
  type: 'youtube',
  videoPosterUrl: '/assets/images/manual/video-cover-unboxing.png',
  videoSrcUrlOrVideoId: 'izYVDd6KwO8',
  mixpanelFrom: 'Manual SEO Page - Unboxing',
}

export function UnboxingPageFr() {
  return <ManualSeoPageContent {...propsFr} />
}
