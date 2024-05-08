'use client'

import { ILinkComponent } from '../../../../apps/gemebuild/src/contexts/link-context'
import { IconCycleArrow } from '../icons'
import mixpanel from 'mixpanel-browser'

interface IHeroSection1Props {
  linkText?: string
  linkUrl?: string
  LinkComponent?: ILinkComponent
}

export default function HeroSectionsButton({
  LinkComponent,
  linkText,
  linkUrl,
}: IHeroSection1Props) {
  const linkClickedTrack = () => {
    mixpanel.track('Go Product Page', {
      From: 'Hero Primary Button',
    })
  }

  // 修复在bio中传入自定义的Prefetch Link 时多语言路径不正确问题
  let newLinkUrl = ''
  if (LinkComponent) {
    newLinkUrl = linkUrl?.replace('/de','').replace('/fr','') as string
  }

  return (
    <>
      {linkText && linkUrl && LinkComponent == null && (
        <a
          className=" v2311-font-h3 font-bold text-white xl:w-auto flex items-center justify-center mt-[80px] md:mt-[160px] xl:mt-16 border-solid border-2 border-white rounded-xl py-1 md:py-2 px-16 md:px-32 xl:px-8"
          href={linkUrl}
          onClick={linkClickedTrack}
        >
          {linkText}
          <IconCycleArrow className="inline-block ml-4 md:ml-8 xl:ml-4 w-5 md:w-10 xl:w-12 h-5 md:h-10 xl:h-12" />
        </a>
      )}
      {linkText && linkUrl && LinkComponent && (
        <span onClick={linkClickedTrack}>
          <LinkComponent
            className=" v2311-font-h3 font-bold text-white xl:w-auto flex items-center justify-center mt-[80px] md:mt-[160px] xl:mt-16 border-solid border-2 border-white rounded-xl py-1 md:py-2 px-16 md:px-32 xl:px-8"
            href={newLinkUrl}
          >
            {linkText}
            <IconCycleArrow className="inline-block ml-4 md:ml-8 xl:ml-4 w-5 md:w-10 xl:w-12 h-5 md:h-10 xl:h-12" />
          </LinkComponent>
        </span>
      )}
    </>
  )
}
