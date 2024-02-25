'use client'

import MuxPlayer from '@mux/mux-player-react'

function ExampleMuxVideoPlayer() {
  return (
    <MuxPlayer
      className="absolute inset-0"
      streamType="on-demand"
      playbackId="G2OT5ie5cwjcn6f5hCr5Sev01H4qyEmAPbUi020102XN7Lw"
      metadata={{
        video_id: 'video-id-54321',
        video_title: 'Test video title',
        viewer_user_id: 'user-id-007',
      }}
      autoPlay={'muted'}
      loop
      style={{ '--media-object-fit': 'cover', '--controls': 'none' } as any}
      accentColor="#00945E"
      thumbnailTime={0}
    />
  )
}

export { ExampleMuxVideoPlayer }
