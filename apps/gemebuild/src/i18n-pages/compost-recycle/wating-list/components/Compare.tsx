import clsx from 'clsx'
import Image from 'next/image'
import { SectionContainer, SectionDescription, SectionTitle } from 'ui'

export interface ICompareProps {
  title: string
  description: string
  items: {
    imageUrl: string
    title: string
    features: string[]
    type: 'good' | 'bad'
  }[]
}

export default function Compare({ title, description, items }: ICompareProps) {
  return (
    <SectionContainer compact>
      <SectionTitle className="!text-[#333] md:text-center">
        {title}
      </SectionTitle>
      <SectionDescription className="mt-4 md:mt-6 md:text-center">
        {description}
      </SectionDescription>

      <div className="flex items-stretch max-w-[800px] mx-auto mt-8 md:mt-12">
        {items.map((item, index) => (
          <div
            className={clsx(
              'max-w-[400px] w-[50%] flex flex-col items-center gap-4 md:gap-6 border-black',
              index === 0
                ? 'rounded-l-xl border'
                : 'rounded-r-xl border border-l-0',
            )}
            key={index}
          >
            <Image
              width={500}
              height={500}
              src={item.imageUrl}
              alt={item.title}
              className="object-cover w-32 h-40 md:w-40 md:h-48 xl:w-[320px] xl:h-[360px]"
            />
            <div
              className={clsx(
                ' text-lg md:text-2xl xl:text-3xl',
                index === 0 ? 'text-v2311-primary' : '',
              )}
            >
              {item.title}
            </div>
            <ul className="mb-4">
              {item.features.map((iten) => (
                <li className="flex items-center px-4" key={iten}>
                  {item.type === 'good' && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      className="w-8 md:w-10 xl:w-12 text-v2311-primary min-w-8"
                    >
                      <g stroke="#fff">
                        <path
                          strokeMiterlimit="10"
                          d="M10 15.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z"
                        ></path>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6.757 10.059 8.88 12.18l4.242-4.242"
                        ></path>
                      </g>
                    </svg>
                  )}
                  {item.type === 'bad' && (
                    <svg
                      className="w-5 md:w-6 xl:w-8 text-red-600 mr-2 md:mr-3 min-w-5"
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="5973"
                      fill="currentColor"
                    >
                      <path
                        d="M648.8 675c-6.9 0-13.8-2.6-19.1-7.9L358.1 395.4c-10.5-10.5-10.5-27.6 0-38.2 10.5-10.5 27.6-10.5 38.2 0L668 628.9c10.5 10.5 10.5 27.6 0 38.2-5.3 5.2-12.2 7.9-19.2 7.9z"
                        p-id="5974"
                      ></path>
                      <path
                        d="M377.2 675c-6.9 0-13.8-2.6-19.1-7.9-10.5-10.5-10.5-27.6 0-38.2l271.7-271.7c10.5-10.5 27.6-10.5 38.2 0 10.5 10.5 10.5 27.6 0 38.2L396.2 667c-5.2 5.3-12.1 8-19 8z"
                        p-id="5975"
                      ></path>
                      <path
                        d="M511.3 858.7c-47 0-92.6-9.2-135.6-27.4-41.5-17.5-78.7-42.7-110.7-74.6s-57-69.2-74.6-110.7c-18.2-43-27.4-88.6-27.4-135.6s9.2-92.6 27.4-135.6c17.5-41.5 42.7-78.7 74.6-110.7 32-32 69.2-57.1 110.7-74.6 43-18.2 88.6-27.4 135.6-27.4s92.6 9.2 135.6 27.4c41.5 17.5 78.7 42.7 110.7 74.6 32 32 57.1 69.2 74.6 110.7 18.2 43 27.4 88.6 27.4 135.6 0 48.8-9.9 96.1-29.5 140.4-6 13.6-22 19.8-35.6 13.8-13.6-6-19.8-22-13.8-35.6 16.5-37.4 24.9-77.3 24.9-118.6 0-162.3-132-294.3-294.3-294.3S217 348.1 217 510.4s132 294.3 294.3 294.3c64 0 124.8-20.2 175.8-58.3 11.9-8.9 28.9-6.5 37.8 5.5 8.9 11.9 6.5 28.9-5.5 37.8-60.4 45.2-132.4 69-208.1 69z"
                        p-id="5976"
                      ></path>
                    </svg>
                  )}
                  <span
                    className={clsx(
                      'text-sm md:text-base inline-block pb-2 md:pb-0',
                      item.type === 'bad'
                        ? 'h-full md:leading-10 xl:leading-[48px] font-light'
                        : '',
                    )}
                  >
                    {iten}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionContainer>
  )
}
