import React from 'react'
import UikitUserLink from 'src/uikit/Link/User'
import { LearnStrategiesViewMembersProps } from './interfaces'
import { LearnStrategiesViewMembersStyled } from './styles'

export const LearnStrategiesViewMembers: React.FC<
  LearnStrategiesViewMembersProps
> = ({ learnStrategy }) => {
  return (
    <LearnStrategiesViewMembersStyled>
      {learnStrategy.UserLearnStrategies?.map((n) => {
        return n.CreatedBy ? (
          <div key={n.id}>
            <UikitUserLink user={n.CreatedBy} size="small" />
          </div>
        ) : null
      })}
    </LearnStrategiesViewMembersStyled>
  )
}
