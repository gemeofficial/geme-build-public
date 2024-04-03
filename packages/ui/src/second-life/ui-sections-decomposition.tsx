"use client"

import {  useEffect, useState } from 'react'
import { throttle } from 'ts-debounce-throttle'

export default function UiSectionsDecomposition() {
  const [paddingBottom, setPaddingBottom] = useState(0)

  // 不同屏幕宽度下对应的paddingBottom边距大小的Map数据组
  // [375, 110] => 屏幕宽度375px > 对应110vw的paddingBottom
  const widthToPaddingBottomMap = new Map([
    [375, 110],
    [414, 100],
    [450, 90],
    [500, 80],
    [600, 70],
    [700, 60],
    [800, 50],
    [900, 40],
    [1000, 35],
    [1100, 30],
    [1300, 25],
    [1400, 20],
    [1500, 18],
    [1600, 15],
    [1800, 12.5],
    [2000, 10],
    [2200, 8],
    [2400, 6],
    [2400, 6],
    [2700, 4],
    [2900, 2],
    [3000, 1],
    [3100, 1],
  ])

  let prevValue = widthToPaddingBottomMap.get(375)!

  /**
   * 获取不同屏幕宽度对应的paddingBottom
   * @param width 屏幕宽度
   * @returns newPaddingBottom
   */
  function getPaddingBottomValue(width: number) {
    // 避免超大屏幕下不必要的循环
    if (width > 3000) return 1

    // 应该取的是当前key的上一个value，原因：width >= 375 && width <= 414时 value应该为110 而不是100
    for (let [key, value] of widthToPaddingBottomMap) {
      if (width <= key) {
        prevValue = value
        break
      }
    }

    return prevValue
  }

  // 根据屏幕宽度设置合适的距离
  useEffect(() => {
    const updateDotsPaddingBottom = throttle(
      () => {
        const width = window.innerWidth
        const newPaddingBottom = getPaddingBottomValue(width)
        setPaddingBottom(newPaddingBottom)
      },
      500,
      { leading: true, trailing: true }
    )
    updateDotsPaddingBottom()
    window.addEventListener('resize', updateDotsPaddingBottom)

    // 清理函数
    return () => {
      window.removeEventListener('resize', updateDotsPaddingBottom)
    }
  }, [window?.innerWidth])

  return (
    <section
      style={{ paddingBottom: paddingBottom + 'vw' }}
      className="ui-sections-decomposition bg--green-1"
      data-anchor="le-processus"
    >
      <div className="ui-fragments-dots">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </section>
  )
}