'use client'

import { useState } from 'react'
import { ILinkComponent } from '../../../../apps/gemebuild/src/contexts/link-context'
import {
  SectionContainer,
  SectionDescription,
  SectionTitle,
} from '../ui-components'
import Video from './Video'
import {
  IWinnersNamesTickerProps,
  WinnersNamesTicker,
} from './WinnersNamesTicker'

export interface IVideoList {
  title: string
  description: string
  videoList: {
    src: string
    poster: string
    from: string
    useTime: string
  }[]
  linkText: string
  fromText: string
  useTimeText: string
}

export interface IVideoListProps {
  winnersNamesTickerProps: IWinnersNamesTickerProps
  videoListProps: IVideoList
  PrefetchLink?: ILinkComponent
}

export default function VideoList({
  winnersNamesTickerProps,
  videoListProps,
  PrefetchLink,
}: IVideoListProps) {
  const [length, setLength] = useState(6)

  const loadMoreHandle = () => {
    setLength(length + 6)
  }

  return (
    <SectionContainer className="flex flex-col-reverse lg:flex-row">
      {/* 视频列表 */}
      <div className="flex-1 lg:mr-8 mt-8 lg:mt-0">
        <SectionTitle className="!text-left">
          {videoListProps.title}
        </SectionTitle>
        <SectionDescription className="!text-left mt-4">
          {videoListProps.description}
        </SectionDescription>
        <ul className="mt-4 xl:mt-6 grid grid-cols-2 xl:grid-cols-3 gap-4">
          {videoListProps.videoList.slice(0, length).map((item, index) => (
            <li key={item.src + index} className='mt-2'>
              <Video autoPlay={false} {...item} />
              <p className="font-medium xl:text-lg mt-2">
                {videoListProps.fromText} : {item.from}
              </p>
              <p className="text-xs md:text-sm text-gray-500 mt-1">
                {videoListProps.useTimeText} : {item.useTime}
              </p>
            </li>
          ))}
        </ul>

        {length <= videoListProps.videoList.length && (
          <button
            className="w-full mt-4 text-sm font-semibold leading-6 text-emerald-600 flex items-center justify-end"
            onClick={loadMoreHandle}
          >
            {videoListProps.linkText}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              className="ml-1 h-5 w-5 translate-y-[1px]"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        )}
      </div>
      {/* 中奖名单 */}
      <WinnersNamesTicker
        {...winnersNamesTickerProps}
        PrefetchLink={PrefetchLink}
      />
    </SectionContainer>
  )
}
