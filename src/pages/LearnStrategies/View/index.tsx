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
        {/* @ts-expect-error types */}
        <LearnStrategiesViewHeaderStyled className="flex align-items-center">
          <Typography variant="title"></Typography>
          <Link href="/learnstrategies/create">
            <a rel="nofollow noindex">Создать стратегию развития</a>
          </Link>
          <div className="flex-1" />
        </LearnStrategiesViewHeaderStyled>

        <GridTableStyled>
          <GridTableItemStyled>
            {/* @ts-expect-error types */}
            <GridTableAttributeStyled>
              Название стратегии
            </GridTableAttributeStyled>

            {/* @ts-expect-error types */}
            <GridTableAttributeStyled>
              Технологический уровень
            </GridTableAttributeStyled>

            {/* @ts-expect-error types */}
            <GridTableAttributeStyled>Кто создал</GridTableAttributeStyled>

            {/* @ts-expect-error types */}
            <GridTableAttributeStyled>Участники</GridTableAttributeStyled>
          </GridTableItemStyled>

          {learnStrategies.map((n) => {
            return (
              // @ts-expect-error types
              <GridTableItemStyled key={n.id}>
                {/* @ts-expect-error types */}
                <GridTableAttributeStyled>
                  <Link href={`/learnstrategies/${n.id}`}>{n.name}</Link>

                  <div>{n.description}</div>
                </GridTableAttributeStyled>

                {/* @ts-expect-error types */}
                <GridTableAttributeStyled>
                  {getUserTechnologyLevelText(n.level)}
                </GridTableAttributeStyled>
                {n.CreatedBy ? (
                  // @ts-expect-error types
                  <GridTableAttributeStyled>
                    {' '}
                    <UikitUserLink user={n.CreatedBy} />
                  </GridTableAttributeStyled>
                ) : null}

                {/* @ts-expect-error types */}
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
