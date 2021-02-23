import { useMemo } from 'react'
import {
  TaskOrderByInput,
  useOfficeProjectsQuery,
  useOfficeTasksQuery,
} from 'src/modules/gql/generated'
import { OfficeContextValue } from '../../Context'
import { useOfficeDataProps } from './interfaces'

/**
 * Получаем все необходимые данные для личного кабинета
 */
const useOfficeData = (props: useOfficeDataProps) => {
  const currentUserId = props.currentUserId

  const projectsData = useOfficeProjectsQuery({
    skip: !currentUserId,
    variables: {
      where: {
        OR: [
          {
            // Проект создан пользователем
            CreatedBy: {
              id: currentUserId,
            },
          },
          {
            // Или содержит задачи, которые
            ProjectTasks_some: {
              Task: {
                OR: [
                  {
                    // Созданы текущим пользователем
                    CreatedBy: {
                      id: currentUserId,
                    },
                  },
                  {
                    /**
                     * Или которые пользователь выполнял
                     */
                    Timers_some: {
                      CreatedBy: {
                        id: currentUserId,
                      },
                    },
                  },
                ],
              },
            },
          },
        ],
      },
    },
  })

  const projects = useMemo(() => {
    return (
      projectsData.data?.projectsConnection.edges.reduce<
        OfficeContextValue['projects']
      >((curr, next) => {
        if (next?.node) {
          curr.push(next.node)
        }

        return curr
      }, []) ?? []
    )
  }, [projectsData.data?.projectsConnection.edges])

  const projectsIds = useMemo(() => projects.map((n) => n.id), [projects])

  const tasksData = useOfficeTasksQuery({
    skip: !projects.length,
    variables: {
      orderBy: TaskOrderByInput.UPDATEDAT_DESC,
      where: {
        TaskProjects_some: {
          Project: {
            id_in: projectsIds,
          },
        },
      },
    },
  })

  const tasks = useMemo(() => {
    return (
      tasksData.data?.tasksConnection.edges.reduce<OfficeContextValue['tasks']>(
        (curr, next) => {
          if (next?.node) {
            curr.push(next.node)
          }

          return curr
        },
        []
      ) ?? []
    )
  }, [tasksData.data?.tasksConnection.edges])

  return useMemo(() => {
    return {
      projects,
      tasks,
    }
  }, [projects, tasks])
}

export default useOfficeData
