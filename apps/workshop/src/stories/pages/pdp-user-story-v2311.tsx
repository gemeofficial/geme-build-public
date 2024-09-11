import { PdpUserStoryTeamSections } from 'ui'
import type { IPdpUserStoryTeamSectionsProps } from 'ui'

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

function PdpUserStoryV2311(): JSX.Element {
  return (
    <div>
      <PdpUserStoryTeamSections {...pdpUserStoryTeamSectionsProps} />
    </div>
  )
}

export default PdpUserStoryV2311
