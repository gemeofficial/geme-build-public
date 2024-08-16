import clsx from 'clsx'
import Image from 'next/image'
import ImageZoomViewer from '../client-components/ImageZoomViewer'
import { SectionTitle } from '../ui-components'

export interface IGemeV2ProductSection {
  productSectionTitle: string
  imageList: {
    src: string
    alt: string
    title: string
    desc: string
    link?: string
  }[]
}

export default function ProductSection({
  imageList,
  productSectionTitle,
}: IGemeV2ProductSection) {
  return (
    <div className="bg-gray-50 mt-6 md:mt-8 mx-auto max-w-7xl p-4 sm:p-8 lg:p-12">
      <SectionTitle>{productSectionTitle}</SectionTitle>
      <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
        {imageList.map((item, index) => (
          <div
            key={item.src + index}
            className={clsx(
              'group aspect-h-1 aspect-w-2 overflow-hidden rounded-lg',
              index === 0
                ? 'sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2'
                : 'sm:aspect-none sm:relative sm:h-full',
            )}
          >
            <Image
              width={560}
              height={index === 0 ? 560 : 264}
              alt={item.alt}
              src={item.src}
              className={clsx(
                'object-cover object-center group-hover:opacity-75',
                index === 0 ? '' : 'sm:absolute sm:inset-0 sm:h-full sm:w-full',
              )}
            />
            <div
              aria-hidden="true"
              className={clsx(
                'bg-gradient-to-b from-transparent to-black opacity-50',
                index === 0 ? '' : 'sm:absolute sm:inset-0',
              )}
            />
            <div
              className={clsx(
                'flex items-end p-1 xl:p-3 cursor-pointer',
                index === 0 ? '' : 'sm:absolute sm:inset-0',
              )}
            >
              <div>
                <h3 className="font-semibold text-white ">
                  <span className="absolute inset-0">
                    <ImageZoomViewer>
                      <picture>
                        <img
                          alt={item.alt}
                          src={item.src}
                          className="w-full h-full opacity-0"
                        />
                      </picture>
                    </ImageZoomViewer>
                  </span>
                  {item.title}
                </h3>
                <p aria-hidden="true" className="mt-1 text-sm text-white">
                  {item.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
