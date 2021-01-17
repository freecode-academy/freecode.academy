import React, { useMemo } from 'react'
import { TasksViewProps } from './interfaces'
import { TasksGridTableStyled, TasksViewStyled } from './styles'
import {
  GridTableAttributeStyled,
  GridTableItemStyled,
  GridTableAttributesContainerStyled,
} from 'src/components/GridTable/styles'
import TasksViewTask from './Task'
import Pagination from 'src/components/Pagination'

const TasksView: React.FC<TasksViewProps> = ({
  objects,
  limit,
  page,
  total,
  ...other
}) => {
  const header = useMemo(() => {
    return (
      <GridTableItemStyled>
        <GridTableAttributeStyled className="buttons" />
        <GridTableAttributeStyled className="status">
          Статус
        </GridTableAttributeStyled>
        <GridTableAttributeStyled>Задача</GridTableAttributeStyled>
        <GridTableAttributesContainerStyled>
          <GridTableAttributeStyled>Дата создания</GridTableAttributeStyled>
          <GridTableAttributeStyled>
            Планируемая дата начала
          </GridTableAttributeStyled>
          <GridTableAttributeStyled>
            Планируемая дата выполнения
          </GridTableAttributeStyled>

          <GridTableAttributeStyled>Дата начала</GridTableAttributeStyled>
          <GridTableAttributeStyled>Дата выполнения</GridTableAttributeStyled>
        </GridTableAttributesContainerStyled>
        <GridTableAttributeStyled>Постановщик</GridTableAttributeStyled>
        <GridTableAttributeStyled>Кто работает</GridTableAttributeStyled>
      </GridTableItemStyled>
    )
  }, [])

  const items = objects.map((n) => {
    return <TasksViewTask key={n.id} object={n} />
  })

  return useMemo(() => {
    return (
      <>
        <TasksViewStyled {...other}>
          <TasksGridTableStyled>
            {header}
            {items}
          </TasksGridTableStyled>

          <Pagination limit={limit} page={page} total={total} />
        </TasksViewStyled>
      </>
    )
  }, [header, items, limit, other, page, total])
}

export default TasksView
