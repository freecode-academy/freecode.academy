import React, { useMemo } from 'react'
import UikitUserLink from 'src/uikit/Link/User'
import { ConnectLearnStrategyButton } from './ConnectLearnStrategyButton'
import { LearnStrategiesViewMembersProps } from './interfaces'
import { LearnStrategiesViewMembersStyled } from './styles'

export const LearnStrategiesViewMembers: React.FC<LearnStrategiesViewMembersProps> =
  ({ learnStrategy, currentUser }) => {
    return useMemo(() => {
      return (
        <LearnStrategiesViewMembersStyled>
          <ConnectLearnStrategyButton
            currentUser={currentUser}
            learnStrategy={learnStrategy}
            canConnect={true}
          />
          {learnStrategy.UserLearnStrategies?.map((n) => {
            return (
              <div key={n.id}>
                <UikitUserLink user={n.CreatedBy} size="small" />
              </div>
            )
          })}
        </LearnStrategiesViewMembersStyled>
      )
    }, [currentUser, learnStrategy])
  }
