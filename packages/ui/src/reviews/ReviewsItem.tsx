import Image from 'next/image'
import StarIcon from './StarIcon'
import ImageZoomViewer from '../client-components/ImageZoomViewer'

export interface IReviewsItem {
  content: string
  reviewsImageUrls: string[]
  bgImageUrl?: string
  name?: string
  avatar?: string
  desc?: string
  score?: string | number
}

// const bgColors = ['#7bc294', '#D2D9D7', '#f9c192', '#a0f1ff']

// function getRandomNumber(max: number) {
//   return Math.floor(Math.random() * (max + 1))
// }

export default function ReviewsItem({
  item,
  ZoomImageComponent,
}: {
  item: IReviewsItem
  ZoomImageComponent?: any
}) {
  // const currentColor = bgColors[getRandomNumber(bgColors.length - 1)]

  return (
    <div className="w-full max-w-lg bg-white relative group border border-solid border-gray-300 rounded-2xl p-6 transition-all duration-300 hover:border-v2311-primary hover:-translate-y-3 ">
      <div className="relative z-[2]">
        {/* star icon */}
        {item.score && <StarIcon score={parseInt(item.score + '')} />}

        {/* content text */}
        <p className="text-lg text-gray-600 leading-8 transition-all duration-500 mb-9 group-hover:text-gray-800 ">
          {item.content}
        </p>

        <div className="flex items-center gap-5">
          {/* avatar */}
          {item.avatar && <img src={item.avatar} alt="review user avatar" />}

          <div className="grid gap-1">
            {/* name */}
            {item.name && (
              <h5 className="text-gray-900 font-medium transition-all duration-500 group-hover:text-v2311-primary ">
                {item.name}
              </h5>
            )}
            {/* description */}
            {item.desc && (
              <span className="text-sm leading-6 text-gray-500">
                {item.desc}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* 背景图 */}
      {item.bgImageUrl && (
        <Image
          className="absolute inset-0 object-cover opacity-20 rounded-2xl z-[1] w-full h-full"
          src={item.bgImageUrl}
          width={500}
          height={300}
          unoptimized
          alt=""
        />
      )}

      {/* 点击后显示好评截图 */}
      {item.reviewsImageUrls.length > 0 && (
        <ImageZoomViewer>
          {item.reviewsImageUrls.map((url) => (
            <Image
              key={url}
              className="absolute inset-0 object-cover rounded-2xl z-[3] w-full h-full opacity-0"
              src={url}
              width={1280}
              height={720}
              alt=""
              unoptimized
            />
          ))}
        </ImageZoomViewer>
      )}
    </div>
  )
}
