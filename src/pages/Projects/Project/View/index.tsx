import React, { useMemo } from 'react'
import { ProjectViewProps } from './interfaces'
import { ProjectViewStyled } from './styles'
// import Link from 'next/link'
import Typography from 'material-ui/Typography'
import { NextSeo } from 'next-seo'
import TasksView from 'src/pages/Tasks/View'
import CreateTaskForm from 'src/pages/Tasks/Task/View/form/CreateTask'

const ProjectView: React.FC<ProjectViewProps> = (props) => {
  const project = props.object

  /**
   * Список задач
   */
  const tasksList = useMemo(() => {
    const tasks = project.ProjectTasks?.map((n) => n.Task) ?? []

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

  const createTaskForm = useMemo(() => {
    return (
      <CreateTaskForm
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
    )
  }, [project.id])

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
