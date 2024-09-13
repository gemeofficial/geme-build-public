import clsx from 'clsx'
import { getImageProps } from 'next/image'
import { SectionContainer } from 'ui'
import PrimaryButton from 'ui/src/ui-components/PrimaryButton'

export interface ISection4Props {
  title: string
  bgSrc: string
  bgAlt: string

  lists: {
    iconSrc: string
    iconAlt: string
    title: string
  }[]
}

function getBackgroundImage(srcSet = '') {
  const imageSet = srcSet
    .split(', ')
    .map((str) => {
      const [url, dpi] = str.split(' ')
      return `url("${url}") ${dpi}`
    })
    .join(', ')

  return `image-set(${imageSet})`
}

export default function Section4({
  bgAlt,
  bgSrc,
  lists,
  title,
}: ISection4Props) {
  const {
    props: { srcSet },
  } = getImageProps({
    alt: bgAlt,
    width: 1920,
    height: 720,
    src: bgSrc,
    priority: true,
  })
  const backgroundImage = getBackgroundImage(srcSet)

  return (
    <div
      className="bg-no-repeat"
      style={{
        backgroundImage,
        backgroundSize: '100%,100%',
        backgroundPosition: 'center,center',
      }}
    >
      <SectionContainer>
        <div className="relative w-full text-white">
          <div
            className={clsx(
              "before:content-[''] before:absolute before:top-0 before:left-0 z-0 before:w-[98%] before:border-r-[85px] ",
              `before:border-b-[705px] before:border-transparent before:border-b-[#0DA782]`,
            )}
          >
            <div className="relative z-[1] p-14">
              <h2 className="font-bold text-5xl text-center text-white">
                {title}
              </h2>

              <ul className="mt-14 mx-auto space-y-8">
                {lists.map((item, index) => (
                  <li className="flex items-center space-x-8" key={index}>
                    <picture>
                      <img
                        src={item.iconSrc}
                        alt={item.iconAlt}
                        className="w-20 h-20"
                      />
                    </picture>

                    <div className="flex-1">
                      <h3 className="text-4xl font-bold">0{index + 1}</h3>
                      <p className="text-xl">{item.title}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-8 text-center">
                <PrimaryButton href='/about' className='!bg-white !text-black hover:underline !px-24 !py-3 !text-lg'>About</PrimaryButton>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
      {/* <Image
        width={1920}
        height={720}
        src={bgSrc}
        alt={bgAlt}
        className="object-cover w-full h-full max-h-[600px]"
      /> */}
    </div>
  )
}
