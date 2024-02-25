'use client'

import { FC, useState, useEffect, VideoHTMLAttributes } from 'react'

interface IVideoSource {
  minWidth: number // 屏幕最小宽度
  src: string // 视频源的URL
}

interface IVideoPlayerProps extends VideoHTMLAttributes<HTMLVideoElement> {
  videoPosterUrl?: string // 视频封面
  sources?: IVideoSource[] // 接受一组视频源
}

const VideoPlayer: FC<IVideoPlayerProps> = ({
  videoPosterUrl,
  sources = [],
  ...props
}) => {
  const [currentSource, setCurrentSource] = useState<string>('')

  useEffect(() => {
    const updateSource = () => {
      // 根据屏幕宽度找到合适的视频源
      const suitableSource = sources
        .slice()
        .sort((a, b) => {
          if (a.minWidth < b.minWidth) {
            return -1
          }
          if (a.minWidth > b.minWidth) {
            return 1
          }
          return 0
        })
        .reverse() // 从最大宽度开始检查
        .find((source) => window.innerWidth >= source.minWidth)

      if (suitableSource) {
        setCurrentSource(suitableSource.src)
      }
    }

    updateSource()
    window.addEventListener('resize', updateSource)

    // 清理函数
    return () => {
      window.removeEventListener('resize', updateSource)
    }
  }, [sources]) // 依赖项为sources数组

  return (
    <video
      autoPlay
      playsInline
      muted
      loop
      {...props}
      poster={videoPosterUrl}
      src={currentSource}
    >
      Your browser does not support HTML5 video.
    </video>
  )
}

export { VideoPlayer }
export type { IVideoPlayerProps }
