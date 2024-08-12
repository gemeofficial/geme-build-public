import clsx from 'clsx'
import { PlayIcon } from '../video-inline-player'

export interface IVideoProps
  extends React.DetailedHTMLProps<
    React.VideoHTMLAttributes<HTMLVideoElement>,
    HTMLVideoElement
  > {
  rootClassName?: string
}

export default function Video(props?: IVideoProps) {
  const currentProps = {
    controls: false,
    autoPlay: true,
    playsInline: true,
    muted: true,
    loop: true,
    poster: '/assets/images/home-v2311/hero-blurred.webp',
    src: 'https://www-geme-bio-us.s3.us-west-1.amazonaws.com/hero-banner-window-video-19s-480p.mp4',
    ...props,
  }

  return (
    <div
      className={clsx(
        'relative rounded-lg md:rounded-xl overflow-hidden group',
        props?.rootClassName,
      )}
    >
      <div className="relative h-full w-full object-cover transform-gpu transition-transform group-hover:scale-125 duration-[0.25s] ease-[cubic-bezier(0.24, 0.8, 0.4, 1)]">
        <video
          className={clsx('w-full h-full object-cover', props?.className)}
          {...currentProps}
        >
          Your browser does not support HTML5 video.
        </video>
      </div>
      <button
        type="button"
        className="absolute inset-0 w-full opacity-80 hover:opacity-100 transition-opacity duration-200"
        title="Play fullscreen video"
      >
        <PlayIcon className="m-auto hidden md:block" size="medium" />
        <PlayIcon className="m-auto md:hidden" size="small" />
      </button>
    </div>
  )
}
