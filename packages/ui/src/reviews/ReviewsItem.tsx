export interface IReviewsItem {
  name: string
  content: string
  imageUrl:string
}

const bgColors = ['#7bc294', '#D2D9D7', '#f9c192', '#a0f1ff']

function getRandomNumber(max: number) {
  return Math.floor(Math.random() * (max + 1))
}

export default function ReviewsItem({ item }: { item: IReviewsItem }) {
  const currentColor = bgColors[getRandomNumber(bgColors.length - 1)]
  return (
    <div
      
      style={{
        backgroundColor: currentColor,
      }}
      className="relative w-80 text-balance text-xl text-[#50240C] flex flex-shrink-0 flex-col justify-center items-center p-8 rounded-xl cursor-pointer"
    >
      <div className="leading-8 text-center">{item.content}</div>
      <div className="mt-4 select-none">{item.name}</div>


      {/* <div data-swiper-parallax-opacity="0.5">透明度变化</div>
      <div data-swiper-parallax-scale="0.15">缩放变化</div> */}
    </div>
  )
}
