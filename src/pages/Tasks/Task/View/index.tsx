import React, { useContext, useMemo } from 'react'
import { TaskViewStyled, TaskViewDetails } from './styles'
import { TimersView } from 'src/pages/Timers/View'
import Link from 'next/link'
import TaskTaskTechnologies from './TaskTaskTechnologies'
import PrismaContext, { PrismaCmsContext } from '@prisma-cms/context'
import Comments from './Comments'
import { SiteFrontEditor } from 'src/components/SiteFrontEditor'
import { TaskQuery } from 'src/gql/generated'
import { TaskCardItem } from '../../View/TaskCardItem'
import TaskButtons from '../../View/Task/TaskButtons'

export type TaskViewProps = {
  object: NonNullable<TaskQuery['object']>
  loading: boolean
}

export const TaskView: React.FC<TaskViewProps> = ({ object, loading }) => {
  const context = useContext(PrismaContext) as PrismaCmsContext
  const user = context.user

  const timersList = useMemo(() => {
    const timers = object.Timers || []

    if (!timers.length) {
      return null
    }

    return (
      <TimersView count={timers.length} objects={timers} loading={loading} />
    )
  }, [object.Timers, loading])

  const lesson = useMemo(() => {
    if (object.CodeChallengeCompletion) {
      const codeChallenge = object.CodeChallengeCompletion.CodeChallenge
      if (!codeChallenge) {
        return null
      }

      const block = codeChallenge.CodeChallengeBlock
      if (!block) {
        return null
      }
      const rootBlock = block.Parent

      const parent = rootBlock ? (
        <span>
          <Link
            href={`/learn/sections/${rootBlock.id}`}
            title={rootBlock.name || ''}
          >
            {rootBlock.name}
          </Link>{' '}
          /
        </span>
      ) : null

      return (
        <div>
          <p>
            Урок: {parent}{' '}
            <Link href={`/learn/sections/${block.id}`} title={block.name || ''}>
              {block.name}
            </Link>{' '}
            /{' '}
            <Link
              href={`/learn/exercises/${codeChallenge.id}`}
              title={codeChallenge.localeTitle || codeChallenge.name || ''}
            >
              {codeChallenge.localeTitle || codeChallenge.name}
            </Link>
          </p>
        </div>
      )
    }
  }, [object.CodeChallengeCompletion])

  const taskTechnologies = useMemo(() => {
    return (
      <TaskTaskTechnologies object={object} user={user} inEditMode={false} />
    )
  }, [object, user])

  const comments = useMemo(() => {
    return <Comments task={object} />
  }, [object])

  return (
    <TaskViewStyled>
      <TaskCardItem task={object}>
        <TaskViewDetails>
          <TaskButtons object={object} />

          {lesson}

          {object.content && <SiteFrontEditor value={object.content} />}

          {taskTechnologies}

          {timersList}

          {comments}
        </TaskViewDetails>
      </TaskCardItem>
    </TaskViewStyled>
  )
}
