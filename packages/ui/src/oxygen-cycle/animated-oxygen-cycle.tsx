'use client'

import { useState, useCallback, useRef, forwardRef } from 'react'
import { ScrollTrigger, Tween } from 'react-gsap'
import { OxygenCycle, IOxygenCycleProps } from './oxygen-cycle'

const ForwardedRefOxygenCycle = forwardRef(OxygenCycle)

function ScrollTriggeredAnimatedOxygenCycle(props: IOxygenCycleProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)
  const onUpdate = useCallback(
    (self: { progress?: number }) => {
      const progress = self.progress || 0
      setProgress(progress)
    },
    [setProgress],
  )

  return (
    <ScrollTrigger
      trigger={containerRef.current}
      start="top top+=20%"
      end="bottom center-=10%"
      pin={true}
      pinnedContainer=".sb-show-main"
      scrub={true}
      markers={false}
      onUpdate={onUpdate}
      invalidateOnRefresh={true}
    >
      <Tween>
        <ForwardedRefOxygenCycle
          ref={containerRef}
          {...props}
          progress={progress * 100}
        />
      </Tween>
    </ScrollTrigger>
  )
}

export { ScrollTriggeredAnimatedOxygenCycle, ForwardedRefOxygenCycle }
