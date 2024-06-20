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
      start={() => {
        // 根据Header的高度动态计算起始滚动位置
        const rootHeaderEl = document.querySelector('#root-header')
        const rootHeaderHeight =
          rootHeaderEl?.getBoundingClientRect().height || 0

        // 使用一个变量 适配gemebuild中无headerDOM
        const topOffset = rootHeaderHeight > 0 ? rootHeaderHeight + 100 : '12%'

        // pc-适配分辨率较小的笔记本电脑屏幕
        if (window.innerWidth > 1024 && window.innerWidth <= 1800) {
          // 80是圆圈标题的paddingTop 48是title的高度 64是圆圈的marginTop
          return `top top-=${80 + 48 + 64}`
        }

        // Mobile-适配部分老款分辨率低的机型
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
      markers={{
        startColor: 'green',
        endColor: 'red',
        fontSize: '18px',
        fontWeight: 'bold',
        indent: 20,
      }}
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
