'use client'

import {
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
  forwardRef,
} from 'react'
import './ui-compost.css'
import { ScrollTrigger, Tween } from 'react-gsap'
import classNames from '../lib/classNames'

interface IUiCompostProps {
  progress: number
}

const UiCompost = forwardRef(function UiCompost(
  { progress }: IUiCompostProps,
  ref: React.Ref<HTMLDivElement>,
) {
  const [vhHeight, setVhHeight] = useState(0)
  const [compostMaskPath, setCompostMaskPath] = useState('')
  const uiFragmentsSpriteRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    if (typeof window !== 'undefined') {
      setVhHeight(window.innerHeight / 100)

      const width = uiFragmentsSpriteRef.current?.clientWidth || 0
      const progressSize = width - 0.445 * width * progress
      setCompostMaskPath(
        `M0 0H${width}V${progressSize}C${width} ${progressSize} ${width} ${width} ${
          width / 2
        } ${width}C0 ${width} 0 ${progressSize} 0 ${progressSize}`,
      )
    }
  }, [setVhHeight, setCompostMaskPath, progress])

  return (
    <div
      ref={ref}
      className={classNames(
        ' bg-transparent absolute top-0 w-full bottom-[4%] lg:bottom-0 transition-opacity duration-500',
        progress === 0 ? ' opacity-0' : 'opacity-1',
      )}
      style={{ '--vh': `${vhHeight}px` } as Object}
    >
      <div
        className="ui-compost"
        style={
          {
            '--compostMask': `path("${compostMaskPath}")`,
            // height: '2739.91px',
            // '--compostMask':
            //   'path("M0 0H199.95733333333334V200C199.95733333333334 200 199.95733333333334 199.95733333333334 99.97866666666667 199.95733333333334C0 199.95733333333334 0 200 0 200");',
            // 'path("M0 0H199.95733333333334V110C199.95733333333334 110 199.95733333333334 199.95733333333334 99.97866666666667 199.95733333333334C0 199.95733333333334 0 110 0 110")',

            // For bigger screens
            // --compostMask: path('M37.68888888888889 37.68888888888889H464.35555555555555V235C464.35555555555555 235 464.35555555555555 464.35555555555555 232.17777777777778 464.35555555555555C37.68888888888889 464.35555555555555 37.68888888888889 235 37.68888888888889 235');

            // 182 - 101 = 81
            // 81/182 = 0.445
            //
            // 208 - 115 = 93
            // 93/208 = 0.447
            //
            // 373 - 206 = 167
            // 167/373 = 0.447
          } as Object
        }
      >
        <div className="container mx-auto xl:!max-w-7xl">
          <div
            className="circle"
            style={{
              // progress: 0
              // transform: 'translate(-50%, -20%) scale(0)',
              // progress: 0.00881975
              // transform: 'translate(-50%, -20.2646%) scale(0.00881975)',
              // progress: 1
              // transform: 'translate(-50%, -50%) scale(1)';,
              transform: `translate(-50%, -${
                20 + (50 - 20) * progress
              }%) scale(${
                progress *
                (typeof window !== 'undefined' && window.innerWidth > 1440
                  ? 0.8
                  : 1)
              })`,
            }}
          />
          <div
            ref={uiFragmentsSpriteRef}
            className="ui-fragments-sprite 2xl:!scale-[0.35]"
            style={{}}
          >
            <img
              className={`_${String(Math.round(19 * progress)).padStart(
                2,
                '0',
              )}`}
              // className="_00"
              // className="_19"
              src="https://www.datocms-assets.com/79468/1663102198-spritesheet-1.png?auto=format"
              width={3510}
              height={2808}
              loading="lazy"
              alt="sprite images"
            />
          </div>
        </div>
      </div>
    </div>
  )
})

function ScrollTriggeredAnimatedUiCompost() {
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
      trigger=".ui-sections-second-life > .ui-fragments-title"
      endTrigger=".ui-sections-end > .ui-fragments-title "
      start="bottom bottom-=20%"
      end="bottom bottom-=20%"
      scrub={true}
      markers={false}
      onUpdate={onUpdate}
      invalidateOnRefresh={true}
    >
      <Tween>
        <UiCompost progress={progress} />
      </Tween>
    </ScrollTrigger>
  )
}

export { UiCompost, ScrollTriggeredAnimatedUiCompost }
