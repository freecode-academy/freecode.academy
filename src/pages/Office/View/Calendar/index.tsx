import React, { useCallback, useMemo, useState } from 'react'
import FullCalendar, {
  EventContentArg,
  EventInput,
  EventChangeArg,
} from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { useUpdateTaskProcessorMutation } from 'src/modules/gql/generated'
import useProcessorMutation from 'src/hooks/useProcessorMutation'
import { CalendarProps } from './interfaces'
import CalendarEvent from './Event'

// interface DemoAppState {
//   weekendsVisible: boolean
//   currentEvents: EventApi[]
// }

// function renderSidebarEvent(event: EventApi) {
//   return (
//     <li key={event.id}>
//       <b>{event.start ? formatDate(event.start, { year: 'numeric', month: 'short', day: 'numeric' }) : null}</b>
//       <i>{event.title}</i>
//     </li>
//   )
// }

/**
 * Календарь задач
 */
const Calendar: React.FC<CalendarProps> = ({ tasks, ...other }) => {
  const updateTaskTuple = useUpdateTaskProcessorMutation()

  const { snakbar, mutation: updateTask } = useProcessorMutation(
    updateTaskTuple
  )

  // state: DemoAppState = {
  //   weekendsVisible: true,
  //   currentEvents: []
  // }

  const [weekendsVisible] = useState(true)

  // const {
  //   0: currentEvents,
  //   1: currentEventsSetter,
  // } = useState<EventInput[]>([]);

  const currentEvents = useMemo<EventInput[]>(() => {
    return (
      tasks.map((task) => {
        return {
          id: task.id,
          title: task.name,
          url: `/tasks/${task.id}`,
          start: task.startDatePlaning || task.startDate || task.createdAt,
          end: task.endDatePlaning || task.endDate || undefined,
        }
      }) || []
    )
  }, [tasks])

  /**
   * Рендерер элемента в календаре
   */
  const renderEventContent = useCallback(
    (eventContent: EventContentArg) => {
      const task = tasks.find((n) => n.id === eventContent.event.id)

      if (!task) {
        return null
      }

      return <CalendarEvent task={task} eventContent={eventContent} />
    },
    [tasks]
  )

  // const handleWeekendsToggle = useCallback(() => {
  //   weekendsVisibleSetter(!weekendsVisible);
  // }, [weekendsVisible])

  // const handleEventClick = useCallback((clickInfo: EventClickArg) => {
  //   if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
  //     clickInfo.event.remove()
  //   }
  // }, []);

  /**
   * Измененный стейт всех задач
   */
  // const handleEvents = useCallback((events: EventApi[]) => {

  //   console.log('handleEvents events', events);

  //   // currentEventsSetter(events);
  // }, []);

  const eventChangeHandler = useCallback(
    (arg: EventChangeArg) => {
      updateTask({
        variables: {
          where: {
            id: arg.event.id,
          },
          data: {
            startDatePlaning: arg.event.start,
            endDatePlaning: arg.event.end,
          },
        },
      })

      // currentEventsSetter(events);
    },
    [updateTask]
  )

  // const renderSidebar = useMemo(() => {
  //   return (
  //     <div className='demo-app-sidebar'>
  //       <div className='demo-app-sidebar-section'>
  //         <h2>Instructions</h2>
  //         <ul>
  //           <li>Select dates and you will be prompted to create a new event</li>
  //           <li>Drag, drop, and resize events</li>
  //           <li>Click an event to delete it</li>
  //         </ul>
  //       </div>
  //       <div className='demo-app-sidebar-section'>
  //         <label>
  //           <input
  //             type='checkbox'
  //             checked={weekendsVisible}
  //             onChange={handleWeekendsToggle}
  //           ></input>
  //           toggle weekends
  //         </label>
  //       </div>
  //       <div className='demo-app-sidebar-section'>
  //         <h2>All Events ({currentEvents.length})</h2>
  //         <ul>
  //           {currentEvents.map(renderSidebarEvent)}
  //         </ul>
  //       </div>
  //     </div>
  //   )

  // }, [currentEvents, handleWeekendsToggle, weekendsVisible]);

  return useMemo(() => {
    return (
      <>
        {snakbar}
        <FullCalendar
          /* you can update a remote database when these fire:
          eventAdd={function(){}}
          eventChange={function(){}}
          eventRemove={function(){}}
          */
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay',
          }}
          initialView="timeGridWeek"
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          weekends={weekendsVisible}
          // initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
          events={currentEvents}
          // select={handleDateSelect}
          eventContent={renderEventContent} // custom render function
          // eventClick={handleEventClick}
          // eventsSet={handleEvents} // called after events are initialized/added/changed/removed
          eventChange={eventChangeHandler}
          locale="ru"
          {...other}
        />
      </>
    )
  }, [
    currentEvents,
    eventChangeHandler,
    renderEventContent,
    snakbar,
    weekendsVisible,
    other,
  ])
}

export default Calendar
