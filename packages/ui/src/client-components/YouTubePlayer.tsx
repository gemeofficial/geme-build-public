'use client'

import mixpanel from 'mixpanel-browser'
import YouTube, { YouTubeProps } from 'react-youtube'
import { hasMixpanel } from '../lib/has-mixpanel'

interface Props {
  videoId: string
  readyCallback?: () => void
  playCallback?: () => void
  mixpanelFrom?: string
  videoIsAutoPlay?: boolean
}
const YouTubePlayer = ({
  videoId,
  readyCallback,
  playCallback,
  mixpanelFrom,
  videoIsAutoPlay,
}: Props) => {
  const onEnd = () => {
    if (hasMixpanel()) {
      mixpanel.track('Watch Video End', {
        From: mixpanelFrom || 'Youtube player video',
      })
    }
  }

  const onReady = () => {
    readyCallback && readyCallback()
  }

  const onPlay = () => {
    playCallback && playCallback()
  }

  const onError: YouTubeProps['onError'] = (event) => {
    // 列举该播放器常见的Error解释 cf https://developers.google.com/youtube/iframe_api_reference?hl=zh-cn#onError
    const errorJson = [
      {
        code: 2,
        message:
          'The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that is less than 11 characters long or if the video ID contains invalid characters such as exclamation points or asterisks.',
      },
      {
        code: 5,
        message:
          'The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.',
      },
      {
        code: 100,
        message:
          'The requested video was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.',
      },
      {
        code: 101,
        message:
          'The owner of the requested video does not allow it to be played in embedded players.',
      },
      {
        code: 150,
        message: 'This error is the same as 101. It is a disguised 101 error!',
      },
    ]

    console.error(
      'YouTubePlayer Error! Detail:',
      errorJson.find((item) => item.code === event.data),
    )
  }

  const opts: YouTubeProps['opts'] = {
    height: '100%',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: videoIsAutoPlay ? 1 : 0,
      
    },
  }

  return (
    <YouTube
      className="w-full h-full"
      videoId={videoId}
      opts={opts}
      onReady={onReady}
      onError={onError}
      onEnd={onEnd}
      onPlay={onPlay}
    />
  )
}

export default YouTubePlayer
