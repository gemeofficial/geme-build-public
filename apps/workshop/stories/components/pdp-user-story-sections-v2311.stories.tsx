import type { Meta, StoryObj } from '@storybook/react'
import {
  PdpUserStoryTeamSectionsExample,
  PdpUserStoryTeamSections,
  EXAMPLE_PDP_USER_STORY_SECTIONS,
} from 'ui'

const meta: Meta = {
  title: 'components/pdp-user-story-sections',
  argTypes: {},
}

export default meta

export const StoryPdpUserStoryTeamSectionsExample: StoryObj<
  typeof PdpUserStoryTeamSectionsExample
> = {
  render: (props) => (
    <PdpUserStoryTeamSectionsExample
      {...EXAMPLE_PDP_USER_STORY_SECTIONS.pdpUserStoryTeamSectionsExampleProps}
      {...props}
    />
  ),
  name: 'PdpUserStoryTeamSectionsExample',
  args: {},
}

export const StoryPdpUserStoryTeamSections: StoryObj<
  typeof PdpUserStoryTeamSectionsExample
> = {
  render: (props) => (
    <PdpUserStoryTeamSections
      {...EXAMPLE_PDP_USER_STORY_SECTIONS.pdpUserStoryTeamSectionsProps}
      {...props}
    />
  ),
  name: 'PdpUserStoryTeamSections',
  args: {},
}
