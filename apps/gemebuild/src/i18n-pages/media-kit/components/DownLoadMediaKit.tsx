import { SectionContainer, SectionDescription } from 'ui'
import Button from './Button'

const items = [
  {
    title: 'Logo Kit',
    desc: 'Download our media kit ZIP here,Download our media kit ZIP here',
    buttonText: 'Download here',
    href: '#',
  },
  {
    title: 'Press Images Leif Lindner',
    desc: 'Download our media kit ZIP here,Download our media kit ZIP here',
    buttonText: 'Download material',
    href: '#',
  },
  {
    title: 'GEME brand center',
    desc: 'Learn about all the elements of the Slack brand, including logo, color, typography, text, illustrations and more, in our comprehensive online property and guide center.',
    buttonText: 'Enter',
    href: '#',
  },
]

export default function DownLoadMediaKit() {
  return (
    <SectionContainer className="flex flex-col lg:flex-row items-start gap-4 lg:gap-6 !pt-0">
      {items.map((item, index) => (
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
            className="max-w-max min-w-[70%]"
          />
        </div>
      ))}
    </SectionContainer>
  )
}
