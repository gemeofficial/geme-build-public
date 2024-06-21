'use client'
import { useEffect, useRef, useState } from "react"

// 获取bio中的Root Header的高度
export function useGetRootHeaderInfo() {
  const [rootHeaderHeight, setRootHeaderHeight] = useState(0)
  const rootHeaderRef = useRef<Element | null>(null)

  useEffect(() => {
    const rootHeaderEl = document.querySelector('#root-header')
    const rootHeaderElHeight = rootHeaderEl?.getBoundingClientRect().height || 0

    setRootHeaderHeight(rootHeaderElHeight)
    rootHeaderRef.current = rootHeaderEl
  }, [])

  return { rootHeaderRef, rootHeaderHeight }
}

// 获取pdp页中的吸顶tabs的高度
export function useGetProductTabsInfo() {
  const [productTabsHeight, setProductTabsHeight] = useState(0)
  const productTabsRef = useRef<Element | null>(null)

  useEffect(() => {
    const productTabsEl = document.querySelector('#product-tabs-container')
    const productTabsElHeight = productTabsEl?.getBoundingClientRect().height || 0

    setProductTabsHeight(productTabsElHeight)
    productTabsRef.current = productTabsEl
  }, [])

  return { productTabsRef, productTabsHeight }
}
