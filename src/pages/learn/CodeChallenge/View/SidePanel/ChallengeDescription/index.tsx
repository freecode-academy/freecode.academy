import React, { Fragment } from 'react'

import { PrismFormatted } from '../../components/PrismFormatted'

import { ChallengeDescriptionStyled } from './styles'
import { ChallengeDescriptionProps } from './interfacse'

export const ChallengeDescription: React.FC<ChallengeDescriptionProps> = ({
  description,
  instructions,
  // section,
  currentUser,
  codeChallengeCompletion,
}) => {
  return (
    <ChallengeDescriptionStyled
      // className={`challenge-instructions ${section ? section : ''}`}
      className={`challenge-instructions`}
      blur={!!(currentUser && !codeChallengeCompletion)}
    >
      {description && <PrismFormatted text={description} />}
      {instructions && (
        <Fragment>
          <hr />
          <PrismFormatted text={instructions} />
        </Fragment>
      )}
      <hr />
    </ChallengeDescriptionStyled>
  )
}

ChallengeDescription.displayName = 'ChallengeDescription'
