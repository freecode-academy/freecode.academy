/* eslint-disable no-console */
import React, { useCallback, useContext, useMemo } from 'react'
import Editor from '@prisma-cms/editor'
import moment from 'moment'
import UserLink, { UikitUserLinkAvatarSize } from 'src/uikit/Link/User'

import IconButton from 'material-ui/IconButton'
import StartIcon from 'material-ui-icons/PlayArrow'
import StopIcon from 'material-ui-icons/Stop'

import {
  GridTableAttributeStyled,
  GridTableItemStyled,
  GridTableAttributesContainerStyled,
} from 'src/components/GridTable/styles'
import TaskStatus from '../../TaskStatus'
import { TasksViewTaskProps } from './interfaces'
import UikitUserLink from 'src/uikit/Link/User'
import PrismaContext, { PrismaCmsContext } from '@prisma-cms/context'
import {
  useCreateTimerProcessorMutation,
  useUpdateTimerProcessorMutation,
} from 'src/modules/gql/generated'
import useProcessorMutation from 'src/hooks/useProcessorMutation'
import TaskLink from 'src/uikit/Link/Task'

const TasksViewTask: React.FC<TasksViewTaskProps> = ({ object, ...other }) => {
  const context = useContext(PrismaContext) as PrismaCmsContext

  /**
   * Обновление таймера
   */
  const [updateTimerProcessor] = useUpdateTimerProcessorMutation()

  /**
   * Запуск таймера
   */

  const [createTimerProcessor, { loading }] = useCreateTimerProcessorMutation()

  const {
    mutation: createMutation,
    snakbar: createMutationSnakbar,
    // } = useProcessorMutation<CreateTimerProcessorMutationOptions>({
  } = useProcessorMutation({
    processor: createTimerProcessor,
    loading,
  })

  const onClickCreateTimer = useCallback(() => {
    createMutation({
      variables: {
        data: {
          Task: {
            connect: {
              id: object.id,
            },
          },
        },
      },
    })
  }, [createMutation, object.id])

  const {
    mutation: updateMutation,
    snakbar: updateMutationSnakbar,
  } = useProcessorMutation({
    processor: updateTimerProcessor,
    loading,
  })

  const onClickUpdateTimer = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      const timerId = event.currentTarget.value

      updateMutation({
        variables: {
          data: {
            stopedAt: new Date(),
          },
          where: {
            id: timerId,
          },
        },
      })
    },
    [updateMutation]
  )

  const buttons = useMemo(() => {
    const buttons: JSX.Element[] = []

    if (object) {
      const { id: taskId, Timers } = object

      const { user: currentUser } = context

      const activeTimers = Timers
        ? Timers.filter((n) => n.stopedAt === null)
        : []

      if (currentUser) {
        const { id: currentUserId } = currentUser

        const activeTimer = activeTimers.find(
          (n) => n.CreatedBy?.id === currentUserId
        )

        if (activeTimer) {
          const { id: timerId } = activeTimer

          buttons.push(
            <IconButton
              key="stop"
              value={timerId}
              onClick={onClickUpdateTimer}
              disabled={loading}
            >
              <StopIcon />
            </IconButton>
          )
        } else {
          buttons.push(
            <IconButton
              key="start"
              value={taskId}
              onClick={onClickCreateTimer}
              disabled={loading}
            >
              <StartIcon />
            </IconButton>
          )
        }
      }
    }

    return buttons
  }, [context, loading, object, onClickCreateTimer, onClickUpdateTimer])

  const timers = useMemo(() => {
    const activeTimers = object.Timers?.filter((n) => n.stopedAt === null)

    return activeTimers?.map((n) => {
      const { id, CreatedBy } = n

      return (
        <UserLink
          key={id}
          user={CreatedBy}
          size={UikitUserLinkAvatarSize.small}
          showName={false}
        />
      )
    })
  }, [object.Timers])

  return useMemo(() => {
    return (
      <>
        <GridTableItemStyled {...other}>
          <GridTableAttributeStyled className="buttons">
            {buttons}
          </GridTableAttributeStyled>

          <GridTableAttributeStyled data-label="Статус" className="status">
            <TaskStatus value={object.status} />
          </GridTableAttributeStyled>

          <GridTableAttributeStyled className="content" data-label="Описание">
            <p>
              Задача: <TaskLink object={object} />
            </p>

            <Editor
              // readOnly={!inEditMode}
              // onChange={this.onEditorChange}
              editorKey={`task-${object.id}`}
              value={object.content}
            />
          </GridTableAttributeStyled>

          <GridTableAttributesContainerStyled>
            <GridTableAttributeStyled>
              {object.createdAt ? moment(object.createdAt).format('lll') : null}
            </GridTableAttributeStyled>
            <GridTableAttributeStyled>
              {object.startDatePlaning
                ? moment(object.startDatePlaning).format('lll')
                : null}
            </GridTableAttributeStyled>
            <GridTableAttributeStyled>
              {object.endDatePlaning
                ? moment(object.endDatePlaning).format('lll')
                : null}
            </GridTableAttributeStyled>

            <GridTableAttributeStyled>
              {object.startDate ? moment(object.startDate).format('lll') : null}
            </GridTableAttributeStyled>
            <GridTableAttributeStyled>
              {object.endDate ? moment(object.endDate).format('lll') : null}
            </GridTableAttributeStyled>
          </GridTableAttributesContainerStyled>

          <GridTableAttributeStyled data-label="Постановщик">
            <UikitUserLink user={object.CreatedBy} />
          </GridTableAttributeStyled>

          <GridTableAttributeStyled data-label="Кто работает">
            {timers}
          </GridTableAttributeStyled>
        </GridTableItemStyled>

        {createMutationSnakbar}
        {updateMutationSnakbar}
      </>
    )
  }, [
    buttons,
    createMutationSnakbar,
    object,
    other,
    timers,
    updateMutationSnakbar,
  ])
}

export default TasksViewTask
