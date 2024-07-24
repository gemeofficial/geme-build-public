import Image from 'next/image'

export interface IHeroSectionProps {
  title: string
  description: string
  highlights: IHighlights[]
}

interface IHighlights {
  id: number
  title: string
  description: string
  iconPath: string
}

export default function HeroSection({
  description,
  highlights,
  title,
}: IHeroSectionProps) {
  return (
    <>
      <section className="relative bg-gray-800 mx-auto overflow-hidden max-w-[calc(100vw_-_2rem)] rounded-lg">
        {/* 底部背景图 */}
        <div
          className="bg-cover bg-center min-h-[160px] sm:min-h-[200px] flex items-center text-white overflow-hidden"
          style={{
            backgroundImage: 'url("/assets/images/geme-kobold/hero-bg.jpg")',
          }}
        >
          {/* 黑色遮罩 */}
          <div className="absolute inset-0 bg-[#071211] opacity-50"></div>

          {/* 文字内容 */}
          <div className="relative flex flex-col px-4 sm:px-8 py-8 gap-2 mx-auto text-center">
            <h2 className="text-xl md:text-3xl font-bold leading-tight drop-shadow-lg">
              {title}
            </h2>
            <div className="text-base md:text-lg sm:font-medium leading-tight drop-shadow-lg">
              {description}
            </div>
          </div>
        </div>
      </section>
      <section className="lg:max-w-7xl lg:px-8 mx-auto my-[30px]">
        <div className="grid grid-cols-1 gap-0 sm:gap-3 lg:gap-5 sm:grid-cols-3 px-4">
          {highlights.map((item, index) => (
            <div
              key={item.id}
              className="flex gap-2 flex-col items-start sm:items-center py-4 pl-2 sm:pl-0 sm:py-5 bg-white rounded-lg"
            >
              <div className="relative ml-[-4px] sm:ml-0 shrink-0 w-[40px] h-[40px] lg:w-[56px] lg:h-[56px]">
                <Image
                  src={item.iconPath}
                  alt={item.title}
                  width={64}
                  height={64}
                />
              </div>
              <div>
                <h3 className="mb-1 leading-tight font-semibold text-base lg:text-lg capitalize text-gray-900 text-left sm:text-center">
                  {item.title}
                </h3>
                <div className="text-sm text-gray-500 leading-tight text-left sm:text-center">
                  {item.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
