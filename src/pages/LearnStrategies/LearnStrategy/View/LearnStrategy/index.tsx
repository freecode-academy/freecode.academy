import Link from 'next/link'
import React, { useCallback, useMemo, useState } from 'react'
import Button from 'src/components/ui/Button'
import { getUserTechnologyLevelText } from 'src/helpers/getUserTechnologyLevelText'
import { useLearnStrategyQuery } from 'src/modules/gql/generated'
import { LearnStrategyViewProps } from './interfaces'
import { LearnStrategyViewStages } from './Stages'
import {
  LearnStrategyViewStyled,
  LearnStrategyViewToolbarStyled,
} from './styles'
import { LearnStrategyUpdateForm } from './UpdateForm'

/**
 * Рекурсивный вывод стратегии развития с дочерними подстратегиями
 */
export const LearnStrategyView: React.FC<LearnStrategyViewProps> = ({
  id,
  loadedIDs,
  currentUser,
  showChilds,
  editable,
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
        <LearnStrategyViewToolbarStyled className="flex align-items-center">
          {inEditMode ? (
            <LearnStrategyUpdateForm
              learnStrategy={learnStrategy}
              inEditModeSetter={inEditModeSetter}
            />
          ) : (
            <>
              <span>Стратегия развития: </span>
              <Link href={`/learnstrategies/${learnStrategy.id}`}>
                {learnStrategy.name}
              </Link>{' '}
              {learnStrategy.level
                ? ` (Уровень: ${getUserTechnologyLevelText(
                    learnStrategy.level
                  )})`
                : null}
            </>
          )}

          <div className="flex-1" />
          {buttons}
        </LearnStrategyViewToolbarStyled>
        <div>{!inEditMode ? learnStrategy.description : null}</div>

        {showChilds ? (
          <LearnStrategyViewStages
            learnStrategy={learnStrategy}
            loadedIDsWithCurrent={loadedIDsWithCurrent}
            inEditMode={inEditMode}
            currentUser={currentUser}
          />
        ) : null}
      </LearnStrategyViewStyled>
    )
  }, [
    buttons,
    inEditMode,
    learnStrategy,
    loadedIDsWithCurrent,
    showChilds,
    currentUser,
  ])
}
