'use client'

import { ILinkComponent } from '../../../../apps/gemebuild/src/contexts/link-context'
import { IconCycleArrow } from '../icons'
import mixpanel from 'mixpanel-browser'
import { hasMixpanel } from '../lib'
import { WhiteButton } from '../ui-components'

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

  return (
    <WhiteButton
      href={linkUrl}
      onClick={linkClickedTrack}
      PrefetchLink={LinkComponent}
      className="mt-[80px] md:mt-[160px] xl:mt-16 !px-16 md:!px-32 xl:!px-8"
    >
      {linkText}
      {/* <MyIconCycleArrow /> */}
    </WhiteButton>
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
