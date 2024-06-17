'use client'

import { useCallback, useState } from 'react'
import Image from 'next/image'
import { PlayIcon } from '../video-inline-player'
import mixpanel from 'mixpanel-browser'
import YouTubePlayer from '../client-components/YouTubePlayer'
import { hasMixpanel } from '../lib/has-mixpanel'
import styles from './styles.module.css'

export interface IPlayerComponentType {
  videoPosterUrl: string
  type: 'mp4' | 'youtube'
  videoSrcUrlOrVidioId: string
  mixpanelFrom?: string
  videoIsAutoPlay?: boolean
}

export default function PlayerComponent({
  videoPosterUrl,
  type,
  videoSrcUrlOrVidioId,
  mixpanelFrom,
  videoIsAutoPlay,
}: IPlayerComponentType) {
  const [isPlay, setIsPlay] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  // 向后台发送统计信息
  function PlayClickHandler() {
    // 添加判断条件 解决在gemebuild中点击时mixpanel没有初始化的问题
    if (hasMixpanel()) {
      mixpanel.track('Watch video', {
        From: mixpanelFrom || 'Inline player video',
      })
    }

    setIsPlay(true)
  }

  const onYoutubePlayerReady = useCallback(() => {
    setIsLoading(false)
  }, [])

  return (
    <div className="group">
      <span className="sr-only">Watch our video to learn more</span>
      {!isPlay && (
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
          <PlayIcon className="relative z-[2] group-hover:scale-110 group-hover:cursor-pointer transition-all duration-300" />
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
              <source src={videoSrcUrlOrVidioId} type="video/mp4" />
              Your browser does not support HTML5 video.
            </video>
          )}

          {type === 'youtube' && (
            <div className="relative w-full h-full">
              <YouTubePlayer
                videoIsAutoPlay={videoIsAutoPlay}
                readyCallback={onYoutubePlayerReady}
                videoId={videoSrcUrlOrVidioId}
              />
              {isLoading && (
                <div className="absolute inset-0 h-full w-full bg-black flex items-center justify-center">
                  <div className={styles.loader}></div>
                </div>
              )}
            </div>
          )}
        </>
      )}
    </div>
  )
}
