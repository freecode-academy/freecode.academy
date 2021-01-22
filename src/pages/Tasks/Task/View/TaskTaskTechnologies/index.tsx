import React, { useCallback, useMemo, useState } from 'react'
import { TaskTaskTechnologiesProps } from './interfaces'
import { TaskTaskTechnologiesGridTableStyled } from './styles'

import {
  GridTableAttributeStyled,
  GridTableItemStyled,
  // GridTableAttributesContainerStyled,
} from 'src/components/GridTable/styles'
import TaskTechnologyRow from './TaskTechnologyRow'
import IconButton from 'material-ui/IconButton'
import AddButton from 'material-ui-icons/Add'
import NewTaskTaskTechnology from './NewTaskTaskTechnology'
import { NewTaskTaskTechnologyProps } from './NewTaskTaskTechnology/interfaces'

const TaskTaskTechnologies: React.FC<TaskTaskTechnologiesProps> = ({
  object,
  user,
  inEditMode,
}) => {
  /**
   * Данные новых записей
   */
  const [newItemsData, setNewItemsData] = useState<
    NewTaskTaskTechnologyProps['data'][]
  >([])

  const updateNewItemData = useCallback(
    (
      item: NewTaskTaskTechnologyProps['data'],
      data: NewTaskTaskTechnologyProps['data']
    ) => {
      const index = newItemsData.indexOf(item)

      if (index !== -1) {
        const newData = [...newItemsData]
        newData[index] = {
          ...item,
          ...data,
        }

        setNewItemsData(newData)
      }
    },
    [newItemsData]
  )

  /**
   * Добавляем новый элемент в массив новых записей
   */
  const addNewItemData = useCallback(() => {
    const newData = [...newItemsData]

    const newItem: NewTaskTaskTechnologyProps['data'] = {
      Task: {
        connect: {
          id: object.id,
        },
      },
      Technology: {},
    }

    newData.push(newItem)

    setNewItemsData(newData)
  }, [newItemsData, object.id])

  /**
   * Удаляем элемент из списка данных
   */
  const removeNewItemData = useCallback(
    (item: NewTaskTaskTechnologyProps['data']) => {
      const index = newItemsData.indexOf(item)

      if (index !== -1) {
        const newData = [...newItemsData]

        newData.splice(index, 1)

        setNewItemsData(newData)
      }
    },
    [newItemsData]
  )

  const canEdit = useMemo(() => {
    return user && user.id === object.CreatedBy?.id
  }, [object.CreatedBy?.id, user])

  const buttons = useMemo(() => {
    if (!canEdit) {
      return null
    }

    return (
      <IconButton onClick={addNewItemData} title="Добавить запись">
        <AddButton />
      </IconButton>
    )
  }, [addNewItemData, canEdit])

  const header = useMemo(() => {
    return (
      <GridTableItemStyled>
        <GridTableAttributeStyled>{buttons}</GridTableAttributeStyled>

        <GridTableAttributeStyled>Технология</GridTableAttributeStyled>
        <GridTableAttributeStyled>Требуемый уровень</GridTableAttributeStyled>

        {/* <GridTableAttributeStyled>Уровень знания</GridTableAttributeStyled>
            <GridTableAttributeStyled>Статус</GridTableAttributeStyled> */}
        {/* 
            <GridTableAttributesContainerStyled>
              <GridTableAttributeStyled>Используется С</GridTableAttributeStyled>
              <GridTableAttributeStyled>Используется До</GridTableAttributeStyled>
            </GridTableAttributesContainerStyled> */}
      </GridTableItemStyled>
    )
  }, [buttons])

  /**
   * Новые записи
   */
  const newItems = useMemo(() => {
    return newItemsData.map((n, index) => {
      return (
        <NewTaskTaskTechnology
          key={n.id || index}
          data={n}
          user={user}
          updateNewItemData={updateNewItemData}
          removeNewItemData={removeNewItemData}
        />
      )
    })
  }, [newItemsData, removeNewItemData, updateNewItemData, user])

  /**
   * Текущие записи
   */
  const items = useMemo(() => {
    return object.TaskTechnologies?.map((n) => {
      return <TaskTechnologyRow key={n.id} object={n} user={user} />
    })
  }, [object.TaskTechnologies, user])

  return useMemo(() => {
    if (!items?.length && !inEditMode) {
      return null
    }

    return (
      <>
        <TaskTaskTechnologiesGridTableStyled>
          {header}
          {newItems}
          {items}
        </TaskTaskTechnologiesGridTableStyled>
      </>
    )
  }, [header, inEditMode, items, newItems])
}

export default TaskTaskTechnologies
