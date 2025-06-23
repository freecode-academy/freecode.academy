import React from 'react'

// import Typography from 'material-ui/Typography'

import ProjectsList from './List'

import {
  ProjectsConnectionProjectFragment,
  ProjectsConnectionQueryVariables,
} from 'src/gql/generated'

import Pagination from 'src/components/Pagination'
import Grid from 'src/uikit/Grid'
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

  // const objectsConnection = data?.objectsConnection

  // const { edges, aggregate } = objectsConnection || {}

  // const { count = 0 } = aggregate || {}

  // const projects =
  //   edges
  //     ?.map((n) => n?.node)
  //     .reduce<ProjectsConnectionProjectFragment[]>((current, next) => {
  //       if (next) {
  //         current.push(next)
  //       }

  //       return current
  //     }, []) ?? []

  const output = (
    <Grid item xs={12}>
      <ProjectsList projects={projects} />

      <Pagination
        limit={limit}
        total={count}
        page={page || 1}
        style={{
          marginTop: 20,
        }}
      />
    </Grid>
  )

  const content = (
    <Grid container spacing={8} {...other}>
      <Grid item xs={12}>
        {/* {this.renderFilters()} */}
      </Grid>

      {/* <Grid item xs={12}>
          <Link href="/office/projects/create">
            <a>
              <Typography>Добавить проект</Typography>
            </a>
          </Link>
        </Grid> */}

      {output}
    </Grid>
  )

  return content
}
