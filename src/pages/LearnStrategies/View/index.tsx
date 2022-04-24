import { Typography } from 'material-ui'
import Link from 'next/link'
import React, { useContext } from 'react'
import Context, { PrismaCmsContext } from '@prisma-cms/context'
import { getUserTechnologyLevelText } from 'src/helpers/getUserTechnologyLevelText'
import UikitUserLink from 'src/uikit/Link/User'
import {
  GridTableStyled,
  GridTableAttributeStyled,
  GridTableItemStyled,
  // GridTableAttributesContainerStyled,
} from 'src/components/GridTable/styles'

import { LearnStrategiesViewProps } from './interfaces'
import { LearnStrategiesViewMembers } from './Members'
import {
  LearnStrategiesViewHeaderStyled,
  LearnStrategiesViewStyled,
  // LearnStrategiesViewTableStyled,
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
          <Typography variant="title"></Typography>
          <Link href="/learnstrategies/create">
            <a rel="nofollow noindex">Создать стратегию развития</a>
          </Link>
          <div className="flex-1" />
        </LearnStrategiesViewHeaderStyled>

        <GridTableStyled>
          <GridTableItemStyled>
            <GridTableAttributeStyled>
              Название стратегии
            </GridTableAttributeStyled>
            <GridTableAttributeStyled>
              Технологический уровень
            </GridTableAttributeStyled>
            <GridTableAttributeStyled>Кто создал</GridTableAttributeStyled>
            <GridTableAttributeStyled>Участники</GridTableAttributeStyled>
          </GridTableItemStyled>

          {learnStrategies.map((n) => {
            return (
              <GridTableItemStyled key={n.id}>
                <GridTableAttributeStyled>
                  <Link href={`/learnstrategies/${n.id}`}>{n.name}</Link>

                  <div>{n.description}</div>
                </GridTableAttributeStyled>
                <GridTableAttributeStyled>
                  {getUserTechnologyLevelText(n.level)}
                </GridTableAttributeStyled>
                {n.CreatedBy ? (
                  <GridTableAttributeStyled>
                    {' '}
                    <UikitUserLink user={n.CreatedBy} />
                  </GridTableAttributeStyled>
                ) : null}
                <GridTableAttributeStyled>
                  {' '}
                  <LearnStrategiesViewMembers
                    learnStrategy={n}
                    currentUser={currentUser}
                  />
                </GridTableAttributeStyled>
              </GridTableItemStyled>
            )
          })}
        </GridTableStyled>
      </LearnStrategiesViewStyled>
    </>
  )
}
