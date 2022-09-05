import { useMemo } from 'react'
import {
  SortOrder,
  // TaskOrderByWithRelationInput,
  TaskStatus,
  useOfficeProjectsQuery,
  useOfficeTasksQuery,
} from 'src/modules/gql/generated'
import { useOfficeDataProps } from './interfaces'

/**
 * Получаем все необходимые данные для личного кабинета
 */
const useOfficeData = (props: useOfficeDataProps) => {
  const currentUserId = props.currentUserId

  const projectsData = useOfficeProjectsQuery({
    variables: {
      /**
       * Если текущий пользователь авторизован, берем только проекты для него.
       * Иначе все подряд выводим
       */
      where: currentUserId
        ? {
            OR: [
              {
                // Проект создан пользователем
                CreatedBy: {
                  // id: currentUserId,
                  equals: currentUserId,
                },
              },
              {
                // Или содержит задачи, которые
                // ProjectTasks_some: {
                //   Task: {
                //     OR: [
                //       {
                //         // Созданы текущим пользователем
                //         CreatedBy: {
                //           id: currentUserId,
                //         },
                //       },
                //       {
                //         /**
                //          * Или которые пользователь выполнял
                //          */
                //         Timers_some: {
                //           CreatedBy: {
                //             id: currentUserId,
                //           },
                //         },
                //       },
                //     ],
                //   },
                // },
                ProjectTasks: {
                  some: {
                    Task_ProjectTaskToTask: {
                      OR: [
                        {
                          // Созданы текущим пользователем
                          CreatedBy: {
                            equals: currentUserId,
                          },
                        },
                        {
                          /**
                           * Или которые пользователь выполнял
                           */
                          Timers: {
                            some: {
                              CreatedBy: {
                                equals: currentUserId,
                              },
                            },
                          },
                        },
                      ],
                    },
                  },
                },
              },
            ],
          }
        : undefined,
    },
  })

  /**
   * Формируем конечный массив проектов
   */
  const projects = useMemo(() => {
    return projectsData.data?.projects || []
  }, [projectsData.data?.projects])

  /**
   * Формируем массив айдишников полученных проектов
   */
  const projectsIds = useMemo(() => projects.map((n) => n.id), [projects])

  /**
   * Запрос на получение задач
   */
  const tasksData = useOfficeTasksQuery({
    skip: !projects.length,
    variables: {
      // orderBy: TaskOrderByWithRelationInput.UPDATEDAT_DESC,
      orderBy: {
        updatedAt: SortOrder.DESC,
      },
      where: {
        // TaskProjects_some: {
        //   Project: {
        //     id_in: projectsIds,
        //   },
        // },
        ProjectTasks: {
          some: {
            Project: {
              in: projectsIds,
            },
          },
        },
        // status_not_in: [
        //   TaskStatus.DONE,
        //   TaskStatus.COMPLETED,
        //   TaskStatus.REJECTED,
        // ],
        status: {
          not: {
            in: [TaskStatus.DONE, TaskStatus.COMPLETED, TaskStatus.REJECTED],
          },
        },
      },
    },
  })

  /**
   * Конечный массив задач
   */
  const tasks = useMemo(() => {
    return tasksData.data?.tasks || []
  }, [tasksData.data?.tasks])

  return useMemo(() => {
    return {
      projects,
      tasks,
    }
  }, [projects, tasks])
}

export default useOfficeData
