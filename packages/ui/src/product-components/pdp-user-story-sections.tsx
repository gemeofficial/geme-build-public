import { ReactNode, useState } from 'react'
import type { IImgProps } from '../image'
import Image from 'next/image'
import { SectionDescription, SectionTitle } from '../ui-components'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import clsx from 'clsx'
import { SwiperEvents } from 'swiper/types'

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
}

function PdpUserStoryTeamSections({
  title,
  description,
  people,
}: IPdpUserStoryTeamSectionsProps) {
  const [height, setHeight] = useState(300)

  function onChange() {
    const currentSwiperSlide = document.querySelector(
      '.swiper-slide-active .swiper-slide-box',
    )

    const currentSwiperHeight =
      currentSwiperSlide?.getBoundingClientRect().height || 270

    setHeight(currentSwiperHeight + 30)
  }

  return (
    <section className="px-4 py-8 mx-auto md:px-8 md:py-16 xl:py-[80px] xl:max-w-7xl ">
      {title && <SectionTitle>{title}</SectionTitle>}
      {description && (
        <SectionDescription className="mt-4 md:mt-6">
          {description}
        </SectionDescription>
      )}

      <Swiper
        style={{
          height: height + 'px',
        }}
        className="select-none !w-full lg:!h-[440px] mt-6 md:mt-8 lg:mt-12 rounded-xl bg-gray-100 transition-all duration-200"
        // onSwiper={onSwiperHandle}
        onTransitionEnd={onChange}
        modules={[Pagination]}
        pagination={{
          type: 'bullets',
          renderBullet: (i, className) =>
            `<span class="${className} !h-8 !w-1 !rounded-sm transition-all duration-500 !my-2 !mr-1 lg:!mr-2"></span>`,
          bulletActiveClass: '!bg-v2311-primary !opacity-100',
          clickable: true,
        }}
        speed={500}
        direction="vertical"
        grabCursor
        loop
        mousewheel={{
          forceToAxis: true,
        }}
      >
        {people?.map((person, idx) => (
          <SwiperSlide key={person.id}>
            <div className="pl-4 pr-6 py-4 lg:pl-8 lg:pr-12 lg:py-8 h-full overflow-hidden">
              <div
                className={clsx(
                  'hidden lg:flex justify-between items-stretch h-full lg:gap-16 xl:gap-20',
                  idx % 2 === 0 ? 'flex-row-reverse' : '',
                )}
              >
                {person.image?.src?.startsWith('https') ? (
                  <img
                    src={person.image?.src || ''}
                    alt={person.image?.alt || ''}
                    loading="lazy"
                    className="h-full rounded-xl object-cover w-[30%]"
                  />
                ) : (
                  <Image
                    src={person.image?.src || ''}
                    alt={person.image?.alt || ''}
                    width={400}
                    height={500}
                    className="h-full rounded-xl object-cover w-[30%]"
                  />
                )}
                <div className="flex flex-col justify-between gap-4 flex-1">
                  <div className="flex flex-col gap-4">
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

              <div className="swiper-slide-box lg:hidden flex flex-col gap-4">
                <div className="flex items-stretch flex-row gap-4 md:gap-8">
                  {person.image?.src?.startsWith('https') ? (
                    <img
                      src={person.image?.src || ''}
                      alt={person.image?.alt || ''}
                      loading="lazy"
                      className="min-h-36 h-full rounded-xl object-cover w-32"
                    />
                  ) : (
                    <Image
                      src={person.image?.src || ''}
                      alt={person.image?.alt || ''}
                      width={400}
                      height={500}
                      className="min-h-36 h-full rounded-xl object-cover w-32"
                    />
                  )}
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
