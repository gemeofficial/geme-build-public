/* eslint-disable react/no-unescaped-entities */
import { PdpUserStoryTeamSections } from 'ui'
import type { IPdpUserStoryTeamSectionsProps } from 'ui'

const pdpUserStoryTeamSectionsProps: IPdpUserStoryTeamSectionsProps = {
  title: "Meet GEME's Customer Stories",
  description: <>How our customers get their life changed after using GEME</>,
  people: [
    {
      id: 1,
      // name: 'Lutheran Retreats, Camps & Conferences',
      name: 'Alex Egertson',
      role: 'Director of Sustainability',
      image: {
        src: '/assets/images/pdp-v2311/user-stories/user-stories-llc.jpg',
        alt: 'Alex Egertson',
      },
      bio: (
        <>
          Alex work in Lutheran Retreats, Camps & Conferences, aka{' '}
          <a
            className="text-emerald-600"
            href="https://lrcchome.com/"
            target="_blank"
          >
            LRCC
          </a>{' '}
          is a camp school that kids are learning and living a green life.
          <br />
          With GEME more children can learn composting by doing it easily in
          their daily lives.
        </>
      ),
      quote: 'Happy to help. Seems like a great product so far.',
    },
    {
      id: 2,
      name: 'Rainforest Inn',
      role: 'Bill, Boss',
      image: {
        src: '/assets/images/pdp-v2311/user-stories/user-stories-rainforest.jpg', // 'https://images.squarespace-cdn.com/content/v1/55390e7ee4b0a048151b9185/1549219762523-XL1GYVWNFYNJ44ZJXXMD/RFI-from-treehouse-suite-headerjpg.jpg',
        alt: 'Rainforest Inn',
      },
      bio: (
        <>
          Bill is the owner of{' '}
          <a
            className="text-emerald-600"
            href="https://www.rainforestinn.com/"
            target="_blank"
          >
            Rainforest Inn
          </a>{' '}
          located in Puerto Rico. He want GEME badly and even paid multiple
          times and extra shipping cost, just want to use GEME composter. Let's
          check his{' '}
          <a
            className="text-emerald-600"
            href="https://www.tiktok.com/@rainforestinn/video/7309861665711901998"
            target="_blank"
          >
            vlog
          </a>{' '}
          to see how's going on.
        </>
      ),
      quote:
        'Looking for a clean easy composter that can be in the kitchen as our big compost bins are too far. It works very efficient.  Quiet and clean.',
    },
    {
      id: 3,
      name: 'LAE. Angeles Delgado',
      role: 'Finance CEO',
      image: {
        src: '/assets/images/pdp-v2311/user-stories/user-stories-angelita.jpeg',
        alt: 'Leonard Krasner',
      },
      bio: (
        <>
          Mexican customer Angelita (contacted April) bought a unit despite our
          initial US-Mexico shipping hurdle. Her trucking company facilitated
          Texas pick-up. Loving the product, she purchased 3 more for her
          daughters' Christmas! Angelita even became a hero by helping us
          resolve a fulfillment issue for another Mexico Kickstarter campaign.
        </>
      ),
      quote:
        'I went to internet and looked more and found out yours and the adertising says that it is bio composter and saw videos and at last i found yours i loved it. I want to buy my composters !  I am ready for 2 more now. Maybe the three.',
      mobileQuote:
        'I want to buy my composters !  I am ready for 2 more now. Maybe the three.',
    },
    {
      id: 4,
      name: 'Vasil Borukov',
      role: 'Senior IT Support Engineer',
      image: {
        src: '/assets/images/pdp-v2311/user-stories/user-stories-vasil.png',
        alt: 'Vasil Software engineer',
      },
      bio: (
        <>
          Bulgarian zero-waste advocate Vasil loves GEME for tackling food waste
          and reducing carbon footprint. Following GEME since its July 2022
          crowdfunding campaign, he secured a €499 unit via installments and
          actively promoted GEME's product and vision to his network. A true
          sustainability champion!
        </>
      ),
      quote:
        'I always wanted to get involved more & more in everything around\n' +
        '          me for one better sustainable life and this is why I really wanted to\n' +
        '          get so much GEME. It combines everything you need for an easier\n' +
        '          worry-stress free life. Totally recommend it to all my surroundings!',
      mobileQuote:
        'It combines everything you need for an easier worry-stress free life.',
    },
  ],
  locale:'en'
}

function UserStory(): JSX.Element {
  return (
    <>
      <PdpUserStoryTeamSections {...pdpUserStoryTeamSectionsProps} />
    </>
  )
}

export default UserStory
