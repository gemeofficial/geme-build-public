'use client'
import { useState } from 'react'
import Image from 'next/image'
import { PlayIcon } from '../video-inline-player'
import mixpanel from 'mixpanel-browser'

export interface IPlayerComponentType {
  videoPosterUrl: string
  type: 'mp4' | 'youtube'
  videoSrcUrl: string
  mixpanelFrom?: string
  videoIsAutoPlay?: boolean
}

export default function PlayerComponent({
  videoPosterUrl,
  type,
  videoSrcUrl,
  mixpanelFrom,
  videoIsAutoPlay,
}: {
  videoPosterUrl: string
  type: 'mp4' | 'youtube'
  videoSrcUrl: string
  mixpanelFrom?: string
  videoIsAutoPlay?: boolean
}) {
  let [isPlay, setIsPlay] = useState(false)

  // 向后台发送统计信息
  function PlayClickHandler() {
    // 添加判断条件 解决在gemebuild中点击时mixpanel没有初始化的问题
    if (
      mixpanel.hasOwnProperty('token') &&
      mixpanel.get_config() &&
      Object.keys(mixpanel.get_config()).length > 0
    ) {
      mixpanel.track('Watch video', {
        From: mixpanelFrom || 'Inline player video',
      })
    }

    setIsPlay(true)
  }

  return (
    <div className="group">
      <span className="sr-only">Watch our video to learn more</span>
      {!isPlay && (
        <div
          className=" w-full h-full relative flex justify-center items-center hover:cursor-pointer"
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
              <source src={videoSrcUrl} type="video/mp4" />
              Your browser does not support HTML5 video.
            </video>
          )}

          {type === 'youtube' && (
            <iframe
              loading="lazy"
              src={videoSrcUrl}
              className="w-full h-full"
            ></iframe>
          )}
        </>
      )}
    </div>
  )
}
