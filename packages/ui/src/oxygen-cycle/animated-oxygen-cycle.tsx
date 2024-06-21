'use client'

import { useState, useCallback, useRef, forwardRef } from 'react'
import { ScrollTrigger, Tween } from 'react-gsap'
import { OxygenCycle, IOxygenCycleProps } from './oxygen-cycle'
import { getDomInfo } from '../lib'

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
        // 因为这里是一个回调函数，存在闭包现象，无法获取到Hooks状态的最新值。所以只能在这里手动获取
        const { elHeight: productTabsHeight } = getDomInfo(
          '#product-tabs-container',
        )
        const { elHeight: rootHeaderHeight } = getDomInfo('#root-header')

        // 默认偏移量 如没有header 则12% 如在bio中有header 则偏移量为header高度 + 吸顶tab高度 + 50px
        const defaultOffset =
          rootHeaderHeight > 0
            ? rootHeaderHeight + productTabsHeight + 50
            : '12%'

        // 80是圆圈标题的paddingTop 48是title的高度 64是圆圈的marginTop
        const scrollStartOffsetTop = 80 - 48 - 64 - productTabsHeight
        const gemebuildScrollStartOffsetTop = 80 + 48 + 64 - productTabsHeight
        
        // PC-适配分辨率较小的笔记本电脑屏幕
        if (window.innerWidth > 1024 && window.innerWidth < 1920) {
          if (rootHeaderHeight > 0) {
            // 如果有HeaderNotifyBar的存在的话 则需要再往上偏移80px(圈内icon的marginTop)
            if (rootHeaderHeight > 120) {
              return `top top-=${scrollStartOffsetTop + 80}`
            }

            // 这里无法使用scrollStartOffsetTop的原因是：例如rootHeaderHeight = 96 >> 96-(-32) = 128
            // 但预期这里的值是一个负数，所以不能使用常量 需要直接在模板字符串中进行运算
            return `top top+=${rootHeaderHeight - 80 - 48 - 64}`
          }
          // else是适配gemebuild中无header的情况的
          else {
            return `top top-=${gemebuildScrollStartOffsetTop}`
          }
        }

        // Mobile-适配部分老款分辨率低的机型 贴合标题位置滚动
        if (window.innerHeight <= 680 && rootHeaderHeight > 0) {
          return `top top+=${rootHeaderHeight + 15}`
        }

        return `top top+=${defaultOffset}`
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
