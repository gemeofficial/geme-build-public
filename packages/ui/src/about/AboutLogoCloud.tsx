import { AboutMTitle, AboutTitle } from '../ui-components'
import { LogoCloudComponent } from '../logo-cloud'

export interface IAboutLogoCloudProps {
  mTitle: string
  title: string
}
export function AboutLogoCloud({ mTitle, title }: IAboutLogoCloudProps) {
  return (
    <div className="mt-20 md:mt-28 3xl:mt-40 mx-auto max-w-xl lg:max-w-7xl px-8 lg:px-12 2xl:px-0 text-base text-v2311-text-gary">
      <AboutMTitle>{mTitle}</AboutMTitle>
      <AboutTitle>{title}</AboutTitle>

      <LogoCloudComponent className='!mt-6 md:!mt-10 lg:!mt-12' canRedirect />
    </div>
  )
}
