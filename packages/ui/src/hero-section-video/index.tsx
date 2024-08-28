import clsx from 'clsx'
import { PlayIcon, VideoInlinePlayer } from '../video-inline-player'

export interface IHeroSectionVideo {
  fullScreenVideoUrl: string
  videoProps: {
    src: string
    posterUrl: string
  }
  mixpanelStatPayload?: {
    title: string
    payload?: { [key: string]: any }
  }
  className?: string
}

export default function HeroSectionVideo({
  fullScreenVideoUrl,
  videoProps,
  mixpanelStatPayload,
  className,
}: IHeroSectionVideo) {
  return (
    <VideoInlinePlayer
      videoUrl={fullScreenVideoUrl}
      hiddenPlayIcon={true}
      mixpanelStatPayload={mixpanelStatPayload}
    >
      <div
        className={clsx(
          'portrait:w-48 portrait:h-28 portrait:lg:w-72 portrait:lg:h-44 absolute right-[18px] bottom-[18px] z-40',
          className,
        )}
      >
        {/* 右下角视频小窗 */}
        <div className="relative h-full landscape:w-[180px] landscape:h-[111px] landscape:lg:w-[270px] landscape:lg:h-[152px]  landscape:2xl:w-[400px] landscape:2xl:h-[230px] rounded-xl landscape:rounded-xl overflow-hidden group">
          <div className="relative h-full w-full object-cover transform-gpu transition-transform group-hover:scale-125 duration-[0.25s] ease-[cubic-bezier(0.24, 0.8, 0.4, 1)]">
            <video
              className="w-full h-full object-cover"
              controls={false}
              autoPlay
              playsInline
              muted
              loop
              poster={videoProps.posterUrl}
              src={videoProps.src}
            >
              Your browser does not support HTML5 video.
            </video>
          </div>

          <button
            type="button"
            className="absolute inset-0 w-full opacity-80 hover:opacity-100 transition-opacity duration-200"
            title="Play fullscreen video"
          >
            {/* 大屏显示大按钮 */}
            <PlayIcon className="m-auto hidden lg:block" size="medium" />

            {/* 1024以下显示小按钮 */}
            <PlayIcon className="m-auto lg:hidden" size="small" />
          </button>
        </div>
      </div>
    </VideoInlinePlayer>
  )
}
