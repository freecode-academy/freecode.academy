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
        <GridTableAttributeStyled
          // @ts-expect-error types
          className="buttons"
        />

        {/* @ts-expect-error types */}
        <GridTableAttributeStyled className="status">
          Статус
        </GridTableAttributeStyled>

        {/* @ts-expect-error types */}
        <GridTableAttributeStyled>Задача</GridTableAttributeStyled>
        <GridTableAttributesContainerStyled>
          {/* @ts-expect-error types */}
          <GridTableAttributeStyled>Дата создания</GridTableAttributeStyled>

          {/* @ts-expect-error types */}
          <GridTableAttributeStyled>
            Планируемая дата начала
          </GridTableAttributeStyled>

          {/* @ts-expect-error types */}
          <GridTableAttributeStyled>
            Планируемая дата выполнения
          </GridTableAttributeStyled>

          {/* @ts-expect-error types */}
          <GridTableAttributeStyled>Дата начала</GridTableAttributeStyled>

          {/* @ts-expect-error types */}
          <GridTableAttributeStyled>Дата выполнения</GridTableAttributeStyled>
        </GridTableAttributesContainerStyled>

        {/* @ts-expect-error types */}
        <GridTableAttributeStyled>Постановщик</GridTableAttributeStyled>

        {/* @ts-expect-error types */}
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
