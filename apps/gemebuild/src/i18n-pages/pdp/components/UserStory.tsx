import {
  IPdpUserStoryTeamSectionsProps,
  PdpUserStoryTeamSections,
} from './product-components'

function UserStory({
  pdpUserStoryTeamSectionsProps,
}: {
  pdpUserStoryTeamSectionsProps: IPdpUserStoryTeamSectionsProps
}) {
  return <PdpUserStoryTeamSections {...pdpUserStoryTeamSectionsProps} />
}

export default UserStory
