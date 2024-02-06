'use client'

import MuxPlayer from '@mux/mux-player-react'
import { FC, useState, useEffect, VideoHTMLAttributes } from 'react'

interface IMuxVideoSource {
  minWidth: number // 屏幕最小宽度
  src: string // 视频源的URL
  playbackId: string // 视频源的Mux ID
  posterUrl?: string // 视频源封面
}

interface IMuxVideoPlayerProps extends VideoHTMLAttributes<HTMLVideoElement> {
  sources?: IMuxVideoSource[] // 接受一组视频源
}

const MuxVideoPlayer: FC<IMuxVideoPlayerProps> = ({
  sources = [],
  ...props
}) => {
  const [currentPlaybackId, setCurrentPlaybackId] = useState<string>('')
  const [currentPosterUrl, setCurrentPosterUrl] = useState<string>('')

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
        setCurrentPlaybackId(suitableSource.playbackId)
        if (suitableSource.posterUrl) {
          setCurrentPosterUrl(suitableSource.posterUrl)
        }
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
    <MuxPlayer
      streamType="on-demand"
      playbackId={currentPlaybackId}
      poster={currentPosterUrl}
      // metadataVideoTitle="Placeholder (optional)"
      // metadataViewerUserId="Placeholder (optional)"
      // primaryColor="#FFFFFF"
      // secondaryColor="#000000"
      autoPlay="muted"
      className="relative w-full h-full overflow-hidden object-cover"
      style={{
        // @ts-ignore
        '--controls': 'none', // 隐藏控件
        '--media-object-fit': 'cover',
      }}
      nohotkeys={true}
      loop={true}
      {...props}
    />
  )
}

export { MuxVideoPlayer }
export type { IMuxVideoPlayerProps }
