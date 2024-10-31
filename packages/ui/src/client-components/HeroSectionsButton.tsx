'use client'

import { ILinkComponent } from '../../../../apps/gemebuild/src/contexts/link-context'
import { IconCycleArrow } from '../icons'
import mixpanel from 'mixpanel-browser'
import { hasMixpanel } from '../lib'

interface IHeroSectionsButtonProps {
  linkText?: string
  linkUrl?: string
  LinkComponent?: ILinkComponent
  mixpanelTitle?: string
  mixpanelFrom?: string
}

export default function HeroSectionsButton({
  LinkComponent,
  linkText,
  linkUrl,
  mixpanelTitle,
  mixpanelFrom,
}: IHeroSectionsButtonProps) {
  const linkClickedTrack = () => {
    if (hasMixpanel()) {
      mixpanel.track(mixpanelTitle || 'Go Product Page', {
        From: mixpanelFrom || 'Hero Primary Button',
      })
    }
  }

  // 修复在bio中传入自定义的Prefetch Link 时多语言路径不正确问题
  let newLinkUrl = ''
  if (LinkComponent) {
    newLinkUrl = linkUrl?.replace('/de', '').replace('/fr', '') as string
  }

  return (
    <>
      {linkText && linkUrl && LinkComponent == null && (
        <a
          className="v2311-button-large bg-[#fdfdfd] text-v2311-text-primary hover:text-white shadow-lg xl:w-auto flex items-center justify-center mt-[80px] md:mt-[160px] xl:mt-16 border-solid border-2 border-white rounded-lg py-1 md:py-2 px-16 md:px-32 xl:px-8 group hover:bg-white/10"
          href={linkUrl}
          onClick={linkClickedTrack}
        >
          {linkText}
          <MyIconCycleArrow />
        </a>
      )}
      {linkText && linkUrl && LinkComponent && (
        <span onClick={linkClickedTrack}>
          <LinkComponent
            className="v2311-button-large bg-[#fdfdfd] text-v2311-text-primary hover: shadow-lg xl:w-auto flex items-center justify-center mt-[80px] md:mt-[160px] xl:mt-16 border-solid border-2 border-white rounded-lg py-1 md:py-2 px-16 md:px-32 xl:px-8 group hover:bg-white/10"
            href={newLinkUrl}
          >
            {linkText}
            <MyIconCycleArrow />
          </LinkComponent>
        </span>
      )}
    </>
  )
}

function MyIconCycleArrow() {
  return (
    <IconCycleArrow
      stroke="currentColor"
      className="text-v2311-text-primary group-hover:text-white inline-block ml-4 md:ml-8 xl:ml-4 w-5 md:w-8 h-5 md:h-8 group-hover:translate-x-1.5 transition-all"
    />
  )
}
