import { DateSelectArg } from '@fullcalendar/react'
import React, { useCallback, useMemo } from 'react'
import useProcessorMutation from 'src/hooks/useProcessorMutation'
import { useCreateTaskProcessorMutation } from 'src/modules/gql/generated'
import Calendar from 'src/pages/Office/View/Calendar'
import { ProjectCalendarProps } from './interfaces'

/**
 * Календарь задач в проекте
 */
const ProjectCalendar: React.FC<ProjectCalendarProps> = ({
  tasks,
  project,
}) => {
  const createTaskTuple = useCreateTaskProcessorMutation()

  const { snakbar, loading, mutation: createTask } = useProcessorMutation(
    createTaskTuple
  )

  const handleDateSelect = useCallback(
    (selectInfo: DateSelectArg) => {
      if (loading) {
        return
      }

      const title = prompt('Введите название задачи')
      const calendarApi = selectInfo.view.calendar

      calendarApi.unselect() // clear date selection

      if (title) {
        // calendarApi.addEvent({
        //   // id: createEventId(),
        //   title,
        //   start: selectInfo.startStr,
        //   end: selectInfo.endStr,
        //   allDay: selectInfo.allDay,
        // })

        createTask({
          variables: {
            data: {
              Project: {
                connect: {
                  id: project.id,
                },
              },
              name: title,
              startDatePlaning: selectInfo.start,
              endDatePlaning: selectInfo.end,
            },
          },
        })
      }
    },
    [createTask, loading, project.id]
  )

  return useMemo(() => {
    return (
      <>
        {snakbar}
        <Calendar tasks={tasks} select={handleDateSelect} />
      </>
    )
  }, [snakbar, tasks, handleDateSelect])
}

export default ProjectCalendar
