import React from 'react'

import { ChallengeDescription } from '../../../View/SidePanel/ChallengeDescription'
import { CodeChallengeEditDescriptionProps } from './interfaces'

export const CodeChallengeEditDescription: React.FC<CodeChallengeEditDescriptionProps> =
  ({ description, instructions }) => {
    return (
      <>
        <ChallengeDescription
          description={description}
          instructions={instructions}
          codeChallengeCompletion={undefined}
          currentUser={undefined}
        />
      </>
    )
  }
