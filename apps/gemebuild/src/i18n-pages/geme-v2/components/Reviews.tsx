import clsx from 'clsx'
import Image from 'next/image'
import { ReactNode } from 'react'
import { SectionContainer, SectionDescription, SectionTitle } from 'ui'
import ImageZoomViewer from 'ui/src/client-components/ImageZoomViewer'

export interface IReviewsProps {
  featuredTestimonial: Testimonial
  testimonials: Testimonial[][][]
  mobileTestimonials: Testimonial[]
  subTitle: string
  title: string
}

interface Author {
  name: string
  avatar?: string
  role?: string
  logoUrl?: string
}

interface Testimonial {
  body: ReactNode
  author: Author
  imageUrl?: string
}

export default function Reviews({
  subTitle,
  title,
  featuredTestimonial,
  testimonials,
  mobileTestimonials,
}: IReviewsProps) {
  return (
    <div className="relative isolate my-8 sm:my-12 sm:pt-32">
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
        <svg x="50%" y={0} className="overflow-visible fill-gray-50">
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
            className="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-[#3b7f6f] to-[#45b83d]"
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
            className="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-[#3b7f6f] to-[#45b83d] xl:ml-0 xl:mr-[calc(50%-12rem)]"
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-xl sm:text-center">
            <h2 className="text-lg font-semibold leading-8 tracking-tight text-v2311-primary">
              {subTitle}
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {title}
            </p>
          </div>
          <ImageZoomViewer
            toolbar={false}
            navbar={false}
            loop={false}
            keyboard={false}
          >
            <div className="hidden sm:block">
              <GridItemsView
                featuredTestimonial={featuredTestimonial}
                testimonials={testimonials}
              />
            </div>
            <div className="sm:hidden">
              <MobileItemsView mobileTestimonials={mobileTestimonials} />
            </div>
          </ImageZoomViewer>
        </div>
      </div>
    </div>
  )
}

function GridItemsView({
  featuredTestimonial,
  testimonials,
}: {
  featuredTestimonial: Testimonial
  testimonials: Testimonial[][][]
}) {
  return (
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
              featuredTestimonial.author.avatar ||
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
      {testimonials.map((columnGroup, columnGroupIdx) => (
        <div
          key={columnGroupIdx}
          className="space-y-8 xl:contents xl:space-y-0"
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
                'space-y-8',
              )}
            >
              <Item testimonials={column} />
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

function MobileItemsView({
  mobileTestimonials,
}: {
  mobileTestimonials: Testimonial[]
}) {
  return (
    <div className="flex flex-col gap-8 mt-10">
      <Item testimonials={mobileTestimonials} />
    </div>
  )
}

function Item({ testimonials }: { testimonials: Testimonial[] }) {
  return (
    <>
      {testimonials.map((testimonial, index) => (
        <figure
          key={testimonial.author.name + index}
          className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5 relative"
        >
          <blockquote className="text-gray-900">
            <p>{`“${testimonial.body}”`}</p>
          </blockquote>
          <figcaption className="mt-6 flex items-center gap-x-4">
            {testimonial.author.avatar && (
              <Image
                width={128}
                height={128}
                alt={`${testimonial.author.name} head`}
                src={testimonial.author.avatar}
                className="h-10 w-10 object-cover rounded-full bg-gray-50"
              />
            )}

            {!testimonial.author.avatar && (
              <svg
                className="h-10 w-10"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="8696"
              >
                <path
                  d="M956.696128 512.75827c0 245.270123-199.054545 444.137403-444.615287 444.137403-245.538229 0-444.522166-198.868303-444.522166-444.137403 0-188.264804 117.181863-349.108073 282.675034-413.747255 50.002834-20.171412 104.631012-31.311123 161.858388-31.311123 57.297984 0 111.87909 11.128455 161.928996 31.311123C839.504032 163.650197 956.696128 324.494489 956.696128 512.75827L956.696128 512.75827M341.214289 419.091984c0 74.846662 38.349423 139.64855 94.097098 171.367973 23.119557 13.155624 49.151443 20.742417 76.769454 20.742417 26.64894 0 51.773154-7.096628 74.286913-19.355837 57.06467-31.113625 96.650247-96.707552 96.650247-172.742273 0-105.867166-76.664054-192.039781-170.936137-192.039781C417.867086 227.053226 341.214289 313.226864 341.214289 419.091984L341.214289 419.091984M513.886977 928.114163c129.883139 0 245.746984-59.732429 321.688583-153.211451-8.971325-73.739445-80.824817-136.51314-182.517917-167.825286-38.407752 34.55091-87.478354 55.340399-140.989081 55.340399-54.698786 0-104.770182-21.907962-143.55144-57.96211-98.921987 28.234041-171.379229 85.823668-188.368158 154.831344C255.507278 861.657588 376.965537 928.114163 513.886977 928.114163L513.886977 928.114163M513.886977 928.114163 513.886977 928.114163z"
                  fill="#afafaf"
                  p-id="8697"
                ></path>
              </svg>
            )}
            <div className="flex-1">
              <div className="font-semibold">{testimonial.author.name}</div>
              {testimonial.author?.role && (
                <div className="text-gray-600 leading-4 text-xs">
                  {testimonial.author.role}
                </div>
              )}
            </div>
          </figcaption>

          {testimonial.imageUrl && (
            <Image
              width={1080}
              height={720}
              alt={`${testimonial.author.name} imageUrl`}
              src={testimonial.imageUrl}
              className="w-full h-full absolute inset-0 z-[2] opacity-0"
            />
          )}
        </figure>
      ))}
    </>
  )
}
