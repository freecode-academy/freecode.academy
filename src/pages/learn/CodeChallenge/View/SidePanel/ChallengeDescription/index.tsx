import React, { Fragment } from 'react'

import PrismFormatted from '../../components/PrismFormatted'

import { ChallengeDescriptionStyled } from './styles'
import { ChallengeDescriptionProps } from './interfacse'

const ChallengeDescription: React.FC<ChallengeDescriptionProps> = ({
  description,
  instructions,
  section,
  user,
  codeChallengeCompletion,
}) => {
  return (
    <ChallengeDescriptionStyled
      className={`challenge-instructions${section ? ' ' + section : ''}`}
      blur={!!(user && !codeChallengeCompletion)}
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

export default ChallengeDescription
