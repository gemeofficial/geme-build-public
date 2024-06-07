import StarIcon from './StarIcon'
import ImageZoomViewer from '../client-components/ImageZoomViewer'

export interface IReviewsItem {
  content: string //文本内容
  reviewsImageUrls: string[] // 点击后展现的好评截图URLs
  bgImageUrl?: string // 背景图片 如传入则覆盖默认的背景图片
  isHiddenBgImage?: boolean // 是否不显示背景图 default false
  name?: string // 姓名
  avatar?: string // 头像
  desc?: string // 简短的描述
  score?: string | number // 评分星级
}

// const bgColors = ['#7bc294', '#D2D9D7', '#f9c192', '#a0f1ff']
const bgImageUrls = [
  'https://images.unsplash.com/photo-1637215797311-5dee970911e6?q=80&w=3774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1565073182887-6bcefbe225b1?q=80&w=3871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://plus.unsplash.com/premium_photo-1673059583935-5621c72e4f30?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDV8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1717226263533-d48d50759764?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIwfGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D',
]

function getRandomNumber(max: number) {
  return Math.floor(Math.random() * (max + 1))
}

export default function ReviewsItem({ item }: { item: IReviewsItem }) {
  const currentBgImage = bgImageUrls[getRandomNumber(bgImageUrls.length - 1)]

  return (
    <div className="w-full max-w-[90vw] md:max-w-lg bg-white relative group border border-solid border-gray-300 rounded-2xl p-6 transition-all duration-300 hover:border-v2311-primary hover:-translate-y-3 ">
      <div className="relative z-[2]">
        {/* star icon */}
        {item.score && <StarIcon score={parseInt(item.score + '')} />}

        {/* content text */}
        <p className="text-lg text-gray-600 leading-8 transition-all duration-500 mb-9 group-hover:text-gray-800 ">
          {item.content}
        </p>

        <div className="flex flex-col md:flex-row md:items-center">
          <div className="flex items-center gap-5 flex-wrap">
            {/* avatar */}
            {item.avatar && (
              <img
                className="w-14 h-14 rounded-full "
                src={item.avatar}
                alt="review user avatar"
              />
            )}

            <div className="grid gap-1">
              {/* name */}
              {item.name && (
                <h5 className="text-gray-900 font-medium">{item.name}</h5>
              )}
              {/* description */}
              {item.desc && (
                <span className="text-sm leading-6 text-gray-500">
                  {item.desc}
                </span>
              )}
            </div>
          </div>

          <div className="flex-1 flex md:justify-end mt-4 md:mt-0">
            <a className="text-sm font-semibold leading-6 text-emerald-600">
              Click to View More <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>

      {/* 背景图 */}
      {!item.isHiddenBgImage && (
        <img
          className="absolute inset-0 object-cover opacity-20 rounded-2xl z-[1] w-full h-full"
          src={item.bgImageUrl || currentBgImage}
          width={500}
          height={300}
          loading="eager"
          alt=""
        />
      )}

      {/* 点击后显示好评截图 */}
      {item.reviewsImageUrls.length > 0 && (
        <ImageZoomViewer>
          {item.reviewsImageUrls.reverse().map((url) => (
            <img
              key={url}
              className="absolute inset-0 object-cover rounded-2xl z-[3] w-full h-full opacity-0"
              src={url}
              width={1280}
              height={720}
              loading="lazy"
              alt=""
            />
          ))}
        </ImageZoomViewer>
      )}
    </div>
  )
}
