import type { Meta, StoryObj } from '@storybook/react'
import {
  PdpIntroSection1,
  PdpIntroSection3,
  PdpIntroSection4,
  PdpIntroSection5,
  PdpIntroSection6,
  PdpIntroSection7,
  PdpIntroSection8,
  EXAMPLE_PDP_INTRO_SECTION_PROPS,
} from 'ui'

const meta: Meta = {
  title: 'components/pdp-intro-sections',
  argTypes: {},
}

export default meta

export const StoryPdpIntroSection1: StoryObj<typeof PdpIntroSection1> = {
  render: (props) => (
    <PdpIntroSection1
      {...EXAMPLE_PDP_INTRO_SECTION_PROPS.pdpIntroSection1Props}
      {...props}
    />
  ),
  name: 'PdpIntroSection1',
  args: {
    title: "World's First Bio Waste Composter",
    description: 'Use microbiota to breakdown food waste quickly',
    bgImageSrc: 'https://placehold.co/1920x850',
    bottomItems: [
      { id: 1, description: 'Breakdown by Microbes' },
      { id: 2, description: 'Not by Dehydration' },
      { id: 3, description: 'Compost Pile in Box' },
    ],
  },
}

export const StoryPdpIntroSection3: StoryObj<typeof PdpIntroSection3> = {
  render: (props) => (
    <PdpIntroSection3
      {...EXAMPLE_PDP_INTRO_SECTION_PROPS.pdpIntroSection3Props}
      {...props}
    />
  ),
  name: 'PdpIntroSection3',
  args: {
    title: '6-8 Hours',
  },
}

export const StoryPdpIntroSection4: StoryObj<typeof PdpIntroSection4> = {
  render: () => <PdpIntroSection4 />,
  name: 'PdpIntroSection4',
  args: {},
}

export const StoryPdpIntroSection5: StoryObj<typeof PdpIntroSection5> = {
  render: (props) => (
    <PdpIntroSection5
      {...EXAMPLE_PDP_INTRO_SECTION_PROPS.pdpIntroSection5Props}
      {...props}
    />
  ),
  name: 'PdpIntroSection5',
  args: {
    title: 'Almost All Of Waste Can Go into GEME',
    leftNotes: (
      <>
        400+
        <br />
        kinds of waste
      </>
    ),
  },
}

export const StoryPdpIntroSection6: StoryObj<typeof PdpIntroSection6> = {
  render: (props) => (
    <PdpIntroSection6
      {...EXAMPLE_PDP_INTRO_SECTION_PROPS.pdpIntroSection6Props}
      {...props}
    />
  ),
  name: 'PdpIntroSection6',
  args: {
    title: 'Composting Made Easy',
    description: 'Loved by 100k+gardeners',
    items: [
      {
        id: 1,
        featured: true,
        title: 'GEME',
        imageSrc: 'https://placehold.co/156x99',
        imageAlt: 'GEME compose',
        features: [
          'Not dehydrating',
          'Not dehydrating',
          'Not dehydrating',
          'Not dehydrating',
        ],
      },
      {
        id: 2,
        title: 'Dehydrator',
        imageSrc: 'https://placehold.co/89x89',
        imageAlt: 'Dehydrator',
        features: [
          'Not dehydrating',
          'Not dehydrating',
          'Not dehydrating',
          'Not dehydrating',
        ],
      },
      {
        id: 3,
        title: 'Compost Pile',
        imageSrc: 'https://placehold.co/89x89',
        imageAlt: 'Compost Pile',
        features: [
          'Not dehydrating',
          'Not dehydrating',
          'Not dehydrating',
          'Not dehydrating',
        ],
      },
    ],
  },
}

export const StoryPdpIntroSection7: StoryObj<typeof PdpIntroSection7> = {
  render: (props) => (
    <PdpIntroSection7
      {...EXAMPLE_PDP_INTRO_SECTION_PROPS.pdpIntroSection7Props}
      {...props}
    />
  ),
  name: 'PdpIntroSection7',
  args: {
    title: 'Big, More & Long Term',
    description: 'Work 7x24 But Energy Saving',
    features: [
      '·  10+ people family daily using',
      '·  3 months no cleaning required',
      '·  Worth the price',
    ],
  },
}

export const StoryPdpIntroSection8: StoryObj<typeof PdpIntroSection8> = {
  render: (props) => (
    <PdpIntroSection8
      {...EXAMPLE_PDP_INTRO_SECTION_PROPS.pdpIntroSection8Props}
      {...props}
    />
  ),
  name: 'PdpIntroSection8',
  args: {},
}
