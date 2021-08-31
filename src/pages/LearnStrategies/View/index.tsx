import { Typography } from 'material-ui'
import Link from 'next/link'
import React, { useContext } from 'react'
import Context, { PrismaCmsContext } from '@prisma-cms/context'
import { getUserTechnologyLevelText } from 'src/helpers/getUserTechnologyLevelText'
import { UikitUserLink } from 'src/uikit/Link/User'
import { LearnStrategiesViewProps } from './interfaces'
import { LearnStrategiesViewMembers } from './Members'
import {
  LearnStrategiesViewHeaderStyled,
  LearnStrategiesViewStyled,
  LearnStrategiesViewTableStyled,
} from './styles'

export const LearnStrategiesView: React.FC<LearnStrategiesViewProps> = ({
  learnStrategies,
}) => {
  const context = useContext(Context) as PrismaCmsContext
  const currentUser = context.user

  return (
    <>
      <LearnStrategiesViewStyled>
        <LearnStrategiesViewHeaderStyled className="flex align-items-center">
          <Typography variant="title">Стратегии развития</Typography>
          <div className="flex-1" />
          <Link href="/learnstrategies/create">
            <a rel="nofollow noindex">Создать стратегию развития</a>
          </Link>
        </LearnStrategiesViewHeaderStyled>

        <LearnStrategiesViewTableStyled>
          <div>Название стратегии</div>
          <div>Технологический уровень</div>

          <div>Кто создал</div>
          <div>Участники</div>

          {learnStrategies.map((n) => {
            return (
              <React.Fragment key={n.id}>
                <div>
                  <Link href={`/learnstrategies/${n.id}`}>{n.name}</Link>

                  <div>{n.description}</div>
                </div>
                <span>{getUserTechnologyLevelText(n.level)}</span>
                <UikitUserLink user={n.CreatedBy} />
                <div>
                  <LearnStrategiesViewMembers
                    learnStrategy={n}
                    currentUser={currentUser}
                  />
                </div>
              </React.Fragment>
            )
          })}
        </LearnStrategiesViewTableStyled>
      </LearnStrategiesViewStyled>
    </>
  )
}
