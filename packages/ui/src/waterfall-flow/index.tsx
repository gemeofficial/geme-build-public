'use client'

import { useEffect, useState } from 'react'
import { ILinkComponent } from '../../../../apps/gemebuild/src/contexts/link-context'
import clsx from 'clsx'
import DefaultLink from 'next/link'
import Image from 'next/image'
import ImageZoomViewer from '../client-components/ImageZoomViewer'

export interface IListItem {
  src: string
  alt: string
  desc?: string
  textColor?: string
  link?: string
}

export interface IWaterfallFlowProps {
  pictures: IListItem[]
  buttonText: string
  priority?: boolean
  PrefetchLink?: ILinkComponent
}

// 将list 均匀的分割为3份
function splitIntoThreePartsForList(list: any[]) {
  let part1 = 0
  let part2 = 0

  const length = list.length

  if (length % 3 === 0) {
    part1 = part2 = length / 3
  } else if (length % 3 === 1) {
    part1 = Math.floor(length / 3) + 1
    part2 = Math.floor(length / 3)
  } else if (length % 3 === 2) {
    part1 = Math.floor(length / 3) + 1
    part2 = part1
  }

  const defaultList1 = list.slice(0, part1)
  const defaultList2 = list.slice(part1, part1 + part2)
  const defaultList3 = list.slice(part1 + part2, length)

  return [defaultList1, defaultList2, defaultList3]
}

export function WaterfallFlow({
  pictures,
  priority,
  buttonText,
}: IWaterfallFlowProps) {
  const [defaultList1, defaultList2, defaultList3] =
    splitIntoThreePartsForList(pictures)

  const [list1, setList1] = useState<IListItem[]>(defaultList1)
  const [list2, setList2] = useState<IListItem[]>(defaultList2)
  const [list3, setList3] = useState<IListItem[]>(defaultList3)

  // 根据屏幕宽度动态设置list在不同列中的展示
  const loadPictureByScreenWidth = (screenWidth: number) => {
    if (screenWidth < 1280) {
      const length = pictures.length
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
    <div className="grid grid-cols-2 xl:grid-cols-3 gap-4 md:gap-8 xl:gap-16">
      <div className="grid gap-4 md:gap-8 xl:gap-16 h-max">
        {list1.map((item, index) => (
          <ReviewsPictureCart
            item={item}
            key={item.src + index}
            priority={priority}
            buttonText={buttonText}
          />
        ))}
      </div>
      <div className="grid gap-4 md:gap-8 xl:gap-16 h-max">
        {list2.map((item, index) => (
          <ReviewsPictureCart
            item={item}
            key={item.src + index}
            priority={priority}
            buttonText={buttonText}
          />
        ))}
      </div>
      <div className="grid gap-4 md:gap-8 xl:gap-16 h-max">
        {list3.map((item, index) => (
          <ReviewsPictureCart
            item={item}
            key={item.src + index}
            priority={priority}
            buttonText={buttonText}
          />
        ))}
      </div>
    </div>
  )
}

function ReviewsPictureCart({
  item,
  buttonText,
  priority = false,
  PrefetchLink,
}: {
  item: IListItem
  buttonText: string
  priority?: boolean
  PrefetchLink?: ILinkComponent
}) {
  console.log('priority', priority)
  const Link = PrefetchLink ? PrefetchLink : DefaultLink
  return (
    <div className="relative  bg-white border border-transparent rounded-lg shadow-lg xl:hover:-translate-y-4 xl:hover:shadow-2xl transition-all duration-300 cursor-pointer">
      <ImageZoomViewer>
        <Image
          width={800}
          height={670}
          priority={priority}
          className="w-full h-auto rounded-lg object-contain block"
          src={item.src}
          alt={item.alt}
        />
      </ImageZoomViewer>
      {/* {item.desc && (
        <div className="bg-gradient-to-b from-transparent to-black opacity-50 absolute inset-0">
          <div className="p-3 lg:p-6 absolute bottom-0 left-0 right-0 text-white text-sm lg:text-base">
            {item.desc}
          </div>
        </div>
      )} */}
      {item.desc && (
        <div className="p-2 lg:p-4">
          <div
            className={clsx(
              'italic text-xs lg:text-base',
              item.textColor ? `text-[#${item.textColor}]` : '',
            )}
          >
            " {item.desc} "
          </div>

          {item.link && (
            <Link
              href={item.link}
              className="text-xs xl:text-sm mt-1 font-semibold leading-6 text-emerald-600 hover:underline text-right inline-block w-full"
            >
              {buttonText}
              <span aria-hidden="true" className="ml-1 text-xs">
                →
              </span>
            </Link>
          )}
        </div>
      )}
    </div>
  )
}
