import React, { useCallback, useMemo, useState } from 'react'
import { ProjectViewProps } from './interfaces'
import { ProjectViewStyled } from './styles'
// import Link from 'next/link'
import Typography from 'material-ui/Typography'
import { NextSeo } from 'next-seo'
import TasksView from 'src/pages/Tasks/View'
import CreateTaskForm from 'src/pages/Tasks/Task/View/form/CreateTask'
import { CreateTaskProcessorMutation } from 'src/modules/gql/generated'
import { Button } from 'material-ui'
import { TasksViewProps } from 'src/pages/Tasks/View/interfaces'

const ProjectView: React.FC<ProjectViewProps> = (props) => {
  const project = props.object

  /**
   * Список задач
   */
  const tasksList = useMemo(() => {
    const tasks: TasksViewProps['objects'] = []

    project.ProjectTasks?.forEach((n) => {
      n.Task && tasks.push(n.Task)
    })

    if (!tasks.length) {
      return null
    }

    return (
      <TasksView
        objects={tasks}
        page={0}
        limit={tasks.length}
        total={tasks.length}
      />
    )
  }, [project.ProjectTasks])

  /**
   * Создание новой задачи
   */

  const [opened, setOpened] = useState(false)

  const toggleOpened = useCallback(() => {
    setOpened(!opened)
  }, [opened])

  const cancel = useCallback(() => {
    setOpened(false)
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

  const createTaskForm = useMemo(() => {
    return (
      <>
        {!opened ? (
          <Button onClick={toggleOpened} variant="raised" size="small">
            Добавить задачу
          </Button>
        ) : null}
        <CreateTaskForm
          opened={opened}
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
      </>
    )
  }, [opened, toggleOpened, onCreateTask, cancel, project.id])

  /**
   * Конечный вывод
   */
  return useMemo(() => {
    const name = project.Resource?.name || project.name || ''

    return (
      <>
        <NextSeo
          title={name}
          description={name ? `Проект "${name}"` : ''}
          canonical={
            project.Resource?.uri
              ? project.Resource?.uri
              : project.id
              ? `/projects/id/${project.id}`
              : undefined
          }
        />
        <ProjectViewStyled>
          <Typography variant="title">{name}</Typography>

          {createTaskForm}
          {tasksList}
        </ProjectViewStyled>
      </>
    )
  }, [
    createTaskForm,
    project.Resource?.name,
    project.Resource?.uri,
    project.id,
    project.name,
    tasksList,
  ])
}

export default ProjectView
