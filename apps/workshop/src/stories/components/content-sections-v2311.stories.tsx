import type { Meta, StoryObj } from '@storybook/react'
import {
  ContentSection1,
  ContentSection2,
  ContentSection3,
  ContentSection4,
  ContentSection5,
  ContentSection6,
  ContentSection6Fixed,
  ContentSection7,
  ContentSection8,
  EXAMPLE_CONTENT_SECTION_PROPS,
} from 'ui'

const meta: Meta = {
  title: 'components/content-sections',
  argTypes: {},
}

export default meta

export const StoryContentSection1: StoryObj<typeof ContentSection1> = {
  render: (props) => (
    <ContentSection1
      {...EXAMPLE_CONTENT_SECTION_PROPS.contentSection1Props}
      {...props}
    />
  ),
  name: 'ContentSection1',
  args: {
    title: EXAMPLE_CONTENT_SECTION_PROPS.contentSection1Props.title,
    description: EXAMPLE_CONTENT_SECTION_PROPS.contentSection1Props.description,
  },
}

export const StoryContentSection2: StoryObj<typeof ContentSection2> = {
  render: (props) => (
    <ContentSection2
      {...EXAMPLE_CONTENT_SECTION_PROPS.contentSection2Props}
      {...props}
    />
  ),
  name: 'ContentSection2',
  args: {},
}

export const StoryContentSection3: StoryObj<typeof ContentSection3> = {
  render: () => (
    <ContentSection3 {...EXAMPLE_CONTENT_SECTION_PROPS.contentSection3Props} />
  ),
  name: 'ContentSection3',
  args: {},
}

export const StoryContentSection4: StoryObj<typeof ContentSection4> = {
  render: (props) => (
    <ContentSection4
      {...EXAMPLE_CONTENT_SECTION_PROPS.contentSection4Props}
      {...props}
    />
  ),
  name: 'ContentSection4',
  args: {},
}

export const StoryContentSection5: StoryObj<typeof ContentSection5> = {
  render: () => (
    <ContentSection5 {...EXAMPLE_CONTENT_SECTION_PROPS.contentSection5Props} />
  ),
  name: 'ContentSection5',
  args: {},
}

export const StoryContentSection6: StoryObj<typeof ContentSection6> = {
  render: () => (
    <ContentSection6 {...EXAMPLE_CONTENT_SECTION_PROPS.contentSection6Props} />
  ),
  name: 'ContentSection6',
  args: {},
}

export const StoryContentSection6Fixed: StoryObj<typeof ContentSection6Fixed> =
  {
    render: () => (
      <ContentSection6Fixed
        {...EXAMPLE_CONTENT_SECTION_PROPS.contentSection6FixedProps}
      />
    ),
    name: 'ContentSection6Fixed',
    args: {},
  }

export const StoryContentSection7: StoryObj<typeof ContentSection7> = {
  render: (props) => (
    <ContentSection7
      {...EXAMPLE_CONTENT_SECTION_PROPS.contentSection7Props}
      {...props}
    />
  ),
  name: 'ContentSection7',
  args: {
    title: 'The Easiest Way to Get Compost',
    description:
      "Let's talk about the little guys that make a big difference microbesJust like the friendly microbes in your gut aid digestion, along with optimal conditions and bin rotation swiftly convert food scraps into organic compost",
    withImageOrVideo: {
      type: 'video',
      videoProps: {
        videoPosterUrl: 'https://placehold.co/358x202',
        sources: [
          // for pc
          {
            minWidth: 1280,
            src: 'https://www-geme-bio-us.s3.us-west-1.amazonaws.com/geme-genereate-compost-12s-480p.mp4',
          },
          // for mobile/tablet
          {
            minWidth: 0,
            src: 'https://www-geme-bio-us.s3.us-west-1.amazonaws.com/geme-genereate-compost-12s-480p.mp4',
          },
        ],
      },
    },
    bottomContent: (
      <div className=" h-80 bg-orange-500 ">This a placeholder</div>
    ),
  },
}

export const StoryContentSection8: StoryObj<typeof ContentSection8> = {
  render: (props) => (
    <ContentSection8
      {...EXAMPLE_CONTENT_SECTION_PROPS.contentSection8Props}
      {...props}
    />
  ),
  name: 'ContentSection8',
  args: {},
}
