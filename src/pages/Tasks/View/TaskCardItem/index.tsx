import TaskLink from 'src/uikit/Link/Task'
import { UserLink } from 'src/uikit/Link/User'
import { ProjectLink } from 'src/uikit/Link/Project'
import { useProject } from 'src/hooks/useProject'
import { TasksConnectionTaskFragment } from 'src/gql/generated'
import { TaskStatusBadge } from 'src/components/StatusBadge'
import {
  TaskCard,
  TaskCardTitle,
  TaskCardStatus,
  TaskCardMeta,
  TaskMetaItem,
  TaskCardDescription,
  TaskNeedHelpBadge,
  TaskActiveTimers,
} from '../styles'
import { FormattedDate } from 'src/ui-kit/format/FormattedDate'

type TaskCardItemProps = {
  task: TasksConnectionTaskFragment
  children?: React.ReactNode
}

export const TaskCardItem: React.FC<TaskCardItemProps> = ({
  task,
  children,
}) => {
  const project = useProject(task.projectId)
  const activeTimers = task.Timers?.filter((n) => n.stopedAt === null) || []

  return (
    <TaskCard>
      <TaskCardTitle>
        <TaskLink object={task} />
        {task.needHelp && (
          <TaskNeedHelpBadge>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
            Help
          </TaskNeedHelpBadge>
        )}
      </TaskCardTitle>

      <TaskCardStatus>
        <TaskStatusBadge status={task.status} />
      </TaskCardStatus>

      <TaskCardMeta>
        {task.CreatedBy && (
          <TaskMetaItem>
            <UserLink user={task.CreatedBy} size="small" showName />
          </TaskMetaItem>
        )}

        {project && (
          <TaskMetaItem>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
              <line x1="8" y1="21" x2="16" y2="21" />
              <line x1="12" y1="17" x2="12" y2="21" />
            </svg>
            <ProjectLink object={project} />
          </TaskMetaItem>
        )}

        {task.createdAt && (
          <TaskMetaItem className="date">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            <FormattedDate value={task.createdAt} />
          </TaskMetaItem>
        )}

        {activeTimers.length > 0 && (
          <TaskMetaItem>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <TaskActiveTimers>
              {activeTimers.map((timer) =>
                timer.CreatedBy ? (
                  <UserLink
                    key={timer.id}
                    user={timer.CreatedBy}
                    size="small"
                    showName={false}
                  />
                ) : null
              )}
            </TaskActiveTimers>
          </TaskMetaItem>
        )}
      </TaskCardMeta>

      {task.description && (
        <TaskCardDescription>{task.description}</TaskCardDescription>
      )}

      {children}
    </TaskCard>
  )
}
