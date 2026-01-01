import Link from 'next/link'
import React, { useCallback, useMemo, useState } from 'react'
import { Button } from 'src/components/Button'
import { getUserTechnologyLevelText } from 'src/helpers/getUserTechnologyLevelText'
import { useLearnStrategyQuery } from 'src/gql/generated'
import { LearnStrategyViewProps } from './interfaces'
import { LearnStrategyViewStages } from './Stages'
import {
  LearnStrategyViewStyled,
  LearnStrategyViewToolbarStyled,
  LearnStrategyTitle,
  LearnStrategyLevel,
  LearnStrategyChildrenContainer,
} from './styles'
import { LevelIcon } from 'src/uikit/LevelIcon'

/**
 * Рекурсивный вывод стратегии развития с дочерними подстратегиями
 */
export const LearnStrategyView: React.FC<LearnStrategyViewProps> = ({
  id,
  loadedIDs,
  currentUser,
  showChilds,
  editable,
  // isRoot,
}) => {
  const response = useLearnStrategyQuery({
    /**
     * Не подгружаем те, что уже есть в массиве загруженных,
     * во избежание бесконечной рекурсии
     */
    skip: loadedIDs.includes(id),
    variables: {
      where: {
        id,
      },
    },
    onError: console.error,
  })

  const loadedIDsWithCurrent = useMemo(() => {
    const loadedIDsWithCurrent = [...loadedIDs]

    loadedIDsWithCurrent.push(id)
    return loadedIDsWithCurrent
  }, [id, loadedIDs])

  const learnStrategy = response.data?.learnStrategy

  const canEdit = useMemo(() => {
    return (
      editable && currentUser && currentUser.id === learnStrategy?.createdById
    )
  }, [editable, learnStrategy?.createdById, currentUser])

  const [inEditMode, inEditModeSetter] = useState(false)

  const toggleEditMode = useCallback(() => {
    inEditModeSetter(!inEditMode)
  }, [inEditMode])

  const buttons = useMemo(() => {
    if (!canEdit) {
      return null
    }

    const buttons: JSX.Element[] = [
      <Button key="toggle" size="small" onClick={toggleEditMode}>
        {!inEditMode ? 'Редактировать' : 'Отмена'}
      </Button>,
    ]

    if (inEditMode) {
      //
    } else {
      //
    }

    return buttons
  }, [canEdit, inEditMode, toggleEditMode])

  /**
   * Далее из этапов стратегии берем технологии и дочерние стратегии
   */

  return useMemo(() => {
    if (!learnStrategy) {
      return null
    }

    return (
      <LearnStrategyViewStyled>
        <LearnStrategyViewToolbarStyled>
          {learnStrategy.level ? (
            <LearnStrategyLevel
              title={getUserTechnologyLevelText(learnStrategy.level)}
            >
              <LevelIcon level={learnStrategy.level} />
            </LearnStrategyLevel>
          ) : null}
          <LearnStrategyTitle>
            <Link href={`/learnstrategies/${learnStrategy.id}`}>
              {learnStrategy.name}
            </Link>
          </LearnStrategyTitle>
          <div className="flex-1" />
          {buttons}
        </LearnStrategyViewToolbarStyled>

        {showChilds ? (
          <LearnStrategyChildrenContainer>
            <LearnStrategyViewStages
              learnStrategy={learnStrategy}
              loadedIDsWithCurrent={loadedIDsWithCurrent}
              inEditMode={inEditMode}
              currentUser={currentUser}
            />
          </LearnStrategyChildrenContainer>
        ) : null}
      </LearnStrategyViewStyled>
    )
  }, [
    buttons,
    currentUser,
    inEditMode,
    learnStrategy,
    loadedIDsWithCurrent,
    showChilds,
  ])
}
