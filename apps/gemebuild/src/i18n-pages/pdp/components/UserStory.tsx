import { PdpUserStoryTeamSections } from 'ui'
import type { IPdpUserStoryTeamSectionsProps } from 'ui'

function UserStory({
  pdpUserStoryTeamSectionsProps,
}: {
  pdpUserStoryTeamSectionsProps: IPdpUserStoryTeamSectionsProps
}) {
  return <PdpUserStoryTeamSections {...pdpUserStoryTeamSectionsProps} />
}

export default UserStory
