import { Paper } from 'material-ui'
import React, { useMemo } from 'react'
import CreateTaskForm from 'src/pages/Tasks/Task/View/form/CreateTask'
import { CreateSubtaskProps } from './interfaces'

/**
 * Создание подзадачи
 */
const CreateSubtask: React.FC<CreateSubtaskProps> = ({ ...other }) => {
  return useMemo(() => {
    return (
      <>
        <Paper>
          <CreateTaskForm {...other} />
        </Paper>
      </>
    )
  }, [other])
}

export default CreateSubtask
