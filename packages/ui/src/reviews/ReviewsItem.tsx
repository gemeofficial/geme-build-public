import Image from 'next/image'
import StarIcon from './StarIcon'

export interface IReviewsItem {
  content: string
  imageUrl: string
  name?: string
  avatar?: string
  desc?: string
  score?: string | number
}

const bgColors = ['#7bc294', '#D2D9D7', '#f9c192', '#a0f1ff']

function getRandomNumber(max: number) {
  return Math.floor(Math.random() * (max + 1))
}

export default function ReviewsItem({ item }: { item: IReviewsItem }) {
  const currentColor = bgColors[getRandomNumber(bgColors.length - 1)]

  return (
    <div className="">
      <div className="relative group bg-white border border-solid border-gray-300 rounded-2xl p-6 transition-all duration-300 w-full hover:border-v2311-primary hover:-translate-y-3 ">
        {item.score && <StarIcon score={parseInt(item.score + '')} />}

        <p className="text-lg text-gray-600 leading-8 transition-all duration-500 mb-9 group-hover:text-gray-800 ">
          {item.content}
        </p>
        <div className="flex items-center gap-5">
          {item.avatar && <img src={item.avatar} alt="review user avatar" />}

          <div className="grid gap-1">
            {item.name && (
              <h5 className="text-gray-900 font-medium transition-all duration-500 group-hover:text-v2311-primary ">
                {item.name}
              </h5>
            )}
            {item.desc && (
              <span className="text-sm leading-6 text-gray-500">
                {item.desc}
              </span>
            )}
          </div>
        </div>
        <Image
          className="absolute inset-0 h-full object-cover opacity-20 rounded-2xl"
          src={item.imageUrl}
          width={1280}
          height={720}
          alt=""
        />
      </div>
    </div>
  )
}
