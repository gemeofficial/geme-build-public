'use client'

import { ReactNode } from 'react'
import type { IImgProps } from '../image'
import Image from 'next/image'
import { SectionDescription, SectionTitle } from '../ui-components'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import clsx from 'clsx'
import { LocaleType } from '..'

interface IPdpUserStoryTeamSectionsExampleProps {
  title?: ReactNode
  description?: ReactNode
  people: {
    id: number
    name?: string
    role?: string
    imageUrl?: string
    bio?: ReactNode
  }[]
}

const pdpUserStoryTeamSectionsExampleProps: IPdpUserStoryTeamSectionsExampleProps =
  {
    title: 'Meet our leadership',
    description: (
      <>
        We’re a dynamic group of individuals who are passionate about what we do
        and dedicated to delivering the best results for our clients.
      </>
    ),
    people: [
      {
        id: 1,
        name: 'Leonard Krasner',
        role: 'Senior Designer',
        imageUrl:
          'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
        bio: 'Quia illum aut in beatae. Possimus dolores aliquid accusantium aut in ut non assumenda. Enim iusto molestias aut deleniti eos aliquid magnam molestiae. At et non possimus ab. Magni labore molestiae nulla qui.',
      },
      {
        id: 2,
        name: 'Leonard Krasner',
        role: 'Senior Designer',
        imageUrl:
          'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
        bio: 'Quia illum aut in beatae. Possimus dolores aliquid accusantium aut in ut non assumenda. Enim iusto molestias aut deleniti eos aliquid magnam molestiae. At et non possimus ab. Magni labore molestiae nulla qui.',
      },
      {
        id: 3,
        name: 'Leonard Krasner',
        role: 'Senior Designer',
        imageUrl:
          'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
        bio: 'Quia illum aut in beatae. Possimus dolores aliquid accusantium aut in ut non assumenda. Enim iusto molestias aut deleniti eos aliquid magnam molestiae. At et non possimus ab. Magni labore molestiae nulla qui.',
      },
      {
        id: 4,
        name: 'Leonard Krasner',
        role: 'Senior Designer',
        imageUrl:
          'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
        bio: 'Quia illum aut in beatae. Possimus dolores aliquid accusantium aut in ut non assumenda. Enim iusto molestias aut deleniti eos aliquid magnam molestiae. At et non possimus ab. Magni labore molestiae nulla qui.',
      },
    ],
  }

// Copied from tailwindui without modification
// cf: https://tailwindui.com/components/marketing/sections/team-sections#component-47734c5175a01916ce046c9ad77b3aaf
function PdpUserStoryTeamSectionsExample({
  title,
  description,
  people,
}: IPdpUserStoryTeamSectionsExampleProps) {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {title}
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">{description}</p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:max-w-4xl lg:gap-x-8 xl:max-w-none"
        >
          {people.map((person, index) => (
            <li key={person.id} className="flex flex-col gap-6 xl:flex-row">
              <Image
                className="aspect-[4/5] w-52 flex-none rounded-2xl object-cover"
                width={400}
                height={500}
                src={person.imageUrl || ''}
                alt={`user story avatar${index}`}
              />
              <div className="flex-auto">
                <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">
                  {person.name}
                </h3>
                <p className="text-base leading-7 text-gray-600">
                  {person.role}
                </p>
                <p className="mt-6 text-base leading-7 text-gray-600">
                  {person.bio}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

interface IPdpUserStoryTeamSectionsProps {
  title?: ReactNode
  description?: ReactNode
  people: {
    id: number
    name?: string
    role?: string
    imageUrl?: string
    image?: IImgProps
    quote?: string
    mobileQuote?: ReactNode
    bio?: ReactNode
  }[]
  locale: LocaleType
}

const pdpUserStoryTeamSectionsProps: IPdpUserStoryTeamSectionsProps = {
  title: 'Meet our leadership',
  description: (
    <>
      We&apos;re a dynamic group of individuals who are passionate about what we
      do and dedicated to delivering the best results for our clients.
    </>
  ),
  people: [
    {
      id: 1,
      name: 'Leonard Krasner',
      role: 'Senior Designer',
      image: {
        src: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
        alt: 'Leonard Krasner',
      },
      bio: 'Quia illum aut in beatae. Possimus dolores aliquid accusantium aut in ut non assumenda. Enim iusto molestias aut deleniti eos aliquid magnam molestiae. At et non possimus ab. Magni labore molestiae nulla qui.',
    },
    {
      id: 2,
      name: 'Leonard Krasner',
      role: 'Senior Designer',
      image: {
        src: 'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
        alt: 'Leonard Krasner',
      },
      bio: 'Quia illum aut in beatae. Possimus dolores aliquid accusantium aut in ut non assumenda. Enim iusto molestias aut deleniti eos aliquid magnam molestiae. At et non possimus ab. Magni labore molestiae nulla qui.',
    },
    {
      id: 3,
      name: 'Leonard Krasner',
      role: 'Senior Designer',
      image: {
        src: 'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
        alt: 'Leonard Krasner',
      },
      bio: 'Quia illum aut in beatae. Possimus dolores aliquid accusantium aut in ut non assumenda. Enim iusto molestias aut deleniti eos aliquid magnam molestiae. At et non possimus ab. Magni labore molestiae nulla qui.',
    },
    {
      id: 4,
      name: 'Leonard Krasner',
      role: 'Senior Designer',
      image: {
        src: 'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
        alt: 'Leonard Krasner',
      },
      bio: 'Quia illum aut in beatae. Possimus dolores aliquid accusantium aut in ut non assumenda. Enim iusto molestias aut deleniti eos aliquid magnam molestiae. At et non possimus ab. Magni labore molestiae nulla qui.',
    },
  ],
  locale: 'en',
}

function PdpUserStoryTeamSections({
  title,
  description,
  people,
  locale,
}: IPdpUserStoryTeamSectionsProps) {
  return (
    <section className="px-4 py-8 mx-auto md:px-8 md:py-16 xl:py-[80px] xl:max-w-7xl ">
      {title && <SectionTitle>{title}</SectionTitle>}
      {description && (
        <SectionDescription className="mt-4 md:mt-6">
          {description}
        </SectionDescription>
      )}

      <Swiper
        className={clsx(
          'select-none !w-full xl:h-[380px] mt-6 md:mt-8 lg:mt-12 rounded-xl bg-gray-100 transition-all duration-200',
          locale === 'en'
            ? '!h-[360px] md:!h-[290px] lg:!h-[380px]'
            : '!h-[400px] md:!h-[320px] lg:!h-[440px]',
        )}
        modules={[Pagination]}
        pagination={{
          type: 'bullets',
          renderBullet: (i, className) =>
            `<span class="${className} !h-1 !w-8 !rounded-sm transition-all duration-500"></span>`,
          bulletActiveClass: '!bg-v2311-primary !opacity-100',
          clickable: true,
        }}
        speed={500}
        // direction="vertical"
        grabCursor
        // loop
        mousewheel={{
          forceToAxis: true,
        }}
      >
        {people?.map((person, idx) => (
          <SwiperSlide key={person.id}>
            <div className="pl-4 pr-6 py-4 lg:pl-8 lg:pr-12 lg:py-8 h-full">
              <div
                className={clsx(
                  'hidden lg:flex justify-between items-stretch h-full lg:gap-16 xl:gap-20',
                  idx % 2 === 0 ? 'flex-row-reverse' : '',
                )}
              >
                <ImageComponent image={person.image} className="w-[30%]" />
                <div
                  className={clsx(
                    'flex flex-col justify-between gap-4 overflow-hidden',
                    idx < 2 ? 'lg:px-8' : '',
                  )}
                >
                  <div className="flex flex-col gap-2">
                    <h3 className=" v2311-font-h2 text-v2311-fg-dark-black">
                      {person.name}
                    </h3>
                    <p className=" v2311-font-h3 text-v2311-fg-black">
                      {person.role}
                    </p>

                    {person.quote && (
                      <p className=" v2311-font-body text-gray-400">
                        "{person.quote}"
                      </p>
                    )}
                  </div>
                  <p className=" v2311-font-body text-v2311-fg-black">
                    {person.bio}
                  </p>
                </div>
              </div>

              <div className="swiper-slide-box lg:hidden h-full flex flex-col justify-between gap-4 overflow-hidden">
                <div className="flex items-stretch flex-row gap-4 md:gap-8">
                  <ImageComponent image={person.image} className="w-32 h-40" />

                  <div className="flex-auto">
                    <h3 className="v2311-font-h2 text-v2311-fg-dark-black">
                      {person.name}
                    </h3>
                    <p className="!text-[14px] my-2 v2311-font-h3 text-v2311-fg-black">
                      {person.role}
                    </p>

                    {person.quote && (
                      <p className="!text-[14px] v2311-font-body text-gray-400">
                        <span className="md:hidden">
                          "{person.mobileQuote || person.quote}"
                        </span>
                        <span className="hidden md:inline-block">
                          "{person.quote}"
                        </span>
                      </p>
                    )}
                  </div>
                </div>
                <p className="v2311-font-body !text-[14px] text-v2311-fg-black">
                  {person.bio}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

function ImageComponent({
  image,
  className,
}: {
  image?: IImgProps
  className?: string
}) {
  return (
    <>
      {image?.src?.startsWith('https') ? (
        <img
          src={image?.src || ''}
          alt={image?.alt || ''}
          loading="lazy"
          className={clsx('rounded-xl object-cover', className)}
        />
      ) : (
        <Image
          src={image?.src || ''}
          alt={image?.alt || ''}
          width={400}
          height={500}
          className={clsx('rounded-xl object-cover', className)}
        />
      )}
    </>
  )
}

// 暂时先不使用点击展示更多
function ShowMore({ onClick }: { onClick: () => void }) {
  return (
    <div className="flex justify-end text-v2311-primary">
      <div
        className="flex items-center justify-end cursor-pointer hover:scale-110 transition-all"
        onClick={onClick}
      >
        <span className="text-sm">show more</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
          className="h-5 w-5 group-hover:text-gray-500"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          ></path>
        </svg>
      </div>
    </div>
  )
}

const EXAMPLE_PDP_USER_STORY_SECTIONS = {
  pdpUserStoryTeamSectionsExampleProps,
  pdpUserStoryTeamSectionsProps,
}

export {
  PdpUserStoryTeamSectionsExample,
  PdpUserStoryTeamSections,
  EXAMPLE_PDP_USER_STORY_SECTIONS,
}

export type {
  IPdpUserStoryTeamSectionsExampleProps,
  IPdpUserStoryTeamSectionsProps,
}
