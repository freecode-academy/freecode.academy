import React, { useCallback, useMemo, useState } from 'react'
// import { Button } from 'material-ui'

import { OfficeProjectPageViewProps } from './interfaces'
import { OfficeProjectPageViewStyled } from './styles'

import Tasks from './Tasks'
import CreateTaskForm from 'src/pages/Tasks/Task/View/form/CreateTask'
import { Button, Paper } from 'material-ui'
import { CreateTaskProcessorMutation } from 'src/modules/gql/generated'

const OfficeProjectPageView: React.FC<OfficeProjectPageViewProps> = ({
  project,
}) => {
  // const [createTaskOpened, setCreateTaskOpened] = useState(false);

  // const opendCreateTaskForm = useCallback(() => {

  //   setCreateTaskOpened(true);
  // }, []);

  const [createTaskOpened, createTaskOpenedSetter] = useState(false)

  const toggleOpened = useCallback(() => {
    createTaskOpenedSetter(!createTaskOpened)
  }, [createTaskOpened])

  const cancel = useCallback(() => {
    createTaskOpenedSetter(false)
  }, [])

  const onCreateTask = useCallback(
    (data: CreateTaskProcessorMutation) => {
      if (data.response.data?.id) {
        // router.push(`/tasks/${data.response.data?.id}`);

        cancel()
      }
    },
    [cancel]
  )

  const createTask = useMemo<JSX.Element>(() => {
    return (
      <>
        {!createTaskOpened ? (
          <Button onClick={toggleOpened} variant="raised" size="small">
            Добавить задачу
          </Button>
        ) : null}

        <Paper>
          <CreateTaskForm
            opened={createTaskOpened}
            onSuccess={onCreateTask}
            cancel={cancel}
            options={{
              variables: {
                data: {
                  name: '',
                  Project: {
                    connect: {
                      id: project.id,
                    },
                  },
                },
              },
            }}
          />
        </Paper>
      </>
    )

    // if (!createTaskOpened) {
    //   return <Button
    //     onClick={opendCreateTaskForm}
    //   >
    //     Добавить задачу
    //   </Button>
    // }

    // else {

    // }
  }, [cancel, createTaskOpened, onCreateTask, project.id, toggleOpened])

  return useMemo(() => {
    return (
      <>
        <OfficeProjectPageViewStyled>
          {createTask}
          <Tasks project={project} />
        </OfficeProjectPageViewStyled>
      </>
    )
  }, [project, createTask])
}

export default OfficeProjectPageView
