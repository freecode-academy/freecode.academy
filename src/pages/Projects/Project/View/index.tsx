import React from 'react'
import { ProjectViewStyled } from './styles'
import Typography from 'material-ui/Typography'
import { NextSeo } from 'next-seo'
import { TasksView } from 'src/pages/Tasks/View'
import {
  ProjectFragment,
  SortOrder,
  useTasksConnectionQuery,
} from 'src/gql/generated'
import { makeProjectLink } from 'src/uikit/Link/Project'
import { useRouter } from 'next/router'
import { useTasksFilter } from 'src/hooks/useTasksFilter'

type ProjectViewProps = {
  project: ProjectFragment
}

const TASKS_PER_PAGE = 10

export const ProjectView: React.FC<ProjectViewProps> = ({
  project,
  ...other
}) => {
  const router = useRouter()
  const page = Number(router.query.page) || 1
  const skip = (page - 1) * TASKS_PER_PAGE

  const name = project.Resource?.name || project.name || ''

  const { where } = useTasksFilter({
    baseWhere: {
      projectId: {
        equals: project.id,
      },
    },
  })

  const tasksResponse = useTasksConnectionQuery({
    variables: {
      orderBy: {
        updatedAt: SortOrder.DESC,
      },
      where,
      first: TASKS_PER_PAGE,
      skip,
    },
  })

  const tasks = tasksResponse.data?.tasks ?? []
  const total = tasksResponse.data?.tasksCount ?? 0

  return (
    <>
      <NextSeo
        title={name}
        description={
          name
            ? `Project "${name}" — tasks, progress, and collaboration details.`
            : ''
        }
        canonical={makeProjectLink(project)}
      />
      <ProjectViewStyled {...other}>
        <Typography variant="title">{name}</Typography>

        <TasksView
          objects={tasks}
          page={page}
          limit={TASKS_PER_PAGE}
          total={total}
        />
      </ProjectViewStyled>
    </>
  )
}
