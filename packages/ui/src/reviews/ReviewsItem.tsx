import StarIcon from './StarIcon'
import ImageZoomViewer from '../client-components/ImageZoomViewer'
import { LocaleType } from './ReviewsSection'

export interface IReviewsItem {
  content: string //文本内容
  reviewsImageUrls: string[] // 点击后展现的好评截图URLs
  bgImageUrl?: string // 卡片的背景图片 如传入则覆盖默认的背景图片
  bgColor?: string // 16进制的颜色：eg：#7bc294
  name?: string // 姓名
  avatar?: string // 头像
  desc?: string // 简短的描述
  score?: string | number // 评分星级
}

export interface IReviewsItemType {
  item: IReviewsItem
  index: number // 当前遍历ReviewsItem的index
  locale?: LocaleType
  isShowBgImage?: boolean // 配置选项：是否显示默认背景图
}

const defaultBgColors = ['#E8F1EE', '#F8F1EB', '#f5f5f5']
const defaultBgImageUrls = [
  'https://images.unsplash.com/photo-1637215797311-5dee970911e6?q=80&w=3774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1565073182887-6bcefbe225b1?q=80&w=3871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1717226263533-d48d50759764?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIwfGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D',
]

const clickTextMultiLang = {
  en: 'Click to View More',
  de: 'Klicken Sie hier, um mehr zu sehen',
  fr: 'Cliquez pour voir plus',
}

export default function ReviewsItem({
  item,
  locale,
  index,
  isShowBgImage,
}: IReviewsItemType) {
  const clickText = clickTextMultiLang[locale || 'en']

  const defaultBgColor = defaultBgColors[index % defaultBgColors.length]
  const defaultBgImageUrl =
    defaultBgImageUrls[index % defaultBgImageUrls.length]

  return (
    <div
      style={{ backgroundColor: item.bgColor || defaultBgColor }}
      className="w-full max-w-[90vw] md:max-w-lg bg-white relative shadow-md group border border-solid border-gray-300 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-3 "
    >
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
            <button className="text-sm font-semibold leading-6 text-emerald-600">
              {clickText}
              <span aria-hidden="true" className='ml-[2px] text-xs'>→</span>
            </button>
          </div>
        </div>
      </div>

      {/* 背景图 */}
      {isShowBgImage && (item.bgImageUrl || defaultBgImageUrl) && (
        <img
          className="absolute inset-0 object-cover opacity-20 rounded-2xl z-[1] w-full h-full"
          src={item.bgImageUrl || defaultBgImageUrl}
          width={500}
          height={300}
          loading="lazy"
          alt=""
        />
      )}

      {/* 点击后显示好评截图 */}
      {item.reviewsImageUrls.length > 0 && (
        <ImageZoomViewer>
          {item.reviewsImageUrls.map((url) => (
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
