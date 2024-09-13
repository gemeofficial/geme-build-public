// components/Section2.tsx
import clsx from 'clsx'
import Image from 'next/image'
import { Fragment, ReactNode } from 'react'
import { SectionContainer, SectionDescription, SectionTitle } from 'ui'

interface IImage {
  src: string
  alt: string
  title: string
}

export interface ISection3Props {
  title: string
  description: ReactNode
  imageList: IImage[]
}

export default function Section3({
  description,
  title,
  imageList,
}: ISection3Props) {
  return (
    <SectionContainer className="relative py-16 bg-white" compact>
      <SectionTitle>{title}</SectionTitle>
      <SectionDescription className="mt-4 md:mt-6">
        {description}
      </SectionDescription>

      <div className="flex flex-col md:flex-row items-center justify-between mt-6 md:mt-8">
        {imageList.map((item, index) => (
          <Fragment key={index}>
            <div className='w-full md:w-auto'>
              <Image
                width={800}
                height={800}
                src={item.src}
                alt={item.alt}
                className={clsx(
                  ' w-full h-56 md:w-[144px] md:h-[144px] lg:w-60 lg:h-60 xl:w-80 xl:h-80 rounded-lg mx-auto',
                  index === 1 ? 'object-contain' : 'object-cover',
                )}
              />
              <h3 className="lg:text-lg py-2 text-center">{item.title}</h3>
            </div>
            {index < imageList.length - 1 && (
              <svg
                className="w-12 lg:w-16 xl:w-20 text-v2311-primary rotate-90 md:rotate-0 my-4 md:my-0"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="5061"
                fill="currentColor"
              >
                <path
                  d="M949.727 468.267l-0.712-0.748L567.008 88.904A32 32 0 0 0 544 79.145c-17.496 0-31.713 14.042-31.996 31.471l-0.004 0.53V240H144.014c-34.993 0-63.426 28.084-64 62.942V720c0 34.993 28.084 63.426 62.942 63.991l1.058 0.009H512v128.855a32 32 0 0 0 9.76 23.007c12.579 12.16 32.56 11.946 44.877-0.389l0.37-0.377L949.016 556.48c23.74-24.558 23.978-63.37 0.712-88.214zM903.001 512L576 833.711V720H144.014V304H576V190.29L903.001 512z"
                  p-id="5062"
                ></path>
              </svg>
            )}
          </Fragment>
        ))}
      </div>
    </SectionContainer>
  )
}
