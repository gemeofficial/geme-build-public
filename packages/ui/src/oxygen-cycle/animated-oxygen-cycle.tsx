'use client'

import { useState, useCallback, useRef, forwardRef } from 'react'
import { ScrollTrigger, Tween } from 'react-gsap'
import { OxygenCycle, IOxygenCycleProps } from './oxygen-cycle'
import { useGetRootHeaderInfo } from '../index'

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
      start={() => {
        const { rootHeaderHeight } = useGetRootHeaderInfo()

        const topOffset = rootHeaderHeight > 0 ? rootHeaderHeight + 100 : '12%'

        // 适配部分老款分辨率低的机型
        if (window.innerHeight <= 680 && typeof topOffset === 'number') {
          return `top top+=${topOffset - 60}`
        }

        return `top top+=${topOffset}`
      }}
      end={() => {
        // 若是在移动触控设备上（包括平板） 则将滚动结束的位置放大125vh。从而实现在移动端中的触控时更缓慢的滚动进度
        if (window.innerWidth <= 1024) {
          return 'bottom top-=125%'
        }
        return 'bottom top'
      }}
      pin={true}
      scrub={true}
      onUpdate={onUpdate}
      invalidateOnRefresh={true}
      fastScrollEnd={2000}
      // markers：在调试滚动时  可打开此属性
      // markers={{
      //   startColor: 'green',
      //   endColor: 'red',
      //   fontSize: '18px',
      //   fontWeight: 'bold',
      //   indent: 20,
      // }}
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
