import { IInlinePlayerType, SectionContainer, SectionDescription } from 'ui'
import PlayerComponent from 'ui/src/inline-player/PlayerComponent'

export default function ManualSeoPageContent({
  title,
  description,
  type,
  videoPosterUrl,
  videoSrcUrlOrVideoId,
  mixpanelFrom,
  videoIsAutoPlay,
}: IInlinePlayerType) {
  const playerComponentProps = {
    type,
    videoPosterUrl,
    videoSrcUrlOrVideoId,
    mixpanelFrom,
    videoIsAutoPlay: videoIsAutoPlay || true,
  }
  return (
    <SectionContainer>
      <h1 className="v2311-font-h1 text-v2311-primary text-left xl:text-center">
        {title}
      </h1>
      <SectionDescription className="mt-4 md:mt-8">
        {description}
      </SectionDescription>

      <div className="mt-4 w-full md:mt-8 xl:mt-12 xl:flex-1">
        <div className="relative w-full aspect-w-16 aspect-h-9 overflow-hidden rounded-lg bg-white">
          <PlayerComponent {...playerComponentProps} />
        </div>
      </div>
    </SectionContainer>
  )
}
