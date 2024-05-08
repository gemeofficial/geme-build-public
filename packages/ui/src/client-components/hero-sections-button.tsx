'use client'

import { ILinkComponent } from '../../../../apps/gemebuild/src/contexts/link-context'
import { IconCycleArrow } from '../icons'

interface IHeroSectionsButtonProps {
  linkText?: string
  linkUrl?: string
  linkClickedTrack?: () => void
  LinkComponent?: ILinkComponent
}

export default function HeroSectionsButton({
  LinkComponent,
  linkClickedTrack,
  linkText,
  linkUrl,
}: IHeroSectionsButtonProps) {
  return (
    <>
      {linkText && linkUrl && LinkComponent == null && (
        <a
          className=" v2311-font-h3 font-bold text-white xl:w-auto flex items-center justify-center mt-[80px] md:mt-[160px] xl:mt-16 border-solid border-2 border-white rounded-xl py-1 md:py-2 px-16 md:px-32 xl:px-8"
          href={linkUrl}
          // fix Error: Event handlers cannot be passed to Client Component props. 
          // 为了解决这个问题 只能将这部分按钮抽离为client组件
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
            href={linkUrl}
          >
            {linkText}
            <IconCycleArrow className="inline-block ml-4 md:ml-8 xl:ml-4 w-5 md:w-10 xl:w-12 h-5 md:h-10 xl:h-12" />
          </LinkComponent>
        </span>
      )}
    </>
  )
}
