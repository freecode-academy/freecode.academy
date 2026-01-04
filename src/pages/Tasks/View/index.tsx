import React from 'react'
import { TasksViewProps } from './interfaces'
import { TasksViewStyled, TasksGrid } from './styles'
import Pagination from 'src/components/Pagination'
import { TaskStatusFilter } from 'src/components/TaskStatusFilter'
import { TaskCardItem } from './TaskCardItem'

export const TasksView: React.FC<TasksViewProps> = ({
  objects,
  limit,
  page,
  total,
}) => {
  return (
    <TasksViewStyled>
      <TaskStatusFilter />

      {objects.length > 0 ? (
        <TasksGrid>
          {objects.map((task) => (
            <TaskCardItem key={task.id} task={task} />
          ))}
        </TasksGrid>
      ) : (
        <p>No tasks found</p>
      )}

      <Pagination limit={limit} page={page} total={total} />
    </TasksViewStyled>
  )
}
