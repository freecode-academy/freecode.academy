import React, { useCallback, useMemo } from 'react'
import Button from 'material-ui/Button'
import {
  CreateTaskTechnologyProcessorMutationVariables,
  TechnologiesConnectionTechnologyFragment,
  TechnologyOrderByInput,
  useCreateTaskTechnologyProcessorMutation,
  useTechnologiesConnectionQuery,
} from 'src/modules/gql/generated'
import { NewTaskTaskTechnologyProps } from './interfaces'
import { NewTaskTaskTechnologyStyled } from './styles'
import IconButton from 'material-ui/IconButton'
import SaveIcon from 'material-ui-icons/Save'
import RemoveIcon from 'material-ui-icons/RemoveCircleOutline'
import UserTechnologyLevel from 'src/pages/Technologies/Technology/View/UserTechnologyRow/UserTechnologyLevel'
import useProcessorMutation from 'src/hooks/useProcessorMutation'

const NewTaskTaskTechnology: React.FC<NewTaskTaskTechnologyProps> = ({
  data,
  // user,
  updateNewItemData,
  removeNewItemData,
}) => {
  /**
   * Процессор на создание записи Задача-Технология
   */
  const mutationTuple = useCreateTaskTechnologyProcessorMutation()

  const mutationState = useProcessorMutation(mutationTuple)

  const { loading: inRequest, errors, mutation, snakbar } = mutationState

  const technologiesConnection = useTechnologiesConnectionQuery({
    variables: {
      orderBy: TechnologyOrderByInput.NAME_ASC,
    },
  })

  const onChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      let value: string | number | null | undefined = event.target.value

      const name = event.target.name as keyof typeof data

      if (!name) {
        return
      }

      switch (name) {
        case 'level':
          value = value ? parseInt(value) : null
          break
      }

      updateNewItemData(data, {
        ...data,
        [name]: value,
      })
    },
    [data, updateNewItemData]
  )

  const setTechnology = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      const id = event.currentTarget.value

      updateNewItemData(data, {
        ...data,
        Technology: {
          connect: {
            id,
          },
        },
      })
    },
    [data, updateNewItemData]
  )

  const technology = useMemo(() => {
    const technologies =
      technologiesConnection.data?.objectsConnection.edges.reduce<
        TechnologiesConnectionTechnologyFragment[]
      >((curr, next) => {
        if (next?.node) {
          curr.push(next.node)
        }

        return curr
      }, []) || []

    return (
      <>
        <div className="technologies-buttons">
          {technologies.map((n) => {
            return (
              <Button
                key={n.id}
                value={n.id}
                size="small"
                variant="raised"
                title={n.name || ''}
                color={
                  data.Technology.connect?.id === n.id ? 'primary' : 'default'
                }
                onClick={setTechnology}
              >
                {n.name}
              </Button>
            )
          })}
        </div>
      </>
    )
  }, [
    data.Technology.connect?.id,
    setTechnology,
    technologiesConnection.data?.objectsConnection.edges,
  ])

  /**
   * Сохранение формы
   */
  const onSubmit = useCallback(
    (event: React.FormEvent) => {
      event.preventDefault()

      const variables: CreateTaskTechnologyProcessorMutationVariables = {
        data,
      }

      mutation({
        variables,
      }).then((result) => {
        if (!(result instanceof Error) && result?.data?.response.success) {
          removeNewItemData(data)
        }

        return result
      })
    },
    [data, mutation, removeNewItemData]
  )

  /**
   * Может ли быть форма сохранена
   */
  const canSave = useMemo(() => {
    return !!data.Technology.connect?.id || inRequest
  }, [data.Technology.connect?.id, inRequest])

  const remove = useCallback(() => {
    removeNewItemData(data)
  }, [data, removeNewItemData])

  /**
   * Кнопки
   */
  const buttons = useMemo(() => {
    //
    const buttons: JSX.Element[] = []

    buttons.push(
      <IconButton
        key="save"
        title="Сохранить"
        type="submit"
        color={canSave ? 'secondary' : 'default'}
        disabled={!canSave}
      >
        <SaveIcon />
      </IconButton>
    )

    buttons.push(
      <IconButton
        key="remove"
        title="Удалить позицию"
        disabled={!canSave}
        onClick={remove}
      >
        <RemoveIcon />
      </IconButton>
    )

    return buttons
  }, [canSave, remove])

  const level = useMemo(() => {
    const error = errors.find((n) => n.key === 'level')
    const value = data.level

    return (
      <UserTechnologyLevel
        inEditMode={true}
        error={error}
        onChange={onChange}
        value={value}
      />
    )
  }, [data.level, errors, onChange])

  return useMemo(() => {
    return (
      <>
        {snakbar}

        <NewTaskTaskTechnologyStyled
          buttons={buttons}
          level={level}
          technology={technology}
          onSubmit={onSubmit}
        />

        {/* <TaskTechnologyRow
        object={{
          level: data.level,
        }}
        user={user}
      /> */}
      </>
    )
  }, [buttons, level, onSubmit, snakbar, technology])
}

export default NewTaskTaskTechnology
