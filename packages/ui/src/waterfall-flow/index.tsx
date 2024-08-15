'use client'

import { useEffect, useState } from 'react'
import ImageZoomViewer from '../client-components/ImageZoomViewer'

interface IListItem {
  src: string
  alt: string
  desc?: string
}

export interface IWaterfallFlowProps {
  pictures: IListItem[]
}

function splitIntoThreeParts(num: number) {
  let part1 = 0
  let part2 = 0
  let part3 = 0

  if (num % 3 === 0) {
    part1 = part2 = part3 = num / 3
  } else if (num % 3 === 1) {
    part1 = Math.floor(num / 3) + 1
    part2 = Math.floor(num / 3)
    part3 = part2
  } else if (num % 3 === 2) {
    part1 = Math.floor(num / 3) + 1
    part2 = part1
    part3 = Math.floor(num / 3)
  }

  return [part1, part2, part3]
}

export default function WaterfallFlow({ pictures }: IWaterfallFlowProps) {
  const length = pictures.length
  const [part1Size, part2Size] = splitIntoThreeParts(length)

  const defaultList1 = pictures.slice(0, part1Size)
  const defaultList2 = pictures.slice(part1Size, part1Size + part2Size)
  const defaultList3 = pictures.slice(part1Size + part2Size, length)

  const [list1, setList1] = useState<IListItem[]>(defaultList1)
  const [list2, setList2] = useState<IListItem[]>(defaultList2)
  const [list3, setList3] = useState<IListItem[]>(defaultList3)

  function loadPictureByScreenWidth(screenWidth: number) {
    if (screenWidth < 1280) {
      const avgLength =
        length % 2 === 0 ? length / 2 : Math.floor(length / 2) + 1
      setList1(pictures.slice(0, avgLength))
      setList2(pictures.slice(avgLength))
      setList3([])
    } else {
      setList1(defaultList1)
      setList2(defaultList2)
      setList3(defaultList3)
    }
  }

  useEffect(() => {
    function windowResizeHandler() {
      if (window.innerWidth) {
        loadPictureByScreenWidth(window.innerWidth)
      }
    }

    windowResizeHandler()

    window.addEventListener('resize', windowResizeHandler)

    return () => window.removeEventListener('resize', windowResizeHandler)
  }, [])

  return (
    <ImageZoomViewer>
      <div className="grid grid-cols-2 xl:grid-cols-3 gap-4 md:gap-8 xl:gap-16">
        <div className="grid gap-4 md:gap-8 xl:gap-16 max-h-max">
          {list1.map((item, index) => (
            <ReviresPictureCart item={item} key={item.src + index} />
          ))}
        </div>
        <div className="grid gap-4 md:gap-8 xl:gap-16 max-h-max">
          {list2.map((item, index) => (
            <ReviresPictureCart item={item} key={item.src + index} />
          ))}
        </div>
        <div className="grid gap-4 md:gap-8 xl:gap-16 max-h-max">
          {list3.map((item, index) => (
            <ReviresPictureCart item={item} key={item.src + index} />
          ))}
        </div>
      </div>
    </ImageZoomViewer>
  )
}

function ReviresPictureCart({ item }: { item: IListItem }) {
  return (
    <div className="relative  bg-white border border-transparent rounded-lg shadow-lg hover:-translate-y-4 hover:shadow-2xl transition-all duration-300 cursor-pointer">
      <img
        className="w-full h-auto rounded-lg object-contain block"
        src={item.src}
        alt={item.alt}
      />
      {item.desc && (
        <div className="bg-gradient-to-b from-transparent to-black opacity-50 absolute inset-0">
          <div className="p-3 lg:p-6 absolute bottom-0 left-0 right-0 text-white text-sm lg:text-base">
            {item.desc}
          </div>
        </div>
      )}
    </div>
  )
}
