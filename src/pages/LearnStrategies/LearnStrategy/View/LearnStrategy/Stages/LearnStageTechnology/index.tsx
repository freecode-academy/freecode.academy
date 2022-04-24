import React, { useCallback, useMemo } from 'react'
import Button from 'src/components/ui/Button'
import { getUserTechnologyHiringStatusText } from 'src/helpers/getUserTechnologyHiringStatusText'
import { getUserTechnologyStatusText } from 'src/helpers/getUserTechnologyStatusText'
import {
  useDeleteLearnStrategyStageMutation,
  UserTechnologyHiringStatus,
  UserTechnologyStatus,
} from 'src/modules/gql/generated'
import TechnologyLink from 'src/uikit/Link/Technology'
import UikitUserLink from 'src/uikit/Link/User'
import { LearnStageTechnologyProps } from './interfaces'
import { LearnStageTechnologyStyled } from './styles'

type StatusClassName = 'success' | 'failure' | 'neutral' | undefined

/**
 * Этап стретегии развития - Технология
 */
export const LearnStageTechnology: React.FC<LearnStageTechnologyProps> = ({
  learnStrategyStage,
  learnStrategy,
  technology,
  currentUser,
  inEditMode,
}) => {
  // Получаем текущий уровень знания технологии пользователем
  const currentUserUserTechnology = useMemo(() => {
    return currentUser?.UserTechnologies?.find(
      (n) => n.technologyId === technology.id
    )
  }, [technology.id, currentUser?.UserTechnologies])

  /**
   * Статус использования технологии
   */
  const userTechnologyStatus = useMemo(() => {
    if (currentUserUserTechnology?.status) {
      let className: StatusClassName = undefined

      switch (currentUserUserTechnology.status) {
        case UserTechnologyStatus.NOLONGERUSE:
        case UserTechnologyStatus.REFUSEDTOSTUDY:
          className = 'failure'
          break

        case UserTechnologyStatus.PLANTOSTUDY:
        case UserTechnologyStatus.STUDY:
        case UserTechnologyStatus.RARELYUSE:
          className = 'neutral'
          break

        default:
          className = 'success'
      }

      return (
        <span className={className}>
          {getUserTechnologyStatusText(currentUserUserTechnology?.status)}
        </span>
      )
    } else {
      return <span className="failure">Не указан</span>
    }
  }, [currentUserUserTechnology?.status])

  /**
   * Статус заинтересованности в трудоустройстве по данной технологии
   */
  const userTechnologyHiringStatus = useMemo(() => {
    if (currentUserUserTechnology?.hiring_status) {
      let className: StatusClassName = undefined

      switch (currentUserUserTechnology.hiring_status) {
        case UserTechnologyHiringStatus.NEGATIVE:
          className = 'failure'
          break

        case UserTechnologyHiringStatus.NEUTRAL:
          className = 'neutral'
          break

        case UserTechnologyHiringStatus.ACTIVE:
          className = 'success'
          break
      }

      return (
        <span className={className}>
          {getUserTechnologyHiringStatusText(
            currentUserUserTechnology?.hiring_status
          )}
        </span>
      )
    } else {
      return <span className="failure">Не указан</span>
    }
  }, [currentUserUserTechnology?.hiring_status])

  /**
   * Имеет ли право пользователь редактировать объект
   */
  const canEdit = useMemo<boolean>(() => {
    return currentUser && currentUser.id === learnStrategy.createdById
      ? true
      : false
  }, [learnStrategy.createdById, currentUser])

  /**
   * Удаление этапа
   */

  const [deleteMutation, deleteState] = useDeleteLearnStrategyStageMutation({
    variables: {
      where: {
        id: learnStrategyStage.id,
      },
    },
  })

  const deleteStage = useCallback(() => {
    if (deleteState.loading) {
      return
    }

    if (global.window.confirm('Удалить этот этап?')) {
      deleteMutation().then(async (r) => {
        if (r.data?.deleteLearnStrategyStage) {
          try {
            await deleteState.client.resetStore()
          } catch (error) {
            console.error(error)
          }
        }
      })
    }
  }, [deleteMutation, deleteState.client, deleteState.loading])

  const buttons = useMemo(() => {
    if (!inEditMode || !canEdit) {
      return null
    }

    const buttons: JSX.Element[] = []

    buttons.push(
      <Button key="delete" size="small" onClick={deleteStage}>
        Удалить
      </Button>
    )

    return buttons
  }, [canEdit, deleteStage, inEditMode])

  /**
   * Менторы
   */
  const mentors = useMemo(() => {
    const mentors =
      technology.UserTechnologies?.filter((n) => n.isMentor === true) || []

    return mentors.map((n) => {
      return n.CreatedBy ? (
        <UikitUserLink key={n.id} user={n.CreatedBy} size="small" />
      ) : null
    })
  }, [technology.UserTechnologies])

  /**
   * Конечный вывод
   */
  return useMemo(() => {
    const level = learnStrategyStage.level

    const hours = level
      ? technology[`level${level}hours` as keyof typeof technology]
      : null

    return (
      <LearnStageTechnologyStyled>
        <div className="flex align-items-center">
          Требуемая технология:{' '}
          <TechnologyLink object={technology}>{technology.name}</TechnologyLink>{' '}
          {learnStrategyStage.level
            ? ` Уровень: ${learnStrategyStage.level}`
            : null}
          <div className="flex-1" /> {buttons}
        </div>

        <p>
          Ваш уровень:{' '}
          {currentUserUserTechnology?.level ? (
            <>
              {currentUserUserTechnology?.level}.{' '}
              {currentUserUserTechnology?.level >= (level || 0) ? (
                <span className="success">Достаточный</span>
              ) : (
                <span className="failure">Недостаточный</span>
              )}
            </>
          ) : (
            <span className={level ? 'failure' : ''}>Отсутствует</span>
          )}
        </p>

        <p>Ваш статус использования: {userTechnologyStatus}</p>

        <p>
          Ваша заинтересованность в трудоустройстве:{' '}
          {userTechnologyHiringStatus}
        </p>

        {/* 
        Если уровень пользователя ниже, то выводим информацию примерно сколько часов осваивать
        */}
        {hours && level && (currentUserUserTechnology?.level || 0) < level ? (
          <p>{`Приблизительное время освоения: ${hours} часов`}</p>
        ) : null}

        {mentors.length ? <div> Менторы: {mentors} </div> : null}
      </LearnStageTechnologyStyled>
    )
  }, [
    learnStrategyStage.level,
    technology,
    buttons,
    currentUserUserTechnology?.level,
    userTechnologyStatus,
    userTechnologyHiringStatus,
    mentors,
  ])
}
