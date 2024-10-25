'use client'

import { useCallback, useState } from 'react'
import Image from 'next/image'
import { PlayIcon } from '../video-inline-player'
import mixpanel from 'mixpanel-browser'
import YouTubePlayer from '../client-components/YouTubePlayer'
import { hasMixpanel } from '../lib/has-mixpanel'
import { VideoLoading } from '../loading-components'

// TODO：如何获取VideoId？
// 去youtube视频页面点击分享 youtu.be/${VideoId}?xxxxxxx
// eg: https://youtu.be/asNRoqkC_BA?si=iBuiXO5vEINUt5tB  >>  VideoId: asNRoqkC_BA

export interface IPlayerComponentType {
  type: 'mp4' | 'youtube'
  videoSrcUrlOrVideoId: string
  videoPosterUrl?: string
  mixpanelFrom?: string
  videoIsAutoPlay?: boolean
}

export default function PlayerComponent({
  videoPosterUrl,
  type,
  videoSrcUrlOrVideoId,
  mixpanelFrom,
  videoIsAutoPlay,
}: IPlayerComponentType) {
  // 如果videoPosterUrl封面图没有传入，则直接展示YouTube播放器
  const [isPlay, setIsPlay] = useState(!videoPosterUrl)
  const [isLoading, setIsLoading] = useState(true)

  // 向后台发送统计信息
  const mixpanelTrackHandle = useCallback(() => {
    // 添加判断条件 解决在gemebuild中点击时mixpanel没有初始化的问题
    if (hasMixpanel() && videoPosterUrl) {
      mixpanel.track('Watch video', {
        From: mixpanelFrom || 'Inline player video',
      })
    }
  }, [videoPosterUrl, mixpanelFrom])

  function PlayClickHandler() {
    mixpanelTrackHandle()
    setIsPlay(true)
  }

  const onYoutubePlayerReady = useCallback(() => {
    setIsLoading(false)
  }, [])

  return (
    <div className="group">
      <span className="sr-only">Watch our video to learn more</span>
      {!isPlay && videoPosterUrl && (
        <div
          className=" w-full h-full  flex justify-center items-center hover:cursor-pointer"
          onClick={() => PlayClickHandler()}
        >
          <Image
            src={videoPosterUrl}
            alt=""
            width={1200}
            height={680}
            className="absolute inset-0 h-full w-full object-cover"
            quality={60}
            sizes="(max-width: 1280px) 80vw, (min-width: 1281px) 1000px, 1vw"
          />
          <PlayIcon
            size="small"
            className="md:hidden relative z-[2] group-hover:scale-110 group-hover:cursor-pointer transition-all duration-300"
          />
          <PlayIcon className="hidden md:block relative z-[2] group-hover:scale-110 group-hover:cursor-pointer transition-all duration-300" />
        </div>
      )}

      {isPlay && (
        <>
          {type === 'mp4' && (
            <video
              controls
              autoPlay={videoIsAutoPlay}
              muted={videoIsAutoPlay}
              loop={videoIsAutoPlay}
              className="max-w-full w-full rounded-2xl overflow-hidden object-cover"
              poster={videoPosterUrl}
            >
              <source src={videoSrcUrlOrVideoId} type="video/mp4" />
              Your browser does not support HTML5 video.
            </video>
          )}

          {type === 'youtube' && (
            <div className="relative w-full h-full">
              <YouTubePlayer
                videoIsAutoPlay={videoIsAutoPlay}
                readyCallback={onYoutubePlayerReady}
                playCallback={mixpanelTrackHandle}
                videoId={videoSrcUrlOrVideoId}
              />
              {isLoading && <VideoLoading className="absolute inset-0" />}
            </div>
          )}
        </>
      )}
    </div>
  )
}
