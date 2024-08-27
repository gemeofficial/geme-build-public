'use client'
import clsx from 'clsx'
import Image from 'next/image'
import { ReactNode, useEffect, useState } from 'react'
import { SectionContainer, SectionDescription, SectionTitle } from 'ui'

export interface IReviewsProps {
  featuredTestimonial: Testimonial
  testimonials: Testimonial[][][]
}

interface Author {
  name: string
  imageUrl?: string
  role?: string
  logoUrl?: string
}

interface Testimonial {
  body: ReactNode
  author: Author
}

let index = 0
function getDefaultAvatar(random = false) {
  if (random) {
    const i = Math.floor(Math.random() * 5) + 1
    return `/assets/images/geme-v2/default-avatar/${i}.svg`
  }
  index++
  return `/assets/images/geme-v2/default-avatar/${(index % 5) + 1}.svg`
}

export default function Reviews({
  featuredTestimonial,
  testimonials,
}: IReviewsProps) {
  const [list, setList] = useState<Testimonial[][][]>([])

  useEffect(
    () => {
      function initHandler() {
        if (window.innerWidth < 625) {
          const copyTestimonials: IReviewsProps['testimonials'] = JSON.parse(
            JSON.stringify(testimonials),
          )
          if (copyTestimonials[0]?.[1]) {
            copyTestimonials[0][1] = [featuredTestimonial]
          }
          setList(copyTestimonials)
        } else {
          setList(testimonials)
        }
      }

      initHandler()

      window.addEventListener('resize', initHandler)

      return () => window.removeEventListener('resize', initHandler)
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  )

  return (
    <SectionContainer compact>
      <SectionTitle>What Real Users Say</SectionTitle>
      <SectionDescription className="mt-4">
        You might want to click and see the detail review, to see how our
        customers feel about our product, you can see the real product review
        and our customer service as well.
      </SectionDescription>

      <div className="relative isolate mt-8 pt-1">
        <svg
          aria-hidden="true"
          className="absolute inset-0 -z-10 hidden h-full w-full stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)] sm:block"
        >
          <defs>
            <pattern
              x="50%"
              y={0}
              id="55d3d46d-692e-45f2-becd-d8bdc9344f45"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={0} className="overflow-visible fill-v2311-primary/10">
            <path
              d="M-200.5 0h201v201h-201Z M599.5 0h201v201h-201Z M399.5 400h201v201h-201Z M-400.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            fill="url(#55d3d46d-692e-45f2-becd-d8bdc9344f45)"
            width="100%"
            height="100%"
            strokeWidth={0}
          />
        </svg>
        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl"
          >
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-v2311-bg-dark-green to-v2311-primary"
            />
          </div>
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-8 opacity-25 blur-3xl xl:justify-end"
          >
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-v2311-primary to-2311from-v2311-bg-dark-green xl:ml-0 xl:mr-[calc(50%-12rem)]"
            />
          </div>
          <div className="mx-auto max-w-7xl md:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
              <figure className="col-span-2 hidden sm:block sm:rounded-2xl sm:bg-white sm:shadow-lg sm:ring-1 sm:ring-gray-900/5 xl:col-start-2 xl:row-end-1">
                <blockquote className="p-12 text-xl font-semibold leading-8 tracking-tight text-gray-900">
                  <p>{`“${featuredTestimonial.body}”`}</p>
                </blockquote>
                <figcaption className="flex items-center gap-x-4 border-t border-gray-900/10 px-6 py-4">
                  <Image
                    width={128}
                    height={128}
                    alt={`${featuredTestimonial.author.name} head`}
                    src={
                      featuredTestimonial.author.imageUrl ||
                      '/assets/images/geme-v2/default-avatar/3.svg'
                    }
                    className="h-10 w-10 object-cover flex-none rounded-full bg-gray-50"
                  />
                  <div className="flex-auto">
                    <div className="font-semibold">
                      {featuredTestimonial.author.name}
                    </div>
                    {featuredTestimonial.author?.role && (
                      <div className="text-gray-600">
                        {featuredTestimonial.author.role}
                      </div>
                    )}
                  </div>
                  {featuredTestimonial.author.logoUrl && (
                    <Image
                      width={512}
                      height={264}
                      alt={`${featuredTestimonial.author.name} logo`}
                      src={featuredTestimonial.author.logoUrl}
                      className="h-10 w-auto flex-none"
                    />
                  )}
                </figcaption>
              </figure>
              {list.map((columnGroup, columnGroupIdx) => (
                <div
                  key={columnGroupIdx}
                  className={clsx(
                    'xl:contents xl:space-y-0',
                    columnGroupIdx === 1 ? '' : 'space-y-8 ',
                  )}
                >
                  {columnGroup.map((column, columnIdx) => (
                    <div
                      key={columnIdx}
                      className={clsx(
                        (columnGroupIdx === 0 && columnIdx === 0) ||
                          (columnGroupIdx === testimonials.length - 1 &&
                            columnIdx === columnGroup.length - 1)
                          ? 'xl:row-span-2'
                          : 'xl:row-start-1',
                        columnGroupIdx === 1 && columnIdx === 0
                          ? 'hidden sm:block'
                          : '',
                        'space-y-8',
                      )}
                    >
                      {column.map((testimonial, index) => (
                        <figure
                          key={testimonial.author.name + index}
                          className={clsx(
                            'rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5',
                            index !== 0 ? 'hidden sm:block' : '',
                          )}
                        >
                          <blockquote className="text-gray-900">
                            <p>{`“${testimonial.body}”`}</p>
                          </blockquote>
                          <figcaption className="mt-6 flex items-center gap-x-4">
                            <Image
                              width={128}
                              height={128}
                              alt={`${testimonial.author.name} head`}
                              src={
                                testimonial.author.imageUrl ||
                                getDefaultAvatar()
                              }
                              className="h-10 w-10 object-cover rounded-full bg-gray-50"
                            />
                            <div className="flex-1">
                              <div className="font-semibold">
                                {testimonial.author.name}
                              </div>
                              {testimonial.author?.role && (
                                <div className="text-gray-600 leading-4">
                                  {testimonial.author.role}
                                </div>
                              )}
                            </div>
                          </figcaption>
                        </figure>
                      ))}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}
