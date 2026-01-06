import React, { useEffect } from 'react'
import Link from 'next/link'
import IconButton from 'material-ui/IconButton'
import StopIcon from 'material-ui-icons/Stop'
import {
  TimersConnectionTimerFragment,
  useTimersConnectionQuery,
} from 'src/gql/generated'
import { UserLink } from 'src/uikit/Link/User'
import { FormattedDate } from 'src/ui-kit/format/FormattedDate'
import { Markdown } from 'src/components/Markdown'
import useStopTimer from 'src/hooks/useStopTimer'
import {
  TimerCardStyled,
  TimerCardHeader,
  TimerCardTitle,
  TimerCardAuthor,
  TimerCardTime,
  TimerCardProject,
  TimerCardDescription,
  TimerCardStatus,
  TimerCardDates,
  TimerCardDateItem,
  TimerCardActions,
} from './styles'

type TimerCardProps = {
  timer: TimersConnectionTimerFragment
}

function formatDuration(start: Date, end: Date | null | undefined): string {
  const endTime = end ? new Date(end).getTime() : Date.now()
  const startTime = new Date(start).getTime()
  const diff = endTime - startTime

  const hours = Math.floor(diff / (1000 * 60 * 60))
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))

  if (hours > 0) {
    return `${hours}h ${minutes}m`
  }
  return `${minutes}m`
}

export const TimerCard: React.FC<TimerCardProps> = ({ timer }) => {
  const isRunning = !timer.stopedAt

  const {
    mutation: stopTimer,
    snakbar: stopTimerSnakbar,
    loading: stopLoading,
  } = useStopTimer({ timerId: timer.id })

  const { refetch } = useTimersConnectionQuery({
    variables: {
      where: { id: { equals: timer.id } },
      first: 1,
    },
    skip: !isRunning,
  })

  useEffect(() => {
    if (!isRunning) return

    const interval = setInterval(() => {
      refetch()
    }, 60000)

    return () => clearInterval(interval)
  }, [isRunning, refetch])

  const task = timer.Task
  const duration = formatDuration(timer.createdAt, timer.stopedAt)
  const project = task?.TaskProjects?.[0]?.Project

  return (
    <TimerCardStyled $isRunning={isRunning}>
      <TimerCardHeader>
        <TimerCardTitle>
          {task ? (
            <Link href={`/tasks/${task.id}`}>{task.name}</Link>
          ) : (
            <span>No task</span>
          )}
        </TimerCardTitle>

        <TimerCardTime $isRunning={isRunning}>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          {duration}
          {isRunning && <span className="running-indicator">●</span>}
        </TimerCardTime>
      </TimerCardHeader>

      {project && (
        <TimerCardProject>
          <Link href={`/projects/${project.id}`}>{project.name}</Link>
        </TimerCardProject>
      )}

      {timer.content && <Markdown>{timer.content}</Markdown>}

      {task?.description && (
        <TimerCardDescription>{task.description}</TimerCardDescription>
      )}

      {task && (
        <TimerCardStatus $status={task.status}>{task.status}</TimerCardStatus>
      )}

      {timer.CreatedBy && (
        <TimerCardAuthor>
          <UserLink user={timer.CreatedBy} size="small" />
        </TimerCardAuthor>
      )}

      {task && (
        <TimerCardDates>
          {task.startDatePlaning && (
            <TimerCardDateItem>
              <span>Plan start:</span>
              <FormattedDate
                value={task.startDatePlaning}
                format="dateMedium"
              />
            </TimerCardDateItem>
          )}
          {task.endDatePlaning && (
            <TimerCardDateItem>
              <span>Plan end:</span>
              <FormattedDate value={task.endDatePlaning} format="dateMedium" />
            </TimerCardDateItem>
          )}
          {task.startDate && (
            <TimerCardDateItem>
              <span>Started:</span>
              <FormattedDate value={task.startDate} format="dateTimeMedium" />
            </TimerCardDateItem>
          )}
          {task.endDate && (
            <TimerCardDateItem>
              <span>Ended:</span>
              <FormattedDate value={task.endDate} format="dateTimeMedium" />
            </TimerCardDateItem>
          )}
        </TimerCardDates>
      )}

      {isRunning && (
        <TimerCardActions>
          <IconButton
            onClick={stopTimer}
            disabled={stopLoading}
            title="Stop timer"
          >
            <StopIcon />
          </IconButton>
          <span>Stop timer</span>
        </TimerCardActions>
      )}

      {stopTimerSnakbar}
    </TimerCardStyled>
  )
}
