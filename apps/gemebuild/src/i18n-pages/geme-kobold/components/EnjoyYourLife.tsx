import Image from 'next/image'
import { ReactNode } from 'react'

export interface IEnjoyYourLifeProps {
  title: string
  description: ReactNode
}

export default function EnjoyYourLife({
  description,
  title,
}: IEnjoyYourLifeProps) {
  return (
    <div className="mx-auto text-center px-4 sm:max-w-3xl lg:max-w-7xl lg:px-8 min-h-[332px] pb-12">
      <div className="flex flex-col lg:flex-row bg-gray-50 p-4 lg:pl-20 gap-6 md:gap-8 lg:gap-12 rounded-lg overflow-hidden">
        <div className="flex flex-col gap-1 lg:gap-3 justify-center px-6 pt-6 md:px-12 md:pt-12 lg:p-0">
          <div className="text-xl md:text-3xl font-bold text-gray-900 text-center lg:text-left leading-tight md:leading-none">
            <h2>{title}</h2>
          </div>
          <div className="text-base lg:text-xl text-gray-500 text-center lg:text-left">
            {description}
          </div>
        </div>
        <div className="relative w-full lg:w-[38vw] lg:min-w-[450px] lg:max-w-[550px] h-[140px] sm:h-[200px] lg:h-[300px] shrink-0">
          <Image
            src="/assets/images/geme-kobold/enjoy-your-life.png"
            alt="Enjoy your life!"
            className="h-full w-full object-cover object-center rounded-lg"
            width={500}
            height={300}
          />
        </div>
      </div>
    </div>
  )
}
