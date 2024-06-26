import { ReactNode } from 'react'
import type { IImgProps } from '../image'
import Image from 'next/image'
import { SectionDescription, SectionTitle } from '../ui-components'

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
    bio?: ReactNode
    quote?: string
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
  return (
    <section className="px-4 py-8 mx-auto md:px-8 md:py-16 xl:py-[80px] xl:max-w-7xl ">
      {title && <SectionTitle>{title}</SectionTitle>}
      {description && (
        <SectionDescription className="mt-4 md:mt-6">
          {description}
        </SectionDescription>
      )}
      <div className="mt-4 md:mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        {people?.map((person) => {
          return (
            <div
              style={{
                boxShadow:
                  '0 0px 10px 2px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
              }}
              key={person.id}
              className="shadow-md p-4 rounded-2xl"
            >
              <div className="flex md:flex-col xl:flex-row gap-4 md:gap-8">
                {person.image?.src?.startsWith('https') ? (
                  <img
                    src={person.image?.src || ''}
                    alt={person.image?.alt || ''}
                    loading="lazy"
                    className=" aspect-[4/5] rounded-2xl object-cover w-32 md:w-52"
                  />
                ) : (
                  <Image
                    src={person.image?.src || ''}
                    alt={person.image?.alt || ''}
                    width={400}
                    height={500}
                    className=" aspect-[4/5] rounded-2xl object-cover w-32 md:w-52"
                  />
                )}

                <div className="flex-auto">
                  <h3 className=" v2311-font-h2 text-v2311-fg-dark-black">
                    {person.name}
                  </h3>
                  <p className=" v2311-font-h3 text-v2311-fg-black mt-1 md:mt-2">
                    {person.role}
                  </p>

                  {person.quote && (
                    <p className=" v2311-font-body text-gray-400 mt-4 md:mt-8">
                      "{person.quote}"
                    </p>
                  )}
                </div>
              </div>

              <div className="flex-auto">
                <p className=" v2311-font-body text-v2311-fg-black mt-4 md:mt-8">
                  {person.bio}
                </p>
              </div>
            </div>
          )
        })}
      </div>
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
