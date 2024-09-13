import clsx from 'clsx'
import { getImageProps } from 'next/image'
import { SectionContainer, SectionTitle } from 'ui'
import PrimaryButton from 'ui/src/ui-components/PrimaryButton'

export interface IBgContentSectionProps {
  title: string
  bgSrc: string
  bgAlt: string
  buttonText: string

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

export default function BgContentSection({
  bgAlt,
  bgSrc,
  lists,
  title,
  buttonText,
}: IBgContentSectionProps) {
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
    <>
      <div
        className="bg-no-repeat bg-cover hidden md:block"
        style={{
          backgroundImage,
          backgroundPosition: 'center,center',
        }}
      >
        <SectionContainer className="!px-0 md:!px-8">
          <div className="relative w-full text-white">
            <div
              className={clsx(
                "before:content-[''] before:absolute before:top-0 before:left-0 z-0 before:w-[98%] before:border-r-[85px] ",
                `before:border-transparent before:border-b-[#0DA782]`,
                'md:before:border-b-[665px] lg:before:border-b-[650px] xl:before:border-b-[705px]',
              )}
            >
              <div className="relative z-[1] md:p-14">
                <SectionTitle className="!font-bold xl:!text-5xl !text-center text-white">
                  {title}
                </SectionTitle>

                <ul className="mt-4 md:mt-6 lg:mt-14 mx-auto space-y-8">
                  {lists.map((item, index) => (
                    <li className="flex items-center gap-8" key={index}>
                      <picture>
                        <img
                          src={item.iconSrc}
                          alt={item.iconAlt}
                          className="w-10 h-10 md:w-14 md:h-14 xl:w-20 xl:h-20"
                        />
                      </picture>

                      <div className="flex-1 flex md:flex-col gap-4 md:gap-0">
                        <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold">
                          0{index + 1}
                        </h3>
                        <p className="text-xl">{item.title}</p>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 text-center">
                  <PrimaryButton
                    href="/about"
                    className="!bg-white !text-black hover:underline !px-24 !py-3 !text-lg"
                  >
                    {buttonText}
                  </PrimaryButton>
                </div>
              </div>
            </div>
          </div>
        </SectionContainer>
      </div>

      <SectionContainer compact className="bg-gray-50 md:hidden">
        <SectionTitle>{title}</SectionTitle>
        <ul className="mt-6 grid grid-cols-2 gap-4 gap-y-8">
          {lists.map((item, index) => (
            <li className="flex flex-col items-center gap-2" key={index}>
              <picture>
                <img
                  src={item.iconSrc}
                  alt={item.iconAlt}
                  className="w-14 h-14"
                />
              </picture>

              <p className="text-sm text-center">{item.title}</p>
            </li>
          ))}
        </ul>

        <div className="mt-8 text-center">
          <PrimaryButton
            href="/about"
            className="!bg-white !text-black !py-2 !px-6 !rounded-full !border-2 !text-base !border-v2311-primary !font-semibold hover:!bg-v2311-primary hover:!text-white transition-all"
          >
            {buttonText}
          </PrimaryButton>
        </div>
      </SectionContainer>
    </>
  )
}
