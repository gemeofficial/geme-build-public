import Video from './Video'
import {
  IWinnersNamesTickerProps,
  WinnersNamesTicker,
} from './WinnersNamesTicker'

export interface IVideoListProps {
  title: string
  videoList: {
    src: string
    poster: string
  }[]
}

export default function VideoList({
  winnersNamesTickerProps,
  videoListProps,
}: {
  winnersNamesTickerProps: IWinnersNamesTickerProps
  videoListProps: IVideoListProps
}) {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="">
        <h3>{videoListProps.title}</h3>
        <ul>
          {videoListProps.videoList.map((item, index) => (
            <li key={item.src + index}>
              <Video autoPlay={false} {...item} />
            </li>
          ))}
        </ul>
      </div>
      {/* 中奖名单 */}
      <WinnersNamesTicker {...winnersNamesTickerProps} />
    </div>
  )
}
