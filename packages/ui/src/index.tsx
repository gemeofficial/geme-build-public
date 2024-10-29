import '../css/ui-global.css'

export interface IMultiLanguageConfig<T> {
  en: T
  de: T
  fr: T
  it: T
}
export type LocaleType = 'en' | 'de' | 'fr' | 'it'

export { Button, type ButtonProps } from './button'
export * from './fonts'
export * from './lib'
export * from './colors'
export * from './content-sections'
export * from './compost-steps'
export * from './action-sections'
export * from './hero-sections'
export * from './pdp-intro-svgs'
export * from './tabs'
export * from './video-inline-player'
// export * from './second-life-demo' // modify by athom, it will override the second-life
export * from './second-life'
export * from './ui-compost'
export * from './product-overview'
export * from './icons'
export * from './oxygen-cycle'
export * from './hooks'
export * from './newsletter-sections'
export * from './dialogs'
export * from './about'
export * from './reviews'
export * from './inline-player'
export * from './ui-components'
export * from './product-components'
export * from './waterfall-flow'
export * from './user-stories-videos'
export * from './loading-components'
export * from './hero-section-video'
export * from './faq'
export * from './img-and-text-section'
export * from './logo-cloud'
