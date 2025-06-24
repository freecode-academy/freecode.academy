import React from 'react'

// import Typography from 'material-ui/Typography'

import { ProjectsList } from './List'

import {
  ProjectsConnectionProjectFragment,
  ProjectsConnectionQueryVariables,
} from 'src/gql/generated'

import Pagination from 'src/components/Pagination'
import { ProjectsViewStyled } from './styles'
// import Link from 'next/link'
// import { ProjectsConnectionProjectFragment } from 'src/gql/generated'

export type ProjectsViewProps = {
  objects: ProjectsConnectionProjectFragment[]
  variables?: ProjectsConnectionQueryVariables
  page?: number
  count?: number
  loading: boolean
}

export const ProjectsView: React.FC<ProjectsViewProps> = ({
  page,
  objects: projects,
  variables,
  count = 0,
  ...other
}) => {
  const limit = variables?.first ?? 0

  return (
    <ProjectsViewStyled {...other}>
      <ProjectsList projects={projects} />

      <Pagination limit={limit} total={count} page={page || 1} />
    </ProjectsViewStyled>
  )
}
