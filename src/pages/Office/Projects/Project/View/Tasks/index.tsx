import React, { useMemo, useCallback, useState } from 'react'

import { TaskStatus, TaskFragment } from 'src/modules/gql/generated'
import { OfficeProjectListSectionStyled } from 'src/pages/Office/components/ui/list/styles'
import { OfficeTitleStyled } from 'src/pages/Office/components/ui/Title/styles'

import OfficeProjectPageViewTask from './Task'
import { OfficeProjectPageViewTaskProps } from './Task/interfaces'

import useActiveTimer from 'src/hooks/useActiveTimer'

import CreateTaskForm from 'src/pages/Tasks/Task/View/form/CreateTask'
import { Button, Paper } from 'material-ui'
import { CreateTaskProcessorMutation } from 'src/modules/gql/generated'

import { ProjectTasksProps } from './interfaces'
import Link from 'next/link'
import { ProjectTasksStyled } from './styles'

/**
 * Формируем список задач с иерархией
 * @deprecated
 */
const makeTasksListWithHierarchy = (tasks: TaskFragment[]) => {
  /**
   * Делаем копию исходного массива задач
   */
  const tasksListWithHierarchy: OfficeProjectPageViewTaskProps['task'][] = [
    ...tasks,
  ].map((n) => {
    /**
     * Обязательно делаем копию объекта, так как изначальные объекты заморожены
     */
    return {
      ...n,
      /**
       * В каждую копию исходной задачи добавляем массив дочерних элементов
       */
      children: [],
    }
  })

  /**
   * Выполняем цикл, пока не местим все элементы с учетом их родителя
   */

  // let item: OfficeProjectPageViewTaskProps['task'] | null | undefined = undefined;
  // let parent: OfficeProjectPageViewTaskProps['task'] | null | undefined = undefined;

  /**
   * На всякий случай счетчик, если вдруг в бесконечную рекурсию уйдем
   */
  let count = tasksListWithHierarchy.length
  /**
   * Находим элемент, у которого указан родитель, родитель есть в корне списка и на этот элемент из корня списка задач никто не ссылается
   */
  do {
    count--

    // Элемент должен иметь ссылку на родителя
    const item = tasksListWithHierarchy.find(
      (n) =>
        n.Parent &&
        // На этот элемент не должны ссылаться другие элементы из корня
        tasksListWithHierarchy.findIndex((i) => i.Parent?.id === n.id) === -1 &&
        // Получить родителя в корне списка и это не должен быть сам элемент
        tasksListWithHierarchy.findIndex(
          (p) => p.id !== n.id && p.id === n.Parent?.id
        ) !== -1
    )

    /**
     * Если элемент не был найден, выходим из цикла
     */
    if (!item) {
      break
    }

    const parent = tasksListWithHierarchy.find(
      (p) => p.id !== item.id && p.id === item.Parent?.id
    )

    /**
     * Такая ситуация совсем вряд ли, но на всякий случай проверка
     */
    if (!parent) {
      console.error('Не был получен родитель')
      break
    }
    /**
     * Если элемент был найден, выдергиваем его из массива и добавляем к родительскому компоненту
     */

    tasksListWithHierarchy.splice(tasksListWithHierarchy.indexOf(item), 1)

    if (!parent.children) {
      parent.children = []
    }

    parent.children.push(item)
  } while (count > 0)

  return tasksListWithHierarchy
}

/**
 * Список задач внутри проекта
 */
const ProjectTasks: React.FC<ProjectTasksProps> = ({ project }) => {
  const { activeTimer } = useActiveTimer()

  const sections = useMemo(() => {
    const sections: JSX.Element[] = []

    const activeTasks: TaskFragment[] = []
    const completedTasks: TaskFragment[] = []
    const otherTasks: TaskFragment[] = []

    project.ProjectTasks?.forEach(({ Task }) => {
      switch (Task.status) {
        case TaskStatus.COMPLETED:
        case TaskStatus.DONE:
          completedTasks.push(Task)

          break

        case TaskStatus.REJECTED:
          otherTasks.push(Task)

          break

        default:
          activeTasks.push(Task)
      }
    })

    if (activeTasks.length) {
      sections.push(
        <OfficeProjectListSectionStyled key="activeTasks">
          {makeTasksListWithHierarchy(activeTasks).map((task) => {
            return (
              <OfficeProjectPageViewTask
                projects={[project]}
                key={task.id}
                task={task}
                activeTimer={activeTimer}
                project={project}
                CreatedBy={task.CreatedBy}
              />
            )
          })}
        </OfficeProjectListSectionStyled>
      )
    }

    if (completedTasks.length) {
      sections.push(
        <OfficeProjectListSectionStyled key="completedTasks">
          <OfficeTitleStyled>Завершенные задачи</OfficeTitleStyled>
          {makeTasksListWithHierarchy(completedTasks).map((task) => {
            return (
              <OfficeProjectPageViewTask
                projects={[project]}
                key={task.id}
                task={task}
                activeTimer={activeTimer}
                project={project}
                CreatedBy={task.CreatedBy}
              />
            )
          })}
        </OfficeProjectListSectionStyled>
      )
    }

    if (otherTasks.length) {
      sections.push(
        <OfficeProjectListSectionStyled key="otherTasks">
          <OfficeTitleStyled>Остальные задачи</OfficeTitleStyled>
          {makeTasksListWithHierarchy(otherTasks).map((task) => {
            return (
              <OfficeProjectPageViewTask
                projects={[project]}
                key={task.id}
                task={task}
                activeTimer={activeTimer}
                project={project}
                CreatedBy={task.CreatedBy}
              />
            )
          })}
        </OfficeProjectListSectionStyled>
      )
    }

    return <>{sections}</>
  }, [activeTimer, project])

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
        <ProjectTasksStyled>
          <header>
            <div className="left">{createTask}</div>
            <div>
              <Link href={`/office/projects/${project.id}/calendar/day`}>
                <a>Смотреть в календаре</a>
              </Link>
            </div>
          </header>
          {sections}
        </ProjectTasksStyled>
      </>
    )
  }, [createTask, project.id, sections])
}

export default ProjectTasks
