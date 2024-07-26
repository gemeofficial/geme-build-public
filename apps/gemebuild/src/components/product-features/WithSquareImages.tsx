// FIXME: next/link not work with next-intl, should use components/link instead.
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { SectionTitle } from 'ui'
import classNames from 'ui/src/lib/classNames'

function WithSquareImages({
  heading,
  title,
  description,
  features,
  grayBackground = false,
  textColorClassName,
}: IWithSquareImagesProps) {
  return (
    <div className={classNames(grayBackground ? 'bg-gray-50' : 'bg-white')}>
      <div className="mx-auto max-w-2xl py-16 px-4 lg:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        {heading && (
          <h2 id="features-heading" className="font-medium text-gray-500">
            {heading}
          </h2>
        )}
        {title && (
          <SectionTitle
            className={classNames(
              'mt-2 text-3xl sm:text-4xl',
              textColorClassName || '',
            )}
          >
            {title}
          </SectionTitle>
        )}
        {description && <p className="mt-4 text-gray-500">{description}</p>}

        <div className="mt-4 grid grid-cols-2 items-start gap-y-16 gap-x-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">
          {features.map(
            ({
              name,
              title,
              description: featureDesc,
              imageSrc,
              imageAlt,
              readMoreLinkHref,
              readMoreLinkText,
            }) => (
              <div key={name} className="flex flex-col-reverse px-0 py-0">
                {title && (
                  <div className="mt-4">
                    <h3
                      className={classNames(
                        'text-lg font-semibold  text-v2311-primary',
                        textColorClassName || '',
                      )}
                    >
                      {title}
                    </h3>
                    {featureDesc != null && (
                      <p className="mt-2 text-xs xl:text-sm text-[#568477]">
                        {featureDesc}
                      </p>
                    )}

                    {/* customized bottom link which is refered to: https://tailwindui.com/components/marketing/sections/blog-sections#component-3c03ccd20ac3049cac17806170b312ca */}
                    {readMoreLinkHref != null && (
                      <div className="mt-3">
                        <Link
                          href={readMoreLinkHref}
                          passHref
                          className="text-base font-semibold text-emerald-600 hover:text-emerald-500"
                        >
                          {readMoreLinkText}
                        </Link>
                      </div>
                    )}
                  </div>
                )}
                <div
                  className={classNames(
                    'aspect-w-1 aspect-h-1 overflow-hidden rounded-2xl ',
                    textColorClassName ? '' : 'border-2 border-[#8ec597]',
                  )}
                >
                  <Image
                    src={imageSrc}
                    alt={imageAlt}
                    width={280}
                    height={280}
                    className={clsx(
                      'object-cover object-center ',
                      name == '1'
                        ? ' scale-75 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'
                        : '',
                    )}
                  />
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  )
}

export interface IWithSquareImagesProps {
  heading?: string
  title?: string
  description?: string
  features: {
    name: string
    title?: string
    description?: string
    imageSrc: string
    imageAlt: string
    readMoreLinkText?: string
    readMoreLinkHref?: string
  }[]
  grayBackground?: boolean
  textColorClassName?: string
}

export default WithSquareImages
