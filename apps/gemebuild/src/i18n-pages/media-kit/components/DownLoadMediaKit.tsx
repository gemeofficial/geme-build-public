import { SectionContainer, SectionDescription } from 'ui'
import Button from './Button'

export interface IDownLoadMediaKitProps {
  downLoadItems: {
    title: string
    desc: string
    buttonText: string
    href: string
  }[]
}

export default function DownLoadMediaKit({
  downLoadItems,
}: IDownLoadMediaKitProps) {
  return (
    <SectionContainer
      
      className="flex flex-col lg:flex-row items-start gap-4 lg:gap-6 !pt-0"
    >
      {downLoadItems.map((item, index) => (
        <div
          key={index}
          className="bg-gray-100 rounded-xl p-6 flex-1 flex flex-col justify-between min-h-[240px] lg:min-h-[320px] w-full"
        >
          <div>
            <div className="md:text-lg lg:text-xl xl:text-2xl font-bold">
              {item.title}
            </div>
            <SectionDescription className="!text-left mt-4">
              {item.desc}
            </SectionDescription>
          </div>
          <Button
            text={item.buttonText}
            href={item.href}
            className="max-w-max min-w-[70%] md:min-w-[50%] lg:min-w-[70%]"
          />
        </div>
      ))}
    </SectionContainer>
  )
}
