import { Typography } from 'material-ui'
import React from 'react'
import Link from 'src/uikit/Link'
import { TechnologyLearnStrategyStagesProps } from './interfaces'
import { TechnologyLearnStrategyStagesStyled } from './styles'

export const TechnologyLearnStrategyStages: React.FC<TechnologyLearnStrategyStagesProps> =
  ({ LearnStrategyStages }) => {
    if (!LearnStrategyStages.length) {
      return null
    }

    return (
      <TechnologyLearnStrategyStagesStyled>
        <Typography variant="subheading">Стратегии развития</Typography>

        {LearnStrategyStages.map((n) => {
          if (!n.LearnStrategy) {
            return null
          }

          return (
            <div key={n.id}>
              <Link
                href={`/learnstrategies/${n.LearnStrategy.id}`}
                title={n.LearnStrategy.name}
              >
                {n.LearnStrategy.name}
              </Link>
            </div>
          )
        })}
      </TechnologyLearnStrategyStagesStyled>
    )
  }
