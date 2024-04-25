'use client'

import { ReactNode } from 'react'
import './second-life.css'
import { ScrollTrigger, Tween } from 'react-gsap'

function ScrollTriggeredAnimatedHeadlineTop({
  titleLeftPart,
  titleRightPart,
}: {
  titleLeftPart?: ReactNode
  titleRightPart?: ReactNode
}) {
  return (
    <ScrollTrigger
      start="top bottom-=10%"
      end="top top+=20%"
      scrub={true}
      markers={false}
    >
      <Tween
        to={{
          x: '0%',
          opacity: '1',
        }}
      >
        <span
          style={{
            translate: 'none',
            rotate: 'none',
            scale: 'none',
            transform: 'translateX(-100%)',
            opacity: '0',
          }}
        >
          {titleLeftPart}
        </span>
      </Tween>
      <Tween
        to={{
          x: '0%',
          opacity: '1',
        }}
      >
        <span
          style={{
            translate: 'none',
            rotate: 'none',
            scale: 'none',
            transform: 'translateX(100%)',
            opacity: '0',
          }}
        >
          {titleRightPart}
        </span>
      </Tween>
    </ScrollTrigger>
  )
}

function ScrollTriggeredAnimatedHeadlineBottom({
  endTitleLeftPart,
  endTitleRightPart,
}: {
  endTitleLeftPart?: ReactNode
  endTitleRightPart?: ReactNode
}) {
  return (
    <ScrollTrigger
      start="top bottom-=10%"
      end="top top+=20%"
      scrub={true}
      markers={false}
    >
      <Tween
        to={{
          x: '0%',
          opacity: '1',
        }}
      >
        <span
          style={{
            translate: 'none',
            rotate: 'none',
            scale: 'none',
            transform: 'translateX(-100%)',
            opacity: '0',
          }}
        >
          {endTitleLeftPart}
        </span>
      </Tween>
      <Tween
        to={{
          x: '0%',
          opacity: '1',
        }}
      >
        <span
          style={{
            translate: 'none',
            rotate: 'none',
            scale: 'none',
            transform: 'translateX(100%)',
            opacity: '0',
          }}
        >
          {endTitleRightPart}
        </span>
      </Tween>
    </ScrollTrigger>
  )
}

export {
  ScrollTriggeredAnimatedHeadlineTop,
  ScrollTriggeredAnimatedHeadlineBottom,
}
