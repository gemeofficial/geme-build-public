import { SectionDescription, SectionTitle } from '../ui-components'
import PlayerComponent, { IPlayerComponentType } from './PlayerComponent'

export interface IInlinePalyerType extends IPlayerComponentType {
  title?: string
  description?: string
}

export function InlinePlayer({
  title,
  description,
  type,
  videoPosterUrl,
  videoSrcUrlOrVidioId,
  mixpanelFrom,
  videoIsAutoPlay,
}: IInlinePalyerType) {
  const playerComponentProps = {
    type,
    videoPosterUrl,
    videoSrcUrlOrVidioId,
    mixpanelFrom,
    videoIsAutoPlay,
  }

  return (
    <section className="px-4 py-8 mx-auto md:px-8 md:py-16 xl:py-[80px] xl:max-w-7xl flex flex-col items-center xl:gap-16 ">
      <div className="xl:flex-1">
        {title && <SectionTitle>{title}</SectionTitle>}
        {description && (
          <SectionDescription className="mt-4 md:mt-8">
            {description}
          </SectionDescription>
        )}
      </div>
      <div className="mt-4 w-full md:mt-8 xl:mt-0 xl:flex-1">
        <div className="relative w-full aspect-w-16 aspect-h-9 overflow-hidden rounded-lg bg-white">
          <PlayerComponent {...playerComponentProps} />
        </div>
      </div>
    </section>
  )
}
